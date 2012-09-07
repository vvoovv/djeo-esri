define([
	"dojo/_base/declare"
], function(declare) {

return declare([], {
	
	constructor: function(kwArgs, map) {
		this.map = map;
		// paramStr is actually url
		var url = kwArgs.paramStr ? kwArgs.paramStr : this.url,
			layer = new esri.layers.ArcGISTiledMapServiceLayer(url)
		;
		this._layer = layer;
		this.map.engine.esriMap.addLayer(layer);
	},
	
	init: function() {
		
	}
});

});
