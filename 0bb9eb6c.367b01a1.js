(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1141:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),i=n(84),o=n(85),s=n(26),c=n(1147),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,d,m=l(e),p="function"==typeof this?this:Array,f=arguments.length,b=f>1?arguments[1]:void 0,h=void 0!==b,v=0,g=u(m);if(h&&(b=a(b,f>2?arguments[2]:void 0,2)),null==g||p==Array&&o(g))for(n=new p(t=s(m.length));t>v;v++)c(n,v,h?b(m[v],v):m[v]);else for(d=g.call(m),n=new p;!(r=d.next()).done;v++)c(n,v,h?i(d,b,[r.value,v],!0):r.value);return n.length=v,n}})},1142:function(e,t,n){"use strict";var a=n(1148),r=n(1143);e.exports=n(1149)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1143:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1139),i=n(1138),o=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:o()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1139),n(1144));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1147:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1148:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),i=n(24),o=n(78),s=n(79),c=n(54),u=n(83),d=n(87),m=n(10),p=n(1145).fastKey,f=n(1143),b=m?"_s":"size",h=function(e,t){var n,a=p(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var u=e((function(e,a){o(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[b]=0,null!=a&&s(a,n,e[c],e)}));return l(u.prototype,{clear:function(){for(var e=f(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[b]=0},delete:function(e){var n=f(this,t),a=h(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[b]--}return!!a},forEach:function(e){f(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(f(this,t),e)}}),m&&a(u.prototype,"size",{get:function(){return f(this,t)[b]}}),u},def:function(e,t,n){var a,r,l=h(e,t);return l?l.v=n:(e._l=l={i:r=p(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[b]++,"F"!==r&&(e._i[r]=l)),e},getEntry:h,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=f(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),d(t)}}},1149:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),i=n(80),o=n(1145),s=n(79),c=n(78),u=n(12),d=n(14),m=n(81),p=n(40),f=n(1150);e.exports=function(e,t,n,b,h,v){var g=a[e],y=g,O=h?"set":"add",j=y&&y.prototype,_={},E=function(e){var t=j[e];l(j,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof y&&(v||j.forEach&&!d((function(){(new y).entries().next()})))){var T=new y,w=T[O](v?{}:-0,1)!=T,x=d((function(){T.has(1)})),N=m((function(e){new y(e)})),k=!v&&d((function(){for(var e=new y,t=5;t--;)e[O](t,t);return!e.has(-0)}));N||((y=t((function(t,n){c(t,y,e);var a=f(new g,t,y);return null!=n&&s(n,h,a[O],a),a}))).prototype=j,j.constructor=y),(x||k)&&(E("delete"),E("has"),h&&E("get")),(k||w)&&E(O),v&&j.clear&&delete j.clear}else y=b.getConstructor(t,e,h,O),i(y.prototype,n),o.NEED=!0;return p(y,e),_[e]=y,r(r.G+r.W+r.F*(y!=g),_),v||b.setStrong(y,e,h),y}},1150:function(e,t,n){var a=n(12),r=n(1151).set;e.exports=function(e,t,n){var l,i=t.constructor;return i!==n&&"function"==typeof i&&(l=i.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1151:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1168).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1152:function(e,t,n){"use strict";n(1142),n(77),n(1141),n(25),n(20),n(19),n(1140);var a=n(0),r=n.n(a),l=n(1161),i=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,o=e.setState,s=e.values;if(0==s.size)return null;var c=Array.from(s);return r.a.createElement(r.a.Fragment,null,c.map((function(e,s){var c="string"==typeof e&&n?i()(e):e;return r.a.createElement("label",{key:s},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),o(a)},type:"checkbox"}),c&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",c))})))}},1155:function(e,t,n){"use strict";var a=n(13),r=n(1156),l=n(27),i=n(26),o=n(29),s=n(1171);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return o(e),t=i(a.length),n=s(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1156:function(e,t,n){"use strict";var a=n(1170),r=n(12),l=n(26),i=n(24),o=n(2)("isConcatSpreadable");e.exports=function e(t,n,s,c,u,d,m,p){for(var f,b,h=u,v=0,g=!!m&&i(m,p,3);v<c;){if(v in s){if(f=g?g(s[v],v,n):s[v],b=!1,r(f)&&(b=void 0!==(b=f[o])?!!b:a(f)),b&&d>0)h=e(t,n,f,l(f.length),h,d-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=f}h++}v++}return h}},1159:function(e,t,n){"use strict";n(1140),n(1153),n(1154),n(1141),n(1155),n(25),n(20),n(19),n(77),n(1142);var a=n(0),r=n.n(a),l=n(1152),i=n(1146),o=n(1163),s=n.n(o);t.a=function(e){var t=e.children,n=e.filters,o=Object(a.useState)(!1),c=o[0],u=o[1],d=Object(a.useState)(new Set),m=d[0],p=d[1],f=Object(a.useState)(!1),b=f[0],h=f[1],v=Object(a.useState)(null),g=v[0],y=v[1],O=[];t&&(O=Array.isArray(t)?t:[t]);var j=O.some((function(e){return e.props.common})),_=s()(O).flatMap((function(e){return e.props.groups})).uniq().value(),E=O.some((function(e){return e.props.required})),T=O;return c&&(T=T.filter((function(e){return e.props.common}))),m.size>0&&(T=T.filter((function(e){return Array.from(m).every((function(t){return e.props.groups.includes(t)}))}))),b&&(T=T.filter((function(e){return e.props.required}))),g&&(T=T.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,O.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},T.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return y(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:_,currentState:m,setState:p}),j&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:c}),"common"),E&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return h(e.currentTarget.checked)},checked:b}),"required")))):null,!Array.isArray(T)||T.length>0?r.a.createElement("ul",{className:"connected-list"},T):r.a.createElement(i.a,{text:"no components found"}))}},1160:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1140),n(1153),n(1154);var a=n(0),r=n.n(a),l=n(1138),i=n.n(l),o=(n(1130),n(1172));function s(e){return e.includes(".")?'"'+e+'"':e}function c(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?s(t.name)+" = "+c(t.value):s(Object.keys(t)[0])+" = "+c(Object.values(t)[0]):e?s(e)+" = "+c(t):c(t);var n}function d(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},c(l))),n.push(" ")}else for(var i in t)n.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},c(i))),n.push(" ");return n}function m(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(o.a,{className:"language-toml"},l))}function p(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,c(n)),a)}function f(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,c(a)))}function b(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,i=(e.groups,e.name),o=e.path,s=e.relevantWhen,c=e.required,u=e.unit,b=e.warnings,h=Object(a.useState)(!1),v=h[0],g=h[1];return r.a.createElement("ul",{className:"info"},b&&b.length>0&&b.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),s&&r.a.createElement("li",null,"Only ",c?"required":"relevant"," when:"," ",r.a.createElement(f,{value:s})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(p,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(d,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(m,{name:i,path:o,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,o=e.enumValues,s=e.examples,c=e.groups,u=e.name,d=e.path,m=e.relevantWhen,p=e.required,f=e.templateable,h=e.type,v=e.unit,g=e.warnings,y=Object(a.useState)(!1),O=y[0],j=(y[1],t);return O&&(j=j.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":p,"field-collapsed":O}),required:p},r.a.createElement("div",{className:"badges"},f&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),h&&r.a.createElement("span",{className:"badge badge--secondary"},h,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),o&&Object.keys(o).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),p?r.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!O&&"table"!=h&&r.a.createElement(b,{defaultValue:l,enumValues:o,examples:s,groups:c,name:u,path:d,relevantWhen:m,required:p,unit:v,warnings:g}))}},193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(1),r=(n(0),n(1130)),l=n(1174),i=n(1159),o=n(1160),s=n(1165),c=n(1164);const u={last_modified_on:"2020-05-15",delivery_guarantee:"at_least_once",component_title:"HTTP",description:"The Vector `http` source ingests data through the HTTP protocol and outputs `log` events.",event_types:["log"],function_category:"receive",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+http%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'http|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/http.rs",status:"beta",title:"HTTP Source",unsupported_operating_systems:[]},d={id:"reference/sources/http",title:"HTTP Source",description:"The Vector `http` source ingests data through the HTTP protocol and outputs `log` events.",source:"@site/docs/reference/sources/http.md",permalink:"/docs/reference/sources/http",sidebar_label:'http|["log"]'},m=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[{value:"address",id:"address",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"headers",id:"headers",children:[]},{value:"tls",id:"tls",children:[]}]},{value:"Fields",id:"fields",children:[{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"TLS",id:"tls-1",children:[]}]}],p={rightToc:m};function f({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"http")," source\ningests data through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/Protocols/"}),"HTTP protocol")," and outputs\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)(l.a,{icon:!1,type:"danger",className:"list--icons list--icons--warnings",mdxType:"Alert"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This component exposes a configured port. You must ensure your network allows access to this port."))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "http" # required\n  address = "0.0.0.0:80" # required\n  encoding = "text" # optional, default\n  headers = ["User-Agent", "X-My-Custom-Header"] # optional, no default\n'))),Object(r.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  # General\n  type = "http" # required\n  address = "0.0.0.0:80" # required\n  encoding = "text" # optional, default\n  headers = ["User-Agent", "X-My-Custom-Header"] # optional, no default\n\n  # TLS\n  tls.ca_file = "/path/to/certificate_authority.crt" # optional, no default\n  tls.crt_file = "/path/to/host_certificate.crt" # optional, no default\n  tls.enabled = false # optional, default\n  tls.key_file = "/path/to/host_certificate.key" # optional, no default\n  tls.key_pass = "${KEY_PASS_ENV_VAR}" # optional, no default\n  tls.verify_certificate = false # optional, default\n')))),Object(r.b)(i.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["0.0.0.0:80","localhost:80"],groups:[],name:"address",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"address"},"address"),Object(r.b)("p",null,"The address to listen for connections on")),Object(r.b)(o.a,{common:!0,defaultValue:"text",enumValues:{text:"Newline-delimited text, with each line forming a message.",ndjson:"Newline-delimited JSON objects, where each line must contain a JSON object.",json:"Array of JSON objects, which must be a JSON array containing JSON objects."},examples:["text","ndjson","json"],groups:[],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"encoding"},"encoding"),Object(r.b)("p",null,"The expected encoding of received data. Note that for ",Object(r.b)("inlineCode",{parentName:"p"},"json")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ndjson"),"\nencodings, the fields of the JSON objects are output as separate fields.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[["User-Agent","X-My-Custom-Header"]],groups:[],name:"headers",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"headers"},"headers"),Object(r.b)("p",null,"A list of HTTP headers to include in the log event. These will override any\nvalues included in the JSON payload with conflicting names. An empty string\nwill be inserted into the log event if the corresponding HTTP header was\nmissing.")),Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"tls"},"tls"),Object(r.b)("p",null,"Configures the TLS options for connections from this source."),Object(r.b)(i.a,{filters:!1,mdxType:"Fields"},Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],groups:[],name:"ca_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"ca_file"},"ca_file"),Object(r.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format\n(X.509), or an inline CA certificate in PEM format.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],groups:[],name:"crt_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"crt_file"},"crt_file"),Object(r.b)("p",null,"Absolute path to a certificate file used to identify this server, in DER or PEM\nformat (X.509) or PKCS#12, or an inline certificate in PEM format. If this is\nset and is not a PKCS#12 archive, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#key_file"}),Object(r.b)("inlineCode",{parentName:"a"},"key_file"))," must also be set. This is required\nif ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#enabled"}),Object(r.b)("inlineCode",{parentName:"a"},"enabled"))," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),".")),Object(r.b)(o.a,{common:!0,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"enabled",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"enabled"},"enabled"),Object(r.b)("p",null,"Require TLS for incoming connections. If this is set, an identity certificate\nis also required.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],groups:[],name:"key_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"key_file"},"key_file"),Object(r.b)("p",null,"Absolute path to a private key file used to identify this server, in DER or PEM\nformat (PKCS#8), or an inline private key in PEM format.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["${KEY_PASS_ENV_VAR}","PassWord1"],groups:[],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"key_pass"},"key_pass"),Object(r.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless\n",Object(r.b)("inlineCode",{parentName:"p"},"key_file")," is set.")),Object(r.b)(o.a,{common:!1,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"verify_certificate",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[{visibility_level:"option",text:"Setting this to `false` will cause OpenSSL to not request a certificate from the client",option_name:"verify_certificate"}],mdxType:"Field"},Object(r.b)("h4",{id:"verify_certificate"},"verify_certificate"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", Vector will require a TLS certificate from the connecting host and\nterminate the connection if it is not valid. If ",Object(r.b)("inlineCode",{parentName:"p"},"false")," (the default), Vector\nwill not request a certificate from the client."))))),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="example log event"',title:'"example',log:!0,'event"':!0}),'{\n  // ...\n  "message": "This is one line from the plain text HTTP body",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n  // ...\n}\n')),Object(r.b)(i.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["This is one line from the plain text HTTP body"],groups:[],name:"message",path:null,relevantWhen:{encoding:["text"]},required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The message field, containing the plain text message.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],groups:[],name:"timestamp",path:null,relevantWhen:null,required:!0,templateable:!1,type:"timestamp",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"The time the event was ingested. Note this may be overridden by JSON payloads."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(r.b)("h3",{id:"tls-1"},"TLS"),Object(r.b)("p",null,"Vector uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openssl.org/"}),"Openssl")," for TLS protocols for it's battle-tested\nand reliable security. You can enable and adjust TLS behavior via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#tls"}),Object(r.b)("inlineCode",{parentName:"a"},"tls.*")),"\noptions."))}f.isMDXComponent=!0}}]);