(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{249:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return s})),n.d(i,"metadata",(function(){return r})),n.d(i,"rightToc",(function(){return g})),n.d(i,"default",(function(){return o}));var t=n(1),a=(n(0),n(1117));const s={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"The `gcp_stackdriver_logging` sink has been renamed to `gcp_stackdriver_logs`",description:"This brings the sink naming inline with consistent naming pattern",author_github:"https://github.com/binarylogic",pr_numbers:[2121],release:"0.9.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: sinks","sink: splunk_hec"]},r={date:"2020-03-23T00:00:00.000Z",description:"This brings the sink naming inline with consistent naming pattern",permalink:"/highlights/2020-03-23-rename-gcp_stackdriver_logging-sink-to-gcp_stackdriver_logs",readingTime:"1 min read",source:"@site/highlights/2020-03-23-rename-gcp_stackdriver_logging-sink-to-gcp_stackdriver_logs.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"},{label:"sink: splunk_hec",permalink:"/highlights/tags/sink-splunk-hec"}],title:"The `gcp_stackdriver_logging` sink has been renamed to `gcp_stackdriver_logs`",truncated:!1,prevItem:{title:"New Datadog Logs Sink",permalink:"/highlights/2020-03-23-datadog-logs-sink"},nextItem:{title:"New Apache Pulsar Sink",permalink:"/highlights/2020-03-19-apache-pulsar-sink"}},g=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],c={rightToc:g};function o({components:e,...i}){return Object(a.b)("wrapper",Object(t.a)({},c,i,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We've renamed the ",Object(a.b)("inlineCode",{parentName:"p"},"gcp_stackdriver_logging")," sink to ",Object(a.b)("inlineCode",{parentName:"p"},"gcp_stackdriver_logs")," to\nbring it inline with consistent naming patterns. Migration is easy."),Object(a.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.stackdriver]\n-  type = "gcp_stackdriver_logging"\n+  type = "gcp_stackdriver_logs"\n')))}o.isMDXComponent=!0}}]);