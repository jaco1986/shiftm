(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var o=a(1),r=a(6),n=(a(0),a(943)),c=a(970),i=a(965),s=a(964),l={last_modified_on:"2020-04-01",$schema:"/.meta/.schemas/guides.json",title:"Your Messages",description:"View your sent and received messages",series_position:3,author_github:"https://github.com/binarylogic",tags:["type: guide","domain: profile"]},b={categories:[{name:"getting-started",title:"Getting Started",description:"Simple step-by-step profile guides.",permalink:"/guides/getting-started"}],coverLabel:"Your Messages",description:"View your sent and received messages",permalink:"/guides/getting-started/messages",readingTime:"4 min read",seriesPosition:3,source:"@site/guides/getting-started/messages.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"domain: profile",permalink:"/guides/tags/domain-profile"}],title:"Your Messages",truncated:!1,prevItem:{title:"Complete your verification",permalink:"/guides/getting-started/verification"},nextItem:{title:"Reviews",permalink:"/guides/getting-started/reviews"}},u=[{value:"Metrics",id:"metrics",children:[]},{value:"Logs",id:"logs",children:[]},{value:"What To Expect",id:"what-to-expect",children:[{value:"Benchmarks",id:"benchmarks",children:[]},{value:"Throughput",id:"throughput",children:[]},{value:"CPU",id:"cpu",children:[]},{value:"Memory",id:"memory",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Now that you've deployed Vector you'll want to make sure it's healthy and\nperforming. This guide will cover how to monitor and observe Vector."),Object(n.b)("h2",{id:"metrics"},"Metrics"),Object(n.b)(c.a,{type:"info",mdxType:"Alert"},Object(n.b)("p",null,"Internal observability of Vector is being ",Object(n.b)("em",{parentName:"p"},"actively")," developed and is on our\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/timberio/vector/milestones?direction=asc&sort=due_date&state=open"}),"1.0 roadmap"),". You can expect a new ",Object(n.b)("inlineCode",{parentName:"p"},"internal_metrics"),"\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"source")," that will allow you to run internal Vector metrics\nthrough a Vector pipeline.")),Object(n.b)("h2",{id:"logs"},"Logs"),Object(n.b)("p",null,"Vector writes all logs to ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),", accessing these logs is dependent on how\nyou installed Vector."),Object(n.b)(i.a,{block:!1,centered:!0,groupId:"interfaces",placeholder:"How did you install Vector?",select:!0,size:"lg",values:[{group:"Package managers",label:"DPKG",value:"dpkg"},{group:"Platforms",label:"Docker CLI",value:"docker-cli"},{group:"Platforms",label:"Docker Compose",value:"docker-compose"},{group:"Package managers",label:"Homebrew",value:"homebrew"},{group:"Package managers",label:"MSI",value:"msi"},{group:"Package managers",label:"Nix",value:"nix"},{group:"Package managers",label:"RPM",value:"rpm"},{group:"Nones",label:"Vector CLI",value:"vector-cli"}],mdxType:"Tabs"},Object(n.b)(s.a,{value:"dpkg",mdxType:"TabItem"},Object(n.b)("p",null,"The Vector DEB package installs Vector as a Systemd service. Logs can be\naccessed through the ",Object(n.b)("inlineCode",{parentName:"p"},"journalctl")," utility:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo journalctl -fu vector\n"))),Object(n.b)(s.a,{value:"docker-cli",mdxType:"TabItem"},Object(n.b)("p",null,"If you've started Vector through the ",Object(n.b)("inlineCode",{parentName:"p"},"docker")," CLI you can access Vector's logs\nvia the ",Object(n.b)("inlineCode",{parentName:"p"},"docker logs")," command. First, find the Vector container ID:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker ps | grep vector\n")),Object(n.b)("p",null,"Copy Vector's container ID and use it to tail the logs:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker logs -f <container-id>\n"))),Object(n.b)(s.a,{value:"docker-compose",mdxType:"TabItem"},Object(n.b)("p",null,"If you started Vector through Docker compose you can use the following command\nto access Vector's logs:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose logs -f vector\n")),Object(n.b)("p",null,"Replace ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," with the name of Vector's service if it is not called ",Object(n.b)("inlineCode",{parentName:"p"},"vector"),".")),Object(n.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(n.b)("p",null,"When Vector is started through Homebrew the logs are automatically routed to\n",Object(n.b)("inlineCode",{parentName:"p"},"/usr/local/var/log/vector.log"),". You can tail them with the ",Object(n.b)("inlineCode",{parentName:"p"},"tail")," utility:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"tail -f /usr/local/var/log/vector.log\n"))),Object(n.b)(s.a,{value:"msi",mdxType:"TabItem"},Object(n.b)("p",null,"The Vector MSI package does not install Vector into a proces manager. Therefore,\nVector must be started by executing the Vector binary directly. Vector's logs\nare written to ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),". You are in charge of routing ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),", and this\ndetermines how you access Vector's logs.")),Object(n.b)(s.a,{value:"nix",mdxType:"TabItem"},Object(n.b)("p",null,"The Vector Nix package does not install Vector into a proces manager. Therefore,\nVector must be started by executing the Vector binary directly. Vector's logs\nare written to ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),". You are in charge of routing ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),", and this\ndetermines how you access Vector's logs.")),Object(n.b)(s.a,{value:"rpm",mdxType:"TabItem"},Object(n.b)("p",null,"The Vector RPM package installs Vector as a Systemd service. Logs can be\naccessed through the ",Object(n.b)("inlineCode",{parentName:"p"},"journalctl")," utility:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo journalctl -fu vector\n"))),Object(n.b)(s.a,{value:"vector-cli",mdxType:"TabItem"},Object(n.b)("p",null,"If you are starting Vector directly from the Vector CLI then all logs will be\nwritten to ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),". You are in charge of routing ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT"),", and this determines\nhow you access Vector's logs."))),Object(n.b)("h2",{id:"what-to-expect"},"What To Expect"),Object(n.b)("p",null,"How Vector performs is largely dependent on your configuration, hardware,\ndata shape, and volume. No two deployments perform the same! With that said,\nVector should perform well in most cases. The following sections provide general\nreferences points for what you can expect in production."),Object(n.b)("h3",{id:"benchmarks"},"Benchmarks"),Object(n.b)("p",null,"Our ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://vector.dev/#performance"}),"performance benchmarks")," are the best point of\nreference when understanding how Vector performs. This data should give you a\ngeneral idea of Vector's performance under different scenarios."),Object(n.b)("h3",{id:"throughput"},"Throughput"),Object(n.b)("p",null,"Vector should be relatively high throughput. One a 4 core machine should produce\nthroughput between 20mb/s to 100mb/s depending on your data and configuration."),Object(n.b)("h3",{id:"cpu"},"CPU"),Object(n.b)("p",null,"Vector is mostly CPU bound and benefits from more cores and CPU efficient\nmachines."),Object(n.b)("h3",{id:"memory"},"Memory"),Object(n.b)("p",null,"Vector should use very little memory. For average pipelines Vector uses around\n200mb, but this can vary widely dependind on your configuraton."))}d.isMDXComponent=!0}}]);