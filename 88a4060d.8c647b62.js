(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{1150:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),i=n(84),c=n(85),o=n(26),s=n(1156),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,p,m=l(e),d="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,f=void 0!==b,v=0,g=u(m);if(f&&(b=a(b,h>2?arguments[2]:void 0,2)),null==g||d==Array&&c(g))for(n=new d(t=o(m.length));t>v;v++)s(n,v,f?b(m[v],v):m[v]);else for(p=g.call(m),n=new d;!(r=p.next()).done;v++)s(n,v,f?i(p,b,[r.value,v],!0):r.value);return n.length=v,n}})},1151:function(e,t,n){"use strict";var a=n(1157),r=n(1152);e.exports=n(1158)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1152:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1148),i=n(1147),c=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:c()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1148),n(1153));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1156:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1157:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),i=n(24),c=n(78),o=n(79),s=n(54),u=n(83),p=n(87),m=n(10),d=n(1154).fastKey,h=n(1152),b=m?"_s":"size",f=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var u=e((function(e,a){c(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[b]=0,null!=a&&o(a,n,e[s],e)}));return l(u.prototype,{clear:function(){for(var e=h(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[b]=0},delete:function(e){var n=h(this,t),a=f(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[b]--}return!!a},forEach:function(e){h(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!f(h(this,t),e)}}),m&&a(u.prototype,"size",{get:function(){return h(this,t)[b]}}),u},def:function(e,t,n){var a,r,l=f(e,t);return l?l.v=n:(e._l=l={i:r=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[b]++,"F"!==r&&(e._i[r]=l)),e},getEntry:f,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=h(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),p(t)}}},1158:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),i=n(80),c=n(1154),o=n(79),s=n(78),u=n(12),p=n(14),m=n(81),d=n(40),h=n(1159);e.exports=function(e,t,n,b,f,v){var g=a[e],y=g,O=f?"set":"add",j=y&&y.prototype,k={},E=function(e){var t=j[e];l(j,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof y&&(v||j.forEach&&!p((function(){(new y).entries().next()})))){var _=new y,x=_[O](v?{}:-0,1)!=_,w=p((function(){_.has(1)})),N=m((function(e){new y(e)})),T=!v&&p((function(){for(var e=new y,t=5;t--;)e[O](t,t);return!e.has(-0)}));N||((y=t((function(t,n){s(t,y,e);var a=h(new g,t,y);return null!=n&&o(n,f,a[O],a),a}))).prototype=j,j.constructor=y),(w||T)&&(E("delete"),E("has"),f&&E("get")),(T||x)&&E(O),v&&j.clear&&delete j.clear}else y=b.getConstructor(t,e,f,O),i(y.prototype,n),c.NEED=!0;return d(y,e),k[e]=y,r(r.G+r.W+r.F*(y!=g),k),v||b.setStrong(y,e,f),y}},1159:function(e,t,n){var a=n(12),r=n(1160).set;e.exports=function(e,t,n){var l,i=t.constructor;return i!==n&&"function"==typeof i&&(l=i.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1160:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1177).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1161:function(e,t,n){"use strict";n(1151),n(77),n(1150),n(25),n(20),n(19),n(1149);var a=n(0),r=n.n(a),l=n(1170),i=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,c=e.setState,o=e.values;if(0==o.size)return null;var s=Array.from(o);return r.a.createElement(r.a.Fragment,null,s.map((function(e,o){var s="string"==typeof e&&n?i()(e):e;return r.a.createElement("label",{key:o},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),c(a)},type:"checkbox"}),s&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",s))})))}},1164:function(e,t,n){"use strict";var a=n(13),r=n(1165),l=n(27),i=n(26),c=n(29),o=n(1180);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return c(e),t=i(a.length),n=o(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1165:function(e,t,n){"use strict";var a=n(1179),r=n(12),l=n(26),i=n(24),c=n(2)("isConcatSpreadable");e.exports=function e(t,n,o,s,u,p,m,d){for(var h,b,f=u,v=0,g=!!m&&i(m,d,3);v<s;){if(v in o){if(h=g?g(o[v],v,n):o[v],b=!1,r(h)&&(b=void 0!==(b=h[c])?!!b:a(h)),b&&p>0)f=e(t,n,h,l(h.length),f,p-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=h}f++}v++}return f}},1168:function(e,t,n){"use strict";n(1149),n(1162),n(1163),n(1150),n(1164),n(25),n(20),n(19),n(77),n(1151);var a=n(0),r=n.n(a),l=n(1161),i=n(1155),c=n(1172),o=n.n(c);t.a=function(e){var t=e.children,n=e.filters,c=Object(a.useState)(!1),s=c[0],u=c[1],p=Object(a.useState)(new Set),m=p[0],d=p[1],h=Object(a.useState)(!1),b=h[0],f=h[1],v=Object(a.useState)(null),g=v[0],y=v[1],O=[];t&&(O=Array.isArray(t)?t:[t]);var j=O.some((function(e){return e.props.common})),k=o()(O).flatMap((function(e){return e.props.groups})).uniq().value(),E=O.some((function(e){return e.props.required})),_=O;return s&&(_=_.filter((function(e){return e.props.common}))),m.size>0&&(_=_.filter((function(e){return Array.from(m).every((function(t){return e.props.groups.includes(t)}))}))),b&&(_=_.filter((function(e){return e.props.required}))),g&&(_=_.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,O.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},_.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return y(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:k,currentState:m,setState:d}),j&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:s}),"common"),E&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return f(e.currentTarget.checked)},checked:b}),"required")))):null,!Array.isArray(_)||_.length>0?r.a.createElement("ul",{className:"connected-list"},_):r.a.createElement(i.a,{text:"no components found"}))}},1169:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1149),n(1162),n(1163);var a=n(0),r=n.n(a),l=n(1147),i=n.n(l),c=(n(1139),n(1181));function o(e){return e.includes(".")?'"'+e+'"':e}function s(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?o(t.name)+" = "+s(t.value):o(Object.keys(t)[0])+" = "+s(Object.values(t)[0]):e?o(e)+" = "+s(t):s(t);var n}function p(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},s(l))),n.push(" ")}else for(var i in t)n.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},s(i))),n.push(" ");return n}function m(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(c.a,{className:"language-toml"},l))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,s(n)),a)}function h(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,s(a)))}function b(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,i=(e.groups,e.name),c=e.path,o=e.relevantWhen,s=e.required,u=e.unit,b=e.warnings,f=Object(a.useState)(!1),v=f[0],g=f[1];return r.a.createElement("ul",{className:"info"},b&&b.length>0&&b.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),o&&r.a.createElement("li",null,"Only ",s?"required":"relevant"," when:"," ",r.a.createElement(h,{value:o})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(p,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(m,{name:i,path:c,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,c=e.enumValues,o=e.examples,s=e.groups,u=e.name,p=e.path,m=e.relevantWhen,d=e.required,h=e.templateable,f=e.type,v=e.unit,g=e.warnings,y=Object(a.useState)(!1),O=y[0],j=(y[1],t);return O&&(j=j.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":d,"field-collapsed":O}),required:d},r.a.createElement("div",{className:"badges"},h&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),f&&r.a.createElement("span",{className:"badge badge--secondary"},f,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),c&&Object.keys(c).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!O&&"table"!=f&&r.a.createElement(b,{defaultValue:l,enumValues:c,examples:o,groups:s,name:u,path:p,relevantWhen:m,required:d,unit:v,warnings:g}))}},688:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(9),l=(n(0),n(1139)),i=n(1168),c=n(1169),o=n(1174),s=n(1173),u={last_modified_on:"2020-05-01",delivery_guarantee:"at_least_once",component_title:"Apache Pulsar",description:"The Vector `pulsar` sink streams `log` events to Apache Pulsar via the Pulsar protocol.",event_types:["log"],function_category:"transmit",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+pulsar%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'pulsar|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/pulsar.rs",status:"beta",title:"Apache Pulsar Sink",unsupported_operating_systems:[]},p={id:"reference/sinks/pulsar",title:"Apache Pulsar Sink",description:"The Vector `pulsar` sink streams `log` events to Apache Pulsar via the Pulsar protocol.",source:"@site/docs/reference/sinks/pulsar.md",permalink:"/docs/reference/sinks/pulsar",sidebar_label:'pulsar|["log"]'},m=[{value:"Configuration",id:"configuration",children:[{value:"address",id:"address",children:[]},{value:"auth",id:"auth",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"topic",id:"topic",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Streaming",id:"streaming",children:[]}]}],d={rightToc:m};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"pulsar")," sink\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(l.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://pulsar.apache.org/"}),"Apache\nPulsar")," via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://pulsar.apache.org/docs/en/develop-binary-protocol/"}),"Pulsar protocol"),"."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(o.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"common",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "pulsar" # required\n  inputs = ["my-source-or-transform-id"] # required\n  address = "127.0.0.1:6650" # required\n  healthcheck = true # optional, default\n  topic = "topic-1234" # required\n\n  # Encoding\n  encoding.codec = "json" # required\n'))),Object(l.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "pulsar" # required\n  inputs = ["my-source-or-transform-id"] # required\n  address = "127.0.0.1:6650" # required\n  healthcheck = true # optional, default\n  topic = "topic-1234" # required\n\n  # Auth\n  auth.name = "${PULSAR_NAME}" # optional, no default\n  auth.token = "${PULSAR_TOKEN}" # optional, no default\n\n  # Encoding\n  encoding.codec = "json" # required\n  encoding.except_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.only_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.timestamp_format = "rfc3339" # optional, default\n')))),Object(l.b)(i.a,{filters:!0,mdxType:"Fields"},Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["127.0.0.1:6650"],groups:[],name:"address",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"address"},"address"),Object(l.b)("p",null,"A host and port pair that the pulsar client should connect to.")),Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"auth",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"auth"},"auth"),Object(l.b)("p",null,"Options for the authentication strategy."),Object(l.b)(i.a,{filters:!1,mdxType:"Fields"},Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["${PULSAR_NAME}","name123"],groups:[],name:"name",path:"auth",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"name"},"name"),Object(l.b)("p",null,"The basic authentication name.")),Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["${PULSAR_TOKEN}","123456789"],groups:[],name:"token",path:"auth",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"token"},"token"),Object(l.b)("p",null,"The basic authentication password.")))),Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:[],groups:[],name:"encoding",path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"encoding"},"encoding"),Object(l.b)("p",null,"Configures the encoding specific sink behavior."),Object(l.b)(i.a,{filters:!1,mdxType:"Fields"},Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:{json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["json","text"],groups:[],name:"codec",path:"encoding",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"codec"},"codec"),Object(l.b)("p",null,"The encoding codec used to serialize the events before outputting.")),Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:[],name:"except_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"except_fields"},"except_fields"),Object(l.b)("p",null,"Prevent the sink from encoding the specified labels.")),Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:[],name:"only_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"only_fields"},"only_fields"),Object(l.b)("p",null,"Limit the sink to only encoding the specified labels.")),Object(l.b)(c.a,{common:!1,defaultValue:"rfc3339",enumValues:{rfc3339:"Format as an RFC3339 string",unix:"Format as a unix timestamp, can be parsed as a Clickhouse DateTime"},examples:["rfc3339","unix"],groups:[],name:"timestamp_format",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"timestamp_format"},"timestamp_format"),Object(l.b)("p",null,"How to format event timestamps.")))),Object(l.b)(c.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"healthcheck"},"healthcheck"),Object(l.b)("p",null,"Enables/disables the sink healthcheck upon start.\nSee ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["topic-1234"],groups:[],name:"topic",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"topic"},"topic"),Object(l.b)("p",null,"The Pulsar topic name to write events to."))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(l.b)("h3",{id:"health-checks"},"Health Checks"),Object(l.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(l.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(l.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(l.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(l.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(l.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(l.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h3",{id:"streaming"},"Streaming"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"pulsar")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."))}h.isMDXComponent=!0}}]);