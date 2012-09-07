/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define(["dijit","dojo","dojox","dojo/require!esri/tasks/_task,esri/tasks/gp"],function(_1,_2,_3){_2.provide("esri.tasks.PrintTask");_2.require("esri.tasks._task");_2.require("esri.tasks.gp");_2.declare("esri.tasks.PrintTask",esri.tasks._Task,{constructor:function(_4,_5){this.url=_4;this.printGp=new esri.tasks.Geoprocessor(this.url);this._handler=_2.hitch(this,this._handler);if(_5&&_5.async){this.async=_5.async;}},_handler:function(_6,io,_7,_8,_9){try{var _a;if(this.async){if(_6.jobStatus==="esriJobSucceeded"){this.printGp.getResultData(_6.jobId,"Output_File",_2.hitch(this,function(_b){_a=_b.value;this._successHandler([_a],"onComplete",_7,_9);}));}else{this._errorHandler(err,_8,_9);}}else{_a=_6[0].value;this._successHandler([_a],"onComplete",_7,_9);}}catch(err){this._errorHandler(err,_8,_9);}},execute:function(_c,_d,_e){var _f=this._handler,_10=this._errorHandler;var _11=_c.template||new esri.tasks.PrintTemplate();var _12=_11.exportOptions;var _13;if(_12){var _14=_12.width;var _15=_12.height;var dpi=_12.dpi;_13={outputSize:[_14,_15],dpi:dpi};}if(_11.preserveScale===false){this._preserveScale=false;}else{this._preserveScale=true;}var _16=_11.layoutOptions;var _17,_18=[];if(_16){this.legendAll=false;if(!_16.legendLayers){this.legendAll=true;}else{_2.forEach(_16.legendLayers,function(_19,idx){var _1a={};_1a.id=_19.layerId;if(_19.subLayerIds){_1a.subLayerIds=_19.subLayerIds;}_18.push(_1a);});}var _1b,_1c;if(_16.scalebarUnit==="Miles"||_16.scalebarUnit==="Kilometers"){_1b="Kilometers";_1c="Miles";}else{if(_16.scalebarUnit==="Meters"||_16.scalebarUnit==="Feet"){_1b="Meters";_1c="Feet";}}var _1d={Miles:"mi",Kilometers:"km",Yards:"yd",Feet:"ft",Meters:"m"};_17={titleText:_16.titleText,authorText:_16.authorText,copyrightText:_16.copyrightText,scaleBarOptions:{metricUnit:_1b,metricLabel:_1d[_1b],nonMetricUnit:_1c,nonMetricLabel:_1d[_1c]},legendOptions:{operationalLayers:_18}};}var map=_c.map;var _1e=this._getPrintDefinition(map);if(_c.outSpatialReference){_1e.mapOptions.spatialReference=_c.outSpatialReference.toJson();}_2.mixin(_1e,{exportOptions:_13,layoutOptions:_17});if(this.allLayerslegend){_2.mixin(_1e.layoutOptions,{legendOptions:{operationalLayers:this.allLayerslegend}});}var _1f=_2.toJson(esri._sanitize(_1e,true));var _20=_11.format;var _21=_11.layout;var _22={Web_Map_as_JSON:_1f,Format:_20,Layout_Template:_21};if(_c.extraParameters){_22=_2.mixin(_22,_c.extraParameters);}var dfd=new _2.Deferred(esri._dfdCanceller);var _23=function(r,i){_f(r,i,_d,_e,dfd);};var _24=function(r){_10(r,_e,dfd);};if(this.async){dfd._pendingDfd=this.printGp.submitJob(_22,_23,null,_24);}else{dfd._pendingDfd=this.printGp.execute(_22,_23,_24);}return dfd;},onComplete:function(){},_multipointLayer:function(){this.layerDefinition={name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}};this.featureSet={geometryType:"esriGeometryMultipoint",features:[]};},_polygonLayer:function(){this.layerDefinition={name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}};this.featureSet={geometryType:"esriGeometryPolygon",features:[]};},_pointLayer:function(){this.layerDefinition={name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}};this.featureSet={geometryType:"esriGeometryPoint",features:[]};},_polylineLayer:function(){this.layerDefinition={name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}};this.featureSet={geometryType:"esriGeometryPolyline",features:[]};},_createFeatureCollection:function(_25){var _26=new this._polygonLayer();var _27=new this._polylineLayer();var _28=new this._pointLayer();var _29=new this._multipointLayer();var _2a;_2.forEach(_25.graphics,function(g,idx){_2a=g.toJson();if(_2a.symbol&&_2a.symbol.outline&&_2a.symbol.outline.color&&_2a.symbol.outline.color[3]){_2a.symbol.outline.color[3]=255;}if(g.geometry.type==="polygon"){_26.featureSet.features.push(_2a);if(_25.renderer){_26.layerDefinition.drawingInfo.renderer=_25.renderer.toJson();}else{delete _26.layerDefinition.drawingInfo;}if(_25.fields){_26.layerDefinition.fields=_25.fields;}}else{if(g.geometry.type==="polyline"){_27.featureSet.features.push(_2a);if(_25.renderer){_27.layerDefinition.drawingInfo.renderer=_25.renderer.toJson();}else{delete _27.layerDefinition.drawingInfo;}if(_25.fields){_27.layerDefinition.fields=_25.fields;}}else{if(g.geometry.type==="point"){_28.featureSet.features.push(_2a);if(_25.renderer){_28.layerDefinition.drawingInfo.renderer=_25.renderer.toJson();}else{delete _28.layerDefinition.drawingInfo;}if(_25.fields){_28.layerDefinition.fields=_25.fields;}}else{if(g.geometry.type==="multipoint"){_29.featureSet.features.push(_2a);if(_25.renderer){_29.layerDefinition.drawingInfo.renderer=_25.renderer.toJson();}else{delete _29.layerDefinition.drawingInfo;}if(_25.fields){_29.layerDefinition.fields=_25.fields;}}}}}},this);var _2b=[];if(_28.featureSet.features.length>0){_2b.push(_28);}if(_27.featureSet.features.length>0){_2b.push(_27);}if(_26.featureSet.features.length>0){_2b.push(_26);}if(_29.featureSet.features.length>0){_2b.push(_29);}var _2c={layers:_2b};var _2d={id:_25.id,opacity:_25.opacity,featureCollection:_2c};return _2d;},_getPrintDefinition:function(map){var _2e=this._createOperationalLayers(map);var _2f={operationalLayers:_2e};var _30=map.extent,sr=map.spatialReference;if(map.spatialReference._isWrappable()){_30=_30._normalize(true);sr=_30.spatialReference;}var _31={mapOptions:{extent:_30.toJson(),spatialReference:sr.toJson()}};if(this._preserveScale){_2.mixin(_31.mapOptions,{scale:esri.geometry.getScale(map)});}if(map.timeExtent){_2.mixin(_31.mapOptions,{time:[map.timeExtent.startTime.getTime(),map.timeExtent.endTime.getTime()]});}var _32={};_2.mixin(_32,_31,_2f);return _32;},_createOperationalLayers:function(map){var i,_33,_34,_35,_36=[];if(this.legendAll){this.allLayerslegend=[];}else{this.allLayerslegend=null;}for(i=0;i<map.layerIds.length;i++){_33=map.getLayer(map.layerIds[i]);if(!_33.loaded||!_33.visible){continue;}if(_33.credential&&_33.url.indexOf("token=")===-1){_33.url+="?token="+_33.credential.token;}_34=_33.declaredClass;switch(_34){case "esri.layers.ArcGISDynamicMapServiceLayer":var _37=[];if(_33._params.dynamicLayers){var _38=_2.fromJson(_33._params.dynamicLayers);_2.forEach(_38,function(_39,idx){_37.push({id:_39.id,layerDefinition:_39});});}else{_2.forEach(_33.layerInfos,function(_3a,idx){var _3b={id:_3a.id,layerDefinition:{definitionExpression:null,layerTimeOptions:null}};if(_33.layerDefinitions&&_33.layerDefinitions[_3a.id]){_3b.layerDefinition.definitionExpression=_33.layerDefinitions[_3a.id];}if(_33.layerTimeOptions&&_33.layerTimeOptions[_3a.id]){_3b.layerDefinition.layerTimeOptions=_33.layerTimeOptions[_3a.id];}if(_3b.layerDefinition.definitionExpression||_3b.layerDefinition.layerTimeOptions){_37.push(_3b);}});}var _3c;if(_33._params.layers){_3c=_33.visibleLayers;}_35={id:_33.id,url:_33.url,title:_33.id,opacity:_33.opacity,visibleLayers:_3c,layers:_37};_36.push(_35);if(this.allLayerslegend){this.allLayerslegend.push({id:_33.id,subLayerIds:_33.visibleLayers});}break;case "esri.layers.ArcGISImageServiceLayer":_35={id:_33.id,url:_33.url,title:_33.id,opacity:_33.opacity,bandIds:_33.bandIds,compressionQuality:_33.compressionQuality,format:_33.format,interpolation:_33.interpolation};if(_33.mosaicRule){_2.mixin(_35,{mosaicRule:_33.mosaicRule.toJson()});}if(_33.renderingRule){_2.mixin(_35,{renderingRule:_33.renderingRule.toJson()});}_36.push(_35);if(this.allLayerslegend){this.allLayerslegend.push({id:_33.id});}break;case "esri.layers.WMSLayer":_35={id:_33.id,url:_33.url,title:_33.title,opacity:_33.opacity,type:"wms",version:_33.version,transparentBackground:_33.imageTransparency,visibleLayers:_33.visibleLayers};_36.push(_35);if(this.allLayerslegend){this.allLayerslegend.push({id:_33.id,subLayerIds:_33.visibleLayers});}break;case "esri.virtualearth.VETiledLayer":var _3d=_33.mapStyle;if(_3d==="aerialWithLabels"){_3d="Hybrid";}_35={id:_33.id,visibility:_33.visible,type:"BingMaps"+_3d,culture:_33.culture,opacity:_33.opacity};_36.push(_35);break;case "esri.layers.OpenStreetMapLayer":_35={id:_33.id,title:_33.id,type:"OpenStreetMap",opacity:_33.opacity,url:_33.tileServers[0]};_36.push(_35);break;case "esri.layers.WMTSLayer":_35={id:_33.id,url:_33.url,title:_33.id,opacity:_33.opacity,type:"wmts",layer:_33.layerInfos[0].identifier,style:_33.layerInfos[0].style,format:_33.layerInfos[0].format,tileMatrixSet:_33.layerInfos[0].tileMatrixSet};_36.push(_35);break;case "esri.layers.KMLLayer":_35={id:_33.id,title:_33.id,type:"KML",url:_33.url,opacity:_33.opacity};_36.push(_35);if(this.allLayerslegend){this.allLayerslegend.push({id:_33.id});}break;case "esri.layers.MapImageLayer":var _3e=_33.getImages();_2.forEach(_3e,function(_3f,idx){_35={id:_33.id+"_image"+idx,type:"image",title:_33.id,opacity:_33.opacity,extent:_3f.extent.toJson(),url:_3f.href};_36.push(_35);});break;default:if(_33 instanceof esri.layers.TiledMapServiceLayer||_33 instanceof esri.layers.DynamicMapServiceLayer){_35={id:_33.id,url:_33.url,title:_33.id,opacity:_33.opacity};_36.push(_35);}}}for(i=0;i<map.graphicsLayerIds.length;i++){_33=map.getLayer(map.graphicsLayerIds[i]);if(!_33.loaded||!_33.visible){continue;}_34=_33.declaredClass;switch(_34){case "esri.layers.FeatureLayer":if(_33.url){if(_33.credential&&_33.url.indexOf("token=")===-1){_33.url+="?token="+_33.credential.token;}_35={id:_33.id,url:_33.url,title:_33.id,opacity:_33.opacity,minScale:_33.minScale,maxScale:_33.maxScale,layerDefinition:{drawingInfo:{renderer:_33.renderer.toJson()}}};if(_33.getDefinitionExpression()){_2.mixin(_35.layerDefinition,{definitionExpression:_33.getDefinitionExpression()});}if(_33.mode!==2){if(_33.getSelectedFeatures().length>0){var _40=_2.map(_33.getSelectedFeatures(),function(_41){return _41.attributes[_33.objectIdField];});if(_40.length>0&&_33.getSelectionSymbol()){_2.mixin(_35,{selectionObjectIds:_40,selectionSymbol:_33.getSelectionSymbol().toJson()});}}}else{var _42=_2.map(_33.getSelectedFeatures(),function(_43){return _43.attributes[_33.objectIdField];});if(_42.length===0||!_33._params.drawMode){break;}_2.mixin(_35.layerDefinition,{objectIds:_42});var _44=null;if(_33.getSelectionSymbol()){_44=new esri.renderer.SimpleRenderer(_33.getSelectionSymbol());}_2.mixin(_35.layerDefinition.drawingInfo,{renderer:_44&&_44.toJson()});}}else{_35=this._createFeatureCollection(_33);}_36.push(_35);if(this.allLayerslegend){this.allLayerslegend.push({id:_33.id});}break;case "esri.layers.GraphicsLayer":_35=this._createFeatureCollection(_33);_36.push(_35);if(this.allLayerslegend){this.allLayerslegend.push({id:_33.id});}break;default:}}if(map.graphics&&map.graphics.graphics.length>0){_35=this._createFeatureCollection(map.graphics);_36.push(_35);}return _36;}});_2.declare("esri.tasks.PrintParameters",null,{map:null,template:null,outSpatialReference:null,extraParameters:null});_2.declare("esri.tasks.PrintTemplate",null,{label:null,exportOptions:{width:800,height:1100,dpi:96},layoutOptions:null,format:"PNG32",layout:"MAP_ONLY",preserveScale:true});_2.declare("esri.tasks.LegendLayer",null,{layerId:null,subLayerIds:null});});