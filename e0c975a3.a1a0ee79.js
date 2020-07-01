(window.webpackJsonp=window.webpackJsonp||[]).push([[843],{1002:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),s=(n(0),n(1118)),i=n(1196),r={last_modified_on:"2020-04-19",$schema:"/.meta/.schemas/guides.json",title:"Parsing CSV logs with Lua",description:"Parse structured application logs in CSV format using Lua transform",author_github:"https://github.com/a-rodin",tags:["type: guide","domain: transforms","transform: lua"]},l={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Vector pro, and extract the full potential of Vector.",permalink:"/guides/advanced"}],coverLabel:"Parsing CSV logs with Lua",description:"Parse structured application logs in CSV format using Lua transform",permalink:"/guides/advanced/parsing-csv-logs-with-lua",readingTime:"6 min read",source:"@site/guides/advanced/parsing-csv-logs-with-lua.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"domain: transforms",permalink:"/guides/tags/domain-transforms"},{label:"transform: lua",permalink:"/guides/tags/transform-lua"}],title:"Parsing CSV logs with Lua",truncated:!1,prevItem:{title:"Merge multi-line logs with Lua",permalink:"/guides/advanced/merge-multiline-logs-with-lua"},nextItem:{title:"Troubleshooting",permalink:"/guides/advanced/troubleshooting"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Adding the CSV Module",id:"adding-the-csv-module",children:[]},{value:"Implementing Custom Parsing",id:"implementing-custom-parsing",children:[]},{value:"Further Improvements",id:"further-improvements",children:[{value:"Support for Multi-line Strings",id:"support-for-multi-line-strings",children:[]},{value:"Change Fields Types",id:"change-fields-types",children:[]}]}],m={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)(i.a,{mdxType:"Assumptions"},Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You understand the ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/transforms/lua/"}),"basic Lua concepts"),"."),Object(s.b)("li",{parentName:"ul"},"You understand the ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/about/concepts/"}),"basic Vector concepts")," and understand ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/guides/getting-started/your-first-pipeline/"}),"how to set up a pipeline"),"."))),Object(s.b)("p",null,"Vector has many built-in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/components/?functions%5B%5D=parse/"}),"parsers")," for structured logs formats. However, when you need to ship\nlogs in a custom or application-specific format, ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/components/?functions%5B%5D=program/"}),"programmable transforms")," have got you\ncovered."),Object(s.b)("p",null,"This guide walks through reading CSV logs using ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(s.b)("inlineCode",{parentName:"a"},"file"))," source and parsing them using\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/"}),Object(s.b)("inlineCode",{parentName:"a"},"lua"))," transform with a loadable Lua module."),Object(s.b)("h2",{id:"getting-started"},"Getting Started"),Object(s.b)("p",null,"For certainty, it is assumed in the following that the logs to be read are produced by\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/current/runtime-config-logging.html#RUNTIME-CONFIG-LOGGING-CSVLOG"}),Object(s.b)("inlineCode",{parentName:"a"},"csvlog"))," in PostgreSQL. For example, there might be the following\nlog file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csv",metastring:'title="log.csv"',title:'"log.csv"'}),'2020-04-09 12:48:49.661 UTC,,,1,,localhost.1,1,,2020-04-09 12:48:49 UTC,,0,LOG,00000,"ending log output to stderr",,"Future log output will go to log destination ""csvlog"".",,,,,,,""\n2020-04-09 12:48:49.669 UTC,,,27,,localhost.1b,1,,2020-04-09 12:48:49 UTC,,0,LOG,00000,"database system was shut down at 2020-04-09 12:48:25 UTC",,,,,,,,,""\n2020-04-09 12:48:49.683 UTC,,,1,,localhost.1,2,,2020-04-09 12:48:49 UTC,,0,LOG,00000,"database system is ready to accept connections",,,,,,,,,""\n')),Object(s.b)("p",null,"Let us draft an initial version of the Vector's configuration file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'data_dir = "."\n\n[sources.file]\n  type = "file"\n  include = ["*.csv"]\n  start_at_beginning = true\n\n[transforms.lua]\n  inputs = ["file"]\n  type = "lua"\n  version = "2"\n  hooks.process = """\n    function (event, emit)\n      -- to be expanded\n      emit(event)\n    end\n  """\n\n[sinks.console]\n  inputs = ["lua"]\n  type = "console"\n  encoding = "json"\n')),Object(s.b)("p",null,"This config sets up a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/meta/glossary/#pipeline"}),"pipeline")," that reads log files, pipes them through the parsing\ntransform (which currently is configured to just pass the events through), and displays the produced log events using\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/console/"}),Object(s.b)("inlineCode",{parentName:"a"},"console"))," sink."),Object(s.b)("p",null,"At this point, running ",Object(s.b)("inlineCode",{parentName:"p"},"vector --config vector.toml")," results in the following output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"file":"log.csv","host":"localhost","message":"2020-04-09 12:48:49.661 UTC,,,1,,localhost.1,1,,2020-04-09 12:48:49 UTC,,0,LOG,00000,\\"ending log output to stderr\\",,\\"Future log output will go to log destination \\"\\"csvlog\\"\\".\\",,,,,,,\\"\\"","timestamp":"2020-04-09T14:33:28Z"}\n{"file":"log.csv","host":"localhost","message":"2020-04-09 12:48:49.669 UTC,,,27,,localhost.1b,1,,2020-04-09 12:48:49 UTC,,0,LOG,00000,\\"database system was shut down at 2020-04-09 12:48:25 UTC\\",,,,,,,,,\\"\\"","timestamp":"2020-04-09T14:33:28Z"}\n{"file":"log.csv","host":"localhost","message":"2020-04-09 12:48:49.683 UTC,,,1,,localhost.1,2,,2020-04-09 12:48:49 UTC,,0,LOG,00000,\\"database system is ready to accept connections\\",,,,,,,,,\\"\\"","timestamp":"2020-04-09T14:33:28Z"}\n')),Object(s.b)("h2",{id:"adding-the-csv-module"},"Adding the CSV Module"),Object(s.b)("p",null,"In order to perform actual parsing, it is possible to leverage ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geoffleyland/lua-csv"}),Object(s.b)("inlineCode",{parentName:"a"},"lua-csv")),".\nBecause it consists of a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geoffleyland/lua-csv/blob/09557e4608b02d136b9ae39a8fa0f36328fa1cec/lua/csv.lua"}),"single file"),", it is possible to just download it to the same\ndirectory where ",Object(s.b)("inlineCode",{parentName:"p"},"vector.toml")," is stored:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -o csv.lua https://raw.githubusercontent.com/geoffleyland/lua-csv/d20cd42d61dc52e7f6bcb13b596ac7a7d4282fbf/lua/csv.lua\n")),Object(s.b)("p",null,"Then it would be possible to load it by calling ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.lua.org/manual/5.3/manual.html#pdf-require"}),Object(s.b)("inlineCode",{parentName:"a"},"require"))," Lua function in the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/#source"}),Object(s.b)("inlineCode",{parentName:"a"},"source"))," configuration section:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'source = """\n  csv = require("csv")\n"""\n')),Object(s.b)("p",null,"With this ",Object(s.b)("inlineCode",{parentName:"p"},"source")," the ",Object(s.b)("inlineCode",{parentName:"p"},"csv")," module is loaded when Vector is started up (or if the ",Object(s.b)("inlineCode",{parentName:"p"},"lua")," transform is added later and the\nconfig is ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/process-management/#automatic-reload-on-changes"}),"automatically reloaded"),") and can\nbe used through the global variable ",Object(s.b)("inlineCode",{parentName:"p"},"csv"),"."),Object(s.b)("h2",{id:"implementing-custom-parsing"},"Implementing Custom Parsing"),Object(s.b)("p",null,"With the ",Object(s.b)("inlineCode",{parentName:"p"},"csv")," module, the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/#process"}),Object(s.b)("inlineCode",{parentName:"a"},"hooks.process"))," can be changed to the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'hooks.process = """\n  function (event, emit)\n    fields = csv.openstring(event.log.message):lines()() -- parse the `message` field\n    event.log.message = nil -- drop the `message` field\n\n    column_names = {  -- a sequence containing CSV column names\n      -- ...\n    }\n\n    for column, value in ipairs(fields) do -- iterate over CSV columns\n      column_name = column_names[column] -- get column name\n      event.log[column_name] = value -- set the corresponding field in the event\n    end\n\n    emit(event) -- emit the transformed event\n  end\n"""\n')),Object(s.b)("p",null,"Note that the ",Object(s.b)("inlineCode",{parentName:"p"},"column_names")," can be created just once, in the ",Object(s.b)("inlineCode",{parentName:"p"},"source")," section instead to speed up processing.\nPutting it there and using the column names from the PostgreSQL documentation results in the following definition of\nthe whole transform:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'# ...\n[transforms.lua]\n  inputs = ["file"]\n  type = "lua"\n  version = "2"\n  source = """\n    csv = require("csv") -- load external module for parsing CSV\n    column_names = {  -- a sequence containing CSV column names\n      "log_time",\n      "user_name",\n      "database_name",\n      "process_id",\n      "connection_from",\n      "session_id",\n      "session_line_num",\n      "command_tag",\n      "session_start_time",\n      "virtual_transaction_id",\n      "transaction_id",\n      "error_severity",\n      "sql_state_code",\n      "message",\n      "detail",\n      "hint",\n      "internal_query",\n      "internal_query_pos",\n      "context",\n      "query",\n      "query_pos",\n      "location",\n      "application_name",\n    }\n  """\n  hooks.process = """\n    function (event, emit)\n      fields = csv.openstring(event.log.message):lines()() -- parse the `message` field\n      event.log.message = nil -- drop the `message` field\n\n      for column, value in ipairs(fields) do -- iterate over CSV columns\n        column_name = column_names[column] -- get column name\n        event.log[column_name] = value -- set the corresponding field in the event\n      end\n\n      emit(event) -- emit the transformed event\n    end\n    """\n#...\n')),Object(s.b)("p",null,"Trying to run ",Object(s.b)("inlineCode",{parentName:"p"},"vector --config vector.toml")," with the same input file results in structured events being output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"application_name":"","command_tag":"","connection_from":"","context":"","database_name":"","detail":"","error_severity":"LOG","file":"log.csv","hint":"Future log output will go to log destination \\"csvlog\\".","host":"localhost","internal_query":"","internal_query_pos":"","location":"","log_time":"2020-04-09 12:48:49.661 UTC","message":"ending log output to stderr","process_id":"1","query":"","query_pos":"","session_id":"localhost.1","session_line_num":"1","session_start_time":"2020-04-09 12:48:49 UTC","sql_state_code":"00000","timestamp":"2020-04-09T19:49:07Z","transaction_id":"0","user_name":"","virtual_transaction_id":""}\n{"application_name":"","command_tag":"","connection_from":"","context":"","database_name":"","detail":"","error_severity":"LOG","file":"log.csv","hint":"","host":"localhost","internal_query":"","internal_query_pos":"","location":"","log_time":"2020-04-09 12:48:49.669 UTC","message":"database system was shut down at 2020-04-09 12:48:25 UTC","process_id":"27","query":"","query_pos":"","session_id":"localhost.1b","session_line_num":"1","session_start_time":"2020-04-09 12:48:49 UTC","sql_state_code":"00000","timestamp":"2020-04-09T19:49:07Z","transaction_id":"0","user_name":"","virtual_transaction_id":""}\n{"application_name":"","command_tag":"","connection_from":"","context":"","database_name":"","detail":"","error_severity":"LOG","file":"log.csv","hint":"","host":"localhost","internal_query":"","internal_query_pos":"","location":"","log_time":"2020-04-09 12:48:49.683 UTC","message":"database system is ready to accept connections","process_id":"1","query":"","query_pos":"","session_id":"localhost.1","session_line_num":"2","session_start_time":"2020-04-09 12:48:49 UTC","sql_state_code":"00000","timestamp":"2020-04-09T19:49:07Z","transaction_id":"0","user_name":"","virtual_transaction_id":""}\n')),Object(s.b)("p",null,"Or, applying pretty formatting to one of the output events:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "application_name": "",\n  "command_tag": "",\n  "connection_from": "",\n  "context": "",\n  "database_name": "",\n  "detail": "",\n  "error_severity": "LOG",\n  "file": "log.csv",\n  "hint": "Future log output will go to log destination \\"csvlog\\".",\n  "host": "localhost",\n  "internal_query": "",\n  "internal_query_pos": "",\n  "location": "",\n  "log_time": "2020-04-09 12:48:49.661 UTC",\n  "message": "ending log output to stderr",\n  "process_id": "1",\n  "query": "",\n  "query_pos": "",\n  "session_id": "localhost.1",\n  "session_line_num": "1",\n  "session_start_time": "2020-04-09 12:48:49 UTC",\n  "sql_state_code": "00000",\n  "timestamp": "2020-04-09T19:49:07Z",\n  "transaction_id": "0",\n  "user_name": "",\n  "virtual_transaction_id": ""\n}\n')),Object(s.b)("h2",{id:"further-improvements"},"Further Improvements"),Object(s.b)("p",null,"After the task of parsing the CSV logs is accomplished, the following improvements can take place."),Object(s.b)("h3",{id:"support-for-multi-line-strings"},"Support for Multi-line Strings"),Object(s.b)("p",null,"CSV supports line breaks in strings. However, by default ",Object(s.b)("inlineCode",{parentName:"p"},"file")," source creates a separate event from each line."),Object(s.b)("p",null,"There are two options to deal with this:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"For simple cases it might be possible to use the ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/sources/file/#multiline"}),Object(s.b)("inlineCode",{parentName:"a"},"multiline"))," configuration\noption in the ",Object(s.b)("inlineCode",{parentName:"li"},"file")," source."),Object(s.b)("li",{parentName:"ol"},"For more complex cases the messages from multiple events can be conditionally concatenated in the Lua code. See\n",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/guides/advanced/custom-aggregations-with-lua/"}),"the aggregations guide")," for more details on this.")),Object(s.b)("h3",{id:"change-fields-types"},"Change Fields Types"),Object(s.b)("p",null,"By default, all columns are parsed as strings. It is possible to convert them to other\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/#data-types"}),"data types")," right in the Lua code using\nbuilt-in functions, such as ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.lua.org/manual/5.3/manual.html#pdf-tonumber"}),Object(s.b)("inlineCode",{parentName:"a"},"tonumber")),". Alternatively, it is possible to add the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/coercer/"}),Object(s.b)("inlineCode",{parentName:"a"},"coercer"))," transform after the ",Object(s.b)("inlineCode",{parentName:"p"},"lua")," transform, for example, to\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/coercer/#timestamps"}),"parse timestamps"),"."))}u.isMDXComponent=!0},1196:function(e,t,n){"use strict";n(1128);var a=n(0),o=n.n(a),s=n(1162);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(s.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}}}]);