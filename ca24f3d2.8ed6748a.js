(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{929:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var o=a(1),s=(a(0),a(1130)),r=a(1157),n=a.n(r);const i={last_modified_on:"2020-03-31",title:"Deployment Topologies",description:"The various topologies that Vector can accomplish and when to use each.",sidebar_label:"Topologies"},l={id:"setup/deployment/topologies",title:"Deployment Topologies",description:"The various topologies that Vector can accomplish and when to use each.",source:"@site/docs/setup/deployment/topologies.md",permalink:"/docs/setup/deployment/topologies",sidebar_label:"Topologies"},c=[{value:"Distributed",id:"distributed",children:[{value:"Pros",id:"pros",children:[]},{value:"Cons",id:"cons",children:[]}]},{value:"Centralized",id:"centralized",children:[{value:"Pros",id:"pros-1",children:[]},{value:"Cons",id:"cons-1",children:[]}]},{value:"Stream-Based",id:"stream-based",children:[{value:"Pros",id:"pros-2",children:[]},{value:"Cons",id:"cons-2",children:[]}]}],d={rightToc:c};function b({components:e,...t}){return Object(s.b)("wrapper",Object(o.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In the previous section we covered the various ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/"}),"deployment\nstrategies")," used to collect and forward data. You combine these\nstrategies to form topologies. This section showcases common topologies and the\npros and cons of each. Use these as ",Object(s.b)("em",{parentName:"p"},"guidelines")," to build your own."),Object(s.b)("h2",{id:"distributed"},"Distributed"),Object(s.b)(n.a,{src:"/img/topologies-distributed.svg",mdxType:"SVG"}),Object(s.b)("p",null,"The simplest topology. This topology offers direct communication with your\ndownstream services from your client nodes."),Object(s.b)("h3",{id:"pros"},"Pros"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Simple.")," Less moving parts."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Elastic.")," Easily scales with your app. Resources grow as you scale.")),Object(s.b)("h3",{id:"cons"},"Cons"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Less efficient.")," Depending on the complexity of your pipelines, this will\nuse more local resources, which could disrupt the performance of other\napplications on the same host."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Less durable.")," Because data is buffered on the host it is more likely\nyou'll lose buffered data in the event of an unrecoverable crash. Often times\nthis is the most important and useful data."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"More downstream stress.")," Downstream services will receive more requests\nwith smaller payloads that could potentially disrupt stability of these\nservices."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Reduced downstream stability.")," You risk overloading downstream services\nif you need to scale up quickly or exceed the capacity a downstream service\ncan handle."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Lacks multi-host context.")," Lacks awareness of other hosts and eliminates\nthe ability to perform operations across hosts, such as reducing logs to\nglobal metrics. This is typically a concern for very large deployments where\nindividual host metrics are less useful.")),Object(s.b)("h2",{id:"centralized"},"Centralized"),Object(s.b)(n.a,{src:"/img/topologies-centralized.svg",mdxType:"SVG"}),Object(s.b)("p",null,"A good balance of simplicity, stability, and control. For most, this topology\nis a good compromise between the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"#distributed"}),"distributed")," and\n",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"#stream-based"}),"stream-based")," topologies. It offers many of the advantages of\nthe stream-based topology without the management overhead and cost of running a\nKafka cluster."),Object(s.b)("h3",{id:"pros-1"},"Pros"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"More efficient.")," More efficient for client nodes and downstream services.\nVector agents are doing less which means they're using less resources. In\naddition, the centralized Vector service will buffer more data, achieve\nbetter compression, and send optimized requests downstream."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"More reliable.")," Vector will protect downstream services from volume spikes,\nbuffering and flushing data at smoothed out intervals."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Has multi-host context.")," Because your data is centralized, you'll be able\nto perform operations across hosts, such as reducing logs to global metrics.\nThis is advantageous for large deployments where individual host metrics are\nnot interesting.")),Object(s.b)("h3",{id:"cons-1"},"Cons"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"More complex.")," There are more moving parts."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Less durable.")," Agent nodes are designed to get data off of the machine as\nquickly as possible, and this offers higher potential for data loss since the\ncentral Vector service could die and lose buffered data. If this type of\noutage is unacceptable, then we recommend the\n",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"#stream-based"}),"stream-based topology")," below.")),Object(s.b)("h2",{id:"stream-based"},"Stream-Based"),Object(s.b)(n.a,{src:"/img/topologies-stream-based.svg",mdxType:"SVG"}),Object(s.b)("p",null,"The most durable and elastic topology. This topology is typically adopted for\nvery large streams with teams that are familiar with running a stream-based\nservice such as Kafka."),Object(s.b)("h3",{id:"pros-2"},"Pros"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Most durable & reliable.")," Stream services, like Kafka, are designed for\nhigh durability and reliability, replicating data across multiple nodes."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Most efficient.")," Vector agents are doing less, making them more efficient,\nand Vector services do not have to worry about durability, which can be tuned\ntowards performance."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Ability to restream.")," Restream your data depending on your stream's\nretention period."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Cleaner separation of responsibilities.")," Vector is used solely as a routing\nlayer and is not responsible for durability. Durability is delegated to a\npurpose-built service that you can switch and evolve over time.")),Object(s.b)("h3",{id:"cons-2"},"Cons"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Increased management overhead.")," Managing a stream service, such as Kafka,\nis a complex endeavor and generally requires an experienced team to setup and\nmanage properly."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"More complex.")," This topology is complex and requires a deeper understand of\nmanaging production-grade streams."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"More expensive.")," In addition the management cost, the added stream cluster\nwill require more resources which will increase operational cost.")))}b.isMDXComponent=!0}}]);