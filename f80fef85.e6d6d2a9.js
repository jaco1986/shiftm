(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{1006:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=["second","minute","hour","day","week","month","year"],i=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"],s={},c=function(e,t){s[e]=t},D=function(e){return s[e]||s.en_US},o=[60,60,24,7,365/7/12,12];function l(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function m(e,t){for(var a=e<0?1:0,n=e=Math.abs(e),r=0;e>=o[r]&&r<o.length;r++)e/=o[r];return(e=Math.floor(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,n)[a].replace("%s",e.toString())}function h(e,t){return(+(t?l(t):new Date)-+l(e))/1e3}function p(e){return parseInt(e.getAttribute("timeago-id"))}var d={},g=function(e){clearTimeout(e),delete d[e]};function f(e,t,a,n){g(p(e));var r=n.relativeDate,u=n.minInterval,i=h(t,r);e.innerText=m(i,a);var s=setTimeout((function(){f(e,t,a,n)}),Math.min(1e3*Math.max(function(e){for(var t=1,a=0,n=Math.abs(e);e>=o[a]&&a<o.length;a++)e/=o[a],t*=o[a];return n=(n%=t)?t-n:t,Math.ceil(n)}(i),u||1),2147483647));d[s]=0,function(e,t){e.setAttribute("timeago-id",t)}(e,s)}function E(e){e?g(p(e)):Object.keys(d).forEach(g)}c("en_US",(function(e,t){if(0===t)return["just now","right now"];var a=u[Math.floor(t/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),c("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var a=i[~~(t/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}));var b,F=(b=function(e,t){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),y=function(){return(y=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dom=null,t}return F(t,e),t.prototype.componentDidMount=function(){this.renderTimeAgo()},t.prototype.componentDidUpdate=function(){this.renderTimeAgo()},t.prototype.renderTimeAgo=function(){var e,t=this.props,a=t.live,n=t.datetime,r=t.locale,u=t.opts;E(this.dom),!1!==a&&(this.dom.setAttribute("datetime",""+((e=n)instanceof Date?e.getTime():e)),function(e,t,a){var n=e.length?e:[e];n.forEach((function(e){f(e,function(e){return e.getAttribute("datetime")}(e),D(t),a||{})}))}(this.dom,r,u))},t.prototype.componentWillUnmount=function(){E(this.dom)},t.prototype.render=function(){var e=this,t=this.props,a=t.datetime,n=(t.live,t.locale),u=t.opts,i=v(t,["datetime","live","locale","opts"]);return r.a.createElement("time",y({ref:function(t){e.dom=t}},i),function(e,t,a){return m(h(e,a&&a.relativeDate),D(t))}(a,n,u))},t.defaultProps={live:!0,className:""},t}(r.a.Component);t.a=C},1010:function(e,t,a){"use strict";const n=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,e=>e.toUpperCase())};e.exports=n,e.exports.default=n},1013:function(e,t,a){"use strict";var n=a(1),r=(a(12),a(0)),u=a.n(r),i=a(969),s=a(990),c=a(953),D=a(991),o=a(1006),l=(a(962),a(950)),m=a.n(l),h=a(988),p=a.n(h),d=a(972);var g=function({authorGithub:e,colorize:t,dateString:a,description:n,headingDepth:r,hideAuthor:i,hideTags:l,permalink:h,prNumbers:g,tags:f,title:E}){const b=new Date(Date.parse(a)),F=p()(b,"mmm dS, yyyy");let y=Object(d.a)(f,"highlights");y=y.concat(g.map(e=>({enriched:!0,label:u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e),permalink:"https://github.com/timberio/vector/pull/"+e,style:"secondary"})));const v=y.find(e=>"domain"==e.category),C=v?v.value:null,N=y.find(e=>"type"==e.category),w=N?N.value:null,k="h"+(r||3);let A=null;if(t)switch(w){case"breaking change":A="danger";break;case"enhancement":A="pink";break;case"new feature":A="primary";break;case"performance":A="warning"}const T=u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"time"},u.a.createElement("span",{className:"formatted-time"},F),u.a.createElement("span",{className:"separator"}," / "),u.a.createElement(o.a,{title:F,pubdate:"pubdate",datetime:b})),u.a.createElement("span",{className:"separator"}," / "),u.a.createElement("span",{className:"author-title"},"Vector core team"));return u.a.createElement(c.a,{to:h,className:m()("panel","panel--"+A,"domain-bg","domain-bg--hover","domain-bg--"+C)},u.a.createElement("article",null,u.a.createElement(k,null,E),u.a.createElement("div",{className:"subtitle"},n),!i&&e&&u.a.createElement(s.a,{github:e,size:"sm",subTitle:T,rel:"author"}),!l&&y.length>0&&u.a.createElement("div",null,u.a.createElement(D.a,{colorProfile:"blog",tags:y}))))},f=a(985),E=a.n(f),b=a(951),F=a.n(b),y=a(1010),v=a.n(y);Object(i.a)("h2");const C=Object(i.a)("h3");function N({groupBy:e,group:t}){const a=new E.a;switch(e){case"release":return u.a.createElement("li",{className:"header sticky"},u.a.createElement("h3",null,u.a.createElement(c.a,{to:`/releases/${t}/`},v()(t))));case"type":let n=null,r=F()(v()(t)),i=null;switch(t){case"breaking change":n="alert-triangle",i="danger";break;case"enhancement":n="arrow-up-circle",i="pink";break;case"new feature":n="gift",i="primary";break;case"performance":n="zap",r="Performance Improvements",i="warning"}return u.a.createElement("li",{className:"header sticky"},u.a.createElement(C,{id:a.slug(t+"-highlights"),className:"text--"+i},n&&u.a.createElement("i",{className:"feather icon-"+n})," ",r));default:throw Error("unknown group: "+e)}}t.a=function({author:e,clean:t,colorize:a,groupBy:r,items:i,tags:s,timeline:c}){let D=r||"release",o=function(e){return e.map(e=>{if(e.content){const{content:t}=e,{frontMatter:a,metadata:n}=t,{author_github:r,pr_numbers:u,release:i,title:s}=a,{date:c,description:D,permalink:o,tags:l}=n;let m={};return m.authorGithub=r,m.dateString=c,m.description=D,m.permalink=o,m.prNumbers=u,m.release=i,m.tags=l,m.title=s,m}return e})}(i),l=_.groupBy(o,D),h=!1!==c?Object.keys(l):Object.keys(l).sort();return u.a.createElement("ul",{className:m()("connected-list","connected-list--clean")},h.map((t,r)=>{let i=l[t];return u.a.createElement(u.a.Fragment,null,u.a.createElement(N,{groupBy:D,group:t}),u.a.createElement("ul",{className:m()("connected-list",{"connected-list--timeline":!1!==c})},i.map((t,r)=>u.a.createElement("li",{key:r},u.a.createElement(g,Object(n.a)({},t,{colorize:a,hideAuthor:0==e,hideTags:0==s}))))))}))}},913:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return D})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(6),u=(a(0),a(943)),i=a(992),s=a(1013),c={last_modified_on:"2020-04-17",title:"Vector v0.8.0 Release Notes",codename:"A Wholesome Platter Of Features",date:"2020-02-25",description:"Vector v0.8.0 - A Wholesome Platter Of Features - Release Notes",version:"0.8.0"},D={date:"2020-02-25T00:00:00.000Z",description:"Vector v0.8.0 - A Wholesome Platter Of Features - Release Notes",permalink:"/releases/0.8.0",source:"@site/releases/0.8.0.md",title:"Vector v0.8.0 Release Notes",truncated:!1,version:"0.8.0",prevItem:{title:"Vector v0.7.2 Release Notes",permalink:"/releases/0.7.2"},nextItem:{title:"Vector v0.8.1 Release Notes",permalink:"/releases/0.8.1"}},o=[{value:"Highlights",id:"highlights",children:[]},{value:"Changelog",id:"changelog",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],l={rightToc:o};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"The ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"/community/#team"}),"Vector team")," is pleased to release\n0.8.0. This is a ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/#spec-item-4"}),"initial dev"),"\nrelease. Checkout the ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"#highlights"}),"Highlights"),", ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"#changelog"}),"Changelog"),", and\n",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"#whats-next"}),"What's Next")," section for more detail."),Object(u.b)("h2",{id:"highlights"},"Highlights"),Object(u.b)("div",{className:"sub-title"},"Noteworthy changes in this release"),Object(u.b)(s.a,{author:!1,colorize:!0,groupBy:"type",headingDepth:3,items:[{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-05T00:00:00",description:"Docker splits long messages by default, and now Vector merges them back for you",permalink:"/highlights/2020-02-05-merge-partial-docker-events/",prNumbers:[1457],release:"0.8.0",tags:["type: enhancement","domain: sources","source: docker","platform: docker"],title:"Automatically merge partial Docker events",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-21T00:00:00",description:"Merge multiple lines together based on rules",permalink:"/highlights/2020-02-21-file-source-multiline-support/",prNumbers:[1852],release:"0.8.0",tags:["type: enhancement","domain: sources","source: file"],title:"Improved Multiline Support In The File Source",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-07T00:00:00",description:"A better way to manage complex Vector configurations",permalink:"/highlights/2020-02-07-multi-config-files/",prNumbers:[1725],release:"0.8.0",tags:["type: new feature","domain: config"],title:"Support For Multiple Config Files",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-14T00:00:00",description:"Set defaults for Vector's common log key names",permalink:"/highlights/2020-02-14-global-log-schema/",prNumbers:[1769,1795],release:"0.8.0",tags:["type: new feature","domain: config"],title:"Introducing Vector's Global Log Schema",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-20T00:00:00",description:"7 new sinks have been added to Vector",permalink:"/highlights/2020-02-20-new-sinks/",prNumbers:[1555,1562,1668,1716,1759,1783,1794],release:"0.8.0",tags:["type: new feature","domain: sinks"],title:"Lots of New Sinks!",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-24T00:00:00",description:"An easier way to rename fields",permalink:"/highlights/2020-02-24-rename-fields-transform/",prNumbers:[1800],release:"0.8.0",tags:["type: new feature","domain: transforms","transform: rename_fields"],title:"New Rename Fields Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-24T00:00:00",description:"Split log streams with ease",permalink:"/highlights/2020-02-24-swimlanes-transform/",prNumbers:[1785],release:"0.8.0",tags:["type: new feature","domain: transforms","transform: swimlanes"],title:"New Swimlanes Transform",type:"new feature"}],size:null,tags:!1,timeline:!1,mdxType:"HighlightItems"}),Object(u.b)("h2",{id:"changelog"},"Changelog"),Object(u.b)("div",{className:"sub-title"},"A complete list of changes"),Object(u.b)(i.a,{version:"0.8.0",mdxType:"Changelog"}),Object(u.b)("h2",{id:"whats-next"},"What's Next"),Object(u.b)("p",null,"The ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/milestones?direction=asc&sort=due_date&state=open"}),"Vector roadmap")," is publicly available and represents\nforward looking progress. Vector is ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," and\n",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"/community/"}),"community driven"),". Your feedback is welcome!"))}m.isMDXComponent=!0},954:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(953),i=a(950),s=a.n(i);a(93);t.a=function({className:e,size:t,style:a,text:n}){return r.a.createElement(u.a,{to:"/vic/",className:s()("vic","vic--"+t,e)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:`/img/vicmojis/vic${a}.svg`,alt:"Vic - The Vector Mascot"})),n&&r.a.createElement("div",{className:"text"},n))}},955:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=(a(953),a(954));t.a=function({text:e}){return r.a.createElement("section",{className:"empty"},r.a.createElement(u.a,{style:"no",text:e}))}},956:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),u=a(959),i=a.n(u);t.a=function({currentState:e,humanize:t,icon:a,name:n,setState:u,values:s}){if(0==s.size)return null;let c=Array.from(s);return r.a.createElement(r.a.Fragment,null,c.map((s,c)=>{let D="string"==typeof s&&t?i()(s):s;return r.a.createElement("label",{key:c},r.a.createElement("input",{checked:e.has(s),name:n,onChange:t=>{let a=new Set(e);t.currentTarget.checked?a.add(s):a.delete(s),u(a)},type:"checkbox"}),D&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",D))}))}},969:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(950),i=a.n(u),s=a(945),c=(a(94),a(95)),D=a.n(c);t.a=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(s.a)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:i()("anchor",{[D.a.enhancedAnchor]:!n}),id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a)}},972:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(985),r=a.n(n);function u(e,t){const a=new r.a;return e.map(e=>{let n=e;return"string"==typeof e&&(n={label:e,permalink:`/${t}/tags/${a.slug(e)}`}),function(e,t){if(e.enriched)return e;const a=e.label.split(": ",2),n=a[0],r=a[1];let u="primary";switch(n){case"domain":u="blue";break;case"type":u="pink";break;default:u="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:u,value:r}}(n)})}},985:function(e,t,a){var n=a(987);e.exports=s;var r=Object.hasOwnProperty,u=/\s/g,i=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function s(){if(!(this instanceof s))return new s;this.reset()}function c(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(i,"").replace(n(),"").replace(u,"-"))}s.prototype.slug=function(e,t){for(var a=c(e,!0===t),n=a;r.call(this.occurrences,a);)this.occurrences[n]++,a=n+"-"+this.occurrences[n];return this.occurrences[a]=0,a},s.prototype.reset=function(){this.occurrences=Object.create(null)},s.slug=c},986:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(953),i=a(950),s=a.n(i);t.a=function({count:e,label:t,permalink:a,style:n,value:i,valueOnly:c}){return r.a.createElement(u.a,{to:a+"/",className:s()("badge","badge--rounded","badge--"+n)},c?i:t,e&&r.a.createElement(r.a.Fragment,null," (",e,")"))}},987:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},988:function(e,t,a){var n;!function(r){"use strict";var u,i,s,c=(u=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(c.masks[t]||t||c.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var h=a?"getUTC":"get",p=e[h+"Date"](),d=e[h+"Day"](),g=e[h+"Month"](),f=e[h+"FullYear"](),E=e[h+"Hours"](),b=e[h+"Minutes"](),F=e[h+"Seconds"](),y=e[h+"Milliseconds"](),v=a?0:e.getTimezoneOffset(),C=o(e),N=l(e),w={d:p,dd:D(p),ddd:c.i18n.dayNames[d],dddd:c.i18n.dayNames[d+7],m:g+1,mm:D(g+1),mmm:c.i18n.monthNames[g],mmmm:c.i18n.monthNames[g+12],yy:String(f).slice(2),yyyy:f,h:E%12||12,hh:D(E%12||12),H:E,HH:D(E),M:b,MM:D(b),s:F,ss:D(F),l:D(y,3),L:D(Math.round(y/10)),t:E<12?c.i18n.timeNames[0]:c.i18n.timeNames[1],tt:E<12?c.i18n.timeNames[2]:c.i18n.timeNames[3],T:E<12?c.i18n.timeNames[4]:c.i18n.timeNames[5],TT:E<12?c.i18n.timeNames[6]:c.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(s,""),o:(v>0?"-":"+")+D(100*Math.floor(Math.abs(v)/60)+Math.abs(v)%60,4),S:["th","st","nd","rd"][p%10>3?0:(p%100-p%10!=10)*p%10],W:C,N:N};return t.replace(u,(function(e){return e in w?w[e]:e.slice(1,e.length-1)}))});function D(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function o(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function l(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return c}.call(t,a,t,e))||(e.exports=n)}()},990:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(950),i=a.n(u),s=a(945);a(103);t.a=function({bio:e,className:t,github:a,nameSuffix:n,rel:u,size:c,subTitle:D,vertical:o}){const l=Object(s.a)(),{siteConfig:m={}}=l,{metadata:{team:h}}=m.customFields,p=h.find(e=>e.github==a)||h.find(e=>"ben"==e.id);return r.a.createElement("div",{className:i()("avatar",t,{["avatar--"+c]:c,"avatar--vertical":o})},r.a.createElement("img",{className:i()("avatar__photo","avatar__photo--"+c),src:p.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:p.github,target:"_blank",rel:u},p.name),n),D&&r.a.createElement("small",{className:"avatar__subtitle"},D),!D&&e&&r.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:p.bio}})))}},991:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),i=(a(953),a(986)),s=a(950),c=a.n(s),D=a(972),o=a(104),l=a.n(o);t.a=function({block:e,colorProfile:t,tags:a,valuesOnly:r}){const s=Object(D.a)(a,t);return u.a.createElement("span",{className:c()(l.a.tags,{[l.a.tagsBlock]:e})},s.map((e,t)=>u.a.createElement(i.a,Object(n.a)({key:t,valueOnly:r},e))))}},992:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),u=a(956),i=a(955),s=a(969),c=a(953),D=a(959),o=a.n(D);var l=a(962),m=a.n(l);a(950);function h(e){switch(e){case"breaking change":return"a";case"feat":return"b";case"enhancement":return"c";case"fix":return"d";default:return"e"}}function p(e){switch(e){case"chore":return"Chore";case"docs":return"Doc Update";case"feat":return"New Feature";case"fix":return"Bug Fix";case"perf":return"Perf Improvement";default:return o()(e)}}function d(e){return e.sort((e,t)=>h(e)>h(t))}var g=a(951),f=a.n(g),E=(a(105),a(945));const b=Object(s.a)("h3"),F=Object(s.a)("h4"),y=["enhancement","feat","fix","perf"];function v({scopes:e}){return e.map((e,t)=>r.a.createElement("span",{key:t,className:"badge badge--primary badge--small link",onClick:()=>setSearchTerm(e.name),style:{marginRight:"4px"},title:`Filter to '${e.name}' changes only`},e.name))}function C({commit:e,setSearchTerm:t}){return r.a.createElement("li",null,r.a.createElement("div",{className:"badges"},e.breaking_change&&r.a.createElement(c.a,{to:e.highlight_permalink,className:"badge badge--danger",title:"View upgrade guide..."},r.a.createElement("i",{className:"feather icon-alert-triangle"})," breaking"),!e.breaking_change&&e.highlight_permalink&&r.a.createElement(c.a,{to:e.highlight_permalink,className:"badge badge--warning",title:"View highlight announcement..."},r.a.createElement("i",{className:"feather icon-gift"})," highlight"),e.pr_number&&r.a.createElement("a",{href:"https://github.com/timberio/vector/pull/"+e.pr_number,target:"_blank",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View pull request..."},r.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e.pr_number),!e.pr_number&&r.a.createElement("a",{href:"https://github.com/timberio/vector/commit/"+e.sha,target:"_blank",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View commit..."},r.a.createElement("i",{className:"feather icon-git-commit"})," ",e.sha.slice(0,5))),r.a.createElement(F,{id:e.sha},r.a.createElement(v,{scopes:e.scopes}),e.description))}function N({commits:e,groupBy:t,setSearchTerm:a}){if(t){const n=m()(e).sortBy(e=>e.type).groupBy(t).value(),u=d(Object.keys(n));return r.a.createElement("ul",{className:"connected-list connected-list--clean"},u.map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement(b,{id:e},f()(p(e),n[e].length,!0)),r.a.createElement("ul",{className:"connected-list connected-list--compact connected-list--blend connected-list--hover"},n[e].map((e,t)=>r.a.createElement(C,{key:t,commit:e,setSearchTerm:a}))))))}return r.a.createElement("div",null,e.length)}t.a=function({version:e}){const t=Object(E.a)(),{siteConfig:a={}}=t,{metadata:{releases:s}}=a.customFields,c=m.a.flatMap(s,e=>e.commits.map(t=>(t.version=e.version,t))),[D,o]=Object(n.useState)("type"),[l,h]=Object(n.useState)(new Set(y)),[p,d]=Object(n.useState)(null),[g,f]=Object(n.useState)(e);let b=c.slice(0);g&&(b=b.filter(e=>e.version==g));let F=b;l.size>0&&(F=F.filter(e=>l.has(e.type))),p&&(F=F.filter(e=>e.message.toLowerCase().includes(p.toLowerCase()))),g&&(F=F.filter(e=>e.version==g));const v=new Set(m()(c).map(e=>e.type).uniq().compact().sort().value());return r.a.createElement("div",null,b.length>5?r.a.createElement("div",{className:"filters filters--narrow"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},F.length," items"),r.a.createElement("input",{type:"text",onChange:e=>d(e.currentTarget.value),placeholder:"\ud83d\udd0d Search by type, component name, or title...",className:"input--text input--lg",value:p||""})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(u.a,{name:"type",values:v,currentState:l,setState:h})))):null,F.length>0?r.a.createElement(N,{commits:F,groupBy:D,setSearchTerm:d,types:v}):r.a.createElement(i.a,{text:"no commits found"}))}}}]);