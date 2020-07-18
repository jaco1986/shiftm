(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{739:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return h}));var i=a(1),s=a(6),r=(a(0),a(924)),n=a(927),o=a(929),c=a(925),l=a(933),d=a(926),b={last_modified_on:"2020-05-01",$schema:"/.meta/.schemas/guides.json",title:"Collect metrics from Statsd and send them anywhere",description:"A simple guide to collect metrics from Statsd and send them anywhere in just a few minutes.",author_github:"https://github.com/binarylogic",cover_label:"Statsd Integration",tags:["type: tutorial","domain: sources","source: statsd"],hide_pagination:!0},u={categories:[{name:"integrate",title:"Integrate",description:"Simple step-by-step integration guides.",permalink:"/guides/integrate"},{name:"sources",title:"Sources",description:null,permalink:"/guides/integrate/sources"}],coverLabel:"Statsd Integration",description:"A simple guide to collect metrics from Statsd and send them anywhere in just a few minutes.",permalink:"/guides/integrate/sources/statsd",readingTime:"3 min read",source:"@site/guides/integrate/sources/statsd.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: sources",permalink:"/guides/tags/domain-sources"},{label:"source: statsd",permalink:"/guides/tags/source-statsd"}],title:"Collect metrics from Statsd and send them anywhere",truncated:!1,prevItem:{title:"Send logs to a Splunk HEC",permalink:"/guides/integrate/sinks/splunk_hec"},nextItem:{title:"Send metrics to Statsd",permalink:"/guides/integrate/sinks/statsd"}},m=[{value:"Background",id:"background",children:[{value:"What is Statsd?",id:"what-is-statsd",children:[]}]},{value:"Strategy",id:"strategy",children:[{value:"How This Guide Works",id:"how-this-guide-works",children:[]},{value:"What We&#39;ll Accomplish",id:"what-well-accomplish",children:[]}]},{value:"Tutorial",id:"tutorial",children:[{value:"Install Vector",id:"install-vector",children:[]},{value:"Configure Vector",id:"configure-vector",children:[]},{value:"Start Vector",id:"start-vector",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:m};function h(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Metrics are an ",Object(r.b)("em",{parentName:"p"},"essential")," part of observing any\nservice; without them you are flying blind. But collecting and analyzing them\ncan be a real challenge -- especially at scale. Not only do you need to solve\nthe basic task of collecting your metrics, but you must do it\nin a reliable, performant, and robust manner. Nothing is more frustrating than\nhaving your metrics pipeline fall on it's face during an\noutage, or even worse, disrupt more important services!"),Object(r.b)("p",null,"Fear not! In this guide we'll show you how to send collect metrics from ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/statsd/statsd"}),"Statsd")," and send them anywhere\nand build a metrics pipeline that will be the backbone of\nyour observability strategy."),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("h3",{id:"what-is-statsd"},"What is Statsd?"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/statsd/statsd"}),"StatsD")," is a standard and, by extension, a set of tools that can be used to send, collect, and aggregate custom metrics from any application. Originally, StatsD referred to a daemon written by ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.etsy.com"}),"Etsy")," in Node."),Object(r.b)("h2",{id:"strategy"},"Strategy"),Object(r.b)("h3",{id:"how-this-guide-works"},"How This Guide Works"),Object(r.b)("p",null,"We'll be using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://shiftm.com"}),"Vector")," to accomplish this task. Vector\nis a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/timberio/vector/stargazers"}),"popular")," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," utility for\nbuilding observability pipelines. It's written in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust"),", making it\nlightweight, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://shiftm.com/#performance"}),"ultra-fast")," and highly reliable. And\nwe'll be deploying Vector as a\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#service"}),"service"),"."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#service"}),"service deployment strategy")," treats Vector like a\nseparate service. It is designed to receive data from an upstream source and\nfan-out to one or more destinations.\nFor this guide, Vector will receive data from\nStatsd via Vector's\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/sources/statsd/"}),Object(r.b)("inlineCode",{parentName:"a"},"statsd")," source"),".\nThe following diagram demonstrates how it works."),Object(r.b)(l.a,{platformName:null,sourceName:"statsd",sinkName:null,mdxType:"ServiceDiagram"}),Object(r.b)("h3",{id:"what-well-accomplish"},"What We'll Accomplish"),Object(r.b)("p",null,"To be clear, here's everything we'll accomplish in this short guide:"),Object(r.b)("ul",{className:"list--icons list--icons--checks list--indent"},Object(r.b)("li",null,"Accept metrics data over the Statsd UDP protocol.",Object(r.b)("ul",null,Object(r.b)("li",null,"Automatically parse metrics into a lossless interoperable data model."))),Object(r.b)("li",null,"Send your metrics to one or more destinations"),Object(r.b)("li",{className:"list--icons--arrow text--pink text--bold"},"All in just a few minutes!")),Object(r.b)("h2",{id:"tutorial"},"Tutorial"),Object(r.b)(d.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h3",{id:"install-vector"},"Install Vector"),Object(r.b)(o.a,{mdxType:"InstallationCommand"}),Object(r.b)("p",null,"Or choose your ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"preferred method"),".")),Object(r.b)("li",null,Object(r.b)("h3",{id:"configure-vector"},"Configure Vector"),Object(r.b)(n.a,{format:"toml",path:"vector.toml",sourceName:"statsd",sinkName:null,mdxType:"ConfigExample"})),Object(r.b)("li",null,Object(r.b)("h3",{id:"start-vector"},"Start Vector"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"vector --config vector.toml\n")),Object(r.b)("p",null,"That's it! Simple and to the point. Hit ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl+c")," to exit.")))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Vector is ",Object(r.b)("em",{parentName:"p"},"powerful")," utility and we're just scratching the surface in this\nguide. Here are a few pages we recommend that demonstrate the power and\nflexibility of Vector:"),Object(r.b)(c.a,{to:"https://github.com/timberio/vector",leftIcon:"github",target:"_blank",mdxType:"Jump"},Object(r.b)("div",{className:"title"},"Vector Github repo ",Object(r.b)("span",{className:"badge badge--primary"},Object(r.b)("i",{className:"feather icon-star"})," 4k")),Object(r.b)("div",{className:"sub-title"},"Vector is free and open-source!")),Object(r.b)(c.a,{to:"/guides/getting-started/",leftIcon:"book",mdxType:"Jump"},Object(r.b)("div",{className:"title"},"Vector getting started series"),Object(r.b)("div",{className:"sub-title"},"Go from zero to production in under 10 minutes!")),Object(r.b)(c.a,{to:"/docs/about/what-is-shiftm/",leftIcon:"book",mdxType:"Jump"},Object(r.b)("div",{className:"title"},"Vector documentation"),Object(r.b)("div",{className:"sub-title"},"Thoughtful, detailed docs that respect your time.")))}h.isMDXComponent=!0}}]);