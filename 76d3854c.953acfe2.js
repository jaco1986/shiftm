(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1137),c=a(1136),s=a.n(c);a(131);t.a=function(e){var t=e.className,a=e.size,n=e.style,c=e.text;return r.a.createElement(i.a,{to:"/vic/",className:s()("vic","vic--"+a,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+n+".svg",alt:"Vic - The Vector Mascot"})),c&&r.a.createElement("div",{className:"text"},c))}},1144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(1137),a(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(i.a,{style:"no",text:t}))}},1150:function(e,t,a){"use strict";a(1140),a(77),a(1139),a(25),a(20),a(19),a(1138);var n=a(0),r=a.n(n),i=a(1157),c=a.n(i);t.a=function(e){var t=e.currentState,a=e.humanize,n=e.icon,i=e.name,s=e.setState,l=e.values;if(0==l.size)return null;var o=Array.from(l);return r.a.createElement(r.a.Fragment,null,o.map((function(e,l){var o="string"==typeof e&&a?c()(e):e;return r.a.createElement("label",{key:l},r.a.createElement("input",{checked:t.has(e),name:i,onChange:function(a){var n=new Set(t);a.currentTarget.checked?n.add(e):n.delete(e),s(n)},type:"checkbox"}),o&&r.a.createElement(r.a.Fragment,null,n?r.a.createElement("i",{className:"feather icon-"+n}):""," ",o))})))}},1175:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(90),a(1176),a(1173),a(91);var n=a(1191),r=a.n(n);function i(e,t){var a=new r.a;return e.map((function(e){var n=e;return"string"==typeof e&&(n={label:e,permalink:"/"+t+"/tags/"+a.slug(e)}),function(e,t){if(e.enriched)return e;var a=e.label.split(": ",2),n=a[0],r=a[1],i="primary";switch(n){case"domain":i="blue";break;case"type":i="pink";break;default:i="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:i,value:r}}(n)}))}},1192:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1137),c=a(1136),s=a.n(c);t.a=function(e){var t=e.count,a=e.label,n=e.permalink,c=e.style,l=e.value,o=e.valueOnly;return r.a.createElement(i.a,{to:n+"/",className:s()("badge","badge--rounded","badge--"+c)},o?l:a,t&&r.a.createElement(r.a.Fragment,null," (",t,")"))}},1195:function(e,t,a){"use strict";a(1138),a(1173);var n=a(0),r=a.n(n),i=a(1136),c=a.n(i),s=a(1127);a(141);t.a=function(e){var t,a=e.bio,n=e.className,i=e.github,l=e.nameSuffix,o=e.rel,u=e.size,m=e.subTitle,h=e.vertical,g=Object(s.a)().siteConfig,p=(void 0===g?{}:g).customFields.metadata.team,b=p.find((function(e){return e.github==i}))||p.find((function(e){return"ben"==e.id}));return r.a.createElement("div",{className:c()("avatar",n,(t={},t["avatar--"+u]=u,t["avatar--vertical"]=h,t))},r.a.createElement("img",{className:c()("avatar__photo","avatar__photo--"+u),src:b.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:b.github,target:"_blank",rel:o},b.name),l),m&&r.a.createElement("small",{className:"avatar__subtitle"},m),!m&&a&&r.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:b.bio}})))}},1196:function(e,t,a){"use strict";var n=a(1),r=a(0),i=a.n(r),c=(a(1137),a(1192)),s=a(1136),l=a.n(s),o=a(1175),u=a(142),m=a.n(u);t.a=function(e){var t,a=e.block,r=e.colorProfile,s=e.tags,u=e.valuesOnly,h=Object(o.a)(s,r);return i.a.createElement("span",{className:l()(m.a.tags,(t={},t[m.a.tagsBlock]=a,t))},h.map((function(e,t){return i.a.createElement(c.a,Object(n.a)({key:t,valueOnly:u},e))})))}},1203:function(e,t,a){"use strict";a(1171),a(1151),a(1152),a(77),a(1140),a(1153),a(25),a(20),a(19),a(52),a(1138);var n=a(0),r=a.n(n),i=a(1150),c=a(1144),s=a(1170),l=a(1137),o=(a(1139),a(1157)),u=a.n(o);var m=a(1158),h=a.n(m);a(1136);function g(e){switch(e){case"breaking change":return"a";case"feat":return"b";case"enhancement":return"c";case"fix":return"d";default:return"e"}}function p(e){switch(e){case"chore":return"Chore";case"docs":return"Doc Update";case"feat":return"New Feature";case"fix":return"Bug Fix";case"perf":return"Perf Improvement";default:return u()(e)}}function b(e){return e.sort((function(e,t){return g(e)>g(t)}))}var d=a(1129),f=a.n(d),v=(a(143),a(1127)),y=Object(s.a)("h3"),k=Object(s.a)("h4"),w=["enhancement","feat","fix","perf"];function N(e){return e.scopes.map((function(e,t){return r.a.createElement("span",{key:t,className:"badge badge--primary badge--small link",onClick:function(){return setSearchTerm(e.name)},style:{marginRight:"4px"},title:"Filter to '"+e.name+"' changes only"},e.name)}))}function E(e){var t=e.commit;e.setSearchTerm;return r.a.createElement("li",null,r.a.createElement("div",{className:"badges"},t.breaking_change&&r.a.createElement(l.a,{to:t.highlight_permalink,className:"badge badge--danger",title:"View upgrade guide..."},r.a.createElement("i",{className:"feather icon-alert-triangle"})," breaking"),!t.breaking_change&&t.highlight_permalink&&r.a.createElement(l.a,{to:t.highlight_permalink,className:"badge badge--warning",title:"View highlight announcement..."},r.a.createElement("i",{className:"feather icon-gift"})," highlight"),t.pr_number&&r.a.createElement("a",{href:"https://github.com/timberio/vector/pull/"+t.pr_number,target:"_blank",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View pull request..."},r.a.createElement("i",{className:"feather icon-git-pull-request"})," ",t.pr_number),!t.pr_number&&r.a.createElement("a",{href:"https://github.com/timberio/vector/commit/"+t.sha,target:"_blank",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View commit..."},r.a.createElement("i",{className:"feather icon-git-commit"})," ",t.sha.slice(0,5))),r.a.createElement(k,{id:t.sha},r.a.createElement(N,{scopes:t.scopes}),t.description))}function O(e){var t=e.commits,a=e.groupBy,n=e.setSearchTerm;if(a){var i=h()(t).sortBy((function(e){return e.type})).groupBy(a).value(),c=b(Object.keys(i));return r.a.createElement("ul",{className:"connected-list connected-list--clean"},c.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(y,{id:e},f()(p(e),i[e].length,!0)),r.a.createElement("ul",{className:"connected-list connected-list--compact connected-list--blend connected-list--hover"},i[e].map((function(e,t){return r.a.createElement(E,{key:t,commit:e,setSearchTerm:n})}))))})))}return r.a.createElement("div",null,t.length)}t.a=function(e){var t=e.version,a=Object(v.a)().siteConfig,s=(void 0===a?{}:a).customFields.metadata.releases,l=h.a.flatMap(s,(function(e){return e.commits.map((function(t){return t.version=e.version,t}))})),o=Object(n.useState)("type"),u=o[0],m=(o[1],Object(n.useState)(new Set(w))),g=m[0],p=m[1],b=Object(n.useState)(null),d=b[0],f=b[1],y=Object(n.useState)(t),k=y[0],N=(y[1],l.slice(0));k&&(N=N.filter((function(e){return e.version==k})));var E=N;g.size>0&&(E=E.filter((function(e){return g.has(e.type)}))),d&&(E=E.filter((function(e){return e.message.toLowerCase().includes(d.toLowerCase())}))),k&&(E=E.filter((function(e){return e.version==k})));var j=new Set(h()(l).map((function(e){return e.type})).uniq().compact().sort().value());return r.a.createElement("div",null,N.length>5?r.a.createElement("div",{className:"filters filters--narrow"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},E.length," items"),r.a.createElement("input",{type:"text",onChange:function(e){return f(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search by type, component name, or title...",className:"input--text input--lg",value:d||""})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(i.a,{name:"type",values:j,currentState:g,setState:p})))):null,E.length>0?r.a.createElement(O,{commits:E,groupBy:u,setSearchTerm:f,types:j}):r.a.createElement(c.a,{text:"no commits found"}))}},1216:function(e,t,a){"use strict";var n=a(1),r=(a(1171),a(25),a(20),a(19),a(52),a(0)),i=a.n(r),c=a(1170),s=(a(1173),a(1195)),l=a(1137),o=a(1196),u=a(1209),m=(a(1158),a(1136)),h=a.n(m),g=a(1194),p=a.n(g),b=a(1175);var d=function(e){var t=e.authorGithub,a=e.colorize,n=e.dateString,r=e.description,c=e.headingDepth,m=e.hideAuthor,g=e.hideTags,d=e.permalink,f=e.prNumbers,v=e.tags,y=e.title,k=new Date(Date.parse(n)),w=p()(k,"mmm dS, yyyy"),N=Object(b.a)(v,"highlights"),E=(N=N.concat(f.map((function(e){return{enriched:!0,label:i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e),permalink:"https://github.com/timberio/vector/pull/"+e,style:"secondary"}})))).find((function(e){return"domain"==e.category})),O=E?E.value:null,j=N.find((function(e){return"type"==e.category})),T=j?j.value:null,_="h"+(c||3),S=null;if(a)switch(T){case"breaking change":S="danger";break;case"enhancement":S="pink";break;case"new feature":S="primary";break;case"performance":S="warning"}var x=i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"time"},i.a.createElement("span",{className:"formatted-time"},w),i.a.createElement("span",{className:"separator"}," / "),i.a.createElement(u.a,{title:w,pubdate:"pubdate",datetime:k})),i.a.createElement("span",{className:"separator"}," / "),i.a.createElement("span",{className:"author-title"},"Vector core team"));return i.a.createElement(l.a,{to:d,className:h()("panel","panel--"+S,"domain-bg","domain-bg--hover","domain-bg--"+O)},i.a.createElement("article",null,i.a.createElement(_,null,y),i.a.createElement("div",{className:"subtitle"},r),!m&&t&&i.a.createElement(s.a,{github:t,size:"sm",subTitle:x,rel:"author"}),!g&&N.length>0&&i.a.createElement("div",null,i.a.createElement(o.a,{colorProfile:"blog",tags:N}))))},f=a(1191),v=a.n(f),y=a(1129),k=a.n(y),w=a(1212),N=a.n(w),E=(Object(c.a)("h2"),Object(c.a)("h3"));function O(e){var t=e.groupBy,a=e.group,n=new v.a;switch(t){case"release":return i.a.createElement("li",{className:"header sticky"},i.a.createElement("h3",null,i.a.createElement(l.a,{to:"/releases/"+a+"/"},N()(a))));case"type":var r=null,c=k()(N()(a)),s=null;switch(a){case"breaking change":r="alert-triangle",s="danger";break;case"enhancement":r="arrow-up-circle",s="pink";break;case"new feature":r="gift",s="primary";break;case"performance":r="zap",c="Performance Improvements",s="warning"}return i.a.createElement("li",{className:"header sticky"},i.a.createElement(E,{id:n.slug(a+"-highlights"),className:"text--"+s},r&&i.a.createElement("i",{className:"feather icon-"+r})," ",c));default:throw Error("unknown group: "+t)}}t.a=function(e){var t=e.author,a=(e.clean,e.colorize),r=e.groupBy,c=e.items,s=e.tags,l=e.timeline,o=r||"release",u=function(e){return e.map((function(e){if(e.content){var t=e.content,a=t.frontMatter,n=t.metadata,r=a.author_github,i=a.pr_numbers,c=a.release,s=a.title,l=n.date,o=n.description,u=n.permalink,m=n.tags,h={};return h.authorGithub=r,h.dateString=l,h.description=o,h.permalink=u,h.prNumbers=i,h.release=c,h.tags=m,h.title=s,h}return e}))}(c),m=_.groupBy(u,o),g=!1!==l?Object.keys(m):Object.keys(m).sort();return i.a.createElement("ul",{className:h()("connected-list","connected-list--clean")},g.map((function(e,r){var c=m[e];return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{groupBy:o,group:e}),i.a.createElement("ul",{className:h()("connected-list",{"connected-list--timeline":!1!==l})},c.map((function(e,r){return i.a.createElement("li",{key:r},i.a.createElement(d,Object(n.a)({},e,{colorize:a,hideAuthor:0==t,hideTags:0==s})))}))))})))}},627:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return h}));var n=a(1),r=a(9),i=(a(0),a(1128)),c=a(1203),s=a(1216),l={last_modified_on:"2020-04-29",title:"Vector v0.9.0 Release Notes",codename:"The Homestretch",date:"2020-04-17",description:"Vector v0.9.0 - The Homestretch - Release Notes",version:"0.9.0"},o={date:"2020-04-17T00:00:00.000Z",description:"Vector v0.9.0 - The Homestretch - Release Notes",permalink:"/releases/0.9.0",source:"@site/releases/0.9.0.md",title:"Vector v0.9.0 Release Notes",truncated:!1,version:"0.9.0",prevItem:{title:"Vector v0.8.2 Release Notes",permalink:"/releases/0.8.2"},nextItem:{title:"Vector v0.9.1 Release Notes",permalink:"/releases/0.9.1"}},u=[{value:"Highlights",id:"highlights",children:[]},{value:"Changelog",id:"changelog",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[{value:"Kubernetes!",id:"kubernetes",children:[]},{value:"WASM Driven Plugin Architecture",id:"wasm-driven-plugin-architecture",children:[]},{value:"Dynamic HTTP Rate-Limiting (AIMD)",id:"dynamic-http-rate-limiting-aimd",children:[]},{value:"Vector Observability",id:"vector-observability",children:[]}]}],m={rightToc:u};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/community/#team"}),"Vector team")," is pleased to release\n0.9.0. This is a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/#spec-item-4"}),"initial dev"),"\nrelease. Checkout the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#highlights"}),"Highlights"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#changelog"}),"Changelog"),", and\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#whats-next"}),"What's Next")," section for more detail."),Object(i.b)("h2",{id:"highlights"},"Highlights"),Object(i.b)("div",{className:"sub-title"},"Noteworthy changes in this release"),Object(i.b)(s.a,{author:!1,colorize:!0,groupBy:"type",headingDepth:3,items:[{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-23T00:00:00",description:"This brings the sink naming inline with consistent naming pattern",permalink:"/highlights/2020-03-23-rename-gcp_stackdriver_logging-sink-to-gcp_stackdriver_logs/",prNumbers:[2121],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: splunk_hec"],title:"The `gcp_stackdriver_logging` sink has been renamed to `gcp_stackdriver_logs`",type:"breaking change"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-05T00:00:00",description:"Compression is not supported by all Elasticsearch service providers",permalink:"/highlights/2020-04-05-default-compression-to-none/",prNumbers:[2219],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: elasticsearch"],title:"The `elasticsearch` sink `compression` option now defaults to `none`",type:"breaking change"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-09T00:00:00",description:"ACL is not always required when creating objects in GCP Cloud Storage",permalink:"/highlights/2020-04-09-make-acl-optional/",prNumbers:[2283],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: gcp_cloud_storage"],title:"ACL is now optional for the Google Cloud Storage sink",type:"breaking change"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-04T00:00:00",description:"Vector now lets you whitelist, blacklist, and format fields when events are encoded",permalink:"/highlights/2020-03-04-encoding-only-fields-except-fields/",prNumbers:[1915],release:"0.9.0",tags:["type: enhancement","domain: sinks"],title:"New Encoding Options",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-07T00:00:00",description:"The next iteration of our Lua transform.",permalink:"/highlights/2020-04-07-lua-transform-version-2/",prNumbers:[2126],release:"0.9.0",tags:["type: enhancement","domain: sources","source: vector"],title:"Lua Transform v2",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-20T00:00:00",description:"A faster and more reliable shutdown process",permalink:"/highlights/2020-04-20-improved-shutdown/",prNumbers:[1994],release:"0.9.0",tags:["type: enhancement","domain: topology"],title:"Improved Shutdown",type:"enhancement"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-02-28T00:00:00",description:"Build Vector with select components",permalink:"/highlights/2020-02-28-custom-vector-builds/",prNumbers:[1924],release:"0.9.0",tags:["type: new feature","domain: sources","source: vector"],title:"\xc0 La Carte Custom Vector Builds",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-10T00:00:00",description:"Shed duplicate logs",permalink:"/highlights/2020-03-10-dedupe-transform/",prNumbers:[1848],release:"0.9.0",tags:["type: new feature","domain: sources","source: vector"],title:"New Dedupe Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-11T00:00:00",description:"Protect downstream metrics storages from runaway metrics tags",permalink:"/highlights/2020-03-11-tag-cardinality-limit-transform/",prNumbers:[1959],release:"0.9.0",tags:["type: new feature","domain: transforms","transform: tag_cardinality_limit"],title:"New Tag Cardinality Limit Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-03-31T00:00:00",description:"Filter and route your logs based on defined conditions",permalink:"/highlights/2020-03-31-filter-transform/",prNumbers:[2088],release:"0.9.0",tags:["type: new feature","domain: transforms","transform: filter"],title:"New Filter Transform",type:"new feature"},{authorGithub:"https://github.com/binarylogic",dateString:"2020-04-17T00:00:00",description:"Papertrail, Honeycomb, Pulsar, and DataDog Logs",permalink:"/highlights/2020-04-17-new-sinks/",prNumbers:[1835,1847,1665,1832],release:"0.9.0",tags:["type: new feature","domain: sinks"],title:"4 New Sinks!",type:"new feature"}],size:null,tags:!1,timeline:!1,mdxType:"HighlightItems"}),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("div",{className:"sub-title"},"A complete list of changes"),Object(i.b)(c.a,{version:"0.9.0",mdxType:"Changelog"}),Object(i.b)("h2",{id:"whats-next"},"What's Next"),Object(i.b)("ul",{className:"connected-list"},Object(i.b)("li",null,Object(i.b)("h3",{id:"kubernetes"},"Kubernetes!"),Object(i.b)("p",null,"We're doing this integration right. We've been alpha testing with a number of large clusters and we've honed in on a very high-quality approach that reflects the UX Vector is going after. You can learn more in our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2222"}),"Kubernetes Integration RFC"),". Feedback is welcome!")),Object(i.b)("li",null,Object(i.b)("h3",{id:"wasm-driven-plugin-architecture"},"WASM Driven Plugin Architecture"),Object(i.b)("p",null,"This release included an overhaul of our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/"}),Object(i.b)("inlineCode",{parentName:"a"},"lua")," transform"),", which represents a big step towards making Vector more flexible. Lua is an excellent language when you need some quick scripting capabilities. But what if you need something more powerful? Like writing your own custom source, transform, or sink? Vector plans to solve this with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://webassembly.org/"}),"WASM")," foreign module support, enabling you to extend Vector in the language of your choice with little performance penalty. \u2764\ufe0f WASM. Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2341"}),"WASM Foreign Module Support RFC")," for more info.")),Object(i.b)("li",null,Object(i.b)("h3",{id:"dynamic-http-rate-limiting-aimd"},"Dynamic HTTP Rate-Limiting (AIMD)"),Object(i.b)("p",null,"Fiddling with rate-limits is a frustratin endaevor. If you set them too high you risk overwhelming the service; too low and you're unecessarily limiting throughput. And what happens if you deploy a few more Vector instances? Vector is planning to solve this by automatically detecting the optimal rate limits, taking inspiration from TCP congestional control algorithms. Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2329"}),"Dynamic HTTP Rate Limiting RFC"),".")),Object(i.b)("li",null,Object(i.b)("h3",{id:"vector-observability"},"Vector Observability"),Object(i.b)("p",null,"Did you know this release includes a new hidden ",Object(i.b)("inlineCode",{parentName:"p"},"internal")," source that emits metrics reflecting Vector's own internal state? \ud83d\udc40 We didn't highlight this source because we have not finished instrumenting Vector and we'll be changing the internal schema used."),Object(i.b)("p",null,"Fun fact, we took an event-driven approach to Vector's internal observability, which we strongly beleive in. We want Vector to be a good example of our own advice. Checkout the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/pull/2093"}),"Event-Driven Observability RFC"),"."))),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/milestones?direction=asc&sort=due_date&state=open"}),"Vector roadmap")," is publicly available and represents\nforward looking progress. Vector is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," and\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/community/"}),"community driven"),". Your feedback is welcome!"))}h.isMDXComponent=!0}}]);