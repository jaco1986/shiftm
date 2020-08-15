(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var a=r(1),n=r(6),o=(r(0),r(927)),i=r(986),c={title:"Transforms",description:"Transforms are responsible for parsing, enriching, or transforming your log and metric data in-flight. They can be chained together, forming a network of transforms within your topology.",sidebar_label:"hidden",hide_pagination:!0},s={id:"reference/transforms",title:"Transforms",description:"Transforms are responsible for parsing, enriching, or transforming your log and metric data in-flight. They can be chained together, forming a network of transforms within your topology.",source:"@site/docs/reference/transforms.md",permalink:"/docs/reference/transforms",sidebar_label:"hidden"},l=[],u={rightToc:l};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Transforms are responsible for parsing, enriching, or transforming your\n","[log][docs.data-model.log]"," and ","[metric][docs.data-model.metric]"," data\nin-flight. They can be chained together, forming a network of transforms within\nyour topology, ultimately flowing into a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink"),"."),Object(o.b)("hr",null),Object(o.b)(i.a,{titles:!1,sinks:!1,sources:!1,mdxType:"VectorComponents"}))}m.isMDXComponent=!0},939:function(e,t,r){"use strict";var a=r(0),n=r.n(a);r(937);t.a=function(e){return e.text,n.a.createElement("section",{className:"empty"})}},941:function(e,t,r){"use strict";r(12);var a=r(0),n=r.n(a),o=r(950),i=r.n(o);t.a=function({currentState:e,humanize:t,icon:r,name:a,setState:o,values:c}){if(0==c.size)return null;let s=Array.from(c);return n.a.createElement(n.a.Fragment,null,s.map((c,s)=>{let l="string"==typeof c&&t?i()(c):c;return n.a.createElement("label",{key:s},n.a.createElement("input",{checked:e.has(c),name:a,onChange:t=>{let r=new Set(e);t.currentTarget.checked?r.add(c):r.delete(c),o(r)},type:"checkbox"}),l&&n.a.createElement(n.a.Fragment,null,r?n.a.createElement("i",{className:"feather icon-"+r}):""," ",l))}))}},968:function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,n=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var o=t[a],i=o.obj[o.prop],c=Object.keys(i),s=0;s<c.length;++s){var l=c[s],u=i[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var a=[],o=0;o<r.length;++o)void 0!==r[o]&&a.push(r[o]);t.obj[t.prop]=a}}}(t),e},decode:function(e,t,r){var a=e.replace(/\+/g," ");if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch(n){return a}},encode:function(e,t,r){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var n="",i=0;i<a.length;++i){var c=a.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?n+=a.charAt(i):c<128?n+=o[c]:c<2048?n+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?n+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&a.charCodeAt(i)),n+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(n(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!a.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var c=t;return n(t)&&!n(r)&&(c=i(t,o)),n(t)&&n(r)?(r.forEach((function(r,n){if(a.call(t,n)){var i=t[n];i&&"object"==typeof i&&r&&"object"==typeof r?t[n]=e(i,r,o):t.push(r)}else t[n]=r})),t):Object.keys(r).reduce((function(t,n){var i=r[n];return a.call(t,n)?t[n]=e(t[n],i,o):t[n]=i,t}),c)}}},970:function(e,t,r){"use strict";var a=String.prototype.replace,n=/%20/g,o=r(968),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return a.call(e,n,"+")},RFC3986:function(e){return String(e)}}},i)},980:function(e,t,r){"use strict";var a=r(981),n=r(982),o=r(970);e.exports={formats:o,parse:n,stringify:a}},981:function(e,t,r){"use strict";var a=r(968),n=r(970),o=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,l=function(e,t){s.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,m=n.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,format:m,formatter:n.formatters[m],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,n,o,i,s,u,m,p,d,y,h,g){var b,v=t;if("function"==typeof u?v=u(r,v):v instanceof Date?v=d(v):"comma"===n&&c(v)&&(v=v.join(",")),null===v){if(o)return s&&!h?s(r,f.encoder,g,"key"):r;v=""}if("string"==typeof(b=v)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||a.isBuffer(v))return s?[y(h?r:s(r,f.encoder,g,"key"))+"="+y(s(v,f.encoder,g,"value"))]:[y(r)+"="+y(String(v))];var E,N=[];if(void 0===v)return N;if(c(u))E=u;else{var w=Object.keys(v);E=m?w.sort(m):w}for(var O=0;O<E.length;++O){var j=E[O];i&&null===v[j]||(c(v)?l(N,e(v[j],"function"==typeof n?n(r,j):r,n,o,i,s,u,m,p,d,y,h,g)):l(N,e(v[j],r+(p?"."+j:"["+j+"]"),n,o,i,s,u,m,p,d,y,h,g)))}return N};e.exports=function(e,t){var r,a=e,s=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!o.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var a=n.formatters[r],i=f.filter;return("function"==typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:i,formatter:a,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"==typeof s.filter?a=(0,s.filter)("",a):c(s.filter)&&(r=s.filter);var u,m=[];if("object"!=typeof a||null===a)return"";u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var d=i[u];r||(r=Object.keys(a)),s.sort&&r.sort(s.sort);for(var y=0;y<r.length;++y){var h=r[y];s.skipNulls&&null===a[h]||l(m,p(a[h],h,d,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.formatter,s.encodeValuesOnly,s.charset))}var g=m.join(s.delimiter),b=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),g.length>0?b+g:""}},982:function(e,t,r){"use strict";var a=r(968),n=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:a.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t){if(o(e)){for(var r=[],a=0;a<e.length;a+=1)r.push(t(e[a]));return r}return t(e)},u=function(e,t,r,a){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,c=r.depth>0&&/(\[[^[\]]*])/.exec(o),l=c?o.slice(0,c.index):o,u=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var m=0;r.depth>0&&null!==(c=i.exec(o))&&m<r.depth;){if(m+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+o.slice(c.index)+"]"),function(e,t,r,a){for(var n=a?t:s(t,r),o=e.length-1;o>=0;--o){var i,c=e[o];if("[]"===c&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&c!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:i[l]=n:i={0:n}}n=i}return n}(u,t,r,a)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||a.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var m="string"==typeof e?function(e,t){var r,u={},m=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=m.split(t.delimiter,f),d=-1,y=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?y="utf-8":"utf8=%26%2310003%3B"===p[r]&&(y="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var h,g,b=p[r],v=b.indexOf("]="),E=-1===v?b.indexOf("="):v+1;-1===E?(h=t.decoder(b,i.decoder,y,"key"),g=t.strictNullHandling?null:""):(h=t.decoder(b.slice(0,E),i.decoder,y,"key"),g=l(s(b.slice(E+1),t),(function(e){return t.decoder(e,i.decoder,y,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===y&&(g=c(g)),b.indexOf("[]=")>-1&&(g=o(g)?[g]:g),n.call(u,h)?u[h]=a.combine(u[h],g):u[h]=g}return u}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(m),d=0;d<p.length;++d){var y=p[d],h=u(y,m[y],r,"string"==typeof e);f=a.merge(f,h,r)}return a.compact(f)}},986:function(e,t,r){"use strict";r(12);var a=r(1),n=r(0),o=r.n(n),i=r(941),c=r(939),s=r(928),l=r(937),u=(r(938),r(948)),m=r.n(u),f=r(936),p=r.n(f),d=(r(950),r(980)),y=r.n(d),h=r(931);r(105);function g({delivery_guarantee:e,description:t,event_types:r,function_category:a,logo_path:n,name:i,pathTemplate:c,status:s,title:u,type:m}){let f=c;f||("source"==m&&(f="/docs/reference/sources/<name>/"),"transform"==m&&(f="/docs/reference/transforms/<name>/"),"sink"==m&&(f="/docs/reference/sinks/<name>/"));let p=f.replace("<name>",i);return o.a.createElement(l.a,{to:p,className:"vector-component",title:t},o.a.createElement("div",{className:"vector-component--header"},o.a.createElement("div",{className:"vector-component--name"},u)),o.a.createElement("div",{className:"vector-component--badges"},"beta"==s?o.a.createElement("span",{className:"badge badge--warning",title:"This component is in beta and is not recommended for production environments"},o.a.createElement("i",{className:"feather icon-alert-triangle"})):o.a.createElement("span",{className:"badge badge--primary",title:"This component has passed reliability standards that make it production ready"},o.a.createElement("i",{className:"feather icon-award"})),"best_effort"==e?o.a.createElement("span",{className:"badge badge--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data"},o.a.createElement("i",{className:"feather icon-shield-off"})):o.a.createElement("span",{className:"badge badge--primary",title:"This component offers an at-least-once delivery guarantee"},o.a.createElement("i",{className:"feather icon-shield"})),r.includes("log")?o.a.createElement("span",{className:"badge badge--primary",title:"This component works with log event types"},"log"):"",r.includes("metric")?o.a.createElement("span",{className:"badge badge--primary",title:"This component works with metric event types"},"metric"):"",o.a.createElement("span",{className:"badge badge--primary"},a)))}function b({components:e,headingLevel:t,pathTemplate:r,titles:n}){const i=e.filter(e=>"source"==e.type),l=e.filter(e=>"transform"==e.type),u=e.filter(e=>"sink"==e.type),m="h"+(t||3);return e.length>0?o.a.createElement(o.a.Fragment,null,i.length>0?o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(m,null,i.length," Sources"),o.a.createElement("div",{className:"vector-components--grid"},i.map((e,t)=>o.a.createElement(g,Object(a.a)({key:t,pathTemplate:r},e))))):"",l.length>0?o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(m,null,l.length," Transforms"),o.a.createElement("div",{className:"vector-components--grid"},l.map((e,t)=>o.a.createElement(g,Object(a.a)({key:t,pathTemplate:r},e))))):"",u.length>0?o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(m,null,u.length," Sinks"),o.a.createElement("div",{className:"vector-components--grid"},u.map((e,t)=>o.a.createElement(g,Object(a.a)({key:t,pathTemplate:r},e))))):"",o.a.createElement("hr",null),o.a.createElement(s.a,{to:"https://github.com/timberio/vector/issues/new?labels=type%3A+new+feature",target:"_blank",rightIcon:"plus-circle"},"Request a new component")):o.a.createElement(c.a,{text:"no components found"})}t.a=function(e){const{siteConfig:t}=Object(h.a)(),{metadata:{sources:r,transforms:a,sinks:c}}=t.customFields,s=e.titles||null==e.titles,u=1==e.filterColumn,f=e.pathTemplate,d=e.location?y.a.parse(e.location.search,{ignoreQueryPrefix:!0}):{};let g=[];(e.sources||null==e.sources)&&(g=g.concat(Object.values(r))),(e.transforms||null==e.transforms)&&(g=g.concat(Object.values(a))),(e.sinks||null==e.sinks)&&(g=g.concat(Object.values(c))),g=g.sort((e,t)=>e.name>t.name?1:-1);const[v,E]=Object(n.useState)("true"==d["at-least-once"]),[N,w]=Object(n.useState)(new Set(d["event-types"]||e.eventTypes)),[O,j]=Object(n.useState)(new Set(d.functions)),[S,k]=Object(n.useState)(new Set(d["operating-systems"])),[x,T]=Object(n.useState)("true"==d["prod-ready"]),[C,F]=Object(n.useState)(new Set(d.providers)),[P,A]=Object(n.useState)(d.search);P&&(g=g.filter(e=>`${e.name.toLowerCase()} ${e.type.toLowerCase()}`.includes(P.toLowerCase()))),v&&(g=g.filter(e=>"at_least_once"==e.delivery_guarantee)),N.size>0&&(g=g.filter(e=>Array.from(N).some(t=>e.event_types.includes(t)))),O.size>0&&(g=g.filter(e=>O.has(e.function_category))),S.size>0&&(g=g.filter(e=>Array.from(S).every(t=>e.operating_systems.includes(t)))),x&&(g=g.filter(e=>"prod-ready"==e.status)),C.size>0&&(g=g.filter(e=>Array.from(C).every(t=>e.service_providers&&e.service_providers.includes(t)))),e.exceptNames&&e.exceptNames.length>0&&(g=g.filter(t=>!e.exceptNames.includes(t.name))),e.exceptFunctions&&e.exceptFunctions.length>0&&(g=g.filter(t=>!e.exceptFunctions.includes(t.function_category)));const _=N.size>0?N:new Set(m()(g).map(e=>e.event_types).flatten().uniq().compact().sort().value()),D=new Set(m()(g).map(e=>e.operating_systems).flatten().uniq().compact().sort().value()),z=new Set(m()(g).map(e=>e.service_providers).flatten().uniq().compact().sort().value()),L=new Set(m()(g).filter(e=>"source"==e.type).map(e=>e.function_category).uniq().compact().sort().value()),H=new Set(m()(g).filter(e=>"transform"==e.type).map(e=>e.function_category).uniq().compact().sort().value()),R=new Set(m()(g).filter(e=>"sink"==e.type).map(e=>e.function_category).uniq().compact().sort().value());return o.a.createElement("div",{className:p()("vector-components",{"vector-components--cols":u})},o.a.createElement("div",{className:"filters"},o.a.createElement("div",{className:"search"},o.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:e=>A(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--choices"},o.a.createElement(i.a,{label:"Event Types",icon:"database",values:_,humanize:!0,currentState:N,setState:w}))),o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--label"},o.a.createElement(l.a,{to:"/docs/about/guarantees/",title:"Learn more about Vector's guarantees"},"Guarantees ",o.a.createElement("i",{className:"feather icon-info"}))),o.a.createElement("div",{className:"filter--choices"},o.a.createElement("label",{title:"Show only components that offer an at-least-once delivery guarantee."},o.a.createElement("input",{type:"checkbox",onChange:e=>E(e.currentTarget.checked),checked:v}),o.a.createElement("i",{className:"feather icon-shield"})," At-least-once"),o.a.createElement("label",{title:"Show only production ready components."},o.a.createElement("input",{type:"checkbox",onChange:e=>T(e.currentTarget.checked),checked:x}),o.a.createElement("i",{className:"feather icon-award"})," Prod-ready"))),L.size>0&&o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--label"},"Source Functions"),o.a.createElement("div",{className:"filter--choices"},o.a.createElement(i.a,{label:"Functions",icon:"settings",values:L,humanize:!0,currentState:O,setState:j}))),H.size>0&&o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--label"},"Transform Functions"),o.a.createElement("div",{className:"filter--choices"},o.a.createElement(i.a,{label:"Functions",icon:"settings",values:H,humanize:!0,currentState:O,setState:j}))),R.size>0&&o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--label"},"Sink Functions"),o.a.createElement("div",{className:"filter--choices"},o.a.createElement(i.a,{label:"Functions",icon:"settings",values:R,humanize:!0,currentState:O,setState:j}))),z.size>0&&o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--label"},"Providers"),o.a.createElement("div",{className:"filter--choices"},o.a.createElement(i.a,{label:"Providers",icon:"cloud",values:z,currentState:C,setState:F}))),D.size>0&&o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter--label"},o.a.createElement(l.a,{to:"/docs/setup/installation/operating-systems/",title:"Learn more about Vector's operating systems"},"Operating Systems")),o.a.createElement("div",{className:"filter--choices"},o.a.createElement(i.a,{label:"Operating Systems",icon:"cpu",values:D,currentState:S,setState:k})))),o.a.createElement("div",{className:"vector-components--results"},o.a.createElement(b,{components:g,headingLevel:e.headingLevel,pathTemplate:f,titles:s})))}}}]);