(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{1122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var i=n(1),a=(n(0),n(1130)),o=n(1208);const s={last_modified_on:"2020-04-19",$schema:"/.meta/.schemas/guides.json",title:"Unit Testing Your Configs",description:"Learn how to write and execute unit tests for your Vector configs",author_github:"https://github.com/Jeffail",tags:["type: guide","domain: config"]},l={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Vector pro, and extract the full potential of Vector.",permalink:"/guides/advanced"}],coverLabel:"Unit Testing Your Configs",description:"Learn how to write and execute unit tests for your Vector configs",permalink:"/guides/advanced/unit-testing",readingTime:"6 min read",source:"@site/guides/advanced/unit-testing.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"domain: config",permalink:"/guides/tags/domain-config"}],title:"Unit Testing Your Configs",truncated:!1,prevItem:{title:"Troubleshooting",permalink:"/guides/advanced/troubleshooting"},nextItem:{title:"Send logs to Apache Pulsar",permalink:"/guides/integrate/sinks/pulsar"}},r=[{value:"Input",id:"input",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Executing",id:"executing",children:[]}],c={rightToc:r};function p({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(o.a,{name:"guide",mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You understand the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/about/concepts/"}),"basic Vector concepts")," and understand ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/guides/getting-started/your-first-pipeline/"}),"how to set up a pipeline"),"."))),Object(a.b)("p",null,"It's possible to define unit tests within a Vector configuration file that cover\na network of transforms within the topology. The purpose of these tests is to\nassist in the development of configs containing larger and more complex\ntopologies, and improve their maintainability."),Object(a.b)("p",null,"The full spec can be found ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/tests/"}),"here"),". This guide will cover\nwriting and executing a unit test for the following config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.over_tcp]\n  type = "socket"\n  mode = "tcp"\n  address = "0.0.0.0:9000"\n\n[transforms.foo]\n  type = "grok_parser"\n  inputs = ["over_tcp"]\n  pattern = "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}"\n\n[transforms.bar]\n  type = "add_fields"\n  inputs = ["foo"]\n  [transforms.bar.fields]\n    new_field = "this is a static value"\n\n[transforms.baz]\n  type = "remove_fields"\n  inputs = ["foo"]\n  fields = ["level"]\n\n[sinks.over_http]\n  type = "http"\n  inputs = ["baz"]\n  uri = "http://localhost:4195/post"\n  encoding = "text"\n')),Object(a.b)("p",null,"In this config we:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Parse a log line into the fields ",Object(a.b)("inlineCode",{parentName:"li"},"timestamp"),", ",Object(a.b)("inlineCode",{parentName:"li"},"level")," and ",Object(a.b)("inlineCode",{parentName:"li"},"message")," with the\ntransform ",Object(a.b)("inlineCode",{parentName:"li"},"foo"),"."),Object(a.b)("li",{parentName:"ul"},"Add a static string field ",Object(a.b)("inlineCode",{parentName:"li"},"new_field")," using the transform ",Object(a.b)("inlineCode",{parentName:"li"},"bar"),"."),Object(a.b)("li",{parentName:"ul"},"Remove the field ",Object(a.b)("inlineCode",{parentName:"li"},"level")," with the transform ",Object(a.b)("inlineCode",{parentName:"li"},"baz"),".")),Object(a.b)("p",null,"In reality it's unlikely that a config this simple would be worth the investment\nof writing unit tests. Regardless, for the purpose of this guide we've concluded\nthat yes, we do wish to unit test this config."),Object(a.b)("p",null,"Specifically, we need to ensure that the resulting events of our topology\n(whatever comes out of the ",Object(a.b)("inlineCode",{parentName:"p"},"baz")," transform) always meets the following\nrequirements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Does NOT contain the field ",Object(a.b)("inlineCode",{parentName:"li"},"level"),"."),Object(a.b)("li",{parentName:"ul"},"Contains the field ",Object(a.b)("inlineCode",{parentName:"li"},"new_field"),", with a static value ",Object(a.b)("inlineCode",{parentName:"li"},"this is a static value"),"."),Object(a.b)("li",{parentName:"ul"},"Has a ",Object(a.b)("inlineCode",{parentName:"li"},"timestamp")," and ",Object(a.b)("inlineCode",{parentName:"li"},"message")," field containing the values extracted from the\nraw message of the input log.")),Object(a.b)("p",null,"Otherwise our system fails and an annoying relative (uncle Cecil) moves in to\nlive with us indefinitely. We will do ",Object(a.b)("em",{parentName:"p"},"anything")," to prevent that."),Object(a.b)("h2",{id:"input"},"Input"),Object(a.b)("p",null,"First we shall write a single unit test at the bottom of our config called\n",Object(a.b)("inlineCode",{parentName:"p"},"check_simple_log"),". Each test must define input events (usually just one), which\ninitiates the test by injecting those events into a transform of the topology:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml"}),'[[tests]]\n  name = "check_simple_log"\n\n  [[tests.inputs]]\n    insert_at = "foo"\n    type = "raw"\n    value = "2019-11-28T12:00:00+00:00 info Sorry, I\'m busy this week Cecil"\n')),Object(a.b)("p",null,"Here we've specified that our test should begin by injecting an event at the\ntransform ",Object(a.b)("inlineCode",{parentName:"p"},"foo"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"raw")," input type creates a log with only a ",Object(a.b)("inlineCode",{parentName:"p"},"message")," field\nand ",Object(a.b)("inlineCode",{parentName:"p"},"timestamp")," (set to the time of the test), where ",Object(a.b)("inlineCode",{parentName:"p"},"message")," is populated with\nthe contents of the ",Object(a.b)("inlineCode",{parentName:"p"},"value")," field."),Object(a.b)("h2",{id:"outputs"},"Outputs"),Object(a.b)("p",null,"This test won't run in its current state because there's nothing to check. In\norder to perform checks with this unit test we define an output to inspect:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml"}),'[[tests]]\n  name = "check_simple_log"\n\n  [[tests.inputs]]\n    insert_at = "foo"\n    type = "raw"\n    value = "2019-11-28T12:00:00+00:00 info Sorry, I\'m busy this week Cecil"\n\n  [[tests.outputs]]\n    extract_from = "baz"\n\n    [[tests.outputs.conditions]]\n      type = "check_fields"\n      "level.exists" = false\n      "new_field.equals" = "this is a static value"\n      "timestamp.equals" = "2019-11-28T12:00:00+00:00"\n      "message.equals" = "Sorry, I\'m busy this week Cecil"\n')),Object(a.b)("p",null,"We can define any number of outputs for a test, and must specify at which\ntransform the output events should be extracted for checking. This allows us to\ncheck the events from different transforms in a single test. For our purposes we\nonly need to check the output of ",Object(a.b)("inlineCode",{parentName:"p"},"baz"),"."),Object(a.b)("p",null,"An output can also have any number of conditions to check, and these are how we\ndetermine whether a test has failed or succeeded. In order for the test to pass\neach condition for an output must resolve to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("p",null,"It's possible for a topology to result in >1 events extracted from a single\ntransform, in which case each condition must pass for one or more of the\nextracted events in order for the test to pass."),Object(a.b)("p",null,"An output without any conditions cannot fail a test, and instead prints the\ninput and output events of a transform during the test. This is useful when\nbuilding a config as it allows us to inspect the behavior of each transform in\nisolation."),Object(a.b)("p",null,"The only condition we've defined here is a ",Object(a.b)("inlineCode",{parentName:"p"},"check_fields")," type. This is\ncurrently the ",Object(a.b)("em",{parentName:"p"},"only")," condition type on offer, and it allows us to specify any\nnumber of field queries (of the format ",Object(a.b)("inlineCode",{parentName:"p"},'"<field>.<predicate>" = "<argument>"'),")."),Object(a.b)("h2",{id:"executing"},"Executing"),Object(a.b)("p",null,"With this test added to the bottom of our config we are now able to execute it.\nExecuting tests within a config file can be done with the ",Object(a.b)("inlineCode",{parentName:"p"},"test")," subcommand:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"vector test ./example.toml\n")),Object(a.b)("p",null,"Doing this results in the following output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'$ vector test ./example.toml\nRunning ./example.toml tests\ntest ./example.toml: check_simple_log ... failed\n\nfailures:\n\n--- ./example.toml ---\n\ntest \'check_simple_log\':\n\ncheck transform \'baz\' failed conditions:\n  condition[0]: predicates failed: [ new_field.equals: "this is a static value" ]\npayloads (events encoded as JSON):\n  input: {"level":"info","timestamp":"2019-11-28T12:00:00+00:00","message":"Sorry, I\'m busy this week Cecil"}\n  output: {"timestamp":"2019-11-28T12:00:00+00:00","message":"Sorry, I\'m busy this week Cecil"}\n')),Object(a.b)("p",null,"Woops! Something isn't right. Vector has told us that condition ",Object(a.b)("inlineCode",{parentName:"p"},"0")," (our only\ncondition) failed for the predicate ",Object(a.b)("inlineCode",{parentName:"p"},"new_field.equals"),". We also get to see a\nJSON encoded representation of the input and output of the transform ",Object(a.b)("inlineCode",{parentName:"p"},"baz"),".\nTry reviewing our config topology to see if you can spot the mistake."),Object(a.b)("p",null,"SPOILERS: The problem is that transform ",Object(a.b)("inlineCode",{parentName:"p"},"baz")," is configured with the input\n",Object(a.b)("inlineCode",{parentName:"p"},"foo"),", which means ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is skipped in the topology!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Side note: We would have also caught this particular issue with\n",Object(a.b)("inlineCode",{parentName:"p"},"vector validate --topology ./example.toml"),".")),Object(a.b)("p",null,"The fix is easy, we simply change the input of ",Object(a.b)("inlineCode",{parentName:"p"},"baz")," from ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," to ",Object(a.b)("inlineCode",{parentName:"p"},"bar"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-diff"}),'--- a/example.toml\n+++ b/example.toml\n@@ -16,7 +16,7 @@\n\n [transforms.baz]\n   type = "remove_fields"\n-  inputs = ["foo"]\n+  inputs = ["bar"]\n   fields = ["level"]\n')),Object(a.b)("p",null,"And running our test again gives us an exit status 0:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"$ vector test ./example.toml\nRunning ./example.toml tests\nTest ./example.toml: check_simple_log ... passed\n")),Object(a.b)("p",null,"The test passed! Now if we configure our CI system to execute our test we can\nensure that uncle Cecil remains in Shoreditch after any future config change.\nWhat an insufferable hipster he is."))}p.isMDXComponent=!0},1208:function(e,t,n){"use strict";n(1140);var i=n(0),a=n.n(i),o=n(1174);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}}}]);