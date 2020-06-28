(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{862:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(1),r=n(9),s=(n(0),n(1128)),i={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"New Swimlanes Transform",description:"Split log streams with ease",author_github:"https://github.com/binarylogic",pr_numbers:[1785],release:"0.8.0",hide_on_release_notes:!1,tags:["type: new feature","domain: transforms","transform: swimlanes"]},o={date:"2020-02-24T00:00:00.000Z",description:"Split log streams with ease",permalink:"/highlights/2020-02-24-swimlanes-transform",readingTime:"1 min read",source:"@site/highlights/2020-02-24-swimlanes-transform.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: transforms",permalink:"/highlights/tags/domain-transforms"},{label:"transform: swimlanes",permalink:"/highlights/tags/transform-swimlanes"}],title:"New Swimlanes Transform",truncated:!1,prevItem:{title:"Log Data Model Changes & Disk Buffers",permalink:"/highlights/2020-02-24-log-data-model-changes"},nextItem:{title:"New Rename Fields Transform",permalink:"/highlights/2020-02-24-rename-fields-transform"}},l=[],m={rightToc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The new ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/swimlanes/"}),Object(s.b)("inlineCode",{parentName:"a"},"swimlanes")," transform")," makes it much easier\nto configure conditional branches of transforms and sinks. For example, you can\neasily create ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/swimlanes/#examples"}),"if/else pipelines"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.lanes]\n  types = "swimlanes"\n\n  [transforms.my_transform_id.lanes.errors]\n    "level.eq" = "error"\n\n  [transforms.my_transform_id.lanes.not_errors]\n    "level.neq" = "error"\n')),Object(s.b)("p",null,"Remember to occasionally let your branches mingle so that they don't completely\nlose touch."))}c.isMDXComponent=!0}}]);