define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/Evented",
	"dojo/aspect",
	"djeo/_base",
	"esri/toolbars/edit"
], function(declare, lang, Evented, aspect, djeo) {

return declare([Evented], {
	
	// feature currently being edited
	feature: null,
	
	// registry of features
	featureReg: null,
	
	numFeatures: 0,
	
	init: function() {
		// initialize the registry of features
		this.featureReg = {};
		// fill the registry of features in
		djeo.forEach(this.features, function(feature){
			this.featureReg[feature.id] = 1;
			this.numFeatures++;
		}, this);
		
		this.editToolbar = new esri.toolbars.Edit(this.map.engine.esriMap, {
			allowAddVertices: true,
			allowDeleteVertices: false
		});
		aspect.after(this.editToolbar, "onGraphicMoveStop", lang.hitch(this, function(graphic){
			// MOVE is applicable for points only
			var geometry = esri.geometry.webMercatorToGeographic(graphic.geometry),
				feature = graphic._djeo
			;
			// assigning new coords
			feature.coords = [geometry.x, geometry.y];
			this.emit("edit", {
				feature: feature
			});
		}), true);
		aspect.after(this.editToolbar, "onVertexMoveStop", lang.hitch(this, function(graphic, vertexInfo){
			// EDIT_VERTICES is applicable for LineString, MultiLineString, Polygon, MultiPolygon
			var geometry = esri.geometry.webMercatorToGeographic(graphic.geometry),
				feature = graphic._djeo,
				type = feature.getType(),
				emitObj = {
					feature: feature,
					pointIndex: vertexInfo.pointIndex,
					isNew: vertexInfo.isGhost
				}
			;
			switch (type) {
				case "LineString":
					feature.coords = geometry.paths[0];
					break;
				case "MultiLineString":
					feature.coords = geometry.paths;
					break;
				case "Polygon":
					feature.coords = geometry.rings;
					break;
				case "MultiPolygon":
					feature.coords = [geometry.rings];
					break;
			}
			if (type != "LineString") {
				emitObj.segmentIndex = vertexInfo.segmentIndex;
			}
			this.emit("edit", emitObj);
		}), true)
	},

	enable: function(enable) {
		if (enable === undefined) enable = true;
		if (enable) {
			this._con = aspect.after(
				this.map.engine.esriMap,
				"onClick",
				lang.hitch(this, this._onClick),
				true
			);
			if (this.numFeatures == 1) {
				// activate the only feature immediately
				var feature = this.features[0],
					editMode = feature.isPoint() ? esri.toolbars.Edit.MOVE : esri.toolbars.Edit.EDIT_VERTICES
				;
				this.editToolbar.activate(editMode, feature.baseShapes[0]);
				this.feature = feature;
			}
		}
		else {
			this._con.remove();
			this.editToolbar.deactivate();
		}
	},
	
	_onClick: function(event) {
		var graphic = event.graphic;
		if (graphic) {
			var feature = graphic._djeo,
				fid = feature.id
			;
			if (this.featureReg[fid]) {
				var editMode = feature.isPoint() ? esri.toolbars.Edit.MOVE : esri.toolbars.Edit.EDIT_VERTICES;
				this.editToolbar.activate(editMode, graphic);
				this.feature = feature;
			}
			else if (this.numFeatures != 1) {
				this.editToolbar.deactivate();
			}
		}
		else if (this.feature && this.numFeatures != 1) {
			this.editToolbar.deactivate();
			this.feature = null;
		}
	}

});

});