(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1129:function(e,t,n){"use strict";var a=n(24),l=n(13),r=n(27),i=n(84),s=n(85),o=n(26),u=n(1135),c=n(86);l(l.S+l.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,l,m,p=r(e),d="function"==typeof this?this:Array,b=arguments.length,f=b>1?arguments[1]:void 0,h=void 0!==f,g=0,v=c(p);if(h&&(f=a(f,b>2?arguments[2]:void 0,2)),null==v||d==Array&&s(v))for(n=new d(t=o(p.length));t>g;g++)u(n,g,h?f(p[g],g):p[g]);else for(m=v.call(p),n=new d;!(l=m.next()).done;g++)u(n,g,h?i(m,f,[l.value,g],!0):l.value);return n.length=g,n}})},1130:function(e,t,n){"use strict";var a=n(1136),l=n(1131);e.exports=n(1137)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(l(this,"Set"),e=0===e?0:e,e)}},a)},1131:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1132:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(1127),i=n(1126),s=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return l.a.createElement(r.a,{to:"/vic/",className:s()("vic","vic--"+n,t)},l.a.createElement("div",{className:"icon"},l.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&l.a.createElement("div",{className:"text"},i))}},1134:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=(n(1127),n(1132));t.a=function(e){var t=e.text;return l.a.createElement("section",{className:"empty"},l.a.createElement(r.a,{style:"no",text:t}))}},1135:function(e,t,n){"use strict";var a=n(28),l=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,l(0,n)):e[t]=n}},1136:function(e,t,n){"use strict";var a=n(28).f,l=n(82),r=n(80),i=n(24),s=n(78),o=n(79),u=n(54),c=n(83),m=n(87),p=n(10),d=n(1133).fastKey,b=n(1131),f=p?"_s":"size",h=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,u){var c=e((function(e,a){s(e,c,t,"_i"),e._t=t,e._i=l(null),e._f=void 0,e._l=void 0,e[f]=0,null!=a&&o(a,n,e[u],e)}));return r(c.prototype,{clear:function(){for(var e=b(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[f]=0},delete:function(e){var n=b(this,t),a=h(n,e);if(a){var l=a.n,r=a.p;delete n._i[a.i],a.r=!0,r&&(r.n=l),l&&(l.p=r),n._f==a&&(n._f=l),n._l==a&&(n._l=r),n[f]--}return!!a},forEach:function(e){b(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(b(this,t),e)}}),p&&a(c.prototype,"size",{get:function(){return b(this,t)[f]}}),c},def:function(e,t,n){var a,l,r=h(e,t);return r?r.v=n:(e._l=r={i:l=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=r),a&&(a.n=r),e[f]++,"F"!==l&&(e._i[l]=r)),e},getEntry:h,setStrong:function(e,t,n){u(e,t,(function(e,n){this._t=b(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?c(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),m(t)}}},1137:function(e,t,n){"use strict";var a=n(5),l=n(13),r=n(15),i=n(80),s=n(1133),o=n(79),u=n(78),c=n(12),m=n(14),p=n(81),d=n(40),b=n(1138);e.exports=function(e,t,n,f,h,g){var v=a[e],_=v,y=h?"set":"add",O=_&&_.prototype,k={},j=function(e){var t=O[e];r(O,e,"delete"==e||"has"==e?function(e){return!(g&&!c(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!c(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof _&&(g||O.forEach&&!m((function(){(new _).entries().next()})))){var x=new _,w=x[y](g?{}:-0,1)!=x,E=m((function(){x.has(1)})),T=p((function(e){new _(e)})),V=!g&&m((function(){for(var e=new _,t=5;t--;)e[y](t,t);return!e.has(-0)}));T||((_=t((function(t,n){u(t,_,e);var a=b(new v,t,_);return null!=n&&o(n,h,a[y],a),a}))).prototype=O,O.constructor=_),(E||V)&&(j("delete"),j("has"),h&&j("get")),(V||w)&&j(y),g&&O.clear&&delete O.clear}else _=f.getConstructor(t,e,h,y),i(_.prototype,n),s.NEED=!0;return d(_,e),k[e]=_,l(l.G+l.W+l.F*(_!=v),k),g||f.setStrong(_,e,h),_}},1138:function(e,t,n){var a=n(12),l=n(1139).set;e.exports=function(e,t,n){var r,i=t.constructor;return i!==n&&"function"==typeof i&&(r=i.prototype)!==n.prototype&&a(r)&&l&&l(e,r),e}},1139:function(e,t,n){var a=n(12),l=n(8),r=function(e,t){if(l(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1156).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(l){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:r}},1140:function(e,t,n){"use strict";n(1130),n(77),n(1129),n(25),n(20),n(19),n(1128);var a=n(0),l=n.n(a),r=n(1149),i=n.n(r);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,r=e.name,s=e.setState,o=e.values;if(0==o.size)return null;var u=Array.from(o);return l.a.createElement(l.a.Fragment,null,u.map((function(e,o){var u="string"==typeof e&&n?i()(e):e;return l.a.createElement("label",{key:o},l.a.createElement("input",{checked:t.has(e),name:r,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),s(a)},type:"checkbox"}),u&&l.a.createElement(l.a.Fragment,null,a?l.a.createElement("i",{className:"feather icon-"+a}):""," ",u))})))}},1143:function(e,t,n){"use strict";var a=n(13),l=n(1144),r=n(27),i=n(26),s=n(29),o=n(1159);a(a.P,"Array",{flatMap:function(e){var t,n,a=r(this);return s(e),t=i(a.length),n=o(a,0),l(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1144:function(e,t,n){"use strict";var a=n(1158),l=n(12),r=n(26),i=n(24),s=n(2)("isConcatSpreadable");e.exports=function e(t,n,o,u,c,m,p,d){for(var b,f,h=c,g=0,v=!!p&&i(p,d,3);g<u;){if(g in o){if(b=v?v(o[g],g,n):o[g],f=!1,l(b)&&(f=void 0!==(f=b[s])?!!f:a(b)),f&&m>0)h=e(t,n,b,r(b.length),h,m-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=b}h++}g++}return h}},1147:function(e,t,n){"use strict";n(1128),n(1141),n(1142),n(1129),n(1143),n(25),n(20),n(19),n(77),n(1130);var a=n(0),l=n.n(a),r=n(1140),i=n(1134),s=n(1151),o=n.n(s);t.a=function(e){var t=e.children,n=e.filters,s=Object(a.useState)(!1),u=s[0],c=s[1],m=Object(a.useState)(new Set),p=m[0],d=m[1],b=Object(a.useState)(!1),f=b[0],h=b[1],g=Object(a.useState)(null),v=g[0],_=g[1],y=[];t&&(y=Array.isArray(t)?t:[t]);var O=y.some((function(e){return e.props.common})),k=o()(y).flatMap((function(e){return e.props.groups})).uniq().value(),j=y.some((function(e){return e.props.required})),x=y;return u&&(x=x.filter((function(e){return e.props.common}))),p.size>0&&(x=x.filter((function(e){return Array.from(p).every((function(t){return e.props.groups.includes(t)}))}))),f&&(x=x.filter((function(e){return e.props.required}))),v&&(x=x.filter((function(e){return e.props.name.toLowerCase().includes(v.toLowerCase())}))),l.a.createElement(l.a.Fragment,null,y.length>1&&!1!==n?l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"search"},l.a.createElement("span",{className:"search--result-count"},x.length," items"),l.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return _(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"filter--choices"},l.a.createElement(r.a,{values:k,currentState:p,setState:d}),O&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:function(e){return c(e.currentTarget.checked)},checked:u}),"common"),j&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:function(e){return h(e.currentTarget.checked)},checked:f}),"required")))):null,!Array.isArray(x)||x.length>0?l.a.createElement("ul",{className:"connected-list"},x):l.a.createElement(i.a,{text:"no components found"}))}},1148:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1128),n(1141),n(1142);var a=n(0),l=n.n(a),r=n(1126),i=n.n(r),s=(n(1118),n(1160));function o(e){return e.includes(".")?'"'+e+'"':e}function u(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function c(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?o(t.name)+" = "+u(t.value):o(Object.keys(t)[0])+" = "+u(Object.values(t)[0]):e?o(e)+" = "+u(t):u(t);var n}function m(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var r=t[a];n.push(l.a.createElement("code",{key:r},u(r))),n.push(" ")}else for(var i in t)n.push(l.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},u(i))),n.push(" ");return n}function p(e){var t=e.name,n=e.path,a=e.values,r="";return a.forEach((function(e){n&&(r+=n+"."),r+=c(t,e)+"\n"})),l.a.createElement("div",null,l.a.createElement(s.a,{className:"language-toml"},r))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=l.a.createElement(l.a.Fragment,null," (",t,")")),l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,u(n)),a)}function b(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:"#"+n},n))," ","= ",l.a.createElement("code",null,u(a)))}function f(e){var t=e.defaultValue,n=e.enumValues,r=e.examples,i=(e.groups,e.name),s=e.path,o=e.relevantWhen,u=e.required,c=e.unit,f=e.warnings,h=Object(a.useState)(!1),g=h[0],v=h[1];return l.a.createElement("ul",{className:"info"},f&&f.length>0&&f.map((function(e,t){return l.a.createElement("li",{key:t,className:"warning"},l.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),o&&l.a.createElement("li",null,"Only ",u?"required":"relevant"," when:"," ",l.a.createElement(b,{value:o})),void 0!==t?null!==t?l.a.createElement("li",null,"Default: ",l.a.createElement(d,{unit:c,value:t})):l.a.createElement("li",null,"No default"):null,n&&l.a.createElement("li",null,"Enum, must be one of: ",l.a.createElement(m,{values:n})),(r.length>1||r[0]!=t)&&l.a.createElement("li",null,l.a.createElement("div",{className:"show-more",onClick:function(){return v(!g)}},g?"Hide examples":"View examples"),g&&l.a.createElement(p,{name:i,path:s,values:r})))}t.a=function(e){var t=e.children,n=e.common,r=e.defaultValue,s=e.enumValues,o=e.examples,u=e.groups,c=e.name,m=e.path,p=e.relevantWhen,d=e.required,b=e.templateable,h=e.type,g=e.unit,v=e.warnings,_=Object(a.useState)(!1),y=_[0],O=(_[1],t);return y&&(O=O.filter((function(e){return"p"!=e.props.originalType}))),l.a.createElement("li",{className:i()({"field-required":d,"field-collapsed":y}),required:d},l.a.createElement("div",{className:"badges"},b&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),h&&l.a.createElement("span",{className:"badge badge--secondary"},h,g&&l.a.createElement(l.a.Fragment,null," (",g,")")),s&&Object.keys(s).length>0&&l.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?l.a.createElement("span",{className:"badge badge--danger"},"required",p&&"*"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!y&&"table"!=h&&l.a.createElement(f,{defaultValue:r,enumValues:s,examples:o,groups:u,name:c,path:m,relevantWhen:p,required:d,unit:g,warnings:v}))}},947:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n(1),l=n(9),r=(n(0),n(1118)),i=n(1162),s=n(1147),o=n(1148),u=n(1153),c=n(1152),m={last_modified_on:"2020-06-24",delivery_guarantee:"at_least_once",component_title:"Kafka",description:"The Vector `kafka` source ingests data through Kafka and outputs `log` events.",event_types:["log"],function_category:"collect",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+kafka%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'kafka|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/kafka.rs",status:"beta",title:"Kafka Source",unsupported_operating_systems:[]},p={id:"reference/sources/kafka",title:"Kafka Source",description:"The Vector `kafka` source ingests data through Kafka and outputs `log` events.",source:"@site/docs/reference/sources/kafka.md",permalink:"/docs/reference/sources/kafka",sidebar_label:'kafka|["log"]'},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[{value:"auto_offset_reset",id:"auto_offset_reset",children:[]},{value:"bootstrap_servers",id:"bootstrap_servers",children:[]},{value:"commit_interval_ms",id:"commit_interval_ms",children:[]},{value:"fetch_wait_max_ms",id:"fetch_wait_max_ms",children:[]},{value:"group_id",id:"group_id",children:[]},{value:"key_field",id:"key_field",children:[]},{value:"librdkafka_options",id:"librdkafka_options",children:[]},{value:"sasl",id:"sasl",children:[]},{value:"session_timeout_ms",id:"session_timeout_ms",children:[]},{value:"socket_timeout_ms",id:"socket_timeout_ms",children:[]},{value:"tls",id:"tls",children:[]},{value:"topics",id:"topics",children:[]}]},{value:"Fields",id:"fields",children:[{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"TLS",id:"tls-1",children:[]},{value:"librdkafka",id:"librdkafka",children:[]}]}],b={rightToc:d};function f(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," source\ningests data through ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Kafka")," and outputs\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)(i.a,{icon:!1,type:"danger",className:"list--icons list--icons--warnings",mdxType:"Alert"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kafka.apache.org/"}),"Kafka")," version ",Object(r.b)("inlineCode",{parentName:"li"},">= 0.8")," is required."))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(u.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "kafka" # required\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # required\n  group_id = "consumer-group-name" # required\n  key_field = "message_key" # optional, no default\n  topics = ["^(prefix1|prefix2)-.+", "topic-1", "topic-2"] # required\n'))),Object(r.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  # General\n  type = "kafka" # required\n  auto_offset_reset = "largest" # optional, default\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # required\n  commit_interval_ms = 5000 # optional, default, milliseconds\n  fetch_wait_max_ms = 100 # optional, default, milliseconds\n  group_id = "consumer-group-name" # required\n  key_field = "message_key" # optional, no default\n  session_timeout_ms = 10000 # optional, default, milliseconds\n  socket_timeout_ms = 60000 # optional, default, milliseconds\n  topics = ["^(prefix1|prefix2)-.+", "topic-1", "topic-2"] # required\n\n  # Advanced\n  librdkafka_options."client.id" = "${ENV_VAR}" # example\n  librdkafka_options."fetch.error.backoff.ms" = "1000" # example\n  librdkafka_options."socket.send.buffer.bytes" = "100" # example\n\n  # SASL\n  sasl.enabled = true # optional, no default\n  sasl.mechanism = "SCRAM-SHA-256" # optional, no default\n  sasl.password = "password" # optional, no default\n  sasl.username = "username" # optional, no default\n\n  # TLS\n  tls.ca_file = "/path/to/certificate_authority.crt" # optional, no default\n  tls.crt_file = "/path/to/host_certificate.crt" # optional, no default\n  tls.enabled = false # optional, default\n  tls.key_file = "/path/to/host_certificate.key" # optional, no default\n  tls.key_pass = "${KEY_PASS_ENV_VAR}" # optional, no default\n')))),Object(r.b)(s.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!1,defaultValue:"largest",enumValues:null,examples:["smallest","earliest","beginning","largest","latest","end","error"],groups:[],name:"auto_offset_reset",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"auto_offset_reset"},"auto_offset_reset"),Object(r.b)("p",null,"If offsets for consumer group do not exist, set them using this strategy.\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"}),"librdkafka documentation")," for ",Object(r.b)("inlineCode",{parentName:"p"},"auto.offset.reset"),"\noption for explanation.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["10.14.22.123:9092,10.14.23.332:9092"],groups:[],name:"bootstrap_servers",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"bootstrap_servers"},"bootstrap_servers"),Object(r.b)("p",null,'A comma-separated list of host and port pairs that are the addresses of the\nKafka brokers in a "bootstrap" Kafka cluster that a Kafka client connects to\ninitially to bootstrap itself.')),Object(r.b)(o.a,{common:!1,defaultValue:5e3,enumValues:null,examples:[5e3,1e4],groups:[],name:"commit_interval_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"milliseconds",warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"commit_interval_ms"},"commit_interval_ms"),Object(r.b)("p",null,"The frequency that the consumer offsets are committed (written) to offset\nstorage.")),Object(r.b)(o.a,{common:!1,defaultValue:100,enumValues:null,examples:[50,100],groups:[],name:"fetch_wait_max_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"milliseconds",warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"fetch_wait_max_ms"},"fetch_wait_max_ms"),Object(r.b)("p",null,"Maximum time the broker may wait to fill the response.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["consumer-group-name"],groups:[],name:"group_id",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"group_id"},"group_id"),Object(r.b)("p",null,"The consumer group name to be used to consume events from Kafka.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["message_key"],groups:[],name:"key_field",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"key_field"},"key_field"),Object(r.b)("p",null,"The log field name to use for the Kafka message key. If unspecified, the key\nwould not be added to the log event. If the message has null key, then this\nfield would not be added to the log event.")),Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"librdkafka_options",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"librdkafka_options"},"librdkafka_options"),Object(r.b)("p",null,"Advanced options. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"}),"librdkafka documentation")," for\ndetails."),Object(r.b)(s.a,{filters:!1,mdxType:"Fields"},Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[{"client.id":"${ENV_VAR}"},{"fetch.error.backoff.ms":"1000"},{"socket.send.buffer.bytes":"100"}],groups:[],name:"`[field-name]`",path:"librdkafka_options",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"field-name"},Object(r.b)("inlineCode",{parentName:"h4"},"[field-name]")),Object(r.b)("p",null,"The options and their values. Accepts ",Object(r.b)("inlineCode",{parentName:"p"},"string")," values.")))),Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"sasl",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"sasl"},"sasl"),Object(r.b)("p",null,"Options for SASL/SCRAM authentication support."),Object(r.b)(s.a,{filters:!1,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[!0,!1],groups:[],name:"enabled",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"enabled"},"enabled"),Object(r.b)("p",null,"Enable SASL/SCRAM authentication to the remote.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["SCRAM-SHA-256","SCRAM-SHA-512"],groups:[],name:"mechanism",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"mechanism"},"mechanism"),Object(r.b)("p",null,"The Kafka SASL/SCRAM mechanisms.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["password"],groups:[],name:"password",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"password"},"password"),Object(r.b)("p",null,"The Kafka SASL/SCRAM authentication password.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["username"],groups:[],name:"username",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"username"},"username"),Object(r.b)("p",null,"The Kafka SASL/SCRAM authentication username.")))),Object(r.b)(o.a,{common:!1,defaultValue:1e4,enumValues:null,examples:[5e3,1e4],groups:[],name:"session_timeout_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"milliseconds",warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"session_timeout_ms"},"session_timeout_ms"),Object(r.b)("p",null,"The Kafka session timeout in milliseconds.")),Object(r.b)(o.a,{common:!1,defaultValue:6e4,enumValues:null,examples:[3e4,6e4],groups:[],name:"socket_timeout_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"milliseconds",warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"socket_timeout_ms"},"socket_timeout_ms"),Object(r.b)("p",null,"Default timeout for network requests.")),Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"tls"},"tls"),Object(r.b)("p",null,"Configures the TLS options for connections from this sink."),Object(r.b)(s.a,{filters:!1,mdxType:"Fields"},Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],groups:[],name:"ca_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"ca_file"},"ca_file"),Object(r.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format\n(X.509), or an inline CA certificate in PEM format.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],groups:[],name:"crt_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"crt_file"},"crt_file"),Object(r.b)("p",null,"Absolute path to a certificate file used to identify this connection, in DER or\nPEM format (X.509) or PKCS#12, or an inline certificate in PEM format. If this\nis set and is not a PKCS#12 archive, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#key_file"}),Object(r.b)("inlineCode",{parentName:"a"},"key_file"))," must also be set.")),Object(r.b)(o.a,{common:!0,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"enabled",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"enabled-1"},"enabled"),Object(r.b)("p",null,"Enable TLS during connections to the remote.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],groups:[],name:"key_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"key_file"},"key_file"),Object(r.b)("p",null,"Absolute path to a private key file used to identify this connection, in DER or\nPEM format (PKCS#8), or an inline private key in PEM format. If this is set,\n",Object(r.b)("inlineCode",{parentName:"p"},"crt_file")," must also be set.")),Object(r.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["${KEY_PASS_ENV_VAR}","PassWord1"],groups:[],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"key_pass"},"key_pass"),Object(r.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless\n",Object(r.b)("inlineCode",{parentName:"p"},"key_file")," is set.")))),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[["^(prefix1|prefix2)-.+","topic-1","topic-2"]],groups:[],name:"topics",path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"topics"},"topics"),Object(r.b)("p",null,"The Kafka topics names to read events from. Regex is supported if the topic\nbegins with ",Object(r.b)("inlineCode",{parentName:"p"},"^"),"."))),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="example log event"',title:'"example',log:!0,'event"':!0}),'{\n  // ...\n  "message": "Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n  // ...\n}\n')),Object(r.b)(s.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],groups:[],name:"message",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The raw event message, unaltered.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],groups:[],name:"timestamp",path:null,relevantWhen:null,required:!0,templateable:!1,type:"timestamp",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"The exact time the event was ingested."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(r.b)("h3",{id:"tls-1"},"TLS"),Object(r.b)("p",null,"Vector uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openssl.org/"}),"Openssl")," for TLS protocols for it's battle-tested\nand reliable security. You can enable and adjust TLS behavior via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#tls"}),Object(r.b)("inlineCode",{parentName:"a"},"tls.*")),"\noptions."),Object(r.b)("h3",{id:"librdkafka"},"librdkafka"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," source uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka"}),Object(r.b)("inlineCode",{parentName:"a"},"librdkafka"))," under the hood. This\nis a battle tested, performant, and reliabile library that facilitates\ncommunication with Kafka. And because Vector produces static MUSL builds,\nthis dependency is packaged with Vector, meaning you do not need to install it."))}f.isMDXComponent=!0}}]);