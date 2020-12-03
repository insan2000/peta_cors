// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/layerAndFieldsApplyOn.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTSearchFieldNode" data-dojo-attach-point \x3d "searchNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point \x3d "layerAndFieldsMainDiv"\x3e\x3c/div\x3e\r\n  \x3cdiv style\x3d"margin-top: 5px;" class\x3d"esriCTHidden" data-dojo-attach-point \x3d "domainFieldHintMsg"\x3e\r\n    \x3cdiv class\x3d"esriCTDomainlistDiv"\x3e*\x3c/div\x3e\r\n    \x3cdiv\x3e${nls.actionPage.domainListTitle}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on jimu/BaseWidgetSetting dijit/_TemplatedMixin jimu/dijit/CheckBox jimu/utils dojo/dom-attr dojo/dom-class dojo/query dojo/string dojo/dom-style dijit/form/ValidationTextBox dojo/text!./layerAndFieldsApplyOn.html dijit/form/CheckBox dijit/registry".split(" "),function(w,x,k,l,h,p,y,z,r,A,n,m,f,t,B,C,D,u,E){return w([y,x,z],{baseClass:"jimu-widget-smartEditor-setting-layersAndFieldsApplyOn",templateString:D,
checkBoxNodes:null,layerCheckBoxNodes:null,showDomainFieldIndicator:!1,searchTextBox:null,defalutFieldInfos:[{actionName:"Intersection",enabled:!1,fields:[]},{actionName:"Address",enabled:!1},{actionName:"Coordinates",enabled:!1,coordinatesSystem:"MapSpatialReference",field:"x"},{actionName:"Preset",enabled:!1}],nlsActionName:{Intersection:"Intersection1",Address:"Address1",Coordinates:"Coordinates1",Preset:"Preset1"},postCreate:function(){this.inherited(arguments);this.nlsActionName={Intersection:this.nls.actionPage.copyAction.intersection,
Address:this.nls.actionPage.copyAction.address,Coordinates:this.nls.actionPage.copyAction.coordinates,Preset:this.nls.actionPage.copyAction.preset};this.layerCheckBoxNodes={};this.checkBoxNodes={};this._prevAppliedOnLayers=[];this.appliedOn&&(this._prevAppliedOnLayers=k.clone(Object.keys(this.appliedOn)));this._addSearchControl();this._addLayerAndFields(!0)},_addSearchControl:function(){this.searchTextBox=new C({trim:!0,placeHolder:this.nls.actionPage.searchPlaceHolder,intermediateChanges:!0},h.create("div",
{},this.searchNode));B.set(this.searchTextBox.domNode,"width","350px");this.own(p(this.searchTextBox,"change",k.hitch(this,this._searchTextUpdated)));var c=h.create("div",{"class":"esriCTExpandAllNode"},this.searchNode),b=h.create("div",{"class":"esriCTExpandAllNode"},this.searchNode);this._expandAllCheckBox=new u({"class":"switch-toggle",checked:!1},h.create("div",{},c));h.create("label",{innerHTML:this.nls.actionPage.expandAllLabel,"class":"esriCTDojoCheckBoxLabel"},c);this._checkAllFieldsCheckBox=
new u({checked:!1},h.create("div",{},b));h.create("label",{innerHTML:this.nls.actionPage.selectAllLabel,"class":"esriCTDojoCheckBoxLabel"},b);this.noFieldsDOM=h.create("div",{innerHTML:this.nls.actionPage.noValidFieldTypeMsg,"class":"esriCTHidden"},this.searchNode);this.own(p(this._expandAllCheckBox,"change",k.hitch(this,function(a){a?(a=f(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed.esriCTToggleLayerExpanded",this.layerAndFieldsMainDiv))&&0<a.length&&l.forEach(a,function(a){a.click()}):(a=
f(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv))&&0<a.length&&l.forEach(a,function(a){m.contains(a,"esriCTToggleLayerExpanded")||a.click()})})));this.own(p(this._checkAllFieldsCheckBox,"change",k.hitch(this,function(a){var c,b;c=""!==this.searchTextBox.get("value")?f("div[searchstring*\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.layerAndFieldsMainDiv):f(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);l.forEach(c,k.hitch(this,function(c){b=E.byNode(f(".esriCTFieldsCheckBox",
c)[0]);a?b.check(!0):b.uncheck(!0)}));this.emit("layerFieldsUpdated",!1)})))},_searchTextUpdated:function(c){var b;b=c.toLowerCase();if(""!==b){c=f("[searchstring]",this.layerAndFieldsMainDiv);b=f("div[searchstring*\x3d'"+b+"']",this.layerAndFieldsMainDiv);c.style("display","none");c.removeClass("esriCTNotFilteredBySearch");c.addClass("esriCTFilteredBySearch");b.style("display","");b.replaceClass("esriCTNotFilteredBySearch","esriCTFilteredBySearch");c=this.layerDetails;for(var a in c){var d,e,g;if(0<
Object.keys(c[a]).length){b=f("[layermaindivid \x3d '"+a+"']",this.layerAndFieldsMainDiv);d=f("[layerid\x3d'"+a+"']",this.layerAndFieldsMainDiv);e=!0;for(g=0;g<d.length;g++)if(m.contains(d[g],"esriCTNotFilteredBySearch")){e=!1;break}e?b.style("display","none"):b.style("display","")}}}else f("[layermaindivid]",this.layerAndFieldsMainDiv).style("display",""),f("[searchstring]",this.layerAndFieldsMainDiv).style("display",""),f("[searchstring]",this.layerAndFieldsMainDiv).removeClass("esriCTFilteredBySearch"),
f("[searchstring]",this.layerAndFieldsMainDiv).addClass("esriCTNotFilteredBySearch");this._handleHeaderCheckBoxState()},_addLayerAndFields:function(){var c,b=[],a;c=this.layerDetails;hasFields=!1;for(var d in c)if(0<Object.keys(c[d]).length){hasFields=!0;a=h.create("div",{"class":"esriCTLayerMainDiv"},this.layerAndFieldsMainDiv);n.set(a,"layermaindivid",d);this._createLayerName(a,d);a=this._getLayersFieldValues(d);this.appliedOn&&this.appliedOn.hasOwnProperty(d)&&0<this.appliedOn[d].length&&b.push(d);
for(var e in c[d])if(c[d][e].editable){var g=!1,v=h.create("div",{"class":"esriCTFieldsDiv  esriCTHidden"},this.layerAndFieldsMainDiv);n.set(v,"layerid",d);if(a&&a.hasOwnProperty(e)){var q;l.some(a[e],function(a){if(a.actionName===this.actionName&&a.enabled&&(!a.hasOwnProperty("attributeActionGroupName")||a.hasOwnProperty("attributeActionGroupName")&&a.attributeActionGroupName!==this.prevName))return q=a,g=!0},this);"Preset"!==this.actionName||!g||!q||q.hasOwnProperty("attributeActionGroupName")&&
""!==q.attributeActionGroupName||(g=!1)}this._createFieldName(c[d][e],d,v,g,q?q.attributeActionGroupName:null)}}0<b.length&&setTimeout(k.hitch(this,function(){this._applyPrevSettings();l.forEach(b,k.hitch(this,function(a){var c=f('[rootnodelayerid\x3d"'+a+'"]');c&&0<c.length&&m.contains(c[0],"esriCTToggleLayerExpanded")&&(f('[rootnodelayerid\x3d"'+a+'"]').toggleClass("esriCTToggleLayerExpanded"),f('[layerid\x3d"'+a+'"]').toggleClass("esriCTHidden"))}));this.emit("layerFieldsUpdated",!0)}),100);hasFields?
m.add(this.noFieldsDOM,"esriCTHidden"):m.remove(this.noFieldsDOM,"esriCTHidden")},_createLayerName:function(c,b){var a,d,e;this.layerCheckBoxNodes[b]=[];this.checkBoxNodes[b]=[];this.layerInfos.getLayerOrTableInfoById(b)&&(a=this.layerInfos.getLayerOrTableInfoById(b).layerObject.name,d=h.create("div",{"class":"esriCTToggleLayerIcon esriCTToggleLayerCollapsed esriCTToggleLayerExpanded"},c),n.set(d,"rootnodelayerid",b),this.own(p(d,"click",k.hitch(this,function(a){m.toggle(a.currentTarget,"esriCTToggleLayerExpanded");
m.contains(a.currentTarget,"esriCTToggleLayerExpanded")&&this._expandAllCheckBox.set("checked",!1,!1);e=n.get(a.currentTarget,"rootnodelayerid");f('[layerid\x3d"'+e+'"]').toggleClass("esriCTHidden")}))),c=h.create("div",{"class":"esriCTLayercheckBox"},c),h.create("div",{innerHTML:a},c),a=new r({label:a,checked:!1}),this.layerCheckBoxNodes[b].push(a),n.set(a.domNode,"LayerCheckBoxId",b),p(a.domNode,"click",k.hitch(this,this._parentNodeStateChanged)))},_getLayersFieldValues:function(c){var b;l.some(this._configInfos,
function(a){if(a.featureLayer&&a.featureLayer.id===c)return a.fieldValues?b=a.fieldValues:a.fieldValues={},!0},this);return b},_getAllLayersFieldValues:function(c,b,a){l.forEach(b,function(b){b.featureLayer&&b.featureLayer.id===a&&(b.fieldValues?c||(c=[]):b.fieldValues={},c.push(b.fieldValues));b.relationshipInfos&&(c=this._getAllLayersFieldValues(c,b.relationshipInfos,a))},this);return c},_createFieldName:function(c,b,a,d,e){var g;g=A.getDefaultPortalFieldInfo(c);var f=t.substitute(e?this.nls.attributeActionsPage.alreadyAppliedActionMsg:
this.nls.attributeActionsPage.alreadyAppliedActionLayerMsg,{action:this.nlsActionName[this.actionName]});e&&(e=t.substitute(this.nls.attributeActionsPage.appliedGroupName,{groupName:e}),f=f+" "+e);f=h.create("div",{"class":"esriCTExistingExpressionDiv esriCTVisibilityHidden",title:f},a);d&&m.remove(f,"esriCTVisibilityHidden");this.showDomainFieldIndicator&&(d=h.create("div",{"class":"esriCTDomainlistDiv esriCTVisibilityHidden",innerHTML:"*",title:this.nls.actionPage.domainListTitle},a),c.domain&&
c.domain.codedValues&&(m.remove(d,"esriCTVisibilityHidden"),m.remove(this.domainFieldHintMsg,"esriCTHidden")));c=h.create("div",{"class":"esriCTFieldsCheckBox"},a);c=new r({label:g.label,value:g.fieldName,checked:!1},c);this.checkBoxNodes[b].push(c);n.set(a,"searchstring",g.label.toLowerCase());n.set(c.domNode,"fieldsCheckBoxId",b);p(c.domNode,"click",k.hitch(this,this._childNodeStateChanged));p(c,"change",k.hitch(this,function(){this._handleHeaderCheckBoxState()}))},_handleHeaderCheckBoxState:function(){var c,
b=!0;c=""!==this.searchTextBox.get("value")?f("[searchstring*\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.layerAndFieldsMainDiv):f(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);0<c.length?l.some(c,k.hitch(this,function(a){a=f(".checkbox",a)[0];if(!m.contains(a,"jimu-icon-checked"))return b=!1,!0})):b=!1;b?this._checkAllFieldsCheckBox.set("checked",!0,!1):this._checkAllFieldsCheckBox.set("checked",!1,!1)},_parentNodeStateChanged:function(c){var b,a;b=n.get(c.currentTarget,"LayerCheckBoxId");
c=this.layerCheckBoxNodes[b];b=this.checkBoxNodes[b];a=c[0].getValue();l.forEach(b,k.hitch(this,function(b){a?b.setValue(!0):b.setValue(!1)}))},_childNodeStateChanged:function(c){var b,a;b=n.get(c.currentTarget,"fieldsCheckBoxId");c=this.layerCheckBoxNodes[b];b=this.checkBoxNodes[b];a=!0;l.some(b,k.hitch(this,function(b){if(!b.getValue())return a=!1,!0}));c[0].setValue(a);this.emit("layerFieldsUpdated",!1)},getOnlyCheckedFields:function(){var c={},b;for(b in this.checkBoxNodes){c[b]=[];for(var a in this.checkBoxNodes[b])this.checkBoxNodes[b][a].checked&&
c[b].push(this.checkBoxNodes[b][a].get("value"))}return c},getCheckedFields:function(c){var b={},a;for(a in this.checkBoxNodes){b[a]=[];for(var d in this.checkBoxNodes[a])this.checkBoxNodes[a][d].checked&&b[a].push(this.checkBoxNodes[a][d].get("value"))}this._applySettingsInLayer(c,b);return b},_removeSettingsFromOtherGroups:function(c,b,a){var d;if(this.existingGroups)for(var e in this.existingGroups)if(e!==c&&e!==this.prevName&&(d=this.existingGroups[e].appliedOn)&&d.hasOwnProperty(b)&&-1<d[b].indexOf(a)){var g=
d[b].indexOf(a);d[b].splice(g,1)}},_removePrevSettingsFromLayerFields:function(c){var b=[];if((b=this._getAllLayersFieldValues(b,this._configInfos,c))&&0<b.length)for(var a=0;a<b.length;a++)if(c=b[a])for(var d in c)for(var e=c[d],g=0;g<e.length;g++)e[g].actionName===this.actionName&&e[g].hasOwnProperty("attributeActionGroupName")&&e[g].attributeActionGroupName===this.prevName&&(e[g].enabled=!1,delete e[g].attributeActionGroupName,"Intersection"===this.actionName?(e[g].fields=[],e[g].ignoreLayerRanking=
!1):"Address"===this.actionName?delete e[g].field:"Coordinates"===this.actionName&&(e[g].coordinatesSystem="MapSpatialReference",e[g].field="x"))},_applysettingsToField:function(c,b,a){var d,e=[];if((e=this._getAllLayersFieldValues(e,this._configInfos,c))&&0<e.length){for(var g=0;g<e.length;g++)if(d=e[g],this.appliedOn&&this.appliedOn.hasOwnProperty(c)){var f=this.appliedOn[c];f&&0<f.length&&l.forEach(f,function(a){if(-1===b.indexOf(a)&&d.hasOwnProperty(a)){a=d[a];for(var c=0;c<a.length;c++)a[c].actionName===
this.actionName&&(a[c].enabled=!1,delete a[c].attributeActionGroupName,"Intersection"===this.actionName?(a[c].fields=[],a[c].ignoreLayerRanking=!1):"Address"===this.actionName?delete a[c].field:"Coordinates"===this.actionName&&(a[c].coordinatesSystem="MapSpatialReference",a[c].field="x"))}},this)}l.forEach(b,function(b){for(var g=0;g<e.length;g++){var f;d=e[g];d.hasOwnProperty(b)||(d[b]=k.clone(this.defalutFieldInfos));f=d[b];for(var h=0;h<f.length;h++)f[h].actionName===this.actionName&&(a.attributeInfo&&
(f[h]=k.mixin(f[h],a.attributeInfo)),f[h].enabled=!0,f[h].attributeActionGroupName=a.name,this._removeSettingsFromOtherGroups(a.name,c,b))}},this)}},_applySettingsInLayer:function(c,b){for(var a in b){var d;this._prevAppliedOnLayers&&-1<this._prevAppliedOnLayers.indexOf(a)&&(d=this._prevAppliedOnLayers.indexOf(a),this._prevAppliedOnLayers.splice(d,1));this._applysettingsToField(a,b[a],c)}this.deleteGroup()},deleteGroup:function(){this._prevAppliedOnLayers&&l.forEach(this._prevAppliedOnLayers,function(c){this._removePrevSettingsFromLayerFields(c)},
this)},_applyPrevSettings:function(){if(this.appliedOn)for(var c in this.appliedOn)if(this.appliedOn.hasOwnProperty(c)){var b=this.appliedOn[c];if(b&&0<b.length){var a=this.layerCheckBoxNodes[c],d=!0;l.forEach(this.checkBoxNodes[c],k.hitch(this,function(a){-1<b.indexOf(a.value)?a.setValue(!0):a.getValue()||(d=!1)}));d&&a&&a[0]&&a[0].setValue(d)}}}})});