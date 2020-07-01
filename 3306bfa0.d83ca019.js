(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{351:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),o=(n(0),n(1118)),i=n(1162),r=n(1119);const s={last_modified_on:"2020-06-01",title:"Document Verification",description:"What is your profile and how do you create one."},l={id:"profile/verification_documents",title:"Document Verification",description:"What is your profile and how do you create one.",source:"@site/docs/profile/verification_documents.md",permalink:"/docs/profile/verification_documents",sidebar:"docs",previous:{title:"Reviews",permalink:"/docs/profile/reviews"},next:{title:"Trust and Verification",permalink:"/docs/about/trust_and_verificaton"}},c=[{value:"Delivery Guarantees",id:"delivery-guarantees",children:[{value:"At-Least-Once",id:"at-least-once",children:[]},{value:"Best-Effort",id:"best-effort",children:[]}]},{value:"Reliability Guarantee",id:"reliability-guarantee",children:[{value:"Prod-Ready",id:"prod-ready",children:[]},{value:"Beta",id:"beta",children:[]}]},{value:"FAQs",id:"faqs",children:[{value:"Do I need at least once delivery?",id:"do-i-need-at-least-once-delivery",children:[]},{value:"Does Vector support exactly once delivery?",id:"does-vector-support-exactly-once-delivery",children:[]},{value:"How can I find components that meet these guarantees?",id:"how-can-i-find-components-that-meet-these-guarantees",children:[]}]}],d={rightToc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Faults in distributed systems are like green Skittles, we all wish they'd never\nhappen but in reality the best we can do is understand and control the damage\nthey cause. In event streaming pipelines that means understanding delivery\nand stability guarantees and their implications on your overall system."),Object(o.b)("p",null,"Vector attempts to make it clear which guarantees you can expect from it. We\ncategorize all components by their targetted delivery guarantee and also by\ntheir general stability. This helps you make the appropriate tradeoffs for your\nusecase."),Object(o.b)("p",null,"Here you can find an overview of delivery guarantee types and their meaning as\nwell as how we label the stability of our components. Next, you can head over to\nthe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/components/"}),"components page")," and use filters to see which components\nsupport specific guarantees."),Object(o.b)("h2",{id:"delivery-guarantees"},"Delivery Guarantees"),Object(o.b)("ul",{class:"connected-list"},Object(o.b)("li",null,Object(o.b)("h3",{id:"at-least-once"},"At-Least-Once"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"at-least-once")," delivery guarantee ensures that an\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"event")," received by Vector will be delivered at least\nonce to the configured destination(s). While rare, it is possible for an event\nto be delivered more than once. See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#does-vector-support-exactly-once-delivery"}),"Does Vector support exactly once\ndelivery")," FAQ below)."),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"In order to achieve at least once delivery between restarts your source must\nbe configured to use ",Object(o.b)("inlineCode",{parentName:"p"},"disk")," based buffers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # ...\n\n  [sinks.my_sink_id.buffer]\n    type = "disk"\n    when_full = "block"\n    max_size = 104900000 # 100MiB\n')),Object(o.b)("p",null,"Refer to each ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink's")," documentation for further guidance on its\nbuffer options.")),Object(o.b)(r.a,{to:"/components/?at-least-once=true",mdxType:"Jump"},"View all at-least-once components")),Object(o.b)("li",null,Object(o.b)("h3",{id:"best-effort"},"Best-Effort"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"best-effort")," delivery guarantee means that Vector will make a best effort to\ndeliver each event, but cannot ",Object(o.b)("em",{parentName:"p"},"guarantee")," delivery. This is usually due to\nlimitations of the underlying protocol; outside the scope of Vector. It's\nimportant to note that while data loss is possible, it is usually rare and\nVector does everything within it's control to ensure data is not lost. For more\ninfo, see the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#do-i-need-at-least-once-delivery"}),'"Do I need at least once delivery?"')," FAQ."),Object(o.b)("p",null,"Note that this is ",Object(o.b)("em",{parentName:"p"},"not")," the same as at-most-once delivery, as it is still\npossible for Vector to introduce duplicates under extreme circumstances."))),Object(o.b)("h2",{id:"reliability-guarantee"},"Reliability Guarantee"),Object(o.b)("ul",{class:"connected-list"},Object(o.b)("li",null,Object(o.b)("h3",{id:"prod-ready"},"Prod-Ready"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"prod-ready")," status is a ",Object(o.b)("em",{parentName:"p"},"subjective")," status defined by the Vector team,\nintended to give you a general idea of a feature's reliability for production\nenvironments. A feature is ",Object(o.b)("inlineCode",{parentName:"p"},"prod-ready")," if it meets the following criteria:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A meaningful amount of users (generally >50) have been using the feature in\na production environment for sustained periods without issue."),Object(o.b)("li",{parentName:"ol"},"The feature has had sufficient time (generally >4 months) to be community\ntested."),Object(o.b)("li",{parentName:"ol"},"The feature API is stable and unlikely to change."),Object(o.b)("li",{parentName:"ol"},"There are no major ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22type%3A+bug%22"}),"open bugs")," for the feature.")),Object(o.b)(r.a,{to:"/components/?prod-ready=true",mdxType:"Jump"},"View all prod-ready components")),Object(o.b)("li",null,Object(o.b)("h3",{id:"beta"},"Beta"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"beta")," status means that a feature has not met the criteria outlined in\nthe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#prod-ready"}),"Prod-Ready")," section and therefore should be used with caution\nin production environments."))),Object(o.b)("h2",{id:"faqs"},"FAQs"),Object(o.b)("h3",{id:"do-i-need-at-least-once-delivery"},"Do I need at least once delivery?"),Object(o.b)("p",null,'One of the unique advantages of the logging use case is that data is usually\nused for diagnostic purposes only. Therefore, losing the occasional event\nhas little impact on your business. This affords you the opportunity to\nprovision your pipeline towards performance, simplicity, and cost reduction.\nOn the other hand, if you\'re using your data to perform business critical\nfunctions, then data loss is not acceptable and therefore requires "at least\nonce" delivery.'),Object(o.b)("p",null,'To clarify, even though a source or sink is marked as "best effort" it does\nnot mean Vector takes delivery lightly. In fact, once data is within the\nboundary of Vector it will not be lost if you\'ve configured on-disk buffers.\nData loss for "best effort" sources and sinks are almost always due to the\nlimitations of the underlying protocol.'),Object(o.b)("h3",{id:"does-vector-support-exactly-once-delivery"},"Does Vector support exactly once delivery?"),Object(o.b)("p",null,"No, Vector does not support exactly once delivery. There are future plans to\npartially support this for sources and sinks that support it (Kafka, for\nexample), but it remains unclear if Vector will ever be able to achieve this.\nWe recommend ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vector.dev/community"}),"subscribing to our mailing list"),",\nwhich will keep you in the loop if this ever changes."),Object(o.b)("h3",{id:"how-can-i-find-components-that-meet-these-guarantees"},"How can I find components that meet these guarantees?"),Object(o.b)("p",null,"Head over to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/components/"}),"components section")," and use the guarantee\nfilters."))}u.isMDXComponent=!0}}]);