(function(e){function t(t){for(var c,a,r=t[0],l=t[1],s=t[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},a={app:0},i={app:0},o=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-48981926":"1071b39e"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-48981926":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-48981926":"3815d096"}[e]+".css",i=l.p+c,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var s=o[r],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===i))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){s=u[r],d=s.getAttribute("data-href");if(d===c||d===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],b.parentNode.removeChild(b),n(o)},b.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var c=i[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=i[e]=[t,n]}));t.push(c[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e);var u=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=i[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",u.name="ChunkLoadError",u.type=c,u.request=a,n[1](u)}i[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1c5a":function(e,t,n){"use strict";n("7561")},"46d7":function(e,t,n){},"4ce5":function(e,t,n){"use strict";n("6a8a")},"5b45":function(e,t,n){"use strict";n("78ba")},"6a8a":function(e,t,n){},7561:function(e,t,n){},"78ba":function(e,t,n){},8268:function(e,t,n){"use strict";n("a57b")},8679:function(e,t,n){},9207:function(e,t,n){"use strict";n("8679")},"94ec":function(e,t,n){e.exports=n.p+"img/ljoptica.b1be99ff.jpg"},"9cdc":function(e,t,n){"use strict";n("c701")},a3fe:function(e,t,n){},a57b:function(e,t,n){},c701:function(e,t,n){},cadb:function(e,t,n){"use strict";n("a3fe")},cbed:function(e,t,n){"use strict";n("46d7")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,i,o){var r=Object(c["v"])("router-view");return Object(c["o"])(),Object(c["d"])("div",null,[Object(c["f"])(r)])}var i=n("bc3a"),o=n.n(i),r={name:"Home",setup:function(){var e=Object(c["t"])([]);o.a.get("https://api.petarkocic.net/projects").then((function(t){e.value=t.data,console.log(e)})).catch((function(e){return console.log(e)})),Object(c["q"])("projectsList",e)}};n("9cdc");r.render=a;var l=r,s=(n("d3b7"),n("6c02"));function d(e,t,n,a,i,o){var r=Object(c["v"])("NavBar"),l=Object(c["v"])("MainContainer"),s=Object(c["v"])("ContactModal");return Object(c["o"])(),Object(c["d"])("div",null,[Object(c["f"])(r,{toHomeCallback:e.flipToHOmeElement,toProjectsCallback:e.flipToProjectsElement},null,8,["toHomeCallback","toProjectsCallback"]),Object(c["f"])(l,{flipCondition:e.flipCondition,flipCardInner:e.flipCardInner,activateback:e.activateBack},null,8,["flipCondition","flipCardInner","activateback"]),Object(c["f"])("footer",null,[Object(c["f"])(s)])])}var u=Object(c["D"])("data-v-7d1b4d1c"),b=u((function(e,t,n,a,i,o){return Object(c["o"])(),Object(c["d"])("nav",null,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(e.navLinks,(function(t,n){return Object(c["o"])(),Object(c["d"])("h3",{class:["nav-link","text-animations",t.isSelected],to:t.to,key:n,onClick:function(c){return[t.callback(),e.select(n)]}},Object(c["x"])(t.body),11,["to","onClick"])})),128))])})),f=Object(c["g"])({name:"NavBar",props:["toHomeCallback","toProjectsCallback"],components:{},methods:{select:function(e){0===e?(this.navLinks[0].isSelected="is-selected",this.navLinks[1].isSelected="null"):(this.navLinks[1].isSelected="is-selected",this.navLinks[0].isSelected="null")}},data:function(){return{navLinks:[{to:"/",body:"About Me",callback:this.toHomeCallback,isSelected:"is-selected"},{to:"/projects",body:"Projects",callback:this.toProjectsCallback,isSelected:"null"}]}}});n("cadb");f.render=b,f.__scopeId="data-v-7d1b4d1c";var p=f,j=Object(c["D"])("data-v-77c0a574");Object(c["r"])("data-v-77c0a574");var O={class:"main-contact-container"},v={key:0,class:"contact-form"},m=Object(c["f"])("h2",null,"Email: mail@petarkocic.net",-1),h=Object(c["f"])("label",{requred:"",for:"name"},"Name",-1),g=Object(c["f"])("label",{requred:"",for:"email"},"Email",-1),k=Object(c["f"])("label",{requred:"",for:"contact-form-conetent"},"Message",-1),y={key:0},C={class:"social-container"},S={href:"https://github.com/ASentientBanana"},x={href:"https://www.linkedin.com/in/petar-kocic-74a987190/"},w={class:"container"},P={class:"center"},E=Object(c["f"])("svg",{width:"180px",height:"60px",viewBox:"0 0 180 60",class:"border"},[Object(c["f"])("polyline",{points:"179,1 179,59 1,59 1,1 179,1",class:"bg-line"}),Object(c["f"])("polyline",{points:"179,1 179,59 1,59 1,1 179,1",class:"hl-line"})],-1),_=Object(c["f"])("span",null,"Contact",-1);Object(c["p"])();var B=j((function(e,t,a,i,o,r){return Object(c["o"])(),Object(c["d"])("div",O,[e.contactFormState?(Object(c["o"])(),Object(c["d"])("form",v,[Object(c["f"])("button",{class:"close-contact-form-btn",onClick:t[1]||(t[1]=function(){return e.openContactForm.apply(e,arguments)})},"X"),m,h,Object(c["C"])(Object(c["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.senderName=t}),type:"text",name:"name",id:"name"},null,512),[[c["z"],e.senderName]]),g,Object(c["C"])(Object(c["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.sender=t}),type:"email",name:"email",id:"email"},null,512),[[c["z"],e.sender]]),k,Object(c["C"])(Object(c["f"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.contactBody=t}),name:"content",id:"contact-form-conetent",cols:"30",rows:"10"},null,512),[[c["z"],e.contactBody]]),Object(c["f"])("input",{onClick:t[5]||(t[5]=function(){return e.sendMail.apply(e,arguments)}),type:"submit",value:"Send"}),e.isSent?(Object(c["o"])(),Object(c["d"])("h1",y,"Mail sent")):Object(c["e"])("",!0),Object(c["f"])("div",C,[Object(c["f"])("a",S,[Object(c["f"])("img",{src:n("e656"),alt:""},null,8,["src"])]),Object(c["f"])("a",x,[Object(c["f"])("img",{src:n("e0e8"),alt:""},null,8,["src"])])])])):Object(c["e"])("",!0),Object(c["f"])("div",w,[Object(c["f"])("div",P,[Object(c["f"])("button",{class:"btn",onClick:t[6]||(t[6]=function(){return e.openContactForm.apply(e,arguments)})},[E,_])])])])})),T=(n("96cf"),n("1da1")),L=Object(c["g"])({name:"ContactModal",components:{},data:function(){return{contactFormState:!1,contactBody:"",sender:"",senderName:"",isSent:!1}},methods:{sendMail:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.preventDefault(),o.a.post("http://api.petarkocic.net/send-mail",{senderName:t.senderName,sender:t.sender,contactBody:t.contactBody}).then((function(e){200===e.data&&(t.isSent=!0,t.contactBody="",t.sender="",t.senderName="")})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))()},openContactForm:function(e){e.preventDefault(),console.log("c"),this.contactFormState=!this.contactFormState}}});n("8268");L.render=B,L.__scopeId="data-v-77c0a574";var N=L,D=Object(c["D"])("data-v-8b0035b2");Object(c["r"])("data-v-8b0035b2");var I={class:"flip-card"},M={class:"flip-card-back"};Object(c["p"])();var A=D((function(e,t,n,a,i,o){var r=Object(c["v"])("Projects"),l=Object(c["v"])("Home");return Object(c["o"])(),Object(c["d"])("div",I,[Object(c["f"])("div",{class:[e.flipCondition,e.flipCardInner]},[Object(c["f"])("div",{class:["flip-card-front",e.activateback]},[Object(c["f"])(r)],2),Object(c["f"])("div",M,[Object(c["f"])(l)])],2)])})),F=Object(c["D"])("data-v-f3159d08");Object(c["r"])("data-v-f3159d08");var H={class:"home"},U={class:"about-container"},q={class:"about-image"},R=Object(c["f"])("div",{class:"name-text"},[Object(c["f"])("h1",{title:"Petar Kocic"},"Petar Kocić")],-1);Object(c["p"])();var J=F((function(e,t,a,i,o,r){return Object(c["o"])(),Object(c["d"])("div",H,[Object(c["f"])("div",U,[Object(c["f"])("div",q,[Object(c["f"])("img",{src:n("94ec"),alt:"",onClick:t[1]||(t[1]=function(){return e.typeEffect.apply(e,arguments)})},null,8,["src"])]),R,Object(c["f"])("p",{class:"about-text",ref:"aboutText"},Object(c["x"])(e.OutputText),513)])])})),V=Object(c["g"])({name:"Home",components:{},data:function(){return{i:0,baseText:"I am currently going to Uneversity for mechanical engeneering majoring in mechanical design. I am working as a game programmer for an indie studio based in Nis Serbia on the Unity3D Game Engine.\n      Aside from University and game development i also work freelance as a front end web developer in technologies like ReactJS and VueJS and make projects in python c# and javascript in my spare time.",OutputText:"",speed:5}},methods:{typeEffect:function(){for(var e=this,t=function(t){setTimeout((function(){e.OutputText+=e.baseText[t]}),18*t)},n=0;n<this.baseText.length;n++)t(n)}},mounted:function(){this.typeEffect()}});n("1c5a");V.render=J,V.__scopeId="data-v-f3159d08";var z=V,K=(n("a4d3"),n("e01a"),n("b0c0"),Object(c["D"])("data-v-d2a93358"));Object(c["r"])("data-v-d2a93358");var G={class:"main-container"},X=Object(c["f"])("h1",{class:"title"},"Projects",-1),Q={key:0},W={class:"project-container"};Object(c["p"])();var Y=K((function(e,t,n,a,i,o){var r=Object(c["v"])("ProjectCard");return Object(c["o"])(),Object(c["d"])("div",G,[X,e.isLoading?(Object(c["o"])(),Object(c["d"])("h1",Q,Object(c["x"])(e.isLoading),1)):Object(c["e"])("",!0),Object(c["f"])("div",W,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(a.projectList,(function(e,t){return Object(c["o"])(),Object(c["d"])(r,{key:t,id:t,name:e.name,description:e.description,image:e.image,tech:e.tech,github:e.git,live:e.live},null,8,["id","name","description","image","tech","github","live"])})),128))])])})),Z=Object(c["D"])("data-v-75049f73");Object(c["r"])("data-v-75049f73");var $={class:"main-project-card-container"},ee={class:"flip-card"},te={class:"flip-card-front"},ne={class:"flip-card-back"},ce={class:"card-back-header"},ae={class:"project-links"};Object(c["p"])();var ie=Z((function(e,t,n,a,i,o){return Object(c["o"])(),Object(c["d"])("div",$,[Object(c["f"])("div",ee,[Object(c["f"])("div",{class:[e.flipState,"flip-card-inner"]},[Object(c["f"])("div",te,[Object(c["f"])("img",{src:e.image,alt:e.name,onClick:t[1]||(t[1]=function(){return e.doAFlip.apply(e,arguments)}),class:e.clickEventDisable},null,10,["src","alt"]),Object(c["f"])("h1",null,Object(c["x"])(e.name),1)]),Object(c["f"])("div",ne,[Object(c["f"])("div",ce,[Object(c["f"])("h1",null,Object(c["x"])(e.name),1),Object(c["f"])("button",{class:"back-btn",onClick:t[2]||(t[2]=function(){return e.doAFlip.apply(e,arguments)})},"X")]),Object(c["f"])("p",null,Object(c["x"])(e.description),1),Object(c["f"])("ul",null,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(e.tech,(function(e,t){return Object(c["o"])(),Object(c["d"])("li",{key:t},Object(c["x"])(e),1)})),128))]),Object(c["f"])("div",ae,[e.github?(Object(c["o"])(),Object(c["d"])("a",{key:0,href:e.github},"Github",8,["href"])):Object(c["e"])("",!0),e.live?(Object(c["o"])(),Object(c["d"])("a",{key:1,href:e.live},"Live",8,["href"])):Object(c["e"])("",!0)])])],2)])])})),oe=(n("a9e3"),Object(c["g"])({name:"ProjectCard",props:{id:Number,name:String,description:String,image:String,tech:String,github:String,live:String},components:{},data:function(){return{flipState:"null",clickEventDisable:"null"}},methods:{doAFlip:function(){"do-a-flip"===this.flipState?this.flipState="null":this.flipState="do-a-flip",this.disableClick()},disableClick:function(){"click-event-diable"===this.clickEventDisable?this.clickEventDisable="null":this.clickEventDisable="click-event-diable"}}}));n("9207");oe.render=ie,oe.__scopeId="data-v-75049f73";var re=oe,le={name:"Projects",components:{ProjectCard:re},setup:function(){var e=Object(c["j"])("projectsList");return{projectList:e}}};n("4ce5");le.render=Y,le.__scopeId="data-v-d2a93358";var se=le,de=Object(c["g"])({name:"MainContainer",components:{Home:z,Projects:se},data:function(){return{x:"flip-condition",y:"flip-card-inner"}},props:{flipCondition:String,flipCardInner:String,activateback:String}});n("cbed");de.render=A,de.__scopeId="data-v-8b0035b2";var ue=de,be=Object(c["g"])({name:"Root",components:{NavBar:p,MainContainer:ue,ContactModal:N},data:function(){var e={flipCondition:"flip-condition",flipCardInner:"flip-card-inner",activateBack:"null"};return e},methods:{flipToHOmeElement:function(){this.flipCondition="flip-condition",this.activateBack="deactivate-back",console.log(this.activateBack)},flipToProjectsElement:function(){this.flipCondition="null",this.activateBack="activate-back",console.log(this.activateBack)}}});n("5b45");be.render=d;var fe=be,pe=[{path:"/",name:"Root",component:fe,props:!0},{path:"/admin",component:function(){return console.log(":s"),n.e("chunk-48981926").then(n.bind(null,"bb47"))}}],je=Object(s["a"])({history:Object(s["b"])("/"),routes:pe}),Oe=je;Object(c["c"])(l).use(Oe).mount("#app")},e0e8:function(e,t,n){e.exports=n.p+"img/linkedin.64098898.png"},e656:function(e,t,n){e.exports=n.p+"img/github.d19bbdb4.png"}});
//# sourceMappingURL=app.89e87ca4.js.map