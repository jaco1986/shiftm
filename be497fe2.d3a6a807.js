(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{887:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(1),s=n(9),o=(n(0),n(1139)),a={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Merge existing `tcp` and `udp` sources into a single `socket` source",description:"We've simplified our socket based sources into a single `socket` source",author_github:"https://github.com/binarylogic",pr_numbers:[1485],release:"0.7.0",hide_on_release_notes:!1,tags:["type: breaking change","domain: sources","source: tcp","source: udp"]},r={date:"2020-01-03T00:00:00.000Z",description:"We've simplified our socket based sources into a single `socket` source",permalink:"/highlights/2020-01-03-merge-existing-tcp-and-udp-sources-into-a-single-socket-source",readingTime:"1 min read",source:"@site/highlights/2020-01-03-merge-existing-tcp-and-udp-sources-into-a-single-socket-source.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sources",permalink:"/highlights/tags/domain-sources"},{label:"source: tcp",permalink:"/highlights/tags/source-tcp"},{label:"source: udp",permalink:"/highlights/tags/source-udp"}],title:"Merge existing `tcp` and `udp` sources into a single `socket` source",truncated:!1,prevItem:{title:"New Prometheus Source",permalink:"/highlights/2020-01-07-prometheus-source"},nextItem:{title:"Rename existing `tcp` sink to `socket` sink",permalink:"/highlights/2020-01-03-move-existing-tcp-sink-into-socket-sink"}},c=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"tcp")," and ",Object(o.b)("inlineCode",{parentName:"p"},"udp")," sources no longer exist and have been merged into a new\n",Object(o.b)("inlineCode",{parentName:"p"},"socket")," type."),Object(o.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(o.b)("p",null,"Migration is straight forward, simply change the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," to ",Object(o.b)("inlineCode",{parentName:"p"},"socket")," and add the\nfield ",Object(o.b)("inlineCode",{parentName:"p"},"mode")," to match the socket type (",Object(o.b)("inlineCode",{parentName:"p"},"tcp")," or ",Object(o.b)("inlineCode",{parentName:"p"},"udp"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sources.my_tcp_source]\n-  type = "tcp"\n+  type = "socket"\n   address = "0.0.0.0:9000"\n+  mode = "tcp"\n')))}d.isMDXComponent=!0}}]);