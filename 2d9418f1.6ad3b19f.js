(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1139:function(e,t,a){"use strict";var n=a(24),l=a(13),r=a(27),u=a(84),i=a(85),s=a(26),c=a(1145),o=a(86);l(l.S+l.F*!a(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,l,m,d=r(e),p="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,g=void 0!==h,f=0,v=o(d);if(g&&(h=n(h,b>2?arguments[2]:void 0,2)),null==v||p==Array&&i(v))for(a=new p(t=s(d.length));t>f;f++)c(a,f,g?h(d[f],f):d[f]);else for(m=v.call(d),a=new p;!(l=m.next()).done;f++)c(a,f,g?u(m,h,[l.value,f],!0):l.value);return a.length=f,a}})},1140:function(e,t,a){"use strict";var n=a(1146),l=a(1141);e.exports=a(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(l(this,"Set"),e=0===e?0:e,e)}},n)},1141:function(e,t,a){var n=a(12);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1137),u=a(1136),i=a.n(u);a(131);t.a=function(e){var t=e.className,a=e.size,n=e.style,u=e.text;return l.a.createElement(r.a,{to:"/vic/",className:i()("vic","vic--"+a,t)},l.a.createElement("div",{className:"icon"},l.a.createElement("img",{src:"/img/vicmojis/vic"+n+".svg",alt:"Vic - The Vector Mascot"})),u&&l.a.createElement("div",{className:"text"},u))}},1144:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(1137),a(1142));t.a=function(e){var t=e.text;return l.a.createElement("section",{className:"empty"},l.a.createElement(r.a,{style:"no",text:t}))}},1145:function(e,t,a){"use strict";var n=a(28),l=a(53);e.exports=function(e,t,a){t in e?n.f(e,t,l(0,a)):e[t]=a}},1146:function(e,t,a){"use strict";var n=a(28).f,l=a(82),r=a(80),u=a(24),i=a(78),s=a(79),c=a(54),o=a(83),m=a(87),d=a(10),p=a(1143).fastKey,b=a(1141),h=d?"_s":"size",g=function(e,t){var a,n=p(t);if("F"!==n)return e._i[n];for(a=e._f;a;a=a.n)if(a.k==t)return a};e.exports={getConstructor:function(e,t,a,c){var o=e((function(e,n){i(e,o,t,"_i"),e._t=t,e._i=l(null),e._f=void 0,e._l=void 0,e[h]=0,null!=n&&s(n,a,e[c],e)}));return r(o.prototype,{clear:function(){for(var e=b(this,t),a=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete a[n.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var a=b(this,t),n=g(a,e);if(n){var l=n.n,r=n.p;delete a._i[n.i],n.r=!0,r&&(r.n=l),l&&(l.p=r),a._f==n&&(a._f=l),a._l==n&&(a._l=r),a[h]--}return!!n},forEach:function(e){b(this,t);for(var a,n=u(e,arguments.length>1?arguments[1]:void 0,3);a=a?a.n:this._f;)for(n(a.v,a.k,this);a&&a.r;)a=a.p},has:function(e){return!!g(b(this,t),e)}}),d&&n(o.prototype,"size",{get:function(){return b(this,t)[h]}}),o},def:function(e,t,a){var n,l,r=g(e,t);return r?r.v=a:(e._l=r={i:l=p(t,!0),k:t,v:a,p:n=e._l,n:void 0,r:!1},e._f||(e._f=r),n&&(n.n=r),e[h]++,"F"!==l&&(e._i[l]=r)),e},getEntry:g,setStrong:function(e,t,a){c(e,t,(function(e,a){this._t=b(e,t),this._k=a,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?o(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,o(1))}),a?"entries":"values",!a,!0),m(t)}}},1147:function(e,t,a){"use strict";var n=a(5),l=a(13),r=a(15),u=a(80),i=a(1143),s=a(79),c=a(78),o=a(12),m=a(14),d=a(81),p=a(39),b=a(1148);e.exports=function(e,t,a,h,g,f){var v=n[e],y=v,j=g?"set":"add",O=y&&y.prototype,x={},_=function(e){var t=O[e];r(O,e,"delete"==e||"has"==e?function(e){return!(f&&!o(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return f&&!o(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,a){return t.call(this,0===e?0:e,a),this})};if("function"==typeof y&&(f||O.forEach&&!m((function(){(new y).entries().next()})))){var T=new y,w=T[j](f?{}:-0,1)!=T,E=m((function(){T.has(1)})),N=d((function(e){new y(e)})),V=!f&&m((function(){for(var e=new y,t=5;t--;)e[j](t,t);return!e.has(-0)}));N||((y=t((function(t,a){c(t,y,e);var n=b(new v,t,y);return null!=a&&s(a,g,n[j],n),n}))).prototype=O,O.constructor=y),(E||V)&&(_("delete"),_("has"),g&&_("get")),(V||w)&&_(j),f&&O.clear&&delete O.clear}else y=h.getConstructor(t,e,g,j),u(y.prototype,a),i.NEED=!0;return p(y,e),x[e]=y,l(l.G+l.W+l.F*(y!=v),x),f||h.setStrong(y,e,g),y}},1148:function(e,t,a){var n=a(12),l=a(1149).set;e.exports=function(e,t,a){var r,u=t.constructor;return u!==a&&"function"==typeof u&&(r=u.prototype)!==a.prototype&&n(r)&&l&&l(e,r),e}},1149:function(e,t,a){var n=a(12),l=a(8),r=function(e,t){if(l(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(24)(Function.call,a(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(l){t=!0}return function(e,a){return r(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:r}},1150:function(e,t,a){"use strict";a(1140),a(77),a(1139),a(25),a(20),a(19),a(1138);var n=a(0),l=a.n(n),r=a(1157),u=a.n(r);t.a=function(e){var t=e.currentState,a=e.humanize,n=e.icon,r=e.name,i=e.setState,s=e.values;if(0==s.size)return null;var c=Array.from(s);return l.a.createElement(l.a.Fragment,null,c.map((function(e,s){var c="string"==typeof e&&a?u()(e):e;return l.a.createElement("label",{key:s},l.a.createElement("input",{checked:t.has(e),name:r,onChange:function(a){var n=new Set(t);a.currentTarget.checked?n.add(e):n.delete(e),i(n)},type:"checkbox"}),c&&l.a.createElement(l.a.Fragment,null,n?l.a.createElement("i",{className:"feather icon-"+n}):""," ",c))})))}},1153:function(e,t,a){"use strict";var n=a(13),l=a(1154),r=a(27),u=a(26),i=a(29),s=a(1166);n(n.P,"Array",{flatMap:function(e){var t,a,n=r(this);return i(e),t=u(n.length),a=s(n,0),l(a,n,n,t,0,1,e,arguments[1]),a}}),a(88)("flatMap")},1154:function(e,t,a){"use strict";var n=a(1165),l=a(12),r=a(26),u=a(24),i=a(2)("isConcatSpreadable");e.exports=function e(t,a,s,c,o,m,d,p){for(var b,h,g=o,f=0,v=!!d&&u(d,p,3);f<c;){if(f in s){if(b=v?v(s[f],f,a):s[f],h=!1,l(b)&&(h=void 0!==(h=b[i])?!!h:n(b)),h&&m>0)g=e(t,a,b,r(b.length),g,m-1)-1;else{if(g>=9007199254740991)throw TypeError();t[g]=b}g++}f++}return g}},1155:function(e,t,a){"use strict";a(1138),a(1151),a(1152),a(1139),a(1153),a(25),a(20),a(19),a(77),a(1140);var n=a(0),l=a.n(n),r=a(1150),u=a(1144),i=a(1158),s=a.n(i);t.a=function(e){var t=e.children,a=e.filters,i=Object(n.useState)(!1),c=i[0],o=i[1],m=Object(n.useState)(new Set),d=m[0],p=m[1],b=Object(n.useState)(!1),h=b[0],g=b[1],f=Object(n.useState)(null),v=f[0],y=f[1],j=[];t&&(j=Array.isArray(t)?t:[t]);var O=j.some((function(e){return e.props.common})),x=s()(j).flatMap((function(e){return e.props.groups})).uniq().value(),_=j.some((function(e){return e.props.required})),T=j;return c&&(T=T.filter((function(e){return e.props.common}))),d.size>0&&(T=T.filter((function(e){return Array.from(d).every((function(t){return e.props.groups.includes(t)}))}))),h&&(T=T.filter((function(e){return e.props.required}))),v&&(T=T.filter((function(e){return e.props.name.toLowerCase().includes(v.toLowerCase())}))),l.a.createElement(l.a.Fragment,null,j.length>1&&!1!==a?l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"search"},l.a.createElement("span",{className:"search--result-count"},T.length," items"),l.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return y(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"filter--choices"},l.a.createElement(r.a,{values:x,currentState:d,setState:p}),O&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:function(e){return o(e.currentTarget.checked)},checked:c}),"common"),_&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:function(e){return g(e.currentTarget.checked)},checked:h}),"required")))):null,!Array.isArray(T)||T.length>0?l.a.createElement("ul",{className:"connected-list"},T):l.a.createElement(u.a,{text:"no components found"}))}},1156:function(e,t,a){"use strict";a(89),a(25),a(20),a(19),a(52),a(1138),a(1151),a(1152);var n=a(0),l=a.n(n),r=a(1136),u=a.n(r),i=(a(1128),a(1167));function s(e){return e.includes(".")?'"'+e+'"':e}function c(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function o(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?s(t.name)+" = "+c(t.value):s(Object.keys(t)[0])+" = "+c(Object.values(t)[0]):e?s(e)+" = "+c(t):c(t);var a}function m(e){var t=e.values,a=[];if(Array.isArray(t))for(var n in t){var r=t[n];a.push(l.a.createElement("code",{key:r},c(r))),a.push(" ")}else for(var u in t)a.push(l.a.createElement("code",{key:u,className:"with-info-icon",title:t[u]},c(u))),a.push(" ");return a}function d(e){var t=e.name,a=e.path,n=e.values,r="";return n.forEach((function(e){a&&(r+=a+"."),r+=o(t,e)+"\n"})),l.a.createElement("div",null,l.a.createElement(i.a,{className:"language-toml"},r))}function p(e){var t=e.unit,a=e.value,n="";return t&&(n=l.a.createElement(l.a.Fragment,null," (",t,")")),l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,c(a)),n)}function b(e){var t=e.value,a=Object.keys(t)[0],n=Object.values(t)[0];return""==n&&(n=null),l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:"#"+a},a))," ","= ",l.a.createElement("code",null,c(n)))}function h(e){var t=e.defaultValue,a=e.enumValues,r=e.examples,u=(e.groups,e.name),i=e.path,s=e.relevantWhen,c=e.required,o=e.unit,h=e.warnings,g=Object(n.useState)(!1),f=g[0],v=g[1];return l.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((function(e,t){return l.a.createElement("li",{key:t,className:"warning"},l.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),s&&l.a.createElement("li",null,"Only ",c?"required":"relevant"," when:"," ",l.a.createElement(b,{value:s})),void 0!==t?null!==t?l.a.createElement("li",null,"Default: ",l.a.createElement(p,{unit:o,value:t})):l.a.createElement("li",null,"No default"):null,a&&l.a.createElement("li",null,"Enum, must be one of: ",l.a.createElement(m,{values:a})),(r.length>1||r[0]!=t)&&l.a.createElement("li",null,l.a.createElement("div",{className:"show-more",onClick:function(){return v(!f)}},f?"Hide examples":"View examples"),f&&l.a.createElement(d,{name:u,path:i,values:r})))}t.a=function(e){var t=e.children,a=e.common,r=e.defaultValue,i=e.enumValues,s=e.examples,c=e.groups,o=e.name,m=e.path,d=e.relevantWhen,p=e.required,b=e.templateable,g=e.type,f=e.unit,v=e.warnings,y=Object(n.useState)(!1),j=y[0],O=(y[1],t);return j&&(O=O.filter((function(e){return"p"!=e.props.originalType}))),l.a.createElement("li",{className:u()({"field-required":p,"field-collapsed":j}),required:p},l.a.createElement("div",{className:"badges"},b&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),g&&l.a.createElement("span",{className:"badge badge--secondary"},g,f&&l.a.createElement(l.a.Fragment,null," (",f,")")),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),a&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),p?l.a.createElement("span",{className:"badge badge--danger"},"required",d&&"*"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!j&&"table"!=g&&l.a.createElement(h,{defaultValue:r,enumValues:i,examples:s,groups:c,name:o,path:m,relevantWhen:d,required:p,unit:f,warnings:v}))}},330:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return f}));var n=a(1),l=a(9),r=(a(0),a(1128)),u=a(1155),i=a(1156),s=a(1130),c=a(1164),o=a.n(c),m=a(1161),d=a(1160),p={last_modified_on:"2020-05-21",title:"Metric Event",description:"A detailed guide on Vector's internal metric data model."},b={id:"about/data-model/metric",title:"Metric Event",description:"A detailed guide on Vector's internal metric data model.",source:"@site/docs/about/data-model/metric.md",permalink:"/docs/about/data-model/metric",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/about/data-model/metric.md",sidebar:"docs",previous:{title:"Log Event",permalink:"/docs/about/data-model/log"},next:{title:"Guarantees",permalink:"/docs/about/guarantees"}},h=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Schema",id:"schema",children:[{value:"aggregated_histogram",id:"aggregated_histogram",children:[]},{value:"aggregated_summary",id:"aggregated_summary",children:[]},{value:"counter",id:"counter",children:[]},{value:"distribution",id:"distribution",children:[]},{value:"gauge",id:"gauge",children:[]},{value:"kind",id:"kind",children:[]},{value:"name",id:"name",children:[]},{value:"set",id:"set",children:[]},{value:"tags",id:"tags",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"Components",id:"components",children:[]}],g={rightToc:h};function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{src:"/img/data-model-metric.svg",mdxType:"SVG"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"metric")," event represents a numerical operation to a time series. Operations\noffered are heavily inspired by the StatsD and Prometheus models, and determine\nthe schema of the metric structure within Vector."),Object(r.b)("p",null,"When a metric event is sent to a sink the schema will be translated into the\nclosest equivalent format of the sink protocol."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(m.a,{defaultValue:"counter",select:!0,values:[{label:"Counter",value:"counter"},{label:"Gauge",value:"gauge"},{label:"Set",value:"set"},{label:"Distribution",value:"distribution"},{label:"Aggregated Histogram",value:"aggregated_histogram"},{label:"Aggregated Summary",value:"aggregated_summary"}],mdxType:"Tabs"},Object(r.b)(d.a,{value:"counter",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "login.count",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "counter": {\n    "value": 24.2\n  }\n}\n'))),Object(r.b)(d.a,{value:"gauge",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "memory_rss",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "gauge": {\n    "value": 51200000000.0\n  }\n}\n'))),Object(r.b)(d.a,{value:"set",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "user_names",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "set": {\n    "values": ["bob", "sam", "ben"]\n  }\n}\n'))),Object(r.b)(d.a,{value:"distribution",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "response_time_ms",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "distribution": {\n    "values": [2.21, 5.46, 10.22],\n    "sample_rates": [5, 2, 5]\n  }\n}\n'))),Object(r.b)(d.a,{value:"aggregated_histogram",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "response_time_ms",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "aggregated_histogram": {\n    "buckets": [1.0, 2.0, 4.0, 8.0, 16.0, 32.0],\n    "counts": [20, 10, 45, 12, 18, 92],\n    "count": 197,\n    "sum": 975.2\n  }\n}\n'))),Object(r.b)(d.a,{value:"aggregated_summary",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "response_time_ms",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "aggregated_summary": {\n    "quantiles": [0.1, 0.25, 0.5, 0.9, 0.99, 1.0],\n    "values": [2, 3, 5, 8, 9, 10],\n    "count": 197,\n    "sum": 975.2\n  }\n}\n')))),Object(r.b)("h2",{id:"schema"},"Schema"),Object(r.b)("p",null,"The metric data model is comprised of 6 types: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#aggregated_histogram"}),Object(r.b)("inlineCode",{parentName:"a"},"aggregated_histogram")),",  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#aggregated_summary"}),Object(r.b)("inlineCode",{parentName:"a"},"aggregated_summary")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#counter"}),Object(r.b)("inlineCode",{parentName:"a"},"counter")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#distribution"}),Object(r.b)("inlineCode",{parentName:"a"},"distribution")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#gauge"}),Object(r.b)("inlineCode",{parentName:"a"},"gauge")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#set"}),Object(r.b)("inlineCode",{parentName:"a"},"set")),". A metric event contains a map named after one of these types at the top level. This map contains corresponding numeric values."),Object(r.b)("p",null,"In addition, all kinds of metric events have the following top level fields: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#name"}),Object(r.b)("inlineCode",{parentName:"a"},"name")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#timestamp"}),Object(r.b)("inlineCode",{parentName:"a"},"timestamp")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#kind"}),Object(r.b)("inlineCode",{parentName:"a"},"kind")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#tags"}),Object(r.b)("inlineCode",{parentName:"a"},"tags")),"."),Object(r.b)(u.a,{filters:!0,mdxType:"Fields"},Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"aggregated_histogram",path:null,relevantWhen:null,required:!1,templateable:!1,type:"struct",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"aggregated_histogram"},"aggregated_histogram"),Object(r.b)("p",null,'Also called a "timer". A ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#aggregated_histogram"}),Object(r.b)("inlineCode",{parentName:"a"},"aggregated_histogram"))," samples observations (usually\nthings like request durations or response sizes) and counts them in\nconfigurable buckets. It also provides a sum of all observed values."),Object(r.b)(u.a,{filters:!1,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[[1,2,5,10,25]],groups:[],name:"buckets",path:"aggregated_histogram",relevantWhen:null,required:!0,templateable:!1,type:"[double]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"buckets"},"buckets"),Object(r.b)("p",null,"The buckets contained within this histogram.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[54],groups:[],name:"count",path:"aggregated_histogram",relevantWhen:null,required:!0,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"count"},"count"),Object(r.b)("p",null,"The total number of values contained within the histogram.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[[1,5,25,2,5]],groups:[],name:"counts",path:"aggregated_histogram",relevantWhen:null,required:!0,templateable:!1,type:"[uint]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"counts"},"counts"),Object(r.b)("p",null,"The number of values contained within each bucket.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[524],groups:[],name:"sum",path:"aggregated_histogram",relevantWhen:null,required:!0,templateable:!1,type:"double",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"sum"},"sum"),Object(r.b)("p",null,"The sum of all values contained within the histogram.")))),Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"aggregated_summary",path:null,relevantWhen:null,required:!1,templateable:!1,type:"struct",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"aggregated_summary"},"aggregated_summary"),Object(r.b)("p",null,"Similar to a histogram, a summary samples observations (usually things like\nrequest durations and response sizes). While it also provides a total count of\nobservations and a sum of all observed values, it calculates configurable\nquantiles over a sliding time window."),Object(r.b)(u.a,{filters:!1,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[54],groups:[],name:"count",path:"aggregated_summary",relevantWhen:null,required:!0,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"count-1"},"count"),Object(r.b)("p",null,"The total number of values contained within the summary.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[[.1,.5,.75,1]],groups:[],name:"quantiles",path:"aggregated_summary",relevantWhen:null,required:!0,templateable:!1,type:"[double]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"quantiles"},"quantiles"),Object(r.b)("p",null,"The quantiles contained within the summary, where 0 \u2264 quantile \u2264 1.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[524],groups:[],name:"sum",path:"aggregated_summary",relevantWhen:null,required:!0,templateable:!1,type:"double",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"sum-1"},"sum"),Object(r.b)("p",null,"The sum of all values contained within the summary.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[[2.1,4.68,23.02,120.1]],groups:[],name:"values",path:"aggregated_summary",relevantWhen:null,required:!0,templateable:!1,type:"[double]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"values"},"values"),Object(r.b)("p",null,"The values contained within the summary that align with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#quantiles"}),Object(r.b)("inlineCode",{parentName:"a"},"quantiles")),".")))),Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"counter",path:null,relevantWhen:null,required:!1,templateable:!1,type:"struct",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"counter"},"counter"),Object(r.b)("p",null,"A single value that can ",Object(r.b)("em",{parentName:"p"},"only")," be incremented or reset to zero value, it cannot\nbe decremented."),Object(r.b)(u.a,{filters:!1,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[2.6,5],groups:[],name:"value",path:"counter",relevantWhen:null,required:!0,templateable:!1,type:"double",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"value"},"value"),Object(r.b)("p",null,"The value to increment the counter by. Can only be positive.")))),Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"distribution",path:null,relevantWhen:null,required:!1,templateable:!1,type:"struct",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"distribution"},"distribution"),Object(r.b)("p",null,"A distribution represents a distribution of sampled values."),Object(r.b)(u.a,{filters:!1,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[[12,43,25]],groups:[],name:"sample_rates",path:"distribution",relevantWhen:null,required:!0,templateable:!1,type:"[uint]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"sample_rates"},"sample_rates"),Object(r.b)("p",null,"The rate at which each individual value was sampled.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[[12,43.3,25.2]],groups:[],name:"values",path:"distribution",relevantWhen:null,required:!0,templateable:!1,type:"[double]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"values-1"},"values"),Object(r.b)("p",null,"The list of values contained within the distribution.")))),Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"gauge",path:null,relevantWhen:null,required:!1,templateable:!1,type:"struct",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"gauge"},"gauge"),Object(r.b)("p",null,"A gauge represents a point-in-time value that can increase and decrease.\nVector's internal gauge type represents changes to that value. Gauges should be\nused to track fluctuations in values, like current memory or CPU usage."),Object(r.b)(u.a,{filters:!1,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[554222],groups:[],name:"value",path:"gauge",relevantWhen:null,required:!0,templateable:!1,type:"double",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"value-1"},"value"),Object(r.b)("p",null,"A specific point-in-time value for the gauge.")))),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:{absolute:"The value is an absolute, stand-alone value. It can be used individually.",incremental:"The value is incremental and is used to form a holistic value by merging with other incremental values. Individually it does not tell the whole story."},examples:["absolute","incremental"],groups:[],name:"kind",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"kind"},"kind"),Object(r.b)("p",null,"The metric value kind. This determines how the value is merged downstream if\nmetrics are aggregated.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:["login.count","response_time"],groups:[],name:"name",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"name"},"name"),Object(r.b)("p",null,"The metric name.")),Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"set",path:null,relevantWhen:null,required:!1,templateable:!1,type:"struct",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"set"},"set"),Object(r.b)("p",null,"A set represents a count of unique values, AKA the cardinality."),Object(r.b)(u.a,{filters:!1,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[["unique item 1","unique item 2"]],groups:[],name:"values",path:"set",relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"values-2"},"values"),Object(r.b)("p",null,"The list of unique values.")))),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[{host:"my.host.com"}],groups:[],name:"tags",path:null,relevantWhen:null,required:!0,templateable:!1,type:"map",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"tags"},"tags"),Object(r.b)("p",null,"Tags that add additional metadata or context to the metric. These are simple\nkey/value pairs in ",Object(r.b)("inlineCode",{parentName:"p"},"string")," format and cannot be nested.")),Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],groups:[],name:"timestamp",path:null,relevantWhen:null,required:!0,templateable:!1,type:"timestamp",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"The metric timestamp, representing when the metric was created/ingested within\nVector."))),Object(r.b)("h2",{id:"components"},"Components"),Object(r.b)(s.a,{to:"/components/?event-types[]=metric",mdxType:"Jump"},"View all metric compatible components"))}f.isMDXComponent=!0}}]);