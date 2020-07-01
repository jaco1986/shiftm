(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{518:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=(n(0),n(1117)),o=n(1118),s=n(1145),r=n.n(s);const d={title:"Data Model",sidebar_label:"hidden",description:"Vector's internal data model -- event and it's subtypes."},c={id:"about/data-model",title:"Data Model",description:"Vector's internal data model -- event and it's subtypes.",source:"@site/docs/about/data-model.md",permalink:"/docs/about/data-model",sidebar_label:"hidden"},l=[{value:"Event Types",id:"event-types",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why Not <em>Just</em> Events?",id:"why-not-just-events",children:[]}]}],b={rightToc:l};function p({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)(r.a,{src:"/img/data-model-event.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The individual pieces of data flowing through Vector are known as ",Object(i.b)("strong",{parentName:"p"},"events"),".\nEvents are arbitrarily wide, and deep, structured pieces of data. They have no\nrequirements or limitations. Ideally, events contain enough rich information\nto derive any type of monitoring data from it."),Object(i.b)("h2",{id:"event-types"},"Event Types"),Object(i.b)("p",null,"Vector defines subtypes for events. This is necessary to establish domain\nspecific requriements enabling interoperability with existing monitoring and\nobservability systems."),Object(i.b)(o.a,{to:"/docs/about/data-model/log/",mdxType:"Jump"},"Log"),Object(i.b)(o.a,{to:"/docs/about/data-model/metric/",mdxType:"Jump"},"Metric"),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"why-not-just-events"},"Why Not ",Object(i.b)("em",{parentName:"h3"},"Just")," Events?"),Object(i.b)("p",null,"We, ",Object(i.b)("em",{parentName:"p"},"very much"),', like the idea of an event only world, one where every service\nis perfectly instrumented with events that contain rich data and context.\nUnfortunately, that is not the case; exisiting services usually emit metrics,\ntraces, and logs of varying quality. By designing Vector to meet services where\nthey are (current state), we serve as a bridge to newer standards. This is why\nwe place "events" at the top of our data model, where logs and metrics are\nderived.'),Object(i.b)("p",null,"Finally, a sophisticated data model that accounts for the various data types\nallows for ",Object(i.b)("em",{parentName:"p"},"correct")," interoperability between observability systems. For\nexample, a pipeline with a ",Object(i.b)("inlineCode",{parentName:"p"},"statsd")," source and a ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus")," sink would not\nbe possible without the correct internal metrics data types."))}p.isMDXComponent=!0}}]);