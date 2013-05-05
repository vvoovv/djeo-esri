define([
	"dojo/_base/declare", // declare
	"dojo/_base/array",
	"esri/layers/WebTiledLayer"
], function(declare, array, WebTiledLayer) {

return declare(null, {
	
	init: function() {
		var urlTemplate = this.yFirst ? "row}/${row" : "col}/${row",
			options = {}
		;
		urlTemplate = "/${level}/${" + urlTemplate + "}.png";
		if (this.url.length == 1) {
			urlTemplate = this.url[0] + urlTemplate;
		}
		else {
			var subDomains = [],
				dotIndex,
				url1,
				url2
			;
			// assuming that this.url[..] contains . (dot)
			array.forEach(this.url, function(_url){
				url1 = _url;
				dotIndex = url1.indexOf(".");
				var url3 = url1.substring(0, dotIndex),
					slashIndex = url3.indexOf("/")+2
				;
				url2 = url3.substring(0, slashIndex);
				subDomains.push(url3.substr(slashIndex));
			})
			options.subDomains = subDomains;
			urlTemplate = url2 + "${subDomain}" + url1.substr(dotIndex) + urlTemplate;
		}
		var	tileLayer = new WebTiledLayer(urlTemplate, options);
		this._tileLayer = tileLayer;
		this.map.engine.esriMap.addLayer(tileLayer);
	}
});

});
