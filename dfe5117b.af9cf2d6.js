(window.webpackJsonp=window.webpackJsonp||[]).push([[856],{1015:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return r})),n.d(i,"metadata",(function(){return g})),n.d(i,"rightToc",(function(){return c})),n.d(i,"default",(function(){return l}));var t=n(1),a=n(9),s=(n(0),n(1139)),r={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"The `gcp_stackdriver_logging` sink has been renamed to `gcp_stackdriver_logs`",description:"This brings the sink naming inline with consistent naming pattern",author_github:"https://github.com/binarylogic",pr_numbers:[2121],release:"0.9.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: sinks","sink: splunk_hec"]},g={date:"2020-03-23T00:00:00.000Z",description:"This brings the sink naming inline with consistent naming pattern",permalink:"/highlights/2020-03-23-rename-gcp_stackdriver_logging-sink-to-gcp_stackdriver_logs",readingTime:"1 min read",source:"@site/highlights/2020-03-23-rename-gcp_stackdriver_logging-sink-to-gcp_stackdriver_logs.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"},{label:"sink: splunk_hec",permalink:"/highlights/tags/sink-splunk-hec"}],title:"The `gcp_stackdriver_logging` sink has been renamed to `gcp_stackdriver_logs`",truncated:!1,prevItem:{title:"New Datadog Logs Sink",permalink:"/highlights/2020-03-23-datadog-logs-sink"},nextItem:{title:"New Apache Pulsar Sink",permalink:"/highlights/2020-03-19-apache-pulsar-sink"}},c=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],o={rightToc:c};function l(e){var i=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},o,n,{components:i,mdxType:"MDXLayout"}),Object(s.b)("p",null,"We've renamed the ",Object(s.b)("inlineCode",{parentName:"p"},"gcp_stackdriver_logging")," sink to ",Object(s.b)("inlineCode",{parentName:"p"},"gcp_stackdriver_logs")," to\nbring it inline with consistent naming patterns. Migration is easy."),Object(s.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.stackdriver]\n-  type = "gcp_stackdriver_logging"\n+  type = "gcp_stackdriver_logs"\n')))}l.isMDXComponent=!0}}]);