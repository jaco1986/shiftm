(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{172:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return l})),n.d(i,"metadata",(function(){return o})),n.d(i,"rightToc",(function(){return d})),n.d(i,"default",(function(){return c}));var t=n(1),s=n(9),a=(n(0),n(1118)),l={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"The `splunk_hec` sink does not index fields by default",description:"This gives you full control over which fields are indexed",author_github:"https://github.com/binarylogic",pr_numbers:[1537],release:"0.7.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: sinks","sink: splunk_hec"]},o={date:"2020-01-20T00:00:00.000Z",description:"This gives you full control over which fields are indexed",permalink:"/highlights/2020-01-20-splunk-hec-specify-indexed-fields",readingTime:"1 min read",source:"@site/highlights/2020-01-20-splunk-hec-specify-indexed-fields.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"},{label:"sink: splunk_hec",permalink:"/highlights/tags/sink-splunk-hec"}],title:"The `splunk_hec` sink does not index fields by default",truncated:!1,prevItem:{title:"AWS specific options have been dropped in the Elasticsearch sink",permalink:"/highlights/2020-02-05-drop-aws-options"},nextItem:{title:"Rename `line` field to `message` in `splunk_hec` source",permalink:"/highlights/2020-01-14-rename-line-field-to-message"}},d=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],r={rightToc:d};function c(e){var i=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},r,n,{components:i,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There is no longer a distinction within Vector between explicit and implicit\nevent fields. All fields are now implicit and therefore the ",Object(a.b)("inlineCode",{parentName:"p"},"splunk_hec")," sink\nwill ",Object(a.b)("em",{parentName:"p"},"not")," index any fields by default."),Object(a.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(a.b)("p",null,"In order to mark desired fields as indexed you can use the optional\nconfiguration option ",Object(a.b)("inlineCode",{parentName:"p"},"indexed_fields"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.my_sink_id]\n   type = "splunk_hec"\n   inputs = ["my-source-id"]\n+  indexed_fields = ["foo", "bar"]\n')))}c.isMDXComponent=!0}}]);