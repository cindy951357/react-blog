(()=>{var e={};e.id=888,e.ids=[888],e.modules={2225:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(997);let r=({btnText:e,color:t,onClick:i})=>s.jsx("button",{className:"plain-button rounded p-4 mx-2",onClick:i,style:{backgroundColor:""},children:e})},8813:(e,t,i)=>{"use strict";i.d(t,{v:()=>l,z:()=>o});var s=i(997),r=i(6689);let n=(0,r.createContext)(void 0),l=({children:e})=>{let[t,i]=(0,r.useState)("/"),[l,o]=(0,r.useState)("Contact");return s.jsx(n.Provider,{value:{activePage:t,setActivePage:i,activeAboutPage:l,setActiveAboutPage:o},children:e})},o=()=>{let e=(0,r.useContext)(n);if(!e)throw Error("useActivePage must be used within an ActivePageProvider");return e}},1328:(e,t,i)=>{"use strict";i.d(t,{M:()=>o,_:()=>c});var s=i(997),r=i(9128),n=i(6689);let l=(0,n.createContext)(void 0),o=()=>{let e=(0,n.useContext)(l);if(!e)throw Error("useComments must be used within a CommentProvider");return e},c=({children:e})=>{let[t,i]=(0,n.useState)(r.j);return s.jsx(l.Provider,{value:{comments:t,addComment:e=>{i([...t,e])}},children:e})}},9128:(e,t,i)=>{"use strict";i.d(t,{d:()=>s,j:()=>r});let s=[{id:1,title:"這是一篇關於我和彩色鉛筆的故事",content:"拾起彩色鉛筆至今已經三四年左右了，然而我還是必須不斷回到灰階鉛筆的階段去磨練無彩色的功夫        ，方能走到彩色的世界去揮灑色彩。彩色鉛筆的色彩呈現原理有點像是油畫，都是利用顏料的立體疊加效果去產生顏        色上的立體感，這也是畫家必須要自己去刻意練習去成就的。",time:"2024/06/28T20/07/05",numLikes:90,imgURL:"RabbitMug.png"},{id:2,title:"自我療癒強迫症的心得",content:"不要去過度在意任何事情        甚至即使不小心過度在意了某某某事情，也不要過度在意剛才啊怎麼我又過度        在意這個某某某事情了",time:"20240706T08:55:33",numLikes:22,imgURL:"RabbitFlower01.png"}],r=[{id:1,title:"感冒還沒好呢",time:"2024/07/02T15:30:30",content:"這一個多月以來已經看了四次耳鼻喉科了，然而咳嗽的問題遲遲沒有改善，各位美女們怎麼看呢?",numLikes:50},{id:2,title:"練舞不要忘記帶藍芽喇叭喔",time:"2024/07/02T16:19:20",content:"寶寶下次要記得帶藍芽喇叭來廣場這邊喔",numLikes:50},{id:3,title:"新出的咖啡真好喝！",time:"2024/07/02T17:10:45",content:"剛剛試了一杯新出的摩卡咖啡，味道棒極了，推薦大家去試試！",numLikes:80},{id:4,title:"貓咪最近有點怪",time:"2024/07/02T18:05:30",content:"最近家裡的貓咪總是盯著天花板看，大家有什麼建議嗎？",numLikes:65},{id:5,title:"瑜伽真是太放鬆了",time:"2024/07/02T18:45:15",content:"今天早上第一次試了瑜伽，感覺整個人都輕鬆了，非常推薦給大家！",numLikes:90},{id:6,title:"夏日海灘之旅",time:"2024/07/02T19:30:00",content:"昨天去了海灘，陽光、沙灘和海浪，簡直是完美的一天！",numLikes:100},{id:7,title:"最新的健身計劃",time:"2024/07/02T20:15:45",content:"我制定了一個新的健身計劃，準備每天堅持運動，大家一起加油！",numLikes:85},{id:8,title:"閱讀的快樂",time:"2024/07/02T21:05:30",content:"剛讀完一本好書，感覺收穫很多，真希望時間能夠停留在這一刻。",numLikes:70},{id:9,title:"自製蛋糕成功！",time:"2024/07/02T22:00:00",content:"第一次嘗試自製蛋糕，沒想到居然非常成功，大家有空也可以試試哦！",numLikes:75},{id:10,title:"城市公園散步",time:"2024/07/02T22:45:30",content:"晚上去城市公園散步，感覺心情愉快，真是一個不錯的放鬆方式。",numLikes:60}]},8280:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>b});var s=i(997),r=i(6689),n=i(1163),l=i(1664),o=i.n(l),c=i(2225),a=i(8813);let d=["/","/write","/about/site-intro"],u=()=>{let{activePage:e,setActivePage:t}=(0,a.z)(),i=(0,n.useRouter)(),l=d.indexOf(e),[u,m]=(0,r.useState)([]),[x,v]=(0,r.useState)(0),h=e=>{i.push(e)};return(0,r.useEffect)(()=>{let e=()=>{m(Array.from(document.querySelectorAll(".link-href-container > a")).map(e=>e.offsetWidth))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,r.useEffect)(()=>{v(u.slice(0,l).reduce((e,t)=>e+t,0));let e=document.getElementById("moving_menu_line");e&&(e.style.width=`${u[l]}px`)},[l,u]),(0,s.jsxs)("div",{className:"menu-container flex justify-center gap-2 mt-4 md:grid-cols-12",children:[s.jsx("div",{className:"dummy-div md:col-span-1"}),(0,s.jsxs)("div",{className:"md:col-span-10",children:[(0,s.jsxs)("div",{className:"menu flex flex-col",children:[(0,s.jsxs)("div",{className:"link-href-container flex",children:[s.jsx(o(),{href:"/",legacyBehavior:!0,children:s.jsx("a",{children:s.jsx(c.Z,{btnText:"Home",color:"/"===e?"LavenderBlush":"defaultColor",onClick:()=>{t("/"),h("/")}})})}),s.jsx(o(),{href:"/write",legacyBehavior:!0,children:s.jsx("a",{children:s.jsx(c.Z,{btnText:"Write a Post",color:"/write"===e?"LavenderBlush":"defaultColor",onClick:()=>{t("/write"),h("/write")}})})}),s.jsx(o(),{href:"/about/site-intro",legacyBehavior:!0,children:s.jsx("a",{children:s.jsx(c.Z,{btnText:"About",color:"/about/site-intro"===e?"LavenderBlush":"defaultColor",onClick:()=>{t("/about/site-intro"),h("/about/site-intro")}})})})]}),u.length===d.length&&s.jsx("div",{className:"sliding-menu-line-container flex h-2 relative mt-0 mb-4   flex justify-center",children:s.jsx("div",{className:"background-line w-full flex justify-center",children:s.jsx("div",{id:"moving_menu_line",className:"moving-menu-line h-2 bg-rose-500 flex justify-center",style:{left:`${x}px`}})})}),s.jsx("div",{className:"dummy-div"})]}),s.jsx("div",{className:"dummy-div  md:col-span-1"})]})]})};var m=i(1377),x=i(5434),v=i.n(x);function h(){return s.jsx("div",{className:`header flex justify-center items-center p-4 text-gray ${v().className}`,children:"Cindy's Blog"})}function f(){return(0,s.jsxs)("footer",{className:"flex w-full bg-rose-500 h-20 bottom-0 fixed justify-center items-center text-white",children:[(0,s.jsxs)("div",{className:"line-anim-container",children:[s.jsx("div",{className:"line"}),s.jsx("div",{className:"glowing-dot"})]}),"\xa9 2024 Cindy. All rights reserved."]})}let j=({children:e})=>{let{t}=(0,m.useTranslation)("common");return(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[s.jsx(h,{}),(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[s.jsx(u,{}),s.jsx("div",{className:"content main-layout flex justify-center w-100   overflow-y-scroll",children:e})]}),s.jsx(f,{})]})};var g=i(1328);let p=({children:e})=>s.jsx(a.v,{children:s.jsx(g._,{children:e})});i(4542),i(5925);let b=(0,m.appWithTranslation)(function({Component:e,pageProps:t}){return s.jsx(p,{children:s.jsx(j,{children:s.jsx(e,{...t})})})})},5925:()=>{},4542:()=>{},1377:e=>{"use strict";e.exports=require("next-i18next")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[309,517],()=>i(8280));module.exports=s})();