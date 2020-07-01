(window.webpackJsonp=window.webpackJsonp||[]).push([[699],{855:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return m}));var a=i(1),n=(i(0),i(1117)),r=i(1154);const o={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"New Tag Cardinality Limit Transform",description:"Protect downstream metrics storages from runaway metrics tags",author_github:"https://github.com/binarylogic",pr_numbers:[1959],release:"0.9.0",hide_on_release_notes:!1,tags:["type: new feature","domain: transforms","transform: tag_cardinality_limit"]},l={date:"2020-03-11T00:00:00.000Z",description:"Protect downstream metrics storages from runaway metrics tags",permalink:"/highlights/2020-03-11-tag-cardinality-limit-transform",readingTime:"1 min read",source:"@site/highlights/2020-03-11-tag-cardinality-limit-transform.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: transforms",permalink:"/highlights/tags/domain-transforms"},{label:"transform: tag_cardinality_limit",permalink:"/highlights/tags/transform-tag-cardinality-limit"}],title:"New Tag Cardinality Limit Transform",truncated:!1,prevItem:{title:"The `splunk_hec` source's `host_field` option has been renamed to `host_key`",permalink:"/highlights/2020-03-12-rename-host_field-to-host_key"},nextItem:{title:"The Vector Source & Sink Support TLS",permalink:"/highlights/2020-03-11-vector-sink-tls"}},s=[{value:"Getting Started",id:"getting-started",children:[]}],c={rightToc:s};function m({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"High cardinality metric tags can severy disrupt downstream metrics storages. To\nprotet against this we built a new\n",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/tag_cardinality_limit/"}),Object(n.b)("inlineCode",{parentName:"a"},"tag_cardinality_limit")," transform"),"."),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("p",null,"Getting started is easy. Simply add this component to your pipeline:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.tag_protection]\n  type = "tag_cardinality_limit"\n  inputs = ["my-source-id"]\n  limit_exceeded_action = "drop_tag"\n  mode = "exact"\n  value_limit = 500\n')),Object(n.b)(r.a,{mdxType:"CodeExplanation"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"limit_exceeded_action")," described the behavior when the ",Object(n.b)("inlineCode",{parentName:"li"},"value_limit")," is reached."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"mode")," enables you to switch between ",Object(n.b)("inlineCode",{parentName:"li"},"exact")," and ",Object(n.b)("inlineCode",{parentName:"li"},"probabilistic")," algorithms to trade performance for memory efficiency."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"value")," limit allows you to select exactly how many unique tag values you're willing to accept."))),Object(n.b)("p",null,"More to come! This feature is part of our ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/timberio/vector/milestone/39"}),"best-in-class operator\nUX")," initiative."))}m.isMDXComponent=!0}}]);