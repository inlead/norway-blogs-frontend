var mkws_config = {
  pp2_hostname:  "sp-emusikk-no.indexdata.com", 
  sp_auth_credentials: "emusik_no462/emusik_no462" ,
  sp_auth_query: "command=auth&action=login" 
};

mkws.registerWidgetType('indexdata-artist-block', function () {
	if (!this.config.perpage) this.config.perpage = 6;
	if (!this.config.sort) this.config.sort = "position";
	this.team.registerTemplate('wimp2', '\
<ul>\
{{#each hits}}\
  <li>\
    <span class="left">\
      {{#mkws-first md-electronic-url}}\
        <a href="{{this}}">\
      {{/mkws-first}}\
      <div>{{md-title}}</div></a>\
      <div>{{#if md-date}}{{md-date}}{{/if}}</div>\
    </span>\
    <span class="right">\
      {{#if md-thumburl}}\
        <img class="wimp-img" src="{{md-thumburl}}" />\
      {{/if}}\
    </span>\
  </li>\
{{/each}}\
</ul>\
');
	var that = this;
	var template = that.team.loadTemplate(that.config.template || "wimp2");
	this.team.queue("records").subscribe(function (data) {
		that.node.html(template(data));
	});
	that.autosearch();
});

(function() {
  var template = Handlebars.template, templates = mkws.defaultTemplates = mkws.defaultTemplates || {};
templates['details'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        ("
    + this.escapeExpression(((helper = (helper = helpers['md-title-remainder'] || (depth0 != null ? depth0['md-title-remainder'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-title-remainder","hash":{},"data":data}) : helper)))
    + ")\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "        <i>"
    + this.escapeExpression(((helper = (helper = helpers['md-title-responsibility'] || (depth0 != null ? depth0['md-title-responsibility'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-title-responsibility","hash":{},"data":data}) : helper)))
    + "</i>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "  <tr>\n    <th>"
    + alias2((helpers['mkws-translate'] || (depth0 && depth0['mkws-translate']) || alias1).call(depth0,"Date",{"name":"mkws-translate","hash":{},"data":data}))
    + "</th>\n    <td>"
    + alias2(((helper = (helper = helpers['md-date'] || (depth0 != null ? depth0['md-date'] : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"md-date","hash":{},"data":data}) : helper)))
    + "</td>\n  </tr>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "  <tr>\n    <th>"
    + alias2((helpers['mkws-translate'] || (depth0 && depth0['mkws-translate']) || alias1).call(depth0,"Author",{"name":"mkws-translate","hash":{},"data":data}))
    + "</th>\n    <td>"
    + alias2(((helper = (helper = helpers['md-author'] || (depth0 != null ? depth0['md-author'] : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"md-author","hash":{},"data":data}) : helper)))
    + "</td>\n  </tr>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <tr>\n    <th>"
    + this.escapeExpression((helpers['mkws-translate'] || (depth0 && depth0['mkws-translate']) || helpers.helperMissing).call(depth0,"Links",{"name":"mkws-translate","hash":{},"data":data}))
    + "</th>\n    <td>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['md-electronic-url'] : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n  </tr>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "        <a href=\""
    + alias1(this.lambda(depth0, depth0))
    + "\">Link"
    + alias1(((helper = (helper = helpers['mkws-index1'] || (depth0 != null ? depth0['mkws-index1'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"mkws-index1","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "  <tr>\n    <th>"
    + this.escapeExpression((helpers['mkws-translate'] || (depth0 && depth0['mkws-translate']) || alias1).call(depth0,"Subject",{"name":"mkws-translate","hash":{},"data":data}))
    + "</th>\n    <td>\n"
    + ((stack1 = (helpers['mkws-first'] || (depth0 && depth0['mkws-first']) || alias1).call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"mkws-first","hash":{"having":"md-subject"},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n  </tr>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-subject'] : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers['mkws-commaList'] || (depth0 && depth0['mkws-commaList']) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0['md-subject'] : depth0),{"name":"mkws-commaList","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"15":function(depth0,helpers,partials,data) {
    return "            "
    + this.escapeExpression(this.lambda(depth0, depth0));
},"17":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-electronic-url'] : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"18":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "          <a href=\""
    + alias1(this.lambda((depth0 != null ? depth0['md-electronic-url'] : depth0), depth0))
    + "\">"
    + alias1((helpers['mkws-attr'] || (depth0 && depth0['mkws-attr']) || helpers.helperMissing).call(depth0,"@name",{"name":"mkws-attr","hash":{},"data":data}))
    + "</a>\n";
},"20":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-bibliofil-url'] : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"21":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "            <a href=\""
    + alias1(this.lambda((depth0 != null ? depth0['md-bibliofil-url'] : depth0), depth0))
    + "\">"
    + alias1((helpers['mkws-attr'] || (depth0 && depth0['mkws-attr']) || helpers.helperMissing).call(depth0,"@name",{"name":"mkws-attr","hash":{},"data":data}))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<table>\n  <tr>\n    <th>"
    + alias2((helpers['mkws-translate'] || (depth0 && depth0['mkws-translate']) || alias1).call(depth0,"Title",{"name":"mkws-translate","hash":{},"data":data}))
    + "</th>\n    <td>\n      <a href=\"http://musikkhylla3.stg.easyting.dk/search/meta/?au="
    + alias2(((helper = (helper = helpers['md-author'] || (depth0 != null ? depth0['md-author'] : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"md-author","hash":{},"data":data}) : helper)))
    + "&amp;ti="
    + alias2(((helper = (helper = helpers['md-title'] || (depth0 != null ? depth0['md-title'] : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"md-title","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers['md-title'] || (depth0 != null ? depth0['md-title'] : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"md-title","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-title-remainder'] : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-title-responsibility'] : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n  </tr>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-date'] : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-author'] : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<!--\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-electronic-url'] : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "-->\n\n"
    + ((stack1 = (helpers['mkws-if-any'] || (depth0 && depth0['mkws-if-any']) || alias1).call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"mkws-if-any","hash":{"having":"md-subject"},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <tr>\n    <th>"
    + alias2((helpers['mkws-translate'] || (depth0 && depth0['mkws-translate']) || alias1).call(depth0,"Provider",{"name":"mkws-translate","hash":{},"data":data}))
    + "</th>\n    <td>\n"
    + ((stack1 = (helpers['mkws-commaList'] || (depth0 && depth0['mkws-commaList']) || alias1).call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"mkws-commaList","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n  </tr>\n</table>\n";
},"useData":true});
templates['images'] = template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <a href=\"#\" id=\""
    + alias3(((helper = (helper = helpers.detailLinkId || (depth0 != null ? depth0.detailLinkId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"detailLinkId","hash":{},"data":data}) : helper)))
    + "\" onclick=\""
    + alias3(((helper = (helper = helpers.detailClick || (depth0 != null ? depth0.detailClick : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"detailClick","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers['mkws-first'] || (depth0 && depth0['mkws-first']) || alias1).call(depth0,(depth0 != null ? depth0['md-thumburl'] : depth0),{"name":"mkws-first","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <br/>\n  </a>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      XXXXX<!-- <img src=\""
    + alias2(alias1(depth0, depth0))
    + "\" alt=\""
    + alias2(alias1((depths[1] != null ? depths[1]['md-title'] : depths[1]), depth0))
    + "\"/> -->XXXX\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.hits : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['summary'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "  <a class=\"mkws-field-thumb\" href=\"#\" onclick=\""
    + alias1(((helper = (helper = helpers.detailClick || (depth0 != null ? depth0.detailClick : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"detailClick","hash":{},"data":data}) : helper)))
    + "\">\n    <!-- <img src=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0['md-thumburl'] : depth0)) != null ? stack1['0'] : stack1), depth0))
    + "\" onerror=\"this.style.display='none'\"/> -->\n  </a>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"mkws-field-title-remainder\">"
    + this.escapeExpression(((helper = (helper = helpers['md-title-remainder'] || (depth0 != null ? depth0['md-title-remainder'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-title-remainder","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"mkws-field-author\">"
    + this.escapeExpression(((helper = (helper = helpers['md-author'] || (depth0 != null ? depth0['md-author'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-author","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-title-responsibility'] : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "      <span class=\"mkws-field-author\">"
    + this.escapeExpression(((helper = (helper = helpers['md-title-responsibility'] || (depth0 != null ? depth0['md-title-responsibility'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-title-responsibility","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"mkws-field-description\">"
    + this.escapeExpression(((helper = (helper = helpers['md-description'] || (depth0 != null ? depth0['md-description'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-description","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"12":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"mkws-field-date\">"
    + this.escapeExpression(((helper = (helper = helpers['md-date'] || (depth0 != null ? depth0['md-date'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"md-date","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "  "
    + ((stack1 = ((helper = (helper = helpers.renderedDetails || (depth0 != null ? depth0.renderedDetails : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"renderedDetails","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-thumburl'] : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"mkws-field-data\">\n  <span class=\"mkws-field-title\">\n  <a href=\"#\" id=\""
    + alias3(((helper = (helper = helpers.detailLinkId || (depth0 != null ? depth0.detailLinkId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"detailLinkId","hash":{},"data":data}) : helper)))
    + "\" onclick=\""
    + alias3(((helper = (helper = helpers.detailClick || (depth0 != null ? depth0.detailClick : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"detailClick","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + alias3(((helper = (helper = helpers['md-title'] || (depth0 != null ? depth0['md-title'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"md-title","hash":{},"data":data}) : helper)))
    + "\n  </a>\n  </span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-title-remainder'] : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-author'] : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-description'] : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['md-date'] : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.renderedDetails : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
