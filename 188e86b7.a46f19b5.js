(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(1),i=(n(0),n(1117)),a=n(1161),r=n(1154),l=n(1123),c=n(1120);const s={last_modified_on:"2020-04-01",$schema:"/.meta/.schemas/guides.json",title:"Hello World. Your First Vector Pipeline.",description:'Building your very first Vector pipeline, the "Hello World" of Vector tutorials.',series_position:1,author_github:"https://github.com/Jeffail",tags:["type: tutorial","domain: config"]},b={categories:[{name:"getting-started",title:"Getting Started",description:"Take Vector from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Hello World. Your First Vector Pipeline.",description:'Building your very first Vector pipeline, the "Hello World" of Vector tutorials.',permalink:"/guides/getting-started/your-first-pipeline",readingTime:"3 min read",seriesPosition:1,source:"@site/guides/getting-started/your-first-pipeline.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: config",permalink:"/guides/tags/domain-config"}],title:"Hello World. Your First Vector Pipeline.",truncated:!1,nextItem:{title:"Structuring Your Log Data",permalink:"/guides/getting-started/structuring"}},d=[{value:"Tutorial",id:"tutorial",children:[{value:"Install Vector",id:"install-vector",children:[]},{value:"Configure it",id:"configure-it",children:[]},{value:"Hello World!",id:"hello-world",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:d};function u({components:e,...t}){return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Vector is a simple beast to tame, in this guide we'll send an\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"event")," through it and touch on some basic concepts."),Object(i.b)("h2",{id:"tutorial"},"Tutorial"),Object(i.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("h3",{id:"install-vector"},"Install Vector"),Object(i.b)("p",null,"If you haven't already, install Vector. Here's a script for the lazy:"),Object(i.b)(l.a,{mdxType:"InstallationCommand"}),Object(i.b)("p",null,"Or ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"choose your preferred installation method"),".")),Object(i.b)("li",null,Object(i.b)("h3",{id:"configure-it"},"Configure it"),Object(i.b)("p",null,"Vector runs with a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"configuration file")," that tells it which\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/components/"}),"components")," to run and how they should interact. Let's create\none that simply pipes a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(i.b)("inlineCode",{parentName:"a"},"stdin")," source")," to a\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/sinks/console/"}),Object(i.b)("inlineCode",{parentName:"a"},"console")," sink"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.foo]\n  type = "stdin"\n\n[sinks.bar]\n  inputs = ["foo"]\n  type = "console"\n  encoding.codec = "text"\n')),Object(i.b)(r.a,{mdxType:"CodeExplanation"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/reference/sources/stdin/"}),Object(i.b)("inlineCode",{parentName:"a"},"stdin")," source")," tells Vector to receive data over ",Object(i.b)("inlineCode",{parentName:"li"},"STDIN"),"."),Object(i.b)("li",{parentName:"ul"},"The ","[",Object(i.b)("inlineCode",{parentName:"li"},"console")," source]","docs.sinks.stdout] tells Vector to simply print the data to ",Object(i.b)("inlineCode",{parentName:"li"},"STDOUT"),"."),Object(i.b)("li",{parentName:"ul"},"The  ",Object(i.b)("inlineCode",{parentName:"li"},"encoding.codec")," tells Vector to print the data as plain text (unencoded)."))),Object(i.b)("p",null,"Every component within a Vector config has an identifier chosen by you. This\nallows you to specify where a sink should gather its data from (using the\n",Object(i.b)("inlineCode",{parentName:"p"},"inputs")," field).")),Object(i.b)("li",null,Object(i.b)("h3",{id:"hello-world"},"Hello World!"),Object(i.b)("p",null,"That's it for our first config, now pipe an event through it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"echo 'Hello World!' | vector --config ./vector.toml\n")),Object(i.b)(r.a,{mdxType:"CodeExplanation"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"echo")," statement sends a single log to Vector over ",Object(i.b)("inlineCode",{parentName:"li"},"STDIN")),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"vector...")," command starts Vector with our previously created config file."))),Object(i.b)("p",null,"Your input event will get echoed back (along with some service logs) unchanged:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"... some logs ...\nHello World!\n")),Object(i.b)("p",null,"That's because the raw input text of our source was captured internally within\nthe field ",Object(i.b)("inlineCode",{parentName:"p"},"message"),", and the ",Object(i.b)("inlineCode",{parentName:"p"},"text")," ",Object(i.b)("inlineCode",{parentName:"p"},"encoding.codec")," option of our sink prints\nthe raw contents of ",Object(i.b)("inlineCode",{parentName:"p"},"message")," only."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Hey, kid, if you want to see something cool try setting ",Object(i.b)("inlineCode",{parentName:"p"},'encoding.codec = "json"'),"\nin the sink config."))))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"If you expected something more interesting to happen then that's on you. The\ntext came out unchanged because we didn't ask Vector to change it, we can remedy\nthat by following the next guide in the series."))}u.isMDXComponent=!0}}]);