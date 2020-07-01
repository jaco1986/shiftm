(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{443:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return c}));var n=i(1),o=(i(0),i(1130));const a={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Automatically merge partial Docker events",description:"Docker splits long messages by default, and now Vector merges them back for you",author_github:"https://github.com/binarylogic",pr_numbers:[1457],release:"0.8.0",hide_on_release_notes:!1,tags:["type: enhancement","domain: sources","source: docker","platform: docker"]},r={date:"2020-02-05T00:00:00.000Z",description:"Docker splits long messages by default, and now Vector merges them back for you",permalink:"/highlights/2020-02-05-merge-partial-docker-events",readingTime:"1 min read",source:"@site/highlights/2020-02-05-merge-partial-docker-events.md",tags:[{label:"type: enhancement",permalink:"/highlights/tags/type-enhancement"},{label:"domain: sources",permalink:"/highlights/tags/domain-sources"},{label:"source: docker",permalink:"/highlights/tags/source-docker"},{label:"platform: docker",permalink:"/highlights/tags/platform-docker"}],title:"Automatically merge partial Docker events",truncated:!1,prevItem:{title:"AWS specific options have been dropped in the Elasticsearch sink",permalink:"/highlights/2020-02-05-drop-aws-options"},nextItem:{title:"The `splunk_hec` sink does not index fields by default",permalink:"/highlights/2020-01-20-splunk-hec-specify-indexed-fields"}},s=[],l={rightToc:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Anyone that was worked with Docker logs knows how frustrating this problem\ncan be. Docker, by default, splits log messages that exceed 16kb. While 16kb\nseems like a lot, it can easily be exceeded if you're logging rich structured\nevents. This can be a very difficult and frustrating problem to solve with\nother tools (we speak from experience). In this release Vector solves this\nautomatically with a new ",Object(o.b)("inlineCode",{parentName:"p"},"auto_partial_merge")," option in the ",Object(o.b)("inlineCode",{parentName:"p"},"docker")," source."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "docker"\n  auto_partial_merge = true\n')),Object(o.b)("p",null,"We love assimilation and look forward to a future where our individualistic\nhuman personalities can also be merged into a societal hive mind."))}c.isMDXComponent=!0}}]);