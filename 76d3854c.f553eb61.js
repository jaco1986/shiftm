(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1006:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=["second","minute","hour","day","week","month","year"],u=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"],s={},c=function(e,t){s[e]=t},o=function(e){return s[e]||s.en_US},l=[60,60,24,7,365/7/12,12];function D(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function m(e,t){for(var a=e<0?1:0,n=e=Math.abs(e),r=0;e>=l[r]&&r<l.length;r++)e/=l[r];return(e=Math.floor(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,n)[a].replace("%s",e.toString())}function h(e,t){return(+(t?D(t):new Date)-+D(e))/1e3}function p(e){return parseInt(e.getAttribute("timeago-id"))}var d={},g=function(e){clearTimeout(e),delete d[e]};function b(e,t,a,n){g(p(e));var r=n.relativeDate,i=n.minInterval,u=h(t,r);e.innerText=m(u,a);var s=setTimeout((function(){b(e,t,a,n)}),Math.min(1e3*Math.max(function(e){for(var t=1,a=0,n=Math.abs(e);e>=l[a]&&a<l.length;a++)e/=l[a],t*=l[a];return n=(n%=t)?t-n:t,Math.ceil(n)}(u),i||1),2147483647));d[s]=0,function(e,t){e.setAttribute("timeago-id",t)}(e,s)}function f(e){e?g(p(e)):Object.keys(d).forEach(g)}c("en_US",(function(e,t){if(0===t)return["just now","right now"];var a=i[Math.floor(t/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),c("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var a=u[~~(t/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}));var y,E=(y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),F=function(){return(F=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dom=null,t}return E(t,e),t.prototype.componentDidMount=function(){this.renderTimeAgo()},t.prototype.componentDidUpdate=function(){this.renderTimeAgo()},t.prototype.renderTimeAgo=function(){var e,t=this.props,a=t.live,n=t.datetime,r=t.locale,i=t.opts;f(this.dom),!1!==a&&(this.dom.setAttribute("datetime",""+((e=n)instanceof Date?e.getTime():e)),function(e,t,a){var n=e.length?e:[e];n.forEach((function(e){b(e,function(e){return e.getAttribute("datetime")}(e),o(t),a||{})}))}(this.dom,r,i))},t.prototype.componentWillUnmount=function(){f(this.dom)},t.prototype.render=function(){var e=this,t=this.props,a=t.datetime,n=(t.live,t.locale),i=t.opts,u=v(t,["datetime","live","locale","opts"]);return r.a.createElement("time",F({ref:function(t){e.dom=t}},u),function(e,t,a){return m(h(e,a&&a.relativeDate),o(t))}(a,n,i))},t.defaultProps={live:!0,className:""},t}(r.a.Component);t.a=C},1010:function(e,t,a){"use strict";const n=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,e=>e.toUpperCase())};e.exports=n,e.exports.default=n},1013:function(e,t,a){"use strict";var n=a(1),r=(a(12),a(0)),i=a.n(r),u=a(969),s=a(990),c=a(953),o=a(991),l=a(1006),D=(a(962),a(950)),m=a.n(D),h=a(988),p=a.n(h),d=a(972);var g=function({authorGithub:e,colorize:t,dateString:a,description:n,headingDepth:r,hideAuthor:u,hideTags:D,permalink:h,prNumbers:g,tags:b,title:f}){const y=new Date(Date.parse(a)),E=p()(y,"mmm dS, yyyy");let F=Object(d.a)(b,"highlights");F=F.concat(g.map(e=>({enriched:!0,label:i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e),permalink:"https://github.com/timberio/vector/pull/"+e,style:"secondary"})));const v=F.find(e=>"domain"==e.category),C=v?v.value:null,w=F.find(e=>"type"==e.category),N=w?w.value:null,k="h"+(r||3);let O=null;if(t)switch(N){case"breaking change":O="danger";break;case"enhancement":O="pink";break;case"new feature":O="primary";break;case"performance":O="warning"}const T=i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"time"},i.a.createElement("span",{className:"formatted-time"},E),i.a.createElement("span",{className:"separator"}," / "),i.a.createElement(l.a,{title:E,pubdate:"pubdate",datetime:y})),i.a.createElement("span",{className:"separator"}," / "),i.a.createElement("span",{className:"author-title"},"Vector core team"));return i.a.createElement(c.a,{to:h,className:m()("panel","panel--"+O,"domain-bg","domain-bg--hover","domain-bg--"+C)},i.a.createElement("article",null,i.a.createElement(k,null,f),i.a.createElement("div",{className:"subtitle"},n),!u&&e&&i.a.createElement(s.a,{github:e,size:"sm",subTitle:T,rel:"author"}),!D&&F.length>0&&i.a.createElement("div",null,i.a.createElement(o.a,{colorProfile:"blog",tags:F}))))},b=a(985),f=a.n(b),y=a(951),E=a.n(y),F=a(1010),v=a.n(F);Object(u.a)("h2");const C=Object(u.a)("h3");function w({groupBy:e,group:t}){const a=new f.a;switch(e){case"release":return i.a.createElement("li",{className:"header sticky"},i.a.createElement("h3",null,i.a.createElement(c.a,{to:`/releases/${t}/`},v()(t))));case"type":let n=null,r=E()(v()(t)),u=null;switch(t){case"breaking change":n="alert-triangle",u="danger";break;case"enhancement":n="arrow-up-circle",u="pink";break;case"new feature":n="gift",u="primary";break;case"performance":n="zap",r="Performance Improvements",u="warning"}return i.a.createElement("li",{className:"header sticky"},i.a.createElement(C,{id:a.slug(t+"-highlights"),className:"text--"+u},n&&i.a.createElement("i",{className:"feather icon-"+n})," ",r));default:throw Error("unknown group: "+e)}}t.a=function({author:e,clean:t,colorize:a,groupBy:r,items:u,tags:s,timeline:c}){let o=r||"release",l=function(e){return e.map(e=>{if(e.content){const{content:t}=e,{frontMatter:a,metadata:n}=t,{author_github:r,pr_numbers:i,release:u,title:s}=a,{date:c,description:o,permalink:l,tags:D}=n;let m={};return m.authorGithub=r,m.dateString=c,m.description=o,m.permalink=l,m.prNumbers=i,m.release=u,m.tags=D,m.title=s,m}return e})}(u),D=_.groupBy(l,o),h=!1!==c?Object.keys(D):Object.keys(D).sort();return i.a.createElement("ul",{className:m()("connected-list","connected-list--clean")},h.map((t,r)=>{let u=D[t];return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{groupBy:o,group:t}),i.a.createElement("ul",{className:m()("connected-list",{"connected-list--timeline":!1!==c})},u.map((t,r)=>i.a.createElement("li",{key:r},i.a.createElement(g,Object(n.a)({},t,{colorize:a,hideAuthor:0==e,hideTags:0==s}))))))}))}},519:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(6),i=(a(0),a(943)),u=a(992),s=a(1013),c={last_modified_on:"2020-04-29",title:"Vector v0.9.0 Release Notes",codename:"The Homestretch",date:"2020-04-17",description:"Vector v0.9.0 - The Homestretch - Release Notes",version:"0.9.0"},o={date:"2020-04-17T00:00:00.000Z",description:"Vector v0.9.0 - The Homestretch - Release Notes",permalink:"/releases/0.9.0",source:"@site/releases/0.9.0.md",title:"Vector v0.9.0 Release Notes",truncated:!1,version:"0.9.0",prevItem:{title:"Vector v0.8.2 Release Notes",permalink:"/releases/0.8.2"},nextItem:{title:"Vector v0.9.1 Release Notes",permalink:"/releases/0.9.1"}},l=[{value:"Highlights",id:"highlights",children:[]},{value:"Changelog",id:"changelog",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[{value:"Kubernetes!",id:"kubernetes",children:[]},{value:"WASM Driven Plugin Architecture",id:"wasm-driven-plugin-architecture",children:[]},{value:"Dynamic HTTP Rate-Limiting (AIMD)",id:"dynamic-http-rate-limiting-aimd",children:[]},{value:"Vector Observability",id:"vector-observability",children:[]}]}],D={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},D,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/community/#team"}),"Vector team")," is pleased to release\n0.9.0. This is a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/#spec-item-4"}),"initial dev"),"\nrelease. Checkout the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#highlights"}),"Highlights"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#changelog"}),"Changelog"),", and\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#whats-next"}),"What's Next")," section for more detail."),Object(i.b)("h2",{id:"highlights"},"Highlights"),Object(i.b)("div",{className:"sub-title"},"Noteworthy changes in this release"),Object(i.b)(s.a,{author:!1,colorize:!0,groupBy:"type",headingDepth:3,items:[{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-23T00:00:00",description:"This brings the sink naming inline with consistent naming pattern",permalink:"/highlights/2020-03-23-rename-gcp_stackdriver_logging-sink-to-gcp_stackdriver_logs/",prNumbers:[2121],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: splunk_hec"],title:"The `gcp_stackdriver_logging` sink has been renamed to `gcp_stackdriver_logs`",type:"breaking change"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-05T00:00:00",description:"Compression is not supported by all Elasticsearch service providers",permalink:"/highlights/2020-04-05-default-compression-to-none/",prNumbers:[2219],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: elasticsearch"],title:"The `elasticsearch` sink `compression` option now defaults to `none`",type:"breaking change"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-09T00:00:00",description:"ACL is not always required when creating objects in GCP Cloud Storage",permalink:"/highlights/2020-04-09-make-acl-optional/",prNumbers:[2283],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: gcp_cloud_storage"],title:"ACL is now optional for the Google Cloud Storage sink",type:"breaking change"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-04T00:00:00",description:"Vector now lets you whitelist, blacklist, and format fields when events are encoded",permalink:"/highlights/2020-03-04-encoding-only-fields-except-fields/",prNumbers:[1915],release:"0.9.0",tags:["type: enhancement","domain: sinks"],title:"New Encoding Options",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-07T00:00:00",description:"The next iteration of our Lua transform.",permalink:"/highlights/2020-04-07-lua-transform-version-2/",prNumbers:[2126],release:"0.9.0",tags:["type: enhancement","domain: sources","source: vector"],title:"Lua Transform v2",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-20T00:00:00",description:"A faster and more reliable shutdown process",permalink:"/highlights/2020-04-20-improved-shutdown/",prNumbers:[1994],release:"0.9.0",tags:["type: enhancement","domain: topology"],title:"Improved Shutdown",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-28T00:00:00",description:"Build Vector with select components",permalink:"/highlights/2020-02-28-custom-vector-builds/",prNumbers:[1924],release:"0.9.0",tags:["type: new feature","domain: sources","source: vector"],title:"\xc0 La Carte Custom Vector Builds",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-10T00:00:00",description:"Shed duplicate logs",permalink:"/highlights/2020-03-10-dedupe-transform/",prNumbers:[1848],release:"0.9.0",tags:["type: new feature","domain: sources","source: vector"],title:"New Dedupe Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-11T00:00:00",description:"Protect downstream metrics storages from runaway metrics tags",permalink:"/highlights/2020-03-11-tag-cardinality-limit-transform/",prNumbers:[1959],release:"0.9.0",tags:["type: new feature","domain: transforms","transform: tag_cardinality_limit"],title:"New Tag Cardinality Limit Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-31T00:00:00",description:"Filter and route your logs based on defined conditions",permalink:"/highlights/2020-03-31-filter-transform/",prNumbers:[2088],release:"0.9.0",tags:["type: new feature","domain: transforms","transform: filter"],title:"New Filter Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-17T00:00:00",description:"Papertrail, Honeycomb, Pulsar, and DataDog Logs",permalink:"/highlights/2020-04-17-new-sinks/",prNumbers:[1835,1847,1665,1832],release:"0.9.0",tags:["type: new feature","domain: sinks"],title:"4 New Sinks!",type:"new feature"}],size:null,tags:!1,timeline:!1,mdxType:"HighlightItems"}),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("div",{className:"sub-title"},"A complete list of changes"),Object(i.b)(u.a,{version:"0.9.0",mdxType:"Changelog"}),Object(i.b)("h2",{id:"whats-next"},"What's Next"),Object(i.b)("ul",{className:"connected-list"},Object(i.b)("li",null,Object(i.b)("h3",{id:"kubernetes"},"Kubernetes!"),Object(i.b)("p",null,"We're doing this integration right. We've been alpha testing with a number of large clusters and we've honed in on a very high-quality approach that reflects the UX Vector is going after. You can learn more in our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2222"}),"Kubernetes Integration RFC"),". Feedback is welcome!")),Object(i.b)("li",null,Object(i.b)("h3",{id:"wasm-driven-plugin-architecture"},"WASM Driven Plugin Architecture"),Object(i.b)("p",null,"This release included an overhaul of our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/"}),Object(i.b)("inlineCode",{parentName:"a"},"lua")," transform"),", which represents a big step towards making Vector more flexible. Lua is an excellent language when you need some quick scripting capabilities. But what if you need something more powerful? Like writing your own custom source, transform, or sink? Vector plans to solve this with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://webassembly.org/"}),"WASM")," foreign module support, enabling you to extend Vector in the language of your choice with little performance penalty. \u2764\ufe0f WASM. Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2341"}),"WASM Foreign Module Support RFC")," for more info.")),Object(i.b)("li",null,Object(i.b)("h3",{id:"dynamic-http-rate-limiting-aimd"},"Dynamic HTTP Rate-Limiting (AIMD)"),Object(i.b)("p",null,"Fiddling with rate-limits is a frustratin endaevor. If you set them too high you risk overwhelming the service; too low and you're unecessarily limiting throughput. And what happens if you deploy a few more Vector instances? Vector is planning to solve this by automatically detecting the optimal rate limits, taking inspiration from TCP congestional control algorithms. Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2329"}),"Dynamic HTTP Rate Limiting RFC"),".")),Object(i.b)("li",null,Object(i.b)("h3",{id:"vector-observability"},"Vector Observability"),Object(i.b)("p",null,"Did you know this release includes a new hidden ",Object(i.b)("inlineCode",{parentName:"p"},"internal")," source that emits metrics reflecting Vector's own internal state? \ud83d\udc40 We didn't highlight this source because we have not finished instrumenting Vector and we'll be changing the internal schema used."),Object(i.b)("p",null,"Fun fact, we took an event-driven approach to Vector's internal observability, which we strongly beleive in. We want Vector to be a good example of our own advice. Checkout the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2093"}),"Event-Driven Observability RFC"),"."))),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/milestones?direction=asc&sort=due_date&state=open"}),"Vector roadmap")," is publicly available and represents\nforward looking progress. Vector is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," and\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/community/"}),"community driven"),". Your feedback is welcome!"))}m.isMDXComponent=!0},954:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(953),u=a(950),s=a.n(u);a(93);t.a=function({className:e,size:t,style:a,text:n}){return r.a.createElement(i.a,{to:"/vic/",className:s()("vic","vic--"+t,e)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:`/img/vicmojis/vic${a}.svg`,alt:"Vic - The Vector Mascot"})),n&&r.a.createElement("div",{className:"text"},n))}},955:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(953),a(954));t.a=function({text:e}){return r.a.createElement("section",{className:"empty"},r.a.createElement(i.a,{style:"no",text:e}))}},956:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),i=a(959),u=a.n(i);t.a=function({currentState:e,humanize:t,icon:a,name:n,setState:i,values:s}){if(0==s.size)return null;let c=Array.from(s);return r.a.createElement(r.a.Fragment,null,c.map((s,c)=>{let o="string"==typeof s&&t?u()(s):s;return r.a.createElement("label",{key:c},r.a.createElement("input",{checked:e.has(s),name:n,onChange:t=>{let a=new Set(e);t.currentTarget.checked?a.add(s):a.delete(s),i(a)},type:"checkbox"}),o&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",o))}))}},969:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(950),u=a.n(i),s=a(945),c=(a(94),a(95)),o=a.n(c);t.a=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(s.a)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:u()("anchor",{[o.a.enhancedAnchor]:!n}),id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a)}},972:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(985),r=a.n(n);function i(e,t){const a=new r.a;return e.map(e=>{let n=e;return"string"==typeof e&&(n={label:e,permalink:`/${t}/tags/${a.slug(e)}`}),function(e,t){if(e.enriched)return e;const a=e.label.split(": ",2),n=a[0],r=a[1];let i="primary";switch(n){case"domain":i="blue";break;case"type":i="pink";break;default:i="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:i,value:r}}(n)})}},985:function(e,t,a){var n=a(987);e.exports=s;var r=Object.hasOwnProperty,i=/\s/g,u=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function s(){if(!(this instanceof s))return new s;this.reset()}function c(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(u,"").replace(n(),"").replace(i,"-"))}s.prototype.slug=function(e,t){for(var a=c(e,!0===t),n=a;r.call(this.occurrences,a);)this.occurrences[n]++,a=n+"-"+this.occurrences[n];return this.occurrences[a]=0,a},s.prototype.reset=function(){this.occurrences=Object.create(null)},s.slug=c},986:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(953),u=a(950),s=a.n(u);t.a=function({count:e,label:t,permalink:a,style:n,value:u,valueOnly:c}){return r.a.createElement(i.a,{to:a+"/",className:s()("badge","badge--rounded","badge--"+n)},c?u:t,e&&r.a.createElement(r.a.Fragment,null," (",e,")"))}},987:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},988:function(e,t,a){var n;!function(r){"use strict";var i,u,s,c=(i=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,u=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(c.masks[t]||t||c.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var h=a?"getUTC":"get",p=e[h+"Date"](),d=e[h+"Day"](),g=e[h+"Month"](),b=e[h+"FullYear"](),f=e[h+"Hours"](),y=e[h+"Minutes"](),E=e[h+"Seconds"](),F=e[h+"Milliseconds"](),v=a?0:e.getTimezoneOffset(),C=l(e),w=D(e),N={d:p,dd:o(p),ddd:c.i18n.dayNames[d],dddd:c.i18n.dayNames[d+7],m:g+1,mm:o(g+1),mmm:c.i18n.monthNames[g],mmmm:c.i18n.monthNames[g+12],yy:String(b).slice(2),yyyy:b,h:f%12||12,hh:o(f%12||12),H:f,HH:o(f),M:y,MM:o(y),s:E,ss:o(E),l:o(F,3),L:o(Math.round(F/10)),t:f<12?c.i18n.timeNames[0]:c.i18n.timeNames[1],tt:f<12?c.i18n.timeNames[2]:c.i18n.timeNames[3],T:f<12?c.i18n.timeNames[4]:c.i18n.timeNames[5],TT:f<12?c.i18n.timeNames[6]:c.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(u)||[""]).pop().replace(s,""),o:(v>0?"-":"+")+o(100*Math.floor(Math.abs(v)/60)+Math.abs(v)%60,4),S:["th","st","nd","rd"][p%10>3?0:(p%100-p%10!=10)*p%10],W:C,N:w};return t.replace(i,(function(e){return e in N?N[e]:e.slice(1,e.length-1)}))});function o(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function l(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function D(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return c}.call(t,a,t,e))||(e.exports=n)}()},990:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(950),u=a.n(i),s=a(945);a(103);t.a=function({bio:e,className:t,github:a,nameSuffix:n,rel:i,size:c,subTitle:o,vertical:l}){const D=Object(s.a)(),{siteConfig:m={}}=D,{metadata:{team:h}}=m.customFields,p=h.find(e=>e.github==a)||h.find(e=>"ben"==e.id);return r.a.createElement("div",{className:u()("avatar",t,{["avatar--"+c]:c,"avatar--vertical":l})},r.a.createElement("img",{className:u()("avatar__photo","avatar__photo--"+c),src:p.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:p.github,target:"_blank",rel:i},p.name),n),o&&r.a.createElement("small",{className:"avatar__subtitle"},o),!o&&e&&r.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:p.bio}})))}},991:function(e,t,a){"use strict";var n=a(1),r=a(0),i=a.n(r),u=(a(953),a(986)),s=a(950),c=a.n(s),o=a(972),l=a(104),D=a.n(l);t.a=function({block:e,colorProfile:t,tags:a,valuesOnly:r}){const s=Object(o.a)(a,t);return i.a.createElement("span",{className:c()(D.a.tags,{[D.a.tagsBlock]:e})},s.map((e,t)=>i.a.createElement(u.a,Object(n.a)({key:t,valueOnly:r},e))))}},992:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),i=a(956),u=a(955),s=a(969),c=a(953),o=a(959),l=a.n(o);var D=a(962),m=a.n(D);a(950);function h(e){switch(e){case"breaking change":return"a";case"feat":return"b";case"enhancement":return"c";case"fix":return"d";default:return"e"}}function p(e){switch(e){case"chore":return"Chore";case"docs":return"Doc Update";case"feat":return"New Feature";case"fix":return"Bug Fix";case"perf":return"Perf Improvement";default:return l()(e)}}function d(e){return e.sort((e,t)=>h(e)>h(t))}var g=a(951),b=a.n(g),f=(a(105),a(945));const y=Object(s.a)("h3"),E=Object(s.a)("h4"),F=["enhancement","feat","fix","perf"];function v({scopes:e}){return e.map((e,t)=>r.a.createElement("span",{key:t,className:"badge badge--primary badge--small link",onClick:()=>setSearchTerm(e.name),style:{marginRight:"4px"},title:`Filter to '${e.name}' changes only`},e.name))}function C({commit:e,setSearchTerm:t}){return r.a.createElement("li",null,r.a.createElement("div",{className:"badges"},e.breaking_change&&r.a.createElement(c.a,{to:e.highlight_permalink,className:"badge badge--danger",title:"View upgrade guide..."},r.a.createElement("i",{className:"feather icon-alert-triangle"})," breaking"),!e.breaking_change&&e.highlight_permalink&&r.a.createElement(c.a,{to:e.highlight_permalink,className:"badge badge--warning",title:"View highlight announcement..."},r.a.createElement("i",{className:"feather icon-gift"})," highlight"),e.pr_number&&r.a.createElement("a",{href:"https://github.com/timberio/vector/pull/"+e.pr_number,target:"_blank",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View pull request..."},r.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e.pr_number),!e.pr_number&&r.a.createElement("a",{href:"https://github.com/timberio/vector/commit/"+e.sha,target:"_blank",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View commit..."},r.a.createElement("i",{className:"feather icon-git-commit"})," ",e.sha.slice(0,5))),r.a.createElement(E,{id:e.sha},r.a.createElement(v,{scopes:e.scopes}),e.description))}function w({commits:e,groupBy:t,setSearchTerm:a}){if(t){const n=m()(e).sortBy(e=>e.type).groupBy(t).value(),i=d(Object.keys(n));return r.a.createElement("ul",{className:"connected-list connected-list--clean"},i.map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement(y,{id:e},b()(p(e),n[e].length,!0)),r.a.createElement("ul",{className:"connected-list connected-list--compact connected-list--blend connected-list--hover"},n[e].map((e,t)=>r.a.createElement(C,{key:t,commit:e,setSearchTerm:a}))))))}return r.a.createElement("div",null,e.length)}t.a=function({version:e}){const t=Object(f.a)(),{siteConfig:a={}}=t,{metadata:{releases:s}}=a.customFields,c=m.a.flatMap(s,e=>e.commits.map(t=>(t.version=e.version,t))),[o,l]=Object(n.useState)("type"),[D,h]=Object(n.useState)(new Set(F)),[p,d]=Object(n.useState)(null),[g,b]=Object(n.useState)(e);let y=c.slice(0);g&&(y=y.filter(e=>e.version==g));let E=y;D.size>0&&(E=E.filter(e=>D.has(e.type))),p&&(E=E.filter(e=>e.message.toLowerCase().includes(p.toLowerCase()))),g&&(E=E.filter(e=>e.version==g));const v=new Set(m()(c).map(e=>e.type).uniq().compact().sort().value());return r.a.createElement("div",null,y.length>5?r.a.createElement("div",{className:"filters filters--narrow"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},E.length," items"),r.a.createElement("input",{type:"text",onChange:e=>d(e.currentTarget.value),placeholder:"\ud83d\udd0d Search by type, component name, or title...",className:"input--text input--lg",value:p||""})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(i.a,{name:"type",values:v,currentState:D,setState:h})))):null,E.length>0?r.a.createElement(w,{commits:E,groupBy:o,setSearchTerm:d,types:v}):r.a.createElement(u.a,{text:"no commits found"}))}}}]);