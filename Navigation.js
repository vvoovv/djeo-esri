define([
	"dojo/_base/declare",
	"dojo/_base/lang", // hitch
	"dojo/aspect" // after
], function(declare, lang, aspect) {

return declare(null, {

	enable: function(enable) {
		if (enable === undefined) enable = true;
		var engine = this.map.engine,
			esriMap = engine.esriMap
		;
		if (enable) {
			aspect.after(esriMap, "onZoomEnd", lang.hitch(this, this._onZoom), true);
			//ymap.enableDragging();
			//ymap.enableDblClickZoom();
			//ymap.enableScrollZoom();
		}
		else {
			//ymap.disableScrollZoom();
			//ymap.disableDblClickZoom();
			//ymap.disableDragging();
		}
	}
});

});