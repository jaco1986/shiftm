(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1135:function(e,t,a){"use strict";var l=a(0),o=a.n(l),i=(a(1129),a(1127));t.a=function(e){var t,a=e.platformName,l=e.sourceName,n=e.sinkName,r=Object(i.a)().siteConfig,s=(void 0===r?{}:r).customFields.metadata,c=s.sources,d=s.sinks,p=c[l],m=d[n],u=p?"STDOUT is captured and sent to "+p.noun+".":"STDOUT is captured by your platform.",L=m?"Vector will "+((t=m.features[0]).charAt(0).toLowerCase()+t.slice(1)):"Vector collects data from your platform.";return o.a.createElement("svg",{width:"850px",height:"375px",viewBox:"0 0 850 375",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("title",null,"Vector daemon deployment strategy"),o.a.createElement("desc",null,"Vector daemon deployment strategy"),o.a.createElement("defs",null,o.a.createElement("linearGradient",{x1:"-1.11022302e-14%",y1:"50%",x2:"100%",y2:"50%",id:"linearGradient-1"},o.a.createElement("stop",{"stop-color":"#10E7FF",offset:"0%"}),o.a.createElement("stop",{"stop-color":"#000000",offset:"100%"}))),o.a.createElement("g",{id:"Diagram",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o.a.createElement("g",{id:"Dedicated-Logging-Container",transform:"translate(141.000000, 37.000000)"},o.a.createElement("g",{id:"Instance",transform:"translate(149.717514, 68.361582)"},o.a.createElement("polygon",{id:"Stroke-1","stroke-opacity":"0.152671547",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round",points:"0.817266169 136.425872 132.724348 190.689307 264.628744 136.425872 132.724348 82.1566929"}),o.a.createElement("polygon",{id:"Stroke-7","stroke-opacity":"0.152671547",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round",points:"132.450583 0.155017988 265.273798 55.0177001 264.629012 136.425297 132.724617 82.1561185"}),o.a.createElement("polygon",{id:"Stroke-9","stroke-opacity":"0.152671547",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round",points:"1.28957186 54.3133456 1.28957186 136.42166 132.724348 82.0797289 132.450314 0.155209441"}),o.a.createElement("polygon",{id:"Fill-11","fill-opacity":"0.0579381556",fill:"#000000",points:"0.817266169 136.425872 0.543232148 54.4247711 132.724348 0.126300085 265.464279 54.9707176 265.028618 136.234419 132.724348 190.689307"}),o.a.createElement("polygon",{id:"Stroke-13","stroke-opacity":"0.152671547",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round",points:"0.817266169 136.425872 0.543232148 54.4247711 132.724348 0.126261794 265.464279 54.9707176 265.028511 136.234419 132.724348 190.689307"}),o.a.createElement("g",{id:"Platform",transform:"translate(12.429379, 56.105624)"},o.a.createElement("polygon",{id:"Fill-21",fill:"#3084FF",points:"0.564971751 64.5185723 120.340366 115.080817 240.112994 64.5185723 120.340366 13.9508732"}),o.a.createElement("polygon",{id:"Path",fill:"#3084FF",points:"120.090062 0.391551166 120.135593 14.3666924 5.08474576 62.5538037 5.08474576 62.6836416 0 64.8136907 0 50.6893969"}),o.a.createElement("polygon",{id:"Path",fill:"#3084FF",points:"119.819542 0.391551166 119.774011 14.3666924 234.824859 62.5538037 234.824859 62.6836416 239.909605 64.8136907 239.909605 50.6893969"}),o.a.createElement("polygon",{id:"Path",fill:"#3084FF",points:"119.819542 115.096177 119.774011 101.121035 234.824859 52.933924 234.824859 52.8040862 239.909605 50.674037 239.909605 64.7983308"}),o.a.createElement("polygon",{id:"Path",fill:"#3084FF",points:"121.220006 115.096177 121.265537 101.121035 6.21468927 52.933924 6.21468927 52.8040862 1.1299435 50.674037 1.1299435 64.7983308"}),o.a.createElement("polygon",{id:"Fill-21-Copy","fill-opacity":"0.116887019",fill:"#000000",points:"0.564971751 50.9592503 120.340366 101.521495 240.112994 50.9592503 120.340366 0.391551166"}),"docker"==a&&o.a.createElement("path",{d:"M110.451518,102.987674 L111.472795,102.987674 L111.472795,102.063661 L110.451518,102.063661 L110.451518,102.987674 Z M109.235713,102.987674 L110.256989,102.987674 L110.256989,102.063661 L109.235713,102.063661 L109.235713,102.987674 Z M108.044223,102.987674 L109.0655,102.987674 L109.0655,102.063661 L108.044223,102.063661 L108.044223,102.987674 Z M106.852734,102.987674 L107.849695,102.987674 L107.849695,102.063661 L106.852734,102.063661 L106.852734,102.987674 Z M105.636929,102.987674 L106.658205,102.987674 L106.658205,102.063661 L105.636929,102.063661 L105.636929,102.987674 Z M106.852734,101.869133 L107.849695,101.869133 L107.849695,100.94512 L106.852734,100.94512 L106.852734,101.869133 Z M108.044223,101.869133 L109.0655,101.869133 L109.0655,100.94512 L108.044223,100.94512 L108.044223,101.869133 Z M109.235713,101.869133 L110.256989,101.869133 L110.256989,100.94512 L109.235713,100.94512 L109.235713,101.869133 Z M109.235713,100.750592 L110.256989,100.750592 L110.256989,99.8265794 L109.235713,99.8265794 L109.235713,100.750592 Z M114.731154,102.5743 C114.731154,102.5743 114.293464,102.160926 113.393768,102.306823 C113.296503,101.601655 112.542704,101.188282 112.542704,101.188282 C112.542704,101.188282 111.837537,102.039345 112.348175,102.987674 C112.202278,103.060622 111.959117,103.157886 111.594375,103.157886 L104.907445,103.157886 C104.785865,103.619892 104.785865,106.683722 108.141488,106.683722 C110.548783,106.683722 112.348175,105.565181 113.199239,103.522628 C114.463676,103.619892 114.731154,102.5743 114.731154,102.5743 Z",id:"docker-logo",fill:"#FFFFFF","fill-rule":"nonzero"})),o.a.createElement("g",{id:"App-2",transform:"translate(85.212887, 19.915069)"},o.a.createElement("polygon",{id:"Fill-21",fill:"#F34AF4",points:"0.210067689 50.2903159 47.7036751 70.3118222 95.1961861 50.2903159 47.7036751 30.2666496"}),o.a.createElement("polygon",{id:"Fill-22",fill:"#F34AF4",points:"-1.46168791e-13 19.9933344 -1.46168791e-13 50.2887618 48.2410142 70.314509 48.2410142 40.2776069"}),o.a.createElement("polygon",{id:"Fill-23",fill:"#F34AF4",points:"48.2410142 40.2778703 95.4290587 20.2535851 95.196844 50.2903817 48.2410142 70.3147197"}),o.a.createElement("polygon",{id:"Fill-24",fill:"#F34AF4",points:"47.6050003 0.0106681692 95.4285105 20.2531899 95.1962958 50.2901052 47.7036751 30.2665179"}),o.a.createElement("polygon",{id:"Fill-25",fill:"#F34AF4",points:"-1.94891722e-13 19.9933344 -1.94891722e-13 50.2887618 47.7036751 30.2383329 47.6050003 0.0106681692"}),o.a.createElement("polygon",{id:"Fill-26",fill:"#F34AF4",points:"0.210067689 50.2903159 0.111392887 20.0344266 47.7036751 -4.96364854e-13 95.4970346 20.2359365 95.3401417 50.2196689 47.7036751 70.3118222"}),o.a.createElement("polygon",{id:"Fill-21-Copy","fill-opacity":"0.116887019",fill:"#000000",points:"0.210067689 20.1146373 47.7036751 40.1361436 95.1961861 20.1146373 47.7036751 0.0909710724"}),o.a.createElement("path",{d:"M56.7409094,54.4057493 C57.8880885,54.0247317 58.7403907,53.2407078 59.0118761,52.3072807 L59.1562763,52.2593205 L59.4211533,53.3736139 L61.6834224,52.6222367 L60.2983366,46.7954108 C59.8642326,44.9692077 58.2867241,44.3409788 55.9442327,45.1190006 C53.7220748,45.8570556 52.4573638,47.3457923 52.6801838,48.9749993 L54.8301417,48.2609245 C54.9012733,47.6862597 55.3966102,47.2211743 56.2389444,46.9414061 C57.2016121,46.6216712 57.8267294,46.8482006 57.9959563,47.5601103 L58.1615044,48.2565437 L56.0489996,49.0917644 C53.8803391,49.9456363 52.8663109,51.2509237 53.2341956,52.7985534 C53.6057591,54.3616594 55.0401965,54.9706144 56.7409094,54.4057493 Z M57.1082099,52.4553068 C56.2979646,52.724417 55.636415,52.5266861 55.4855823,51.892158 C55.3402678,51.2808442 55.7468499,50.7700956 56.7330739,50.367395 L58.4962795,49.6648867 L58.6452728,50.2916767 C58.8512882,51.1583494 58.191211,52.0956049 57.1082099,52.4553068 Z M66.9854785,53.9170066 L66.001387,49.7770972 L66.1457872,49.7291369 C66.7942002,50.4906195 67.8918103,50.7021523 69.1593228,50.2811679 C71.3734585,49.5457775 72.3374183,47.4472584 71.6825836,44.6924775 C71.0259094,41.9299585 69.2641502,40.7450933 67.0259478,41.4884772 C65.8065687,41.8934748 64.9417466,42.8068933 64.6885013,43.9262912 L64.5441011,43.9742514 L64.2111655,42.5736465 L61.9488964,43.3250237 L64.6510093,54.692364 L66.9854785,53.9170066 Z M67.8780309,48.6779015 C66.6426073,49.0882281 65.6462241,48.3922238 65.2746606,46.8291178 C64.9030971,45.2660118 65.4451427,44.0506934 66.6885885,43.6377023 C67.9320343,43.2247113 68.9123731,43.9260445 69.2839366,45.4891505 C69.6591789,47.0677328 69.1375211,48.2595816 67.8780309,48.6779015 Z M77.6069121,50.3892639 L76.6228206,46.2493545 L76.7672208,46.2013942 C77.4156338,46.9628769 78.5132439,47.1744097 79.7807564,46.7534253 C81.9948921,46.0180348 82.9588519,43.9195157 82.3040172,41.1647348 C81.6473431,38.4022158 79.8855838,37.2173506 77.6473814,37.9607345 C76.4280024,38.3657321 75.5631803,39.2791506 75.3099349,40.3985485 L75.1655347,40.4465087 L74.8325991,39.0459038 L72.57033,39.7972811 L75.272443,51.1646213 L77.6069121,50.3892639 Z M78.4994645,45.1501588 C77.264041,45.5604854 76.2676577,44.8644811 75.8960942,43.3013751 C75.5245307,41.7382691 76.0665763,40.5229507 77.3100221,40.1099596 C78.5534679,39.6969686 79.5338067,40.3983018 79.9053702,41.9614078 C80.2806126,43.5399901 79.7589548,44.7318389 78.4994645,45.1501588 Z",id:"app",fill:"#FFFFFF","fill-rule":"nonzero"}),"docker"==a&&o.a.createElement("path",{d:"M33.5318133,47.9361148 L35.4467069,47.9361148 L35.4467069,46.203592 L33.5318133,46.203592 L33.5318133,47.9361148 Z M31.252178,47.9361148 L33.1670716,47.9361148 L33.1670716,46.203592 L31.252178,46.203592 L31.252178,47.9361148 Z M29.0181354,47.9361148 L30.9330291,47.9361148 L30.9330291,46.203592 L29.0181354,46.203592 L29.0181354,47.9361148 Z M26.7840929,47.9361148 L28.6533938,47.9361148 L28.6533938,46.203592 L26.7840929,46.203592 L26.7840929,47.9361148 Z M24.5044576,47.9361148 L26.4193512,47.9361148 L26.4193512,46.203592 L24.5044576,46.203592 L24.5044576,47.9361148 Z M26.7840929,45.8388503 L28.6533938,45.8388503 L28.6533938,44.1063275 L26.7840929,44.1063275 L26.7840929,45.8388503 Z M29.0181354,45.8388503 L30.9330291,45.8388503 L30.9330291,44.1063275 L29.0181354,44.1063275 L29.0181354,45.8388503 Z M31.252178,45.8388503 L33.1670716,45.8388503 L33.1670716,44.1063275 L31.252178,44.1063275 L31.252178,45.8388503 Z M31.252178,43.7415859 L33.1670716,43.7415859 L33.1670716,42.0090631 L31.252178,42.0090631 L31.252178,43.7415859 Z M41.5561294,47.1610388 C41.5561294,47.1610388 40.7354607,46.3859628 39.0485306,46.659519 C38.8661598,45.3373306 37.4527859,44.5622546 37.4527859,44.5622546 C37.4527859,44.5622546 36.1305974,46.1579993 37.0880443,47.9361148 C36.814488,48.0728929 36.358561,48.2552637 35.6746704,48.2552637 L23.1366765,48.2552637 C22.9087129,49.1215251 22.9087129,54.8662059 29.2005063,54.8662059 C33.7141841,54.8662059 37.0880443,52.7689415 38.6837889,48.9391543 C41.0546096,49.1215251 41.5561294,47.1610388 41.5561294,47.1610388 Z",id:"docker-logo",fill:"#FFFFFF","fill-rule":"nonzero"})),o.a.createElement("g",{id:"App-1",transform:"translate(12.331531, 52.118459)"},o.a.createElement("polygon",{id:"Fill-21",fill:"#F34AF4",points:"0.210067689 50.2903159 47.7036751 70.3118222 95.1961861 50.2903159 47.7036751 30.2666496"}),o.a.createElement("polygon",{id:"Fill-22",fill:"#F34AF4",points:"-1.32627289e-13 19.9933344 -1.32627289e-13 50.2887618 48.2410142 70.314509 48.2410142 40.2776069"}),o.a.createElement("polygon",{id:"Fill-23",fill:"#F34AF4",points:"48.2410142 40.2778703 95.4290587 20.2535851 95.196844 50.2903817 48.2410142 70.3147197"}),o.a.createElement("polygon",{id:"Fill-24",fill:"#F34AF4",points:"47.6050003 0.0106681692 95.4285105 20.2531899 95.1962958 50.2901052 47.7036751 30.2665179"}),o.a.createElement("polygon",{id:"Fill-25",fill:"#F34AF4",points:"-1.98940934e-13 19.9933344 -1.98940934e-13 50.2887618 47.7036751 30.2383329 47.6050003 0.0106681692"}),o.a.createElement("polygon",{id:"Fill-26",fill:"#F34AF4",points:"0.210067689 50.2903159 0.111392887 20.0344266 47.7036751 -4.97879263e-13 95.4970346 20.2359365 95.3401417 50.2196689 47.7036751 70.3118222"}),o.a.createElement("polygon",{id:"Fill-21-Copy","fill-opacity":"0.116887019",fill:"#000000",points:"0.210067689 20.1146373 47.7036751 40.1361436 95.1961861 20.1146373 47.7036751 0.0909710724"}),o.a.createElement("path",{d:"M56.7409094,55.5356928 C57.8880885,55.1546753 58.7403907,54.3706514 59.0118761,53.4372242 L59.1562763,53.389264 L59.4211533,54.5035574 L61.6834224,53.7521802 L60.2983366,47.9253543 C59.8642326,46.0991512 58.2867241,45.4709223 55.9442327,46.2489441 C53.7220748,46.9869991 52.4573638,48.4757358 52.6801838,50.1049428 L54.8301417,49.390868 C54.9012733,48.8162032 55.3966102,48.3511178 56.2389444,48.0713496 C57.2016121,47.7516147 57.8267294,47.9781441 57.9959563,48.6900538 L58.1615044,49.3864872 L56.0489996,50.2217079 C53.8803391,51.0755798 52.8663109,52.3808672 53.2341956,53.9284969 C53.6057591,55.4916029 55.0401965,56.1005579 56.7409094,55.5356928 Z M57.1082099,53.5852503 C56.2979646,53.8543605 55.636415,53.6566296 55.4855823,53.0221015 C55.3402678,52.4107877 55.7468499,51.9000391 56.7330739,51.4973385 L58.4962795,50.7948302 L58.6452728,51.4216202 C58.8512882,52.2882929 58.191211,53.2255484 57.1082099,53.5852503 Z M66.9854785,55.0469501 L66.001387,50.9070407 L66.1457872,50.8590804 C66.7942002,51.620563 67.8918103,51.8320958 69.1593228,51.4111114 C71.3734585,50.675721 72.3374183,48.5772019 71.6825836,45.822421 C71.0259094,43.059902 69.2641502,41.8750368 67.0259478,42.6184207 C65.8065687,43.0234183 64.9417466,43.9368368 64.6885013,45.0562347 L64.5441011,45.1041949 L64.2111655,43.70359 L61.9488964,44.4549672 L64.6510093,55.8223075 L66.9854785,55.0469501 Z M67.8780309,49.807845 C66.6426073,50.2181716 65.6462241,49.5221673 65.2746606,47.9590613 C64.9030971,46.3959553 65.4451427,45.1806369 66.6885885,44.7676458 C67.9320343,44.3546548 68.9123731,45.055988 69.2839366,46.619094 C69.6591789,48.1976763 69.1375211,49.3895251 67.8780309,49.807845 Z M77.6069121,51.5192074 L76.6228206,47.379298 L76.7672208,47.3313377 C77.4156338,48.0928204 78.5132439,48.3043532 79.7807564,47.8833688 C81.9948921,47.1479783 82.9588519,45.0494592 82.3040172,42.2946783 C81.6473431,39.5321593 79.8855838,38.3472942 77.6473814,39.090678 C76.4280024,39.4956756 75.5631803,40.4090941 75.3099349,41.528492 L75.1655347,41.5764522 L74.8325991,40.1758473 L72.57033,40.9272246 L75.272443,52.2945648 L77.6069121,51.5192074 Z M78.4994645,46.2801023 C77.264041,46.6904289 76.2676577,45.9944246 75.8960942,44.4313186 C75.5245307,42.8682126 76.0665763,41.6528942 77.3100221,41.2399032 C78.5534679,40.8269121 79.5338067,41.5282453 79.9053702,43.0913513 C80.2806126,44.6699336 79.7589548,45.8617824 78.4994645,46.2801023 Z",id:"app",fill:"#FFFFFF","fill-rule":"nonzero"}),"docker"==a&&o.a.createElement("path",{d:"M34.4131692,49.1612964 L36.3280628,49.1612964 L36.3280628,47.4287736 L34.4131692,47.4287736 L34.4131692,49.1612964 Z M32.1335339,49.1612964 L34.0484275,49.1612964 L34.0484275,47.4287736 L32.1335339,47.4287736 L32.1335339,49.1612964 Z M29.8994914,49.1612964 L31.814385,49.1612964 L31.814385,47.4287736 L29.8994914,47.4287736 L29.8994914,49.1612964 Z M27.6654488,49.1612964 L29.5347497,49.1612964 L29.5347497,47.4287736 L27.6654488,47.4287736 L27.6654488,49.1612964 Z M25.3858136,49.1612964 L27.3007072,49.1612964 L27.3007072,47.4287736 L25.3858136,47.4287736 L25.3858136,49.1612964 Z M27.6654488,47.0640319 L29.5347497,47.0640319 L29.5347497,45.3315091 L27.6654488,45.3315091 L27.6654488,47.0640319 Z M29.8994914,47.0640319 L31.814385,47.0640319 L31.814385,45.3315091 L29.8994914,45.3315091 L29.8994914,47.0640319 Z M32.1335339,47.0640319 L34.0484275,47.0640319 L34.0484275,45.3315091 L32.1335339,45.3315091 L32.1335339,47.0640319 Z M32.1335339,44.9667675 L34.0484275,44.9667675 L34.0484275,43.2342447 L32.1335339,43.2342447 L32.1335339,44.9667675 Z M42.4374853,48.3862204 C42.4374853,48.3862204 41.6168166,47.6111444 39.9298865,47.8847006 C39.7475157,46.5625122 38.3341418,45.7874362 38.3341418,45.7874362 C38.3341418,45.7874362 37.0119534,47.3831809 37.9694002,49.1612964 C37.695844,49.2980745 37.2399169,49.4804453 36.5560263,49.4804453 L24.0180324,49.4804453 C23.7900689,50.3467067 23.7900689,56.0913875 30.0818622,56.0913875 C34.59554,56.0913875 37.9694002,53.9941231 39.5651449,50.1643359 C41.9359655,50.3467067 42.4374853,48.3862204 42.4374853,48.3862204 Z",id:"docker-logo",fill:"#FFFFFF","fill-rule":"nonzero"})),o.a.createElement("g",{id:"Vector",transform:"translate(157.569562, 52.118459)"},o.a.createElement("polygon",{id:"Fill-21","fill-opacity":"0.6",fill:"#10E7FF",points:"0.210067689 50.2903159 47.7036751 70.3118222 95.1961861 50.2903159 47.7036751 30.2666496"}),o.a.createElement("polygon",{id:"Fill-22","fill-opacity":"0.6",fill:"#10E7FF",points:"-1.21807326e-13 19.9933344 -1.21807326e-13 50.2887618 48.2410142 70.314509 48.2410142 40.2776069"}),o.a.createElement("polygon",{id:"Fill-23","fill-opacity":"0.6",fill:"#10E7FF",points:"48.2410142 40.2778703 95.4290587 20.2535851 95.196844 50.2903817 48.2410142 70.3147197"}),o.a.createElement("polygon",{id:"Fill-24","fill-opacity":"0.6",fill:"#10E7FF",points:"47.6050003 0.0106681692 95.4285105 20.2531899 95.1962958 50.2901052 47.7036751 30.2665179"}),o.a.createElement("polygon",{id:"Fill-25","fill-opacity":"0.6",fill:"#10E7FF",points:"-1.94891722e-13 19.9933344 -1.94891722e-13 50.2887618 47.7036751 30.2383329 47.6050003 0.0106681692"}),o.a.createElement("polygon",{id:"Fill-26","fill-opacity":"0.6",fill:"#10E7FF",points:"0.210067689 50.2903159 0.111392887 20.0344266 47.7036751 -4.96364854e-13 95.4970346 20.2359365 95.3401417 50.2196689 47.7036751 70.3118222"}),o.a.createElement("polygon",{id:"Fill-21-Copy","fill-opacity":"0.6",fill:"#00C1D8",points:"0.210067689 20.1146373 47.7036751 40.1361436 95.1961861 20.1146373 47.7036751 0.0909710724"}),o.a.createElement("g",{id:"Logo",transform:"translate(54.294845, 43.381137)",fill:"#FFFFFF"},o.a.createElement("polygon",{id:"Rectangle",points:"20.0439178 -1.75628501e-14 23.5800757 1.78886353e-13 15.1586201 13.8789516 13.4113897 11.0068896"}),o.a.createElement("polygon",{id:"Triangle-Copy",transform:"translate(8.377132, 6.902952) scale(1, -1) translate(-8.377132, -6.902952) ",points:"8.37713214 4.34889622e-13 16.7542643 13.8059045 12.5757427 13.8059045 8.46282415 7.0563512 4.34791473 13.8059045 0 13.8059045"})),"docker"==a&&o.a.createElement("path",{d:"M37.4608523,49.1612964 L39.3757459,49.1612964 L39.3757459,47.4287736 L37.4608523,47.4287736 L37.4608523,49.1612964 Z M35.1812171,49.1612964 L37.0961107,49.1612964 L37.0961107,47.4287736 L35.1812171,47.4287736 L35.1812171,49.1612964 Z M32.9471745,49.1612964 L34.8620681,49.1612964 L34.8620681,47.4287736 L32.9471745,47.4287736 L32.9471745,49.1612964 Z M30.713132,49.1612964 L32.5824329,49.1612964 L32.5824329,47.4287736 L30.713132,47.4287736 L30.713132,49.1612964 Z M28.4334967,49.1612964 L30.3483903,49.1612964 L30.3483903,47.4287736 L28.4334967,47.4287736 L28.4334967,49.1612964 Z M30.713132,47.0640319 L32.5824329,47.0640319 L32.5824329,45.3315091 L30.713132,45.3315091 L30.713132,47.0640319 Z M32.9471745,47.0640319 L34.8620681,47.0640319 L34.8620681,45.3315091 L32.9471745,45.3315091 L32.9471745,47.0640319 Z M35.1812171,47.0640319 L37.0961107,47.0640319 L37.0961107,45.3315091 L35.1812171,45.3315091 L35.1812171,47.0640319 Z M35.1812171,44.9667675 L37.0961107,44.9667675 L37.0961107,43.2342447 L35.1812171,43.2342447 L35.1812171,44.9667675 Z M45.4851684,48.3862204 C45.4851684,48.3862204 44.6644997,47.6111444 42.9775696,47.8847006 C42.7951988,46.5625122 41.381825,45.7874362 41.381825,45.7874362 C41.381825,45.7874362 40.0596365,47.3831809 41.0170833,49.1612964 C40.7435271,49.2980745 40.2876,49.4804453 39.6037095,49.4804453 L27.0657155,49.4804453 C26.837752,50.3467067 26.837752,56.0913875 33.1295453,56.0913875 C37.6432231,56.0913875 41.0170833,53.9941231 42.612828,50.1643359 C44.9836487,50.3467067 45.4851684,48.3862204 45.4851684,48.3862204 Z",id:"docker-logo",fill:"#FFFFFF","fill-rule":"nonzero"})),o.a.createElement("g",{id:"App-3",transform:"translate(85.777859, 80.932018)"},o.a.createElement("polygon",{id:"Fill-21",fill:"#F34AF4",points:"0.210067689 50.2903159 47.7036751 70.3118222 95.1961861 50.2903159 47.7036751 30.2666496"}),o.a.createElement("polygon",{id:"Fill-22",fill:"#F34AF4",points:"-1.46168791e-13 19.9933344 -1.46168791e-13 50.2887618 48.2410142 70.314509 48.2410142 40.2776069"}),o.a.createElement("polygon",{id:"Fill-23",fill:"#F34AF4",points:"48.2410142 40.2778703 95.4290587 20.2535851 95.196844 50.2903817 48.2410142 70.3147197"}),o.a.createElement("polygon",{id:"Fill-24",fill:"#F34AF4",points:"47.6050003 0.0106681692 95.4285105 20.2531899 95.1962958 50.2901052 47.7036751 30.2665179"}),o.a.createElement("polygon",{id:"Fill-25",fill:"#F34AF4",points:"-1.94891722e-13 19.9933344 -1.94891722e-13 50.2887618 47.7036751 30.2383329 47.6050003 0.0106681692"}),o.a.createElement("polygon",{id:"Fill-26",fill:"#F34AF4",points:"0.210067689 50.2903159 0.111392887 20.0344266 47.7036751 -4.99410037e-13 95.4970346 20.2359365 95.3401417 50.2196689 47.7036751 70.3118222"}),o.a.createElement("polygon",{id:"Fill-21-Copy","fill-opacity":"0.116887019",fill:"#000000",points:"0.210067689 20.1146373 47.7036751 40.1361436 95.1961861 20.1146373 47.7036751 0.0909710724"}),o.a.createElement("path",{d:"M56.1759377,55.5356928 C57.3231167,55.1546753 58.175419,54.3706514 58.4469044,53.4372242 L58.5913045,53.389264 L58.8561815,54.5035574 L61.1184506,53.7521802 L59.7333648,47.9253543 C59.2992609,46.0991512 57.7217524,45.4709223 55.379261,46.2489441 C53.157103,46.9869991 51.8923921,48.4757358 52.115212,50.1049428 L54.2651699,49.390868 C54.3363015,48.8162032 54.8316384,48.3511178 55.6739727,48.0713496 C56.6366404,47.7516147 57.2617576,47.9781441 57.4309846,48.6900538 L57.5965327,49.3864872 L55.4840278,50.2217079 C53.3153673,51.0755798 52.3013391,52.3808672 52.6692238,53.9284969 C53.0407873,55.4916029 54.4752248,56.1005579 56.1759377,55.5356928 Z M56.5432381,53.5852503 C55.7329928,53.8543605 55.0714433,53.6566296 54.9206105,53.0221015 C54.7752961,52.4107877 55.1818781,51.9000391 56.1681022,51.4973385 L57.9313077,50.7948302 L58.080301,51.4216202 C58.2863164,52.2882929 57.6262393,53.2255484 56.5432381,53.5852503 Z M66.4205068,55.0469501 L65.4364153,50.9070407 L65.5808154,50.8590804 C66.2292284,51.620563 67.3268386,51.8320958 68.594351,51.4111114 C70.8084867,50.675721 71.7724466,48.5772019 71.1176118,45.822421 C70.4609377,43.059902 68.6991785,41.8750368 66.4609761,42.6184207 C65.241597,43.0234183 64.3767749,43.9368368 64.1235295,45.0562347 L63.9791294,45.1041949 L63.6461937,43.70359 L61.3839246,44.4549672 L64.0860376,55.8223075 L66.4205068,55.0469501 Z M67.3130591,49.807845 C66.0776356,50.2181716 65.0812524,49.5221673 64.7096888,47.9590613 C64.3381253,46.3959553 64.880171,45.1806369 66.1236167,44.7676458 C67.3670625,44.3546548 68.3474013,45.055988 68.7189648,46.619094 C69.0942072,48.1976763 68.5725494,49.3895251 67.3130591,49.807845 Z M77.0419404,51.5192074 L76.0578489,47.379298 L76.202249,47.3313377 C76.850662,48.0928204 77.9482722,48.3043532 79.2157846,47.8833688 C81.4299204,47.1479783 82.3938802,45.0494592 81.7390455,42.2946783 C81.0823713,39.5321593 79.3206121,38.3472942 77.0824097,39.090678 C75.8630306,39.4956756 74.9982085,40.4090941 74.7449631,41.528492 L74.600563,41.5764522 L74.2676274,40.1758473 L72.0053583,40.9272246 L74.7074712,52.2945648 L77.0419404,51.5192074 Z M77.9344928,46.2801023 C76.6990692,46.6904289 75.702686,45.9944246 75.3311225,44.4313186 C74.9595589,42.8682126 75.5016046,41.6528942 76.7450504,41.2399032 C77.9884962,40.8269121 78.9688349,41.5282453 79.3403984,43.0913513 C79.7156408,44.6699336 79.193983,45.8617824 77.9344928,46.2801023 Z",id:"app",fill:"#FFFFFF","fill-rule":"nonzero"}),"docker"==a&&o.a.createElement("path",{d:"M33.8239844,47.7763085 L35.738878,47.7763085 L35.738878,46.0437857 L33.8239844,46.0437857 L33.8239844,47.7763085 Z M31.5443491,47.7763085 L33.4592427,47.7763085 L33.4592427,46.0437857 L31.5443491,46.0437857 L31.5443491,47.7763085 Z M29.3103065,47.7763085 L31.2252002,47.7763085 L31.2252002,46.0437857 L29.3103065,46.0437857 L29.3103065,47.7763085 Z M27.076264,47.7763085 L28.9455649,47.7763085 L28.9455649,46.0437857 L27.076264,46.0437857 L27.076264,47.7763085 Z M24.7966287,47.7763085 L26.7115224,47.7763085 L26.7115224,46.0437857 L24.7966287,46.0437857 L24.7966287,47.7763085 Z M27.076264,45.679044 L28.9455649,45.679044 L28.9455649,43.9465212 L27.076264,43.9465212 L27.076264,45.679044 Z M29.3103065,45.679044 L31.2252002,45.679044 L31.2252002,43.9465212 L29.3103065,43.9465212 L29.3103065,45.679044 Z M31.5443491,45.679044 L33.4592427,45.679044 L33.4592427,43.9465212 L31.5443491,43.9465212 L31.5443491,45.679044 Z M31.5443491,43.5817796 L33.4592427,43.5817796 L33.4592427,41.8492568 L31.5443491,41.8492568 L31.5443491,43.5817796 Z M41.8483005,47.0012325 C41.8483005,47.0012325 41.0276318,46.2261565 39.3407017,46.4997127 C39.1583309,45.1775243 37.744957,44.4024483 37.744957,44.4024483 C37.744957,44.4024483 36.4227686,45.998193 37.3802154,47.7763085 C37.1066591,47.9130866 36.6507321,48.0954574 35.9668415,48.0954574 L23.4288476,48.0954574 C23.2008841,48.9617188 23.2008841,54.7063997 29.4926774,54.7063997 C34.0063552,54.7063997 37.3802154,52.6091352 38.97596,48.779348 C41.3467807,48.9617188 41.8483005,47.0012325 41.8483005,47.0012325 Z",id:"docker-logo",fill:"#FFFFFF","fill-rule":"nonzero"})),o.a.createElement("g",{id:"Group-Copy",transform:"translate(258.552886, 80.922516)"},o.a.createElement("polygon",{id:"Line-3",fill:"url(#linearGradient-1)","fill-rule":"nonzero",points:"0.409263696 15.2086784 37.4038565 15.2086784 37.4038565 5.60732614 0.409263696 5.60732614"}),o.a.createElement("polygon",{id:"Triangle",fill:"#000000",transform:"translate(36.033686, 10.408002) rotate(90.000000) translate(-36.033686, -10.408002) ",points:"36.0336864 3.55715175 46.3208496 17.2588528 25.7465233 17.2588528"})),o.a.createElement("polygon",{id:"Stroke-3","stroke-opacity":"0.152671547",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round",points:"1.28957186 54.3133456 1.28957186 136.42166 132.933366 190.696582 132.933366 109.288985"}),o.a.createElement("polygon",{id:"Stroke-5","stroke-opacity":"0.152671547",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round",points:"132.933366 109.289559 265.27541 55.0184659 264.630624 136.426063 132.933366 190.697156"})),o.a.createElement("g",{id:"App-Text",transform:"translate(281.920904, 0.000000)",fill:"#000000","fill-rule":"nonzero"},o.a.createElement("foreignObject",{x:"10",y:"0",width:"350",height:"200"},o.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",align:"left",style:{fontSize:"0.9em"}},o.a.createElement("div",null,o.a.createElement("strong",null,"1. ","Your service logs to STDOUT")),o.a.createElement("div",null,"STDOUT follows the 12 factor principles."))),o.a.createElement("polygon",{id:"Line-5",points:"1.69491525 88.700565 1.69491525 3.95480226 0 3.95480226 0 88.700565"})),o.a.createElement("g",{id:"Docker-Text",transform:"translate(0.000000, 210.734463)",fill:"#000000","fill-rule":"nonzero"},o.a.createElement("foreignObject",{x:"-145",y:"45",width:"350",height:"200"},o.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",align:"right",style:{fontSize:"0.9em"}},o.a.createElement("div",null,o.a.createElement("strong",null,"2. ","STDOUT is captured")),o.a.createElement("div",null,u))),o.a.createElement("polygon",{id:"Line-5",points:"214.19435 84.7457627 214.19435 0 212.99435 0 212.99435 84.7457627"})),o.a.createElement("g",{id:"Forward-Text",transform:"translate(355.367232, 190.960452)",fill:"#000000","fill-rule":"nonzero"},o.a.createElement("foreignObject",{x:"10",y:"65",width:"350",height:"200"},o.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",align:"left",style:{fontSize:"0.9em"}},o.a.createElement("div",null,o.a.createElement("strong",null,"3. ","Vector collects & fans-out data")),o.a.createElement("div",null,L))),o.a.createElement("polygon",{id:"Line-5",points:"1.2 104.519774 1.2 0 0 0 0 104.519774"})))))}},363:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return g}));var l=a(1),o=a(9),i=(a(0),a(1128)),n=a(1132),r=a(1135),s=a(1134),c=a(1130),d=a(1131),p={last_modified_on:"2020-05-01",$schema:"/.meta/.schemas/guides.json",title:"Send metrics from Prometheus to Datadog",description:"A simple guide to send metrics from Prometheus to Datadog in just a few minutes.",author_github:"https://github.com/binarylogic",cover_label:"Prometheus to Datadog Metrics Integration",tags:["type: tutorial","domain: sources","domain: sinks","source: prometheus","sink: datadog_metrics"],hide_pagination:!0},m={categories:[{name:"integrate",title:"Integrate",description:"Simple step-by-step integration guides.",permalink:"/guides/integrate"},{name:"sources",title:"Sources",description:null,permalink:"/guides/integrate/sources"},{name:"prometheus",title:"Prometheus",description:null,permalink:"/guides/integrate/sources/prometheus"}],coverLabel:"Prometheus to Datadog Metrics Integration",description:"A simple guide to send metrics from Prometheus to Datadog in just a few minutes.",permalink:"/guides/integrate/sources/prometheus/datadog_metrics",readingTime:"3 min read",source:"@site/guides/integrate/sources/prometheus/datadog_metrics.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"domain: sources",permalink:"/guides/tags/domain-sources"},{label:"domain: sinks",permalink:"/guides/tags/domain-sinks"},{label:"source: prometheus",permalink:"/guides/tags/source-prometheus"},{label:"sink: datadog_metrics",permalink:"/guides/tags/sink-datadog-metrics"}],title:"Send metrics from Prometheus to Datadog",truncated:!1,prevItem:{title:"Send metrics from Prometheus to AWS Cloudwatch",permalink:"/guides/integrate/sources/prometheus/aws_cloudwatch_metrics"},nextItem:{title:"Send metrics from Prometheus to InfluxDB",permalink:"/guides/integrate/sources/prometheus/influxdb_metrics"}},u=[{value:"Background",id:"background",children:[{value:"What is Prometheus?",id:"what-is-prometheus",children:[]},{value:"What is Datadog Metrics?",id:"what-is-datadog-metrics",children:[]}]},{value:"Strategy",id:"strategy",children:[{value:"How This Guide Works",id:"how-this-guide-works",children:[]},{value:"What We&#39;ll Accomplish",id:"what-well-accomplish",children:[]}]},{value:"Tutorial",id:"tutorial",children:[{value:"Install Vector",id:"install-vector",children:[]},{value:"Configure Vector",id:"configure-vector",children:[]},{value:"Start Vector",id:"start-vector",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],L={rightToc:u};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},L,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Metrics are an ",Object(i.b)("em",{parentName:"p"},"essential")," part of observing any\nservice; without them you are flying blind. But collecting and analyzing them\ncan be a real challenge -- especially at scale. Not only do you need to solve\nthe basic task of collecting your metrics, but you must do it\nin a reliable, performant, and robust manner. Nothing is more frustrating than\nhaving your metrics pipeline fall on it's face during an\noutage, or even worse, disrupt more important services!"),Object(i.b)("p",null,"Fear not! In this guide we'll show you how to send send metrics from ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://prometheus.io/"}),"Prometheus")," to ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog"),"\nand build a metrics pipeline that will be the backbone of\nyour observability strategy."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("h3",{id:"what-is-prometheus"},"What is Prometheus?"),Object(i.b)("p",null,Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://prometheus.io/"}),"Prometheus")," is a pull-based monitoring system that scrapes metrics from configured endpoints, stores them efficiently, and supports a powerful query language to compose dynamic information from a variety of otherwise unrelated data points."),Object(i.b)("h3",{id:"what-is-datadog-metrics"},"What is Datadog Metrics?"),Object(i.b)("p",null,Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog")," is a monitoring service for cloud-scale applications, providing monitoring of servers, databases, tools, and services, through a SaaS-based data analytics platform."),Object(i.b)("h2",{id:"strategy"},"Strategy"),Object(i.b)("h3",{id:"how-this-guide-works"},"How This Guide Works"),Object(i.b)("p",null,"We'll be using ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://vector.dev"}),"Vector")," to accomplish this task. Vector\nis a ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/timberio/vector/stargazers"}),"popular")," ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"open-source")," utility for\nbuilding observability pipelines. It's written in ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust"),", making it\nlightweight, ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://vector.dev/#performance"}),"ultra-fast")," and highly reliable. And\nwe'll be deploying Vector as a\n",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#daemon"}),"daemon"),"."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/setup/deployment/strategies/#daemon"}),"daemon deployment strategy")," is designed for data\ncollection on a single host. Vector runs in the background, in its own process,\ncollecting ",Object(i.b)("em",{parentName:"p"},"all")," data for that host.\nFor this guide, Vector will receive data from\nPrometheus via Vector's\n",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/reference/sources/prometheus/"}),Object(i.b)("inlineCode",{parentName:"a"},"prometheus")),".\nThe following diagram demonstrates how it works."),Object(i.b)(r.a,{platformName:null,sourceName:"prometheus",sinkName:"datadog_metrics",mdxType:"DaemonDiagram"}),Object(i.b)("h3",{id:"what-well-accomplish"},"What We'll Accomplish"),Object(i.b)("p",null,"To be clear, here's everything we'll accomplish in this short guide:"),Object(i.b)("ul",{className:"list--icons list--icons--checks list--indent"},Object(i.b)("li",null,"Scrape one or more Prometheus endpoints.",Object(i.b)("ul",null,Object(i.b)("li",null,"Ingest all Prometheus metric types."),Object(i.b)("li",null,"Automatically parse metrics into a lossless interoperable data model."))),Object(i.b)("li",null,"Send metrics to Datadog.",Object(i.b)("ul",null,Object(i.b)("li",null,"Batch data to maximize throughput."),Object(i.b)("li",null,"Automatically retry failed requests, with backoff."),Object(i.b)("li",null,"Automatically aggregate metrics at the edge for improved performance."))),Object(i.b)("li",{className:"list--icons--arrow text--pink text--bold"},"All in just a few minutes!")),Object(i.b)("h2",{id:"tutorial"},"Tutorial"),Object(i.b)(d.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("h3",{id:"install-vector"},"Install Vector"),Object(i.b)(s.a,{mdxType:"InstallationCommand"}),Object(i.b)("p",null,"Or choose your ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"preferred method"),".")),Object(i.b)("li",null,Object(i.b)("h3",{id:"configure-vector"},"Configure Vector"),Object(i.b)(n.a,{format:"toml",path:"vector.toml",sourceName:"prometheus",sinkName:"datadog_metrics",mdxType:"ConfigExample"})),Object(i.b)("li",null,Object(i.b)("h3",{id:"start-vector"},"Start Vector"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"vector --config vector.toml\n")),Object(i.b)("p",null,"That's it! Simple and to the point. Hit ",Object(i.b)("inlineCode",{parentName:"p"},"ctrl+c")," to exit.")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Vector is ",Object(i.b)("em",{parentName:"p"},"powerful")," utility and we're just scratching the surface in this\nguide. Here are a few pages we recommend that demonstrate the power and\nflexibility of Vector:"),Object(i.b)(c.a,{to:"https://github.com/timberio/vector",leftIcon:"github",target:"_blank",mdxType:"Jump"},Object(i.b)("div",{className:"title"},"Vector Github repo ",Object(i.b)("span",{className:"badge badge--primary"},Object(i.b)("i",{className:"feather icon-star"})," 4k")),Object(i.b)("div",{className:"sub-title"},"Vector is free and open-source!")),Object(i.b)(c.a,{to:"/guides/getting-started/",leftIcon:"book",mdxType:"Jump"},Object(i.b)("div",{className:"title"},"Vector getting started series"),Object(i.b)("div",{className:"sub-title"},"Go from zero to production in under 10 minutes!")),Object(i.b)(c.a,{to:"/docs/about/what-is-shiftm/",leftIcon:"book",mdxType:"Jump"},Object(i.b)("div",{className:"title"},"Vector documentation"),Object(i.b)("div",{className:"sub-title"},"Thoughtful, detailed docs that respect your time.")))}g.isMDXComponent=!0}}]);