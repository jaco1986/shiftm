(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{875:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return d}));var i=n(1),s=n(9),a=(n(0),n(1128)),o={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Merge existing `tcp` and `udp` sources into a single `socket` source",description:"We've simplified our socket based sources into a single `socket` source",author_github:"https://github.com/binarylogic",pr_numbers:[1485],release:"0.7.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: sources","source: tcp","source: udp"]},c={date:"2020-01-03T00:00:00.000Z",description:"We've simplified our socket based sources into a single `socket` source",permalink:"/highlights/2020-01-03-merge-existing-tcp-and-udp-sources-into-a-single-socket-source",readingTime:"1 min read",source:"@site/highlights/2020-01-03-merge-existing-tcp-and-udp-sources-into-a-single-socket-source.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sources",permalink:"/highlights/tags/domain-sources"},{label:"source: tcp",permalink:"/highlights/tags/source-tcp"},{label:"source: udp",permalink:"/highlights/tags/source-udp"}],title:"Merge existing `tcp` and `udp` sources into a single `socket` source",truncated:!1,prevItem:{title:"Rename existing `tcp` sink to `socket` sink",permalink:"/highlights/2020-01-03-move-existing-tcp-sink-into-socket-sink"},nextItem:{title:"New AWS EC2 Medata Transform",permalink:"/highlights/2019-12-16-ec2-metadata"}},r=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],p={rightToc:r};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"tcp")," and ",Object(a.b)("inlineCode",{parentName:"p"},"udp")," sources no longer exist and have been merged into a new\n",Object(a.b)("inlineCode",{parentName:"p"},"socket")," type."),Object(a.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(a.b)("p",null,"Migration is straight forward, simply change the ",Object(a.b)("inlineCode",{parentName:"p"},"type")," to ",Object(a.b)("inlineCode",{parentName:"p"},"socket")," and add the\nfield ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," to match the socket type (",Object(a.b)("inlineCode",{parentName:"p"},"tcp")," or ",Object(a.b)("inlineCode",{parentName:"p"},"udp"),"):"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sources.my_tcp_source]\n-  type = "tcp"\n+  type = "socket"\n   address = "0.0.0.0:9000"\n+  mode = "tcp"\n')))}d.isMDXComponent=!0}}]);