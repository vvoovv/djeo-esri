define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array"
], function(declare, lang, array){
	
return declare(null, {
	constructor: function(kwArgs) {
		lang.mixin(this, kwArgs);
	},

	push: function(feature, point) {
		var coords = feature.getCoords(),
			graphic = feature.baseShapes[0],
			geometry = graphic.geometry
		;
		point = feature.map.getCoords(point);
		if (feature.getCoordsType() == "LineString") {
			coords.push(point);
			geometry.insertPoint(0, coords.length-1, esri.geometry.geographicToWebMercator( new esri.geometry.Point(point[0], point[1], {wkid: 4326}) ));
			graphic.setGeometry(geometry);
		}
	},

	set: function(feature, index, point) {
		var coords = feature.getCoords(),
			geometry = feature.baseShapes[0].geometry
		;
		point = feature.map.getCoords(point);
		if (feature.getCoordsType() == "LineString") {
			coords[index] = point;
			geometry.setPoint(0, index, point)
		}
	},

	_setShapes: function(feature) {
		var pathString = this.engine.factories.Placemark.makePathString(feature.getCoords(), 1);
		array.forEach(feature.baseShapes, function(shape){
			shape.setShape(pathString);
		});
	}
});

});