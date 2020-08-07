(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n(1),l=n(6),r=(n(0),n(928)),i=n(953),s=n(945),c=n(946),o=n(944),u=n(943),m={last_modified_on:"2020-05-15",delivery_guarantee:"at_least_once",component_title:"Splunk HEC",description:"The Vector `splunk_hec` source ingests data through the Splunk HTTP Event Collector protocol and outputs `log` events.",event_types:["log"],function_category:"receive",issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+splunk_hec%22",operating_systems:["Linux","MacOS","Windows"],sidebar_label:'splunk_hec|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/splunk_hec.rs",status:"beta",title:"Splunk HEC Source",unsupported_operating_systems:[]},p={id:"reference/sources/splunk_hec",title:"Splunk HEC Source",description:"The Vector `splunk_hec` source ingests data through the Splunk HTTP Event Collector protocol and outputs `log` events.",source:"@site/docs/reference/sources/splunk_hec.md",permalink:"/docs/reference/sources/splunk_hec",sidebar_label:'splunk_hec|["log"]'},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[{value:"address",id:"address",children:[]},{value:"tls",id:"tls",children:[]},{value:"token",id:"token",children:[]}]},{value:"Fields",id:"fields",children:[{value:"message",id:"message",children:[]},{value:"splunk_channel",id:"splunk_channel",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"TLS",id:"tls-1",children:[]}]}],b={rightToc:d};function h(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"splunk_hec")," source\ningests data through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/HECRESTendpoints"}),"Splunk HTTP Event Collector\nprotocol")," and outputs ","[",Object(r.b)("inlineCode",{parentName:"p"},"log"),"][docs.data-model.log]","\nevents."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)(i.a,{icon:!1,type:"danger",className:"list--icons list--icons--warnings",mdxType:"Alert"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This component exposes a configured port. You must ensure your network allows access to this port."))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(o.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  type = "splunk_hec" # required\n  address = "0.0.0.0:80" # optional, default\n  token = "A94A8FE5CCB19BA61C4C08" # optional, no default\n'))),Object(r.b)(u.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.my_source_id]\n  # General\n  type = "splunk_hec" # required\n  address = "0.0.0.0:80" # optional, default\n  token = "A94A8FE5CCB19BA61C4C08" # optional, no default\n\n  # TLS\n  tls.ca_file = "/path/to/certificate_authority.crt" # optional, no default\n  tls.crt_file = "/path/to/host_certificate.crt" # optional, no default\n  tls.enabled = false # optional, default\n  tls.key_file = "/path/to/host_certificate.key" # optional, no default\n  tls.key_pass = "${KEY_PASS_ENV_VAR}" # optional, no default\n  tls.verify_certificate = false # optional, default\n')))),Object(r.b)(s.a,{filters:!0,mdxType:"Fields"},Object(r.b)(c.a,{common:!0,defaultValue:"0.0.0.0:80",enumValues:null,examples:["0.0.0.0:80"],groups:[],name:"address",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"address"},"address"),Object(r.b)("p",null,"The address to accept connections on.")),Object(r.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[],groups:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"tls"},"tls"),Object(r.b)("p",null,"Configures the TLS options for connections from this source."),Object(r.b)(s.a,{filters:!1,mdxType:"Fields"},Object(r.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],groups:[],name:"ca_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"ca_file"},"ca_file"),Object(r.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format\n(X.509), or an inline CA certificate in PEM format.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],groups:[],name:"crt_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"crt_file"},"crt_file"),Object(r.b)("p",null,"Absolute path to a certificate file used to identify this server, in DER or PEM\nformat (X.509) or PKCS#12, or an inline certificate in PEM format. If this is\nset and is not a PKCS#12 archive, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#key_file"}),Object(r.b)("inlineCode",{parentName:"a"},"key_file"))," must also be set. This is required\nif ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#enabled"}),Object(r.b)("inlineCode",{parentName:"a"},"enabled"))," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),".")),Object(r.b)(c.a,{common:!0,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"enabled",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"enabled"},"enabled"),Object(r.b)("p",null,"Require TLS for incoming connections. If this is set, an identity certificate\nis also required.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],groups:[],name:"key_file",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"key_file"},"key_file"),Object(r.b)("p",null,"Absolute path to a private key file used to identify this server, in DER or PEM\nformat (PKCS#8), or an inline private key in PEM format.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["${KEY_PASS_ENV_VAR}","PassWord1"],groups:[],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h4",{id:"key_pass"},"key_pass"),Object(r.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless\n",Object(r.b)("inlineCode",{parentName:"p"},"key_file")," is set.")),Object(r.b)(c.a,{common:!1,defaultValue:!1,enumValues:null,examples:[!1,!0],groups:[],name:"verify_certificate",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,warnings:[{visibility_level:"option",text:"Setting this to `false` will cause OpenSSL to not request a certificate from the client",option_name:"verify_certificate"}],mdxType:"Field"},Object(r.b)("h4",{id:"verify_certificate"},"verify_certificate"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", Vector will require a TLS certificate from the connecting host and\nterminate the connection if it is not valid. If ",Object(r.b)("inlineCode",{parentName:"p"},"false")," (the default), Vector\nwill not request a certificate from the client.")))),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["A94A8FE5CCB19BA61C4C08"],groups:[],name:"token",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"token"},"token"),Object(r.b)("p",null,"If supplied, incoming requests must supply this token in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization"),"\nheader, just as a client would if it was communicating with the Splunk HEC\nendpoint directly. If ",Object(r.b)("em",{parentName:"p"},"not")," supplied, the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header will be\nignored and requests will not be authenticated."))),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="example log event"',title:'"example',log:!0,'event"':!0}),'{\n  // ...\n  "message": "Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100",\n  "splunk_channel": "2019-11-01T21:15:47+00:00",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n  // ...\n}\n')),Object(r.b)(s.a,{filters:!0,mdxType:"Fields"},Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],groups:[],name:"message",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The raw log message, unaltered.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],groups:[],name:"splunk_channel",path:null,relevantWhen:null,required:!0,templateable:!1,type:"timestamp",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"splunk_channel"},"splunk_channel"),Object(r.b)("p",null,"The Splunk channel, value of the ",Object(r.b)("inlineCode",{parentName:"p"},"X-Splunk-Request-Channel")," header.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],groups:[],name:"timestamp",path:null,relevantWhen:null,required:!0,templateable:!1,type:"timestamp",unit:null,warnings:[],mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"If the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fevent"}),"Splunk HEC event endpoint")," is used then\nthe value of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#time"}),Object(r.b)("inlineCode",{parentName:"a"},"time"))," field will be used. If the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fraw"}),"Splunk HEC raw\nendpoint")," is used, then the current time the\nevent was received will be used."))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example input"',title:'"Example','input"':!0}),"Hello world\n")),Object(r.b)("p",null,"A log event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example log event"',title:'"Example',log:!0,'event"':!0}),'{\n  "timestamp": <2019-07-26T20:30:27.000443Z>, // time event was received,\n  "host": "my.host.com", // value of the `Host` header\n  "splunk_channel": "FE0ECFAD-13D5-401B-847D-77833BD77131" // value of the `X-Splunk-Request-Channel` header\n\n}\n')),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables")," section."),Object(r.b)("h3",{id:"tls-1"},"TLS"),Object(r.b)("p",null,"Vector uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openssl.org/"}),"Openssl")," for TLS protocols for it's battle-tested\nand reliable security. You can enable and adjust TLS behavior via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#tls"}),Object(r.b)("inlineCode",{parentName:"a"},"tls.*")),"\noptions."))}h.isMDXComponent=!0},940:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(938),i=n(936),s=n.n(i);n(93);var c=function({className:e,size:t,style:n,text:a}){return l.a.createElement(r.a,{to:"/vic/",className:s()("vic","vic--"+t,e)},l.a.createElement("div",{className:"icon"},l.a.createElement("img",{src:`/img/vicmojis/vic${n}.svg`,alt:"Vic - The Vector Mascot"})),a&&l.a.createElement("div",{className:"text"},a))};t.a=function({text:e}){return l.a.createElement("section",{className:"empty"},l.a.createElement(c,{style:"no",text:e}))}},942:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),r=n(951),i=n.n(r);t.a=function({currentState:e,humanize:t,icon:n,name:a,setState:r,values:s}){if(0==s.size)return null;let c=Array.from(s);return l.a.createElement(l.a.Fragment,null,c.map((s,c)=>{let o="string"==typeof s&&t?i()(s):s;return l.a.createElement("label",{key:c},l.a.createElement("input",{checked:e.has(s),name:a,onChange:t=>{let n=new Set(e);t.currentTarget.checked?n.add(s):n.delete(s),r(n)},type:"checkbox"}),o&&l.a.createElement(l.a.Fragment,null,n?l.a.createElement("i",{className:"feather icon-"+n}):""," ",o))}))}},945:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),r=n(942),i=n(940),s=n(949),c=n.n(s);t.a=function({children:e,filters:t}){const[n,s]=Object(a.useState)(!1),[o,u]=Object(a.useState)(new Set),[m,p]=Object(a.useState)(!1),[d,b]=Object(a.useState)(null);let h=[];e&&(h=Array.isArray(e)?e:[e]);let f=h.some(e=>e.props.common),g=c()(h).flatMap(e=>e.props.groups).uniq().value(),v=h.some(e=>e.props.required),O=h;return n&&(O=O.filter(e=>e.props.common)),o.size>0&&(O=O.filter(e=>Array.from(o).every(t=>e.props.groups.includes(t)))),m&&(O=O.filter(e=>e.props.required)),d&&(O=O.filter(e=>e.props.name.toLowerCase().includes(d.toLowerCase()))),l.a.createElement(l.a.Fragment,null,h.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"search"},l.a.createElement("span",{className:"search--result-count"},O.length," items"),l.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:e=>b(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"filter--choices"},l.a.createElement(r.a,{values:g,currentState:o,setState:u}),f&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:n}),"common"),v&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>p(e.currentTarget.checked),checked:m}),"required")))):null,!Array.isArray(O)||O.length>0?l.a.createElement("ul",{className:"connected-list"},O):l.a.createElement(i.a,{text:"no components found"}))}},946:function(e,t,n){"use strict";n(12);var a=n(0),l=n.n(a),r=n(936),i=n.n(r),s=(n(928),n(952));function c(e){return e.includes(".")?'"'+e+'"':e}function o(e){return"string"==typeof e&&e.includes("\n")?`"""\n${e}\n"""`:JSON.stringify(e)}function u(e,t){return(n=t)&&n.constructor===Object?"name"in t&&"value"in t?`${c(t.name)} = ${o(t.value)}`:`${c(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${c(e)} = ${o(t)}`:o(t);var n}function m({values:e}){let t=[];if(Array.isArray(e))for(var n in e){let a=e[n];t.push(l.a.createElement("code",{key:a},o(a))),t.push(" ")}else for(var a in e)t.push(l.a.createElement("code",{key:a,className:"with-info-icon",title:e[a]},o(a))),t.push(" ");return t}function p({name:e,path:t,values:n}){let a="";return n.forEach((function(n){t&&(a+=t+"."),a+=u(e,n)+"\n"})),l.a.createElement("div",null,l.a.createElement(s.a,{className:"language-toml"},a))}function d({unit:e,value:t}){let n="";return e&&(n=l.a.createElement(l.a.Fragment,null," (",e,")")),l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,o(t)),n)}function b({value:e}){let t=Object.keys(e)[0],n=Object.values(e)[0];return""==n&&(n=null),l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:"#"+t},t))," ","= ",l.a.createElement("code",null,o(n)))}function h({defaultValue:e,enumValues:t,examples:n,groups:r,name:i,path:s,relevantWhen:c,required:o,unit:u,warnings:h}){const[f,g]=Object(a.useState)(!1);return l.a.createElement("ul",{className:"info"},h&&h.length>0&&h.map((e,t)=>l.a.createElement("li",{key:t,className:"warning"},l.a.createElement("i",{className:"feather icon-alert-triangle"})," WARNING:"," ",e.text)),c&&l.a.createElement("li",null,"Only ",o?"required":"relevant"," when:"," ",l.a.createElement(b,{value:c})),void 0!==e?null!==e?l.a.createElement("li",null,"Default: ",l.a.createElement(d,{unit:u,value:e})):l.a.createElement("li",null,"No default"):null,t&&l.a.createElement("li",null,"Enum, must be one of: ",l.a.createElement(m,{values:t})),(n.length>1||n[0]!=e)&&l.a.createElement("li",null,l.a.createElement("div",{className:"show-more",onClick:()=>g(!f)},f?"Hide examples":"View examples"),f&&l.a.createElement(p,{name:i,path:s,values:n})))}t.a=function({children:e,common:t,defaultValue:n,enumValues:r,examples:s,groups:c,name:o,path:u,relevantWhen:m,required:p,templateable:d,type:b,unit:f,warnings:g}){const[v,O]=Object(a.useState)(!1);let j=e;return v&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("li",{className:i()({"field-required":p,"field-collapsed":v}),required:p},l.a.createElement("div",{className:"badges"},d&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),b&&l.a.createElement("span",{className:"badge badge--secondary"},b,f&&l.a.createElement(l.a.Fragment,null," (",f,")")),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary with-info-icon",title:"This option is an enumation and only allows specific values"},"enum"),t&&l.a.createElement("span",{className:"badge badge--primary with-info-icon",title:"This is a popular that we recommend for getting started"},"common"),p?l.a.createElement("span",{className:"badge badge--danger"},"required",m&&"*"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!v&&"table"!=b&&l.a.createElement(h,{defaultValue:n,enumValues:r,examples:s,groups:c,name:o,path:u,relevantWhen:m,required:p,unit:f,warnings:g}))}}}]);