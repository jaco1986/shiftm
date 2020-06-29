(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{1075:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return r}));var i=t(1),o=t(9),a=(t(0),t(1128)),l={last_modified_on:"2020-04-17",$schema:"/.meta/.schemas/highlights.json",title:"New Encoding Options",description:"Vector now lets you whitelist, blacklist, and format fields when events are encoded",author_github:"https://github.com/binarylogic",pr_numbers:[1915],release:"0.9.0",hide_on_release_notes:!1,tags:["type: enhancement","domain: sinks"]},s={date:"2020-03-04T00:00:00.000Z",description:"Vector now lets you whitelist, blacklist, and format fields when events are encoded",permalink:"/highlights/2020-03-04-encoding-only-fields-except-fields",readingTime:"1 min read",source:"@site/highlights/2020-03-04-encoding-only-fields-except-fields.md",tags:[{label:"type: enhancement",permalink:"/highlights/tags/type-enhancement"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"}],title:"New Encoding Options",truncated:!1,prevItem:{title:"Compression Now Available In The Kafka Sink",permalink:"/highlights/2020-03-09-kafka-sink-compression"},nextItem:{title:"Whitelist & Blacklist Fields When Encoding",permalink:"/highlights/2020-03-04-encoding-whitelist-blacklist"}},c=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],d={rightToc:c};function r(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Vector has deprecated the root-level ",Object(a.b)("inlineCode",{parentName:"p"},"encoding")," option in favor of new\n",Object(a.b)("inlineCode",{parentName:"p"},"encoding.*")," sub-options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"encoding.only_fields")," - Encode only the fields listed."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"encoding.except_fields")," - Encode all fields except the ones listed."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"encoding.codec")," - The codec to use (ex: ",Object(a.b)("inlineCode",{parentName:"li"},"json"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"encoding.timestamp_format")," - Customize how timestamps are serialized.")),Object(a.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(a.b)("p",null,"Updrading is easy:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.my-sink]\n   type = "..."\n-  encoding = "json"\n+  encoding.codec = "json"\n+  encoding.except_fields = ["_meta"] # optional\n+  encoding.timestamp_format = "rfc3339" # optional\n')))}r.isMDXComponent=!0}}]);