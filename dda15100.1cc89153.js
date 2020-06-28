(window.webpackJsonp=window.webpackJsonp||[]).push([[838],{997:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return p}));var n=i(1),s=i(9),o=(i(0),i(1128)),a={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"The `elasticsearch` sink `compression` option now defaults to `none`",description:"Compression is not supported by all Elasticsearch service providers",author_github:"https://github.com/binarylogic",hide_on_release_notes:!1,pr_numbers:[2219],release:"0.9.0",tags:["type: breaking change","domain: sinks","sink: elasticsearch"]},r={date:"2020-04-05T00:00:00.000Z",description:"Compression is not supported by all Elasticsearch service providers",permalink:"/highlights/2020-04-05-default-compression-to-none",readingTime:"1 min read",source:"@site/highlights/2020-04-05-default-compression-to-none.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: sinks",permalink:"/highlights/tags/domain-sinks"},{label:"sink: elasticsearch",permalink:"/highlights/tags/sink-elasticsearch"}],title:"The `elasticsearch` sink `compression` option now defaults to `none`",truncated:!1,prevItem:{title:"Use external tagging for metrics serialization",permalink:"/highlights/2020-04-07-use-external-tagging-for-metrics-serialization"},nextItem:{title:"More Condition Predicates",permalink:"/highlights/2020-04-01-more-condition-predicates"}},c=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],l={rightToc:c};function p(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To optimize throughput we originally defaulted the ",Object(o.b)("inlineCode",{parentName:"p"},"elasticsearch")," sink\n",Object(o.b)("inlineCode",{parentName:"p"},"compression")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"gzip"),". It is our philosohpy that Vector's defaults\nshould optimize performance and throughput, but not at the expense of causing\nerrors. Unfortunately, AWS hosted Elasticsearch does not support compression,\nand therefore we've made this feature opt-in."),Object(o.b)("h3",{id:"upgrade-guide"},"Upgrade Guide"),Object(o.b)("p",null,"Upgrading is easy. Add the following if you want to enabled Gzip compression:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sinks.es]\n   type = "elasticsearch"\n+  compression = "gzip"\n')))}p.isMDXComponent=!0}}]);