(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{1139:function(e,t,a){"use strict";var n=a(24),r=a(13),l=a(27),i=a(84),o=a(85),c=a(26),s=a(1145),b=a(86);r(r.S+r.F*!a(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,r,p,m=l(e),d="function"==typeof this?this:Array,u=arguments.length,f=u>1?arguments[1]:void 0,O=void 0!==f,g=0,j=b(m);if(O&&(f=n(f,u>2?arguments[2]:void 0,2)),null==j||d==Array&&o(j))for(a=new d(t=c(m.length));t>g;g++)s(a,g,O?f(m[g],g):m[g]);else for(p=j.call(m),a=new d;!(r=p.next()).done;g++)s(a,g,O?i(p,f,[r.value,g],!0):r.value);return a.length=g,a}})},1140:function(e,t,a){"use strict";var n=a(1146),r=a(1141);e.exports=a(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(r(this,"Set"),e=0===e?0:e,e)}},n)},1141:function(e,t,a){var n=a(12);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1137),i=a(1136),o=a.n(i);a(131);t.a=function(e){var t=e.className,a=e.size,n=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:o()("vic","vic--"+a,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+n+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(1137),a(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1145:function(e,t,a){"use strict";var n=a(28),r=a(53);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},1146:function(e,t,a){"use strict";var n=a(28).f,r=a(82),l=a(80),i=a(24),o=a(78),c=a(79),s=a(54),b=a(83),p=a(87),m=a(10),d=a(1143).fastKey,u=a(1141),f=m?"_s":"size",O=function(e,t){var a,n=d(t);if("F"!==n)return e._i[n];for(a=e._f;a;a=a.n)if(a.k==t)return a};e.exports={getConstructor:function(e,t,a,s){var b=e((function(e,n){o(e,b,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[f]=0,null!=n&&c(n,a,e[s],e)}));return l(b.prototype,{clear:function(){for(var e=u(this,t),a=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete a[n.i];e._f=e._l=void 0,e[f]=0},delete:function(e){var a=u(this,t),n=O(a,e);if(n){var r=n.n,l=n.p;delete a._i[n.i],n.r=!0,l&&(l.n=r),r&&(r.p=l),a._f==n&&(a._f=r),a._l==n&&(a._l=l),a[f]--}return!!n},forEach:function(e){u(this,t);for(var a,n=i(e,arguments.length>1?arguments[1]:void 0,3);a=a?a.n:this._f;)for(n(a.v,a.k,this);a&&a.r;)a=a.p},has:function(e){return!!O(u(this,t),e)}}),m&&n(b.prototype,"size",{get:function(){return u(this,t)[f]}}),b},def:function(e,t,a){var n,r,l=O(e,t);return l?l.v=a:(e._l=l={i:r=d(t,!0),k:t,v:a,p:n=e._l,n:void 0,r:!1},e._f||(e._f=l),n&&(n.n=l),e[f]++,"F"!==r&&(e._i[r]=l)),e},getEntry:O,setStrong:function(e,t,a){s(e,t,(function(e,a){this._t=u(e,t),this._k=a,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?b(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,b(1))}),a?"entries":"values",!a,!0),p(t)}}},1147:function(e,t,a){"use strict";var n=a(5),r=a(13),l=a(15),i=a(80),o=a(1143),c=a(79),s=a(78),b=a(12),p=a(14),m=a(81),d=a(39),u=a(1148);e.exports=function(e,t,a,f,O,g){var j=n[e],h=j,N=O?"set":"add",v=h&&h.prototype,y={},x=function(e){var t=v[e];l(v,e,"delete"==e||"has"==e?function(e){return!(g&&!b(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!b(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,a){return t.call(this,0===e?0:e,a),this})};if("function"==typeof h&&(g||v.forEach&&!p((function(){(new h).entries().next()})))){var _=new h,w=_[N](g?{}:-0,1)!=_,C=p((function(){_.has(1)})),T=m((function(e){new h(e)})),E=!g&&p((function(){for(var e=new h,t=5;t--;)e[N](t,t);return!e.has(-0)}));T||((h=t((function(t,a){s(t,h,e);var n=u(new j,t,h);return null!=a&&c(a,O,n[N],n),n}))).prototype=v,v.constructor=h),(C||E)&&(x("delete"),x("has"),O&&x("get")),(E||w)&&x(N),g&&v.clear&&delete v.clear}else h=f.getConstructor(t,e,O,N),i(h.prototype,a),o.NEED=!0;return d(h,e),y[e]=h,r(r.G+r.W+r.F*(h!=j),y),g||f.setStrong(h,e,O),h}},1148:function(e,t,a){var n=a(12),r=a(1149).set;e.exports=function(e,t,a){var l,i=t.constructor;return i!==a&&"function"==typeof i&&(l=i.prototype)!==a.prototype&&n(l)&&r&&r(e,l),e}},1149:function(e,t,a){var n=a(12),r=a(8),l=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(24)(Function.call,a(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return l(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:l}},1150:function(e,t,a){"use strict";a(1140),a(77),a(1139),a(25),a(20),a(19),a(1138);var n=a(0),r=a.n(n),l=a(1157),i=a.n(l);t.a=function(e){var t=e.currentState,a=e.humanize,n=e.icon,l=e.name,o=e.setState,c=e.values;if(0==c.size)return null;var s=Array.from(c);return r.a.createElement(r.a.Fragment,null,s.map((function(e,c){var s="string"==typeof e&&a?i()(e):e;return r.a.createElement("label",{key:c},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(a){var n=new Set(t);a.currentTarget.checked?n.add(e):n.delete(e),o(n)},type:"checkbox"}),s&&r.a.createElement(r.a.Fragment,null,n?r.a.createElement("i",{className:"feather icon-"+n}):""," ",s))})))}},1153:function(e,t,a){"use strict";var n=a(13),r=a(1154),l=a(27),i=a(26),o=a(29),c=a(1166);n(n.P,"Array",{flatMap:function(e){var t,a,n=l(this);return o(e),t=i(n.length),a=c(n,0),r(a,n,n,t,0,1,e,arguments[1]),a}}),a(88)("flatMap")},1154:function(e,t,a){"use strict";var n=a(1165),r=a(12),l=a(26),i=a(24),o=a(2)("isConcatSpreadable");e.exports=function e(t,a,c,s,b,p,m,d){for(var u,f,O=b,g=0,j=!!m&&i(m,d,3);g<s;){if(g in c){if(u=j?j(c[g],g,a):c[g],f=!1,r(u)&&(f=void 0!==(f=u[o])?!!f:n(u)),f&&p>0)O=e(t,a,u,l(u.length),O,p-1)-1;else{if(O>=9007199254740991)throw TypeError();t[O]=u}O++}g++}return O}},1155:function(e,t,a){"use strict";a(1138),a(1151),a(1152),a(1139),a(1153),a(25),a(20),a(19),a(77),a(1140);var n=a(0),r=a.n(n),l=a(1150),i=a(1144),o=a(1158),c=a.n(o);t.a=function(e){var t=e.children,a=e.filters,o=Object(n.useState)(!1),s=o[0],b=o[1],p=Object(n.useState)(new Set),m=p[0],d=p[1],u=Object(n.useState)(!1),f=u[0],O=u[1],g=Object(n.useState)(null),j=g[0],h=g[1],N=[];t&&(N=Array.isArray(t)?t:[t]);var v=N.some((function(e){return e.props.common})),y=c()(N).flatMap((function(e){return e.props.groups})).uniq().value(),x=N.some((function(e){return e.props.required})),_=N;return s&&(_=_.filter((function(e){return e.props.common}))),m.size>0&&(_=_.filter((function(e){return Array.from(m).every((function(t){return e.props.groups.includes(t)}))}))),f&&(_=_.filter((function(e){return e.props.required}))),j&&(_=_.filter((function(e){return e.props.name.toLowerCase().includes(j.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,N.length>1&&!1!==a?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},_.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return h(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:y,currentState:m,setState:d}),v&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return b(e.currentTarget.checked)},checked:s}),"common"),x&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return O(e.currentTarget.checked)},checked:f}),"required")))):null,!Array.isArray(_)||_.length>0?r.a.createElement("ul",{className:"connected-list"},_):r.a.createElement(i.a,{text:"no components found"}))}},1156:function(e,t,a){"use strict";a(89),a(25),a(20),a(19),a(52),a(1138),a(1151),a(1152);var n=a(0),r=a.n(n),l=a(1136),i=a.n(l),o=(a(1128),a(1167));function c(e){return e.includes(".")?'"'+e+'"':e}function s(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function b(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?c(t.name)+" = "+s(t.value):c(Object.keys(t)[0])+" = "+s(Object.values(t)[0]):e?c(e)+" = "+s(t):s(t);var a}function p(e){var t=e.values,a=[];if(Array.isArray(t))for(var n in t){var l=t[n];a.push(r.a.createElement("code",{key:l},s(l))),a.push(" ")}else for(var i in t)a.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},s(i))),a.push(" ");return a}function m(e){var t=e.name,a=e.path,n=e.values,l="";return n.forEach((function(e){a&&(l+=a+"."),l+=b(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(o.a,{className:"language-toml"},l))}function d(e){var t=e.unit,a=e.value,n="";return t&&(n=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,s(a)),n)}function u(e){var t=e.value,a=Object.keys(t)[0],n=Object.values(t)[0];return""==n&&(n=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+a},a))," ","= ",r.a.createElement("code",null,s(n)))}function f(e){var t=e.defaultValue,a=e.enumValues,l=e.examples,i=(e.groups,e.name),o=e.path,c=e.relevantWhen,s=e.required,b=e.unit,f=e.warnings,O=Object(n.useState)(!1),g=O[0],j=O[1];return r.a.createElement("ul",{className:"info"},f&&f.length>0&&f.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),c&&r.a.createElement("li",null,"Only ",s?"required":"relevant"," when:"," ",r.a.createElement(u,{value:c})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:b,value:t})):r.a.createElement("li",null,"No default"):null,a&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(p,{values:a})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return j(!g)}},g?"Hide examples":"View examples"),g&&r.a.createElement(m,{name:i,path:o,values:l})))}t.a=function(e){var t=e.children,a=e.common,l=e.defaultValue,o=e.enumValues,c=e.examples,s=e.groups,b=e.name,p=e.path,m=e.relevantWhen,d=e.required,u=e.templateable,O=e.type,g=e.unit,j=e.warnings,h=Object(n.useState)(!1),N=h[0],v=(h[1],t);return N&&(v=v.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":d,"field-collapsed":N}),required:d},r.a.createElement("div",{className:"badges"},u&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),O&&r.a.createElement("span",{className:"badge badge--secondary"},O,g&&r.a.createElement(r.a.Fragment,null," (",g,")")),o&&Object.keys(o).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),a&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),v,!N&&"table"!=O&&r.a.createElement(f,{defaultValue:l,enumValues:o,examples:c,groups:s,name:b,path:p,relevantWhen:m,required:d,unit:g,warnings:j}))}},686:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),l=(a(0),a(1128)),i=a(1155),o=a(1156),c=a(1161),s=a(1160),b={last_modified_on:"2020-06-10",component_title:"Regex Parser",description:"The Vector `regex_parser` transform accepts and outputs `log` events, allowing you to parse a log field's value with a Regular Expression.",event_types:["log"],function_category:"parse",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+regex_parser%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'regex_parser|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/regex_parser.rs",status:"prod-ready",title:"Regex Parser Transform",unsupported_operating_systems:[]},p={id:"reference/transforms/regex_parser",title:"Regex Parser Transform",description:"The Vector `regex_parser` transform accepts and outputs `log` events, allowing you to parse a log field's value with a Regular Expression.",source:"@site/docs/reference/transforms/regex_parser.md",permalink:"/docs/reference/transforms/regex_parser",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/transforms/regex_parser.md",sidebar_label:'regex_parser|["log"]',sidebar:"docs",previous:{title:"Merge Transform",permalink:"/docs/reference/transforms/merge"},next:{title:"Remove Fields Transform",permalink:"/docs/reference/transforms/remove_fields"}},m=[{value:"Configuration",id:"configuration",children:[{value:"drop_field",id:"drop_field",children:[]},{value:"field",id:"field",children:[]},{value:"overwrite_target",id:"overwrite_target",children:[]},{value:"patterns",id:"patterns",children:[]},{value:"target_field",id:"target_field",children:[]},{value:"types",id:"types",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Complex Processing",id:"complex-processing",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Failed Parsing",id:"failed-parsing",children:[]},{value:"Field Notation Syntax",id:"field-notation-syntax",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Regex Debugger",id:"regex-debugger",children:[]},{value:"Regex Syntax",id:"regex-syntax",children:[]},{value:"Value Coercion",id:"value-coercion",children:[]}]}],d={rightToc:m};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"regex_parser")," transform\naccepts and outputs ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(l.b)("inlineCode",{parentName:"a"},"log"))," events, allowing you to parse\na log field's value with a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Regular_expression"}),"Regular Expression"),"."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(c.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"common",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.my_transform_id]\n  # General\n  type = "regex_parser" # required\n  inputs = ["my-source-or-transform-id"] # required\n  drop_field = true # optional, default\n  field = "message" # optional, default\n  patterns = "[\'^(?P<timestamp>[\\\\w\\\\-:\\\\+]+) (?P<level>\\\\w+) (?P<message>.*)$\']" # required\n\n  # Types\n  types.status = "int" # example\n  types.duration = "float" # example\n  types.success = "bool" # example\n  types.timestamp = "timestamp|%F" # example\n  types.timestamp = "timestamp|%a %b %e %T %Y" # example\n  types.parent.child = "int" # example\n'))),Object(l.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.my_transform_id]\n  # General\n  type = "regex_parser" # required\n  inputs = ["my-source-or-transform-id"] # required\n  drop_field = true # optional, default\n  field = "message" # optional, default\n  overwrite_target = true # optional, default\n  patterns = "[\'^(?P<timestamp>[\\\\w\\\\-:\\\\+]+) (?P<level>\\\\w+) (?P<message>.*)$\']" # required\n  target_field = "root_field" # optional, no default\n\n  # Types\n  types.status = "int" # example\n  types.duration = "float" # example\n  types.success = "bool" # example\n  types.timestamp = "timestamp|%F" # example\n  types.timestamp = "timestamp|%a %b %e %T %Y" # example\n  types.parent.child = "int" # example\n')))),Object(l.b)(i.a,{filters:!0,mdxType:"Fields"},Object(l.b)(o.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"drop_field",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"drop_field"},"drop_field"),Object(l.b)("p",null,"If the specified ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#field"}),Object(l.b)("inlineCode",{parentName:"a"},"field"))," should be dropped (removed) after parsing.")),Object(l.b)(o.a,{common:!0,defaultValue:"message",enumValues:null,examples:["message","parent.child"],groups:[],name:"field",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"field"},"field"),Object(l.b)("p",null,"The log field to parse.\nSee ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#failed-parsing"}),"Failed Parsing")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#field-notation-syntax"}),"Field Notation Syntax")," for more info.")),Object(l.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"overwrite_target",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"overwrite_target"},"overwrite_target"),Object(l.b)("p",null,"If ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#target_field"}),Object(l.b)("inlineCode",{parentName:"a"},"target_field"))," is set and the log contains a field of the same name as the\ntarget, it will only be overwritten if this is set to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),".")),Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["['^(?P<timestamp>[\\w\\-:\\+]+) (?P<level>\\w+) (?P<message>.*)$']"],groups:[],name:"patterns",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"patterns"},"patterns"),Object(l.b)("p",null,"The Regular Expressions to apply. Do not include the leading or trailing ",Object(l.b)("inlineCode",{parentName:"p"},"/")," in\nany of the expressions.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["root_field","parent.child"],groups:[],name:"target_field",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"target_field"},"target_field"),Object(l.b)("p",null,"If this setting is present, the parsed fields will be inserted into the log as\na sub-object with this name. If a field with the same name already exists, the\nparser will fail and produce an error.\nSee ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#field-notation-syntax"}),"Field Notation Syntax")," for more info.")),Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],groups:[],name:"types",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"types"},"types"),Object(l.b)("p",null,"Key/value pairs representing mapped log field names and types. This is used to\ncoerce log fields into their proper types.\nSee ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#regex-syntax"}),"Regex Syntax")," for more info."),Object(l.b)(i.a,{filters:!1,mdxType:"Fields"},Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:{bool:'Coerces `"true"`/`/"false"`, `"1"`/`"0"`, and `"t"`/`"f"` values into boolean.',float:"Coerce to a 64 bit float.",int:"Coerce to a 64 bit integer.",string:"Coerce to a string.",timestamp:"Coerces to a Vector timestamp. [`strptime` specificiers][urls.strptime_specifiers] must be used to parse the string."},examples:[{status:"int"},{duration:"float"},{success:"bool"},{timestamp:"timestamp|%F"},{timestamp:"timestamp|%a %b %e %T %Y"},{parent:{child:"int"}}],groups:[],name:"`[field-name]`",path:"types",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"field-name"},Object(l.b)("inlineCode",{parentName:"h4"},"[field-name]")),Object(l.b)("p",null,"A definition of log field type conversions. They key is the log field name and\nthe value is the type. ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.4.11/chrono/format/strftime/index.html#specifiers"}),Object(l.b)("inlineCode",{parentName:"a"},"strptime")," specifiers")," are\nsupported for the ",Object(l.b)("inlineCode",{parentName:"p"},"timestamp")," type."))))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,"Given the following log line:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="log event"',title:'"log','event"':!0}),'{\n  "message": "5.86.210.12 - zieme4647 5667 [19/06/2019:17:20:49 -0400] \\"GET /embrace/supply-chains/dynamic/vertical\\" 201 20574"\n}\n')),Object(l.b)("p",null,"And the following configuration:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.<transform-id>]\n  type = "regex_parser"\n  field = "message"\n  patterns = [\'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<method>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\']\n\n[transforms.<transform-id>.types]\n  bytes_in = "int"\n  timestamp = "timestamp|%d/%m/%Y:%H:%M:%S %z"\n  status = "int"\n  bytes_out = "int"\n')),Object(l.b)("p",null,"A ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(l.b)("inlineCode",{parentName:"a"},"log")," event")," will be output with the following structure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="log event"',title:'"log','event"':!0}),'{\n  // ... existing fields\n  "bytes_in": 5667,\n  "host": "5.86.210.12",\n  "user_id": "zieme4647",\n  "timestamp": <19/06/2019:17:20:49 -0400>,\n  "message": "GET /embrace/supply-chains/dynamic/vertical",\n  "status": 201,\n  "bytes_out": 20574\n}\n')),Object(l.b)("p",null,"Things to note about the output:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"message")," field was overwritten."),Object(l.b)("li",{parentName:"ol"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"bytes_in"),", ",Object(l.b)("inlineCode",{parentName:"li"},"timestamp"),", ",Object(l.b)("inlineCode",{parentName:"li"},"status"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"bytes_out")," fields were coerced.")),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"complex-processing"},"Complex Processing"),Object(l.b)("p",null,"If you encounter limitations with the ",Object(l.b)("inlineCode",{parentName:"p"},"regex_parser"),"\ntransform then we recommend using a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://vector.dev/components/?functions%5B%5D=program"}),"runtime transform"),".\nThese transforms are designed for complex processing and give you the power of\nfull programming runtime."),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(l.b)("h3",{id:"failed-parsing"},"Failed Parsing"),Object(l.b)("p",null,"If the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#field"}),Object(l.b)("inlineCode",{parentName:"a"},"field"))," value fails to parse against the provided ",Object(l.b)("inlineCode",{parentName:"p"},"regex")," then an error\nwill be ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/administration/monitoring/#logs"}),"logged")," and the event will be kept or discarded\ndepending on the ",Object(l.b)("inlineCode",{parentName:"p"},"drop_failed")," value."),Object(l.b)("p",null,"A failure includes any event that does not successfully parse against the\nprovided ",Object(l.b)("inlineCode",{parentName:"p"},"regex"),". This includes bad values as well as events missing the\nspecified ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#field"}),Object(l.b)("inlineCode",{parentName:"a"},"field")),"."),Object(l.b)("h3",{id:"field-notation-syntax"},"Field Notation Syntax"),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#field"}),Object(l.b)("inlineCode",{parentName:"a"},"field"))," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#target_field"}),Object(l.b)("inlineCode",{parentName:"a"},"target_field"))," options\nsupport ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/field-path-notation/"}),"Vector's field notation syntax"),",\nenabling access to root-level, nested, and array field values. For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.my_regex_parser_transform_id]\n  # ...\n  field = "message"\n  field = "parent.child"\n  # ...\n')),Object(l.b)("p",null,"You can learn more about Vector's field notation in the\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/field-path-notation/"}),"field notation reference"),"."),Object(l.b)("h3",{id:"performance"},"Performance"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"regex_parser")," source has been involved in the following performance tests:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/timberio/vector-test-harness/tree/master/cases/regex_parsing_performance"}),Object(l.b)("inlineCode",{parentName:"a"},"regex_parsing_performance")))),Object(l.b)("p",null,"Learn more in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/#performance"}),"Performance")," sections."),Object(l.b)("h3",{id:"regex-debugger"},"Regex Debugger"),Object(l.b)("p",null,"To test the validity of the",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#regex"}),Object(l.b)("inlineCode",{parentName:"a"},"regex"))," option, we recommend the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://rustexp.lpil.uk/"}),"Rust\nRegex Tester"),". Note, you ",Object(l.b)("em",{parentName:"p"},"must")," use\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#named-captures"}),"named captures")," in your regex to map the results to fields."),Object(l.b)("h3",{id:"regex-syntax"},"Regex Syntax"),Object(l.b)("p",null,"Vector follows the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/regex/1.3.6/regex/#syntax"}),"documented Rust Regex syntax")," since\nVector is written in Rust. This syntax follows a Perl-style regular expression\nsyntax, but lacks a few features like look around and backreferences."),Object(l.b)("h4",{id:"named-captures"},"Named Captures"),Object(l.b)("p",null,"You can name Regex captures with the ",Object(l.b)("inlineCode",{parentName:"p"},"<name>")," syntax. For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"^(?P<timestamp>\\w*) (?P<level>\\w*) (?P<message>.*)$\n")),Object(l.b)("p",null,"Will capture ",Object(l.b)("inlineCode",{parentName:"p"},"timestamp"),", ",Object(l.b)("inlineCode",{parentName:"p"},"level"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"message"),". All values are extracted as\n",Object(l.b)("inlineCode",{parentName:"p"},"string")," values and must be coerced with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#types"}),Object(l.b)("inlineCode",{parentName:"a"},"types"))," table."),Object(l.b)("p",null,"More info can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/regex/1.3.6/regex/#grouping-and-flags"}),"Regex grouping and flags\ndocumentation"),"."),Object(l.b)("h4",{id:"flags"},"Flags"),Object(l.b)("p",null,"Regex flags can be toggled with the ",Object(l.b)("inlineCode",{parentName:"p"},"(?flags)")," syntax. The available flags are:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Flag"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Descriuption"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"i")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"case-insensitive: letters match both upper and lower case")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"m")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"multi-line mode: ^ and $ match begin/end of line")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"s")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allow . to match ",Object(l.b)("inlineCode",{parentName:"td"},"\\n"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"U")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"swap the meaning of ",Object(l.b)("inlineCode",{parentName:"td"},"x*")," and ",Object(l.b)("inlineCode",{parentName:"td"},"x*?"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"u")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unicode support (enabled by default)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"x")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ignore whitespace and allow line comments (starting with ",Object(l.b)("inlineCode",{parentName:"td"},"#"),")")))),Object(l.b)("p",null,"For example, to enable the case-insensitive flag you can write:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"(?i)Hello world\n")),Object(l.b)("p",null,"More info can be found in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/regex/1.3.6/regex/#grouping-and-flags"}),"Regex grouping and flags\ndocumentation"),"."),Object(l.b)("h3",{id:"value-coercion"},"Value Coercion"),Object(l.b)("p",null,"Values can be coerced upon extraction via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#types"}),Object(l.b)("inlineCode",{parentName:"a"},"types.*"))," options. This functions\nexactly like the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/coercer/"}),Object(l.b)("inlineCode",{parentName:"a"},"coercer")," transform")," except that its\ncoupled within this transform for convenience."),Object(l.b)("h4",{id:"timestamps"},"Timestamps"),Object(l.b)("p",null,"You can coerce values into timestamps via the ",Object(l.b)("inlineCode",{parentName:"p"},"timestamp")," type:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'# ...\ntypes.first_timestamp = "timestamp" # best effort parsing\ntypes.second_timestamp = "timestamp|%Y-%m-%dT%H:%M:%S%z" # ISO8601\n# ...\n')),Object(l.b)("p",null,"As noted above, if you do not specify a specific ",Object(l.b)("inlineCode",{parentName:"p"},"strftime")," format, Vector\nwill make a best effort attempt to parse the timestamp against the following\ncommon formats:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Format"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("strong",{parentName:"td"},"Without Timezone")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%F %T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"YYYY-MM-DD HH:MM:SS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%v %T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DD-Mmm-YYYY HH:MM:SS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"FT%T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ISO 8601 / RFC 3339 without TZ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"m/%d/%Y:%T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"US common date format")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"a, %d %b %Y %T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RFC 822/2822 without TZ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"a %d %b %T %Y")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"date")," command output without TZ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"A %d %B %T %Y")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"date")," command output without TZ, long names")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"a %b %e %T %Y")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ctime format")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("strong",{parentName:"td"},"With Timezone")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%+")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ISO 8601 / RFC 3339")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%a %d %b %T %Z %Y")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"date")," command output")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%a %d %b %T %z %Y")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"date")," command output, numeric TZ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%a %d %b %T %#z %Y")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"date")," command output, numeric TZ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("strong",{parentName:"td"},"UTC Formats")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%s")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UNIX timestamp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"%FT%TZ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ISO 8601 / RFC 3339 UTC")))))}u.isMDXComponent=!0}}]);