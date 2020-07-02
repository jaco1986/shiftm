(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{483:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return r})),n.d(i,"metadata",(function(){return s})),n.d(i,"rightToc",(function(){return o})),n.d(i,"default",(function(){return c}));var t=n(1),a=n(9),l=(n(0),n(1139)),r={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Sink options have been refactored",description:"We've simplified and organized our sink options",author_github:"https://github.com/binarylogic",pr_numbers:[1006,1493,1494,1495],release:"0.7.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: buffers","domain: config","domain: sinks"]},s={date:"2020-01-12T00:00:00.000Z",description:"We've simplified and organized our sink options",permalink:"/highlights/2020-01-12-request-options-refactored",readingTime:"2 min read",source:"@site/highlights/2020-01-12-request-options-refactored.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: buffers",permalink:"/highlights/tags/domain-buffers"},{label:"domain: config",permalink:"/highlights/tags/domain-config"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"}],title:"Sink options have been refactored",truncated:!1,prevItem:{title:"Rename `line` field to `message` in `splunk_hec` source",permalink:"/highlights/2020-01-14-rename-line-field-to-message"},nextItem:{title:"Use comma delim server list in `kafka` sink",permalink:"/highlights/2020-01-12-use-comma-delim-server-list-instead-of-an-array"}},o=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],b={rightToc:o};function c(e){var i=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},b,n,{components:i,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In our preparation for 1.0 we took time to organize and cleanup our\nrequest-based sink options. The specific changes include:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"request_*")," options have been moved under a ",Object(l.b)("inlineCode",{parentName:"li"},"request")," table."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"retry_backoff_secs")," must also be replaced with two new fields\n",Object(l.b)("inlineCode",{parentName:"li"},"retry_initial_backoff_secs")," and ",Object(l.b)("inlineCode",{parentName:"li"},"retry_max_duration_secs"),"."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"batch_*")," options have been moved under a ",Object(l.b)("inlineCode",{parentName:"li"},"batch")," table."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"batch_size")," has been relaced with either ",Object(l.b)("inlineCode",{parentName:"li"},"batch.max_events")," or\n",Object(l.b)("inlineCode",{parentName:"li"},"batch.max_size")," in order to clarify its purpose (capping discrete events or\nbytes respectively)."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"basic_auth")," fields have been moved to a general purpose ",Object(l.b)("inlineCode",{parentName:"li"},"auth")," table\ncomplemented with a ",Object(l.b)("inlineCode",{parentName:"li"},"strategy")," field.")),Object(l.b)("p",null,"These changes effect the following sinks:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"aws_cloudwatch_logs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"aws_kinesis_firehose")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"aws_kinesis_streams")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"aws_s3")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clickhouse")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"datadog_metrics")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"elasticsearch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"gcp_pubsub")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"http")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"new_relic_logs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"splunk_hec"))),Object(l.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.my_sink_id]\n   type = "http"\n   inputs = ["my-source-id"]\n   uri = "https://10.22.212.22:9000/endpoint"\n\n-  batch_size = 1049000\n+  [sinks.my_sink_id.batch]\n+    max_size = 1049000\n\n-  [sinks.my_sink_id.basic_auth]\n+  [sinks.my_sink_id.auth]\n+    strategy = "basic"\n     user = "${USERNAME_ENV_VAR}"\n     password = "${PASSWORD_ENV_VAR}"\n\n-  request_in_flight_limit = 5\n-  request_retry_backoff_secs = 1\n+  [sinks.my_sink_id.request]\n+    in_flight_limit = 5\n+    retry_initial_backoff_secs = 1\n+    retry_max_duration_secs = 10\n')))}c.isMDXComponent=!0}}]);