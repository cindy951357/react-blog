(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{4852:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/language-setting",function(){return t(3470)}])},4972:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(5893),l=t(7294),i=t(1163),r=t(1664),u=t.n(r),s=t(8069),o=t(4762);let c=[{pageName:"Site Intro",href:"/about/site-intro"},{pageName:"Contact",href:"/about/contact"},{pageName:"Language Setting",href:"/about/language-setting"}];var d=()=>{let e=(0,i.useRouter)(),{activeAboutPage:n,setActiveAboutPage:t}=(0,s.z)(),r=c.findIndex(e=>e.pageName===n),[d,m]=(0,l.useState)([]),[f,g]=(0,l.useState)(0),h=n=>{e.push(n)};return(0,l.useEffect)(()=>{let e=()=>{m(Array.from(document.querySelectorAll(".about-link-href-container a")).map(e=>e.offsetHeight))};return e(),window.addEventListener("resize-abut-menu",e),()=>{window.removeEventListener("resize-about-menu",e)}},[]),(0,l.useEffect)(()=>{g(d.slice(0,r).reduce((e,n)=>e+n,0));let e=document.getElementById("moving_about_menu_line");e&&(e.style.height="".concat(d[r],"px"))},[r,d]),(0,a.jsxs)("nav",{id:"about_menu relative flex flex-row",children:[(0,a.jsx)("div",{className:"invariant-bg-line-absolute absolute w-2 flex bg-neutral-300 h-[400px] p-0 m-0",children:d.length===c.length&&(0,a.jsx)("div",{className:"sliding-about-menu-line-container flex w-2 relative mr-0 flex",children:(0,a.jsx)("div",{className:"background-line h-full bg-neutral-200",children:(0,a.jsx)("div",{id:"moving_about_menu_line",className:"moving-about-menu-line bg-rose-500",style:{top:"".concat(f,"px")}})})})}),(0,a.jsx)("ul",{className:"about-link-href-container flex flex-col",children:c.map(e=>(0,a.jsx)("li",{className:"flex",children:(0,a.jsx)(u(),{href:e.href,legacyBehavior:!0,children:(0,a.jsx)("a",{children:(0,a.jsx)(o.Z,{btnText:e.pageName,color:n===e.href?"LavenderBlush":"defaultColor",onClick:()=>{t(e.pageName),h(e.href)}})})})},e.pageName))})]})},m=e=>{let{children:n}=e;return(0,a.jsxs)("div",{className:"about-layout grid grid-cols-[1fr_20fr_1fr_1fr] h-full",children:[(0,a.jsx)("div",{className:"dummy about-dummy"}),(0,a.jsx)("div",{className:"about-main bg-white rounded-xl mr-2 h-full",children:n}),(0,a.jsx)("div",{className:"about-menu-container",children:(0,a.jsx)(d,{})}),(0,a.jsx)("div",{className:"dummy about-dummy"})]})}},3470:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var a=t(5893),l=t(4972),i=()=>(0,a.jsx)("div",{className:"lang-setting-component",children:"Language Setting"}),r=()=>(0,a.jsx)(l.Z,{children:(0,a.jsx)(i,{})})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4852)}),_N_E=e.O()}]);