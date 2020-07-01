(window.webpackJsonp=window.webpackJsonp||[]).push([[891],{1050:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var c=a(1),r=(a(0),a(1130)),n=a(1174),l=a(1133),b=a(1165),o=a(1164);const i={last_modified_on:"2020-06-11",title:"Install Vector From Archives",sidebar_label:"From Archives",description:"Install Vector from pre-compiled archives"},p={id:"setup/installation/manual/from-archives",title:"Install Vector From Archives",description:"Install Vector from pre-compiled archives",source:"@site/docs/setup/installation/manual/from-archives.md",permalink:"/docs/setup/installation/manual/from-archives",sidebar_label:"From Archives"},s=[{value:"Installation",id:"installation",children:[]},{value:"Next Steps",id:"next-steps",children:[{value:"Configuring",id:"configuring",children:[]},{value:"Data Directory",id:"data-directory",children:[]},{value:"Service Managers",id:"service-managers",children:[]},{value:"Updating",id:"updating",children:[]}]}],m={rightToc:s};function d({components:e,...t}){return Object(r.b)("wrapper",Object(c.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page covers installing Vector from a pre-built archive. These archives\ncontain the ",Object(r.b)("inlineCode",{parentName:"p"},"vector")," binary as well as supporting configuration files."),Object(r.b)(n.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"We recommend installing Vector through a supported ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/setup/installation/platforms/"}),"platform"),"\nor ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/setup/installation/package-managers/"}),"package manager"),", if possible. These handle\npermissions, directory creation, and other intricacies covered in the\n",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"#next-steps"}),"Next Steps")," section.")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(b.a,{block:!0,defaultValue:"aarch64-unknown-linux-musl-tar-gz",urlKey:"file_name",values:[{label:"Linux (ARM64)",value:"aarch64-unknown-linux-musl-tar-gz"},{label:"Linux (ARMv7)",value:"armv7-unknown-linux-musleabihf-tar-gz"},{label:"MacOS (x86_64)",value:"x86_64-apple-darwin-tar-gz"},{label:"Windows (x86_64, 7+)",value:"x86_64-pc-windows-msvc-zip"},{label:"Linux (x86_64)",value:"x86_64-unknown-linux-musl-tar-gz"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"vector-aarch64-unknown-linux-musl-tar-gz",mdxType:"TabItem"},Object(r.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"download--unpack-the-archive"}),"Download & unpack the archive"),Object(r.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.9.2)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.9.X/vector-aarch64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(r.b)(o.a,{value:"nightly",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-aarch64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"change-into-the-vector-directory"}),"Change into the ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"move-vector-into-your-path"}),"Move ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," into your $PATH"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:\\$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"start-vector"}),"Start Vector"),Object(r.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n")))))),Object(r.b)(o.a,{value:"vector-armv7-unknown-linux-musleabihf-tar-gz",mdxType:"TabItem"},Object(r.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"download--unpack-the-archive-1"}),"Download & unpack the archive"),Object(r.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.9.2)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.9.X/vector-armv7-unknown-linux-musleabihf.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(r.b)(o.a,{value:"nightly",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-armv7-unknown-linux-musleabihf.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"change-into-the-vector-directory-1"}),"Change into the ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"move-vector-into-your-path-1"}),"Move ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," into your $PATH"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:\\$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"start-vector-1"}),"Start Vector"),Object(r.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n")))))),Object(r.b)(o.a,{value:"vector-x86_64-apple-darwin-tar-gz",mdxType:"TabItem"},Object(r.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"download--unpack-the-archive-2"}),"Download & unpack the archive"),Object(r.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.9.2)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.9.X/vector-x86_64-apple-darwin.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(r.b)(o.a,{value:"nightly",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-x86_64-apple-darwin.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"change-into-the-vector-directory-2"}),"Change into the ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"move-vector-into-your-path-2"}),"Move ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," into your $PATH"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:\\$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"start-vector-2"}),"Start Vector"),Object(r.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n")))))),Object(r.b)(o.a,{value:"vector-x86_64-pc-windows-msvc-zip",mdxType:"TabItem"},Object(r.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"download-vector-release-archive-latest"}),"Download Vector release archive (latest)"),Object(r.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.9.2)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"powershell Invoke-WebRequest https://packages.timber.io/vector/0.9.X/vector-x86_64-pc-windows-msvc.zip -OutFile vector-x86_64-pc-windows-msvc.zip\n"))),Object(r.b)(o.a,{value:"nightly",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"powershell Invoke-WebRequest https://packages.timber.io/vector/nightly/latest/vector-x86_64-pc-windows-msvc.zip -OutFile vector-x86_64-pc-windows-msvc.zip\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"extract-files-from-the-archive"}),"Extract files from the archive"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"powershell Expand-Archive vector-x86_64-pc-windows-msvc.zip .\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"navigate-to-the-vector-directory"}),"Navigate to the Vector directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"cd vector-x86_64-pc-windows-msvc\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"start-vector-3"}),"Start Vector"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),".\\bin\\vector --config config\\vector.toml\n")))))),Object(r.b)(o.a,{value:"vector-x86_64-unknown-linux-musl-tar-gz",mdxType:"TabItem"},Object(r.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"download--unpack-the-archive-3"}),"Download & unpack the archive"),Object(r.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.9.2)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"latest",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.9.X/vector-x86_64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(r.b)(o.a,{value:"nightly",mdxType:"TabItem"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-x86_64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"change-into-the-vector-directory-3"}),"Change into the ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"move-vector-into-your-path-3"}),"Move ",Object(r.b)("inlineCode",{parentName:"h3"},"vector")," into your $PATH"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:\\$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(c.a)({parentName:"li"},{id:"start-vector-4"}),"Start Vector"),Object(r.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("h3",{id:"configuring"},"Configuring"),Object(r.b)("p",null,"The Vector configuration file is located at:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"config/vector.toml\n")),Object(r.b)("p",null,"A full spec is located at ",Object(r.b)("inlineCode",{parentName:"p"},"config/vector.spec.toml")," and examples are\nlocated in ",Object(r.b)("inlineCode",{parentName:"p"},"config/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(r.b)("h3",{id:"data-directory"},"Data Directory"),Object(r.b)("p",null,"We highly recommend creating a ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/reference/global-options/#data_dir"}),"data directory"),"\nthat Vector can use:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir /var/lib/vector\n")),Object(r.b)(n.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Make sure that this directory is writable by the ",Object(r.b)("inlineCode",{parentName:"p"},"vector")," process.")),Object(r.b)("p",null,"Vector offers a global ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/reference/global-options/#data_dir"}),Object(r.b)("inlineCode",{parentName:"a"},"data_dir")," option")," that\nyou can use to specify the path of your directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'data_dir = "/var/lib/vector" # default\n')),Object(r.b)("h3",{id:"service-managers"},"Service Managers"),Object(r.b)("p",null,"Vector archives ship with service files in case you need them:"),Object(r.b)("h4",{id:"initd"},"Init.d"),Object(r.b)("p",null,"To install Vector into Init.d run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cp -av etc/init.d/vector /etc/init.d\n")),Object(r.b)("h4",{id:"systemd"},"Systemd"),Object(r.b)("p",null,"To install Vector into Systemd run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cp -av etc/systemd/vector.service /etc/systemd/system\n")),Object(r.b)("h3",{id:"updating"},"Updating"),Object(r.b)("p",null,"Simply follow the same ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"#installation"}),"installation instructions above"),"."))}d.isMDXComponent=!0}}]);