(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{565:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(1),a=(n(0),n(1130));const r={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"More Condition Predicates",description:"More options when filtering and routing events",author_github:"https://github.com/binarylogic",pr_numbers:[1997,2183,2198],release:"0.9.0",hide_on_release_notes:!0,tags:["type: enhancement","domain: config","domain: transforms","transform: filter","transform: swimlanes"]},o={date:"2020-04-01T00:00:00.000Z",description:"More options when filtering and routing events",permalink:"/highlights/2020-04-01-more-condition-predicates",readingTime:"1 min read",source:"@site/highlights/2020-04-01-more-condition-predicates.md",tags:[{label:"type: enhancement",permalink:"/highlights/tags/type-enhancement"},{label:"domain: config",permalink:"/highlights/tags/domain-config"},{label:"domain: transforms",permalink:"/highlights/tags/domain-transforms"},{label:"transform: filter",permalink:"/highlights/tags/transform-filter"},{label:"transform: swimlanes",permalink:"/highlights/tags/transform-swimlanes"}],title:"More Condition Predicates",truncated:!1,prevItem:{title:"The `elasticsearch` sink `compression` option now defaults to `none`",permalink:"/highlights/2020-04-05-default-compression-to-none"},nextItem:{title:"New Filter Transform",permalink:"/highlights/2020-03-31-filter-transform"}},s=[{value:"Example",id:"example",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Vector has a concept "conditions" that are used to qualify events. For example,\nthis is used in Vector\'s ',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/guides/advanced/unit-testing/"}),"unit testing feature"),",\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/transforms/swimlanes/"}),Object(a.b)("inlineCode",{parentName:"a"},"swimlanes")," transform"),", and\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/transforms/filter/"}),Object(a.b)("inlineCode",{parentName:"a"},"filter")," transform"),". This change adds new predicates\nthat enable powerful matching and condition expression. Specifically, the\nfollowing predicates were added:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"begins_with")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"contains")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ends_with")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"is_log")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"is_metric")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"regex"))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"For example, you can filter all messages that contain the ",Object(a.b)("inlineCode",{parentName:"p"},"error")," term with\nthe new ",Object(a.b)("inlineCode",{parentName:"p"},"contains")," predicate:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.errors]\n  type = "filter"\n  condition."message.cotnain" = "error"\n')),Object(a.b)("p",null,"The world is your oyster."))}c.isMDXComponent=!0}}]);