define([
	"dojo/_base/declare", // declare
	"dojo/_base/lang", // mixin, isObject
	"dojo/_base/array", // forEach
	"dojo/_base/Color",
	"djeo/_base",
	"djeo/util/_base",
	"djeo/common/Placemark"
], function(declare, lang, array, Color, djeo, u, P) {
	
var textAligns,
	fontConsts,
		fontAttrs = {
		family: 1,
		size: 1,
		weight: 1,
		style: 1,
		variant: 1
	},
	fontConstsMethods = {
		style: "setStyle",
		variant: "setVariant",
		weight: "setWeight"
	}
;

// helper function
function _createSimpleLineSymbol(stroke, strokeOpacity, strokeWidth) {
	var outlineColor = new Color(stroke);
	if (strokeOpacity!==undefined) {
		outlineColor.a = strokeOpacity;
	}
	return new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, outlineColor, strokeWidth);
}

// helper function
function _updateSimpleLineSymbol(symbol, stroke, strokeOpacity, strokeWidth) {
	if (stroke || strokeOpacity!==undefined) {
		var color = stroke ? new Color(stroke) : outline.color;
		if (strokeOpacity!==undefined) {
			color.a = strokeOpacity
		}
		symbol.setColor(color);
	}
	if (strokeWidth!==undefined) {
		symbol.setWidth(strokeWidth);
	}
}

function makePoint(coords) {
	return esri.geometry.geographicToWebMercator( new esri.geometry.Point(coords[0], coords[1], {wkid: 4326}) );
};

var Placemark = declare([P], {
	
	constructor: function(kwArgs) {
		lang.mixin(this, kwArgs);
	},
	
	init: function() {
		var s = esri.symbol,
			t = s.TextSymbol,
			f = s.Font,
			esriMap = this.engine.esriMap
		;
		// filling textAligns in
		textAligns = {
			start: t.ALIGN_START,
			middle: t.ALIGN_MIDDLE,
			end: t.ALIGN_END
		}
		// filling font constants in
		fontConsts = {
			style: {
				normal: f.STYLE_NORMAL,
				italic: f.STYLE_ITALIC,
				oblique: f.STYLE_OBLIQUE
			},
			variant: {
				normal: f.VARIANT_NORMAL,
				"small-caps": f.VARIANT_SMALLCAPS
			},
			weight: {
				normal: f.WEIGHT_NORMAL,
				bold: f.WEIGHT_BOLD,
				bolder: f.WEIGHT_BOLDER,
				lighter: f.WEIGHT_LIGHTER
			}
		}

		this.text = esriMap.addLayer(new esri.layers.GraphicsLayer());
	},
	
	remove: function(feature) {
		var graphic = feature.baseShapes[0],
			graphicsLayer = this.engine._getParentLayer(feature)
		;
		graphicsLayer.remove(graphic);
	},
	
	show: function(feature, show) {
		var graphic = feature.baseShapes[0];
		if (show) graphic.show();
		else graphic.hide();
	},
	
	makePoint: function(feature, coords) {
		// do nothing
		// point shape are created in this.applyPointStyle
		return null;
	},
	
	makeLineString: function(feature, coords) {
		var polyline = new esri.geometry.Polyline({
			paths: [coords],
			spatialReference: this.map.engine.spatialReference
		});
		return new esri.Graphic(esri.geometry.geographicToWebMercator(polyline));
	},

	makeMultiLineString: function(feature, coords) {
		var polyline = new esri.geometry.Polyline({
			paths: coords,
			spatialReference: this.map.engine.spatialReference
		});
		return new esri.Graphic(esri.geometry.geographicToWebMercator(polyline));
	},

	makePolygon: function(feature, coords) {
		var polygon = new esri.geometry.Polygon({
			rings: coords,
			spatialReference: this.map.engine.spatialReference
		});
		return new esri.Graphic(esri.geometry.geographicToWebMercator(polygon));
	},
	
	makeMultiPolygon: function(feature, coords) {
		// reducing array depth of coords by one
		var _coords = [];
		array.forEach(coords, function(c1){
			array.forEach(c1, function(c2){
				_coords.push(c2);
			});
		});
		return this.makePolygon(feature, _coords);
	},

	applyPointStyle: function(feature, calculatedStyle, coords) {
		var specificStyle = calculatedStyle.point,
			specificShapeStyle = P.getSpecificShapeStyle(calculatedStyle.points, this.specificStyleIndex),
			graphic = feature.baseShapes[0],
			shapeType = P.get("shape", calculatedStyle, specificStyle, specificShapeStyle),
			src = P.getImgSrc(calculatedStyle, specificStyle, specificShapeStyle),
			isVectorShape = true,
			scale = P.getScale(calculatedStyle, specificStyle, specificShapeStyle),
			symbol = graphic ? graphic.symbol : new esri.symbol.PictureMarkerSymbol();
		;
		
		if (!shapeType && src) isVectorShape = false;
		else if (!P.shapes[shapeType] && !graphic)
			// set default value for the shapeType only if we haven't already styled the feature (!graphic)
			shapeType = P.defaultShapeType;
		
		var iconUrl = this._getIconUrl(isVectorShape, shapeType, src);
		if (iconUrl) symbol.setUrl(iconUrl);

		var size = isVectorShape ? P.getSize(calculatedStyle, specificStyle, specificShapeStyle) : P.getImgSize(calculatedStyle, specificStyle, specificShapeStyle);
		if (size) {
			var anchor = isVectorShape ? [size[0]/2, size[1]/2] : P.getAnchor(calculatedStyle, specificStyle, specificShapeStyle, size);
			// anchor in ArcGIS is relative to the center of the image; y axis is pointing upwards
			anchor = [-anchor[0] + size[0]/2, anchor[1] - size[1]/2];
			symbol.setWidth(scale*size[0]);
			symbol.setHeight(scale*size[1]);
			symbol.setOffset(scale*anchor[0], scale*anchor[1]);
		}
		else if (graphic) {
			// check if we can apply relative scale (rScale)
			var rScale = P.get("rScale", calculatedStyle, specificStyle, specificShapeStyle);
			if (rScale !== undefined) {
				symbol.setWidth(rScale*symbol.width);
				symbol.setHeight(rScale*symbol.height);
				symbol.setOffset(rScale*symbol.xoffset, rScale*symbol.yoffset);
			}
		}

		if (graphic) {
			graphic.setSymbol(symbol);
		}
		else {
			var heading = feature.orientation;
			if (heading !== undefined) {
				if (lang.isObject(heading)) heading = heading.heading;
				symbol.setAngle(u.radToDeg(heading));
			}
			feature.baseShapes[0] = new esri.Graphic(makePoint(coords), symbol);
		}
	},
	
	applyLineStyle: function(feature, calculatedStyle, coords) {
		var specificStyle = calculatedStyle.line,
			specificShapeStyle = P.getSpecificShapeStyle(calculatedStyle.lines, this.specificStyleIndex),
			graphic = feature.baseShapes[0],
			stroke = P.get("stroke", calculatedStyle, specificStyle, specificShapeStyle),
			strokeOpacity = P.get("strokeOpacity", calculatedStyle, specificStyle, specificShapeStyle),
			strokeWidth = P.get("strokeWidth", calculatedStyle, specificStyle, specificShapeStyle),
			symbol = graphic.symbol
		;

		if (symbol) {
			if (stroke || strokeWidth!==undefined || strokeOpacity!==undefined) {
				_updateSimpleLineSymbol(symbol, stroke, strokeOpacity, strokeWidth);
			}
		}
		else {
			symbol = _createSimpleLineSymbol(stroke, strokeOpacity, strokeWidth);
		}

		graphic.setSymbol(symbol);
	},
	
	applyPolygonStyle: function(feature, calculatedStyle, coords) {
		var specificStyle = calculatedStyle.polygon,
			graphic = feature.baseShapes[0],
			fill = P.get("fill", calculatedStyle, specificStyle),
			fillOpacity = P.get("fillOpacity", calculatedStyle, specificStyle),
			stroke = P.get("stroke", calculatedStyle, specificStyle),
			strokeOpacity = P.get("strokeOpacity", calculatedStyle, specificStyle),
			strokeWidth = P.get("strokeWidth", calculatedStyle, specificStyle),
			symbol = graphic.symbol
		;

		if (symbol) {
			if (fill || fillOpacity !== undefined) {
				var color = fill ? new Color(fill) : symbol.color;
				if (fillOpacity !== undefined) {
					color.a = fillOpacity;
				}
				symbol.setColor(color);
			}
			if (strokeWidth === 0) {
				symbol.setOutline(null);
			}
			else if (stroke || strokeWidth || strokeOpacity!==undefined) {
				var outline = symbol.outline;
				if (outline) {
					_updateSimpleLineSymbol(outline, stroke, strokeOpacity, strokeWidth);
				}
				else if (strokeWidth) {
					outline = _createSimpleLineSymbol(stroke, strokeOpacity, strokeWidth);
				}
				symbol.setOutline(outline);
			}
		}
		else {
			var fillColor = new Color(fill);
			if (fillOpacity !== undefined) {
				fillColor.a = fillOpacity;
			}
			symbol = new esri.symbol.SimpleFillSymbol(
				esri.symbol.SimpleFillSymbol.STYLE_SOLID,
				strokeWidth ? _createSimpleLineSymbol(stroke, strokeOpacity, strokeWidth) : null,
				fillColor
			);
		}

		graphic.setSymbol(symbol);
	},
	
	makeText: function(feature, calculatedStyle) {
		if (feature.textShapes) {
			array.forEach(feature.textShapes, function(t) {
				this.text.remove(t);
			}, this);
		}

		var specificStyle;
		if (feature.isPoint()) {
			specificStyle = calculatedStyle.point;
		}
		else if (feature.isArea()) {
			specificStyle = calculatedStyle.area;
		}
		var textStyle = P.get("text", calculatedStyle, specificStyle);
		if (!textStyle) return;

		var label = textStyle.label || this._getLabel(feature, textStyle);

		if (label) {
			feature.textShapes = [];
			// ts states for "text style"
			feature.reg.ts = textStyle;
			
			// halo is ignored
			var graphic = this._makeTextShape(feature, label, textStyle);
			this.text.add(graphic);
			feature.textShapes.push(graphic);
		}
	},
	
	_makeTextShape: function(feature, label, textStyle) {
		var createShape = true,
			align
		;
	
		if (feature.isPoint()) {
			if (textStyle.hAlign) {
				align = textStyle.hAlign;
			}
		}
		else if (feature.isArea()) {
			align = "middle";
		}
		else {
			createShape = false;
		}
		
		if (createShape) {
			var textSymbol = new esri.symbol.TextSymbol(label),
				// feature.reg.cs is calculatedStyle
				scale = P.getScale(feature.reg.cs),
				dx = ("dx" in textStyle) ? scale*textStyle.dx : 0,
				dy = ("dy" in textStyle) ? scale*textStyle.dy : 0,
				fill = textStyle.fill
			;
			
			if (align && textAligns[align]) {
				textSymbol.setAlign(textAligns[align]);
			}

			if (fill) {
				textSymbol.setColor(new Color(fill));
			}
			
			if (dx || dy) {
				textSymbol.setOffset(dx, dy);
			}
			
			var font;
			for (var attr in fontAttrs) {
				if (attr in textStyle) {
					if (!font) font = new esri.symbol.Font();
					// check if attr can accept only predefined set of values
					if (fontConsts[attr]) {
						if (fontConsts[attr][ textStyle[attr] ]) {
							// calling f.setStyle or f.setWeight or f.setVariant
							font[fontConstsMethods[attr]]( fontConsts[attr][ textStyle[attr] ] );
						}
					}
					else if (attr == "size") {
						font.setSize(scale * textStyle[attr]);
					}
					else if (attr == "family") {
						font.setFamily(textStyle[attr])
					}
				}
			}
			if (font) {
				textSymbol.setFont(font)
			}
			
			//this._makeFont(textSymbol, textStyle, P.getScale(feature.reg.cs));
			
			var coords = feature.getCoords(),
				graphic = new esri.Graphic(
					makePoint(coords),
					textSymbol
				)
			;
			return graphic;
		}
	},
	
	setCoords: function(coords, feature) {
		var esriPoint = makePoint(coords);
		feature.baseShapes[0].setGeometry(esriPoint);
		if (feature.textShapes) {
			feature.textShapes[0].setGeometry(esriPoint);
		}
	},
	
	setOrientation: function(o, feature) {
		// orientation is actually heading
		var graphic = feature.baseShapes[0],
			symbol = graphic.symbol
		;
		symbol.setAngle(u.radToDeg(o));
		graphic.setSymbol(symbol);
	}
});

Placemark.makePoint = makePoint;

return Placemark;

});
