(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{782:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(1),i=a(9),r=(a(0),a(1139)),s={last_modified_on:"2020-03-31",$schema:"/.meta/.schemas/highlights.json",title:"New AWS EC2 Medata Transform",description:"Enrich your events with EC2 metadata",author_github:"https://github.com/binarylogic",pr_numbers:[1325],release:"0.6.0",hide_on_release_notes:!1,tags:["type: new feature","domain: transforms","transform: aws_ec2_metadata"]},o={date:"2019-12-16T00:00:00.000Z",description:"Enrich your events with EC2 metadata",permalink:"/highlights/2019-12-16-ec2-metadata",readingTime:"1 min read",source:"@site/highlights/2019-12-16-ec2-metadata.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: transforms",permalink:"/highlights/tags/domain-transforms"},{label:"transform: aws_ec2_metadata",permalink:"/highlights/tags/transform-aws-ec-2-metadata"}],title:"New AWS EC2 Medata Transform",truncated:!0,prevItem:{title:"Rename existing `tcp` sink to `socket` sink",permalink:"/highlights/2020-01-03-move-existing-tcp-sink-into-socket-sink"},nextItem:{title:"New Kubernetes Source (alpha)",permalink:"/highlights/2019-12-14-kubernetes-source-alpha"}},c=[{value:"Why?",id:"why",children:[]}],h={rightToc:c};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Are your events the laughing-stock of the data warehouse? Then enrich them with\nour brand spanking new ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/aws_ec2_metadata/"}),Object(r.b)("inlineCode",{parentName:"a"},"aws_ec2_metadata")," transform"),"."),Object(r.b)("p",null,"Configuration isn't complicated, just add and hook up the transform. If you\ndon't want all enrichments added then whitelist them with the ",Object(r.b)("inlineCode",{parentName:"p"},"fields")," option:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.fill_me_up]\n  type = "aws_ec2_metadata"\n  inputs = ["my-source-id"]\n  fields = [\n    "instance-id",\n    "local-hostname",\n    "public-hostname",\n    "public-ipv4",\n    "ami-id",\n    "availability-zone",\n    "region",\n  ]\n')),Object(r.b)("p",null,"For more guidance get on the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/aws_ec2_metadata/"}),"reference page"),"."),Object(r.b)("h2",{id:"why"},"Why?"),Object(r.b)("p",null,"Data is better when it's thicc \ud83d\udc4c"))}m.isMDXComponent=!0}}]);