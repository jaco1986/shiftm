(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{972:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return n})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return p}));var r=o(1),s=o(9),a=(o(0),o(1139)),n={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Improved Syslog Parsing",description:"Best effort parsing support for Syslog",author_github:"https://github.com/binarylogic",pr_numbers:[1757],release:"0.8.0",hide_on_release_notes:!0,tags:["type: new feature","domain: sources","source: syslog"]},i={date:"2020-02-11T00:00:00.000Z",description:"Best effort parsing support for Syslog",permalink:"/highlights/2020-02-11-improved-syslog-parsing",readingTime:"1 min read",source:"@site/highlights/2020-02-11-improved-syslog-parsing.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: sources",permalink:"/highlights/tags/domain-sources"},{label:"source: syslog",permalink:"/highlights/tags/source-syslog"}],title:"Improved Syslog Parsing",truncated:!1,prevItem:{title:"Introducing Vector's Global Log Schema",permalink:"/highlights/2020-02-14-global-log-schema"},nextItem:{title:"Support For Multiple Config Files",permalink:"/highlights/2020-02-07-multi-config-files"}},l=[],c={rightToc:l};function p(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Anyone that dealth with Syslog knows that the format specification is a \"goal\".\nIt's very common for formats to deviate slightly. To account for this we've\nupdated our Syslog parsing to follow the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3164"}),"RFC 3164"),",\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc5424"}),"RFC 5424"),", and other common formats. With these changes\nVector is very likely to parse a Syslog format, or anything like it. And, as\nalways, if Vector's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(a.b)("inlineCode",{parentName:"a"},"syslog")," source")," fails to parse your\nformat you can always use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(a.b)("inlineCode",{parentName:"a"},"socket")," source")," and the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/transforms/regex_parser/"}),Object(a.b)("inlineCode",{parentName:"a"},"regex_parser")," transform")," to roll your own\ncollection parsing pipeline."))}p.isMDXComponent=!0}}]);