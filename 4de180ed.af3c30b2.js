(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{382:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return h}));var i=a(1),s=a(6),o=(a(0),a(943)),r=a(947),n=a(948),l=a(944),c=a(952),b=a(946),u={last_modified_on:"2020-05-01",$schema:"/.meta/.schemas/guides.json",title:"Send logs from Kafka to AWS S3",description:"A simple guide to send logs from Kafka to AWS S3 in just a few minutes.",author_github:"https://github.com/binarylogic",cover_label:"Kafka to AWS S3 Integration",tags:["type: tutorial","domain: sources","domain: sinks","source: kafka","sink: aws_s3"],hide_pagination:!0},d={categories:[{name:"integrate",title:"Integrate",description:"Simple step-by-step integration guides.",permalink:"/guides/integrate"},{name:"sources",title:"Sources",description:null,permalink:"/guides/integrate/sources"},{name:"kafka",title:"Kafka",description:null,permalink:"/guides/integrate/sources/kafka"}],coverLabel:"Kafka to AWS S3 Integration",description:"A simple guide to send logs from Kafka to AWS S3 in just a few minutes.",permalink:"/guides/integrate/sources/kafka/aws_s3",readingTime:"4 min read",source:"@site/guides/integrate/sources/kafka/aws_s3.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: sources",permalink:"/guides/tags/domain-sources"},{label:"domain: sinks",permalink:"/guides/tags/domain-sinks"},{label:"source: kafka",permalink:"/guides/tags/source-kafka"},{label:"sink: aws_s3",permalink:"/guides/tags/sink-aws-s-3"}],title:"Send logs from Kafka to AWS S3",truncated:!1,prevItem:{title:"Send logs from Kafka to AWS Kinesis Firehose",permalink:"/guides/integrate/sources/kafka/aws_kinesis_firehose"},nextItem:{title:"Send logs from Kafka to Clickhouse",permalink:"/guides/integrate/sources/kafka/clickhouse"}},p=[{value:"Background",id:"background",children:[{value:"What is Kafka?",id:"what-is-kafka",children:[]},{value:"What is AWS S3?",id:"what-is-aws-s3",children:[]}]},{value:"Strategy",id:"strategy",children:[{value:"How This Guide Works",id:"how-this-guide-works",children:[]},{value:"What We&#39;ll Accomplish",id:"what-well-accomplish",children:[]}]},{value:"Tutorial",id:"tutorial",children:[{value:"Install Vector",id:"install-vector",children:[]},{value:"Configure Vector",id:"configure-vector",children:[]},{value:"Start Vector",id:"start-vector",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:p};function h(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Logs are an ",Object(o.b)("em",{parentName:"p"},"essential")," part of observing any\nservice; without them you are flying blind. But collecting and analyzing them\ncan be a real challenge -- especially at scale. Not only do you need to solve\nthe basic task of collecting your logs, but you must do it\nin a reliable, performant, and robust manner. Nothing is more frustrating than\nhaving your logs pipeline fall on it's face during an\noutage, or even worse, disrupt more important services!"),Object(o.b)("p",null,"Fear not! In this guide we'll show you how to send send logs from ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Kafka")," to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://aws.amazon.com/s3/"}),"AWS S3"),"\nand build a logs pipeline that will be the backbone of\nyour observability strategy."),Object(o.b)("h2",{id:"background"},"Background"),Object(o.b)("h3",{id:"what-is-kafka"},"What is Kafka?"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Apache Kafka")," is an open source project for a distributed publish-subscribe messaging system rethought as a distributed commit log. Kafka stores messages in topics that are partitioned and replicated across multiple brokers in a cluster. Producers send messages to topics from which consumers read. This makes it an excellent candidate for durably storing logs and metrics data."),Object(o.b)("h3",{id:"what-is-aws-s3"},"What is AWS S3?"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://aws.amazon.com/s3/"}),"Amazon Simple Storage Service (Amazon S3)")," is a scalable, high-speed, web-based cloud storage service designed for online backup and archiving of data and applications on Amazon Web Services. It is very commonly used to store log data."),Object(o.b)("h2",{id:"strategy"},"Strategy"),Object(o.b)("h3",{id:"how-this-guide-works"},"How This Guide Works"),Object(o.b)("p",null,"We'll be using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://vector.dev"}),"Vector")," to accomplish this task. Vector\nis a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/timberio/vector/stargazers"}),"popular")," ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," utility for\nbuilding observability pipelines. It's written in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust"),", making it\nlightweight, ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://vector.dev/#performance"}),"ultra-fast")," and highly reliable. And\nwe'll be deploying Vector as a\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#service"}),"service"),"."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#service"}),"service deployment strategy")," treats Vector like a\nseparate service. It is designed to receive data from an upstream source and\nfan-out to one or more destinations.\nFor this guide, Vector will collect data from\nKafka via Vector's\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/sources/kafka/"}),Object(o.b)("inlineCode",{parentName:"a"},"kafka")," source"),".\nThe following diagram demonstrates how it works."),Object(o.b)(c.a,{platformName:null,sourceName:"kafka",sinkName:"aws_s3",mdxType:"ServiceDiagram"}),Object(o.b)("h3",{id:"what-well-accomplish"},"What We'll Accomplish"),Object(o.b)("p",null,"To be clear, here's everything we'll accomplish in this short guide:"),Object(o.b)("ul",{className:"list--icons list--icons--checks list--indent"},Object(o.b)("li",null,"Consume one or more Kafka topics.",Object(o.b)("ul",null,Object(o.b)("li",null,"Checkpoint your position to ensure data is not lost between restarts."),Object(o.b)("li",null,"Enrich your logs with useful Kafka context."))),Object(o.b)("li",null,"Send logs to AWS S3.",Object(o.b)("ul",null,Object(o.b)("li",null,"Dynamically partition logs across different key prefixes."),Object(o.b)("li",null,"Compress and batch data to reduce storage cost and imrpove throughput."),Object(o.b)("li",null,"Optionally adjust ACL and encryption settings."),Object(o.b)("li",null,"Automatically retry failed requests, with backoff."),Object(o.b)("li",null,"Buffer your data in-memory or on-disk for performance and durability."))),Object(o.b)("li",{className:"list--icons--arrow text--pink text--bold"},"All in just a few minutes!")),Object(o.b)("h2",{id:"tutorial"},"Tutorial"),Object(o.b)(b.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"install-vector"},"Install Vector"),Object(o.b)(n.a,{mdxType:"InstallationCommand"}),Object(o.b)("p",null,"Or choose your ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"preferred method"),".")),Object(o.b)("li",null,Object(o.b)("h3",{id:"configure-vector"},"Configure Vector"),Object(o.b)(r.a,{format:"toml",path:"vector.toml",sourceName:"kafka",sinkName:"aws_s3",mdxType:"ConfigExample"})),Object(o.b)("li",null,Object(o.b)("h3",{id:"start-vector"},"Start Vector"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"vector --config vector.toml\n")),Object(o.b)("p",null,"That's it! Simple and to the point. Hit ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl+c")," to exit.")))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Vector is ",Object(o.b)("em",{parentName:"p"},"powerful")," utility and we're just scratching the surface in this\nguide. Here are a few pages we recommend that demonstrate the power and\nflexibility of Vector:"),Object(o.b)(l.a,{to:"https://github.com/timberio/vector",leftIcon:"github",target:"_blank",mdxType:"Jump"},Object(o.b)("div",{className:"title"},"Vector Github repo ",Object(o.b)("span",{className:"badge badge--primary"},Object(o.b)("i",{className:"feather icon-star"})," 4k")),Object(o.b)("div",{className:"sub-title"},"Vector is free and open-source!")),Object(o.b)(l.a,{to:"/guides/getting-started/",leftIcon:"book",mdxType:"Jump"},Object(o.b)("div",{className:"title"},"Vector getting started series"),Object(o.b)("div",{className:"sub-title"},"Go from zero to production in under 10 minutes!")),Object(o.b)(l.a,{to:"/docs/about/what-is-shiftm/",leftIcon:"book",mdxType:"Jump"},Object(o.b)("div",{className:"title"},"Vector documentation"),Object(o.b)("div",{className:"sub-title"},"Thoughtful, detailed docs that respect your time.")))}h.isMDXComponent=!0}}]);