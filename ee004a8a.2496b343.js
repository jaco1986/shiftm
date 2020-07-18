(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{866:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return g}));var i=a(1),o=a(6),n=(a(0),a(924)),r=a(927),s=a(929),l=a(925),c=a(933),b=a(926),u={last_modified_on:"2020-05-01",$schema:"/.meta/.schemas/guides.json",title:"Send logs from Kafka to LogDNA",description:"A simple guide to send logs from Kafka to LogDNA in just a few minutes.",author_github:"https://github.com/binarylogic",cover_label:"Kafka to LogDNA Integration",tags:["type: tutorial","domain: sources","domain: sinks","source: kafka","sink: logdna"],hide_pagination:!0},d={categories:[{name:"integrate",title:"Integrate",description:"Simple step-by-step integration guides.",permalink:"/guides/integrate"},{name:"sources",title:"Sources",description:null,permalink:"/guides/integrate/sources"},{name:"kafka",title:"Kafka",description:null,permalink:"/guides/integrate/sources/kafka"}],coverLabel:"Kafka to LogDNA Integration",description:"A simple guide to send logs from Kafka to LogDNA in just a few minutes.",permalink:"/guides/integrate/sources/kafka/logdna",readingTime:"4 min read",source:"@site/guides/integrate/sources/kafka/logdna.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: sources",permalink:"/guides/tags/domain-sources"},{label:"domain: sinks",permalink:"/guides/tags/domain-sinks"},{label:"source: kafka",permalink:"/guides/tags/source-kafka"},{label:"sink: logdna",permalink:"/guides/tags/sink-logdna"}],title:"Send logs from Kafka to LogDNA",truncated:!1,prevItem:{title:"Send logs from Kafka to Kafka",permalink:"/guides/integrate/sources/kafka/kafka"},nextItem:{title:"Send logs from Kafka to Loki",permalink:"/guides/integrate/sources/kafka/loki"}},p=[{value:"Background",id:"background",children:[{value:"What is Kafka?",id:"what-is-kafka",children:[]},{value:"What is LogDNA?",id:"what-is-logdna",children:[]}]},{value:"Strategy",id:"strategy",children:[{value:"How This Guide Works",id:"how-this-guide-works",children:[]},{value:"What We&#39;ll Accomplish",id:"what-well-accomplish",children:[]}]},{value:"Tutorial",id:"tutorial",children:[{value:"Install Vector",id:"install-vector",children:[]},{value:"Configure Vector",id:"configure-vector",children:[]},{value:"Start Vector",id:"start-vector",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:p};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Logs are an ",Object(n.b)("em",{parentName:"p"},"essential")," part of observing any\nservice; without them you are flying blind. But collecting and analyzing them\ncan be a real challenge -- especially at scale. Not only do you need to solve\nthe basic task of collecting your logs, but you must do it\nin a reliable, performant, and robust manner. Nothing is more frustrating than\nhaving your logs pipeline fall on it's face during an\noutage, or even worse, disrupt more important services!"),Object(n.b)("p",null,"Fear not! In this guide we'll show you how to send send logs from ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Kafka")," to ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://logdna.com/"}),"LogDNA"),"\nand build a logs pipeline that will be the backbone of\nyour observability strategy."),Object(n.b)("h2",{id:"background"},"Background"),Object(n.b)("h3",{id:"what-is-kafka"},"What is Kafka?"),Object(n.b)("p",null,Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Apache Kafka")," is an open source project for a distributed publish-subscribe messaging system rethought as a distributed commit log. Kafka stores messages in topics that are partitioned and replicated across multiple brokers in a cluster. Producers send messages to topics from which consumers read. This makes it an excellent candidate for durably storing logs and metrics data."),Object(n.b)("h3",{id:"what-is-logdna"},"What is LogDNA?"),Object(n.b)("p",null,Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://logdna.com/"}),"LogDNA")," is a log management system that allows engineering and DevOps to aggregate all system, server, and application logs into one platform. Collect, monitor, store, tail, and search application logs in with one command-line or web interface."),Object(n.b)("h2",{id:"strategy"},"Strategy"),Object(n.b)("h3",{id:"how-this-guide-works"},"How This Guide Works"),Object(n.b)("p",null,"We'll be using ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://shiftm.com"}),"Vector")," to accomplish this task. Vector\nis a ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/timberio/vector/stargazers"}),"popular")," ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," utility for\nbuilding observability pipelines. It's written in ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust"),", making it\nlightweight, ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://shiftm.com/#performance"}),"ultra-fast")," and highly reliable. And\nwe'll be deploying Vector as a\n",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#service"}),"service"),"."),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#service"}),"service deployment strategy")," treats Vector like a\nseparate service. It is designed to receive data from an upstream source and\nfan-out to one or more destinations.\nFor this guide, Vector will collect data from\nKafka via Vector's\n",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/sources/kafka/"}),Object(n.b)("inlineCode",{parentName:"a"},"kafka")," source"),".\nThe following diagram demonstrates how it works."),Object(n.b)(c.a,{platformName:null,sourceName:"kafka",sinkName:"logdna",mdxType:"ServiceDiagram"}),Object(n.b)("h3",{id:"what-well-accomplish"},"What We'll Accomplish"),Object(n.b)("p",null,"To be clear, here's everything we'll accomplish in this short guide:"),Object(n.b)("ul",{className:"list--icons list--icons--checks list--indent"},Object(n.b)("li",null,"Consume one or more Kafka topics.",Object(n.b)("ul",null,Object(n.b)("li",null,"Checkpoint your position to ensure data is not lost between restarts."),Object(n.b)("li",null,"Enrich your logs with useful Kafka context."))),Object(n.b)("li",null,"Send logs to the LogDNA logging service.",Object(n.b)("ul",null,Object(n.b)("li",null,"Batch data to maximize throughput."),Object(n.b)("li",null,"Automatically retry failed requests, with backoff."),Object(n.b)("li",null,"Buffer your data in-memory or on-disk for performance and durability."))),Object(n.b)("li",{className:"list--icons--arrow text--pink text--bold"},"All in just a few minutes!")),Object(n.b)("h2",{id:"tutorial"},"Tutorial"),Object(n.b)(b.a,{headingDepth:3,mdxType:"Steps"},Object(n.b)("ol",null,Object(n.b)("li",null,Object(n.b)("h3",{id:"install-vector"},"Install Vector"),Object(n.b)(s.a,{mdxType:"InstallationCommand"}),Object(n.b)("p",null,"Or choose your ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"preferred method"),".")),Object(n.b)("li",null,Object(n.b)("h3",{id:"configure-vector"},"Configure Vector"),Object(n.b)(r.a,{format:"toml",path:"vector.toml",sourceName:"kafka",sinkName:"logdna",mdxType:"ConfigExample"})),Object(n.b)("li",null,Object(n.b)("h3",{id:"start-vector"},"Start Vector"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"vector --config vector.toml\n")),Object(n.b)("p",null,"That's it! Simple and to the point. Hit ",Object(n.b)("inlineCode",{parentName:"p"},"ctrl+c")," to exit.")))),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)("p",null,"Vector is ",Object(n.b)("em",{parentName:"p"},"powerful")," utility and we're just scratching the surface in this\nguide. Here are a few pages we recommend that demonstrate the power and\nflexibility of Vector:"),Object(n.b)(l.a,{to:"https://github.com/timberio/vector",leftIcon:"github",target:"_blank",mdxType:"Jump"},Object(n.b)("div",{className:"title"},"Vector Github repo ",Object(n.b)("span",{className:"badge badge--primary"},Object(n.b)("i",{className:"feather icon-star"})," 4k")),Object(n.b)("div",{className:"sub-title"},"Vector is free and open-source!")),Object(n.b)(l.a,{to:"/guides/getting-started/",leftIcon:"book",mdxType:"Jump"},Object(n.b)("div",{className:"title"},"Vector getting started series"),Object(n.b)("div",{className:"sub-title"},"Go from zero to production in under 10 minutes!")),Object(n.b)(l.a,{to:"/docs/about/what-is-vector/",leftIcon:"book",mdxType:"Jump"},Object(n.b)("div",{className:"title"},"Vector documentation"),Object(n.b)("div",{className:"sub-title"},"Thoughtful, detailed docs that respect your time.")))}g.isMDXComponent=!0}}]);