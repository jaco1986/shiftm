(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{1044:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),o=(a(0),a(1139)),i={last_modified_on:"2020-04-13",$schema:"/.meta/.schemas/highlights.json",title:"Log Data Model Changes & Disk Buffers",description:"We're bringing our log data model closer to JSON",author_github:"https://github.com/binarylogic",pr_numbers:[1836,1898],release:"0.8.0",hide_on_release_notes:!0,tags:["type: breaking change","domain: buffers","event type: log"]},s={date:"2020-02-24T00:00:00.000Z",description:"We're bringing our log data model closer to JSON",permalink:"/highlights/2020-02-24-log-data-model-changes",readingTime:"1 min read",source:"@site/highlights/2020-02-24-log-data-model-changes.md",tags:[{label:"type: breaking change",permalink:"/highlights/tags/type-breaking-change"},{label:"domain: buffers",permalink:"/highlights/tags/domain-buffers"},{label:"event type: log",permalink:"/highlights/tags/event-type-log"}],title:"Log Data Model Changes & Disk Buffers",truncated:!1,prevItem:{title:"NixOS Support",permalink:"/highlights/2020-02-27-nixos-support"},nextItem:{title:"New Rename Fields Transform",permalink:"/highlights/2020-02-24-rename-fields-transform"}},l=[{value:"Upgrade Guide",id:"upgrade-guide",children:[]}],d={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are currently working to improve and optimize our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(o.b)("inlineCode",{parentName:"a"},"log")," data\nmodel"),". Initial versions of this data model were\nrepresented as a flat map for key access optimizations. This proved over time\nto not be as helpful as we had hoped. As a result we are working to move our\ndata model to be as close to JSON as possible. This means:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"null")," values are now supported in Vector's data model."),Object(o.b)("li",{parentName:"ol"},"Nested fields are represented in an actual nested representation.")),Object(o.b)("p",null,"Both of these changes bring Vector's internal data model closer to JSON.\nUnfortunately, this breaks disk buffer serialization which means you must\ndrain your disk bufffer before upgrading Vector."),Object(o.b)("h2",{id:"upgrade-guide"},"Upgrade Guide"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure Vector shuts down normally to ensure your disk buffers are fully\ndrained."),Object(o.b)("li",{parentName:"ol"},"That's it! Update Vector as usual.")),Object(o.b)("p",null,"Note, Vector will discard invalid disk buffer data, bad data will not prevent\nVector from starting."))}u.isMDXComponent=!0}}]);