(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{945:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(1),a=(t(0),t(1118));const i={last_modified_on:"2020-04-06",$schema:"/.meta/.schemas/guides.json",title:"Custom Aggregations with Lua",description:"Write a custom transform for aggregating log events into metrics using Lua scripting",author_github:"https://github.com/a-rodin",tags:["type: guide","domain: transforms","transform: lua"]},r={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Vector pro, and extract the full potential of Vector.",permalink:"/guides/advanced"}],coverLabel:"Custom Aggregations with Lua",description:"Write a custom transform for aggregating log events into metrics using Lua scripting",permalink:"/guides/advanced/custom-aggregations-with-lua",readingTime:"6 min read",source:"@site/guides/advanced/custom-aggregations-with-lua.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"domain: transforms",permalink:"/guides/tags/domain-transforms"},{label:"transform: lua",permalink:"/guides/tags/transform-lua"}],title:"Custom Aggregations with Lua",truncated:!1,prevItem:{title:"Building & Managing Complex Configs",permalink:"/guides/advanced/managing-complex-configs"},nextItem:{title:"Managing Schemas in Vector",permalink:"/guides/advanced/schemas"}},s=[{value:"Architectural Overview",id:"architectural-overview",children:[{value:"Hooks",id:"hooks",children:[]},{value:"Timer handlers",id:"timer-handlers",children:[]}]},{value:"First Implementation",id:"first-implementation",children:[]},{value:"Reduce Duplication",id:"reduce-duplication",children:[]},{value:"Keep All Code Together",id:"keep-all-code-together",children:[]},{value:"A Loadable Module",id:"a-loadable-module",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={rightToc:s};function l({components:e,...n}){return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"While Vector's built-in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms")," are fast, sometimes they are not expressive\nenough for your needs. In such cases the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/"}),Object(a.b)("inlineCode",{parentName:"a"},"lua"))," transform comes to rescue, letting you\ndefine custom transformation logic."),Object(a.b)("p",null,"This guide walks through various ways of defining an aggregating transform component that takes incoming log events,\ncounts them, and emits ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/about/data-model/metric/#counter"}),Object(a.b)("inlineCode",{parentName:"a"},"counter"))," metrics each 5 seconds."),Object(a.b)("h2",{id:"architectural-overview"},"Architectural Overview"),Object(a.b)("p",null,"Lua is an interpreted language embedded into Vector. When a ",Object(a.b)("inlineCode",{parentName:"p"},"lua")," transform is created, it starts an instance\nof the Lua interpreter. As a consequence, different transforms are isolated and cannot interrupt each other."),Object(a.b)("p",null,"The execution model is asynchronous, with two key concepts: ",Object(a.b)("em",{parentName:"p"},"hooks")," and ",Object(a.b)("em",{parentName:"p"},"timer handlers"),". Both of them are\nuser-defined Lua functions which are called by Vector at certain events."),Object(a.b)("h3",{id:"hooks"},"Hooks"),Object(a.b)("p",null,"There are three types of hooks: ",Object(a.b)("inlineCode",{parentName:"p"},"init"),", ",Object(a.b)("inlineCode",{parentName:"p"},"process"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"shutdown"),"."),Object(a.b)("h4",{id:"the-process-hook"},"The ",Object(a.b)("inlineCode",{parentName:"h4"},"process")," hook"),Object(a.b)("p",null,"The most important of them is ",Object(a.b)("inlineCode",{parentName:"p"},"process"),", which is called on each incoming events. It can be defined like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml"}),'hooks.process = """\nfunction (event, emit)\n  -- do something\nend\n"""\n')),Object(a.b)("p",null,"It takes a single event and can output one or many of them using the ",Object(a.b)("inlineCode",{parentName:"p"},"emit")," function provided as the second argument."),Object(a.b)("p",null,"For example, the body of the function above could have been"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-lua"}),'evnet.log.my_field = "my value"\nemit(event)\n')),Object(a.b)("p",null,"The code above sets field ",Object(a.b)("inlineCode",{parentName:"p"},"my_field")," to value ",Object(a.b)("inlineCode",{parentName:"p"},'"my_value"')," and sends the newly created event to the downstream\ncomponents. Read more about event representation ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/#representation-of-events"}),"in the reference"),"."),Object(a.b)("h4",{id:"the-init-hook"},"The ",Object(a.b)("inlineCode",{parentName:"h4"},"init")," hook"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"init")," hook is similar to ",Object(a.b)("inlineCode",{parentName:"p"},"process")," hook, but it is called before the first call of the ",Object(a.b)("inlineCode",{parentName:"p"},"process")," hook, and thus\ntakes no events as its arguments."),Object(a.b)("p",null,"Note that it although it is called before the first event, it is called only after the first event is ready to be\nprocessed. However, one should not rely on this behavior, as it is not guaranteed to not change in the future."),Object(a.b)("h4",{id:"the-shutdown-hook"},"The ",Object(a.b)("inlineCode",{parentName:"h4"},"shutdown")," hook"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"shutdown")," hook is called after the last event is received. It doesn't take events as arguments as well."),Object(a.b)("h3",{id:"timer-handlers"},"Timer handlers"),Object(a.b)("p",null,"Timer handlers are similar to hooks by being Lua functions capable of producing events. However, they are called\nperiodically at pre-defined intervals."),Object(a.b)("p",null,"All of the functions listed above share a single runtime, so they can communicate between each other using global\nvariables."),Object(a.b)("h2",{id:"first-implementation"},"First Implementation"),Object(a.b)("p",null,"Using the knowledge from the previous section, it is possible to write down the following transform definition:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.aggregator]\ntype = "lua"\nversion = "2"\ninputs = [] # add names of the input components here\n\nhooks.init = """\n  function (emit)\n    count = 0 -- initialize state by setting a global variable\n  end\n"""\n\nhooks.process = """\n  function (event, emit)\n    count = count + 1 -- increment the counter and exit\n  end\n"""\n\ntimers = [{interval_seconds = 5, handler = """\n  function (emit)\n    emit {\n      metric = {\n        name = "event_counter",\n        kind = "incremental",\n        timestamp = os.date("!*t"),\n        counter = {\n          value = counter\n        }\n      }\n    }\n    counter = 0\n  end\n"""}]\n\nhooks.shutdown = """\n  function (emit)\n    emit {\n      metric = {\n        name = "event_counter",\n        kind = "incremental",\n        timestamp = os.date("!*t"),\n        counter = {\n          value = counter\n        }\n      }\n    }\n  end\n"""\n')),Object(a.b)("p",null,"One could plug it into a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/about/concepts/#pipelines"}),"pipeline")," and it would work!"),Object(a.b)("p",null,"However, this code could and should be refactored. Hold on to the next section to see how it could be done."),Object(a.b)("h2",{id:"reduce-duplication"},"Reduce Duplication"),Object(a.b)("p",null,"A bird's-eye view of the transform definition reveals that the timer handler and the shutdown hook are almost\nidentical. It is possible make the config more ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"DRY")," by extracting creation of the counter into\na dedicated function. Such a function can be placed into the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/#source"}),"source"),"\nsection of the config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml"}),'source = """\n  function make_counter(value)\n    return metric = {\n      name = "event_counter",\n      kind = "incremental",\n      timestamp = os.date("!*t"),\n      counter = {\n        value = value\n      }\n    }\n  end\n"""\n')),Object(a.b)("p",null,"and then adjusting the timer handler"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml"}),'timers = [{interval_seconds = 5, handler = """\n  function (emit)\n    emit(make_counter(counter))\n    counter = 0\n  end\n"""}]\n')),Object(a.b)("p",null,"and the ",Object(a.b)("inlineCode",{parentName:"p"},"shutdown")," hook:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml"}),'hooks.shutdown = """\n  function (emit)\n    emit(make_counter(counter))\n  end\n"""\n')),Object(a.b)("h2",{id:"keep-all-code-together"},"Keep All Code Together"),Object(a.b)("p",null,"The new config looks tidier, but in order to make it more readable, it is also possible to gather implementations of\nall functions into the ",Object(a.b)("inlineCode",{parentName:"p"},"source")," section, resulting in the following component declaration:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.aggregator]\ntype = "lua"\nversion = "2"\ninputs = [] # add names of the input components here\nhooks.init = "init"\nhooks.process = "process"\nhooks.shutdown = "shutdown"\ntimers = [{interval_seconds = 5, handler = "timer_handler"}]\n\nsource = """\n  function init()\n    count = 0\n  end\n\n  function process()\n    count = count + 1\n  end\n\n  function timer_handler(emit)\n    emit(make_counter(counter))\n    counter = 0\n  end\n\n  function shutdown(emit)\n    emit(make_counter(counter))\n  end\n\n  function make_counter(value)\n    return metric = {\n      name = "event_counter",\n      kind = "incremental",\n      timestamp = os.date("!*t"),\n      counter = {\n        value = value\n      }\n    }\n  end\n"""\n')),Object(a.b)("h2",{id:"a-loadable-module"},"A Loadable Module"),Object(a.b)("p",null,"As the Lua source grows, it becomes benefitial to place it into a separate file. One obvious advantage is the\npossiblity to use Lua syntax highlighting in the text editor. A less obvious one is the possibility to share\ncommon functionality between different scripted transforms using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.lua.org/manual/5.3/manual.html#6.3"}),"loadable modules"),"."),Object(a.b)("p",null,"There are many ways to use modules in Lua. The simplest one is to just use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.lua.org/manual/5.3/manual.html#pdf-require"}),Object(a.b)("inlineCode",{parentName:"a"},"require"))," function to\nevaluate code from a file, setting up some global variables."),Object(a.b)("p",null,"With this approach the config from the previous section becomes split into two files:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-lua",metastring:'title="aggregator.lua"',title:'"aggregator.lua"'}),'function init()\n  count = 0\nend\n\nfunction aggregator.process()\n  count = count + 1\nend\n\nfunction aggregator.timer_handler(emit)\n  emit(make_counter(counter))\n  counter = 0\nend\n\nfunction aggregator.shutdown(emit)\n  emit(make_counter(counter))\nend\n\nfunction aggregator.make_counter(value)\n  return metric = {\n    name = "event_counter",\n    kind = "incremental",\n    timestamp = os.date("!*t"),\n    counter = {\n      value = value\n    }\n  }\nend\n')),Object(a.b)("p",null,"and"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[transforms.aggregator]\ntype = "lua"\nversion = "2"\ninputs = [] # add names of the input components here\nhooks.init = "init"\nhooks.process = "process"\nhooks.shutdown = "shutdown"\ntimers = [{interval_seconds = 5, handler = "timer_handler"}]\nsource = "require(\'aggregator\')"\n')),Object(a.b)("p",null,"There are also ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://lua-users.org/wiki/ModulesTutorial"}),"other possibilities")," to define Lua modules which do not require to use\nglobal variables, but they are not Vector-specific, and so out of scope of this guide."),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"As you have witnessed by reading this guide, the power of Vector comes from its flexibility. In addition to\nproviding a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"rich set")," of predefined transforms for building production-grade observability\npipelines, it makes it possible to write custom aggregations as Lua scripts. This allows each role of Vector\nin a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/setup/deployment/topologies/"}),"deployment topology")," to perform various kinds of aggregations, providing\nalternatives to centralized logs aggregation."))}l.isMDXComponent=!0}}]);