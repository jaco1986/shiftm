(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(1128)),o={last_modified_on:"2020-04-16",$schema:"/.meta/.schemas/highlights.json",title:"Use external tagging for metrics serialization",description:"We've improved the way we serialize metrics data",author_github:"https://github.com/binarylogic",hide_on_release_notes:!0,pr_numbers:[2231],release:"0.9.0",tags:["type: breaking change"]},s={date:"2020-04-07T00:00:00.000Z",description:"We've improved the way we serialize metrics data",permalink:"/highlights/2020-04-07-use-external-tagging-for-metrics-serialization",readingTime:"1 min read",source:"@site/highlights/2020-04-07-use-external-tagging-for-metrics-serialization.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"}],title:"Use external tagging for metrics serialization",truncated:!1,prevItem:{title:"The Vector Source Now Accepts Metrics",permalink:"/highlights/2020-04-07-vector-to-vector-metrics"},nextItem:{title:"The `elasticsearch` sink `compression` option now defaults to `none`",permalink:"/highlights/2020-04-05-default-compression-to-none"}},c=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We've improved the serialized structure of our metrics events. This change\nshould only affect a very small, and rare, number of users. If you are consuming\nmetrics data from Vector's ",Object(r.b)("inlineCode",{parentName:"p"},"console")," sink then you'll need to adjust any\ndownstream sytems to work with the new structure."),Object(r.b)("p",null,"For example, previously a counter was serialized like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "login.count",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "value": {\n    "type": "counter", // <-- metric type\n    "value": 24.2\n  }\n}\n')),Object(r.b)("p",null,"It now serialized like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "login.count",\n  "timestamp": "2019-11-01T21:15:47+00:00",\n  "kind": "absolute",\n  "tags": {\n    "host": "my.host.com"\n  },\n  "counter": { // <-- metric type\n    "value": 24.2\n  }\n}\n')),Object(r.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(r.b)("p",null,"Upgrading should involve handling changes in any systems that are consuming\nmetrics data from the ",Object(r.b)("inlineCode",{parentName:"p"},"console")," sink."))}u.isMDXComponent=!0}}]);