(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1139:function(e,t,n){"use strict";var a=n(24),l=n(13),i=n(27),r=n(84),s=n(85),o=n(26),c=n(1145),u=n(86);l(l.S+l.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,l,m,p=i(e),d="function"==typeof this?this:Array,b=arguments.length,f=b>1?arguments[1]:void 0,h=void 0!==f,g=0,v=u(p);if(h&&(f=a(f,b>2?arguments[2]:void 0,2)),null==v||d==Array&&s(v))for(n=new d(t=o(p.length));t>g;g++)c(n,g,h?f(p[g],g):p[g]);else for(m=v.call(p),n=new d;!(l=m.next()).done;g++)c(n,g,h?r(m,f,[l.value,g],!0):l.value);return n.length=g,n}})},1140:function(e,t,n){"use strict";var a=n(1146),l=n(1141);e.exports=n(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(l(this,"Set"),e=0===e?0:e,e)}},a)},1141:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=n(1137),r=n(1136),s=n.n(r);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,r=e.text;return l.a.createElement(i.a,{to:"/vic/",className:s()("vic","vic--"+n,t)},l.a.createElement("div",{className:"icon"},l.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),r&&l.a.createElement("div",{className:"text"},r))}},1144:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=(n(1137),n(1142));t.a=function(e){var t=e.text;return l.a.createElement("section",{className:"empty"},l.a.createElement(i.a,{style:"no",text:t}))}},1145:function(e,t,n){"use strict";var a=n(28),l=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,l(0,n)):e[t]=n}},1146:function(e,t,n){"use strict";var a=n(28).f,l=n(82),i=n(80),r=n(24),s=n(78),o=n(79),c=n(54),u=n(83),m=n(87),p=n(10),d=n(1143).fastKey,b=n(1141),f=p?"_s":"size",h=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var u=e((function(e,a){s(e,u,t,"_i"),e._t=t,e._i=l(null),e._f=void 0,e._l=void 0,e[f]=0,null!=a&&o(a,n,e[c],e)}));return i(u.prototype,{clear:function(){for(var e=b(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[f]=0},delete:function(e){var n=b(this,t),a=h(n,e);if(a){var l=a.n,i=a.p;delete n._i[a.i],a.r=!0,i&&(i.n=l),l&&(l.p=i),n._f==a&&(n._f=l),n._l==a&&(n._l=i),n[f]--}return!!a},forEach:function(e){b(this,t);for(var n,a=r(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(b(this,t),e)}}),p&&a(u.prototype,"size",{get:function(){return b(this,t)[f]}}),u},def:function(e,t,n){var a,l,i=h(e,t);return i?i.v=n:(e._l=i={i:l=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=i),a&&(a.n=i),e[f]++,"F"!==l&&(e._i[l]=i)),e},getEntry:h,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=b(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),m(t)}}},1147:function(e,t,n){"use strict";var a=n(5),l=n(13),i=n(15),r=n(80),s=n(1143),o=n(79),c=n(78),u=n(12),m=n(14),p=n(81),d=n(39),b=n(1148);e.exports=function(e,t,n,f,h,g){var v=a[e],k=v,y=h?"set":"add",O=k&&k.prototype,j={},_=function(e){var t=O[e];i(O,e,"delete"==e||"has"==e?function(e){return!(g&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof k&&(g||O.forEach&&!m((function(){(new k).entries().next()})))){var w=new k,x=w[y](g?{}:-0,1)!=w,E=m((function(){w.has(1)})),T=p((function(e){new k(e)})),N=!g&&m((function(){for(var e=new k,t=5;t--;)e[y](t,t);return!e.has(-0)}));T||((k=t((function(t,n){c(t,k,e);var a=b(new v,t,k);return null!=n&&o(n,h,a[y],a),a}))).prototype=O,O.constructor=k),(E||N)&&(_("delete"),_("has"),h&&_("get")),(N||x)&&_(y),g&&O.clear&&delete O.clear}else k=f.getConstructor(t,e,h,y),r(k.prototype,n),s.NEED=!0;return d(k,e),j[e]=k,l(l.G+l.W+l.F*(k!=v),j),g||f.setStrong(k,e,h),k}},1148:function(e,t,n){var a=n(12),l=n(1149).set;e.exports=function(e,t,n){var i,r=t.constructor;return r!==n&&"function"==typeof r&&(i=r.prototype)!==n.prototype&&a(i)&&l&&l(e,i),e}},1149:function(e,t,n){var a=n(12),l=n(8),i=function(e,t){if(l(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(l){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},1150:function(e,t,n){"use strict";n(1140),n(77),n(1139),n(25),n(20),n(19),n(1138);var a=n(0),l=n.n(a),i=n(1157),r=n.n(i);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,i=e.name,s=e.setState,o=e.values;if(0==o.size)return null;var c=Array.from(o);return l.a.createElement(l.a.Fragment,null,c.map((function(e,o){var c="string"==typeof e&&n?r()(e):e;return l.a.createElement("label",{key:o},l.a.createElement("input",{checked:t.has(e),name:i,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),s(a)},type:"checkbox"}),c&&l.a.createElement(l.a.Fragment,null,a?l.a.createElement("i",{className:"feather icon-"+a}):""," ",c))})))}},1153:function(e,t,n){"use strict";var a=n(13),l=n(1154),i=n(27),r=n(26),s=n(29),o=n(1166);a(a.P,"Array",{flatMap:function(e){var t,n,a=i(this);return s(e),t=r(a.length),n=o(a,0),l(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1154:function(e,t,n){"use strict";var a=n(1165),l=n(12),i=n(26),r=n(24),s=n(2)("isConcatSpreadable");e.exports=function e(t,n,o,c,u,m,p,d){for(var b,f,h=u,g=0,v=!!p&&r(p,d,3);g<c;){if(g in o){if(b=v?v(o[g],g,n):o[g],f=!1,l(b)&&(f=void 0!==(f=b[s])?!!f:a(b)),f&&m>0)h=e(t,n,b,i(b.length),h,m-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=b}h++}g++}return h}},1155:function(e,t,n){"use strict";n(1138),n(1151),n(1152),n(1139),n(1153),n(25),n(20),n(19),n(77),n(1140);var a=n(0),l=n.n(a),i=n(1150),r=n(1144),s=n(1158),o=n.n(s);t.a=function(e){var t=e.children,n=e.filters,s=Object(a.useState)(!1),c=s[0],u=s[1],m=Object(a.useState)(new Set),p=m[0],d=m[1],b=Object(a.useState)(!1),f=b[0],h=b[1],g=Object(a.useState)(null),v=g[0],k=g[1],y=[];t&&(y=Array.isArray(t)?t:[t]);var O=y.some((function(e){return e.props.common})),j=o()(y).flatMap((function(e){return e.props.groups})).uniq().value(),_=y.some((function(e){return e.props.required})),w=y;return c&&(w=w.filter((function(e){return e.props.common}))),p.size>0&&(w=w.filter((function(e){return Array.from(p).every((function(t){return e.props.groups.includes(t)}))}))),f&&(w=w.filter((function(e){return e.props.required}))),v&&(w=w.filter((function(e){return e.props.name.toLowerCase().includes(v.toLowerCase())}))),l.a.createElement(l.a.Fragment,null,y.length>1&&!1!==n?l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"search"},l.a.createElement("span",{className:"search--result-count"},w.length," items"),l.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return k(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"filter--choices"},l.a.createElement(i.a,{values:j,currentState:p,setState:d}),O&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:c}),"common"),_&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:function(e){return h(e.currentTarget.checked)},checked:f}),"required")))):null,!Array.isArray(w)||w.length>0?l.a.createElement("ul",{className:"connected-list"},w):l.a.createElement(r.a,{text:"no components found"}))}},1156:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1138),n(1151),n(1152);var a=n(0),l=n.n(a),i=n(1136),r=n.n(i),s=(n(1128),n(1167));function o(e){return e.includes(".")?'"'+e+'"':e}function c(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?o(t.name)+" = "+c(t.value):o(Object.keys(t)[0])+" = "+c(Object.values(t)[0]):e?o(e)+" = "+c(t):c(t);var n}function m(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var i=t[a];n.push(l.a.createElement("code",{key:i},c(i))),n.push(" ")}else for(var r in t)n.push(l.a.createElement("code",{key:r,className:"with-info-icon",title:t[r]},c(r))),n.push(" ");return n}function p(e){var t=e.name,n=e.path,a=e.values,i="";return a.forEach((function(e){n&&(i+=n+"."),i+=u(t,e)+"\n"})),l.a.createElement("div",null,l.a.createElement(s.a,{className:"language-toml"},i))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=l.a.createElement(l.a.Fragment,null," (",t,")")),l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,c(n)),a)}function b(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:"#"+n},n))," ","= ",l.a.createElement("code",null,c(a)))}function f(e){var t=e.defaultValue,n=e.enumValues,i=e.examples,r=(e.groups,e.name),s=e.path,o=e.relevantWhen,c=e.required,u=e.unit,f=e.warnings,h=Object(a.useState)(!1),g=h[0],v=h[1];return l.a.createElement("ul",{className:"info"},f&&f.length>0&&f.map((function(e,t){return l.a.createElement("li",{key:t,className:"warning"},l.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),o&&l.a.createElement("li",null,"Only ",c?"required":"relevant"," when:"," ",l.a.createElement(b,{value:o})),void 0!==t?null!==t?l.a.createElement("li",null,"Default: ",l.a.createElement(d,{unit:u,value:t})):l.a.createElement("li",null,"No default"):null,n&&l.a.createElement("li",null,"Enum, must be one of: ",l.a.createElement(m,{values:n})),(i.length>1||i[0]!=t)&&l.a.createElement("li",null,l.a.createElement("div",{className:"show-more",onClick:function(){return v(!g)}},g?"Hide examples":"View examples"),g&&l.a.createElement(p,{name:r,path:s,values:i})))}t.a=function(e){var t=e.children,n=e.common,i=e.defaultValue,s=e.enumValues,o=e.examples,c=e.groups,u=e.name,m=e.path,p=e.relevantWhen,d=e.required,b=e.templateable,h=e.type,g=e.unit,v=e.warnings,k=Object(a.useState)(!1),y=k[0],O=(k[1],t);return y&&(O=O.filter((function(e){return"p"!=e.props.originalType}))),l.a.createElement("li",{className:r()({"field-required":d,"field-collapsed":y}),required:d},l.a.createElement("div",{className:"badges"},b&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),h&&l.a.createElement("span",{className:"badge badge--secondary"},h,g&&l.a.createElement(l.a.Fragment,null," (",g,")")),s&&Object.keys(s).length>0&&l.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?l.a.createElement("span",{className:"badge badge--danger"},"required",p&&"*"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!y&&"table"!=h&&l.a.createElement(f,{defaultValue:i,enumValues:s,examples:o,groups:c,name:u,path:m,relevantWhen:p,required:d,unit:g,warnings:v}))}},633:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return g}));var a=n(1),l=n(9),i=(n(0),n(1128)),r=n(1172),s=n(1155),o=n(1156),c=n(1164),u=n.n(c),m=n(1161),p=n(1160),d={last_modified_on:"2020-06-24",delivery_guarantee:"at_least_once",component_title:"Kafka",description:"The Vector `kafka` sink streams `log` events to Apache Kafka via the Kafka protocol.",event_types:["log"],function_category:"transmit",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+kafka%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'kafka|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/kafka.rs",status:"prod-ready",title:"Kafka Sink",unsupported_operating_systems:[]},b={id:"reference/sinks/kafka",title:"Kafka Sink",description:"The Vector `kafka` sink streams `log` events to Apache Kafka via the Kafka protocol.",source:"@site/docs/reference/sinks/kafka.md",permalink:"/docs/reference/sinks/kafka",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/sinks/kafka.md",sidebar_label:'kafka|["log"]',sidebar:"docs",previous:{title:"InfluxDB Metrics Sink",permalink:"/docs/reference/sinks/influxdb_metrics"},next:{title:"LogDNA Sink",permalink:"/docs/reference/sinks/logdna"}},f=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[{value:"bootstrap_servers",id:"bootstrap_servers",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"compression",id:"compression",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"key_field",id:"key_field",children:[]},{value:"librdkafka_options",id:"librdkafka_options",children:[]},{value:"message_timeout_ms",id:"message_timeout_ms",children:[]},{value:"sasl",id:"sasl",children:[]},{value:"socket_timeout_ms",id:"socket_timeout_ms",children:[]},{value:"tls",id:"tls",children:[]},{value:"topic",id:"topic",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"AWS Authentication",id:"aws-authentication",children:[]},{value:"Buffers",id:"buffers",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Streaming",id:"streaming",children:[]},{value:"TLS",id:"tls-1",children:[]},{value:"librdkafka",id:"librdkafka",children:[]}]}],h={rightToc:f};function g(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"kafka")," sink\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Apache\nKafka")," via the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kafka.apache.org/protocol"}),"Kafka protocol"),"."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)(r.a,{icon:!1,type:"danger",className:"list--icons list--icons--warnings",mdxType:"Alert"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kafka.apache.org/"}),"Kafka")," version ",Object(i.b)("inlineCode",{parentName:"li"},">= 0.8")," is required."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(m.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(p.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "kafka" # required\n  inputs = ["my-source-or-transform-id"] # required\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # required\n  compression = "none" # optional, default\n  healthcheck = true # optional, default\n  key_field = "user_id" # required\n  topic = "topic-1234" # required\n\n  # Encoding\n  encoding.codec = "json" # required\n'))),Object(i.b)(p.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "kafka" # required\n  inputs = ["my-source-or-transform-id"] # required\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # required\n  compression = "none" # optional, default\n  healthcheck = true # optional, default\n  key_field = "user_id" # required\n  message_timeout_ms = 300000 # optional, default\n  socket_timeout_ms = 60000 # optional, default\n  topic = "topic-1234" # required\n\n  # Advanced\n  librdkafka_options."client.id" = "${ENV_VAR}" # example\n  librdkafka_options."fetch.error.backoff.ms" = "1000" # example\n  librdkafka_options."socket.send.buffer.bytes" = "100" # example\n\n  # Buffer\n  buffer.max_events = 500 # optional, default, events, relevant when type = "memory"\n  buffer.max_size = 104900000 # required, bytes, required when type = "disk"\n  buffer.type = "memory" # optional, default\n  buffer.when_full = "block" # optional, default\n\n  # Encoding\n  encoding.codec = "json" # required\n  encoding.except_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.only_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.timestamp_format = "rfc3339" # optional, default\n\n  # SASL\n  sasl.enabled = true # optional, no default\n  sasl.mechanism = "SCRAM-SHA-256" # optional, no default\n  sasl.password = "password" # optional, no default\n  sasl.username = "username" # optional, no default\n\n  # TLS\n  tls.ca_file = "/path/to/certificate_authority.crt" # optional, no default\n  tls.crt_file = "/path/to/host_certificate.crt" # optional, no default\n  tls.enabled = false # optional, default\n  tls.key_file = "/path/to/host_certificate.key" # optional, no default\n  tls.key_pass = "${KEY_PASS_ENV_VAR}" # optional, no default\n')))),Object(i.b)(s.a,{filters:!0,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["10.14.22.123:9092,10.14.23.332:9092"],groups:[],name:"bootstrap_servers",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"bootstrap_servers"},"bootstrap_servers"),Object(i.b)("p",null,'A comma-separated list of host and port pairs that are the addresses of the\nKafka brokers in a "bootstrap" Kafka cluster that a Kafka client connects to\ninitially to bootstrap itself.')),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"buffer"},"buffer"),Object(i.b)("p",null,"Configures the sink specific buffer behavior."),Object(i.b)(s.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:500,enumValues:null,examples:[500],groups:[],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"uint",unit:"events",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum number of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"events")," allowed in the buffer.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],groups:[],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!0,templateable:!1,type:"uint",unit:"bytes",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"max_size"},"max_size"),Object(i.b)("p",null,"The maximum size of the buffer on the disk.")),Object(i.b)(o.a,{common:!0,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant, but less durable. Data will be lost if Vector is restarted forcefully.",disk:"Stores the sink's buffer on disk. This is less performant, but durable. Data will not be lost between restarts."},examples:["memory","disk"],groups:[],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"type"},"type"),Object(i.b)("p",null,"The buffer's type and storage mechanism.")),Object(i.b)(o.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],groups:[],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"when_full"},"when_full"),Object(i.b)("p",null,"The behavior when the buffer becomes full.")))),Object(i.b)(o.a,{common:!0,defaultValue:"none",enumValues:{none:"No compression.",gzip:"[Gzip][urls.gzip] standard DEFLATE compression.",lz4:"High speed [LZ4 compression][urls.lz4].",snappy:"High speed [Snappy compression][urls.snappy], developed by Google. Slower than [LZ4][urls.lz4] but higher compression.",zstd:"[Zstandard compression][urls.zstd], developed at Facebook. Faster than [Gzip][urls.gzip] at similar compression ratios."},examples:["none","gzip","lz4","snappy","zstd"],groups:[],name:"compression",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"compression"},"compression"),Object(i.b)("p",null,"The compression strategy used to compress the encoded event data before\ntransmission.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],groups:[],name:"encoding",path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"Configures the encoding specific sink behavior."),Object(i.b)(s.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:{json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the [`message`](#message) key and the payload is new line delimited."},examples:["json","text"],groups:[],name:"codec",path:"encoding",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"codec"},"codec"),Object(i.b)("p",null,"The encoding codec used to serialize the events before outputting.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:[],name:"except_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"except_fields"},"except_fields"),Object(i.b)("p",null,"Prevent the sink from encoding the specified labels.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:[],name:"only_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"only_fields"},"only_fields"),Object(i.b)("p",null,"Limit the sink to only encoding the specified labels.")),Object(i.b)(o.a,{common:!1,defaultValue:"rfc3339",enumValues:{rfc3339:"Format as an RFC3339 string",unix:"Format as a unix timestamp, can be parsed as a Clickhouse DateTime"},examples:["rfc3339","unix"],groups:[],name:"timestamp_format",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"timestamp_format"},"timestamp_format"),Object(i.b)("p",null,"How to format event timestamps.")))),Object(i.b)(o.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["user_id"],groups:[],name:"key_field",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"key_field"},"key_field"),Object(i.b)("p",null,"The log field name to use for the topic key. If unspecified, the key will be\nrandomly generated. If the field does not exist on the log, a blank value will\nbe used.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"librdkafka_options",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"librdkafka_options"},"librdkafka_options"),Object(i.b)("p",null,"Advanced options. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"}),"librdkafka documentation")," for\ndetails."),Object(i.b)(s.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[{"client.id":"${ENV_VAR}"},{"fetch.error.backoff.ms":"1000"},{"socket.send.buffer.bytes":"100"}],groups:[],name:"`[field-name]`",path:"librdkafka_options",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"field-name"},Object(i.b)("inlineCode",{parentName:"h4"},"[field-name]")),Object(i.b)("p",null,"The options and their values. Accepts ",Object(i.b)("inlineCode",{parentName:"p"},"string")," values.")))),Object(i.b)(o.a,{common:!1,defaultValue:3e5,enumValues:null,examples:[15e4,45e4],groups:[],name:"message_timeout_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"message_timeout_ms"},"message_timeout_ms"),Object(i.b)("p",null,"Local message timeout.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"sasl",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"sasl"},"sasl"),Object(i.b)("p",null,"Options for SASL/SCRAM authentication support."),Object(i.b)(s.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[!0,!1],groups:[],name:"enabled",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"enabled"},"enabled"),Object(i.b)("p",null,"Enable SASL/SCRAM authentication to the remote.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["SCRAM-SHA-256","SCRAM-SHA-512"],groups:[],name:"mechanism",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"mechanism"},"mechanism"),Object(i.b)("p",null,"The Kafka SASL/SCRAM mechanisms.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["password"],groups:[],name:"password",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"password"},"password"),Object(i.b)("p",null,"The Kafka SASL/SCRAM authentication password.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["username"],groups:[],name:"username",path:"sasl",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"username"},"username"),Object(i.b)("p",null,"The Kafka SASL/SCRAM authentication username.")))),Object(i.b)(o.a,{common:!1,defaultValue:6e4,enumValues:null,examples:[3e4,9e4],groups:[],name:"socket_timeout_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"socket_timeout_ms"},"socket_timeout_ms"),Object(i.b)("p",null,"Default timeout for network requests.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"tls"},"tls"),Object(i.b)("p",null,"Configures the TLS options for connections from this sink."),Object(i.b)(s.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],groups:[],name:"ca_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"ca_file"},"ca_file"),Object(i.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format\n(X.509), or an inline CA certificate in PEM format.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],groups:[],name:"crt_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"crt_file"},"crt_file"),Object(i.b)("p",null,"Absolute path to a certificate file used to identify this connection, in DER or\nPEM format (X.509) or PKCS#12, or an inline certificate in PEM format. If this\nis set and is not a PKCS#12 archive, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#key_file"}),Object(i.b)("inlineCode",{parentName:"a"},"key_file"))," must also be set.")),Object(i.b)(o.a,{common:!0,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"enabled",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"enabled-1"},"enabled"),Object(i.b)("p",null,"Enable TLS during connections to the remote.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],groups:[],name:"key_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"key_file"},"key_file"),Object(i.b)("p",null,"Absolute path to a private key file used to identify this connection, in DER or\nPEM format (PKCS#8), or an inline private key in PEM format. If this is set,\n",Object(i.b)("inlineCode",{parentName:"p"},"crt_file")," must also be set.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["${KEY_PASS_ENV_VAR}","PassWord1"],groups:[],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"key_pass"},"key_pass"),Object(i.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless\n",Object(i.b)("inlineCode",{parentName:"p"},"key_file")," is set.")))),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["topic-1234","logs-{{unit}}-%Y-%m-%d"],groups:[],name:"topic",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"topic"},"topic"),Object(i.b)("p",null,"The Kafka topic name to write events to."))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"aws-authentication"},"AWS Authentication"),Object(i.b)("p",null,"Vector checks for AWS credentials in the following order:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Environment variables ",Object(i.b)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",Object(i.b)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),"."),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sourcing-external.html"}),Object(i.b)("inlineCode",{parentName:"a"},"credential_process")," command")," in the AWS config file. (usually located at ",Object(i.b)("inlineCode",{parentName:"li"},"~/.aws/config"),")"),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"AWS credentials file"),". (usually located at ",Object(i.b)("inlineCode",{parentName:"li"},"~/.aws/credentials"),")"),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html"}),"IAM instance profile"),". (will only work if running on an EC2 instance with an instance profile/role)")),Object(i.b)("p",null,"If credentials are not found the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#healthchecks"}),"healtcheck")," will fail and an\nerror will be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/monitoring/#logs"}),"logged"),"."),Object(i.b)("h4",{id:"obtaining-an-access-key"},"Obtaining an access key"),Object(i.b)("p",null,"In general, we recommend using instance profiles/roles whenever possible. In\ncases where this is not possible you can generate an AWS access key for any user\nwithin your AWS account. AWS provides a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"}),"detailed guide")," on\nhow to do this."),Object(i.b)("h3",{id:"buffers"},"Buffers"),Object(i.b)(u.a,{src:"/img/buffers.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"kafka")," sink buffers events as shown in\nthe diagram above. This helps to smooth out data processing if the downstream\nservice applies backpressure. Buffers are controlled via the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffer"}),Object(i.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"streaming"},"Streaming"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"kafka")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."),Object(i.b)("h3",{id:"tls-1"},"TLS"),Object(i.b)("p",null,"Vector uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openssl.org/"}),"Openssl")," for TLS protocols for it's battle-tested\nand reliable security. You can enable and adjust TLS behavior via the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#tls"}),Object(i.b)("inlineCode",{parentName:"a"},"tls.*")),"\noptions."),Object(i.b)("h3",{id:"librdkafka"},"librdkafka"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"kafka")," sink uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka"}),Object(i.b)("inlineCode",{parentName:"a"},"librdkafka"))," under the hood. This\nis a battle tested, performant, and reliabile library that facilitates\ncommunication with Kafka. And because Vector produces static MUSL builds,\nthis dependency is packaged with Vector, meaning you do not need to install it."))}g.isMDXComponent=!0}}]);