define([
	"dojo/_base/declare"
], function(declare) {

return declare(null, {
	
	init: function() {

	},

	process: function(event){
		var feature = event.feature,
			cs = feature.state.cs,
			iw = this.map.engine.esriMap.infoWindow,
			content = cs.info ? cs.info(feature) : this.content(feature),
			title = feature.get("infoTitle")
		;
		iw.setTitle(title ? title : "&nbsp;");
		iw.setContent(content);
		iw.show(event.nativeEvent.mapPoint);
	}

});

});