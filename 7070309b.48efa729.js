(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{598:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return c}));var s=n(1),i=n(9),o=(n(0),n(1118)),a={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"The `splunk_hec` source's `host_field` option has been renamed to `host_key`",description:"This change ensures that the `host_key` option is consistent across all sources",author_github:"https://github.com/binarylogic",pr_numbers:[2037],release:"0.9.0",hide_on_release_notes:!0,tags:["type: breaking change","domain: sinks","sink: splunk_hec"]},r={date:"2020-03-12T00:00:00.000Z",description:"This change ensures that the `host_key` option is consistent across all sources",permalink:"/highlights/2020-03-12-rename-host_field-to-host_key",readingTime:"1 min read",source:"@site/highlights/2020-03-12-rename-host_field-to-host_key.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"},{label:"sink: splunk_hec",permalink:"/highlights/tags/sink-splunk-hec"}],title:"The `splunk_hec` source's `host_field` option has been renamed to `host_key`",truncated:!1,prevItem:{title:"New Papertrail Sink",permalink:"/highlights/2020-03-12-papertrail-sink"},nextItem:{title:"The Vector Source & Sink Support TLS",permalink:"/highlights/2020-03-11-vector-sink-tls"}},h=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],l={rightToc:h};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We've renamed the ","[",Object(o.b)("inlineCode",{parentName:"p"},"splunk_hec")," source's]"," ",Object(o.b)("inlineCode",{parentName:"p"},"host_field")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"host_key"),".\nThis ensures that the ",Object(o.b)("inlineCode",{parentName:"p"},"host_key")," option is consistent across all sources."),Object(o.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sources.splunk]\n   type = "splunk_hec"\n-  host_field = "host"\n+  host_key = "host"\n')))}c.isMDXComponent=!0}}]);