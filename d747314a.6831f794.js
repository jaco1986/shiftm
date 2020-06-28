(window.webpackJsonp=window.webpackJsonp||[]).push([[809],{968:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return a})),i.d(n,"metadata",(function(){return r})),i.d(n,"rightToc",(function(){return l})),i.d(n,"default",(function(){return d}));var t=i(1),o=i(9),s=(i(0),i(1128)),a={last_modified_on:"2020-04-15",$schema:"/.meta/.schemas/highlights.json",title:"Require `encoding` option for console and file sinks",description:"The `encoding` option is now required for these sinks",author_github:"https://github.com/binarylogic",pr_numbers:[1033],release:"0.6.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: sinks","sink: console","sink: file"]},r={date:"2019-10-21T00:00:00.000Z",description:"The `encoding` option is now required for these sinks",permalink:"/highlights/2019-10-21-require-encoding-option-for-console-and-file-sinks",readingTime:"1 min read",source:"@site/highlights/2019-10-21-require-encoding-option-for-console-and-file-sinks.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"},{label:"sink: console",permalink:"/highlights/tags/sink-console"},{label:"sink: file",permalink:"/highlights/tags/sink-file"}],title:"Require `encoding` option for console and file sinks",truncated:!1,prevItem:{title:"ARMv7 & ARM64 Support on Linux",permalink:"/highlights/2019-11-19-arm-support-on-linux"}},l=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],c={rightToc:l};function d(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The dynamic ",Object(s.b)("inlineCode",{parentName:"p"},"encoding")," concept in Vector was confusing users, so we've made\nit required and explicit. Simply add ",Object(s.b)("inlineCode",{parentName:"p"},'encoding = "json"')," to your ",Object(s.b)("inlineCode",{parentName:"p"},"console")," and\n",Object(s.b)("inlineCode",{parentName:"p"},"file")," sinks."),Object(s.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(s.b)("p",null,"Make the following changes in your ",Object(s.b)("inlineCode",{parentName:"p"},"vector.toml")," file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.console]\n   type = "console"\n+  encoding = "json"\n\n [sinks.file]\n   type = "file"\n+  encoding = "json"\n')),Object(s.b)("p",null,"That's it!"))}d.isMDXComponent=!0}}]);