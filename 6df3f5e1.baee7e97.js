(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1150:function(e,t,n){"use strict";var a=n(24),r=n(13),i=n(27),l=n(84),o=n(85),c=n(26),s=n(1156),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,d,m=i(e),p="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,b=void 0!==h,v=0,g=u(m);if(b&&(h=a(h,f>2?arguments[2]:void 0,2)),null==g||p==Array&&o(g))for(n=new p(t=c(m.length));t>v;v++)s(n,v,b?h(m[v],v):m[v]);else for(d=g.call(m),n=new p;!(r=d.next()).done;v++)s(n,v,b?l(d,h,[r.value,v],!0):r.value);return n.length=v,n}})},1151:function(e,t,n){"use strict";var a=n(1157),r=n(1152);e.exports=n(1158)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1152:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1148),l=n(1147),o=n.n(l);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,l=e.text;return r.a.createElement(i.a,{to:"/vic/",className:o()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),l&&r.a.createElement("div",{className:"text"},l))}},1155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(1148),n(1153));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(i.a,{style:"no",text:t}))}},1156:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1157:function(e,t,n){"use strict";var a=n(28).f,r=n(82),i=n(80),l=n(24),o=n(78),c=n(79),s=n(54),u=n(83),d=n(87),m=n(10),p=n(1154).fastKey,f=n(1152),h=m?"_s":"size",b=function(e,t){var n,a=p(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var u=e((function(e,a){o(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[h]=0,null!=a&&c(a,n,e[s],e)}));return i(u.prototype,{clear:function(){for(var e=f(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=f(this,t),a=b(n,e);if(a){var r=a.n,i=a.p;delete n._i[a.i],a.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==a&&(n._f=r),n._l==a&&(n._l=i),n[h]--}return!!a},forEach:function(e){f(this,t);for(var n,a=l(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!b(f(this,t),e)}}),m&&a(u.prototype,"size",{get:function(){return f(this,t)[h]}}),u},def:function(e,t,n){var a,r,i=b(e,t);return i?i.v=n:(e._l=i={i:r=p(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=i),a&&(a.n=i),e[h]++,"F"!==r&&(e._i[r]=i)),e},getEntry:b,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=f(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),d(t)}}},1158:function(e,t,n){"use strict";var a=n(5),r=n(13),i=n(15),l=n(80),o=n(1154),c=n(79),s=n(78),u=n(12),d=n(14),m=n(81),p=n(40),f=n(1159);e.exports=function(e,t,n,h,b,v){var g=a[e],y=g,O=b?"set":"add",j=y&&y.prototype,_={},E=function(e){var t=j[e];i(j,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof y&&(v||j.forEach&&!d((function(){(new y).entries().next()})))){var k=new y,w=k[O](v?{}:-0,1)!=k,x=d((function(){k.has(1)})),N=m((function(e){new y(e)})),T=!v&&d((function(){for(var e=new y,t=5;t--;)e[O](t,t);return!e.has(-0)}));N||((y=t((function(t,n){s(t,y,e);var a=f(new g,t,y);return null!=n&&c(n,b,a[O],a),a}))).prototype=j,j.constructor=y),(x||T)&&(E("delete"),E("has"),b&&E("get")),(T||w)&&E(O),v&&j.clear&&delete j.clear}else y=h.getConstructor(t,e,b,O),l(y.prototype,n),o.NEED=!0;return p(y,e),_[e]=y,r(r.G+r.W+r.F*(y!=g),_),v||h.setStrong(y,e,b),y}},1159:function(e,t,n){var a=n(12),r=n(1160).set;e.exports=function(e,t,n){var i,l=t.constructor;return l!==n&&"function"==typeof l&&(i=l.prototype)!==n.prototype&&a(i)&&r&&r(e,i),e}},1160:function(e,t,n){var a=n(12),r=n(8),i=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1177).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},1161:function(e,t,n){"use strict";n(1151),n(77),n(1150),n(25),n(20),n(19),n(1149);var a=n(0),r=n.n(a),i=n(1170),l=n.n(i);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,i=e.name,o=e.setState,c=e.values;if(0==c.size)return null;var s=Array.from(c);return r.a.createElement(r.a.Fragment,null,s.map((function(e,c){var s="string"==typeof e&&n?l()(e):e;return r.a.createElement("label",{key:c},r.a.createElement("input",{checked:t.has(e),name:i,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),o(a)},type:"checkbox"}),s&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",s))})))}},1164:function(e,t,n){"use strict";var a=n(13),r=n(1165),i=n(27),l=n(26),o=n(29),c=n(1180);a(a.P,"Array",{flatMap:function(e){var t,n,a=i(this);return o(e),t=l(a.length),n=c(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1165:function(e,t,n){"use strict";var a=n(1179),r=n(12),i=n(26),l=n(24),o=n(2)("isConcatSpreadable");e.exports=function e(t,n,c,s,u,d,m,p){for(var f,h,b=u,v=0,g=!!m&&l(m,p,3);v<s;){if(v in c){if(f=g?g(c[v],v,n):c[v],h=!1,r(f)&&(h=void 0!==(h=f[o])?!!h:a(f)),h&&d>0)b=e(t,n,f,i(f.length),b,d-1)-1;else{if(b>=9007199254740991)throw TypeError();t[b]=f}b++}v++}return b}},1168:function(e,t,n){"use strict";n(1149),n(1162),n(1163),n(1150),n(1164),n(25),n(20),n(19),n(77),n(1151);var a=n(0),r=n.n(a),i=n(1161),l=n(1155),o=n(1172),c=n.n(o);t.a=function(e){var t=e.children,n=e.filters,o=Object(a.useState)(!1),s=o[0],u=o[1],d=Object(a.useState)(new Set),m=d[0],p=d[1],f=Object(a.useState)(!1),h=f[0],b=f[1],v=Object(a.useState)(null),g=v[0],y=v[1],O=[];t&&(O=Array.isArray(t)?t:[t]);var j=O.some((function(e){return e.props.common})),_=c()(O).flatMap((function(e){return e.props.groups})).uniq().value(),E=O.some((function(e){return e.props.required})),k=O;return s&&(k=k.filter((function(e){return e.props.common}))),m.size>0&&(k=k.filter((function(e){return Array.from(m).every((function(t){return e.props.groups.includes(t)}))}))),h&&(k=k.filter((function(e){return e.props.required}))),g&&(k=k.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,O.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},k.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return y(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(i.a,{values:_,currentState:m,setState:p}),j&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:s}),"common"),E&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return b(e.currentTarget.checked)},checked:h}),"required")))):null,!Array.isArray(k)||k.length>0?r.a.createElement("ul",{className:"connected-list"},k):r.a.createElement(l.a,{text:"no components found"}))}},1169:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1149),n(1162),n(1163);var a=n(0),r=n.n(a),i=n(1147),l=n.n(i),o=(n(1139),n(1181));function c(e){return e.includes(".")?'"'+e+'"':e}function s(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?c(t.name)+" = "+s(t.value):c(Object.keys(t)[0])+" = "+s(Object.values(t)[0]):e?c(e)+" = "+s(t):s(t);var n}function d(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var i=t[a];n.push(r.a.createElement("code",{key:i},s(i))),n.push(" ")}else for(var l in t)n.push(r.a.createElement("code",{key:l,className:"with-info-icon",title:t[l]},s(l))),n.push(" ");return n}function m(e){var t=e.name,n=e.path,a=e.values,i="";return a.forEach((function(e){n&&(i+=n+"."),i+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(o.a,{className:"language-toml"},i))}function p(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,s(n)),a)}function f(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,s(a)))}function h(e){var t=e.defaultValue,n=e.enumValues,i=e.examples,l=(e.groups,e.name),o=e.path,c=e.relevantWhen,s=e.required,u=e.unit,h=e.warnings,b=Object(a.useState)(!1),v=b[0],g=b[1];return r.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),c&&r.a.createElement("li",null,"Only ",s?"required":"relevant"," when:"," ",r.a.createElement(f,{value:c})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(p,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(d,{values:n})),(i.length>1||i[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(m,{name:l,path:o,values:i})))}t.a=function(e){var t=e.children,n=e.common,i=e.defaultValue,o=e.enumValues,c=e.examples,s=e.groups,u=e.name,d=e.path,m=e.relevantWhen,p=e.required,f=e.templateable,b=e.type,v=e.unit,g=e.warnings,y=Object(a.useState)(!1),O=y[0],j=(y[1],t);return O&&(j=j.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:l()({"field-required":p,"field-collapsed":O}),required:p},r.a.createElement("div",{className:"badges"},f&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),b&&r.a.createElement("span",{className:"badge badge--secondary"},b,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),o&&Object.keys(o).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),p?r.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!O&&"table"!=b&&r.a.createElement(h,{defaultValue:i,enumValues:o,examples:c,groups:s,name:u,path:d,relevantWhen:m,required:p,unit:v,warnings:g}))}},599:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),i=(n(0),n(1139)),l=n(1168),o=n(1169),c=n(1174),s=n(1173),u={last_modified_on:"2020-05-01",delivery_guarantee:"at_least_once",component_title:"Console",description:"The Vector `console` sink streams `log` and `metric` events to standard output streams, such as STDOUT and STDERR.",event_types:["log","metric"],function_category:"test",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+console%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'console|["log","metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/console.rs",status:"prod-ready",title:"Console Sink",unsupported_operating_systems:[]},d={id:"reference/sinks/console",title:"Console Sink",description:"The Vector `console` sink streams `log` and `metric` events to standard output streams, such as STDOUT and STDERR.",source:"@site/docs/reference/sinks/console.md",permalink:"/docs/reference/sinks/console",sidebar_label:'console|["log","metric"]'},m=[{value:"Configuration",id:"configuration",children:[{value:"encoding",id:"encoding",children:[]},{value:"target",id:"target",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Streaming",id:"streaming",children:[]}]}],p={rightToc:m};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"console")," sink\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(i.b)("inlineCode",{parentName:"a"},"metric"))," events to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Standard_streams"}),"standard output\nstreams"),", such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)"}),"STDOUT")," and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)"}),"STDERR"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(c.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "console" # required\n  inputs = ["my-source-or-transform-id"] # required\n  target = "stdout" # optional, default\n\n  # Encoding\n  encoding.codec = "json" # required\n'))),Object(i.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "console" # required\n  inputs = ["my-source-or-transform-id"] # required\n  target = "stdout" # optional, default\n\n  # Encoding\n  encoding.codec = "json" # required\n  encoding.except_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.only_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.timestamp_format = "rfc3339" # optional, default\n')))),Object(i.b)(l.a,{filters:!0,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],groups:[],name:"encoding",path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"Configures the encoding specific sink behavior."),Object(i.b)(l.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:{json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["json","text"],groups:[],name:"codec",path:"encoding",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"codec"},"codec"),Object(i.b)("p",null,"The encoding codec used to serialize the events before outputting.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:[],name:"except_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"except_fields"},"except_fields"),Object(i.b)("p",null,"Prevent the sink from encoding the specified labels.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:[],name:"only_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"only_fields"},"only_fields"),Object(i.b)("p",null,"Limit the sink to only encoding the specified labels.")),Object(i.b)(o.a,{common:!1,defaultValue:"rfc3339",enumValues:{rfc3339:"Format as an RFC3339 string",unix:"Format as a unix timestamp, can be parsed as a Clickhouse DateTime"},examples:["rfc3339","unix"],groups:[],name:"timestamp_format",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"timestamp_format"},"timestamp_format"),Object(i.b)("p",null,"How to format event timestamps.")))),Object(i.b)(o.a,{common:!0,defaultValue:"stdout",enumValues:{stdout:"Output will be written to [STDOUT][urls.stdout]",stderr:"Output will be written to [STDERR][urls.stderr]"},examples:["stdout","stderr"],groups:[],name:"target",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"target"},"target"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Standard_streams"}),"standard stream")," to write to."))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"streaming"},"Streaming"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"console")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."))}f.isMDXComponent=!0}}]);