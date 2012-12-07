define([
	"dojo/_base/declare", // declare
	"./_TiledWebMap"
], function(declare, _TiledWebMap) {

return declare(null, {
	
	init: function() {
		var tileLayer = new _TiledWebMap({
			url: this.url,
			yFirst: this.yFirst
		});
		this._tileLayer = tileLayer;
		this.map.engine.esriMap.addLayer(tileLayer);
	}
});

});
