(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{493:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),o=n(9),i=(n(0),n(1128)),a={last_modified_on:"2020-04-14",$schema:"/.meta/.schemas/highlights.json",title:"Improved Multiline Support In The File Source",description:"Merge multiple lines together based on rules",author_github:"https://github.com/binarylogic",pr_numbers:[1852],release:"0.8.0",hide_on_release_notes:!1,tags:["type: enhancement","domain: sources","source: file"]},s={date:"2020-02-21T00:00:00.000Z",description:"Merge multiple lines together based on rules",permalink:"/highlights/2020-02-21-file-source-multiline-support",readingTime:"1 min read",source:"@site/highlights/2020-02-21-file-source-multiline-support.md",tags:[{label:"type: enhancement",permalink:"/highlights/tags/type-enhancement"},{label:"domain: sources",permalink:"/highlights/tags/domain-sources"},{label:"source: file",permalink:"/highlights/tags/source-file"}],title:"Improved Multiline Support In The File Source",truncated:!1,prevItem:{title:"New Rename Fields Transform",permalink:"/highlights/2020-02-24-rename-fields-transform"},nextItem:{title:"Lots of New Sinks!",permalink:"/highlights/2020-02-20-new-sinks"}},l=[],c={rightToc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One of the biggest frustrations we've heard from users in this space is the\ninability to merge lines together. Such a simple task can be incredibly\ncomplex and hard. Fear not! We plan to add first-class support for solving\nthis problem."),Object(i.b)("p",null,"In addition to the recently added ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/docker/#auto_partial_merge"}),"automatic merging of Docker\nlogs"),", we also added [better multiline\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/file/#multiline"}),"support")," to our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(i.b)("inlineCode",{parentName:"a"},"file")," source"),".\nThese options are very expressive and should solve the vast majority of\nmultiline merging problems."),Object(i.b)("p",null,"For example. Given the following lines:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"foobar.rb:6:in `/': divided by 0 (ZeroDivisionError)\n  from foobar.rb:6:in `bar'\n  from foobar.rb:2:in `foo'\n  from foobar.rb:9:in `<main>'\n")),Object(i.b)("p",null,"You can merge them with the following config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_file_source]\n  type = "file"\n  # ...\n\n  [sources.my_file_source.multiline]\n    start_pattern = "^[^\\\\s]"\n    mode = "continue_through"\n    condition_pattern = "^[\\\\s]+from"\n    timeout_ms = 1000\n')),Object(i.b)("p",null,"And if this doesn't do it, you can always fallback\nto our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/"}),Object(i.b)("inlineCode",{parentName:"a"},"lua")," transform"),"."))}m.isMDXComponent=!0}}]);