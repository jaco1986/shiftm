(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1139:function(e,t,n){"use strict";var a=n(24),r=n(13),i=n(27),l=n(84),c=n(85),s=n(26),o=n(1145),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,m,p=i(e),d="function"==typeof this?this:Array,b=arguments.length,f=b>1?arguments[1]:void 0,v=void 0!==f,h=0,g=u(p);if(v&&(f=a(f,b>2?arguments[2]:void 0,2)),null==g||d==Array&&c(g))for(n=new d(t=s(p.length));t>h;h++)o(n,h,v?f(p[h],h):p[h]);else for(m=g.call(p),n=new d;!(r=m.next()).done;h++)o(n,h,v?l(m,f,[r.value,h],!0):r.value);return n.length=h,n}})},1140:function(e,t,n){"use strict";var a=n(1146),r=n(1141);e.exports=n(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1141:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1137),l=n(1136),c=n.n(l);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,l=e.text;return r.a.createElement(i.a,{to:"/vic/",className:c()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),l&&r.a.createElement("div",{className:"text"},l))}},1144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(1137),n(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(i.a,{style:"no",text:t}))}},1145:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1146:function(e,t,n){"use strict";var a=n(28).f,r=n(82),i=n(80),l=n(24),c=n(78),s=n(79),o=n(54),u=n(83),m=n(87),p=n(10),d=n(1143).fastKey,b=n(1141),f=p?"_s":"size",v=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,o){var u=e((function(e,a){c(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[f]=0,null!=a&&s(a,n,e[o],e)}));return i(u.prototype,{clear:function(){for(var e=b(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[f]=0},delete:function(e){var n=b(this,t),a=v(n,e);if(a){var r=a.n,i=a.p;delete n._i[a.i],a.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==a&&(n._f=r),n._l==a&&(n._l=i),n[f]--}return!!a},forEach:function(e){b(this,t);for(var n,a=l(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(b(this,t),e)}}),p&&a(u.prototype,"size",{get:function(){return b(this,t)[f]}}),u},def:function(e,t,n){var a,r,i=v(e,t);return i?i.v=n:(e._l=i={i:r=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=i),a&&(a.n=i),e[f]++,"F"!==r&&(e._i[r]=i)),e},getEntry:v,setStrong:function(e,t,n){o(e,t,(function(e,n){this._t=b(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),m(t)}}},1147:function(e,t,n){"use strict";var a=n(5),r=n(13),i=n(15),l=n(80),c=n(1143),s=n(79),o=n(78),u=n(12),m=n(14),p=n(81),d=n(39),b=n(1148);e.exports=function(e,t,n,f,v,h){var g=a[e],y=g,O=v?"set":"add",j=y&&y.prototype,E={},_=function(e){var t=j[e];i(j,e,"delete"==e||"has"==e?function(e){return!(h&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof y&&(h||j.forEach&&!m((function(){(new y).entries().next()})))){var w=new y,x=w[O](h?{}:-0,1)!=w,N=m((function(){w.has(1)})),k=p((function(e){new y(e)})),T=!h&&m((function(){for(var e=new y,t=5;t--;)e[O](t,t);return!e.has(-0)}));k||((y=t((function(t,n){o(t,y,e);var a=b(new g,t,y);return null!=n&&s(n,v,a[O],a),a}))).prototype=j,j.constructor=y),(N||T)&&(_("delete"),_("has"),v&&_("get")),(T||x)&&_(O),h&&j.clear&&delete j.clear}else y=f.getConstructor(t,e,v,O),l(y.prototype,n),c.NEED=!0;return d(y,e),E[e]=y,r(r.G+r.W+r.F*(y!=g),E),h||f.setStrong(y,e,v),y}},1148:function(e,t,n){var a=n(12),r=n(1149).set;e.exports=function(e,t,n){var i,l=t.constructor;return l!==n&&"function"==typeof l&&(i=l.prototype)!==n.prototype&&a(i)&&r&&r(e,i),e}},1149:function(e,t,n){var a=n(12),r=n(8),i=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},1150:function(e,t,n){"use strict";n(1140),n(77),n(1139),n(25),n(20),n(19),n(1138);var a=n(0),r=n.n(a),i=n(1157),l=n.n(i);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,i=e.name,c=e.setState,s=e.values;if(0==s.size)return null;var o=Array.from(s);return r.a.createElement(r.a.Fragment,null,o.map((function(e,s){var o="string"==typeof e&&n?l()(e):e;return r.a.createElement("label",{key:s},r.a.createElement("input",{checked:t.has(e),name:i,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),c(a)},type:"checkbox"}),o&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",o))})))}},1153:function(e,t,n){"use strict";var a=n(13),r=n(1154),i=n(27),l=n(26),c=n(29),s=n(1166);a(a.P,"Array",{flatMap:function(e){var t,n,a=i(this);return c(e),t=l(a.length),n=s(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1154:function(e,t,n){"use strict";var a=n(1165),r=n(12),i=n(26),l=n(24),c=n(2)("isConcatSpreadable");e.exports=function e(t,n,s,o,u,m,p,d){for(var b,f,v=u,h=0,g=!!p&&l(p,d,3);h<o;){if(h in s){if(b=g?g(s[h],h,n):s[h],f=!1,r(b)&&(f=void 0!==(f=b[c])?!!f:a(b)),f&&m>0)v=e(t,n,b,i(b.length),v,m-1)-1;else{if(v>=9007199254740991)throw TypeError();t[v]=b}v++}h++}return v}},1155:function(e,t,n){"use strict";n(1138),n(1151),n(1152),n(1139),n(1153),n(25),n(20),n(19),n(77),n(1140);var a=n(0),r=n.n(a),i=n(1150),l=n(1144),c=n(1158),s=n.n(c);t.a=function(e){var t=e.children,n=e.filters,c=Object(a.useState)(!1),o=c[0],u=c[1],m=Object(a.useState)(new Set),p=m[0],d=m[1],b=Object(a.useState)(!1),f=b[0],v=b[1],h=Object(a.useState)(null),g=h[0],y=h[1],O=[];t&&(O=Array.isArray(t)?t:[t]);var j=O.some((function(e){return e.props.common})),E=s()(O).flatMap((function(e){return e.props.groups})).uniq().value(),_=O.some((function(e){return e.props.required})),w=O;return o&&(w=w.filter((function(e){return e.props.common}))),p.size>0&&(w=w.filter((function(e){return Array.from(p).every((function(t){return e.props.groups.includes(t)}))}))),f&&(w=w.filter((function(e){return e.props.required}))),g&&(w=w.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,O.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},w.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return y(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(i.a,{values:E,currentState:p,setState:d}),j&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:o}),"common"),_&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return v(e.currentTarget.checked)},checked:f}),"required")))):null,!Array.isArray(w)||w.length>0?r.a.createElement("ul",{className:"connected-list"},w):r.a.createElement(l.a,{text:"no components found"}))}},1156:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1138),n(1151),n(1152);var a=n(0),r=n.n(a),i=n(1136),l=n.n(i),c=(n(1128),n(1167));function s(e){return e.includes(".")?'"'+e+'"':e}function o(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?s(t.name)+" = "+o(t.value):s(Object.keys(t)[0])+" = "+o(Object.values(t)[0]):e?s(e)+" = "+o(t):o(t);var n}function m(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var i=t[a];n.push(r.a.createElement("code",{key:i},o(i))),n.push(" ")}else for(var l in t)n.push(r.a.createElement("code",{key:l,className:"with-info-icon",title:t[l]},o(l))),n.push(" ");return n}function p(e){var t=e.name,n=e.path,a=e.values,i="";return a.forEach((function(e){n&&(i+=n+"."),i+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(c.a,{className:"language-toml"},i))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,o(n)),a)}function b(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,o(a)))}function f(e){var t=e.defaultValue,n=e.enumValues,i=e.examples,l=(e.groups,e.name),c=e.path,s=e.relevantWhen,o=e.required,u=e.unit,f=e.warnings,v=Object(a.useState)(!1),h=v[0],g=v[1];return r.a.createElement("ul",{className:"info"},f&&f.length>0&&f.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),s&&r.a.createElement("li",null,"Only ",o?"required":"relevant"," when:"," ",r.a.createElement(b,{value:s})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(m,{values:n})),(i.length>1||i[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!h)}},h?"Hide examples":"View examples"),h&&r.a.createElement(p,{name:l,path:c,values:i})))}t.a=function(e){var t=e.children,n=e.common,i=e.defaultValue,c=e.enumValues,s=e.examples,o=e.groups,u=e.name,m=e.path,p=e.relevantWhen,d=e.required,b=e.templateable,v=e.type,h=e.unit,g=e.warnings,y=Object(a.useState)(!1),O=y[0],j=(y[1],t);return O&&(j=j.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:l()({"field-required":d,"field-collapsed":O}),required:d},r.a.createElement("div",{className:"badges"},b&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),v&&r.a.createElement("span",{className:"badge badge--secondary"},v,h&&r.a.createElement(r.a.Fragment,null," (",h,")")),c&&Object.keys(c).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",p&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!O&&"table"!=v&&r.a.createElement(f,{defaultValue:i,enumValues:c,examples:s,groups:o,name:u,path:m,relevantWhen:p,required:d,unit:h,warnings:g}))}},781:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),i=(n(0),n(1128)),l=n(1172),c=n(1155),s=n(1156),o=n(1161),u=n(1160),m={last_modified_on:"2020-05-01",delivery_guarantee:"best_effort",component_title:"Statsd",description:"The Vector `statsd` source ingests data through the StatsD UDP protocol and outputs `metric` events.",event_types:["metric"],function_category:"receive",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+statsd%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'statsd|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/statsd",status:"prod-ready",title:"Statsd Source",unsupported_operating_systems:[]},p={id:"reference/sources/statsd",title:"Statsd Source",description:"The Vector `statsd` source ingests data through the StatsD UDP protocol and outputs `metric` events.",source:"@site/docs/reference/sources/statsd.md",permalink:"/docs/reference/sources/statsd",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/sources/statsd.md",sidebar_label:'statsd|["metric"]',sidebar:"docs",previous:{title:"Splunk HEC Source",permalink:"/docs/reference/sources/splunk_hec"},next:{title:"STDIN Source",permalink:"/docs/reference/sources/stdin"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[{value:"address",id:"address",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Timestamp",id:"timestamp",children:[]}]}],b={rightToc:d};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"statsd")," source\ningests data through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/b/statsd_spec"}),"StatsD UDP protocol")," and\noutputs ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(i.b)("inlineCode",{parentName:"a"},"metric"))," events."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)(l.a,{icon:!1,type:"danger",className:"list--icons list--icons--warnings",mdxType:"Alert"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This component exposes a configured port. You must ensure your network allows access to this port."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(o.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(u.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "statsd" # required\n  address = "127.0.0.1:8126" # required\n'))),Object(i.b)(u.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "statsd" # required\n  address = "127.0.0.1:8126" # required\n')))),Object(i.b)(c.a,{filters:!0,mdxType:"Fields"},Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["127.0.0.1:8126"],groups:[],name:"address",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"address"},"address"),Object(i.b)("p",null,"UDP socket address to bind to."))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(o.a,{block:!0,defaultValue:"counter",select:!1,values:[{label:"Counter",value:"counter"},{label:"Gauge",value:"gauge"},{label:"Set",value:"set"},{label:"Timer",value:"timer"}],mdxType:"Tabs"},Object(i.b)(u.a,{value:"counter",mdxType:"TabItem"},Object(i.b)("p",null,"Given the following input:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"login.invocations:1|c\n")),Object(i.b)("p",null,"A metric event will be output with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example metric event"',title:'"Example',metric:!0,'event"':!0}),'{\n  "name": "login.invocations",\n  "kind": "incremental",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "counter",\n    "value": 1.0\n  }\n}\n'))),Object(i.b)(u.a,{value:"gauge",mdxType:"TabItem"},Object(i.b)("p",null,"Given the following input:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"gas_tank:0.50|g\n")),Object(i.b)("p",null,"A metric event will be output with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example metric event"',title:'"Example',metric:!0,'event"':!0}),'{\n  "name": "gas_tank",\n  "kind": "absolute",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "gauge",\n    "value": 0.5\n  }\n}\n'))),Object(i.b)(u.a,{value:"set",mdxType:"TabItem"},Object(i.b)("p",null,"Given the following input:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"unique_users:foo|s\n")),Object(i.b)("p",null,"A metric event will be output with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example metric event"',title:'"Example',metric:!0,'event"':!0}),'{\n  "name": "unique_users",\n  "kind": "incremental",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "set",\n    "values": ["foo"]\n  }\n}\n'))),Object(i.b)(u.a,{value:"timer",mdxType:"TabItem"},Object(i.b)("p",null,"Given the following input:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"login.time:22|ms|@0.1\n")),Object(i.b)("p",null,"A metric event will be output with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example metric event"',title:'"Example',metric:!0,'event"':!0}),'{\n  "name": "login.time",\n  "kind": "incremental",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "distribution",\n    "values": [0.022], // ms become seconds\n    "sample_rates": [10]\n  }\n}\n')))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(i.b)("h3",{id:"timestamp"},"Timestamp"),Object(i.b)("p",null,"StatsD protocol does not provide support for sending metric timestamps. You'll\nnotice that each parsed metric is assigned a ",Object(i.b)("inlineCode",{parentName:"p"},"null"),' timestamp, which is a\nspecial value which means "a real time metric" (not historical one). Normally such\n',Object(i.b)("inlineCode",{parentName:"p"},"null")," timestamps will be substituted by current time by downstream sinks or\n3rd party services during sending/ingestion. See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"metric"),"\ndata model page for more info."))}f.isMDXComponent=!0}}]);