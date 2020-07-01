(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1035:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(1),r=(a(0),a(1130)),i=a(1167);const o={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"New Dedupe Transform",description:"Shed duplicate logs",author_github:"https://github.com/binarylogic",pr_numbers:[1848],release:"0.9.0",hide_on_release_notes:!1,tags:["type: new feature","domain: sources","source: vector"]},s={date:"2020-03-10T00:00:00.000Z",description:"Shed duplicate logs",permalink:"/highlights/2020-03-10-dedupe-transform",readingTime:"1 min read",source:"@site/highlights/2020-03-10-dedupe-transform.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: sources",permalink:"/highlights/tags/domain-sources"},{label:"source: vector",permalink:"/highlights/tags/source-vector"}],title:"New Dedupe Transform",truncated:!1,prevItem:{title:"The Vector Source & Sink Support TLS",permalink:"/highlights/2020-03-11-vector-sink-tls"},nextItem:{title:"Compression Now Available In The Kafka Sink",permalink:"/highlights/2020-03-09-kafka-sink-compression"}},l=[{value:"Get Started",id:"get-started",children:[]}],c={rightToc:l};function d({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For certain use cases log deduplication can be a useful tool. Not only does\nthis promote your data integrity, but it can help protect against upstream\nmistakes that accidentally doplicate logs. This mistake can easily double\n(or more!) your log volume. To protect against this you can use our new\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/dedupe/"}),Object(r.b)("inlineCode",{parentName:"a"},"dedupe")," transform"),"."),Object(r.b)("h2",{id:"get-started"},"Get Started"),Object(r.b)("p",null,"Simply add the transform to your pipeline:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform_id]\n  # General\n  type = "dedupe" # required\n  inputs = ["my-source-id"] # required\n\n  # Fields\n  fields.match = ["timestamp", "host", "message"] # optional, default\n')),Object(r.b)(i.a,{mdxType:"CodeExplanation"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"fields.match")," option lets you control which fields are compared to determine if events are equal."))))}d.isMDXComponent=!0}}]);