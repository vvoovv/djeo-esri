define([
	"require",
	"dojo/_base/declare", // declare
	"dojo/_base/lang", // mixin, hitch, partial, isString
	"dojo/_base/array", // forEach
	"dojo/aspect", // after
	"djeo/Engine",
	"./Placemark",
	"djeo/_tiles"
], function(require, declare, lang, array, aspect, Engine, Placemark, supportedLayers){
	
// atching supportedLayers
// arcgis_webtiles is implemented differently here than in the other engines
supportedLayers = lang.mixin({}, supportedLayers);
supportedLayers["arcgis_webtiles"] = ["./ArcgisWebTiles", {}];

var engineEvents = {
	click: "onClick",
	mouseover: "onMouseOver",
	mouseout: "onMouseOut"
},
// class to be defined after esri namespace is available
EmptyLayer
;

function _defineClasses() {
	EmptyLayer = declare([esri.layers.DynamicMapServiceLayer], {
	
		constructor: function(esriMap) {
			this.spatialReference = esriMap.spatialReference;
			this.initialExtent = this.fullExtent = esriMap.extent;
			this.loaded = true;
			this.onLoad(this);
		},

		getImageUrl: function(extent, width, height, callback) {
			// dp nothing here
		}
	});
}

return declare([Engine], {
	
	esriMap: null,
	
	_eventRegistry: null,

	constructor: function(kwArgs) {
		this._require = require;
		// set ignored dependencies
		lang.mixin(this.ignoredDependencies, {"Highlight": 1, "Tooltip": 1});
		this._eventRegistry = {};
		this._supportedLayers = supportedLayers;
		// initialize basic factories
		this._initBasicFactories(Placemark({
			map: this.map,
			engine: this
		}));
	},
	
	initialize: function(/* Function */readyFunction) {
		// Due to the ArcGIS Javascript API is implemented
		// we have to load layers first.
		// The code that loads layers, is borrowed and partially modified from Map._onEngineReady
		var map = this.map,
			layers = map.layers,
			requireModules = []
		;
		if (layers) {
			if (lang.isString(layers)) {
				layers = [layers];
			}
			// processing layer ids;
			// finding module id for the layers
			var _layers = [];
			array.forEach(layers, function(layer){
				if (lang.isString(layer)) {
					if (this.isValidLayerId(layer)) {
						var layerModuleId = this.getLayerModuleId(layer);
						if (layerModuleId) {
							requireModules.push(layerModuleId);
						}
						_layers.push(layer);
					}
				}
				else {
					_layers.push(layer);
				}
			}, this);
			layers = _layers;
			map._layerLoaded = true;
		};
		requireModules.push("esri/jsapi");
		
		require(
			{
				packages: [
					{location:'../../djeo-esri/library/3.1/jsapi/js/esri',name:'esri'},
					{location:'../../djeo/dojox',name:'dojox'}
				]
			},
			requireModules,
			lang.hitch(this, function() {
				// checking if classes are defined
				if (!EmptyLayer) {
					_defineClasses();
				}
				map.projection = "EPSG:4326";
				this.spatialReference = {wkid:4326};
				var esriMap = new esri.Map(map.container, {
					extent: esri.geometry.geographicToWebMercator(new esri.geometry.Extent({
						xmin: -180,
						ymin: -75,
						xmax: 75,
						ymax: 71.91,
						spatialReference: this.spatialReference
					})),
					wrapAround180: true,
					slider: false,
					logo: false
				});
				this.esriMap = esriMap;
				
				aspect.after(esriMap, "onLoad", function(){
					readyFunction();
				});
				
				// load layers
				if (layers && layers.length) {
					for (var i=0; i<layers.length; i++) {
						var layer = layers[i];
						if (lang.isString(layer) && this.getLayerModuleId(layer)) {
							// arguments[i] is layer constructor
							this.setLayerConstructor(layer, arguments[i]);
						}
						this.enableLayer(layer, true);
					}
				}
				else {
					esriMap.addLayer(new EmptyLayer(esriMap));
				}
		}));
	},

	prepare: function() {
		var esriMap = this.esriMap;
		this.areas = esriMap.addLayer(new esri.layers.GraphicsLayer());
		this.lines = esriMap.addLayer(new esri.layers.GraphicsLayer());
		this.points = esriMap.addLayer(new esri.layers.GraphicsLayer());
		this.factories.Placemark.init();
	},

	createContainer: function(feature) {
	},
	
	appendChild: function(child, feature) {
		this._getParentLayer(feature).add(child);
	},
	
	_getParentLayer: function(feature) {
		var graphicsLayer;
		if (feature.isPoint()) {
			graphicsLayer = this.points;
		}
		else if (feature.isArea()) {
			graphicsLayer = this.areas;
		}
		else {
			graphicsLayer = this.lines;
		}
		return graphicsLayer;
	},

	onForFeature: function(feature, event, method, context) {
		// check if we already have a listener for the event
		if (!this._eventRegistry[event]) {
			this._eventRegistry[event] = {
				listener: {},
				features: {}
			}
		}
		var listener = this._eventRegistry[event].listener,
			featureType = feature.isPoint() ? "points" : (feature.isArea() ? "areas" : "lines")
		;
		if (!listener[featureType]) {
			listener[featureType] = aspect.after(
				this[featureType],
				engineEvents[event],
				lang.hitch(this, lang.partial(this._onEvent, event)),
				true
			)
		}

		var features = this._eventRegistry[event].features;
		if (!features[feature.id]) {
			features[feature.id] = [];
		}
		var handlerInfo = [method, context];
		features[feature.id].push(handlerInfo);
		array.forEach(feature.baseShapes, function(shape){
			if (!shape._djeo) shape._djeo = feature;
		});
		return [feature.id, event, handlerInfo];
	},
	
	_onEvent: function(eventType, event) {
		var graphic = event.graphic;
		if (graphic && graphic._djeo) {
			var feature = graphic._djeo;
			var handlers = this._eventRegistry[eventType].features[feature.id];
			if (handlers) {
				// execute event handlers
				array.forEach(handlers, function(handler){
					var method = handler[0],
						context = handler[1]
					;
					method.call(context, {
						type: eventType,
						nativeEvent: event,
						feature: feature
					});
				});
			}
		}
	},
	
	disconnect: function(connection) {
		var fid = connection[0],
			event = connection[1],
			handler = connection[2],
			features = this._eventRegistry[event].features,
			handlers = features[fid]
		;
		// finding position of handlerInfo in the array of handlers
		for(var i=0; i<handlers.length; i++) {
			if (handler===handlers[i]) break;
		}
		handlers.splice(i, 1);
		if (handlers.length == 0) {
			delete features[fid];
		}
	},
	
	zoomTo: function(extent) {
		this.esriMap.setExtent(
			esri.geometry.geographicToWebMercator(new esri.geometry.Extent({
				xmin: extent[0],
				ymin: extent[1],
				xmax: extent[2],
				ymax: extent[3],
				spatialReference: this.spatialReference
			})),
			true
		);
	},
	
	destroy: function() {
		this.esriMap.destroy();
		delete this.esriMap;
	},
	
	_setCamera: function(kwArgs) {
		var center = new esri.geometry.Point(kwArgs.center, this.spatialReference);
		this.esriMap.centerAndZoom(esri.geometry.geographicToWebMercator(center), kwArgs.zoom);
	},
	
	_set_center: function(center) {
		center = new esri.geometry.Point(center, this.spatialReference);
		this.esriMap.centerAt(esri.geometry.geographicToWebMercator(center));
	},
	
	_get_center: function() {
		var center = esri.geometry.webMercatorToGeographic(this.esriMap.extent.getCenter());
		return [center.x, center.y];
	},
	
	_set_zoom: function(zoom) {
		this.esriMap.setLevel(zoom);
	},
	
	_get_zoom: function() {
		return this.esriMap.getLevel();
	},
	
	_appendDiv: function(div) {
		// we append the div to the the firts child of this.map.container (map_root)
		this.map.container.children[0].appendChild(div);
	}
});

});