(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{1129:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),i=n(84),o=n(85),s=n(26),c=n(1135),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,m,p=l(e),d="function"==typeof this?this:Array,f=arguments.length,b=f>1?arguments[1]:void 0,h=void 0!==b,v=0,y=u(p);if(h&&(b=a(b,f>2?arguments[2]:void 0,2)),null==y||d==Array&&o(y))for(n=new d(t=s(p.length));t>v;v++)c(n,v,h?b(p[v],v):p[v]);else for(m=y.call(p),n=new d;!(r=m.next()).done;v++)c(n,v,h?i(m,b,[r.value,v],!0):r.value);return n.length=v,n}})},1130:function(e,t,n){"use strict";var a=n(1136),r=n(1131);e.exports=n(1137)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1131:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1132:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1127),i=n(1126),o=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:o()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1127),n(1132));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1135:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1136:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),i=n(24),o=n(78),s=n(79),c=n(54),u=n(83),m=n(87),p=n(10),d=n(1133).fastKey,f=n(1131),b=p?"_s":"size",h=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var u=e((function(e,a){o(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[b]=0,null!=a&&s(a,n,e[c],e)}));return l(u.prototype,{clear:function(){for(var e=f(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[b]=0},delete:function(e){var n=f(this,t),a=h(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[b]--}return!!a},forEach:function(e){f(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(f(this,t),e)}}),p&&a(u.prototype,"size",{get:function(){return f(this,t)[b]}}),u},def:function(e,t,n){var a,r,l=h(e,t);return l?l.v=n:(e._l=l={i:r=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[b]++,"F"!==r&&(e._i[r]=l)),e},getEntry:h,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=f(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),m(t)}}},1137:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),i=n(80),o=n(1133),s=n(79),c=n(78),u=n(12),m=n(14),p=n(81),d=n(40),f=n(1138);e.exports=function(e,t,n,b,h,v){var y=a[e],g=y,O=h?"set":"add",j=g&&g.prototype,_={},k=function(e){var t=j[e];l(j,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof g&&(v||j.forEach&&!m((function(){(new g).entries().next()})))){var w=new g,E=w[O](v?{}:-0,1)!=w,x=m((function(){w.has(1)})),N=p((function(e){new g(e)})),T=!v&&m((function(){for(var e=new g,t=5;t--;)e[O](t,t);return!e.has(-0)}));N||((g=t((function(t,n){c(t,g,e);var a=f(new y,t,g);return null!=n&&s(n,h,a[O],a),a}))).prototype=j,j.constructor=g),(x||T)&&(k("delete"),k("has"),h&&k("get")),(T||E)&&k(O),v&&j.clear&&delete j.clear}else g=b.getConstructor(t,e,h,O),i(g.prototype,n),o.NEED=!0;return d(g,e),_[e]=g,r(r.G+r.W+r.F*(g!=y),_),v||b.setStrong(g,e,h),g}},1138:function(e,t,n){var a=n(12),r=n(1139).set;e.exports=function(e,t,n){var l,i=t.constructor;return i!==n&&"function"==typeof i&&(l=i.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1139:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1156).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1140:function(e,t,n){"use strict";n(1130),n(77),n(1129),n(25),n(20),n(19),n(1128);var a=n(0),r=n.n(a),l=n(1149),i=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,o=e.setState,s=e.values;if(0==s.size)return null;var c=Array.from(s);return r.a.createElement(r.a.Fragment,null,c.map((function(e,s){var c="string"==typeof e&&n?i()(e):e;return r.a.createElement("label",{key:s},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),o(a)},type:"checkbox"}),c&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",c))})))}},1143:function(e,t,n){"use strict";var a=n(13),r=n(1144),l=n(27),i=n(26),o=n(29),s=n(1159);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return o(e),t=i(a.length),n=s(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1144:function(e,t,n){"use strict";var a=n(1158),r=n(12),l=n(26),i=n(24),o=n(2)("isConcatSpreadable");e.exports=function e(t,n,s,c,u,m,p,d){for(var f,b,h=u,v=0,y=!!p&&i(p,d,3);v<c;){if(v in s){if(f=y?y(s[v],v,n):s[v],b=!1,r(f)&&(b=void 0!==(b=f[o])?!!b:a(f)),b&&m>0)h=e(t,n,f,l(f.length),h,m-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=f}h++}v++}return h}},1147:function(e,t,n){"use strict";n(1128),n(1141),n(1142),n(1129),n(1143),n(25),n(20),n(19),n(77),n(1130);var a=n(0),r=n.n(a),l=n(1140),i=n(1134),o=n(1151),s=n.n(o);t.a=function(e){var t=e.children,n=e.filters,o=Object(a.useState)(!1),c=o[0],u=o[1],m=Object(a.useState)(new Set),p=m[0],d=m[1],f=Object(a.useState)(!1),b=f[0],h=f[1],v=Object(a.useState)(null),y=v[0],g=v[1],O=[];t&&(O=Array.isArray(t)?t:[t]);var j=O.some((function(e){return e.props.common})),_=s()(O).flatMap((function(e){return e.props.groups})).uniq().value(),k=O.some((function(e){return e.props.required})),w=O;return c&&(w=w.filter((function(e){return e.props.common}))),p.size>0&&(w=w.filter((function(e){return Array.from(p).every((function(t){return e.props.groups.includes(t)}))}))),b&&(w=w.filter((function(e){return e.props.required}))),y&&(w=w.filter((function(e){return e.props.name.toLowerCase().includes(y.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,O.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},w.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return g(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:_,currentState:p,setState:d}),j&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:c}),"common"),k&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return h(e.currentTarget.checked)},checked:b}),"required")))):null,!Array.isArray(w)||w.length>0?r.a.createElement("ul",{className:"connected-list"},w):r.a.createElement(i.a,{text:"no components found"}))}},1148:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1128),n(1141),n(1142);var a=n(0),r=n.n(a),l=n(1126),i=n.n(l),o=(n(1118),n(1160));function s(e){return e.includes(".")?'"'+e+'"':e}function c(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?s(t.name)+" = "+c(t.value):s(Object.keys(t)[0])+" = "+c(Object.values(t)[0]):e?s(e)+" = "+c(t):c(t);var n}function m(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},c(l))),n.push(" ")}else for(var i in t)n.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},c(i))),n.push(" ");return n}function p(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(o.a,{className:"language-toml"},l))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,c(n)),a)}function f(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,c(a)))}function b(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,i=(e.groups,e.name),o=e.path,s=e.relevantWhen,c=e.required,u=e.unit,b=e.warnings,h=Object(a.useState)(!1),v=h[0],y=h[1];return r.a.createElement("ul",{className:"info"},b&&b.length>0&&b.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),s&&r.a.createElement("li",null,"Only ",c?"required":"relevant"," when:"," ",r.a.createElement(f,{value:s})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(m,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return y(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(p,{name:i,path:o,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,o=e.enumValues,s=e.examples,c=e.groups,u=e.name,m=e.path,p=e.relevantWhen,d=e.required,f=e.templateable,h=e.type,v=e.unit,y=e.warnings,g=Object(a.useState)(!1),O=g[0],j=(g[1],t);return O&&(j=j.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":d,"field-collapsed":O}),required:d},r.a.createElement("div",{className:"badges"},f&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),h&&r.a.createElement("span",{className:"badge badge--secondary"},h,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),o&&Object.keys(o).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",p&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!O&&"table"!=h&&r.a.createElement(b,{defaultValue:l,enumValues:o,examples:s,groups:c,name:u,path:m,relevantWhen:p,required:d,unit:v,warnings:y}))}},726:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(9),l=(n(0),n(1118)),i=n(1147),o=n(1148),s=n(1146),c=n.n(s),u=n(1153),m=n(1152),p={last_modified_on:"2020-06-02",delivery_guarantee:"best_effort",component_title:"Vector",description:"The Vector `vector` sink streams `log` and `metric` events to another downstream `vector` source.",event_types:["log","metric"],function_category:"transmit",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+vector%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'vector|["log","metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/vector.rs",status:"beta",title:"Vector Sink",unsupported_operating_systems:[]},d={id:"reference/sinks/vector",title:"Vector Sink",description:"The Vector `vector` sink streams `log` and `metric` events to another downstream `vector` source.",source:"@site/docs/reference/sinks/vector.md",permalink:"/docs/reference/sinks/vector",sidebar_label:'vector|["log","metric"]'},f=[{value:"Configuration",id:"configuration",children:[{value:"address",id:"address",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"tls",id:"tls",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Buffers",id:"buffers",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Streaming",id:"streaming",children:[]},{value:"TLS",id:"tls-1",children:[]}]}],b={rightToc:f};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"vector")," sink\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(l.b)("inlineCode",{parentName:"a"},"log"))," and\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(l.b)("inlineCode",{parentName:"a"},"metric"))," events to another downstream ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/vector/"}),Object(l.b)("inlineCode",{parentName:"a"},"vector"),"\nsource"),"."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(u.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(l.b)(m.a,{value:"common",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  type = "vector" # required\n  inputs = ["my-source-or-transform-id"] # required\n  address = "92.12.333.224:5000" # required\n  healthcheck = true # optional, default\n'))),Object(l.b)(m.a,{value:"advanced",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "vector" # required\n  inputs = ["my-source-or-transform-id"] # required\n  address = "92.12.333.224:5000" # required\n  healthcheck = true # optional, default\n\n  # Buffer\n  buffer.max_events = 500 # optional, default, events, relevant when type = "memory"\n  buffer.max_size = 104900000 # required, bytes, required when type = "disk"\n  buffer.type = "memory" # optional, default\n  buffer.when_full = "block" # optional, default\n\n  # TLS\n  tls.ca_file = "/path/to/certificate_authority.crt" # optional, no default\n  tls.crt_file = "/path/to/host_certificate.crt" # optional, no default\n  tls.enabled = false # optional, default\n  tls.key_file = "/path/to/host_certificate.key" # optional, no default\n  tls.key_pass = "${KEY_PASS_ENV_VAR}" # optional, no default\n  tls.verify_certificate = true # optional, default\n  tls.verify_hostname = true # optional, default\n')))),Object(l.b)(i.a,{filters:!0,mdxType:"Fields"},Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["92.12.333.224:5000"],groups:[],name:"address",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"address"},"address"),Object(l.b)("p",null,"The downstream Vector address to connect to. The address ",Object(l.b)("em",{parentName:"p"},"must")," include a port.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"buffer"},"buffer"),Object(l.b)("p",null,"Configures the sink specific buffer behavior."),Object(l.b)(i.a,{filters:!1,mdxType:"Fields"},Object(l.b)(o.a,{common:!0,defaultValue:500,enumValues:null,examples:[500],groups:[],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"uint",unit:"events",warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"max_events"},"max_events"),Object(l.b)("p",null,"The maximum number of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"events")," allowed in the buffer.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],groups:[],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!0,templateable:!1,type:"uint",unit:"bytes",warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"max_size"},"max_size"),Object(l.b)("p",null,"The maximum size of the buffer on the disk.")),Object(l.b)(o.a,{common:!0,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant, but less durable. Data will be lost if Vector is restarted forcefully.",disk:"Stores the sink's buffer on disk. This is less performant, but durable. Data will not be lost between restarts."},examples:["memory","disk"],groups:[],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"type"},"type"),Object(l.b)("p",null,"The buffer's type and storage mechanism.")),Object(l.b)(o.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],groups:[],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"when_full"},"when_full"),Object(l.b)("p",null,"The behavior when the buffer becomes full.")))),Object(l.b)(o.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"healthcheck"},"healthcheck"),Object(l.b)("p",null,"Enables/disables the sink healthcheck upon start.\nSee ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"tls"},"tls"),Object(l.b)("p",null,"Configures the TLS options for connections from this sink."),Object(l.b)(i.a,{filters:!1,mdxType:"Fields"},Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],groups:[],name:"ca_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"ca_file"},"ca_file"),Object(l.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format\n(X.509), or an inline CA certificate in PEM format.")),Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],groups:[],name:"crt_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"crt_file"},"crt_file"),Object(l.b)("p",null,"Absolute path to a certificate file used to identify this connection, in DER or\nPEM format (X.509) or PKCS#12, or an inline certificate in PEM format. If this\nis set and is not a PKCS#12 archive, ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#key_file"}),Object(l.b)("inlineCode",{parentName:"a"},"key_file"))," must also be set.")),Object(l.b)(o.a,{common:!0,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"enabled",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"enabled"},"enabled"),Object(l.b)("p",null,"Enable TLS during connections to the remote.")),Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],groups:[],name:"key_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"key_file"},"key_file"),Object(l.b)("p",null,"Absolute path to a private key file used to identify this connection, in DER or\nPEM format (PKCS#8), or an inline private key in PEM format. If this is set,\n",Object(l.b)("inlineCode",{parentName:"p"},"crt_file")," must also be set.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["${KEY_PASS_ENV_VAR}","PassWord1"],groups:[],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"key_pass"},"key_pass"),Object(l.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless\n",Object(l.b)("inlineCode",{parentName:"p"},"key_file")," is set.")),Object(l.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"verify_certificate",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[{visibility_level:"option",text:"Setting this to `false` means the certificate will be loaded and checked for validity, but the handshake will not attempt to verify the certificate. Do NOT set this to `false` unless you understand the risks of not verifying the remote certificate.",option_name:"verify_certificate"}],mdxType:"Field"},Object(l.b)("h4",{id:"verify_certificate"},"verify_certificate"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the TLS certificate of the remote\nhost.")),Object(l.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"verify_hostname",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"verify_hostname"},"verify_hostname"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the configured remote host name\nagainst the remote host's TLS certificate. Do NOT set this to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," unless\nyou understand the risks of not verifying the remote hostname."))))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"buffers"},"Buffers"),Object(l.b)(c.a,{src:"/img/buffers.svg",mdxType:"SVG"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"vector")," sink buffers events as shown in\nthe diagram above. This helps to smooth out data processing if the downstream\nservice applies backpressure. Buffers are controlled via the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#buffer"}),Object(l.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(l.b)("h3",{id:"health-checks"},"Health Checks"),Object(l.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(l.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(l.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(l.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(l.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(l.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(l.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h3",{id:"streaming"},"Streaming"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"vector")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."),Object(l.b)("h3",{id:"tls-1"},"TLS"),Object(l.b)("p",null,"Vector uses ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openssl.org/"}),"Openssl")," for TLS protocols for it's battle-tested\nand reliable security. You can enable and adjust TLS behavior via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#tls"}),Object(l.b)("inlineCode",{parentName:"a"},"tls.*")),"\noptions."))}h.isMDXComponent=!0}}]);