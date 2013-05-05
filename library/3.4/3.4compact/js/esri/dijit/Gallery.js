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
define("esri/dijit/Gallery",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","esri/kernel","esri/dijit/_TouchBase"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){var _e=_1(null,{declaredClass:"esri.dijit.Gallery",container:null,_items:[],_currentIndex:0,_left:0,_offset:10,_slideDiv:null,_thumbnailStyle:"default",_focusedIndex:null,_selectedIndex:-1,_slideStep:1,_showTitle:true,constructor:function(_f,_10){var i;this.container=_8.byId(_10);this._touchBase=_d(this.container,null);this._slideDiv=_9.create("div",{"class":"slideContainer"},this.container,"first");this.events=[_3.connect(this._touchBase,"onTouchStart",this,this._onTouchStartHandler),_3.connect(this._touchBase,"onTouchMove",this,this._onTouchMoveHandler),_3.connect(this._touchBase,"onTouchEnd",this,this._onTouchEndHandler),_3.connect(this._touchBase,"onclick",this,this._onClickHandler)];this._resizeHandle=_3.connect(window,"onorientationchange",_2.hitch(this,this._onResizeHandler));this._items=_f.items;if(_f.thumbnailStyle&&_f.thumbnailStyle=="small"){this._thumbnailStyle="small";this._offset=4;this._slideStep=3;this._thumbnailWidth=100;}else{this._thumbnailStyle="default";this._offset=10;this._slideStep=1;this._thumbnailWidth=200;}if(_f.showTitle==false){this._showTitle=false;}this.container.setAttribute((document.all?"className":"class"),"esriMobileGallery");var _11,_12;for(i=0;i<this._items.length;i++){var div,_13,_14,img;div=_9.create("div",{"class":"thumbnailcontainer"},this._slideDiv);img=_9.create("img",{"class":"thumbnail",src:this._items[i].thumbnailUrl},div);img._index=i;img._item=this._items[i];_13=_9.create("div",{"class":"title","innerHTML":this._items[i].title},div);_14=_9.create("div",{"class":"title"},div);if(this._thumbnailStyle=="small"){_a.add(div,"small");_a.add(img,"small");_a.add(_13,"small");_a.add(_14,"small");_a.add(this._slideDiv,"small");}if(!this._showTitle){_13.style.display="none";}_12=_b.getContentBox(div).h;if(!_11){_11=_12;}if(_12>_11){_11=_12;}}for(i=0;i<this._slideDiv.childNodes.length;i++){_b.getContentBox(this._slideDiv.childNodes[i],{h:_11});}this._thumbnailWidth=_b.getContentBox(this._slideDiv.childNodes[0]).w;this._slideDiv.style.width=this._items.length*(this._thumbnailWidth+this._offset)+"px";if(window.orientation){if(window.orientation==90||window.orientation==-90){_a.add(this.container,"galleryLandscape");}}this._calculateSlideStep();},startup:function(){this._focusedIndex=0;this.onFocus(this._items[this._focusedIndex]);},destroy:function(){_4.forEach(this.events,_3.disconnect);_3.disconnect(this._resizeHandle);this._touchBase=null;_5.query("img",this.container).forEach(function(_15){_15._index=null;_15._item=null;_9.destroy(_15);_15=null;});this._items=null;_9.destroy(this._slideDiv);_9.destroy(this.container);this.container=this._slideDiv=null;},setFocus:function(_16){var i,il;if(!_16){return;}for(i=0,il=this._items.length;i<il;i++){if(this._items[i]==_16){this._setFocus(i);this.onFocus(this._items[this._focusedIndex]);}}},select:function(_17){var i,il;if(!_17){return;}for(i=0,il=this._items.length;i<il;i++){if(this._items[i]==_17){if(this._selectedIndex!=-1){this.onUnSelect(this._items[this._selectedIndex]);}this._select(i);this.onSelect(this._items[this._selectedIndex]);break;}}},getFocusedItem:function(){return this._items[this._focusedIndex];},getSelectedItem:function(){return this._items[this._selectedIndex];},next:function(){this._next();this._startTransition();this.onFocus(this._items[this._currentIndex]);},previous:function(){this._previous();this._startTransition();this.onFocus(this._items[this._currentIndex]);},getTitleNode:function(_18){var i,il;if(!_18){return;}for(i=0,il=this._items.length;i<il;i++){if(this._items[i]==_18){return this._slideDiv.childNodes[i].childNodes[1];break;}}},getInfoNode:function(_19){var i,il;if(!_19){return;}for(i=0,il=this._items.length;i<il;i++){if(this._items[i]==_19){return this._slideDiv.childNodes[i].childNodes[2];break;}}},showTitle:function(_1a){var i,il;if(!_1a){return;}for(i=0,il=this._items.length;i<il;i++){if(this._items[i]==_1a){this._slideDiv.childNodes[i].childNodes[1].style.display="block";break;}}},hideTitle:function(_1b){var i,il;if(!_1b){return;}for(i=0,il=this._items.length;i<il;i++){if(this._items[i]==_1b){this._slideDiv.childNodes[i].childNodes[1].style.display="none";break;}}},onFocus:function(_1c){},onSelect:function(_1d){},onUnSelect:function(_1e){},_onClickHandler:function(e){if(e.target instanceof HTMLImageElement){var _1f=e.target._index;if(this._selectedIndex!=-1){this.onUnSelect(this._items[this._selectedIndex]);}this._select(_1f);this.onSelect(this._items[this._selectedIndex]);}},_onTouchStartHandler:function(e){this._moveDirection=null;this._left=this._currentIndex*(-(this._thumbnailWidth)-this._offset);this._slideDiv.style.WebkitTransitionDuration="0s";},_onTouchMoveHandler:function(e){if(!this._moveDirection){if(Math.abs(e.curY)>Math.abs(e.curX)){this._moveDirection="vertical";}else{this._moveDirection="horizontal";}}if(this._moveDirection=="vertical"){if(!this._touchBase._preventDefault==false){this._touchBase._preventDefault=false;}return;}else{if(this._moveDirection=="horizontal"){if(!this._touchBase._preventDefault){this._touchBase._preventDefault=true;}var _20=this._left+e.curX;this._slideDiv.style.webkitTransform="translate3d("+_20+"px, 0, 0)";}}},_onTouchEndHandler:function(e){var _21=this._currentIndex;this._slideDiv.style.WebkitTransitionDuration="0.5s";if(e.swipeDirection=="left"){this._next();}else{if(e.swipeDirection=="right"){this._previous();}}this._left=this._currentIndex*(-(this._thumbnailWidth)-this._offset);this._slideDiv.style.webkitTransform="translate3d("+this._left+"px, 0, 0)";if(_21!=this._currentIndex){this.onFocus(this._items[this._currentIndex]);}},_onResizeHandler:function(e){var _22=window.orientation;switch(_22){case 0:_a.remove(this.container,"galleryLandscape");break;case 90:case -90:_a.add(this.container,"galleryLandscape");break;}this._calculateSlideStep();},_startTransition:function(){this._slideDiv.style.WebkitTransitionDuration="0.5s";this._left=this._currentIndex*(-(this._thumbnailWidth)-this._offset);this._slideDiv.style.webkitTransform="translate3d("+this._left+"px, 0, 0)";},_markUnSelected:function(_23){_a.remove(_23,"selected");_a.remove(_23.parentNode,"selected");_a.remove(_23.parentNode.childNodes[1],"selected");_a.remove(_23.parentNode.childNodes[2],"selected");},_markSelected:function(_24){_a.add(_24,"selected");_a.add(_24.parentNode,"selected");_a.add(_24.parentNode.childNodes[1],"selected");_a.add(_24.parentNode.childNodes[2],"selected");},_next:function(){if(this._currentIndex+this._slideStep<this._items.length){this._currentIndex+=this._slideStep;this._focusedIndex=this._currentIndex;}},_previous:function(){if(this._currentIndex-this._slideStep>=0){this._currentIndex-=this._slideStep;}this._focusedIndex=this._currentIndex;},_setFocus:function(_25){this._focusedIndex=_25;this._currentIndex=Math.floor(_25/this._slideStep)*this._slideStep;this._startTransition();},_select:function(_26){if(this._selectedIndex!=-1){this._markUnSelected(this._slideDiv.childNodes[this._selectedIndex].childNodes[0]);}this._selectedIndex=_26;this._markSelected(this._slideDiv.childNodes[this._selectedIndex].childNodes[0]);},_calculateSlideStep:function(){var _27=_b.getContentBox(this.container);var _28=Math.floor((_27.w+this._offset)/(this._thumbnailWidth+this._offset));if(_28>=1){var _29=_27.w-(this._thumbnailWidth+this._offset)*_28;if(_29>0){this._slideDiv.style.marginLeft=Math.floor(_29/2)+"px";}else{this._slideDiv.style.marginLeft="0px";}this._slideStep=_28;}else{this._slideStep=1;}if(this._selectedIndex!=-1){this._setFocus(this._selectedIndex);}else{this._setFocus(this._focusedIndex);}}});if(_6("extend-esri")){_2.setObject("dijit.Gallery",_e,_c);}return _e;});