(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{834:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n(1),l=n(6),i=(n(0),n(927)),r=n(944),s=n(945),o=n(938),u=n.n(o),c=n(943),m=n(942),b={last_modified_on:"2020-05-25",delivery_guarantee:"at_least_once",component_title:"InfluxDB Logs",description:"The Vector `influxdb_logs` sink batches `log` events to InfluxDB using v1 or v2 HTTP API.",event_types:["log"],function_category:"transmit",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+influxdb_logs%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'influxdb_logs|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/influxdb/logs.rs",status:"beta",title:"InfluxDB Logs Sink",unsupported_operating_systems:[]},d={id:"reference/sinks/influxdb_logs",title:"InfluxDB Logs Sink",description:"The Vector `influxdb_logs` sink batches `log` events to InfluxDB using v1 or v2 HTTP API.",source:"@site/docs/reference/sinks/influxdb_logs.md",permalink:"/docs/reference/sinks/influxdb_logs",sidebar_label:'influxdb_logs|["log"]'},p=[{value:"Configuration",id:"configuration",children:[{value:"batch",id:"batch",children:[]},{value:"bucket",id:"bucket",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"consistency",id:"consistency",children:[]},{value:"database",id:"database",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"endpoint",id:"endpoint",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"namespace",id:"namespace",children:[]},{value:"org",id:"org",children:[]},{value:"password",id:"password",children:[]},{value:"request",id:"request",children:[]},{value:"retention_policy_name",id:"retention_policy_name",children:[]},{value:"tags",id:"tags",children:[]},{value:"token",id:"token",children:[]},{value:"username",id:"username",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Buffers &amp; Batches",id:"buffers--batches",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Mapping Log Event into Line Protocol",id:"mapping-log-event-into-line-protocol",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]}]}],h={rightToc:p};function f(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"influxdb_logs")," sink\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ","[",Object(i.b)("inlineCode",{parentName:"p"},"log"),"][docs.data-model.log]"," events to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.influxdata.com/products/influxdb-overview/"}),"InfluxDB")," using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.influxdata.com/influxdb/latest/tools/api/#write-http-endpoint"}),"v1")," or\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docs.influxdata.com/v2.0/api/#tag/Write"}),"v2")," HTTP API."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(c.a,{block:!0,defaultValue:"v1",values:[{label:"v1",value:"v1"},{label:"v1 (adv)",value:"v1-adv"},{label:"v2",value:"v2"},{label:"v2 (adv)",value:"v2-adv"}],mdxType:"Tabs"},Object(i.b)(m.a,{value:"v1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "influxdb_logs" # required\n  inputs = ["my-source-or-transform-id"] # required\n  endpoint = "https://us-west-2-1.aws.cloud1.influxdata.com" # required\n  namespace = "service" # required\n  database = "vector-database" # required\n  healthcheck = true # optional, default\n\n  # Auth\n  password = "${INFLUXDB_PASSWORD}" # optional, no default\n  username = "todd" # optional, no default\n\n  # Persistence\n  consistency = "any" # optional, no default\n  retention_policy_name = "autogen" # optional, no default\n'))),Object(i.b)(m.a,{value:"v1-adv",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "influxdb_logs" # required\n  inputs = ["my-source-or-transform-id"] # required\n  endpoint = "https://us-west-2-1.aws.cloud1.influxdata.com" # required\n  namespace = "service" # required\n  database = "vector-database" # required\n  healthcheck = true # optional, default\n  tags = ["field1", "parent.child_field"] # optional, no default\n\n  # Auth\n  password = "${INFLUXDB_PASSWORD}" # optional, no default\n  username = "todd" # optional, no default\n\n  # Batch\n  batch.max_size = 10490000 # optional, default, bytes\n  batch.timeout_secs = 1 # optional, default, seconds\n\n  # Buffer\n  buffer.max_events = 500 # optional, default, events, relevant when type = "memory"\n  buffer.max_size = 104900000 # required, bytes, required when type = "disk"\n  buffer.type = "memory" # optional, default\n  buffer.when_full = "block" # optional, default\n\n  # Encoding\n  encoding.except_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.only_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.timestamp_format = "rfc3339" # optional, default\n\n  # Persistence\n  consistency = "any" # optional, no default\n  retention_policy_name = "autogen" # optional, no default\n\n  # Request\n  request.in_flight_limit = 5 # optional, default, requests\n  request.rate_limit_duration_secs = 1 # optional, default, seconds\n  request.rate_limit_num = 5 # optional, default\n  request.retry_attempts = -1 # optional, default\n  request.retry_initial_backoff_secs = 1 # optional, default, seconds\n  request.retry_max_duration_secs = 10 # optional, default, seconds\n  request.timeout_secs = 60 # optional, default, seconds\n'))),Object(i.b)(m.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "influxdb_logs" # required\n  inputs = ["my-source-or-transform-id"] # required\n  endpoint = "https://us-west-2-1.aws.cloud2.influxdata.com" # required\n  namespace = "service" # required\n  bucket = "vector-bucket" # required\n  healthcheck = true # optional, default\n\n  # Auth\n  org = "my-org" # required\n  token = "${INFLUXDB_TOKEN}" # required\n'))),Object(i.b)(m.a,{value:"v2-adv",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sinks.my_sink_id]\n  # General\n  type = "influxdb_logs" # required\n  inputs = ["my-source-or-transform-id"] # required\n  endpoint = "https://us-west-2-1.aws.cloud2.influxdata.com" # required\n  namespace = "service" # required\n  bucket = "vector-bucket" # required\n  healthcheck = true # optional, default\n  tags = ["field1", "parent.child_field"] # optional, no default\n\n  # Auth\n  org = "my-org" # required\n  token = "${INFLUXDB_TOKEN}" # required\n\n  # Batch\n  batch.max_size = 10490000 # optional, default, bytes\n  batch.timeout_secs = 1 # optional, default, seconds\n\n  # Buffer\n  buffer.max_events = 500 # optional, default, events, relevant when type = "memory"\n  buffer.max_size = 104900000 # required, bytes, required when type = "disk"\n  buffer.type = "memory" # optional, default\n  buffer.when_full = "block" # optional, default\n\n  # Encoding\n  encoding.except_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.only_fields = ["timestamp", "message", "host"] # optional, no default\n  encoding.timestamp_format = "rfc3339" # optional, default\n\n  # Request\n  request.in_flight_limit = 5 # optional, default, requests\n  request.rate_limit_duration_secs = 1 # optional, default, seconds\n  request.rate_limit_num = 5 # optional, default\n  request.retry_attempts = -1 # optional, default\n  request.retry_initial_backoff_secs = 1 # optional, default, seconds\n  request.retry_max_duration_secs = 10 # optional, default, seconds\n  request.timeout_secs = 60 # optional, default, seconds\n')))),Object(i.b)(r.a,{filters:!0,mdxType:"Fields"},Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:["v1","v2"],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(r.a,{filters:!1,mdxType:"Fields"},Object(i.b)(s.a,{common:!0,defaultValue:1049e4,enumValues:null,examples:[1049e4],groups:["v1","v2"],name:"max_size",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"bytes",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"max_size"},"max_size"),Object(i.b)("p",null,"The maximum size of a batch, in bytes, before it is flushed.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(s.a,{common:!0,defaultValue:1,enumValues:null,examples:[1],groups:["v1","v2"],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["vector-bucket","4d2225e4d3d49f75"],groups:["v2"],name:"bucket",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"bucket"},"bucket"),Object(i.b)("p",null,"The destination bucket for writes into InfluxDB 2.")),Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:["v1","v2"],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"buffer"},"buffer"),Object(i.b)("p",null,"Configures the sink specific buffer behavior."),Object(i.b)(r.a,{filters:!1,mdxType:"Fields"},Object(i.b)(s.a,{common:!0,defaultValue:500,enumValues:null,examples:[500],groups:["v1","v2"],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"uint",unit:"events",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum number of ","[events][docs.data-model]"," allowed in the buffer.")),Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],groups:["v1","v2"],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!0,templateable:!1,type:"uint",unit:"bytes",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"max_size-1"},"max_size"),Object(i.b)("p",null,"The maximum size of the buffer on the disk.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(s.a,{common:!0,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant, but less durable. Data will be lost if Vector is restarted forcefully.",disk:"Stores the sink's buffer on disk. This is less performant, but durable. Data will not be lost between restarts."},examples:["memory","disk"],groups:["v1","v2"],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"type"},"type"),Object(i.b)("p",null,"The buffer's type and storage mechanism.")),Object(i.b)(s.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],groups:["v1","v2"],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"when_full"},"when_full"),Object(i.b)("p",null,"The behavior when the buffer becomes full.")))),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["any","one","quorum","all"],groups:["v1"],name:"consistency",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"consistency"},"consistency"),Object(i.b)("p",null,"Sets the write consistency for the point for InfluxDB 1.")),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["vector-database","iot-store"],groups:["v1"],name:"database",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"Sets the target database for the write into InfluxDB 1.")),Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:["v1","v2"],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"Configures the encoding specific sink behavior."),Object(i.b)(r.a,{filters:!1,mdxType:"Fields"},Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:["v1","v2"],name:"except_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"except_fields"},"except_fields"),Object(i.b)("p",null,"Prevent the sink from encoding the specified labels.")),Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[["timestamp","message","host"]],groups:["v1","v2"],name:"only_fields",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"only_fields"},"only_fields"),Object(i.b)("p",null,"Limit the sink to only encoding the specified labels.")),Object(i.b)(s.a,{common:!1,defaultValue:"rfc3339",enumValues:{rfc3339:"Format as an RFC3339 string",unix:"Format as a unix timestamp, can be parsed as a Clickhouse DateTime"},examples:["rfc3339","unix"],groups:["v1","v2"],name:"timestamp_format",path:"encoding",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"timestamp_format"},"timestamp_format"),Object(i.b)("p",null,"How to format event timestamps.")))),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["http://localhost:8086/","https://us-west-2-1.aws.cloud1.influxdata.com","https://us-west-2-1.aws.cloud2.influxdata.com"],groups:["v1","v2"],name:"endpoint",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"endpoint"},"endpoint"),Object(i.b)("p",null,"InfluxDB endpoint to send metrics to.")),Object(i.b)(s.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:["v1","v2"],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["service"],groups:["v1","v2"],name:"namespace",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"namespace"},"namespace"),Object(i.b)("p",null,"A prefix that will be added to all metric names.")),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["my-org","33f2cff0a28e5b63"],groups:["v2"],name:"org",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"org"},"org"),Object(i.b)("p",null,"Specifies the destination organization for writes into InfluxDB 2.")),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["${INFLUXDB_PASSWORD}","influxdb4ever"],groups:["v1"],name:"password",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"Sets the password for authentication if you\u2019ve enabled authentication for the\nwrite into InfluxDB 1.")),Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:["v1","v2"],name:"request",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"request"},"request"),Object(i.b)("p",null,"Configures the sink request behavior."),Object(i.b)(r.a,{filters:!1,mdxType:"Fields"},Object(i.b)(s.a,{common:!0,defaultValue:5,enumValues:null,examples:[5],groups:["v1","v2"],name:"in_flight_limit",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"requests",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"in_flight_limit"},"in_flight_limit"),Object(i.b)("p",null,"The maximum number of in-flight requests allowed at any given time.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(s.a,{common:!0,defaultValue:1,enumValues:null,examples:[1],groups:["v1","v2"],name:"rate_limit_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_duration_secs"},"rate_limit_duration_secs"),Object(i.b)("p",null,"The time window, in seconds, used for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rate_limit_num"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_num"))," option.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(s.a,{common:!0,defaultValue:5,enumValues:null,examples:[5],groups:["v1","v2"],name:"rate_limit_num",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_num"},"rate_limit_num"),Object(i.b)("p",null,"The maximum number of requests allowed within the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs")),"\ntime window.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(s.a,{common:!1,defaultValue:-1,enumValues:null,examples:[-1],groups:["v1","v2"],name:"retry_attempts",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"retry_attempts"},"retry_attempts"),Object(i.b)("p",null,"The maximum number of retries to make for failed requests. The default, for all\nintents and purposes, represents an infinite number of retries.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(i.b)(s.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],groups:["v1","v2"],name:"retry_initial_backoff_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"retry_initial_backoff_secs"},"retry_initial_backoff_secs"),Object(i.b)("p",null,"The amount of time to wait before attempting the first retry for a failed\nrequest. Once, the first retry has failed the fibonacci sequence will be used\nto select future backoffs.")),Object(i.b)(s.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],groups:["v1","v2"],name:"retry_max_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"retry_max_duration_secs"},"retry_max_duration_secs"),Object(i.b)("p",null,"The maximum amount of time, in seconds, to wait between retries.")),Object(i.b)(s.a,{common:!0,defaultValue:60,enumValues:null,examples:[60],groups:["v1","v2"],name:"timeout_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:"seconds",warnings:[],mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs-1"},"timeout_secs"),Object(i.b)("p",null,"The maximum time a request can take before being aborted. It is highly\nrecommended that you do not lower value below the service's internal timeout,\nas this could create orphaned requests, pile on retries, and result in\nduplicate data downstream.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["autogen","one_day_only"],groups:["v1"],name:"retention_policy_name",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"retention_policy_name"},"retention_policy_name"),Object(i.b)("p",null,"Sets the target retention policy for the write into InfluxDB 1.")),Object(i.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[["field1","parent.child_field"]],groups:["v1","v2"],name:"tags",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"tags"},"tags"),Object(i.b)("p",null,"A set of additional fields that will be attached to each LineProtocol as a tag.\nNote: If the set of tag values has high cardinality this also increase\ncardinality in InfluxDB.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mapping-log-event-into-line-protocol"}),"Mapping Log Event into Line Protocol")," for more info.")),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["${INFLUXDB_TOKEN}","ef8d5de700e7989468166c40fc8a0ccd"],groups:["v2"],name:"token",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"token"},"token"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docs.influxdata.com/v2.0/security/tokens/"}),"Authentication token")," for InfluxDB 2.")),Object(i.b)(s.a,{common:!0,defaultValue:null,enumValues:null,examples:["todd","vector-source"],groups:["v1"],name:"username",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(i.b)("h3",{id:"username"},"username"),Object(i.b)("p",null,"Sets the username for authentication if you\u2019ve enabled authentication for the\nwrite into InfluxDB 1."))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"buffers--batches"},"Buffers & Batches"),Object(i.b)(u.a,{src:"/img/buffers-and-batches-serial.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"influxdb_logs")," sink buffers & batches data as\nshown in the diagram above. You'll notice that Vector treats these concepts\ndifferently, instead of treating them as global concepts, Vector treats them\nas sink specific concepts. This isolates sinks, ensuring services disruptions\nare contained and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/guarantees/"}),"delivery guarantees")," are honored."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Batches")," are flushed when 1 of 2 conditions are met:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The batch age meets or exceeds the configured ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#timeout_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"timeout_secs")),"."),Object(i.b)("li",{parentName:"ol"},"The batch size meets or exceeds the configured ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#max_size"}),Object(i.b)("inlineCode",{parentName:"a"},"max_size")),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Buffers")," are controlled via the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#buffer"}),Object(i.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"mapping-log-event-into-line-protocol"},"Mapping Log Event into Line Protocol"),Object(i.b)("p",null,"InfluxDB uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docs.influxdata.com/v2.0/reference/syntax/line-protocol/"}),"line protocol")," to write data points. It is a text-based format that provides the measurement, tag set, field set, and timestamp of a data point."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"Log Event")," event contains an arbitrary set of fields (key/value pairs) that describe the event."),Object(i.b)("p",null,"The following matrix outlines how Log Event fields are mapped into InfluxDB Line Protocol:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Line Protocol"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"host"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tag")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"message"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"field")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"source_type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tag")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"timestamp"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"timestamp")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[custom-key]"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"field")))),Object(i.b)("p",null,"The default behaviour could be overridden by a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#tags"}),Object(i.b)("inlineCode",{parentName:"a"},"tags"))," configuration."),Object(i.b)("h4",{id:"mapping-example"},"Mapping example"),Object(i.b)("p",null,"The following example shows how is ",Object(i.b)("inlineCode",{parentName:"p"},"Log Event")," mapped into ",Object(i.b)("inlineCode",{parentName:"p"},"Line Protocol"),":"),Object(i.b)("h5",{id:"log-event"},"Log Event"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "host": "my.host.com",\n  "message": "<13>Feb 13 20:07:26 74794bfb6795 root[8539]: i am foobar",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "custom_field": "custom_value"\n}\n')),Object(i.b)("h5",{id:"line-protocol"},"Line Protocol"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-influxdb_line_protocol"}),'ns.vector,host=my.host.com,metric_type=logs custom_field="custom_value",message="<13>Feb 13 20:07:26 74794bfb6795 root[8539]: i am foobar" 1572642947000000000\n')),Object(i.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(i.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#in_flight_limit"}),Object(i.b)("inlineCode",{parentName:"a"},"in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(i.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+influxdb_logs"}),"opening an issue"),"."),Object(i.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(i.b)("p",null,"Vector will retry failed requests (status == ",Object(i.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(i.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(i.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#retry_attempts"}),Object(i.b)("inlineCode",{parentName:"a"},"retry_attempts"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"retry_backoff_secs")," options."))}f.isMDXComponent=!0},939:function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(937);t.a=function(e){return e.text,l.a.createElement("section",{className:"empty"})}},941:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),i=n(950),r=n.n(i);t.a=function({currentState:e,humanize:t,icon:n,name:a,setState:i,values:s}){if(0==s.size)return null;let o=Array.from(s);return l.a.createElement(l.a.Fragment,null,o.map((s,o)=>{let u="string"==typeof s&&t?r()(s):s;return l.a.createElement("label",{key:o},l.a.createElement("input",{checked:e.has(s),name:a,onChange:t=>{let n=new Set(e);t.currentTarget.checked?n.add(s):n.delete(s),i(n)},type:"checkbox"}),u&&l.a.createElement(l.a.Fragment,null,n?l.a.createElement("i",{className:"feather icon-"+n}):""," ",u))}))}},944:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),i=n(941),r=n(939),s=n(948),o=n.n(s);t.a=function({children:e,filters:t}){const[n,s]=Object(a.useState)(!1),[u,c]=Object(a.useState)(new Set),[m,b]=Object(a.useState)(!1),[d,p]=Object(a.useState)(null);let h=[];e&&(h=Array.isArray(e)?e:[e]);let f=h.some(e=>e.props.common),g=o()(h).flatMap(e=>e.props.groups).uniq().value(),O=h.some(e=>e.props.required),j=h;return n&&(j=j.filter(e=>e.props.common)),u.size>0&&(j=j.filter(e=>Array.from(u).every(t=>e.props.groups.includes(t)))),m&&(j=j.filter(e=>e.props.required)),d&&(j=j.filter(e=>e.props.name.toLowerCase().includes(d.toLowerCase()))),l.a.createElement(l.a.Fragment,null,h.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"search"},l.a.createElement("span",{className:"search--result-count"},j.length," items"),l.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:e=>p(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"filter--choices"},l.a.createElement(i.a,{values:g,currentState:u,setState:c}),f&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:n}),"common"),O&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>b(e.currentTarget.checked),checked:m}),"required")))):null,!Array.isArray(j)||j.length>0?l.a.createElement("ul",{className:"connected-list"},j):l.a.createElement(r.a,{text:"no components found"}))}},945:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),i=n(936),r=n.n(i),s=(n(927),n(951));function o(e){return e.includes(".")?'"'+e+'"':e}function u(e){return"string"==typeof e&&e.includes("\n")?`"""\n${e}\n"""`:JSON.stringify(e)}function c(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?`${o(t.name)} = ${u(t.value)}`:`${o(Object.keys(t)[0])} = ${u(Object.values(t)[0])}`:e?`${o(e)} = ${u(t)}`:u(t);var n}function m({values:e}){let t=[];if(Array.isArray(e))for(var n in e){let a=e[n];t.push(l.a.createElement("code",{key:a},u(a))),t.push(" ")}else for(var a in e)t.push(l.a.createElement("code",{key:a,className:"with-info-icon",title:e[a]},u(a))),t.push(" ");return t}function b({name:e,path:t,values:n}){let a="";return n.forEach((function(n){t&&(a+=t+"."),a+=c(e,n)+"\n"})),l.a.createElement("div",null,l.a.createElement(s.a,{className:"language-toml"},a))}function d({unit:e,value:t}){let n="";return e&&(n=l.a.createElement(l.a.Fragment,null," (",e,")")),l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,u(t)),n)}function p({value:e}){let t=Object.keys(e)[0],n=Object.values(e)[0];return""==n&&(n=null),l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:"#"+t},t))," ","= ",l.a.createElement("code",null,u(n)))}function h({defaultValue:e,enumValues:t,examples:n,groups:i,name:r,path:s,relevantWhen:o,required:u,unit:c,warnings:h}){const[f,g]=Object(a.useState)(!1);return l.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((e,t)=>l.a.createElement("li",{key:t,className:"warning"},l.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)),o&&l.a.createElement("li",null,"Only ",u?"required":"relevant"," when:"," ",l.a.createElement(p,{value:o})),void 0!==e?null!==e?l.a.createElement("li",null,"Default: ",l.a.createElement(d,{unit:c,value:e})):l.a.createElement("li",null,"No default"):null,t&&l.a.createElement("li",null,"Enum, must be one of: ",l.a.createElement(m,{values:t})),(n.length>1||n[0]!=e)&&l.a.createElement("li",null,l.a.createElement("div",{className:"show-more",onClick:()=>g(!f)},f?"Hide examples":"View examples"),f&&l.a.createElement(b,{name:r,path:s,values:n})))}t.a=function({children:e,common:t,defaultValue:n,enumValues:i,examples:s,groups:o,name:u,path:c,relevantWhen:m,required:b,templateable:d,type:p,unit:f,warnings:g}){const[O,j]=Object(a.useState)(!1);let v=e;return O&&(v=v.filter(e=>"p"!=e.props.originalType)),l.a.createElement("li",{className:r()({"field-required":b,"field-collapsed":O}),required:b},l.a.createElement("div",{className:"badges"},d&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),p&&l.a.createElement("span",{className:"badge badge--secondary"},p,f&&l.a.createElement(l.a.Fragment,null," (",f,")")),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),t&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),b?l.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),v,!O&&"table"!=p&&l.a.createElement(h,{defaultValue:n,enumValues:i,examples:s,groups:o,name:u,path:c,relevantWhen:m,required:b,unit:f,warnings:g}))}}}]);