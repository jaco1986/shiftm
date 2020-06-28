(window.webpackJsonp=window.webpackJsonp||[]).push([[907],{1066:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(9),l=(n(0),n(1128)),i=n(1172),o=n(1155),c=n(1156),s=n(1161),u=n(1160),d={last_modified_on:"2020-05-21",delivery_guarantee:"at_least_once",component_title:"Journald",description:"The Vector `journald` source ingests data through Systemd's Journald utility and outputs `log` events.",event_types:["log"],function_category:"collect",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+journald%22",operating_systems:["Linux"],sidebar_label:'journald|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/journald.rs",status:"beta",title:"Journald Source",unsupported_operating_systems:["MacOS","Windows"]},m={id:"reference/sources/journald",title:"Journald Source",description:"The Vector `journald` source ingests data through Systemd's Journald utility and outputs `log` events.",source:"@site/docs/reference/sources/journald.md",permalink:"/docs/reference/sources/journald",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/sources/journald.md",sidebar_label:'journald|["log"]',sidebar:"docs",previous:{title:"HTTP Source",permalink:"/docs/reference/sources/http"},next:{title:"Kafka Source",permalink:"/docs/reference/sources/kafka"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[{value:"batch_size",id:"batch_size",children:[]},{value:"current_boot_only",id:"current_boot_only",children:[]},{value:"data_dir",id:"data_dir",children:[]},{value:"exclude_units",id:"exclude_units",children:[]},{value:"include_units",id:"include_units",children:[]},{value:"journalctl_path",id:"journalctl_path",children:[]}]},{value:"Fields",id:"fields",children:[{value:"<code>[record-key]</code>",id:"record-key",children:[]},{value:"host",id:"host",children:[]},{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Checkpointing",id:"checkpointing",children:[]},{value:"Communication strategy",id:"communication-strategy",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Non-ASCII messages",id:"non-ascii-messages",children:[]},{value:"User permissions",id:"user-permissions",children:[]}]}],b={rightToc:p};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"journald")," source\ningests data through ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://systemd.io/"}),"Systemd's")," ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html"}),"Journald"),"\nutility and outputs ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(l.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)(i.a,{icon:!1,type:"danger",className:"list--icons list--icons--warnings",mdxType:"Alert"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#journalctl"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl"))," binary is required, this is the interface Vector uses to retrieve JournalD logs. See the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/sources/journald/#communication-strategy"}),'"Communication Strategy" section')," for more info."),Object(l.b)("li",{parentName:"ul"},"The Vector user must be part of the ",Object(l.b)("inlineCode",{parentName:"li"},"systemd-journal")," group in order to execute the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#journalctl"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl"))," binary. See the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/sources/journald/#user-permissions"}),'"User Permissions" section')," for more info."))),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(l.b)(u.a,{value:"common",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "journald" # required\n  current_boot_only = true # optional, default\n  exclude_units = [] # optional, default\n  include_units = [] # optional, default\n'))),Object(l.b)(u.a,{value:"advanced",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "journald" # required\n  batch_size = 16 # optional, default\n  current_boot_only = true # optional, default\n  data_dir = "/var/lib/vector" # optional, no default\n  exclude_units = [] # optional, default\n  include_units = [] # optional, default\n  journalctl_path = "journalctl" # optional, default\n')))),Object(l.b)(o.a,{filters:!0,mdxType:"Fields"},Object(l.b)(c.a,{common:!1,defaultValue:16,enumValues:null,examples:[16],groups:[],name:"batch_size",path:null,relevantWhen:null,required:!1,templateable:!1,type:"uint",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"batch_size"},"batch_size"),Object(l.b)("p",null,"The systemd journal is read in batches, and a checkpoint is set at the end of\neach batch. This option limits the size of the batch.\nSee ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#checkpointing"}),"Checkpointing")," for more info.")),Object(l.b)(c.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],groups:[],name:"current_boot_only",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"current_boot_only"},"current_boot_only"),Object(l.b)("p",null,"Include only entries from the current boot.")),Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["/var/lib/vector"],groups:[],name:"data_dir",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"data_dir"},"data_dir"),Object(l.b)("p",null,"The directory used to persist the journal checkpoint position. By default, the\nglobal ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#data_dir"}),Object(l.b)("inlineCode",{parentName:"a"},"data_dir"))," is used. Please make sure the Vector project has write\npermissions to this dir.\nSee ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#checkpointing"}),"Checkpointing")," for more info.")),Object(l.b)(c.a,{common:!0,defaultValue:[],enumValues:null,examples:[["badservice","sysinit.target"]],groups:[],name:"exclude_units",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"exclude_units"},"exclude_units"),Object(l.b)("p",null,"The list of units names to exclude from monitoring. Unit names lacking a ",Object(l.b)("inlineCode",{parentName:"p"},'"."'),"\nwill have ",Object(l.b)("inlineCode",{parentName:"p"},'".service"')," appended to make them a valid service unit name.")),Object(l.b)(c.a,{common:!0,defaultValue:[],enumValues:null,examples:[["ntpd","sysinit.target"]],groups:[],name:"include_units",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"include_units"},"include_units"),Object(l.b)("p",null,"The list of units names to monitor. If empty or not present, all units are\naccepted. Unit names lacking a ",Object(l.b)("inlineCode",{parentName:"p"},'"."')," will have ",Object(l.b)("inlineCode",{parentName:"p"},'".service"')," appended to make\nthem a valid service unit name.")),Object(l.b)(c.a,{common:!1,defaultValue:"journalctl",enumValues:null,examples:["/usr/local/bin/journalctl"],groups:[],name:"journalctl_path",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"journalctl_path"},"journalctl_path"),Object(l.b)("p",null,"The full path of the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#journalctl"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl"))," executable. If not set, Vector will search\nthe path for ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#journalctl"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl")),".\nSee ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#communication-strategy"}),"Communication strategy")," for more info."))),Object(l.b)("h2",{id:"fields"},"Fields"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="example log event"',title:'"example',log:!0,'event"':!0}),'{\n  // ...\n  "_SYSTEMD_UNIT": "ntpd.service",\n  "host": "my.host.com",\n  "message": "Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n  // ...\n}\n')),Object(l.b)(o.a,{filters:!0,mdxType:"Fields"},Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[{_SYSTEMD_UNIT:"ntpd.service"},{_BOOT_ID:"124c781146e841ae8d9b4590df8b9231"}],groups:[],name:"`[record-key]`",path:null,relevantWhen:null,required:!1,templateable:!1,type:"*",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"record-key"},Object(l.b)("inlineCode",{parentName:"h3"},"[record-key]")),Object(l.b)("p",null,"Additional Journald fields are passed through as log fields.")),Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["my.host.com"],groups:[],name:"host",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"host"},"host"),Object(l.b)("p",null,"The value of the journald ",Object(l.b)("inlineCode",{parentName:"p"},"_HOSTNAME")," field.")),Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],groups:[],name:"message",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"message"},"message"),Object(l.b)("p",null,"The value of the journald ",Object(l.b)("inlineCode",{parentName:"p"},"MESSAGE")," field.")),Object(l.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],groups:[],name:"timestamp",path:null,relevantWhen:null,required:!0,templateable:!1,type:"timestamp",unit:null,warnings:[],mdxType:"Field"},Object(l.b)("h3",{id:"timestamp"},"timestamp"),Object(l.b)("p",null,"The value of the journald ",Object(l.b)("inlineCode",{parentName:"p"},"_SOURCE_REALTIME_TIMESTAMP")," field."))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,"Given the following input:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"reply from 192.168.1.2: offset -0.001791 delay 0.000176, next query 1500s\n")),Object(l.b)("p",null,"A log event will be output with the following structure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example log event"',title:'"Example',log:!0,'event"':!0}),'{\n  "timestamp": <2019-07-26T20:30:27.000443Z>,\n  "message": "reply from 192.168.1.2: offset -0.001791 delay 0.000176, next query 1500s",\n  "host": "lorien.example.com",\n  "__REALTIME_TIMESTAMP": "1564173027000443",\n  "__MONOTONIC_TIMESTAMP": "98694000446",\n  "_BOOT_ID": "124c781146e841ae8d9b4590df8b9231",\n  "SYSLOG_FACILITY": "3",\n  "_UID": "0",\n  "_GID": "0",\n  "_CAP_EFFECTIVE": "3fffffffff",\n  "_MACHINE_ID": "c36e9ea52800a19d214cb71b53263a28",\n  "PRIORITY": "6",\n  "_TRANSPORT": "stdout",\n  "_STREAM_ID": "92c79f4b45c4457490ebdefece29995e",\n  "SYSLOG_IDENTIFIER": "ntpd",\n  "_PID": "2156",\n  "_COMM": "ntpd",\n  "_EXE": "/usr/sbin/ntpd",\n  "_CMDLINE": "ntpd: [priv]",\n  "_SYSTEMD_CGROUP": "/system.slice/ntpd.service",\n  "_SYSTEMD_UNIT": "ntpd.service",\n  "_SYSTEMD_SLICE": "system.slice",\n  "_SYSTEMD_INVOCATION_ID": "496ad5cd046d48e29f37f559a6d176f8"\n}\n')),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"checkpointing"},"Checkpointing"),Object(l.b)("p",null,"Vector checkpoints the journal position after every batch read. The size of\nthe batch is controlled via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#batch_size"}),Object(l.b)("inlineCode",{parentName:"a"},"batch_size"))," option. Checkpointing ensures that\nVector resumes where it left off if restarted, preventing data from being read\ntwice. The checkpoint positions are stored in the data directory which is\nspecified via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/global-options/#data_dir"}),"global [",Object(l.b)("inlineCode",{parentName:"a"},"data_dir"),"](#data_dir) option"),"\nbut can be overridden via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#data_dir"}),Object(l.b)("inlineCode",{parentName:"a"},"data_dir"))," option in the ",Object(l.b)("inlineCode",{parentName:"p"},"journald")," source\ndirectly."),Object(l.b)("h3",{id:"communication-strategy"},"Communication strategy"),Object(l.b)("p",null,"To ensure the ",Object(l.b)("inlineCode",{parentName:"p"},"journald")," source works across all platforms, Vector interacts\nwith the Systemd journal via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#journalctl"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl"))," command. This is accomplished by\nspawning a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/subprocess"}),"subprocess")," that Vector diligently interacts\nwith. If the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#journalctl"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl"))," command is not in the environment path you can\nspecify the exact location via the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#journalctl_path"}),Object(l.b)("inlineCode",{parentName:"a"},"journalctl_path"))," option. For more\ninformation on this communication strategy please see\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/1473"}),"issue #1473"),"."),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(l.b)("h3",{id:"non-ascii-messages"},"Non-ASCII messages"),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"journald")," has stored a message that is not strict ASCII,\n",Object(l.b)("inlineCode",{parentName:"p"},"journalctl"),' will output it in an alternate format to prevent data\nloss. Vector handles this alternate format by translating such messages\ninto UTF-8 in "lossy" mode, where characters that are not valid UTF-8\nare replaced with the Unicode replacement character, ',Object(l.b)("inlineCode",{parentName:"p"},"\ufffd"),"."),Object(l.b)("h3",{id:"user-permissions"},"User permissions"),Object(l.b)("p",null,"If you run Vector from a non-root user, you need to add that user to the\n",Object(l.b)("inlineCode",{parentName:"p"},"systemd-journal")," group."),Object(l.b)("p",null,"For example, if the user is named ",Object(l.b)("inlineCode",{parentName:"p"},"vector"),", it can be done by running"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"usermod -aG systemd-journal vector\n")))}h.isMDXComponent=!0},1139:function(e,t,n){"use strict";var a=n(24),r=n(13),l=n(27),i=n(84),o=n(85),c=n(26),s=n(1145),u=n(86);r(r.S+r.F*!n(81)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,d,m=l(e),p="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,f=void 0!==h,j=0,v=u(m);if(f&&(h=a(h,b>2?arguments[2]:void 0,2)),null==v||p==Array&&o(v))for(n=new p(t=c(m.length));t>j;j++)s(n,j,f?h(m[j],j):m[j]);else for(d=v.call(m),n=new p;!(r=d.next()).done;j++)s(n,j,f?i(d,h,[r.value,j],!0):r.value);return n.length=j,n}})},1140:function(e,t,n){"use strict";var a=n(1146),r=n(1141);e.exports=n(1147)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},1141:function(e,t,n){var a=n(12);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1137),i=n(1136),o=n.n(i);n(131);t.a=function(e){var t=e.className,n=e.size,a=e.style,i=e.text;return r.a.createElement(l.a,{to:"/vic/",className:o()("vic","vic--"+n,t)},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/img/vicmojis/vic"+a+".svg",alt:"Vic - The Vector Mascot"})),i&&r.a.createElement("div",{className:"text"},i))}},1144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(1137),n(1142));t.a=function(e){var t=e.text;return r.a.createElement("section",{className:"empty"},r.a.createElement(l.a,{style:"no",text:t}))}},1145:function(e,t,n){"use strict";var a=n(28),r=n(53);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},1146:function(e,t,n){"use strict";var a=n(28).f,r=n(82),l=n(80),i=n(24),o=n(78),c=n(79),s=n(54),u=n(83),d=n(87),m=n(10),p=n(1143).fastKey,b=n(1141),h=m?"_s":"size",f=function(e,t){var n,a=p(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var u=e((function(e,a){o(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[h]=0,null!=a&&c(a,n,e[s],e)}));return l(u.prototype,{clear:function(){for(var e=b(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=b(this,t),a=f(n,e);if(a){var r=a.n,l=a.p;delete n._i[a.i],a.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==a&&(n._f=r),n._l==a&&(n._l=l),n[h]--}return!!a},forEach:function(e){b(this,t);for(var n,a=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!f(b(this,t),e)}}),m&&a(u.prototype,"size",{get:function(){return b(this,t)[h]}}),u},def:function(e,t,n){var a,r,l=f(e,t);return l?l.v=n:(e._l=l={i:r=p(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=l),a&&(a.n=l),e[h]++,"F"!==r&&(e._i[r]=l)),e},getEntry:f,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=b(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),d(t)}}},1147:function(e,t,n){"use strict";var a=n(5),r=n(13),l=n(15),i=n(80),o=n(1143),c=n(79),s=n(78),u=n(12),d=n(14),m=n(81),p=n(39),b=n(1148);e.exports=function(e,t,n,h,f,j){var v=a[e],g=v,O=f?"set":"add",y=g&&g.prototype,_={},N=function(e){var t=y[e];l(y,e,"delete"==e||"has"==e?function(e){return!(j&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return j&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof g&&(j||y.forEach&&!d((function(){(new g).entries().next()})))){var E=new g,T=E[O](j?{}:-0,1)!=E,x=d((function(){E.has(1)})),w=m((function(e){new g(e)})),C=!j&&d((function(){for(var e=new g,t=5;t--;)e[O](t,t);return!e.has(-0)}));w||((g=t((function(t,n){s(t,g,e);var a=b(new v,t,g);return null!=n&&c(n,f,a[O],a),a}))).prototype=y,y.constructor=g),(x||C)&&(N("delete"),N("has"),f&&N("get")),(C||T)&&N(O),j&&y.clear&&delete y.clear}else g=h.getConstructor(t,e,f,O),i(g.prototype,n),o.NEED=!0;return p(g,e),_[e]=g,r(r.G+r.W+r.F*(g!=v),_),j||h.setStrong(g,e,f),g}},1148:function(e,t,n){var a=n(12),r=n(1149).set;e.exports=function(e,t,n){var l,i=t.constructor;return i!==n&&"function"==typeof i&&(l=i.prototype)!==n.prototype&&a(l)&&r&&r(e,l),e}},1149:function(e,t,n){var a=n(12),r=n(8),l=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(24)(Function.call,n(1163).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return l(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:l}},1150:function(e,t,n){"use strict";n(1140),n(77),n(1139),n(25),n(20),n(19),n(1138);var a=n(0),r=n.n(a),l=n(1157),i=n.n(l);t.a=function(e){var t=e.currentState,n=e.humanize,a=e.icon,l=e.name,o=e.setState,c=e.values;if(0==c.size)return null;var s=Array.from(c);return r.a.createElement(r.a.Fragment,null,s.map((function(e,c){var s="string"==typeof e&&n?i()(e):e;return r.a.createElement("label",{key:c},r.a.createElement("input",{checked:t.has(e),name:l,onChange:function(n){var a=new Set(t);n.currentTarget.checked?a.add(e):a.delete(e),o(a)},type:"checkbox"}),s&&r.a.createElement(r.a.Fragment,null,a?r.a.createElement("i",{className:"feather icon-"+a}):""," ",s))})))}},1153:function(e,t,n){"use strict";var a=n(13),r=n(1154),l=n(27),i=n(26),o=n(29),c=n(1166);a(a.P,"Array",{flatMap:function(e){var t,n,a=l(this);return o(e),t=i(a.length),n=c(a,0),r(n,a,a,t,0,1,e,arguments[1]),n}}),n(88)("flatMap")},1154:function(e,t,n){"use strict";var a=n(1165),r=n(12),l=n(26),i=n(24),o=n(2)("isConcatSpreadable");e.exports=function e(t,n,c,s,u,d,m,p){for(var b,h,f=u,j=0,v=!!m&&i(m,p,3);j<s;){if(j in c){if(b=v?v(c[j],j,n):c[j],h=!1,r(b)&&(h=void 0!==(h=b[o])?!!h:a(b)),h&&d>0)f=e(t,n,b,l(b.length),f,d-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=b}f++}j++}return f}},1155:function(e,t,n){"use strict";n(1138),n(1151),n(1152),n(1139),n(1153),n(25),n(20),n(19),n(77),n(1140);var a=n(0),r=n.n(a),l=n(1150),i=n(1144),o=n(1158),c=n.n(o);t.a=function(e){var t=e.children,n=e.filters,o=Object(a.useState)(!1),s=o[0],u=o[1],d=Object(a.useState)(new Set),m=d[0],p=d[1],b=Object(a.useState)(!1),h=b[0],f=b[1],j=Object(a.useState)(null),v=j[0],g=j[1],O=[];t&&(O=Array.isArray(t)?t:[t]);var y=O.some((function(e){return e.props.common})),_=c()(O).flatMap((function(e){return e.props.groups})).uniq().value(),N=O.some((function(e){return e.props.required})),E=O;return s&&(E=E.filter((function(e){return e.props.common}))),m.size>0&&(E=E.filter((function(e){return Array.from(m).every((function(t){return e.props.groups.includes(t)}))}))),h&&(E=E.filter((function(e){return e.props.required}))),v&&(E=E.filter((function(e){return e.props.name.toLowerCase().includes(v.toLowerCase())}))),r.a.createElement(r.a.Fragment,null,O.length>1&&!1!==n?r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("span",{className:"search--result-count"},E.length," items"),r.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return g(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--choices"},r.a.createElement(l.a,{values:_,currentState:m,setState:p}),y&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.currentTarget.checked)},checked:s}),"common"),N&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return f(e.currentTarget.checked)},checked:h}),"required")))):null,!Array.isArray(E)||E.length>0?r.a.createElement("ul",{className:"connected-list"},E):r.a.createElement(i.a,{text:"no components found"}))}},1156:function(e,t,n){"use strict";n(89),n(25),n(20),n(19),n(52),n(1138),n(1151),n(1152);var a=n(0),r=n.n(a),l=n(1136),i=n.n(l),o=(n(1128),n(1167));function c(e){return e.includes(".")?'"'+e+'"':e}function s(e){return"string"==typeof e&&e.includes("\n")?'"""\n'+e+'\n"""':JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?c(t.name)+" = "+s(t.value):c(Object.keys(t)[0])+" = "+s(Object.values(t)[0]):e?c(e)+" = "+s(t):s(t);var n}function d(e){var t=e.values,n=[];if(Array.isArray(t))for(var a in t){var l=t[a];n.push(r.a.createElement("code",{key:l},s(l))),n.push(" ")}else for(var i in t)n.push(r.a.createElement("code",{key:i,className:"with-info-icon",title:t[i]},s(i))),n.push(" ");return n}function m(e){var t=e.name,n=e.path,a=e.values,l="";return a.forEach((function(e){n&&(l+=n+"."),l+=u(t,e)+"\n"})),r.a.createElement("div",null,r.a.createElement(o.a,{className:"language-toml"},l))}function p(e){var t=e.unit,n=e.value,a="";return t&&(a=r.a.createElement(r.a.Fragment,null," (",t,")")),r.a.createElement(r.a.Fragment,null,r.a.createElement("code",null,s(n)),a)}function b(e){var t=e.value,n=Object.keys(t)[0],a=Object.values(t)[0];return""==a&&(a=null),r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:"#"+n},n))," ","= ",r.a.createElement("code",null,s(a)))}function h(e){var t=e.defaultValue,n=e.enumValues,l=e.examples,i=(e.groups,e.name),o=e.path,c=e.relevantWhen,s=e.required,u=e.unit,h=e.warnings,f=Object(a.useState)(!1),j=f[0],v=f[1];return r.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((function(e,t){return r.a.createElement("li",{key:t,className:"warning"},r.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)})),c&&r.a.createElement("li",null,"Only ",s?"required":"relevant"," when:"," ",r.a.createElement(b,{value:c})),void 0!==t?null!==t?r.a.createElement("li",null,"Default: ",r.a.createElement(p,{unit:u,value:t})):r.a.createElement("li",null,"No default"):null,n&&r.a.createElement("li",null,"Enum, must be one of: ",r.a.createElement(d,{values:n})),(l.length>1||l[0]!=t)&&r.a.createElement("li",null,r.a.createElement("div",{className:"show-more",onClick:function(){return v(!j)}},j?"Hide examples":"View examples"),j&&r.a.createElement(m,{name:i,path:o,values:l})))}t.a=function(e){var t=e.children,n=e.common,l=e.defaultValue,o=e.enumValues,c=e.examples,s=e.groups,u=e.name,d=e.path,m=e.relevantWhen,p=e.required,b=e.templateable,f=e.type,j=e.unit,v=e.warnings,g=Object(a.useState)(!1),O=g[0],y=(g[1],t);return O&&(y=y.filter((function(e){return"p"!=e.props.originalType}))),r.a.createElement("li",{className:i()({"field-required":p,"field-collapsed":O}),required:p},r.a.createElement("div",{className:"badges"},b&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),f&&r.a.createElement("span",{className:"badge badge--secondary"},f,j&&r.a.createElement(r.a.Fragment,null," (",j,")")),o&&Object.keys(o).length>0&&r.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),n&&r.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),p?r.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),y,!O&&"table"!=f&&r.a.createElement(h,{defaultValue:l,enumValues:o,examples:c,groups:s,name:u,path:d,relevantWhen:m,required:p,unit:j,warnings:v}))}}}]);