define([
	"dojo/_base/declare",
	"esri/layers/ArcGISTiledMapServiceLayer"
], function(declare, ArcGISTiledMapServiceLayer) {

return declare([], {
	
	constructor: function(kwArgs, map) {
		this.map = map;
		// paramStr is actually url
		var url = kwArgs.paramStr ? kwArgs.paramStr : this.url,
			layer = new ArcGISTiledMapServiceLayer(url)
		;
		this._layer = layer;
		this.map.engine.esriMap.addLayer(layer);
	},
	
	init: function() {
		
	}
});

});
