(()=>{var e={};e.id=416,e.ids=[416],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},49805:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var s=r(50482),i=r(69108),n=r(62563),o=r.n(n),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["tmp",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,48805)),"C:\\Users\\SSAFY\\Desktop\\projects\\Frontend\\src\\app\\tmp\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],modal:["__DEFAULT__",{},{defaultPage:[()=>Promise.resolve().then(r.bind(r,85279)),"C:\\Users\\SSAFY\\Desktop\\projects\\Frontend\\src\\app\\@modal\\default.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,19459)),"C:\\Users\\SSAFY\\Desktop\\projects\\Frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,27976)),"C:\\Users\\SSAFY\\Desktop\\projects\\Frontend\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\SSAFY\\Desktop\\projects\\Frontend\\src\\app\\tmp\\page.tsx"],u="/tmp/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/tmp/page",pathname:"/tmp",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},37324:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},59132:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,31900,23)),Promise.resolve().then(r.t.bind(r,61476,23)),Promise.resolve().then(r.bind(r,84753)),Promise.resolve().then(r.bind(r,70941)),Promise.resolve().then(r.bind(r,56314))},95299:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,31900,23)),Promise.resolve().then(r.bind(r,41516))},55473:(e,t,r)=>{Promise.resolve().then(r.bind(r,35113))},35303:()=>{},70941:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(95344),i=r(39515);function n({children:e}){return s.jsx(i.eA,{children:e})}},56314:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(95344),i=r(20783),n=r.n(i),o=r(39515),a=r(22254);function l({isLogin:e}){let t=(0,a.useRouter)(),r=(0,a.usePathname)().split("/");if(r.includes("playroom")||r.includes("guestroom"))return null;let i="text-white font-semibold text-2xl text-center bg-main hover:bg-maindark rounded-[2rem] px-6 py-3";return s.jsx(s.Fragment,{children:e?s.jsx("button",{title:"로그아웃",type:"button",onClick:()=>{(0,o.w7)({redirect:!1}).then(()=>{t.refresh()})},className:i,children:"로그아웃"}):s.jsx(n(),{href:"/signup",children:s.jsx("button",{title:"회원가입",type:"button",className:i,children:"회원가입"})})})}},35113:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(95344);r(3729);var i=r(53608),n=r(22254);function o(){let e=(0,n.useRouter)(),t=`${Math.floor(100*Math.random())}`,r={mediaMode:"ROUTED",recordingMode:"MANUAL",customSessionId:`Room${t}`,forcedVideoCodec:"VP8",allowTranscoding:!1,defaultRecordingProperties:{name:"MyRecording",hasAudio:!0,hasVideo:!0,outputMode:"COMPOSED",recordingLayout:"BEST_FIT",resolution:"1280x720",frameRate:25,shmSize:536870912,mediaNode:{id:"media_i-0c58bcdd26l11d0sd"}},mediaNode:{id:"media_i-0c58bcdd26l11d0sd"}},o=async()=>{let e=await i.Z.post("/openvidu/api/sessions/",r,{headers:{Authorization:"Basic T1BFTlZJRFVBUFA6bWFuZ28=","Content-Type":"application/json"}});return console.log(e.data),e.data.sessionId};return s.jsx("div",{children:s.jsx("button",{onClick:()=>{o().then(t=>{e.push(`http://localhost:3000/playroom/${t}`)})},className:"h-[150rem] w-[150rem] text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800",children:"가즈아"})})}function a(){return s.jsx(o,{})}},85279:(e,t,r)=>{"use strict";function s(){return null}r.r(t),r.d(t,{default:()=>s})},19459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>j});var s=r(25036),i=r(82448),n=r.n(i);r(5023),r(40002);var o=r(40646),a=r.n(o),l=r(15904),d=r.n(l);let c={src:"/_next/static/media/AppMainLogo.a6fabb54.png",height:160,width:984,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEXvtgDrswDfrAXiqwIwNv0iAAAABHRSTlNnXJF0T/ZwigAAAAlwSFlzAAAsSwAALEsBpT2WqQAAABFJREFUeJxjYGJmYGBgYGQEAAAxAAhaF8fwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1};var u=r(86843);let p=(0,u.createProxy)(String.raw`C:\Users\SSAFY\Desktop\projects\Frontend\src\app\_component\LoginButton.tsx`),{__esModule:h,$$typeof:m}=p,x=p.default;var A=r(81147);async function g(){let e=await (0,A.I8)();return s.jsx("header",{children:s.jsx("nav",{className:"flex justify-center bg-white px-12 py-4 shadow",children:(0,s.jsxs)("div",{className:"grow flex flex-wrap justify-between items-center lg:mx-64 max-w-screen-xl",children:[s.jsx(a(),{href:"/",children:s.jsx(d(),{src:c,width:196,height:32,alt:"망고테일"})}),s.jsx("div",{className:"lg:order-2",children:s.jsx(x,{isLogin:!!e})})]})})})}let b=(0,u.createProxy)(String.raw`C:\Users\SSAFY\Desktop\projects\Frontend\src\app\_component\AuthSession.tsx`),{__esModule:f,$$typeof:v}=b,w=b.default,j={title:"mangotail",description:"mangotail"};function y({children:e,modal:t}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:s.jsx("div",{className:"bg-cover bg-background min-h-screen",children:(0,s.jsxs)(w,{children:[s.jsx(g,{}),t,e]})})})})}},27976:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(25036),i=r(15904),n=r.n(i);let o={src:"/_next/static/media/errorImg.db197cdc.svg",height:724,width:724,blurWidth:0,blurHeight:0},a=()=>(0,s.jsxs)("div",{className:"absolute top-0 size-full bg-[#AFAFAF]",children:[(0,s.jsxs)("div",{className:"mt-48 ml-52",children:[s.jsx("div",{className:"text-9xl font-black mb-12",children:"Oops!"}),s.jsx("div",{className:"text-6xl mb-12",children:"404 Not Found"}),s.jsx("div",{className:"text-3xl mb-2",children:"죄송합니다. 페이지를 찾을 수 없습니다."}),s.jsx("div",{className:"text-3xl mb-12",children:"입력하신 주소가 정확한지 다시 확인해 주세요."}),s.jsx("a",{href:"/",children:s.jsx("button",{className:"text-3xl text-white text-center bg-[#E6B559] hover:bg-[#DAA94C] rounded-[2rem] w-56 h-20 m-2 shadow",children:"메인 페이지로"})})]}),s.jsx(n(),{src:o,width:640,height:640,alt:"에러페이지",className:"absolute bottom-0 right-0"}),s.jsx("div",{})]})},48805:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});let s=(0,r(86843).createProxy)(String.raw`C:\Users\SSAFY\Desktop\projects\Frontend\src\app\tmp\page.tsx`),{__esModule:i,$$typeof:n}=s,o=s.default},81147:(e,t,r)=>{"use strict";r.d(t,{HT:()=>n,I8:()=>a,a4:()=>o});var s=r(37577),i=r(3133);let{handlers:{GET:n,POST:o},auth:a,signIn:l}=(0,s.Z)({pages:{signIn:"/login",newUser:"/signup"},providers:[(0,i.Z)({name:"mango-server",async authorize(e){try{let t=await fetch(`${process.env.AUTH_URL}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.username,password:e.password})});if(!t.ok)return console.log("authResponse not ok"),null;let r=await t.json();return console.log(r),r}catch(e){console.log("error",e)}}})],callbacks:{jwt:async({user:e,token:t})=>(e&&(t.Authorization=e?.data.accessToken,t.refreshToken=e?.data.refreshToken,t.nickname=e?.data.nickName,console.log(t)),t),session:async({token:e,session:t})=>(t.Authorization=e.Authorization,t.refreshToken=e.refreshToken,t.user.name=e.nickname,console.log(t),t)}})},84753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s={src:"/_next/static/media/AppMainLogo.a6fabb54.png",height:160,width:984,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEXvtgDrswDfrAXiqwIwNv0iAAAABHRSTlNnXJF0T/ZwigAAAAlwSFlzAAAsSwAALEsBpT2WqQAAABFJREFUeJxjYGJmYGBgYGQEAAAxAAhaF8fwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1}},41516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s={src:"/_next/static/media/errorImg.db197cdc.svg",height:724,width:724,blurWidth:0,blurHeight:0}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(70337);let i=e=>[{type:"image/x-icon",sizes:"168x160",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,706,920,608],()=>r(49805));module.exports=s})();