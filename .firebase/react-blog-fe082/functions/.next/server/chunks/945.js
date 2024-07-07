exports.id=945,exports.ids=[945],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},8579:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||n&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},494:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return c}});let i=n(167),r=n(8760),s=n(997),l=r._(n(6689)),o=i._(n(3657)),d=n(8039),a=n(1988),u=n(8579);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(9784);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(m,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return r=>{let s=!0,l=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){l=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?s=!1:n.add(t);else{let e=r.props[t],n=i[t]||new Set;("name"!==t||!l)&&n.has(e)?s=!1:(n.add(e),i[t]=n)}}}}return s}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,n=(0,l.useContext)(d.AmpStateContext),i=(0,l.useContext)(a.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:p,headManager:i,inAmpMode:(0,u.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=n(6689),r=()=>{},s=()=>{};function l(e){var t;let{headManager:n,reduceComponentsToState:l}=e;function o(){if(n&&n.mountedInstances){let t=i.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(l(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),o(),r(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),r(()=>(n&&(n._pendingUpdate=o),()=>{n&&(n._pendingUpdate=o)})),s(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},9784:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},1328:(e,t,n)=>{"use strict";n.d(t,{M:()=>o,_:()=>d});var i=n(997),r=n(9128),s=n(6689);let l=(0,s.createContext)(void 0),o=()=>{let e=(0,s.useContext)(l);if(!e)throw Error("useComments must be used within a CommentProvider");return e},d=({children:e})=>{let[t,n]=(0,s.useState)(r.j);return i.jsx(l.Provider,{value:{comments:t,addComment:e=>{n([...t,e])}},children:e})}},9128:(e,t,n)=>{"use strict";n.d(t,{d:()=>i,j:()=>r});let i=[{id:1,title:"這是一篇關於我和彩色鉛筆的故事",content:"拾起彩色鉛筆至今已經三四年左右了，然而我還是必須不斷回到灰階鉛筆的階段去磨練無彩色的功夫        ，方能走到彩色的世界去揮灑色彩。彩色鉛筆的色彩呈現原理有點像是油畫，都是利用顏料的立體疊加效果去產生顏        色上的立體感，這也是畫家必須要自己去刻意練習去成就的。",time:"2024/06/28T20/07/05",numLikes:90,imgURL:"RabbitMug.png"},{id:2,title:"自我療癒強迫症的心得",content:"不要去過度在意任何事情        甚至即使不小心過度在意了某某某事情，也不要過度在意剛才啊怎麼我又過度        在意這個某某某事情了",time:"20240706T08:55:33",numLikes:22,imgURL:"RabbitFlower01.png"}],r=[{id:1,title:"感冒還沒好呢",time:"2024/07/02T15:30:30",content:"這一個多月以來已經看了四次耳鼻喉科了，然而咳嗽的問題遲遲沒有改善，各位美女們怎麼看呢?",numLikes:50},{id:2,title:"練舞不要忘記帶藍芽喇叭喔",time:"2024/07/02T16:19:20",content:"寶寶下次要記得帶藍芽喇叭來廣場這邊喔",numLikes:50},{id:3,title:"新出的咖啡真好喝！",time:"2024/07/02T17:10:45",content:"剛剛試了一杯新出的摩卡咖啡，味道棒極了，推薦大家去試試！",numLikes:80},{id:4,title:"貓咪最近有點怪",time:"2024/07/02T18:05:30",content:"最近家裡的貓咪總是盯著天花板看，大家有什麼建議嗎？",numLikes:65},{id:5,title:"瑜伽真是太放鬆了",time:"2024/07/02T18:45:15",content:"今天早上第一次試了瑜伽，感覺整個人都輕鬆了，非常推薦給大家！",numLikes:90},{id:6,title:"夏日海灘之旅",time:"2024/07/02T19:30:00",content:"昨天去了海灘，陽光、沙灘和海浪，簡直是完美的一天！",numLikes:100},{id:7,title:"最新的健身計劃",time:"2024/07/02T20:15:45",content:"我制定了一個新的健身計劃，準備每天堅持運動，大家一起加油！",numLikes:85},{id:8,title:"閱讀的快樂",time:"2024/07/02T21:05:30",content:"剛讀完一本好書，感覺收穫很多，真希望時間能夠停留在這一刻。",numLikes:70},{id:9,title:"自製蛋糕成功！",time:"2024/07/02T22:00:00",content:"第一次嘗試自製蛋糕，沒想到居然非常成功，大家有空也可以試試哦！",numLikes:75},{id:10,title:"城市公園散步",time:"2024/07/02T22:45:30",content:"晚上去城市公園散步，感覺心情愉快，真是一個不錯的放鬆方式。",numLikes:60}]},4388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var i=n(997),r=n(6689),s=n(1163),l=n(1664),o=n.n(l);let d=({btnText:e,color:t,onClick:n})=>i.jsx("button",{className:"plain-button rounded p-4 mx-2",onClick:n,style:{backgroundColor:""},children:e}),a=(0,r.createContext)(void 0),u=({children:e})=>{let[t,n]=(0,r.useState)("/");return i.jsx(a.Provider,{value:{activePage:t,setActivePage:n},children:e})},c=()=>{let e=(0,r.useContext)(a);if(!e)throw Error("useActivePage must be used within an ActivePageProvider");return e},m=["/","/write","/about/site-intro"],f=()=>{let e=(0,s.useRouter)(),{activePage:t,setActivePage:n}=c(),l=m.indexOf(t),[a,u]=(0,r.useState)([]),[f,p]=(0,r.useState)(0),h=t=>{e.push(t)};return(0,r.useEffect)(()=>{let e=()=>{u(Array.from(document.querySelectorAll(".link-href-container > a")).map(e=>e.offsetWidth))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,r.useEffect)(()=>{p(a.slice(0,l).reduce((e,t)=>e+t,0));let e=document.getElementById("moving_menu_line");e&&(e.style.width=`${a[l]}px`)},[l,a]),(0,i.jsxs)("div",{className:"menu-container flex justify-center gap-2 mt-4",children:[i.jsx("div",{className:"dummy-div"}),(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsxs)("div",{className:"menu flex flex-col",children:[(0,i.jsxs)("div",{className:"link-href-container flex",children:[i.jsx(o(),{href:"/",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(d,{btnText:"Home",color:"/"===t?"LavenderBlush":"defaultColor",onClick:()=>{n("/"),h("/")}})})}),i.jsx(o(),{href:"/write",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(d,{btnText:"Write a Post",color:"/write"===t?"LavenderBlush":"defaultColor",onClick:()=>{n("/write"),h("/write")}})})}),i.jsx(o(),{href:"/about/site-intro",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(d,{btnText:"About",color:"/about/site-intro"===t?"LavenderBlush":"defaultColor",onClick:()=>{n("/about/site-intro"),h("/about/site-intro")}})})})]}),a.length===m.length&&i.jsx("div",{className:"sliding-menu-line-container flex h-2 relative mt-0",children:i.jsx("div",{className:"background-line w-full",children:i.jsx("div",{id:"moving_menu_line",className:"moving-menu-line h-2 bg-rose-500",style:{left:`${f}px`}})})}),i.jsx("div",{className:"dummy-div"})]}),i.jsx("div",{className:"dummy-div"})]})]})};var p=n(1377),h=n(5434),x=n.n(h);function v(){return i.jsx("div",{className:`header flex justify-center items-center p-4 text-gray ${x().className}`,children:"Cindy's Blog"})}function j(){return(0,i.jsxs)("footer",{className:"flex w-full bg-rose-500 h-20 bottom-0 fixed justify-center items-center text-white",children:[(0,i.jsxs)("div",{className:"line-anim-container",children:[i.jsx("div",{className:"line"}),i.jsx("div",{className:"glowing-dot"})]}),"\xa9 2024 Cindy. All rights reserved."]})}let y=({children:e})=>{let{t}=(0,p.useTranslation)("common");return(0,i.jsxs)("div",{children:[i.jsx(v,{}),i.jsx(f,{}),i.jsx("div",{className:"content main-layout flex justify-center",children:e}),i.jsx(j,{})]})};var g=n(1328);let b=({children:e})=>i.jsx(u,{children:i.jsx(g._,{children:e})});n(4542),n(5925);let P=(0,p.appWithTranslation)(function({Component:e,pageProps:t}){return i.jsx(b,{children:i.jsx(y,{children:i.jsx(e,{...t})})})})},5925:()=>{},4542:()=>{},5244:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},8039:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.AmpContext}};