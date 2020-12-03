// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/NumberIndicator/SingleIndicator.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"header drag-masker"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"tr"\x3e\r\n\r\n\t\t\x3cdiv class\x3d"flex-in-left"\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.ifValue}" class\x3d"labelTip flex-in-left-div textOverFlow"\x3e${nls.ifValue}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"compareDiv"\x3e\r\n\t\t        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"operator"\x3e\r\n\t\t\t        \x3coption value\x3d"greater"\x3e${nls.numberOperatorIsGreaterThan}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"smaller"\x3e${nls.numberOperatorIsLessThan}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"between"\x3e${nls.numberOperatorIsBetween}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"equal"\x3e${nls.numberOperatorIsEqual}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"notEqual"\x3e${nls.numberOperatorIsNotEqual}\x3c/option\x3e\r\n\t\t        \x3c/select\x3e\r\n        \t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"flex-in-right"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left-div compareContainer"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"oneValueDiv"\x3e\r\n\t\t\t\t\t\x3cinput class\x3d"longValue" type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" required\x3d"true" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"compareValue" /\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"display: none;" class\x3d"compareContainer" data-dojo-attach-point\x3d"twoValueDiv"\x3e\r\n\t\t\t\t\t\x3cinput class\x3d"shortValue" type\x3d"text"data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"compareValue1" /\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"textOverFlow" title\x3d"${nls.and}"\x3e${nls.and}\x3c/span\x3e\r\n\t\t\t\t\t\x3cinput class\x3d"shortValue" type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"compareValue2" /\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_removeIndicator" class\x3d"close-div close"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\t\r\n\t\x3c/div\x3e\r\n\t\r\n\r\n\t\x3cdiv class\x3d"ratio-div drag-masker" data-dojo-attach-point\x3d"ratioBtnDiv" style\x3d"overflow: hidden;"\x3e\r\n\t\t\x3cdiv class\x3d"ratio-in-div jimu-float-trailing"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"ratioBtn"\x3e\x3c/div\x3e\r\n\t\t\t\x3clabel class\x3d"marginleft10 text-left-center"\x3e${nls.ratio}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"drag-masker indicator-option" data-dojo-attach-point\x3d"indicatorOption"\x3e\r\n\t\t\x3cdiv style\x3d"padding-top: 10px;" class\x3d"tr" data-dojo-attach-point\x3d"valueColorSetting"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left then-text"\x3e\r\n\t\t\t\t\x3cdiv title\x3d"${nls.then}" class\x3d"flex-in-left-div labelTip textOverFlow"\x3e${nls.then}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv title\x3d"${nls.changeValueColor}" class\x3d"then-tip color-tip textOverFlow"\x3e${nls.changeValueColor}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-right then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-right-left-div then-text"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"valueColorSettingBtn"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"valueState" class\x3d"value-state activated"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv style\x3d"padding-top: 5px;" class\x3d"tr" data-dojo-attach-point\x3d"gaugeColorSetting"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-left-div labelTip"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv title\x3d"${nls.changeGaugeColor}" class\x3d"then-tip color-tip textOverFlow"\x3e${nls.changeGaugeColor}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-right then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-right-left-div then-text"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"gaugeColorSettingBtn"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"gaugeState" class\x3d"gauge-state activated"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv style\x3d"padding-top: 5px;" class\x3d"tr" data-dojo-attach-point\x3d"indicatorIconSetting"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-left-div labelTip"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv  title\x3d"${nls.setIndicatorIcon}" class\x3d"then-tip color-tip textOverFlow"\x3e${nls.setIndicatorIcon}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-right then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-right-left-div then-text"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"indicatorIconSettingBtn"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"iconState" class\x3d"icon-state activated"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"indicatorTottomLine" class\x3d"indicator-bottom-line drag-masker"\x3e\x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleIndicator.html dojo/_base/Color dojo/on dojo/query dojo/_base/html dojo/_base/lang jimu/utils jimu/dijit/ColorPickerPopup ./IconChooserPopup dojo/dom-style dijit/form/Select jimu/dijit/CheckBox dijit/form/ValidationTextBox".split(" "),function(p,q,r,t,u,v,h,k,l,e,g,m,n,w,c){return p([q,r,t,u],{baseClass:"infographic-setting-single-indicator",templateString:v,_valueEnable:!0,
_gaugeEnable:!0,_iconEnable:!0,nls:null,type:"",constructor:function(b){this.cacheColor={};this.config=b.config;this.type=b.type;this.folderUrl=b.folderUrl},postCreate:function(){this.inherited(arguments);this._initUI();this.own(k(this.indicatorOption,"click",g.hitch(this,this._onIndicatorComponentClick)));this.setConfig(this.config);this._hasLoaded=!0},startup:function(){this.inherited(arguments);this.uniqueID=this.config?"undefined"!==typeof this.config.uniqueID?this.config.uniqueID:m.getRandomString():
m.getRandomString();e.setAttr(this.domNode,"data-id",this.uniqueID)},updateBottomLineDisplay:function(b,a){b===a?e.setStyle(this.indicatorTottomLine,"display","none"):e.setStyle(this.indicatorTottomLine,"display","block")},_onUpdate:function(){this._hasLoaded&&this.emit("change")},_initUI:function(){this.own(k(this.operator,"change",g.hitch(this,this._onCompareChange)));"gauge"===this.type?(c.set(this.ratioBtnDiv,"display","block"),c.set(this.gaugeColorSetting,"display","flex"),c.set(this.indicatorIconSetting,
"display","none")):"number"===this.type&&(c.set(this.ratioBtnDiv,"display","none"),c.set(this.gaugeColorSetting,"display","none"),c.set(this.indicatorIconSetting,"display","flex"));this.valueColorPicker=new n({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.valueColorPicker.placeAt(this.valueColorSettingBtn);this.valueColorPicker.startup();this.valueColorPicker.setColor(new h("#808080"));this.own(k(this.valueColorPicker,"change",g.hitch(this,function(){this._onUpdate()})));
"gauge"===this.type?(this.gaugeColorPicker=new n({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}}),this.gaugeColorPicker.placeAt(this.gaugeColorSettingBtn),this.gaugeColorPicker.startup(),this.gaugeColorPicker.setColor(new h("#808080")),this.own(k(this.gaugeColorPicker,"change",g.hitch(this,function(){this._onUpdate()})))):"number"===this.type&&(this.iconChooser=new w({nls:this.nls,folderUrl:this.folderUrl}),this.iconChooser.placeAt(this.indicatorIconSettingBtn),
this.iconChooser.startup(),this.own(k(this.iconChooser,"change",g.hitch(this,function(){this._onUpdate()}))))},setConfig:function(b){if(this.config=b){this.operator.set("value",this.config.operator);this.config.isRatio?this.ratioBtn.check():this.ratioBtn.uncheck();this.config.valueColor?this.valueColorPicker.setColor(new h(this.config.valueColor)):this._updateOptionDisplay(this.valueState);"gauge"===this.type&&(this.config.gaugeColor?this.gaugeColorPicker.setColor(new h(this.config.gaugeColor)):this._updateOptionDisplay(this.gaugeState));
"number"===this.type&&(this.config.iconInfo?this.iconChooser.setConfig(this.config.iconInfo):this._updateOptionDisplay(this.iconState));var a=this.config.value;m.isNotEmptyObject(a,!0)&&setTimeout(g.hitch(this,function(){"between"!==this.config.operator?this.compareValue.setValue(a[0]):(this.compareValue1.setValue(a[0]),this.compareValue2.setValue(a[1]))}),200)}},isValid:function(){var b=this.operator.getValue(),a=this._getValue();if("between"===b){if(!(this.compareValue1.isValid()&&this.compareValue2.isValid()&&
a&&a.between&&a.between.length&&"undefined"!==typeof a.between[0]&&"undefined"!==typeof a.between[1]))return!1}else if(!this.compareValue.isValid()||!a||"undefined"===typeof a.normal)return!1;return!0},_switchValueInputMode:function(b){switch(b){case "normal":this.compareValue.set("validator",function(a){return!!a&&/^\d+(\.\d+)?$/.test(a)});this.compareValue1.set("validator",function(){return!0});this.compareValue2.set("validator",function(){return!0});break;case "between":this.compareValue.set("validator",
function(){return!0}),this.compareValue1.set("validator",function(a){return!!a&&/^\d+(\.\d+)?$/.test(a)}),this.compareValue2.set("validator",function(a){return!!a&&/^\d+(\.\d+)?$/.test(a)})}},getConfig:function(){if(!this.isValid())return!1;var b={},a=[],d=this._getValue();"undefined"!==typeof d.between?a=g.clone(d.between):"undefined"!==typeof d.normal&&(a=[d.normal]);if(!a.length)return!1;b.value=a;a=this.operator.getValue();b.operator=a;"gauge"===this.type&&(b.isRatio=this.ratioBtn.checked);this.valueColorPicker&&
this._valueEnable&&(a=this.valueColorPicker.getColor())&&(b.valueColor=a.toHex());this.gaugeColorPicker&&this._gaugeEnable&&(a=this.gaugeColorPicker.getColor())&&(b.gaugeColor=a.toHex());"number"===this.type&&this.iconChooser&&this._iconEnable&&(a=this.iconChooser.getConfig(),b.iconInfo=a);b.uniqueID=this.uniqueID;return b},_onCompareChange:function(b){this.compareValue.setValue("");this.compareValue1.setValue("");this.compareValue2.setValue("");"between"===b?(c.set(this.oneValueDiv,"display","none"),
c.set(this.twoValueDiv,"display",""),this._switchValueInputMode("between")):(c.set(this.oneValueDiv,"display",""),c.set(this.twoValueDiv,"display","none"),this._switchValueInputMode("normal"))},_getValue:function(){var b={};if("between"!==this.operator.getValue()){var a=this.compareValue.getValue();this.compareValue.isValid()&&""!==a&&(b.normal=Number(a))}else{b.between=[];var a=this.compareValue1.getValue(),d=this.compareValue2.getValue();this.compareValue1.isValid()&&""!==a&&this.compareValue2.isValid()&&
""!==d&&(b.between[0]=Number(a),b.between[1]=Number(d))}return b},_removeIndicator:function(){this.emit("remove",this.uniqueID);this._onUpdate()},_updateOptionDisplay:function(b){if(e.hasClass(b,"activated")||e.hasClass(b,"deactivated")){var a,d,c,f;e.hasClass(b,"value-state")?(this._valueEnable=!this._valueEnable,a=l(".color-tip",this.valueColorSetting)[0],f="value",d=this.valueColorPicker,c=null):e.hasClass(b,"gauge-state")?(this._gaugeEnable=!this._gaugeEnable,a=l(".color-tip",this.gaugeColorSetting)[0],
f="gauge",d=this.gaugeColorPicker,c=null):e.hasClass(b,"icon-state")&&(this._iconEnable=!this._iconEnable,a=l(".color-tip",this.indicatorIconSetting)[0],f="icon",d=null,c=this.iconChooser);e.hasClass(a,"disable")?(e.removeClass(a,"disable"),d&&this.cacheColor[f]&&d.setColor(new h(this.cacheColor[f])),c&&this.cacheColor[f]&&c.setIconColor(this.cacheColor[f]),e.addClass(b,"activated"),e.removeClass(b,"deactivated")):(e.addClass(a,"disable"),d&&(this.cacheColor[f]=d.getColor().toHex(),d.setColor(new h("#BCBCBC"))),
c&&(c.getIconColor()&&(this.cacheColor[f]=c.getIconColor()),c.setIconColor("#BCBCBC")),e.removeClass(b,"activated"),e.addClass(b,"deactivated"));this._onUpdate()}},_onIndicatorComponentClick:function(b){this._updateOptionDisplay(b.target||b.srcElement)},destroy:function(){this.valueColorPicker&&(this.valueColorPicker.destroy(),this.valueColorPicker=null);this.valueColorPicker&&(this.gaugeColorPicker.destroy(),this.gaugeColorPicker=null);this.iconChooser&&(this.iconChooser.destroy(),this.iconChooser=
null);this.inherited(arguments)}})});