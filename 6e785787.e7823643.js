(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1139:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),i=n(84),o=n(85),s=n(26),c=n(1145),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,d,f=l(e),m="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,v=void 0!==b,h=0,g=u(f);if(v&&(b=a(b,p>2?arguments[2]:void 0,2)),null==g||m==Array&&o(g))for(n=new m(t=s(f.length));t>h;h++)c(n,h,v?b(f[h],h):f[h]);else for(d=g.call(f),n=new m;!(r=d.next()).done;h++)c(n,h,v?i(d,b,[r.value,h],!0):r.value);return n.length=h,n}})},1140:function(e,t,n){"use strict";var a=n(1146),r=n(1141);e.exports=n(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1141:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1137),i=n(1136),o=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:o()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1137),n(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1145:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1146:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),i=n(24),o=n(78),s=n(79),c=n(54),u=n(83),d=n(87),f=n(10),m=n(1143).fastKey,p=n(1141),b=f?"_s":"size",v=function(e,t){var n,a=m(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var u=e((function(e,a){o(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[b]=0,null!=a&&s(a,n,e[c],e)}));return l(u.prototype,{clear:function(){for(var e=p(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[b]=0},delete:function(e){var n=p(this,t),a=v(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[b]--}return!!a},forEach:function(e){p(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(p(this,t),e)}}),f&&a(u.prototype,"size",{get:function(){return p(this,t)[b]}}),u},def:function(e,t,n){var a,r,l=v(e,t);return l?l.v=n:(e._l=l={i:r=m(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[b]++,"F"!==r&&(e._i[r]=l)),e},getEntry:v,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),d(t)}}},1147:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),i=n(80),o=n(1143),s=n(79),c=n(78),u=n(12),d=n(14),f=n(81),m=n(39),p=n(1148);e.exports=function(e,t,n,b,v,h){var g=a[e],y=g,_=v?"set":"add",O=y&&y.prototype,j={},E=function(e){var t=O[e];l(O,e,"delete"==e||"has"==e?function(e){return!(h&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof y&&(h||O.forEach&&!d((function(){(new y).entries().next()})))){var N=new y,w=N[_](h?{}:-0,1)!=N,x=d((function(){N.has(1)})),k=f((function(e){new y(e)})),T=!h&&d((function(){for(var e=new y,t=5;t--;)e[_](t,t);return!e.has(-0)}));k||((y=t((function(t,n){c(t,y,e);var a=p(new g,t,y);return null!=n&&s(n,v,a[_],a),a}))).prototype=O,O.constructor=y),(x||T)&&(E("delete"),E("has"),v&&E("get")),(T||w)&&E(_),h&&O.clear&&delete O.clear}else y=b.getConstructor(t,e,v,_),i(y.prototype,n),o.NEED=!0;return m(y,e),j[e]=y,r(r.G+r.W+r.F*(y!=g),j),h||b.setStrong(y,e,v),y}},1148:function(e,t,n){var a=n(12),r=n(1149).set;e.exports=function(e,t,n){var l,i=t.constructor;return i!==n&&"function"==typeof i&&(l=i.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1149:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1150:function(e,t,n){"use strict";n(1140),n(77),n(1139),n(25),n(20),n(19),n(1138);var a=n(0),r=n.n(a),l=n(1157),i=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,o=e.setState,s=e.values;if(0==s.size)return null;var c=Array.from(s);return r.a.createElement(r.a.Fragment,null,c.map((function(e,s){var c="string"==typeof e&&n?i()(e):e;return r.a.createElement("label",{key:s},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),o(a)},type:"checkbox"}),c&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",c))})))}},1153:function(e,t,n){"use strict";var a=n(13),r=n(1154),l=n(27),i=n(26),o=n(29),s=n(1166);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return o(e),t=i(a.length),n=s(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1154:function(e,t,n){"use strict";var a=n(1165),r=n(12),l=n(26),i=n(24),o=n(2)("isConcatSpreadable");e.exports=function e(t,n,s,c,u,d,f,m){for(var p,b,v=u,h=0,g=!!f&&i(f,m,3);h<c;){if(h in s){if(p=g?g(s[h],h,n):s[h],b=!1,r(p)&&(b=void 0!==(b=p[o])?!!b:a(p)),b&&d>0)v=e(t,n,p,l(p.length),v,d-1)-1;else{if(v>=9007199254740991)throw TypeError();t[v]=p}v++}h++}return v}},1155:function(e,t,n){"use strict";n(1138),n(1151),n(1152),n(1139),n(1153),n(25),n(20),n(19),n(77),n(1140);var a=n(0),r=n.n(a),l=n(1150),i=n(1144),o=n(1158),s=n.n(o);t.a=function(e){var t=e.children,n=e.filters,o=Object(a.useState)(!1),c=o[0],u=o[1],d=Object(a.useState)(new Set),f=d[0],m=d[1],p=Object(a.useState)(!1),b=p[0],v=p[1],h=Object(a.useState)(null),g=h[0],y=h[1],_=[];t&&(_=Array.isArray(t)?t:[t]);var O=_.some((function(e){return e.props.common})),j=s()(_).flatMap((function(e){return e.props.groups})).uniq().value(),E=_.some((function(e){return e.props.required})),N=_;return c&&(N=N.filter((function(e){return e.props.common}))),f.size>0&&(N=N.filter((function(e){return Array.from(f).every((function(t){return e.props.groups.includes(t)}))}))),b&&(N=N.filter((function(e){return e.props.required}))),g&&(N=N.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,_.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},N.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return y(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:j,currentState:f,setState:m}),O&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:c}),"common"),E&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return v(e.currentTarget.checked)},checked:b}),"required")))):null,!Array.isArray(N)||N.length>0?r.a.createElement("ul",{className:"connected-list"},N):r.a.createElement(i.a,{text:"no components found"}))}},1156:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1138),n(1151),n(1152);var a=n(0),r=n.n(a),l=n(1136),i=n.n(l),o=(n(1128),n(1167));function s(e){return e.includes(".")?'"'+e+'"':e}function c(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?s(t.name)+" = "+c(t.value):s(Object.keys(t)[0])+" = "+c(Object.values(t)[0]):e?s(e)+" = "+c(t):c(t);var n}function d(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},c(l))),n.push(" ")}else for(var i in t)n.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},c(i))),n.push(" ");return n}function f(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(o.a,{className:"language-toml"},l))}function m(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,c(n)),a)}function p(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,c(a)))}function b(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,i=(e.groups,e.name),o=e.path,s=e.relevantWhen,c=e.required,u=e.unit,b=e.warnings,v=Object(a.useState)(!1),h=v[0],g=v[1];return r.a.createElement("ul",{className:"info"},b&&b.length>0&&b.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),s&&r.a.createElement("li",null,"Only ",c?"required":"relevant"," when:"," ",r.a.createElement(p,{value:s})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(m,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(d,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!h)}},h?"Hide examples":"View examples"),h&&r.a.createElement(f,{name:i,path:o,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,o=e.enumValues,s=e.examples,c=e.groups,u=e.name,d=e.path,f=e.relevantWhen,m=e.required,p=e.templateable,v=e.type,h=e.unit,g=e.warnings,y=Object(a.useState)(!1),_=y[0],O=(y[1],t);return _&&(O=O.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":m,"field-collapsed":_}),required:m},r.a.createElement("div",{className:"badges"},p&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),v&&r.a.createElement("span",{className:"badge badge--secondary"},v,h&&r.a.createElement(r.a.Fragment,null," (",h,")")),o&&Object.keys(o).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),m?r.a.createElement("span",{className:"badge badge--danger"},"required",f&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!_&&"table"!=v&&r.a.createElement(b,{defaultValue:l,enumValues:o,examples:s,groups:c,name:u,path:d,relevantWhen:f,required:m,unit:h,warnings:g}))}},591:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),l=(n(0),n(1128)),i=n(1155),o=n(1156),s=n(1161),c=n(1160),u={last_modified_on:"2020-06-10",component_title:"Add Fields",description:"The Vector `add_fields` transform accepts and outputs `log` events, allowing you to add one or more log fields.",event_types:["log"],function_category:"schema",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+add_fields%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'add_fields|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/add_fields.rs",status:"prod-ready",title:"Add Fields Transform",unsupported_operating_systems:[]},d={id:"reference/transforms/add_fields",title:"Add Fields Transform",description:"The Vector `add_fields` transform accepts and outputs `log` events, allowing you to add one or more log fields.",source:"@site/docs/reference/transforms/add_fields.md",permalink:"/docs/reference/transforms/add_fields",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/transforms/add_fields.md",sidebar_label:'add_fields|["log"]',sidebar:"docs",previous:{title:"Transforms",permalink:"/docs/reference/transforms"},next:{title:"Add Tags Transform",permalink:"/docs/reference/transforms/add_tags"}},f=[{value:"Configuration",id:"configuration",children:[{value:"fields",id:"fields",children:[]},{value:"overwrite",id:"overwrite",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Complex Processing",id:"complex-processing",children:[]},{value:"Conflicts",id:"conflicts",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Types",id:"types",children:[]}]}],m={rightToc:f};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"add_fields")," transform\naccepts and outputs ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(l.b)("inlineCode",{parentName:"a"},"log"))," events, allowing you to add\none or more log fields."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"common",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.my_transform_id]\n  # General\n  type = "add_fields" # required\n  inputs = ["my-source-or-transform-id"] # required\n  overwrite = true # optional, default\n\n  # Fields\n  fields.string_field = "string value" # example\n  fields.env_var_field = "${ENV_VAR}" # example\n  fields.templated_field = "{{ my_other_field }}" # example\n  fields.int_field = 1 # example\n  fields.float_field = 1.2 # example\n  fields.bool_field = true # example\n  fields.timestamp_field = 1979-05-27T00:32:00Z # example\n  fields.parent.child_field = "child_value" # example\n  fields.list_field = ["first", "second", "third"] # example\n'))),Object(l.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.my_transform_id]\n  # General\n  type = "add_fields" # required\n  inputs = ["my-source-or-transform-id"] # required\n  overwrite = true # optional, default\n\n  # Fields\n  fields.string_field = "string value" # example\n  fields.env_var_field = "${ENV_VAR}" # example\n  fields.templated_field = "{{ my_other_field }}" # example\n  fields.int_field = 1 # example\n  fields.float_field = 1.2 # example\n  fields.bool_field = true # example\n  fields.timestamp_field = 1979-05-27T00:32:00Z # example\n  fields.parent.child_field = "child_value" # example\n  fields.list_field = ["first", "second", "third"] # example\n')))),Object(l.b)(i.a,{filters:!0,mdxType:"Fields"},Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],groups:[],name:"fields",path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"fields"},"fields"),Object(l.b)("p",null,"A table of key/value pairs representing the keys to be added to the event."),Object(l.b)(i.a,{filters:!1,mdxType:"Fields"},Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{string_field:"string value"},{env_var_field:"${ENV_VAR}"},{templated_field:"{{ my_other_field }}"},{int_field:1},{float_field:1.2},{bool_field:!0},{timestamp_field:"1979-05-27 00:32:00 -0700"},{parent:{child_field:"child_value"}},{list_field:["first","second","third"]}],groups:[],name:"`[field-name]`",path:"fields",relevantWhen:null,required:!0,templateable:!1,type:"*",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h4",{id:"field-name"},Object(l.b)("inlineCode",{parentName:"h4"},"[field-name]")),Object(l.b)("p",null,"The name of the field to add. Accepts all ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#types"}),"supported\ntypes"),". Use ",Object(l.b)("inlineCode",{parentName:"p"},".")," for adding nested fields.")))),Object(l.b)(o.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"overwrite",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"overwrite"},"overwrite"),Object(l.b)("p",null,"By default, fields will be overridden. Set this to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," to avoid overwriting\nvalues."))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"complex-processing"},"Complex Processing"),Object(l.b)("p",null,"If you encounter limitations with the ",Object(l.b)("inlineCode",{parentName:"p"},"add_fields"),"\ntransform then we recommend using a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://vector.dev/components/?functions%5B%5D=program"}),"runtime transform"),".\nThese transforms are designed for complex processing and give you the power of\nfull programming runtime."),Object(l.b)("h3",{id:"conflicts"},"Conflicts"),Object(l.b)("h4",{id:"key-conflicts"},"Key Conflicts"),Object(l.b)("p",null,"Keys specified in this transform will replace existing keys."),Object(l.b)("h4",{id:"nested-key-conflicts"},"Nested Key Conflicts"),Object(l.b)("p",null,"Nested keys are added in a ",Object(l.b)("em",{parentName:"p"},"deep")," fashion. They will not replace any ancestor\nobjects. For example, given the following ",Object(l.b)("inlineCode",{parentName:"p"},"log")," event:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "parent": {\n    "child1": "value1"\n  }\n}\n')),Object(l.b)("p",null,"And the following configuration:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.add_nested_field]\n  type = "add_fields"\n  fields.parent.child2 = "value2"\n')),Object(l.b)("p",null,"Will result in the following log event:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "parent": {\n    "child1": "value1",\n    "child2": "value2"\n  }\n}\n')),Object(l.b)("p",null,"Notice that ",Object(l.b)("inlineCode",{parentName:"p"},"parent.child1")," field was preserved."),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(l.b)("h3",{id:"types"},"Types"),Object(l.b)("p",null,"All supported ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#types"}),"configuration value types")," are\naccepted. This includes primitivate types (",Object(l.b)("inlineCode",{parentName:"p"},"string"),", ",Object(l.b)("inlineCode",{parentName:"p"},"int"),", ",Object(l.b)("inlineCode",{parentName:"p"},"float"),", ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),")\nand special types, such as ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#arrays"}),"arrays")," and\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#nested-fields"}),"nested fields"),"."))}p.isMDXComponent=!0}}]);