(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1139:function(e,t,a){"use strict";var n=a(24),r=a(13),i=a(27),l=a(84),c=a(85),s=a(26),o=a(1145),u=a(86);r(r.S+r.F*!a(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,r,m,b=i(e),d="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,f=void 0!==h,v=0,O=u(b);if(f&&(h=n(h,p>2?arguments[2]:void 0,2)),null==O||d==Array&&c(O))for(a=new d(t=s(b.length));t>v;v++)o(a,v,f?h(b[v],v):b[v]);else for(m=O.call(b),a=new d;!(r=m.next()).done;v++)o(a,v,f?l(m,h,[r.value,v],!0):r.value);return a.length=v,a}})},1140:function(e,t,a){"use strict";var n=a(1146),r=a(1141);e.exports=a(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(r(this,"Set"),e=0===e?0:e,e)}},n)},1141:function(e,t,a){var n=a(12);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1137),l=a(1136),c=a.n(l);a(131);t.a=function(e){var t=e.className,a=e.size,n=e.style,l=e.text;return r.a.createElement(i.a,{to:"/vic/",className:c()("vic","vic--"+a,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+n+".svg",alt:"Vic - The Vector Mascot"})),l&&r.a.createElement("div",{className:"text"},l))}},1144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(1137),a(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(i.a,{style:"no",text:t}))}},1145:function(e,t,a){"use strict";var n=a(28),r=a(53);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},1146:function(e,t,a){"use strict";var n=a(28).f,r=a(82),i=a(80),l=a(24),c=a(78),s=a(79),o=a(54),u=a(83),m=a(87),b=a(10),d=a(1143).fastKey,p=a(1141),h=b?"_s":"size",f=function(e,t){var a,n=d(t);if("F"!==n)return e._i[n];for(a=e._f;a;a=a.n)if(a.k==t)return a};e.exports={getConstructor:function(e,t,a,o){var u=e((function(e,n){c(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[h]=0,null!=n&&s(n,a,e[o],e)}));return i(u.prototype,{clear:function(){for(var e=p(this,t),a=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete a[n.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var a=p(this,t),n=f(a,e);if(n){var r=n.n,i=n.p;delete a._i[n.i],n.r=!0,i&&(i.n=r),r&&(r.p=i),a._f==n&&(a._f=r),a._l==n&&(a._l=i),a[h]--}return!!n},forEach:function(e){p(this,t);for(var a,n=l(e,arguments.length>1?arguments[1]:void 0,3);a=a?a.n:this._f;)for(n(a.v,a.k,this);a&&a.r;)a=a.p},has:function(e){return!!f(p(this,t),e)}}),b&&n(u.prototype,"size",{get:function(){return p(this,t)[h]}}),u},def:function(e,t,a){var n,r,i=f(e,t);return i?i.v=a:(e._l=i={i:r=d(t,!0),k:t,v:a,p:n=e._l,n:void 0,r:!1},e._f||(e._f=i),n&&(n.n=i),e[h]++,"F"!==r&&(e._i[r]=i)),e},getEntry:f,setStrong:function(e,t,a){o(e,t,(function(e,a){this._t=p(e,t),this._k=a,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),a?"entries":"values",!a,!0),m(t)}}},1147:function(e,t,a){"use strict";var n=a(5),r=a(13),i=a(15),l=a(80),c=a(1143),s=a(79),o=a(78),u=a(12),m=a(14),b=a(81),d=a(39),p=a(1148);e.exports=function(e,t,a,h,f,v){var O=n[e],g=O,j=f?"set":"add",_=g&&g.prototype,y={},w=function(e){var t=_[e];i(_,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,a){return t.call(this,0===e?0:e,a),this})};if("function"==typeof g&&(v||_.forEach&&!m((function(){(new g).entries().next()})))){var N=new g,E=N[j](v?{}:-0,1)!=N,k=m((function(){N.has(1)})),S=b((function(e){new g(e)})),A=!v&&m((function(){for(var e=new g,t=5;t--;)e[j](t,t);return!e.has(-0)}));S||((g=t((function(t,a){o(t,g,e);var n=p(new O,t,g);return null!=a&&s(a,f,n[j],n),n}))).prototype=_,_.constructor=g),(k||A)&&(w("delete"),w("has"),f&&w("get")),(A||E)&&w(j),v&&_.clear&&delete _.clear}else g=h.getConstructor(t,e,f,j),l(g.prototype,a),c.NEED=!0;return d(g,e),y[e]=g,r(r.G+r.W+r.F*(g!=O),y),v||h.setStrong(g,e,f),g}},1148:function(e,t,a){var n=a(12),r=a(1149).set;e.exports=function(e,t,a){var i,l=t.constructor;return l!==a&&"function"==typeof l&&(i=l.prototype)!==a.prototype&&n(i)&&r&&r(e,i),e}},1149:function(e,t,a){var n=a(12),r=a(8),i=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(24)(Function.call,a(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return i(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:i}},1150:function(e,t,a){"use strict";a(1140),a(77),a(1139),a(25),a(20),a(19),a(1138);var n=a(0),r=a.n(n),i=a(1157),l=a.n(i);t.a=function(e){var t=e.currentState,a=e.humanize,n=e.icon,i=e.name,c=e.setState,s=e.values;if(0==s.size)return null;var o=Array.from(s);return r.a.createElement(r.a.Fragment,null,o.map((function(e,s){var o="string"==typeof e&&a?l()(e):e;return r.a.createElement("label",{key:s},r.a.createElement("input",{checked:t.has(e),name:i,onChange:function(a){var n=new Set(t);a.currentTarget.checked?n.add(e):n.delete(e),c(n)},type:"checkbox"}),o&&r.a.createElement(r.a.Fragment,null,n?r.a.createElement("i",{className:"feather icon-"+n}):""," ",o))})))}},1153:function(e,t,a){"use strict";var n=a(13),r=a(1154),i=a(27),l=a(26),c=a(29),s=a(1166);n(n.P,"Array",{flatMap:function(e){var t,a,n=i(this);return c(e),t=l(n.length),a=s(n,0),r(a,n,n,t,0,1,e,arguments[1]),a}}),a(88)("flatMap")},1154:function(e,t,a){"use strict";var n=a(1165),r=a(12),i=a(26),l=a(24),c=a(2)("isConcatSpreadable");e.exports=function e(t,a,s,o,u,m,b,d){for(var p,h,f=u,v=0,O=!!b&&l(b,d,3);v<o;){if(v in s){if(p=O?O(s[v],v,a):s[v],h=!1,r(p)&&(h=void 0!==(h=p[c])?!!h:n(p)),h&&m>0)f=e(t,a,p,i(p.length),f,m-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=p}f++}v++}return f}},1155:function(e,t,a){"use strict";a(1138),a(1151),a(1152),a(1139),a(1153),a(25),a(20),a(19),a(77),a(1140);var n=a(0),r=a.n(n),i=a(1150),l=a(1144),c=a(1158),s=a.n(c);t.a=function(e){var t=e.children,a=e.filters,c=Object(n.useState)(!1),o=c[0],u=c[1],m=Object(n.useState)(new Set),b=m[0],d=m[1],p=Object(n.useState)(!1),h=p[0],f=p[1],v=Object(n.useState)(null),O=v[0],g=v[1],j=[];t&&(j=Array.isArray(t)?t:[t]);var _=j.some((function(e){return e.props.common})),y=s()(j).flatMap((function(e){return e.props.groups})).uniq().value(),w=j.some((function(e){return e.props.required})),N=j;return o&&(N=N.filter((function(e){return e.props.common}))),b.size>0&&(N=N.filter((function(e){return Array.from(b).every((function(t){return e.props.groups.includes(t)}))}))),h&&(N=N.filter((function(e){return e.props.required}))),O&&(N=N.filter((function(e){return e.props.name.toLowerCase().includes(O.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,j.length>1&&!1!==a?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},N.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return g(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(i.a,{values:y,currentState:b,setState:d}),_&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:o}),"common"),w&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return f(e.currentTarget.checked)},checked:h}),"required")))):null,!Array.isArray(N)||N.length>0?r.a.createElement("ul",{className:"connected-list"},N):r.a.createElement(l.a,{text:"no components found"}))}},1156:function(e,t,a){"use strict";a(89),a(25),a(20),a(19),a(52),a(1138),a(1151),a(1152);var n=a(0),r=a.n(n),i=a(1136),l=a.n(i),c=(a(1128),a(1167));function s(e){return e.includes(".")?'"'+e+'"':e}function o(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?s(t.name)+" = "+o(t.value):s(Object.keys(t)[0])+" = "+o(Object.values(t)[0]):e?s(e)+" = "+o(t):o(t);var a}function m(e){var t=e.values,a=[];if(Array.isArray(t))for(var n in t){var i=t[n];a.push(r.a.createElement("code",{key:i},o(i))),a.push(" ")}else for(var l in t)a.push(r.a.createElement("code",{key:l,className:"with-info-icon",title:t[l]},o(l))),a.push(" ");return a}function b(e){var t=e.name,a=e.path,n=e.values,i="";return n.forEach((function(e){a&&(i+=a+"."),i+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(c.a,{className:"language-toml"},i))}function d(e){var t=e.unit,a=e.value,n="";return t&&(n=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,o(a)),n)}function p(e){var t=e.value,a=Object.keys(t)[0],n=Object.values(t)[0];return""==n&&(n=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+a},a))," ","= ",r.a.createElement("code",null,o(n)))}function h(e){var t=e.defaultValue,a=e.enumValues,i=e.examples,l=(e.groups,e.name),c=e.path,s=e.relevantWhen,o=e.required,u=e.unit,h=e.warnings,f=Object(n.useState)(!1),v=f[0],O=f[1];return r.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),s&&r.a.createElement("li",null,"Only ",o?"required":"relevant"," when:"," ",r.a.createElement(p,{value:s})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,a&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(m,{values:a})),(i.length>1||i[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return O(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(b,{name:l,path:c,values:i})))}t.a=function(e){var t=e.children,a=e.common,i=e.defaultValue,c=e.enumValues,s=e.examples,o=e.groups,u=e.name,m=e.path,b=e.relevantWhen,d=e.required,p=e.templateable,f=e.type,v=e.unit,O=e.warnings,g=Object(n.useState)(!1),j=g[0],_=(g[1],t);return j&&(_=_.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:l()({"field-required":d,"field-collapsed":j}),required:d},r.a.createElement("div",{className:"badges"},p&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),f&&r.a.createElement("span",{className:"badge badge--secondary"},f,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),c&&Object.keys(c).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),a&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",b&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),_,!j&&"table"!=f&&r.a.createElement(h,{defaultValue:i,enumValues:c,examples:s,groups:o,name:u,path:m,relevantWhen:b,required:d,unit:v,warnings:O}))}},742:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(1128)),l=a(1155),c=a(1156),s=a(1161),o=a(1160),u={last_modified_on:"2020-05-21",delivery_guarantee:"at_least_once",component_title:"AWS Cloudwatch Metrics",description:"The Vector `aws_cloudwatch_metrics` sink streams `metric` events to Amazon Web Service's CloudWatch Metrics service via the `PutMetricData` API endpoint.",event_types:["metric"],function_category:"transmit",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+aws_cloudwatch_metrics%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'aws_cloudwatch_metrics|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/aws_cloudwatch_metrics.rs",status:"beta",title:"AWS Cloudwatch Metrics Sink",unsupported_operating_systems:[]},m={id:"reference/sinks/aws_cloudwatch_metrics",title:"AWS Cloudwatch Metrics Sink",description:"The Vector `aws_cloudwatch_metrics` sink streams `metric` events to Amazon Web Service's CloudWatch Metrics service via the `PutMetricData` API endpoint.",source:"@site/docs/reference/sinks/aws_cloudwatch_metrics.md",permalink:"/docs/reference/sinks/aws_cloudwatch_metrics",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/sinks/aws_cloudwatch_metrics.md",sidebar_label:'aws_cloudwatch_metrics|["metric"]',sidebar:"docs",previous:{title:"AWS Cloudwatch Logs Sink",permalink:"/docs/reference/sinks/aws_cloudwatch_logs"},next:{title:"AWS Kinesis Firehose Sink",permalink:"/docs/reference/sinks/aws_kinesis_firehose"}},b=[{value:"Configuration",id:"configuration",children:[{value:"assume_role",id:"assume_role",children:[]},{value:"batch",id:"batch",children:[]},{value:"endpoint",id:"endpoint",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"namespace",id:"namespace",children:[]},{value:"region",id:"region",children:[]}]},{value:"Env Vars",id:"env-vars",children:[{value:"AWS_ACCESS_KEY_ID",id:"aws_access_key_id",children:[]},{value:"AWS_SECRET_ACCESS_KEY",id:"aws_secret_access_key",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"AWS Authentication",id:"aws-authentication",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Metric Types",id:"metric-types",children:[]},{value:"Streaming",id:"streaming",children:[]}]}],d={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"aws_cloudwatch_metrics")," sink\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(i.b)("inlineCode",{parentName:"a"},"metric"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html"}),"Amazon Web\nService's CloudWatch Metrics service")," via the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html"}),Object(i.b)("inlineCode",{parentName:"a"},"PutMetricData")," API\nendpoint"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  type = "aws_cloudwatch_metrics" # required\n  inputs = ["my-source-or-transform-id"] # required\n  healthcheck = true # optional, default\n  namespace = "service" # required\n  region = "us-east-1" # required, required when endpoint = ""\n'))),Object(i.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "aws_cloudwatch_metrics" # required\n  inputs = ["my-source-or-transform-id"] # required\n  assume_role = "arn:aws:iam::123456789098:role/my_role" # optional, no default\n  endpoint = "127.0.0.0:5000/path/to/service" # optional, no default, relevant when region = ""\n  healthcheck = true # optional, default\n  namespace = "service" # required\n  region = "us-east-1" # required, required when endpoint = ""\n\n  # Batch\n  batch.max_events = 20 # optional, default, events\n  batch.timeout_secs = 1 # optional, default, seconds\n')))),Object(i.b)(l.a,{filters:!0,mdxType:"Fields"},Object(i.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["arn:aws:iam::123456789098:role/my_role"],groups:[],name:"assume_role",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"assume_role"},"assume_role"),Object(i.b)("p",null,"The ARN of an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html"}),"IAM role")," to assume at startup.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#aws-authentication"}),"AWS Authentication")," for more info.")),Object(i.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(l.a,{filters:!1,mdxType:"Fields"},Object(i.b)(c.a,{common:!0,defaultValue:20,enumValues:null,examples:[20],groups:[],name:"max_events",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"events",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum size of a batch, in events, before it is flushed.")),Object(i.b)(c.a,{common:!0,defaultValue:1,enumValues:null,examples:[1],groups:[],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed.")))),Object(i.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["127.0.0.0:5000/path/to/service"],groups:[],name:"endpoint",path:null,relevantWhen:{region:""},required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"endpoint"},"endpoint"),Object(i.b)("p",null,"Custom endpoint for use with AWS-compatible services. Providing a value for\nthis option will make ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#region"}),Object(i.b)("inlineCode",{parentName:"a"},"region"))," moot.")),Object(i.b)(c.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["service"],groups:[],name:"namespace",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"namespace"},"namespace"),Object(i.b)("p",null,"A\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace"}),"namespace"),"\nthat will isolate different metrics from each other.")),Object(i.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["us-east-1"],groups:[],name:"region",path:null,relevantWhen:{endpoint:""},required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"region"},"region"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html"}),"AWS region")," of the target service. If ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#endpoint"}),Object(i.b)("inlineCode",{parentName:"a"},"endpoint"))," is\nprovided it will override this value since the endpoint includes the region."))),Object(i.b)("h2",{id:"env-vars"},"Env Vars"),Object(i.b)(l.a,{filters:!0,mdxType:"Fields"},Object(i.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["AKIAIOSFODNN7EXAMPLE"],groups:[],name:"AWS_ACCESS_KEY_ID",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"aws_access_key_id"},"AWS_ACCESS_KEY_ID"),Object(i.b)("p",null,"Used for AWS authentication when communicating with AWS services. See relevant\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/components/?providers%5B%5D=aws/"}),"AWS components")," for more info.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#aws-authentication"}),"AWS Authentication")," for more info.")),Object(i.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["wJalrXUtnFEMI/K7MDENG/FD2F4GJ"],groups:[],name:"AWS_SECRET_ACCESS_KEY",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"aws_secret_access_key"},"AWS_SECRET_ACCESS_KEY"),Object(i.b)("p",null,"Used for AWS authentication when communicating with AWS services. See relevant\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/components/?providers%5B%5D=aws/"}),"AWS components")," for more info.\nSee ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#aws-authentication"}),"AWS Authentication")," for more info."))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"aws-authentication"},"AWS Authentication"),Object(i.b)("p",null,"Vector checks for AWS credentials in the following order:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Environment variables ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#aws_access_key_id"}),Object(i.b)("inlineCode",{parentName:"a"},"AWS_ACCESS_KEY_ID"))," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#aws_secret_access_key"}),Object(i.b)("inlineCode",{parentName:"a"},"AWS_SECRET_ACCESS_KEY")),"."),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sourcing-external.html"}),Object(i.b)("inlineCode",{parentName:"a"},"credential_process")," command")," in the AWS config file. (usually located at ",Object(i.b)("inlineCode",{parentName:"li"},"~/.aws/config"),")"),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"AWS credentials file"),". (usually located at ",Object(i.b)("inlineCode",{parentName:"li"},"~/.aws/credentials"),")"),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html"}),"IAM instance profile"),". (will only work if running on an EC2 instance with an instance profile/role)")),Object(i.b)("p",null,"If credentials are not found the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#healthchecks"}),"healtcheck")," will fail and an\nerror will be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/administration/monitoring/#logs"}),"logged"),"."),Object(i.b)("h4",{id:"obtaining-an-access-key"},"Obtaining an access key"),Object(i.b)("p",null,"In general, we recommend using instance profiles/roles whenever possible. In\ncases where this is not possible you can generate an AWS access key for any user\nwithin your AWS account. AWS provides a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"}),"detailed guide")," on\nhow to do this."),Object(i.b)("h4",{id:"assuming-roles"},"Assuming Roles"),Object(i.b)("p",null,"Vector can assume an AWS IAM role via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#assume_role"}),Object(i.b)("inlineCode",{parentName:"a"},"assume_role"))," option. This is an\noptional setting that is helpful for a variety of use cases, such as cross\naccount access."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"metric-types"},"Metric Types"),Object(i.b)("p",null,"CloudWatch Metrics types are organized not by their semantics, but by storage properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Statistic Sets"),Object(i.b)("li",{parentName:"ul"},"Data Points")),Object(i.b)("p",null,"In Vector only the latter is used to allow lossless statistics calculations on CloudWatch side."),Object(i.b)("p",null,"The following matrix outlines how Vector metric types are mapped into CloudWatch metrics types."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Vector Metrics"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CloudWatch Metrics"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Counter"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Point")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gauge"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Point")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gauge Delta ","[1]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Point")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Histogram"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Point")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Gauge values are persisted between flushes. On Vector start up each gauge is assumed to have\nzero (0.0) value, that can be updated explicitly by the consequent absolute (not delta) gauge\nobservation, or by delta increments/decrements. Delta gauges are considered an advanced feature\nuseful itn distributed setting, however it should be used with care.")),Object(i.b)("h3",{id:"streaming"},"Streaming"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"aws_cloudwatch_metrics")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."))}p.isMDXComponent=!0}}]);