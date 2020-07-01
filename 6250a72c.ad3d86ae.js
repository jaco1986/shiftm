(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{534:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return o})),t.d(i,"metadata",(function(){return s})),t.d(i,"rightToc",(function(){return c})),t.d(i,"default",(function(){return d}));var n=t(1),a=(t(0),t(1117));const o={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Whitelist & Blacklist Fields When Encoding",description:"More control over which fields are included when encoding",author_github:"https://github.com/binarylogic",pr_numbers:[1915],release:"0.9.0",hide_on_release_notes:!0,tags:["type: new feature","domain: sinks"]},s={date:"2020-03-04T00:00:00.000Z",description:"More control over which fields are included when encoding",permalink:"/highlights/2020-03-04-encoding-whitelist-blacklist",readingTime:"1 min read",source:"@site/highlights/2020-03-04-encoding-whitelist-blacklist.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"}],title:"Whitelist & Blacklist Fields When Encoding",truncated:!1,prevItem:{title:"New Encoding Options",permalink:"/highlights/2020-03-04-encoding-only-fields-except-fields"},nextItem:{title:"We've Added A Privacy Policy",permalink:"/highlights/2020-03-03-privacy-policy"}},c=[],l={rightToc:c};function d({components:e,...i}){return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We've added the ability to whitelist and blacklist fields during the encoding\nprocess within ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sinks"),". This is useful if you have metadata fields\nthat you do not want to send downstream. For example, you might have an\n",Object(a.b)("inlineCode",{parentName:"p"},"application_id")," fields that you use for partitioning, but you don't want to\ninclude it inthe actual data since it would be duplicative."),Object(a.b)("p",null,"To use this feature see the new ",Object(a.b)("inlineCode",{parentName:"p"},"encoding")," options for each sink. For example,\nthe ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sinks/clickhouse/#encoding"}),Object(a.b)("inlineCode",{parentName:"a"},"clickhouse")," sink's ",Object(a.b)("inlineCode",{parentName:"a"},"encoding")," option"),"."))}d.isMDXComponent=!0}}]);