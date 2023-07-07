import{aj as xr,r as Fe,i as Ue,j as E,ak as Ve,y as W,T as q,c as b,a9 as yn,D as L,al as Cr,z as Sr,u as Ye}from"./index-f2b9271d.js";import{S as Q,c as Ce,D as Tt}from"./Adb-e1564ba3.js";var _n={exports:{}},Er="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$r=Er,jr=$r;function wn(){}function kn(){}kn.resetWarningCache=wn;var Tr=function(){function t(r,i,o,s,l,c){if(c!==jr){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kn,resetWarningCache:wn};return n.PropTypes=n,n};_n.exports=Tr();var Rr=_n.exports;const we=xr(Rr);var vt={},Lr=Ue;Object.defineProperty(vt,"__esModule",{value:!0});var Ar=vt.default=void 0,Or=Lr(Fe()),Pr=E,Br=(0,Or.default)((0,Pr.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");Ar=vt.default=Br;var bt={},Mr=Ue;Object.defineProperty(bt,"__esModule",{value:!0});var zr=bt.default=void 0,Ir=Mr(Fe()),Dr=E,Nr=(0,Ir.default)((0,Dr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");zr=bt.default=Nr;var yt={},Hr=Ue;Object.defineProperty(yt,"__esModule",{value:!0});var Fr=yt.default=void 0,Ur=Hr(Fe()),Vr=E,qr=(0,Ur.default)((0,Vr.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"}),"PermContactCalendar");Fr=yt.default=qr;const Wr="https://hirex.social/api/v1/user",qe=Ve.create({baseURL:Wr,headers:{"Content-Type":"application/json"}});qe.interceptors.request.use(t=>{const e=localStorage.getItem("access_token_user");return t.headers.Authorization=`Bearer ${e}`,t},t=>Promise.reject(t));qe.interceptors.response.use(t=>t,t=>(t.response&&t.response.status===401&&(window.location.href="/user/login"),Promise.reject(t)));function Kr(){return E.jsx(W,{sx:{height:300,width:"100%",marginTop:3},children:E.jsxs(Q,{children:[E.jsxs(Q,{direction:"row",children:[E.jsxs(Q,{marginLeft:5,children:[E.jsx(q,{variant:"h4",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:400,letterSpacing:".3rem",color:"#1976d2",textDecoration:"none",marginLeft:4,marginTop:3},children:"HireX"}),E.jsx(q,{marginLeft:3,marginTop:3,fontSize:12,fontWeight:400,width:300,children:"The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency."}),E.jsxs(Q,{direction:"row",marginLeft:2,children:[E.jsx(Ce,{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",sx:{width:50,height:50,marginTop:2,marginRight:2}}),E.jsx(Ce,{alt:"",src:"https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png",sx:{width:50,height:50,marginTop:2,marginRight:2}}),E.jsx(Ce,{alt:"",src:"https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png",sx:{width:50,height:50,marginTop:2}})]})]}),E.jsx(q,{marginLeft:4,marginTop:5,fontSize:18,fontWeight:400,width:300,children:"Resources"}),E.jsx(q,{marginLeft:3,marginTop:5,fontSize:18,fontWeight:400,width:300,children:"Community"}),E.jsx(q,{marginLeft:3,marginTop:5,fontSize:18,fontWeight:400,width:300,children:"Quick links"}),E.jsx(q,{marginLeft:3,marginTop:5,fontSize:18,fontWeight:400,width:300,children:"More"})]}),E.jsx(Tt,{}),E.jsx(Tt,{}),E.jsx(q,{marginLeft:5,marginTop:2,fontSize:10,fontWeight:400,width:300,children:"Copyright © 2023. all right reserved"})]})})}function Gr(){return E.jsx(W,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:400,borderRadius:2,backgroundImage:"url('https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/thumb.png')",backgroundSize:"cover",position:"fixed","@media (max-width: 600px)":{height:300}},children:E.jsx(q,{marginTop:6,fontSize:40,fontWeight:1e3,textAlign:"center",color:"greenyellow",sx:{"@media (max-width: 600px)":{fontSize:20,fontWeight:500,color:"red"}},children:"The #1 Job Board for Hiring or Find Your Next Job"})})}const $s=Ve.create({baseURL:"https://hirex.social/api/v1/service",headers:{"Content-Type":"application/json"}});function Yr({data:t,currentuser:e,onClick:n,online:r}){const[i,o]=b.useState(null),[s,l]=b.useState(null),c=()=>{const u=e.recId?e.recId:e.useId,a=t.members.find(h=>h!==u),g=t==null?void 0:t.members.indexOf(a);try{g==0?yn.get("/getrecruiterdata?id="+a).then(h=>{l(h.data.recruiterdata)}).catch(h=>{console.error(h.message)}):qe.get("/profile/getprofile?id="+a).then(h=>{o(h.data.profiledata)}).catch(h=>{console.error(h.message)})}catch(h){console.log(h)}};return b.useEffect(()=>{c()},[]),E.jsx(W,{onClick:n,sx:{width:"90%",height:80,borderRadius:4,backgroundColor:"#c6e3fa",marginTop:1,marginLeft:2,cursor:"pointer"},children:E.jsxs(Q,{direction:"row",children:[E.jsx(Ce,{alt:"",src:s?s.image:i==null?void 0:i.image,sx:{width:50,height:50,marginTop:2,marginLeft:2}}),E.jsxs(Q,{children:[E.jsx(q,{textAlign:"center",marginTop:3,fontSize:18,fontWeight:500,marginLeft:3,children:s?s.name:i==null?void 0:i.name}),E.jsx(q,{fontSize:"0.75rem",marginLeft:3,children:r?"Online":"Offline"})]})]})})}var _t={},Jr=Ue;Object.defineProperty(_t,"__esModule",{value:!0});var xn=_t.default=void 0,Xr=Jr(Fe()),Qr=E,Zr=(0,Xr.default)((0,Qr.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");xn=_t.default=Zr;const ei="https://hirex.social/api/v1/chat",ti="https://hirex.social/api/v1/message",Rt=Ve.create({baseURL:ti,headers:{"Content-Type":"application/json"}});var ni=["second","minute","hour","day","week","month","year"];function ri(t,e){if(e===0)return["just now","right now"];var n=ni[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var ii=["秒","分钟","小时","天","周","个月","年"];function oi(t,e){if(e===0)return["刚刚","片刻后"];var n=ii[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var rt={},Cn=function(t,e){rt[t]=e},si=function(t){return rt[t]||rt.en_US},Je=[60,60,24,7,365/7/12,12];function Lt(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function ai(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,i=0;t>=Je[i]&&i<Je.length;i++)t/=Je[i];return t=Math.floor(t),i*=2,t>(i===0?9:1)&&(i+=1),e(t,i,r)[n].replace("%s",t.toString())}function ci(t,e){var n=e?Lt(e):new Date;return(+n-+Lt(t))/1e3}var li=function(t,e,n){var r=ci(t,n&&n.relativeDate);return ai(r,si(e))};Cn("en_US",ri);Cn("zh_CN",oi);function ui(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var hi=`.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;ui(hi);function At(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?At(Object(n),!0).forEach(function(r){di(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ke(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ke=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=typeof Symbol=="function"?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(p,m,$){return Object.defineProperty(p,m,{value:$,enumerable:!0,configurable:!0,writable:!0}),p[m]}try{l({},"")}catch{l=function(m,$,R){return m[$]=R}}function c(p,m,$,R){var j=m&&m.prototype instanceof g?m:g,z=Object.create(j.prototype),I=new Y(R||[]);return z._invoke=function(D,K,B){var V="suspendedStart";return function(H,he){if(V==="executing")throw new Error("Generator is already running");if(V==="completed"){if(H==="throw")throw he;return Ee()}for(B.method=H,B.arg=he;;){var le=B.delegate;if(le){var ye=C(le,B);if(ye){if(ye===a)continue;return ye}}if(B.method==="next")B.sent=B._sent=B.arg;else if(B.method==="throw"){if(V==="suspendedStart")throw V="completed",B.arg;B.dispatchException(B.arg)}else B.method==="return"&&B.abrupt("return",B.arg);V="executing";var oe=u(D,K,B);if(oe.type==="normal"){if(V=B.done?"completed":"suspendedYield",oe.arg===a)continue;return{value:oe.arg,done:B.done}}oe.type==="throw"&&(V="completed",B.method="throw",B.arg=oe.arg)}}}(p,$,I),z}function u(p,m,$){try{return{type:"normal",arg:p.call(m,$)}}catch(R){return{type:"throw",arg:R}}}t.wrap=c;var a={};function g(){}function h(){}function v(){}var d={};l(d,i,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(be([])));w&&w!==e&&n.call(w,i)&&(d=w);var k=v.prototype=g.prototype=Object.create(d);function x(p){["next","throw","return"].forEach(function(m){l(p,m,function($){return this._invoke(m,$)})})}function y(p,m){function $(j,z,I,D){var K=u(p[j],p,z);if(K.type!=="throw"){var B=K.arg,V=B.value;return V&&typeof V=="object"&&n.call(V,"__await")?m.resolve(V.__await).then(function(H){$("next",H,I,D)},function(H){$("throw",H,I,D)}):m.resolve(V).then(function(H){B.value=H,I(B)},function(H){return $("throw",H,I,D)})}D(K.arg)}var R;this._invoke=function(j,z){function I(){return new m(function(D,K){$(j,z,D,K)})}return R=R?R.then(I,I):I()}}function C(p,m){var $=p.iterator[m.method];if($===void 0){if(m.delegate=null,m.method==="throw"){if(p.iterator.return&&(m.method="return",m.arg=void 0,C(p,m),m.method==="throw"))return a;m.method="throw",m.arg=new TypeError("The iterator does not provide a 'throw' method")}return a}var R=u($,p.iterator,m.arg);if(R.type==="throw")return m.method="throw",m.arg=R.arg,m.delegate=null,a;var j=R.arg;return j?j.done?(m[p.resultName]=j.value,m.next=p.nextLoc,m.method!=="return"&&(m.method="next",m.arg=void 0),m.delegate=null,a):j:(m.method="throw",m.arg=new TypeError("iterator result is not an object"),m.delegate=null,a)}function S(p){var m={tryLoc:p[0]};1 in p&&(m.catchLoc=p[1]),2 in p&&(m.finallyLoc=p[2],m.afterLoc=p[3]),this.tryEntries.push(m)}function P(p){var m=p.completion||{};m.type="normal",delete m.arg,p.completion=m}function Y(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(S,this),this.reset(!0)}function be(p){if(p){var m=p[i];if(m)return m.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length)){var $=-1,R=function j(){for(;++$<p.length;)if(n.call(p,$))return j.value=p[$],j.done=!1,j;return j.value=void 0,j.done=!0,j};return R.next=R}}return{next:Ee}}function Ee(){return{value:void 0,done:!0}}return h.prototype=v,l(k,"constructor",v),l(v,"constructor",h),h.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(p){var m=typeof p=="function"&&p.constructor;return!!m&&(m===h||(m.displayName||m.name)==="GeneratorFunction")},t.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,v):(p.__proto__=v,l(p,s,"GeneratorFunction")),p.prototype=Object.create(k),p},t.awrap=function(p){return{__await:p}},x(y.prototype),l(y.prototype,o,function(){return this}),t.AsyncIterator=y,t.async=function(p,m,$,R,j){j===void 0&&(j=Promise);var z=new y(c(p,m,$,R),j);return t.isGeneratorFunction(m)?z:z.next().then(function(I){return I.done?I.value:z.next()})},x(k),l(k,s,"Generator"),l(k,i,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),t.keys=function(p){var m=[];for(var $ in p)m.push($);return m.reverse(),function R(){for(;m.length;){var j=m.pop();if(j in p)return R.value=j,R.done=!1,R}return R.done=!0,R}},t.values=be,Y.prototype={constructor:Y,reset:function(p){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!p)for(var m in this)m.charAt(0)==="t"&&n.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=void 0)},stop:function(){this.done=!0;var p=this.tryEntries[0].completion;if(p.type==="throw")throw p.arg;return this.rval},dispatchException:function(p){if(this.done)throw p;var m=this;function $(K,B){return z.type="throw",z.arg=p,m.next=K,B&&(m.method="next",m.arg=void 0),!!B}for(var R=this.tryEntries.length-1;R>=0;--R){var j=this.tryEntries[R],z=j.completion;if(j.tryLoc==="root")return $("end");if(j.tryLoc<=this.prev){var I=n.call(j,"catchLoc"),D=n.call(j,"finallyLoc");if(I&&D){if(this.prev<j.catchLoc)return $(j.catchLoc,!0);if(this.prev<j.finallyLoc)return $(j.finallyLoc)}else if(I){if(this.prev<j.catchLoc)return $(j.catchLoc,!0)}else{if(!D)throw new Error("try statement without catch or finally");if(this.prev<j.finallyLoc)return $(j.finallyLoc)}}}},abrupt:function(p,m){for(var $=this.tryEntries.length-1;$>=0;--$){var R=this.tryEntries[$];if(R.tryLoc<=this.prev&&n.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var j=R;break}}j&&(p==="break"||p==="continue")&&j.tryLoc<=m&&m<=j.finallyLoc&&(j=null);var z=j?j.completion:{};return z.type=p,z.arg=m,j?(this.method="next",this.next=j.finallyLoc,a):this.complete(z)},complete:function(p,m){if(p.type==="throw")throw p.arg;return p.type==="break"||p.type==="continue"?this.next=p.arg:p.type==="return"?(this.rval=this.arg=p.arg,this.method="return",this.next="end"):p.type==="normal"&&m&&(this.next=m),a},finish:function(p){for(var m=this.tryEntries.length-1;m>=0;--m){var $=this.tryEntries[m];if($.finallyLoc===p)return this.complete($.completion,$.afterLoc),P($),a}},catch:function(p){for(var m=this.tryEntries.length-1;m>=0;--m){var $=this.tryEntries[m];if($.tryLoc===p){var R=$.completion;if(R.type==="throw"){var j=R.arg;P($)}return j}}throw new Error("illegal catch attempt")},delegateYield:function(p,m,$){return this.delegate={iterator:be(p),resultName:m,nextLoc:$},this.method==="next"&&(this.arg=void 0),a}},t}function Pt(t,e,n,r,i,o,s){try{var l=t[o](s),c=l.value}catch(u){n(u);return}l.done?e(c):Promise.resolve(c).then(r,i)}function Bt(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function s(c){Pt(o,r,i,s,l,"next",c)}function l(c){Pt(o,r,i,s,l,"throw",c)}s(void 0)})}}function di(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fi(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pi(t,e){if(t==null)return{};var n=fi(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ae(t,e){return gi(t)||bi(t,e)||En(t,e)||_i()}function Sn(t){return mi(t)||vi(t)||En(t)||yi()}function mi(t){if(Array.isArray(t))return it(t)}function gi(t){if(Array.isArray(t))return t}function vi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bi(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(c){o=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function En(t,e){if(t){if(typeof t=="string")return it(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return it(t,e)}}function it(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wi="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";function $n(t){var e=ki(t);return e&&(e=Sn(new Set(e)),e.forEach(function(n){t=jn(t,n,Tn(n))})),t}function jn(t,e,n){return t.replace(new RegExp(e,"g"),n)}function ki(t){return t.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g)}function xi(t){var e,n=document.querySelector("em-emoji-picker");if(!n)return Mt(t.native);var r=n==null||(e=n.shadowRoot)===null||e===void 0?void 0:e.querySelector('[title="'.concat(t.name,'"] > span > span'));if(!r)return Mt(t.native);var i=jn(r.style.cssText,'"',"'");return Tn(i,t.native)}function Tn(t,e){return'<img style="'.concat(t,'; display: inline-block" data-emoji="').concat(e,'" src="').concat(wi,'" />')}function Mt(t){return'<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(t,"</span>")}function Ci(t){var e=document.createElement("div");e.innerHTML=t;var n=Array.prototype.slice.call(e.querySelectorAll("img"));return n.forEach(function(r){e.innerHTML=e.innerHTML.replace(r.outerHTML,r.dataset.emoji)}),e.innerHTML}function Si(t){var e,n;if(window.getSelection){if(e=window.getSelection(),e===null)return;if(e.getRangeAt&&e.rangeCount){n=e.getRangeAt(0),n.deleteContents();var r=document.createElement("div");r.innerHTML=t;for(var i=document.createDocumentFragment(),o,s;o=r.firstChild;)s=i.appendChild(o);n.insertNode(i),s&&(n=n.cloneRange(),n.setStartAfter(s),n.collapse(!0),e.removeAllRanges(),e.addRange(n))}}}function zt(t){var e=t.text,n=t.html,r=e.length,i=(n.match(/<img/g)||[]).length;return r+i}function Ei(t){var e,n;document.createRange&&t.current&&(e=document.createRange(),e.selectNodeContents(t.current),e.collapse(!1),n=window.getSelection(),n&&(n.removeAllRanges(),n.addRange(e)))}function $i(t){var e=t.innerHTML.replace(/<br\s*\/?>/gi,"[BR]"),n=e.replace(/<[^>]+>/g,""),r=n.replace(/\[BR\]/gi,"</br>");return r}function Rn(t){var e=b.useRef([]),n=b.useRef(""),r=b.useCallback(function(o){e.current.push(o)},[]),i=b.useCallback(function(o){var s=e.current.reduce(function(l,c){return c(l)},o);return s=ji(s,t),n.current=s,s},[]);return{addSanitizeFn:r,sanitize:i,sanitizedTextRef:n}}function ji(t,e){var n=document.createElement("div");n.innerHTML=t;var r;return e?r=$i(n):r=n.innerText||"",r=r.replace(/\n/gi,""),r}function Ti(t){var e=t.ref,n=t.textInputRef,r=t.setValue,i=t.emitChange,o=Rn(),s=o.sanitize,l=o.sanitizedTextRef;b.useImperativeHandle(e,function(){return{get value(){return l.current},set value(c){r(c)},focus:function(){n.current!==null&&n.current.focus()},blur:function(){n.current!==null&&s(n.current.html),i()}}})}function Ri(t,e,n){var r=b.useRef(null),i=b.useRef(n),o=b.useCallback(function(){if(t.current!==null){var l=r.current,c=t.current.size;(!l||l.width!==c.width||l.height!==c.height)&&typeof e=="function"&&e(c),r.current=c}},[e,t]),s=b.useCallback(function(l){typeof i.current=="function"&&i.current(l),typeof e=="function"&&o()},[o,e]);return b.useEffect(function(){t.current&&o()},[o,t]),s}var Li=["placeholder","style","tabIndex","className","onChange"],Ai=function(e,n){var r=e.placeholder,i=e.style,o=e.tabIndex,s=e.className,l=e.onChange,c=pi(e,Li);b.useImperativeHandle(n,function(){return{appendContent:function(_){a.current&&a.current.focus(),Si(_),a.current&&a.current.focus(),a.current&&u.current&&a.current.innerHTML.trim()===""?u.current.style.visibility="visible":u.current&&(u.current.style.visibility="hidden"),a.current&&typeof l=="function"&&l(a.current.innerHTML)},set html(d){a.current&&(a.current.innerHTML=d),u.current&&(d.trim()===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"),typeof l=="function"&&a.current&&l(a.current.innerHTML)},get html(){return a.current?a.current.innerHTML:""},get text(){return a.current?a.current.innerText:""},get size(){return a.current?{width:a.current.offsetWidth,height:a.current.offsetHeight}:{width:0,height:0}},focus:function(){a.current&&a.current.focus()}}});var u=b.useRef(null),a=b.useRef(null);function g(d){if(d.key==="Enter"&&(d.shiftKey===!0||d.ctrlKey===!0)&&c.shouldReturn&&(d.preventDefault(),a.current)){a.current.innerHTML="".concat(a.current.innerHTML,"</br></br>"),Ei(a);return}d.key==="Enter"?c.onEnter(d):d.key==="ArrowUp"?c.onArrowUp(d):d.key==="ArrowDown"?c.onArrowDown(d):d.key.length===1&&u.current&&(u.current.style.visibility="hidden"),c.onKeyDown(d)}function h(){c.onFocus()}function v(d){c.onKeyUp(d);var _=a.current;if(u.current){var w;(_==null||(w=_.innerText)===null||w===void 0?void 0:w.trim())===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"}typeof l=="function"&&a.current&&l(a.current.innerHTML)}return L.createElement("div",{className:"react-input-emoji--container",style:i},L.createElement("div",{className:"react-input-emoji--wrapper",onClick:h},L.createElement("div",{ref:u,className:"react-input-emoji--placeholder"},r),L.createElement("div",{ref:a,onKeyDown:g,onKeyUp:v,tabIndex:o,contentEditable:!0,className:"react-input-emoji--input".concat(s?" ".concat(s):""),onBlur:c.onBlur,onCopy:c.onCopy,onPaste:c.onPaste,"data-testid":"react-input-emoji--input"})))},Oi=b.forwardRef(Ai);function It(t){var e=t.showPicker,n=t.toggleShowPicker,r=t.buttonElement,i=b.useRef(null),o=b.useState(!1),s=ae(o,2),l=s[0],c=s[1];return b.useEffect(function(){var u,a;((u=r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)!==null&&u!==void 0?u:0)>2&&(i.current.appendChild(r==null?void 0:r.childNodes[0]),c(!0))},[r==null?void 0:r.childNodes]),L.createElement("button",{ref:i,type:"button",className:"react-input-emoji--button".concat(e?" react-input-emoji--button__show":""),onClick:n},!l&&L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"react-input-emoji--button--icon"},L.createElement("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),L.createElement("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})))}function Ln(t){return t&&t.__esModule?t.default:t}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var We,T,An,Se,On,Dt,Me={},Pn=[],Pi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function se(t,e){for(var n in e)t[n]=e[n];return t}function Bn(t){var e=t.parentNode;e&&e.removeChild(t)}function ot(t,e,n){var r,i,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?We.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return Le(t,s,r,i,null)}function Le(t,e,n,r,i){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++An};return i==null&&T.vnode!=null&&T.vnode(o),o}function re(){return{current:null}}function me(t){return t.children}function ee(t,e){this.props=t,this.context=e}function ge(t,e){if(e==null)return t.__?ge(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?ge(t):null}function Mn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Mn(t)}}function Nt(t){(!t.__d&&(t.__d=!0)&&Se.push(t)&&!ze.__r++||Dt!==T.debounceRendering)&&((Dt=T.debounceRendering)||On)(ze)}function ze(){for(var t;ze.__r=Se.length;)t=Se.sort(function(e,n){return e.__v.__b-n.__v.__b}),Se=[],t.some(function(e){var n,r,i,o,s,l;e.__d&&(s=(o=(n=e).__v).__e,(l=n.__P)&&(r=[],(i=se({},o)).__v=o.__v+1,wt(l,o,i,n.__n,l.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??ge(o),o.__h),Nn(r,o),o.__e!=s&&Mn(o)))})}function zn(t,e,n,r,i,o,s,l,c,u){var a,g,h,v,d,_,w,k=r&&r.__k||Pn,x=k.length;for(n.__k=[],a=0;a<e.length;a++)if((v=n.__k[a]=(v=e[a])==null||typeof v=="boolean"?null:typeof v=="string"||typeof v=="number"||typeof v=="bigint"?Le(null,v,null,null,v):Array.isArray(v)?Le(me,{children:v},null,null,null):v.__b>0?Le(v.type,v.props,v.key,null,v.__v):v)!=null){if(v.__=n,v.__b=n.__b+1,(h=k[a])===null||h&&v.key==h.key&&v.type===h.type)k[a]=void 0;else for(g=0;g<x;g++){if((h=k[g])&&v.key==h.key&&v.type===h.type){k[g]=void 0;break}h=null}wt(t,v,h=h||Me,i,o,s,l,c,u),d=v.__e,(g=v.ref)&&h.ref!=g&&(w||(w=[]),h.ref&&w.push(h.ref,null,v),w.push(g,v.__c||d,v)),d!=null?(_==null&&(_=d),typeof v.type=="function"&&v.__k===h.__k?v.__d=c=In(v,c,t):c=Dn(t,v,h,k,d,c),typeof n.type=="function"&&(n.__d=c)):c&&h.__e==c&&c.parentNode!=t&&(c=ge(h))}for(n.__e=_,a=x;a--;)k[a]!=null&&(typeof n.type=="function"&&k[a].__e!=null&&k[a].__e==n.__d&&(n.__d=ge(r,a+1)),Fn(k[a],k[a]));if(w)for(a=0;a<w.length;a++)Hn(w[a],w[++a],w[++a])}function In(t,e,n){for(var r,i=t.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=t,e=typeof r.type=="function"?In(r,e,n):Dn(n,r,r,i,r.__e,e));return e}function Ie(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Ie(n,e)}):e.push(t)),e}function Dn(t,e,n,r,i,o){var s,l,c;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),s=null;else{for(l=o,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==i)break e;t.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function Bi(t,e,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in e||De(t,o,null,n[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||De(t,o,e[o],n[o],r)}function Ht(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Pi.test(e)?n:n+"px"}function De(t,e,n,r,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Ht(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Ht(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?Ut:Ft,o):t.removeEventListener(e,o?Ut:Ft,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Ft(t){this.l[t.type+!1](T.event?T.event(t):t)}function Ut(t){this.l[t.type+!0](T.event?T.event(t):t)}function wt(t,e,n,r,i,o,s,l,c){var u,a,g,h,v,d,_,w,k,x,y,C=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=e.__e=n.__e,e.__h=null,o=[l]),(u=T.__b)&&u(e);try{e:if(typeof C=="function"){if(w=e.props,k=(u=C.contextType)&&r[u.__c],x=u?k?k.props.value:u.__:r,n.__c?_=(a=e.__c=n.__c).__=a.__E:("prototype"in C&&C.prototype.render?e.__c=a=new C(w,x):(e.__c=a=new ee(w,x),a.constructor=C,a.render=zi),k&&k.sub(a),a.props=w,a.state||(a.state={}),a.context=x,a.__n=r,g=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),C.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=se({},a.__s)),se(a.__s,C.getDerivedStateFromProps(w,a.__s))),h=a.props,v=a.state,g)C.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(C.getDerivedStateFromProps==null&&w!==h&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(w,x),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(w,a.__s,x)===!1||e.__v===n.__v){a.props=w,a.state=a.__s,e.__v!==n.__v&&(a.__d=!1),a.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(S){S&&(S.__=e)}),a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(w,a.__s,x),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(h,v,d)})}a.context=x,a.props=w,a.state=a.__s,(u=T.__r)&&u(e),a.__d=!1,a.__v=e,a.__P=t,u=a.render(a.props,a.state,a.context),a.state=a.__s,a.getChildContext!=null&&(r=se(se({},r),a.getChildContext())),g||a.getSnapshotBeforeUpdate==null||(d=a.getSnapshotBeforeUpdate(h,v)),y=u!=null&&u.type===me&&u.key==null?u.props.children:u,zn(t,Array.isArray(y)?y:[y],e,n,r,i,o,s,l,c),a.base=e.__e,e.__h=null,a.__h.length&&s.push(a),_&&(a.__E=a.__=null),a.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Mi(n.__e,e,n,r,i,o,s,c);(u=T.diffed)&&u(e)}catch(S){e.__v=null,(c||o!=null)&&(e.__e=l,e.__h=!!c,o[o.indexOf(l)]=null),T.__e(S,e,n)}}function Nn(t,e){T.__c&&T.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){T.__e(r,n.__v)}})}function Mi(t,e,n,r,i,o,s,l){var c,u,a,g=n.props,h=e.props,v=e.type,d=0;if(v==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((c=o[d])&&"setAttribute"in c==!!v&&(v?c.localName===v:c.nodeType===3)){t=c,o[d]=null;break}}if(t==null){if(v===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),o=null,l=!1}if(v===null)g===h||l&&t.data===h||(t.data=h);else{if(o=o&&We.call(t.childNodes),u=(g=n.props||Me).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!l){if(o!=null)for(g={},d=0;d<t.attributes.length;d++)g[t.attributes[d].name]=t.attributes[d].value;(a||u)&&(a&&(u&&a.__html==u.__html||a.__html===t.innerHTML)||(t.innerHTML=a&&a.__html||""))}if(Bi(t,h,g,i,l),a)e.__k=[];else if(d=e.props.children,zn(t,Array.isArray(d)?d:[d],e,n,r,i&&v!=="foreignObject",o,s,o?o[0]:n.__k&&ge(n,0),l),o!=null)for(d=o.length;d--;)o[d]!=null&&Bn(o[d]);l||("value"in h&&(d=h.value)!==void 0&&(d!==g.value||d!==t.value||v==="progress"&&!d)&&De(t,"value",d,g.value,!1),"checked"in h&&(d=h.checked)!==void 0&&d!==t.checked&&De(t,"checked",d,g.checked,!1))}return t}function Hn(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){T.__e(r,n)}}function Fn(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Hn(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){T.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Fn(r[i],e,typeof t.type!="function");n||t.__e==null||Bn(t.__e),t.__e=t.__d=void 0}function zi(t,e,n){return this.constructor(t,n)}function Un(t,e,n){var r,i,o;T.__&&T.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],wt(e,t=(!r&&n||e).__k=ot(me,null,[t]),i||Me,Me,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?We.call(e.childNodes):null,o,!r&&n?n:i?i.__e:e.firstChild,r),Nn(o,t)}We=Pn.slice,T={__e:function(t,e){for(var n,r,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),i=n.__d),i)return n.__E=n}catch(o){t=o}throw t}},An=0,ee.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=se({},this.state),typeof t=="function"&&(t=t(se({},n),this.props)),t&&se(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),Nt(this))},ee.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Nt(this))},ee.prototype.render=me,Se=[],On=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ze.__r=0;var Ii=0;function f(t,e,n,r,i){var o,s,l={};for(s in e)s=="ref"?o=e[s]:l[s]=e[s];var c={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ii,__source:r,__self:i};if(typeof t=="function"&&(o=t.defaultProps))for(s in o)l[s]===void 0&&(l[s]=o[s]);return T.vnode&&T.vnode(c),c}function Di(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function Ni(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var ce={set:Di,get:Ni};const Xe=new Map,Hi=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function Fi(){for(const{v:t,emoji:e}of Hi)if(Vn(e))return t}function Ui(){return!Vn("🇨🇦")}function Vn(t){if(Xe.has(t))return Xe.get(t);const e=Vi(t);return Xe.set(t,e),e}const Vi=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,r=Math.floor(e/2);return t.font=r+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,i=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(i,0,22),t.fillStyle="#0000FF",t.fillText(i,n,22);const o=t.getImageData(0,0,n,e).data,s=o.length;let l=0;for(;l<s&&!o[l+3];l+=4);if(l>=s)return!1;const c=n+l/4%n,u=Math.floor(l/4/n),a=t.getImageData(c,u,1,1).data;return!(o[l]!==a[0]||o[l+2]!==a[2]||t.measureText(i).width>=n)}})();var Vt={latestVersion:Fi,noCountryFlags:Ui};const st=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let F=null;function qi(t){F||(F=ce.get("frequently")||{});const e=t.id||t;e&&(F[e]||(F[e]=0),F[e]+=1,ce.set("last",e),ce.set("frequently",F))}function Wi({maxFrequentRows:t,perLine:e}){if(!t)return[];F||(F=ce.get("frequently"));let n=[];if(!F){F={};for(let o in st.slice(0,e)){const s=st[o];F[s]=e-o,n.push(s)}return n}const r=t*e,i=ce.get("last");for(let o in F)n.push(o);if(n.sort((o,s)=>{const l=F[s],c=F[o];return l==c?o.localeCompare(s):l-c}),n.length>r){const o=n.slice(r);n=n.slice(0,r);for(let s of o)s!=i&&delete F[s];i&&n.indexOf(i)==-1&&(delete F[n[n.length-1]],n.splice(-1,1,i)),ce.set("frequently",F)}return n}var qn={add:qi,get:Wi,DEFAULTS:st},Wn={};Wn=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var ie={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let U=null,A=null;const Qe={};async function qt(t){if(Qe[t])return Qe[t];const n=await(await fetch(t)).json();return Qe[t]=n,n}let Ze=null,Kn=null,Gn=!1;function Ke(t,{caller:e}={}){return Ze||(Ze=new Promise(n=>{Kn=n})),t?Ki(t):e&&!Gn&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),Ze}async function Ki(t){Gn=!0;let{emojiVersion:e,set:n,locale:r}=t;if(e||(e=ie.emojiVersion.value),n||(n=ie.set.value),r||(r=ie.locale.value),A)A.categories=A.categories.filter(c=>!c.name);else{A=(typeof t.data=="function"?await t.data():t.data)||await qt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),A.emoticons={},A.natives={},A.categories.unshift({id:"frequent",emojis:[]});for(const c in A.aliases){const u=A.aliases[c],a=A.emojis[u];a&&(a.aliases||(a.aliases=[]),a.aliases.push(c))}A.originalCategories=A.categories}if(U=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(r=="en"?Ln(Wn):await qt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),t.custom)for(let c in t.custom){c=parseInt(c);const u=t.custom[c],a=t.custom[c-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${c+1}`),u.name||(u.name=U.categories.custom),a&&!u.icon&&(u.target=a.target||a),A.categories.push(u);for(const g of u.emojis)A.emojis[g.id]=g}}t.categories&&(A.categories=A.originalCategories.filter(c=>t.categories.indexOf(c.id)!=-1).sort((c,u)=>{const a=t.categories.indexOf(c.id),g=t.categories.indexOf(u.id);return a-g}));let i=null,o=null;n=="native"&&(i=Vt.latestVersion(),o=t.noCountryFlags||Vt.noCountryFlags());let s=A.categories.length,l=!1;for(;s--;){const c=A.categories[s];if(c.id=="frequent"){let{maxFrequentRows:g,perLine:h}=t;g=g>=0?g:ie.maxFrequentRows.value,h||(h=ie.perLine.value),c.emojis=qn.get({maxFrequentRows:g,perLine:h})}if(!c.emojis||!c.emojis.length){A.categories.splice(s,1);continue}const{categoryIcons:u}=t;if(u){const g=u[c.id];g&&!c.icon&&(c.icon=g)}let a=c.emojis.length;for(;a--;){const g=c.emojis[a],h=g.id?g:A.emojis[g],v=()=>{c.emojis.splice(a,1)};if(!h||t.exceptEmojis&&t.exceptEmojis.includes(h.id)){v();continue}if(i&&h.version>i){v();continue}if(o&&c.id=="flags"&&!Qi.includes(h.id)){v();continue}if(!h.search){if(l=!0,h.search=","+[[h.id,!1],[h.name,!0],[h.keywords,!1],[h.emoticons,!1]].map(([_,w])=>{if(_)return(Array.isArray(_)?_:[_]).map(k=>(w?k.split(/[-|_|\s]+/):[k]).map(x=>x.toLowerCase())).flat()}).flat().filter(_=>_&&_.trim()).join(","),h.emoticons)for(const _ of h.emoticons)A.emoticons[_]||(A.emoticons[_]=h.id);let d=0;for(const _ of h.skins){if(!_)continue;d++;const{native:w}=_;w&&(A.natives[w]=h.id,h.search+=`,${w}`);const k=d==1?"":`:skin-tone-${d}:`;_.shortcodes=`:${h.id}:${k}`}}}}l&&pe.reset(),Kn()}function Yn(t,e,n){t||(t={});const r={};for(let i in e)r[i]=Jn(i,t,e,n);return r}function Jn(t,e,n,r){const i=n[t];let o=r&&r.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return i&&(o!=null&&i.value&&typeof i.value!=typeof o&&(typeof i.value=="boolean"?o=o!="false":o=i.value.constructor(o)),i.transform&&o&&(o=i.transform(o)),(o==null||i.choices&&i.choices.indexOf(o)==-1)&&(o=i.value)),o}const Gi=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let at=null;function Yi(t){return t.id?t:A.emojis[t]||A.emojis[A.aliases[t]]||A.emojis[A.natives[t]]}function Ji(){at=null}async function Xi(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await Ke(null,{caller:n||"SearchIndex.search"});const r=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((l,c,u)=>l.trim()&&u.indexOf(l)==c);if(!r.length)return;let i=at||(at=Object.values(A.emojis)),o,s;for(const l of r){if(!i.length)break;o=[],s={};for(const c of i){if(!c.search)continue;const u=c.search.indexOf(`,${l}`);u!=-1&&(o.push(c),s[c.id]||(s[c.id]=0),s[c.id]+=c.id==l?0:u+1)}i=o}return o.length<2||(o.sort((l,c)=>{const u=s[l.id],a=s[c.id];return u==a?l.id.localeCompare(c.id):u-a}),o.length>e&&(o=o.slice(0,e))),o}var pe={search:Xi,get:Yi,reset:Ji,SHORTCODES_REGEX:Gi};const Qi=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function Zi(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,r)=>n==e[r])}async function eo(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function to(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),r={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(r.skin=e+1),n.src&&(r.src=n.src),t.aliases&&t.aliases.length&&(r.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(r.emoticons=t.emoticons),r}const no={activity:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:f("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),f("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),f("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:f("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),f("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:f("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),f("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),f("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},ro={loupe:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:f("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:f("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ne={categories:no,search:ro};function ct(t){let{id:e,skin:n,emoji:r}=t;if(t.shortcodes){const l=t.shortcodes.match(pe.SHORTCODES_REGEX);l&&(e=l[1],l[2]&&(n=l[2]))}if(r||(r=pe.get(e||t.native)),!r)return t.fallback;const i=r.skins[n-1]||r.skins[0],o=i.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,i.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${i.unified}.png`:void 0),s=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return f("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:o?f("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:i.native||i.shortcodes,src:o}):t.set=="native"?f("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:i.native}):f("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${s})`,backgroundSize:`${100*A.sheet.cols}% ${100*A.sheet.rows}%`,backgroundPosition:`${100/(A.sheet.cols-1)*i.x}% ${100/(A.sheet.rows-1)*i.y}%`}})})}const io=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Xn extends io{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,r){if(!this.component)return;const i=Jn(e,{[e]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:i}):(this.component.props[e]=i,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const r=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class oo extends Xn{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Qn={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:ie.set,skin:ie.skin};class Zn extends Xn{async connectedCallback(){const e=Yn(this.props,Qn,this);e.element=this,e.ref=n=>{this.component=n},await Ke(),!this.disconnected&&Un(f(ct,{...e}),this)}constructor(e){super(e)}}J(Zn,"Props",Qn);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Zn);var Wt,lt=[],Kt=T.__b,Gt=T.__r,Yt=T.diffed,Jt=T.__c,Xt=T.unmount;function so(){var t;for(lt.sort(function(e,n){return e.__v.__b-n.__v.__b});t=lt.pop();)if(t.__P)try{t.__H.__h.forEach(Ae),t.__H.__h.forEach(ut),t.__H.__h=[]}catch(e){t.__H.__h=[],T.__e(e,t.__v)}}T.__b=function(t){Kt&&Kt(t)},T.__r=function(t){Gt&&Gt(t);var e=t.__c.__H;e&&(e.__h.forEach(Ae),e.__h.forEach(ut),e.__h=[])},T.diffed=function(t){Yt&&Yt(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(lt.push(e)!==1&&Wt===T.requestAnimationFrame||((Wt=T.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),Qt&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);Qt&&(r=requestAnimationFrame(i))})(so))},T.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ae),n.__h=n.__h.filter(function(r){return!r.__||ut(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],T.__e(r,n.__v)}}),Jt&&Jt(t,e)},T.unmount=function(t){Xt&&Xt(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ae(r)}catch(i){e=i}}),e&&T.__e(e,n.__v))};var Qt=typeof requestAnimationFrame=="function";function Ae(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function ut(t){t.__c=t.__()}function ao(t,e){for(var n in e)t[n]=e[n];return t}function Zt(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function He(t){this.props=t}(He.prototype=new ee).isPureReactComponent=!0,He.prototype.shouldComponentUpdate=function(t,e){return Zt(this.props,t)||Zt(this.state,e)};var en=T.__b;T.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),en&&en(t)};var co=T.__e;T.__e=function(t,e,n){if(t.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e)}co(t,e,n)};var tn=T.unmount;function et(){this.__u=0,this.t=null,this.__b=null}function er(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function $e(){this.u=null,this.o=null}T.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),tn&&tn(t)},(et.prototype=new ee).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=er(r.__v),o=!1,s=function(){o||(o=!0,n.__R=null,i?i(l):l())};n.__R=s;var l=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function g(h,v,d){return h&&(h.__v=null,h.__k=h.__k&&h.__k.map(function(_){return g(_,v,d)}),h.__c&&h.__c.__P===v&&(h.__e&&d.insertBefore(h.__e,h.__d),h.__c.__e=!0,h.__c.__P=d)),h}(u,u.__c.__P,u.__c.__O)}var a;for(r.setState({__e:r.__b=null});a=r.t.pop();)a.forceUpdate()}},c=e.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(s,s)},et.prototype.componentWillUnmount=function(){this.t=[]},et.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(s,l,c){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),s.__c.__H=null),(s=ao({},s)).__c!=null&&(s.__c.__P===c&&(s.__c.__P=l),s.__c=null),s.__k=s.__k&&s.__k.map(function(u){return o(u,l,c)})),s}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__e&&ot(me,null,t.fallback);return i&&(i.__h=null),[ot(me,null,e.__e?null:t.children),i]};var nn=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};($e.prototype=new ee).__e=function(t){var e=this,n=er(e.__v),r=e.o.get(t);return r[0]++,function(i){var o=function(){e.props.revealOrder?(r.push(i),nn(e,t,r)):i()};n?n(o):o()}},$e.prototype.render=function(t){this.u=null,this.o=new Map;var e=Ie(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},$e.prototype.componentDidUpdate=$e.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){nn(t,n,e)})};var lo=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,uo=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ho=typeof document<"u",fo=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};ee.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(ee.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var rn=T.event;function po(){}function mo(){return this.cancelBubble}function go(){return this.defaultPrevented}T.event=function(t){return rn&&(t=rn(t)),t.persist=po,t.isPropagationStopped=mo,t.isDefaultPrevented=go,t.nativeEvent=t};var on={configurable:!0,get:function(){return this.class}},sn=T.vnode;T.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){var i=e.indexOf("-")===-1;for(var o in r={},n){var s=n[o];ho&&o==="children"&&e==="noscript"||o==="value"&&"defaultValue"in n&&s==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!fo(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():i&&uo.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),r[o]=s)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Ie(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=Ie(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.props=r,n.class!=n.className&&(on.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",on))}t.$$typeof=lo,sn&&sn(t)};var an=T.__r;T.__r=function(t){an&&an(t),t.__c};const vo={light:"outline",dark:"solid"};class bo extends He{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return f("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return f("img",{src:n.src})}const r=Ne.categories[e.id]||Ne.categories.custom,i=this.props.icons=="auto"?vo[this.props.theme]:this.props.icons;return r[i]||r}render(){let e=null;return f("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:f("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const i=n.name||U.categories[n.id],o=!this.props.unfocused&&n.id==this.state.categoryId;return o&&(e=r),f("button",{"aria-label":i,"aria-selected":o||void 0,title:i,type:"button",class:"flex flex-grow flex-center",onMouseDown:s=>s.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),f("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=A.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class yo extends He{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const je={rowsPerRender:10};class _o extends ee{getInitialState(e=this.props){return{skin:ce.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=U.rtl?"rtl":"ltr",this.refs={menu:re(),navigation:re(),scroll:re(),search:re(),searchInput:re(),skinToneButton:re(),skinToneRadio:re()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const i in this.nextState)this.props[i]=this.nextState[i],(i==="custom"||i==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(e={}){await Ke(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=A;this.refs.categories=new Map;const n=A.categories.map(i=>i.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(i,o)=>{const s=[];s.__categoryId=o.id,s.__index=i.length,this.grid.push(s);const l=this.grid.length-1,c=l%je.rowsPerRender?{}:re();return c.index=l,c.posinset=this.grid.setsize+1,i.push(c),s};for(let i of e){const o=[];let s=r(o,i);for(let l of i.emojis)s.length==this.getPerLine()&&(s=r(o,i)),this.grid.setsize+=1,s.push(l);this.refs.categories.set(i.id,{root:re(),rows:o})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:r}=e,i=()=>{const{width:s}=n.getBoundingClientRect();return Math.floor(s/r)},o=new ResizeObserver(()=>{this.unobserve({except:o}),this.setState({perLine:i()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return o.observe(n),this.observers.push(o),i()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const r=this.state.searchResults||this.grid,i=r[e]&&r[e][n];if(i)return pe.get(i)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,r=s=>{s!=e.state.categoryId&&e.setState({categoryId:s})},i={root:this.refs.scroll.current,threshold:[0,1]},o=new IntersectionObserver(s=>{for(const c of s){const u=c.target.dataset.id;n.set(u,c.intersectionRatio)}const l=[...n];for(const[c,u]of l)if(u){r(c);break}},i);for(const{root:s}of this.refs.categories.values())o.observe(s.current);this.observers.push(o)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const i of r){const o=parseInt(i.target.dataset.index);i.isIntersecting?e[o]=!0:delete e[o]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(je.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*je.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const i of r)i.current&&n.observe(i.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:r,right:i,up:o,down:s}){const l=this.state.searchResults||this.grid;if(!l.length)return;let[c,u]=this.state.pos;const a=(()=>{if(c==0&&u==0&&!e.repeat&&(r||o))return null;if(c==-1)return!e.repeat&&(i||s)&&n.selectionStart==n.value.length?[0,0]:null;if(r||i){let g=l[c];const h=r?-1:1;if(u+=h,!g[u]){if(c+=h,g=l[c],!g)return c=r?0:l.length-1,u=r?0:l[c].length-1,[c,u];u=r?g.length-1:0}return[c,u]}if(o||s){c+=o?-1:1;const g=l[c];return g?(g[u]||(u=g.length-1),[c,u]):(c=o?0:l.length-1,u=o?0:l[c].length-1,[c,u])}})();if(a)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:a,keyboard:!0},()=>{this.scrollTo({row:a[0]})})}scrollTo({categoryId:e,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const i=this.refs.scroll.current,o=i.getBoundingClientRect();let s=0;if(n>=0&&(e=r[n].__categoryId),e&&(s=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(o.top-i.scrollTop)+1),n>=0)if(!n)s=0;else{const l=r[n].__index,c=s+l*this.props.emojiButtonSize,u=c+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(c<i.scrollTop)s=c;else if(u>i.scrollTop+o.height)s=u-o.height;else return}this.ignoreMouse(),i.scrollTop=s}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const i=to(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&qn.add(i,this.props),this.props.onEmojiSelect(i,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),ce.set("skin",e)}renderNav(){return f(bo,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return f("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[f("div",{class:"flex flex-middle flex-grow",children:[f("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:f(ct,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),f("div",{class:`margin-${this.dir[0]}`,children:e||n?f("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[f("div",{class:"preview-title ellipsis",children:e?e.name:U.search_no_results_1}),f("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:U.search_no_results_2})]}):f("div",{class:"preview-placeholder color-c",children:U.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:r,grid:i}){const o=this.props.emojiButtonSize,s=this.state.tempSkin||this.state.skin,c=(e.skins[s-1]||e.skins[0]).native,u=Zi(this.state.pos,n),a=n.concat(e.id).join("");return f(yo,{selected:u,skin:s,size:o,children:f("button",{"aria-label":c,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":i.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[f("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),f(ct,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:s,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},a)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return f("div",{children:[f("div",{class:"spacer"}),f("div",{class:"flex flex-middle",children:[f("div",{class:"search relative flex-grow",children:[f("input",{type:"search",ref:this.refs.searchInput,placeholder:U.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),f("span",{class:"icon loupe flex",children:Ne.search.loupe}),this.state.searchResults&&f("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ne.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?f("div",{class:"category",ref:this.refs.search,children:[f("div",{class:`sticky padding-small align-${this.dir[0]}`,children:U.categories.search}),f("div",{children:e.length?e.map((n,r)=>f("div",{class:"flex",children:n.map((i,o)=>this.renderEmojiButton(i,{pos:[r,o],posinset:r*this.props.perLine+o+1,grid:e}))})):f("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&f("a",{onClick:this.props.onAddCustomEmoji,children:U.add_custom})})})]}):null}renderCategories(){const{categories:e}=A,n=!!this.state.searchResults,r=this.getPerLine();return f("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(i=>{const{root:o,rows:s}=this.refs.categories.get(i.id);return f("div",{"data-id":i.target?i.target.id:i.id,class:"category",ref:o,children:[f("div",{class:`sticky padding-small align-${this.dir[0]}`,children:i.name||U.categories[i.id]}),f("div",{class:"relative",style:{height:s.length*this.props.emojiButtonSize},children:s.map((l,c)=>{const u=l.index-l.index%je.rowsPerRender,a=this.state.visibleRows[u],g="current"in l?l:void 0;if(!a&&!g)return null;const h=c*r,v=h+r,d=i.emojis.slice(h,v);return d.length<r&&d.push(...new Array(r-d.length)),f("div",{"data-index":l.index,ref:g,class:"flex row",style:{top:c*this.props.emojiButtonSize},children:a&&d.map((_,w)=>{if(!_)return f("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const k=pe.get(_);return this.renderEmojiButton(k,{pos:[l.index,w],posinset:l.posinset+w,grid:this.grid})})},l.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:f("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:f("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":U.skins.choose,title:U.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:f("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return f("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),i={};return this.dir=="ltr"?i.right=r.right-n.right-3:i.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?i.bottom=r.bottom-n.top+6:(i.top=n.bottom-r.top+3,i.bottom="auto"),f("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":U.skins.choose,class:"menu hidden","data-position":i.top?"top":"bottom",style:i,children:[...Array(6).keys()].map(o=>{const s=o+1,l=this.state.skin==s;return f("div",{children:[f("input",{type:"radio",name:"skin-tone",value:s,"aria-label":U.skins[s],ref:l?this.refs.skinToneRadio:null,defaultChecked:l,onChange:()=>this.handleSkinMouseOver(s),onKeyDown:c=>{(c.code=="Enter"||c.code=="Space"||c.code=="Tab")&&(c.preventDefault(),this.handleSkinClick(s))}}),f("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(s),onMouseEnter:()=>this.handleSkinMouseOver(s),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[f("span",{class:`skin-tone skin-tone-${s}`}),f("span",{class:"margin-small-lr",children:U.skins[s]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return f("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&f("div",{class:"padding-lr",children:this.renderSearch()}),f("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:f("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),J(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),J(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),J(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),J(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),J(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,i=await pe.search(r),o=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!i)return this.setState({searchResults:i,pos:[-1,-1]},o);const s=n.selectionStart==n.value.length?[0,0]:[-1,-1],l=[];l.setsize=i.length;let c=null;for(let u of i)(!l.length||c.length==this.getPerLine())&&(c=[],c.__categoryId="search",c.__index=l.length,l.push(c)),c.push(u);this.ignoreMouse(),this.setState({searchResults:l,pos:s},o)}),J(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),J(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),J(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),J(this,"openSkins",n=>{const{currentTarget:r}=n,i=r.getBoundingClientRect();this.setState({showSkins:i},async()=>{await eo(2);const o=this.refs.menu.current;o&&(o.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class kt extends oo{async connectedCallback(){const e=Yn(this.props,ie,this);e.element=this,e.ref=n=>{this.component=n},await Ke(e),!this.disconnected&&Un(f(_o,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:Ln(tr)})}}J(kt,"Props",ie);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",kt);var tr={};tr=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function wo(t){const e=b.useRef(null),n=b.useRef(null);return n.current&&n.current.update(t),b.useEffect(()=>(n.current=new kt({...t,ref:e}),()=>{n.current=null}),[]),L.createElement("div",{ref:e})}function nr(t){var e=t.theme,n=t.onSelectEmoji,r=t.disableRecent,i=t.customEmojis,o=b.useMemo(function(){var s=[];return r||s.push("frequent"),s=[].concat(Sn(s),["people","nature","foods","activity","places","objects","symbols","flags"]),s},[r]);return L.createElement(wo,{data:void 0,theme:e,previewPosition:"none",onEmojiSelect:n,custom:i,categories:o,set:"apple"})}nr.propTypes={theme:we.oneOf(["light","dark","auto"]),onSelectEmoji:we.func,disableRecent:we.bool,customEmojis:we.array};var ko=b.memo(nr);function cn(t){var e=t.showPicker,n=t.theme,r=t.handleSelectEmoji,i=t.disableRecent,o=t.customEmojis;return L.createElement("div",{className:"react-emoji-picker--container"},e&&L.createElement("div",{className:"react-emoji-picker--wrapper",onClick:function(l){return l.stopPropagation()}},L.createElement("div",{className:"react-emoji-picker"},L.createElement(ko,{theme:n,onSelectEmoji:r,disableRecent:i,customEmojis:o}))))}var xo=function(e){var n=e.theme,r=e.keepOpened,i=e.disableRecent,o=e.customEmojis,s=e.addSanitizeFn,l=e.addPolluteFn,c=e.appendContent,u=e.buttonElement,a=b.useState(!1),g=ae(a,2),h=g[0],v=g[1],d=b.useState(),_=ae(d,2),w=_[0],k=_[1];b.useEffect(function(){s(Ci)},[s]),b.useEffect(function(){l($n)},[l]),b.useEffect(function(){function C(S){var P=S.target;P.classList.contains("react-input-emoji--button")||P.classList.contains("react-input-emoji--button--icon")||v(!1)}return document.addEventListener("click",C),function(){document.removeEventListener("click",C)}},[]);function x(C){C.stopPropagation(),C.preventDefault(),v(function(S){return!S})}function y(C){c(xi(C)),r||v(function(S){return!S})}return b.useEffect(function(){u!=null&&u.style&&(u.style.position="relative",k(u))},[u]),w?Cr.createPortal(L.createElement(L.Fragment,null,L.createElement(cn,{showPicker:h,theme:n,handleSelectEmoji:y,disableRecent:i,customEmojis:o}),L.createElement(It,{showPicker:h,toggleShowPicker:x,buttonElement:w})),w):L.createElement(L.Fragment,null,L.createElement(cn,{showPicker:h,theme:n,handleSelectEmoji:y,disableRecent:i,customEmojis:o}),L.createElement(It,{showPicker:h,toggleShowPicker:x}))};function Co(){var t=rr();if(!t)return null;var e=t.text.substring(t.begin,t.end);return e||null}function So(){var t=rr();t&&t.element.deleteData(t.begin,t.end-t.begin)}function rr(){var t=ht();if(!t)return null;var e=t.element,n=t.caretOffset,r=e.textContent,i=r.lastIndexOf("@");return i===-1||i>=n||i!==0&&r[i-1]!==" "?null:{begin:i,end:n,text:r,element:e}}function ht(){var t=Eo();if(t===null)return null;var e=0;if(typeof window.getSelection<"u"){var n=window.getSelection().getRangeAt(0),r=n.cloneRange();r.selectNodeContents(t),r.setEnd(n.endContainer,n.endOffset),e=r.toString().length}else if(typeof document.selection<"u"&&document.selection.type!="Control"){var i=document.selection.createRange(),o=document.body.createTextRange();o.moveToElementText(t),o.setEndPoint("EndToEnd",i),e=o.text.length}return{element:t,caretOffset:e}}function Eo(){var t=document.getSelection().anchorNode;return(t==null?void 0:t.nodeType)==3?t:null}function $o(t){var e=b.useState(!1),n=ae(e,2),r=n[0],i=n[1],o=b.useState([]),s=ae(o,2),l=s[0],c=s[1],u=b.useState(null),a=ae(u,2),g=a[0],h=a[1],v=b.useCallback(function(){So(),c([])},[]),d=b.useCallback(Bt(ke().mark(function k(){var x,y;return ke().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(x=Co(),h(x),x!==null){S.next=6;break}c([]),S.next=12;break;case 6:return i(!0),S.next=9,t(x);case 9:y=S.sent,i(!1),c(y);case 12:case"end":return S.stop()}},k)})),[t]),_=b.useCallback(function(){var k=Bt(ke().mark(function x(y){var C,S;return ke().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(typeof t=="function"){Y.next=2;break}return Y.abrupt("return");case 2:y.key==="Backspace"&&(C=ht())!==null&&C!==void 0&&C.element.parentElement.hasAttribute("data-mention-id")?(S=ht(),S.element.parentElement.remove()):["ArrowUp","ArrowDown","Esc","Escape"].includes(y.key)||d();case 3:case"end":return Y.stop()}},x)}));return function(x){return k.apply(this,arguments)}}(),[d,t]),w=b.useCallback(function(){d()},[d]);return{mentionSearchText:g,mentionUsers:l,onKeyUp:_,onFocus:w,onSelectUser:v,loading:r}}var jo=function(e,n){var r=e.users,i=e.mentionSearchText,o=e.onSelect,s=e.addEventListener,l=b.useState(0),c=ae(l,2),u=c[0],a=c[1];b.useImperativeHandle(n,function(){return{prevUser:function(){a(function(_){return _===0?0:_-1})},nextUser:function(){a(function(_){return _===r.length-1?r.length-1:_+1})}}}),b.useEffect(function(){a(0)},[r]);function g(d,_){return'<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'.concat(d,"</span>").concat(_)}var h=b.useMemo(function(){var d=i?i.substring(1).toLocaleLowerCase():"";return r.map(function(_){var w=_.name;if(i&&i.length>1)if(_.name.toLowerCase().startsWith(d))w=g(_.name.substring(0,d.length),_.name.substring(d.length));else{var k=_.name.split(" ");w=k.map(function(x){return x.toLocaleLowerCase().startsWith(d)?g(x.substring(0,d.length),x.substring(d.length)):x}).join(" ")}return Ot(Ot({},_),{},{nameHtml:w})})},[i,r]);function v(d){return function(_){_.stopPropagation(),_.preventDefault(),o(d)}}return b.useEffect(function(){var d=s("enter",function(_){_.stopPropagation(),_.preventDefault(),o(h[u])});return function(){d()}},[s,o,u,h]),L.createElement("ul",{className:"react-input-emoji--mention--list","data-testid":"mention-user-list"},h.map(function(d,_){return L.createElement("li",{key:d.id},L.createElement("button",{type:"button",onClick:v(d),className:"react-input-emoji--mention--item".concat(u===_?" react-input-emoji--mention--item__selected":""),onMouseOver:function(){return a(_)}},L.createElement("img",{className:"react-input-emoji--mention--item--img",src:d.image}),L.createElement("div",{className:"react-input-emoji--mention--item--name",dangerouslySetInnerHTML:{__html:d.nameHtml}})))}))},ir=b.forwardRef(jo);ir.propTypes={users:we.array.isRequired};var To=function(e){var n=e.searchMention,r=e.addEventListener,i=e.appendContent,o=e.addSanitizeFn,s=b.useRef(null),l=b.useState(!1),c=ae(l,2),u=c[0],a=c[1],g=$o(n),h=g.mentionSearchText,v=g.mentionUsers,d=g.loading,_=g.onKeyUp,w=g.onFocus,k=g.onSelectUser;b.useEffect(function(){o(function(y){var C=document.createElement("div");C.innerHTML=y;var S=Array.prototype.slice.call(C.querySelectorAll(".react-input-emoji--mention--text"));return S.forEach(function(P){C.innerHTML=C.innerHTML.replace(P.outerHTML,"@[".concat(P.dataset.mentionName,"](userId:").concat(P.dataset.mentionId,")"))}),C.innerHTML})},[o]),b.useEffect(function(){a(v.length>0)},[v]),b.useEffect(function(){function y(){a(!1)}return document.addEventListener("click",y),function(){document.removeEventListener("click",y)}},[]),b.useEffect(function(){var y=r("keyUp",_);return function(){y()}},[r,_]),b.useEffect(function(){function y(S){switch(S.key){case"Esc":case"Escape":a(!1);break}}var C=r("keyDown",y);return function(){C()}},[r]),b.useEffect(function(){var y=r("focus",w);return function(){y()}},[r,w]),b.useEffect(function(){if(u){var y=r("arrowUp",function(S){S.stopPropagation(),S.preventDefault(),s.current.prevUser()}),C=r("arrowDown",function(S){S.stopPropagation(),S.preventDefault(),s.current.nextUser()});return function(){y(),C()}}},[r,u]);function x(y){k(),i('<span class="react-input-emoji--mention--text" data-mention-id="'.concat(y.id,'" data-mention-name="').concat(y.name,'">@').concat(y.name,"</span> "))}return L.createElement(L.Fragment,null,d?L.createElement("div",{className:"react-input-emoji--mention--container"},L.createElement("div",{className:"react-input-emoji--mention--loading"},L.createElement("div",{className:"react-input-emoji--mention--loading--spinner"},"Loading..."))):u&&L.createElement("div",{className:"react-input-emoji--mention--container",onClick:function(C){return C.stopPropagation()}},L.createElement(ir,{ref:s,mentionSearchText:h,users:v,onSelect:x,addEventListener:r})))};function ue(){var t=[];return{subscribe:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},publish:function(n){t.forEach(function(r){return r(n)})},get currentListerners(){return t}}}function Ro(){var t=b.useMemo(function(){return{keyDown:ue(),keyUp:ue(),arrowUp:ue(),arrowDown:ue(),enter:ue(),focus:ue(),blur:ue()}},[]),e=b.useCallback(function(n,r){return t[n].subscribe(r)},[t]);return{addEventListener:e,listeners:t}}function Lo(){var t=b.useRef([]),e=b.useCallback(function(r){t.current.push(r)},[]),n=b.useCallback(function(r){var i=t.current.reduce(function(o,s){return s(o)},r);return i},[]);return{addPolluteFn:e,pollute:n}}function Ao(t,e){var n=t.onChange,r=t.onEnter,i=t.shouldReturn,o=t.onResize,s=t.onClick,l=t.onFocus,c=t.onBlur,u=t.onKeyDown,a=t.theme,g=t.cleanOnEnter,h=t.placeholder,v=t.maxLength,d=t.keepOpened,_=t.inputClass,w=t.disableRecent,k=t.tabIndex,x=t.value,y=t.customEmojis,C=t.searchMention,S=t.buttonElement,P=t.borderRadius,Y=t.borderColor,be=t.fontSize,Ee=t.fontFamily,p=b.useRef(null),m=Ro(),$=m.addEventListener,R=m.listeners,j=Rn(t.shouldReturn),z=j.addSanitizeFn,I=j.sanitize,D=j.sanitizedTextRef,K=Lo(),B=K.addPolluteFn,V=K.pollute,H=b.useCallback(function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";p.current!==null&&(p.current.html=$n(M),D.current=M)},[D]),he=b.useCallback(function(M){H(M)},[H]),le=Ri(p,o,n);Ti({ref:e,setValue:he,textInputRef:p,emitChange:le}),b.useEffect(function(){D.current!==x&&he(x)},[D,he,x]),b.useEffect(function(){H()},[H]),b.useEffect(function(){function M(de){if(typeof v<"u"&&de.key!=="Backspace"&&p.current!==null&&zt(p.current)>=v&&de.preventDefault(),de.key==="Enter"&&p.current){de.preventDefault();var kr=I(p.current.html);return le(D.current),typeof r=="function"&&R.enter.currentListerners.length===0&&r(kr),g&&R.enter.currentListerners.length===0&&H(""),typeof u=="function"&&u(de.nativeEvent),!1}return typeof u=="function"&&u(de.nativeEvent),!0}var Z=$("keyDown",M);return function(){Z()}},[$,g,le,R.enter.currentListerners.length,v,r,u,I,D,H]),b.useEffect(function(){function M(){typeof s=="function"&&s(),typeof l=="function"&&l()}var Z=$("focus",M);return function(){Z()}},[$,s,l]),b.useEffect(function(){function M(){typeof c=="function"&&c()}var Z=$("blur",M);return function(){Z()}},[$,c]);function ye(M){I(M),le(D.current)}function oe(M){typeof v<"u"&&p.current!==null&&zt(p.current)>=v||p.current!==null&&p.current.appendContent(M)}function _r(M){M.clipboardData.setData("text",D.current),M.preventDefault()}function wr(M){M.preventDefault();var Z;M.clipboardData&&(Z=M.clipboardData.getData("text/plain"),Z=V(Z),document.execCommand("insertHTML",!1,Z))}return L.createElement("div",{className:"react-emoji"},L.createElement(To,{searchMention:C,addEventListener:$,appendContent:oe,addSanitizeFn:z}),L.createElement(Oi,{ref:p,onCopy:_r,onPaste:wr,shouldReturn:i,onBlur:R.blur.publish,onFocus:R.focus.publish,onArrowUp:R.arrowUp.publish,onArrowDown:R.arrowDown.publish,onKeyUp:R.keyUp.publish,onKeyDown:R.keyDown.publish,onEnter:R.enter.publish,placeholder:h,style:{borderRadius:P,borderColor:Y,fontSize:be,fontFamily:Ee},tabIndex:k,className:_,onChange:ye}),L.createElement(xo,{theme:a,keepOpened:d,disableRecent:w,customEmojis:y,addSanitizeFn:z,addPolluteFn:B,appendContent:oe,buttonElement:S}))}var or=b.forwardRef(Ao);or.defaultProps={theme:"auto",height:30,placeholder:"Type a message",borderRadius:21,borderColor:"#EAEAEA",fontSize:15,fontFamily:"sans-serif",tabIndex:0,shouldReturn:!1,customEmojis:[]};function Oo({data:t,currentuser:e,setSendMessage:n,receivedMessage:r}){const[i,o]=b.useState(null),[s,l]=b.useState(null),[c,u]=b.useState([]),[a,g]=b.useState("");b.useEffect(()=>{r!==null&&r.chatId===(t==null?void 0:t._id)&&u([...c,r])},[t==null?void 0:t._id,c,r]);const h=()=>{var C,S;const k=e!=null&&e.recId?e==null?void 0:e.recId:e==null?void 0:e.useId,x=(C=t==null?void 0:t.members)==null?void 0:C.find(P=>P!==k),y=(S=t==null?void 0:t.members)==null?void 0:S.indexOf(x);try{y===0?yn.get("/getrecruiterdata?id="+x).then(P=>{l(P.data.recruiterdata)}).catch(P=>{console.error(P.message)}):qe.get("/profile/getprofile?id="+x).then(P=>{o(P.data.profiledata)}).catch(P=>{console.error(P.message)})}catch(P){console.log(P)}},v=()=>{const k=t==null?void 0:t._id;try{Rt.get(`/${k}`).then(x=>{u(x.data.Getmessage)}).catch(x=>{console.error(x.message)})}catch(x){console.log(x)}};b.useEffect(()=>{v()},[t]),b.useEffect(()=>{h()},[t]);const d=k=>{g(k)};b.useEffect(()=>{var k;(k=w.current)==null||k.scrollIntoView({behavior:"smooth"})},[c]);const _=async k=>{if(k.preventDefault(),!a.trim())return;const x=e!=null&&e.recId?e==null?void 0:e.recId:e==null?void 0:e.useId,y={senderId:x,message:a,chatId:t==null?void 0:t._id};try{await Rt.post("/",y).then(S=>{u([...c,S.data.addmessage]),g("")}).catch(S=>{console.error(S.message)})}catch(S){console.log(S)}const C=t==null?void 0:t.members.find(S=>S!==x);n({...y,receiverId:C})},w=b.useRef(null);return E.jsx(W,{sx:{width:"60%",height:820,borderRadius:6,backgroundColor:"white",marginLeft:6,boxShadow:6,marginTop:5},children:t?E.jsxs(Q,{children:[E.jsx(W,{sx:{width:"95%",height:80,borderRadius:3,marginLeft:2,marginTop:2,boxShadow:6,zIndex:1,backgroundColor:"#c6e3fa"},children:E.jsxs(Q,{direction:"row",children:[E.jsx(Ce,{alt:"",src:s?s.image:i==null?void 0:i.image,sx:{width:50,height:50,marginTop:2,marginLeft:3}}),E.jsx(q,{textAlign:"center",marginTop:3,fontSize:18,fontWeight:500,marginLeft:3,children:s?s.name:i==null?void 0:i.name})]})}),E.jsx(W,{sx:{display:"flex",flexDirection:"column",height:600,overflow:"auto",maxHeight:"600px",marginLeft:2,marginTop:1,zIndex:1,backgroundColor:"#f6fbff"},children:c.map(k=>{const x=(k==null?void 0:k.senderId)===e.recId||(k==null?void 0:k.senderId)===e.useId;return E.jsx(W,{sx:{display:"flex",justifyContent:x?"flex-end":"flex-start"},children:E.jsxs(W,{ref:w,sx:{backgroundColor:x?"#5A96E3":"#C1ECE4",marginLeft:2,borderTopLeftRadius:x?6:0,borderBottomLeftRadius:x?6:10,borderBottomRightRadius:x?10:6,padding:"3px 40px ",margin:"10px",maxWidth:"75%"},children:[E.jsx(q,{sx:{fontSize:18},children:k.message}),E.jsx(q,{sx:{fontSize:10},children:li(k.createdAt)})]})},k.id)})}),E.jsx(W,{sx:{width:"95%",height:80,backgroundColor:"#f6fbff",marginLeft:2,marginTop:1,zIndex:1},children:E.jsxs(Q,{direction:"row",children:[E.jsx(W,{sx:{width:800,maxWidth:"100%",backgroundColor:"white",marginTop:1.5,marginLeft:1,borderRadius:4},children:E.jsx(or,{value:a,onChange:d})}),E.jsx(Sr,{endIcon:E.jsx(xn,{}),sx:{color:"skyblue",marginLeft:2,marginTop:1},onClick:_})]})})]}):E.jsx(q,{textAlign:"center",marginTop:4,fontSize:18,fontWeight:500,marginLeft:3,children:"Tap on a chat to start Conversation"})})}const Po=Ve.create({baseURL:ei,headers:{"Content-Type":"application/json"}}),ne=Object.create(null);ne.open="0";ne.close="1";ne.ping="2";ne.pong="3";ne.message="4";ne.upgrade="5";ne.noop="6";const Oe=Object.create(null);Object.keys(ne).forEach(t=>{Oe[ne[t]]=t});const Bo={type:"error",data:"parser error"},sr=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ar=typeof ArrayBuffer=="function",cr=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,xt=({type:t,data:e},n,r)=>sr&&e instanceof Blob?n?r(e):ln(e,r):ar&&(e instanceof ArrayBuffer||cr(e))?n?r(e):ln(new Blob([e]),r):r(ne[t]+(e||"")),ln=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function un(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let tt;function Mo(t,e){if(sr&&t.data instanceof Blob)return t.data.arrayBuffer().then(un).then(e);if(ar&&(t.data instanceof ArrayBuffer||cr(t.data)))return e(un(t.data));xt(t,!1,n=>{tt||(tt=new TextEncoder),e(tt.encode(n))})}const hn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",xe=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<hn.length;t++)xe[hn.charCodeAt(t)]=t;const zo=t=>{let e=t.length*.75,n=t.length,r,i=0,o,s,l,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const u=new ArrayBuffer(e),a=new Uint8Array(u);for(r=0;r<n;r+=4)o=xe[t.charCodeAt(r)],s=xe[t.charCodeAt(r+1)],l=xe[t.charCodeAt(r+2)],c=xe[t.charCodeAt(r+3)],a[i++]=o<<2|s>>4,a[i++]=(s&15)<<4|l>>2,a[i++]=(l&3)<<6|c&63;return u},Io=typeof ArrayBuffer=="function",Ct=(t,e)=>{if(typeof t!="string")return{type:"message",data:lr(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Do(t.substring(1),e)}:Oe[n]?t.length>1?{type:Oe[n],data:t.substring(1)}:{type:Oe[n]}:Bo},Do=(t,e)=>{if(Io){const n=zo(t);return lr(n,e)}else return{base64:!0,data:t}},lr=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ur=String.fromCharCode(30),No=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((o,s)=>{xt(o,!1,l=>{r[s]=l,++i===n&&e(r.join(ur))})})},Ho=(t,e)=>{const n=t.split(ur),r=[];for(let i=0;i<n.length;i++){const o=Ct(n[i],e);if(r.push(o),o.type==="error")break}return r};let nt;function Fo(t,e,n){nt||(nt=new TextDecoder);const r=e||t[0]<48||t[0]>54;return Ct(r?t:nt.decode(t),n)}const hr=4;function N(t){if(t)return Uo(t)}function Uo(t){for(var e in N.prototype)t[e]=N.prototype[e];return t}N.prototype.on=N.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};N.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};N.prototype.off=N.prototype.removeListener=N.prototype.removeAllListeners=N.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};N.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};N.prototype.emitReserved=N.prototype.emit;N.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};N.prototype.hasListeners=function(t){return!!this.listeners(t).length};const G=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function dr(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Vo=G.setTimeout,qo=G.clearTimeout;function Ge(t,e){e.useNativeTimers?(t.setTimeoutFn=Vo.bind(G),t.clearTimeoutFn=qo.bind(G)):(t.setTimeoutFn=G.setTimeout.bind(G),t.clearTimeoutFn=G.clearTimeout.bind(G))}const Wo=1.33;function Ko(t){return typeof t=="string"?Go(t):Math.ceil((t.byteLength||t.size)*Wo)}function Go(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Yo(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Jo(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class Xo extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class St extends N{constructor(e){super(),this.writable=!1,Ge(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,n,r){return super.emitReserved("error",new Xo(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Ct(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Yo(e);return n.length?"?"+n:""}}const fr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),dt=64,Qo={};let dn=0,Te=0,fn;function pn(t){let e="";do e=fr[t%dt]+e,t=Math.floor(t/dt);while(t>0);return e}function pr(){const t=pn(+new Date);return t!==fn?(dn=0,fn=t):t+"."+pn(dn++)}for(;Te<dt;Te++)Qo[fr[Te]]=Te;let mr=!1;try{mr=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Zo=mr;function gr(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Zo))return new XMLHttpRequest}catch{}if(!e)try{return new G[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function es(){}const ts=function(){return new gr({xdomain:!1}).responseType!=null}();class ns extends St{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const n=e&&e.forceBase64;this.supportsBinary=ts&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Ho(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,No(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=pr()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new te(this.uri(),e)}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class te extends N{constructor(e,n){super(),Ge(this,n),this.opts=n,this.method=n.method||"GET",this.uri=e,this.data=n.data!==void 0?n.data:null,this.create()}create(){var e;const n=dr(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const r=this.xhr=new gr(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=te.requestsCount++,te.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=es,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete te.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}te.requestsCount=0;te.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",mn);else if(typeof addEventListener=="function"){const t="onpagehide"in G?"pagehide":"unload";addEventListener(t,mn,!1)}}function mn(){for(let t in te.requests)te.requests.hasOwnProperty(t)&&te.requests[t].abort()}const Et=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),Re=G.WebSocket||G.MozWebSocket,gn=!0,rs="arraybuffer",vn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class is extends St{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),n=this.opts.protocols,r=vn?{}:dr(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=gn&&!vn?n?new Re(e,n):new Re(e):new Re(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||rs,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;xt(r,this.supportsBinary,o=>{const s={};try{gn&&this.ws.send(o)}catch{}i&&Et(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=pr()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}check(){return!!Re}}function os(t,e){return t.type==="message"&&typeof t.data!="string"&&e[0]>=48&&e[0]<=54}class ss extends St{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const n=e.readable.getReader();this.writer=e.writable.getWriter();let r;const i=()=>{n.read().then(({done:s,value:l})=>{s||(!r&&l.byteLength===1&&l[0]===54?r=!0:(this.onPacket(Fo(l,r,"arraybuffer")),r=!1),i())}).catch(s=>{})};i();const o=this.query.sid?`0{"sid":"${this.query.sid}"}`:"0";this.writer.write(new TextEncoder().encode(o)).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Mo(r,o=>{os(r,o)&&this.writer.write(Uint8Array.of(54)),this.writer.write(o).then(()=>{i&&Et(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const as={websocket:is,webtransport:ss,polling:ns},cs=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ls=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ft(t){const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=cs.exec(t||""),o={},s=14;for(;s--;)o[ls[s]]=i[s]||"";return n!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=us(o,o.path),o.queryKey=hs(o,o.query),o}function us(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function hs(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(n[i]=o)}),n}let vr=class fe extends N{constructor(e,n={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(n=e,e=null),e?(e=ft(e),n.hostname=e.host,n.secure=e.protocol==="https"||e.protocol==="wss",n.port=e.port,e.query&&(n.query=e.query)):n.host&&(n.hostname=ft(n.host).host),Ge(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Jo(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=hr,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new as[e](r)}open(){let e;if(this.opts.rememberUpgrade&&fe.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(e){let n=this.createTransport(e),r=!1;fe.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",g=>{if(!r)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;fe.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(a(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=n.name,this.emitReserved("upgradeError",h)}}))};function o(){r||(r=!0,a(),n.close(),n=null)}const s=g=>{const h=new Error("probe error: "+g);h.transport=n.name,o(),this.emitReserved("upgradeError",h)};function l(){s("transport closed")}function c(){s("socket closed")}function u(g){n&&g.name!==n.name&&o()}const a=()=>{n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};n.once("open",i),n.once("error",s),n.once("close",l),this.once("close",c),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onOpen(){if(this.readyState="open",fe.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const n=this.upgrades.length;for(;e<n;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=e.data,this.onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Ko(i)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(e,n,r){return this.sendPacket("message",e,n,r),this}send(e,n,r){return this.sendPacket("message",e,n,r),this}sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:n,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){fe.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const n=[];let r=0;const i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}};vr.protocol=hr;function ds(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=ft(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}const fs=typeof ArrayBuffer=="function",ps=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,br=Object.prototype.toString,ms=typeof Blob=="function"||typeof Blob<"u"&&br.call(Blob)==="[object BlobConstructor]",gs=typeof File=="function"||typeof File<"u"&&br.call(File)==="[object FileConstructor]";function $t(t){return fs&&(t instanceof ArrayBuffer||ps(t))||ms&&t instanceof Blob||gs&&t instanceof File}function Pe(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Pe(t[n]))return!0;return!1}if($t(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Pe(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Pe(t[n]))return!0;return!1}function vs(t){const e=[],n=t.data,r=t;return r.data=pt(n,e),r.attachments=e.length,{packet:r,buffers:e}}function pt(t,e){if(!t)return t;if($t(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=pt(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=pt(t[r],e));return n}return t}function bs(t,e){return t.data=mt(t.data,e),delete t.attachments,t}function mt(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=mt(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=mt(t[n],e));return t}const ys=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],_s=5;var O;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(O||(O={}));class ws{constructor(e){this.replacer=e}encode(e){return(e.type===O.EVENT||e.type===O.ACK)&&Pe(e)?this.encodeAsBinary({type:e.type===O.EVENT?O.BINARY_EVENT:O.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===O.BINARY_EVENT||e.type===O.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=vs(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}function bn(t){return Object.prototype.toString.call(t)==="[object Object]"}class jt extends N{constructor(e){super(),this.reviver=e}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===O.BINARY_EVENT;r||n.type===O.BINARY_ACK?(n.type=r?O.EVENT:O.ACK,this.reconstructor=new ks(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if($t(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(O[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===O.BINARY_EVENT||r.type===O.BINARY_ACK){const o=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const s=e.substring(o,n);if(s!=Number(s)||e.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(s)}if(e.charAt(n+1)==="/"){const o=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(o,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const o=n+1;for(;++n;){const s=e.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===e.length)break}r.id=Number(e.substring(o,n+1))}if(e.charAt(++n)){const o=this.tryParse(e.substr(n));if(jt.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case O.CONNECT:return bn(n);case O.DISCONNECT:return n===void 0;case O.CONNECT_ERROR:return typeof n=="string"||bn(n);case O.EVENT:case O.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&ys.indexOf(n[0])===-1);case O.ACK:case O.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ks{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=bs(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const xs=Object.freeze(Object.defineProperty({__proto__:null,Decoder:jt,Encoder:ws,get PacketType(){return O},protocol:_s},Symbol.toStringTag,{value:"Module"}));function X(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Cs=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class yr extends N{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[X(e,"open",this.onopen.bind(this)),X(e,"packet",this.onpacket.bind(this)),X(e,"error",this.onerror.bind(this)),X(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){if(Cs.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const r={type:O.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const s=this.ids++,l=n.pop();this._registerAckCallback(s,l),r.id=s}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===e&&this.sendBuffer.splice(s,1);n.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...s)=>{this.io.clearTimeoutFn(o),n.apply(this,[null,...s])}}emitWithAck(e,...n){const r=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,o)=>{n.push((s,l)=>r?s?o(s):i(l):i(s)),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:O.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case O.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case O.EVENT:case O.BINARY_EVENT:this.onevent(e);break;case O.ACK:case O.BINARY_ACK:this.onack(e);break;case O.DISCONNECT:this.ondisconnect();break;case O.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:O.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(n.apply(this,e.data),delete this.acks[e.id])}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:O.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function ve(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}ve.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0};ve.prototype.reset=function(){this.attempts=0};ve.prototype.setMin=function(t){this.ms=t};ve.prototype.setMax=function(t){this.max=t};ve.prototype.setJitter=function(t){this.jitter=t};class gt extends N{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Ge(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new ve({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||xs;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new vr(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=X(n,"open",function(){r.onopen(),e&&e()}),o=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),e?e(l):this.maybeReconnectOnOpen()},s=X(n,"error",o);if(this._timeout!==!1){const l=this._timeout,c=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),n.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(X(e,"ping",this.onping.bind(this)),X(e,"data",this.ondata.bind(this)),X(e,"error",this.onerror.bind(this)),X(e,"close",this.onclose.bind(this)),X(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Et(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new yr(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const _e={};function Be(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=ds(t,e.path||"/socket.io"),r=n.source,i=n.id,o=n.path,s=_e[i]&&o in _e[i].nsps,l=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let c;return l?c=new gt(r,e):(_e[i]||(_e[i]=new gt(r,e)),c=_e[i]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(Be,{Manager:gt,Socket:yr,io:Be,connect:Be});function js(){const t=Ye(y=>{var C,S,P;return(y==null?void 0:y.user)&&((S=(C=y==null?void 0:y.user)==null?void 0:C.value)==null?void 0:S.id)||(y==null?void 0:y.recruiter)&&((P=y==null?void 0:y.recruiter)==null?void 0:P.value.id)}),e=Ye(y=>{var C,S;return(S=(C=y==null?void 0:y.recruiter)==null?void 0:C.value)==null?void 0:S.id}),n={recId:e},r=Ye(y=>{var C,S;return(S=(C=y==null?void 0:y.user)==null?void 0:C.value)==null?void 0:S.id}),o=e&&n||r&&{useId:r},[s,l]=b.useState([]),[c,u]=b.useState(null),[a,g]=b.useState(null),[h,v]=b.useState(null),[d,_]=b.useState([]),w=b.useRef();b.useEffect(()=>{var y,C;return w.current=Be("http://hirex.social"),(y=w.current)==null||y.emit("new-user-add",t),(C=w.current)==null||C.on("get-users",S=>{_(S)}),()=>{w.current&&w.current.disconnect()}},[t]),b.useEffect(()=>{a!==null&&w.current.emit("send-message",a)},[a]),b.useEffect(()=>{w.current.on("receive-message",y=>{v(y)})},[]);const k=()=>{Po.get(`/${t}`).then(y=>{l(y.data.Getchats)}).catch(y=>{console.error(y.message)})};b.useEffect(()=>{k()},[t]);const x=y=>{const C=y.members.find(P=>P!==t);return!!d.find(P=>P.userId===C)};return E.jsx(W,{children:E.jsxs(Q,{direction:"column",children:[E.jsx(Gr,{}),E.jsx(W,{sx:{width:"95%",height:900,borderRadius:6,backgroundColor:"white",marginLeft:5,marginTop:40,boxShadow:6,zIndex:1},children:E.jsxs(Q,{direction:"row",children:[E.jsxs(W,{sx:{width:"20%",height:800,borderRadius:6,backgroundColor:"white",marginLeft:5,boxShadow:6,marginTop:5},children:[E.jsx(q,{textAlign:"center",marginTop:1,fontSize:24,fontWeight:500,children:"Chats"}),s.map(y=>E.jsx(Yr,{data:y,currentuser:o,onClick:()=>u(y),online:x(y)},y==null?void 0:y.id))]}),E.jsx(Oo,{data:c,currentuser:o,setSendMessage:g,receivedMessage:h})]})}),E.jsx(Kr,{})]})})}export{Gr as B,js as C,Kr as F,zr as a,Fr as b,$s as c,Ar as d,Po as e,qe as i};
