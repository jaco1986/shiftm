(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1139:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),i=n(84),c=n(85),o=n(26),s=n(1145),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,m,p=l(e),d="function"==typeof this?this:Array,f=arguments.length,b=f>1?arguments[1]:void 0,h=void 0!==b,v=0,g=u(p);if(h&&(b=a(b,f>2?arguments[2]:void 0,2)),null==g||d==Array&&c(g))for(n=new d(t=o(p.length));t>v;v++)s(n,v,h?b(p[v],v):p[v]);else for(m=g.call(p),n=new d;!(r=m.next()).done;v++)s(n,v,h?i(m,b,[r.value,v],!0):r.value);return n.length=v,n}})},1140:function(e,t,n){"use strict";var a=n(1146),r=n(1141);e.exports=n(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1141:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1137),i=n(1136),c=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:c()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1137),n(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1145:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1146:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),i=n(24),c=n(78),o=n(79),s=n(54),u=n(83),m=n(87),p=n(10),d=n(1143).fastKey,f=n(1141),b=p?"_s":"size",h=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var u=e((function(e,a){c(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[b]=0,null!=a&&o(a,n,e[s],e)}));return l(u.prototype,{clear:function(){for(var e=f(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[b]=0},delete:function(e){var n=f(this,t),a=h(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[b]--}return!!a},forEach:function(e){f(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(f(this,t),e)}}),p&&a(u.prototype,"size",{get:function(){return f(this,t)[b]}}),u},def:function(e,t,n){var a,r,l=h(e,t);return l?l.v=n:(e._l=l={i:r=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[b]++,"F"!==r&&(e._i[r]=l)),e},getEntry:h,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=f(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),m(t)}}},1147:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),i=n(80),c=n(1143),o=n(79),s=n(78),u=n(12),m=n(14),p=n(81),d=n(39),f=n(1148);e.exports=function(e,t,n,b,h,v){var g=a[e],E=g,_=h?"set":"add",O=E&&E.prototype,y={},j=function(e){var t=O[e];l(O,e,"delete"==e||"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof E&&(v||O.forEach&&!m((function(){(new E).entries().next()})))){var S=new E,N=S[_](v?{}:-0,1)!=S,w=m((function(){S.has(1)})),A=p((function(e){new E(e)})),C=!v&&m((function(){for(var e=new E,t=5;t--;)e[_](t,t);return!e.has(-0)}));A||((E=t((function(t,n){s(t,E,e);var a=f(new g,t,E);return null!=n&&o(n,h,a[_],a),a}))).prototype=O,O.constructor=E),(w||C)&&(j("delete"),j("has"),h&&j("get")),(C||N)&&j(_),v&&O.clear&&delete O.clear}else E=b.getConstructor(t,e,h,_),i(E.prototype,n),c.NEED=!0;return d(E,e),y[e]=E,r(r.G+r.W+r.F*(E!=g),y),v||b.setStrong(E,e,h),E}},1148:function(e,t,n){var a=n(12),r=n(1149).set;e.exports=function(e,t,n){var l,i=t.constructor;return i!==n&&"function"==typeof i&&(l=i.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1149:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1150:function(e,t,n){"use strict";n(1140),n(77),n(1139),n(25),n(20),n(19),n(1138);var a=n(0),r=n.n(a),l=n(1157),i=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,c=e.setState,o=e.values;if(0==o.size)return null;var s=Array.from(o);return r.a.createElement(r.a.Fragment,null,s.map((function(e,o){var s="string"==typeof e&&n?i()(e):e;return r.a.createElement("label",{key:o},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),c(a)},type:"checkbox"}),s&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",s))})))}},1153:function(e,t,n){"use strict";var a=n(13),r=n(1154),l=n(27),i=n(26),c=n(29),o=n(1166);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return c(e),t=i(a.length),n=o(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1154:function(e,t,n){"use strict";var a=n(1165),r=n(12),l=n(26),i=n(24),c=n(2)("isConcatSpreadable");e.exports=function e(t,n,o,s,u,m,p,d){for(var f,b,h=u,v=0,g=!!p&&i(p,d,3);v<s;){if(v in o){if(f=g?g(o[v],v,n):o[v],b=!1,r(f)&&(b=void 0!==(b=f[c])?!!b:a(f)),b&&m>0)h=e(t,n,f,l(f.length),h,m-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=f}h++}v++}return h}},1155:function(e,t,n){"use strict";n(1138),n(1151),n(1152),n(1139),n(1153),n(25),n(20),n(19),n(77),n(1140);var a=n(0),r=n.n(a),l=n(1150),i=n(1144),c=n(1158),o=n.n(c);t.a=function(e){var t=e.children,n=e.filters,c=Object(a.useState)(!1),s=c[0],u=c[1],m=Object(a.useState)(new Set),p=m[0],d=m[1],f=Object(a.useState)(!1),b=f[0],h=f[1],v=Object(a.useState)(null),g=v[0],E=v[1],_=[];t&&(_=Array.isArray(t)?t:[t]);var O=_.some((function(e){return e.props.common})),y=o()(_).flatMap((function(e){return e.props.groups})).uniq().value(),j=_.some((function(e){return e.props.required})),S=_;return s&&(S=S.filter((function(e){return e.props.common}))),p.size>0&&(S=S.filter((function(e){return Array.from(p).every((function(t){return e.props.groups.includes(t)}))}))),b&&(S=S.filter((function(e){return e.props.required}))),g&&(S=S.filter((function(e){return e.props.name.toLowerCase().includes(g.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,_.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},S.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return E(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:y,currentState:p,setState:d}),O&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:s}),"common"),j&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return h(e.currentTarget.checked)},checked:b}),"required")))):null,!Array.isArray(S)||S.length>0?r.a.createElement("ul",{className:"connected-list"},S):r.a.createElement(i.a,{text:"no components found"}))}},1156:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1138),n(1151),n(1152);var a=n(0),r=n.n(a),l=n(1136),i=n.n(l),c=(n(1128),n(1167));function o(e){return e.includes(".")?'"'+e+'"':e}function s(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?o(t.name)+" = "+s(t.value):o(Object.keys(t)[0])+" = "+s(Object.values(t)[0]):e?o(e)+" = "+s(t):s(t);var n}function m(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},s(l))),n.push(" ")}else for(var i in t)n.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},s(i))),n.push(" ");return n}function p(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(c.a,{className:"language-toml"},l))}function d(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,s(n)),a)}function f(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,s(a)))}function b(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,i=(e.groups,e.name),c=e.path,o=e.relevantWhen,s=e.required,u=e.unit,b=e.warnings,h=Object(a.useState)(!1),v=h[0],g=h[1];return r.a.createElement("ul",{className:"info"},b&&b.length>0&&b.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),o&&r.a.createElement("li",null,"Only ",s?"required":"relevant"," when:"," ",r.a.createElement(f,{value:o})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(d,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(m,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return g(!v)}},v?"Hide examples":"View examples"),v&&r.a.createElement(p,{name:i,path:c,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,c=e.enumValues,o=e.examples,s=e.groups,u=e.name,m=e.path,p=e.relevantWhen,d=e.required,f=e.templateable,h=e.type,v=e.unit,g=e.warnings,E=Object(a.useState)(!1),_=E[0],O=(E[1],t);return _&&(O=O.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":d,"field-collapsed":_}),required:d},r.a.createElement("div",{className:"badges"},f&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),h&&r.a.createElement("span",{className:"badge badge--secondary"},h,v&&r.a.createElement(r.a.Fragment,null," (",v,")")),c&&Object.keys(c).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),d?r.a.createElement("span",{className:"badge badge--danger"},"required",p&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!_&&"table"!=h&&r.a.createElement(b,{defaultValue:l,enumValues:c,examples:o,groups:s,name:u,path:m,relevantWhen:p,required:d,unit:v,warnings:g}))}},256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),l=(n(0),n(1128)),i=n(1172),c=n(1155),o=n(1156),s={last_modified_on:"2020-05-01",title:"Environment Variables",description:"A full list of Vector's supported environment variables and how to use them.",sidebar_label:"Env Vars"},u={id:"reference/env-vars",title:"Environment Variables",description:"A full list of Vector's supported environment variables and how to use them.",source:"@site/docs/reference/env-vars.md",permalink:"/docs/reference/env-vars",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/env-vars.md",sidebar_label:"Env Vars",sidebar:"docs",previous:{title:"Vector Sink",permalink:"/docs/reference/sinks/vector"},next:{title:"Field Path Notation",permalink:"/docs/reference/field-path-notation"}},m=[{value:"Special Variables",id:"special-variables",children:[{value:"AWS_ACCESS_KEY_ID",id:"aws_access_key_id",children:[]},{value:"AWS_SECRET_ACCESS_KEY",id:"aws_secret_access_key",children:[]},{value:"DOCKER_HOST",id:"docker_host",children:[]},{value:"DOCKER_VERIFY_TLS",id:"docker_verify_tls",children:[]},{value:"GOOGLE_APPLICATION_CREDENTIALS",id:"google_application_credentials",children:[]},{value:"LOG",id:"log",children:[]},{value:"RUST_BACKTRACE",id:"rust_backtrace",children:[]}]},{value:"Custom Variables",id:"custom-variables",children:[{value:"Default Values",id:"default-values",children:[]},{value:"Escaping",id:"escaping",children:[]}]}],p={rightToc:m};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can control Vector's behavior through select environment variables:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ENV_VAR1=val ENV_VAR2=val vector --config=/etc/vector/vector.toml\n")),Object(l.b)("p",null,"In addition, we recommend that you look at the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/global-options/"}),"global configuration\noptions")," as well."),Object(l.b)("h2",{id:"special-variables"},"Special Variables"),Object(l.b)(c.a,{filters:!0,mdxType:"Fields"},Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["AKIAIOSFODNN7EXAMPLE"],groups:[],name:"AWS_ACCESS_KEY_ID",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"aws_access_key_id"},"AWS_ACCESS_KEY_ID"),Object(l.b)("p",null,"Used for AWS authentication when communicating with AWS services. See relevant\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/components/?providers%5B%5D=aws/"}),"AWS components")," for more info.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["wJalrXUtnFEMI/K7MDENG/FD2F4GJ"],groups:[],name:"AWS_SECRET_ACCESS_KEY",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"aws_secret_access_key"},"AWS_SECRET_ACCESS_KEY"),Object(l.b)("p",null,"Used for AWS authentication when communicating with AWS services. See relevant\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/components/?providers%5B%5D=aws/"}),"AWS components")," for more info.")),Object(l.b)(o.a,{common:!1,defaultValue:"unix:///var/run/docker.sock",enumValues:null,examples:["unix://path/to/socket","tcp://host:2375/path"],groups:[],name:"DOCKER_HOST",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"docker_host"},"DOCKER_HOST"),Object(l.b)("p",null,"The docker host to connect to.")),Object(l.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"DOCKER_VERIFY_TLS",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"docker_verify_tls"},"DOCKER_VERIFY_TLS"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the TLS certificate of the remote\nhost. Do NOT set this to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," unless you understand the risks of not\nverifying the remote certificate.")),Object(l.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/credentials.json"],groups:[],name:"GOOGLE_APPLICATION_CREDENTIALS",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"google_application_credentials"},"GOOGLE_APPLICATION_CREDENTIALS"),Object(l.b)("p",null,"The filename for a Google Cloud service account credentials JSON file used to\nauthenticate access to the Stackdriver Logging API.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["debug"],groups:[],name:"LOG",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"log"},"LOG"),Object(l.b)("p",null,"Sets Vector's log level. See the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/monitoring/#levels"}),"log section in the monitoring\nguide")," for more information on the available levels.")),Object(l.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[!0,!1],groups:[],name:"RUST_BACKTRACE",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"rust_backtrace"},"RUST_BACKTRACE"),Object(l.b)("p",null,"Enables backtraces when errors are logged. Use this when debugging only since\nit can degrade performance."))),Object(l.b)("h2",{id:"custom-variables"},"Custom Variables"),Object(l.b)("p",null,"As noticed in the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"configuration document"),",\nVector supports custom environment variables via the ",Object(l.b)("inlineCode",{parentName:"p"},"${...}")," syntax:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'option = "${ENV_VAR}"\n')),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Interpolation is done before parsing the configuration file. This is done when\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/process-management/#starting"}),"starting")," and\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/process-management/#reloading"}),"reloading")," Vector.")),Object(l.b)("h3",{id:"default-values"},"Default Values"),Object(l.b)("p",null,"Default values can be supplied via the ",Object(l.b)("inlineCode",{parentName:"p"},":-")," syntax:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'option = "${ENV_VAR:-default}"\n')),Object(l.b)("h3",{id:"escaping"},"Escaping"),Object(l.b)("p",null,"You can escape environment variable by preceding them with a ",Object(l.b)("inlineCode",{parentName:"p"},"$")," character. For\nexample ",Object(l.b)("inlineCode",{parentName:"p"},"$${HOSTNAME}")," will be treated ",Object(l.b)("em",{parentName:"p"},"literally")," in the above environment\nvariable example."))}d.isMDXComponent=!0}}]);