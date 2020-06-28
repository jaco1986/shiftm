(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{397:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(1),s=n(9),r=(n(0),n(1128)),o=n(1172),i=n(1131),c=n(1161),l=n(1160),p={last_modified_on:"2020-04-01",$schema:"/.meta/.schemas/guides.json",title:"Structuring Your Log Data",description:"How to parse log data in Vector",series_position:2,author_github:"https://github.com/Jeffail",tags:["type: tutorial","domain: config"]},u={categories:[{name:"getting-started",title:"Getting Started",description:"Take Vector from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Structuring Your Log Data",description:"How to parse log data in Vector",permalink:"/guides/getting-started/structuring",readingTime:"6 min read",seriesPosition:2,source:"@site/guides/getting-started/structuring.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: config",permalink:"/guides/tags/domain-config"}],title:"Structuring Your Log Data",truncated:!1,prevItem:{title:"Hello World. Your First Vector Pipeline.",permalink:"/guides/getting-started/your-first-pipeline"},nextItem:{title:"Deploying Vector",permalink:"/guides/getting-started/deploying"}},d=[{value:"Tutorial",id:"tutorial",children:[{value:"Setup a basic pipeline",id:"setup-a-basic-pipeline",children:[]},{value:"Add a parsing transform",id:"add-a-parsing-transform",children:[]},{value:"Test it",id:"test-it",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:d};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Structured logs are like cocktails; they're cool because they're complicated.\nIn this guide we'll build a pipeline using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transformations"),"\nthat allows us to send unstructured ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"events")," through it that\nlook like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272\n')),Object(r.b)("p",null,"And have them coming out the other end in a structured format like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "bytes_in":"656",\n  "timestamp":"2019-05-03T13:11:48-04:00",\n  "method":"PUT",\n  "bytes_out":"10272",\n  "host":"172.128.80.109",\n  "status":"406",\n  "user":"Bins5273",\n  "path":"/mesh"\n}\n')),Object(r.b)("h2",{id:"tutorial"},"Tutorial"),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h3",{id:"setup-a-basic-pipeline"},"Setup a basic pipeline"),Object(r.b)("p",null,"In the last guide we simply piped stdin to stdout, I'm not trying to diminish\nyour sense of achievement but that was pretty basic."),Object(r.b)("p",null,"This time we're going to build a config we might use in the real world. It's\ngoing to consume logs over TCP with a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(r.b)("inlineCode",{parentName:"a"},"socket")," source")," and\nwrite them to an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/elasticsearch/"}),Object(r.b)("inlineCode",{parentName:"a"},"elasticsearch")," sink"),"."),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"There's no need to run a local Elasticsearch for this guide as we can write and\neven test our config without connecting to sources or sinks (as you'll see).")),Object(r.b)("p",null,"The basic source to sink version of our pipeline looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.foo]\n  type = "socket"\n  address = "0.0.0.0:9000"\n  mode = "tcp"\n\n[sinks.bar]\n  inputs = ["foo"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n')),Object(r.b)("p",null,"If we were to run it then the raw data we consume over TCP would be captured in\nthe field ",Object(r.b)("inlineCode",{parentName:"p"},"message"),", and the object we'd publish to Elasticsearch would look\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="log event"',title:'"log','event"':!0}),'{"message":"172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272","host":"foo","timestamp":"2019-05-03T13:11:48-04:00"}\n')),Object(r.b)("p",null,"That's hardly structured at all! Let's remedy that by adding our first transform.")),Object(r.b)("li",null,Object(r.b)("h3",{id:"add-a-parsing-transform"},"Add a parsing transform"),Object(r.b)("p",null,"Nothing in this world is ever good enough for you, why should events be any\ndifferent?"),Object(r.b)("p",null,"Vector makes it easy to mutate events into a more (or less) structured format\nwith ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),". Let's parse our logs into a structured\nformat by capturing named regular expression groups with a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/regex_parser/"}),Object(r.b)("inlineCode",{parentName:"a"},"regex_parser")," transform"),"."),Object(r.b)("p",null,"A config can have any number of transforms and it's entirely up to you how they\nare chained together. Similar to sinks, a transform requires you to specify\nwhere its data comes from. When a sink is configured to accept data from a\ntransform the pipeline is complete."),Object(r.b)("p",null,"Let's place our new transform in between our existing source and sink:"),Object(r.b)(c.a,{block:!0,defaultValue:"diff",values:[{label:"Diff",value:"diff"},{label:"Full Config",value:"new_result"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"diff",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sources.foo]\n   type = "socket"\n   address = "0.0.0.0:9000"\n   mode = "tcp"\n\n\n+[transforms.apache_parser]\n+  inputs = ["foo"]\n+  type = "regex_parser"\n+  field = "message"\n+  regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<mathod>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n+\n [sinks.bar]\n-  inputs = ["foo"]\n+  inputs = ["apache_parser"]\n   type = "elasticsearch"\n   index = "example-index"\n   host = "http://10.24.32.122:9000"\n'))),Object(r.b)(l.a,{value:"new_result",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.foo]\n  type = "socket"\n  address = "0.0.0.0:9000"\n  mode = "tcp"\n\n[transforms.apache_parser]\n  inputs = ["foo"]\n  type = "regex_parser"\n  field = "message"\n  regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<mathod>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n\n[sinks.bar]\n  inputs = ["apache_parser"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n')))),Object(r.b)("p",null,"This regular expression looks great and it probably works, but it's best to be\nsure, right? Which leads us onto the next step.")),Object(r.b)("li",null,Object(r.b)("h3",{id:"test-it"},"Test it"),Object(r.b)("p",null,"No one is saying that unplanned explosions aren't cool, but you should be doing\nthat in your own time. In order to test our transform we ",Object(r.b)("em",{parentName:"p"},"could")," set up a local\nElasticsearch instance and run the whole pipeline, but that's an awful bother\nand Vector has a much better way."),Object(r.b)("p",null,"Instead, we can write ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/advanced/unit-testing/"}),"unit tests")," as part of our\nconfig just like you would for regular code:"),Object(r.b)(c.a,{block:!0,defaultValue:"diff",values:[{label:"Diff",value:"diff"},{label:"Full Config",value:"new_result"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"diff",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),'# Write the data\n[sinks.bar]\n  inputs = ["apache_parser"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n+\n+[[tests]]\n+  name = "test apache regex"\n+\n+  [[tests.inputs]]\n+    insert_at = "apache_parser"\n+    type = "raw"\n+    value = "172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272"\n+\n+  [[tests.outputs]]\n+    extract_from = "apache_parser"\n+    [[tests.outputs.conditions]]\n+      type = "check_fields"\n+      "method.eq" = "PUT"\n+      "host.eq" = "172.128.80.109"\n+      "timestamp.eq" = "2019-05-03T13:11:48-04:00"\n+      "path.eq" = "/mesh"\n+      "status.eq" = "406"\n'))),Object(r.b)(l.a,{value:"new_result",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'# Consume data\n[sources.foo]\n  type = "socket"\n  address = "0.0.0.0:9000"\n  mode = "tcp"\n\n# Structure the data\n[transforms.apache_parser]\n  inputs = ["foo"]\n  type = "regex_parser"\n  field = "message"\n  regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<mathod>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n\n# Write the data\n[sinks.bar]\n  inputs = ["apache_parser"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n\n[[tests]]\n  name = "test apache regex"\n\n  [[tests.inputs]]\n    insert_at = "apache_parser"\n    type = "raw"\n    value = "172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272"\n\n  [[tests.outputs]]\n    extract_from = "apache_parser"\n    [[tests.outputs.conditions]]\n      type = "check_fields"\n      "method.eq" = "PUT"\n      "host.eq" = "172.128.80.109"\n      "timestamp.eq" = "2019-05-03T13:11:48-04:00"\n      "path.eq" = "/mesh"\n      "status.eq" = "406"\n')))),Object(r.b)("p",null,"This unit test spec has a name, defines an input event to feed into our pipeline\nat a specific transform (in this case our ",Object(r.b)("em",{parentName:"p"},"only")," transform), and defines where\nwe'd like to capture resulting events coming out along with a condition to check\nthe events against."),Object(r.b)("p",null,"When we run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector test ./vector.toml\n")),Object(r.b)("p",null,"It will parse and execute our test:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'Running vector.toml tests\ntest vector.toml: test apache regex ... failed\n\nfailures:\n\n--- vector.toml ---\n\ntest \'test apache regex\':\n\ncheck transform \'apache_parser\' failed conditions:\n  condition[0]: predicates failed: [ method.eq: "PUT" ]\npayloads (events encoded as JSON):\n  input: {"timestamp":"2020-02-20T10:19:27.283745Z","message":"172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272"}\n  output: {"bytes_in":"656","timestamp":"2019-05-03T13:11:48-04:00","mathod":"PUT","bytes_out":"10272","host":"172.128.80.109","status":"406","user":"Bins5273","path":"/mesh"}\n')),Object(r.b)("p",null,"By Jove! There ",Object(r.b)("em",{parentName:"p"},"was")," a problem with our regular expression! Our test has pointed\nout that the predicate ",Object(r.b)("inlineCode",{parentName:"p"},"method.eq")," failed, and has helpfully printed our input\nand resulting events in JSON format."),Object(r.b)("p",null,"This allows us to inspect exactly what our transform is doing, and it turns out\nthat the method from our Apache log is actually being captured in a field\n",Object(r.b)("inlineCode",{parentName:"p"},"mathod"),"."),Object(r.b)("p",null,"See if you can spot the typo, once it's fixed we can run\n",Object(r.b)("inlineCode",{parentName:"p"},"vector test ./vector.toml")," again and we should get this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Running vector.toml tests\ntest vector.toml: test apache regex ... passed\n")),Object(r.b)("p",null,"Success! Next, try experimenting by adding more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms")," to\nyour pipeline before moving onto the next guide."),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"While we're at, did you know you can control all of Vector's field names via\nthe ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/global-options/#log_schema"}),"global ",Object(r.b)("inlineCode",{parentName:"a"},"log_schema")," options"),"?\nVector does not lock you into any specific schema."))))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Now that you're a Vector pro you'll have endless ragtag groups of misfits\ntrying to recruit you as their hacker, but it won't mean much if you can't\ndeploy Vector. Onto the next guide!"))}m.isMDXComponent=!0}}]);