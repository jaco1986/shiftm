(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{1128:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),o=n(84),i=n(85),c=n(26),s=n(1134),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,m,p=l(e),d="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,b=void 0!==h,v=0,g=u(p);if(b&&(h=a(h,f>2?arguments[2]:void 0,2)),null==g||d==Array&&i(g))for(n=new d(t=c(p.length));t>v;v++)s(n,v,b?h(p[v],v):p[v]);else for(m=g.call(p),n=new d;!(r=m.next()).done;v++)s(n,v,b?o(m,h,[r.value,v],!0):r.value);return n.length=v,n}})},1129:function(e,t,n){"use strict";var a=n(1135),r=n(1130);e.exports=n(1136)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1130:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1131:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1126),o=n(1125),i=n.n(o);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,o=e.text;return r.a.createElement(l.a,{to:"/vic/",className:i()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),o&&r.a.createElement("div",{className:"text"},o))}},1133:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1126),n(1131));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1134:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1135:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),o=n(24),i=n(78),c=n(79),s=n(54),u=n(83),m=n(87),p=n(10),d=n(1132).fastKey,f=n(1130),h=p?"_s":"size",b=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var u=e((function(e,a){i(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[h]=0,null!=a&&c(a,n,e[s],e)}));return l(u.prototype,{clear:function(){for(var e=f(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=f(this,t),a=b(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[h]--}return!!a},forEach:function(e){f(this,t);for(var n,a=o(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!b(f(this,t),e)}}),p&&a(u.prototype,"size",{get:function(){return f(this,t)[h]}}),u},def:function(e,t,n){var a,r,l=b(e,t);return l?l.v=n:(e._l=l={i:r=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[h]++,"F"!==r&&(e._i[r]=l)),e},getEntry:b,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=f(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),m(t)}}},1136:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),o=n(80),i=n(1132),c=n(79),s=n(78),u=n(12),m=n(14),p=n(81),d=n(40),f=n(1137);e.exports=function(e,t,n,h,b,v){var g=a[e],_=g,y=b?"set":"add",E=_&&_.prototype,O={},j=function(e){var t=E[e];l(E,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof _&&(v||E.forEach&&!m((function(){(new _).entries().next()})))){var x=new _,w=x[y](v?{}:-0,1)!=x,N=m((function(){x.has(1)})),k=p((function(e){new _(e)})),T=!v&&m((function(){for(var e=new _,t=5;t--;)e[y](t,t);return!e.has(-0)}));k||((_=t((function(t,n){s(t,_,e);var a=f(new g,t,_);return null!=n&&c(n,b,a[y],a),a}))).prototype=E,E.constructor=_),(N||T)&&(j("delete"),j("has"),b&&j("get")),(T||w)&&j(y),v&&E.clear&&delete E.clear}else _=h.getConstructor(t,e,b,y),o(_.prototype,n),i.NEED=!0;return d(_,e),O[e]=_,r(r.G+r.W+r.F*(_!=g),O),v||h.setStrong(_,e,b),_}},1137:function(e,t,n){var a=n(12),r=n(1138).set;e.exports=function(e,t,n){var l,o=t.constructor;return o!==n&&"function"==typeof o&&(l=o.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1138:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1155).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1139:function(e,t,n){"use strict";n(1129),n(77),n(1128),n(25),n(20),n(19),n(1127);var a=n(0),r=n.n(a),l=n(1148),o=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,i=e.setState,c=e.values;if(0==c.size)return null;var s=Array.from(c);return r.a.createElement(r.a.Fragment,null,s.map((function(e,c){var s="string"==typeof e&&n?o()(e):e;return r.a.createElement("label",{key:c},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),i(a)},type:"checkbox"}),s&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",s))})))}},1142:function(e,t,n){"use strict";var a=n(13),r=n(1143),l=n(27),o=n(26),i=n(29),c=n(1158);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return i(e),t=o(a.length),n=c(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1143:function(e,t,n){"use strict";var a=n(1157),r=n(12),l=n(26),o=n(24),i=n(2)("isConcatSpreadable");e.exports=function e(t,n,c,s,u,m,p,d){for(var f,h,b=u,v=0,g=!!p&&o(p,d,3);v<s;){if(v in c){if(f=g?g(c[v],v,n):c[v],h=!1,r(f)&&(h=void 0!==(h=f[i])?!!h:a(f)),h&&m>0)b=e(t,n,f,l(f.length),b,m-1)-1;else{if(b>=9007199254740991)throw TypeError();t[b]=f}b++}v++}return b}},1146:function(e,t,n){"use strict";n(1127),n(1140),n(1141),n(1128),n(1142),n(25),n(20),n(19),n(77),n(1129);var a=n(0),r=n.n(a),l=n(1139),o=n(1133),i=n(1150),c=n.n(i);t.a=function(e){var t=e.children,n=e.filters,i=Object(a.useState)(!1),s=i[0],u=i[1],m=Object(a.useState)(new Set),p=m[0],d=m[1],f=Object(a.useState)(!1),h=f[0],b=f[1],v=Object(a.useState)(null),g=v[0],_=v[1],y=[];t&&(y=Array.isArray(t)?t:[t]);var E=y.some((function(e){return e.props.common})),O=c()(y).flatMap((function(e){return e.props.groups})).uniq().value(),j=y.some((function(e){return e.props.required})),x=y;return s&&(x=x.filter((function(e){return e.props.common}))),p.size>0&&(x=x.filter((function(e){return Array.from(p).every((function(t){return e.props.groups.includes(t)}))}))),h&&(x=x.filter((function(e){return e.props.required}))),g&&(x=x.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,y.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},x.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return _(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:O,currentState:p,setState:d}),E&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:s}),"common"),j&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return b(e.currentTarget.checked)},checked:h}),"required")))):null,!Array.isArray(x)||x.length>0?r.a.createElement("ul",{className:"connected-list"},x):r.a.createElement(o.a,{text:"no components found"}))}},1147:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1127),n(1140),n(1141);var a=n(0),r=n.n(a),l=n(1125),o=n.n(l),i=(n(1117),n(1159));function c(e){return e.includes(".")?'"'+e+'"':e}function s(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?c(t.name)+" = "+s(t.value):c(Object.keys(t)[0])+" = "+s(Object.values(t)[0]):e?c(e)+" = "+s(t):s(t);var n}function m(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},s(l))),n.push(" ")}else for(var o in t)n.push(r.a.createElement("code",{key:o,className:"with-info-icon",title:t[o]},s(o))),n.push(" ");return n}function p(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(i.a,{className:"language-toml"},l))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,s(n)),a)}function f(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,s(a)))}function h(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,o=(e.groups,e.name),i=e.path,c=e.relevantWhen,s=e.required,u=e.unit,h=e.warnings,b=Object(a.useState)(!1),v=b[0],g=b[1];return r.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),c&&r.a.createElement("li",null,"Only ",s?"required":"relevant"," when:"," ",r.a.createElement(f,{value:c})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(m,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(p,{name:o,path:i,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,i=e.enumValues,c=e.examples,s=e.groups,u=e.name,m=e.path,p=e.relevantWhen,d=e.required,f=e.templateable,b=e.type,v=e.unit,g=e.warnings,_=Object(a.useState)(!1),y=_[0],E=(_[1],t);return y&&(E=E.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:o()({"field-required":d,"field-collapsed":y}),required:d},r.a.createElement("div",{className:"badges"},f&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),b&&r.a.createElement("span",{className:"badge badge--secondary"},b,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),i&&Object.keys(i).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",p&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),E,!y&&"table"!=b&&r.a.createElement(h,{defaultValue:l,enumValues:i,examples:c,groups:s,name:u,path:m,relevantWhen:p,required:d,unit:v,warnings:g}))}},484:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(1),r=(n(0),n(1117)),l=n(1146),o=n(1147),i=n(1152),c=n(1151);const s={last_modified_on:"2020-05-21",delivery_guarantee:"at_least_once",component_title:"Prometheus",description:"The Vector `prometheus` source ingests data through the Prometheus text exposition format and outputs `metric` events.",event_types:["metric"],function_category:"receive",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+prometheus%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'prometheus|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/prometheus",status:"beta",title:"Prometheus Source",unsupported_operating_systems:[]},u={id:"reference/sources/prometheus",title:"Prometheus Source",description:"The Vector `prometheus` source ingests data through the Prometheus text exposition format and outputs `metric` events.",source:"@site/docs/reference/sources/prometheus.md",permalink:"/docs/reference/sources/prometheus",sidebar_label:'prometheus|["metric"]'},m=[{value:"Configuration",id:"configuration",children:[{value:"hosts",id:"hosts",children:[]},{value:"scrape_interval_secs",id:"scrape_interval_secs",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],p={rightToc:m};function d({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"prometheus")," source\ningests data through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prometheus/docs/blob/master/content/docs/instrumenting/exposition_formats.md#text-based-format"}),"Prometheus text exposition\nformat")," and outputs\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(r.b)("inlineCode",{parentName:"a"},"metric"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(i.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "prometheus" # required\n  hosts = ["http://localhost:9090"] # required\n  scrape_interval_secs = 15 # optional, default, seconds\n'))),Object(r.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "prometheus" # required\n  hosts = ["http://localhost:9090"] # required\n  scrape_interval_secs = 15 # optional, default, seconds\n')))),Object(r.b)(l.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[["http://localhost:9090"]],groups:[],name:"hosts",path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"hosts"},"hosts"),Object(r.b)("p",null,"Host addresses to scrape metrics from.")),Object(r.b)(o.a,{common:!0,defaultValue:15,enumValues:null,examples:[15],groups:[],name:"scrape_interval_secs",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"scrape_interval_secs"},"scrape_interval_secs"),Object(r.b)("p",null,"The interval between scrapes, in seconds."))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(i.a,{block:!0,defaultValue:"counter",select:!1,values:[{label:"Counter",value:"counter"},{label:"Gauge",value:"gauge"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"counter",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),'# TYPE promhttp_metric_handler_requests_total counter\npromhttp_metric_handler_requests_total{code="200"} 100\n')),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example metric event"',title:'"Example',metric:!0,'event"':!0}),'{\n  "name": "promhttp_metric_handler_requests_total",\n  "kind": "absolute",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "tags": {\n    "code": "200"\n  },\n  "value": {\n    "type": "counter",\n    "value": 100.0\n  }\n}\n'))),Object(r.b)(c.a,{value:"gauge",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"prometheus_remote_storage_samples_in_total 57011636\n")),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:'language-jsontitle="Example',metastring:'log event"',log:!0,'event"':!0}),'{\n  "name": "prometheus_remote_storage_samples_in_total",\n  "kind": "absolute",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "tags": null,\n  "value": {\n    "type": "gauge",\n    "value": 57011636.0\n  }\n}\n')))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."))}d.isMDXComponent=!0}}]);