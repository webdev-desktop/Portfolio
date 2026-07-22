(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19279,e=>{"use strict";var r=e.i(43476),t=e.i(53070),a=e.i(73945);e.s(["default",0,function({text:e,text2:n,variant:o="primary",icon:l,marginClass:i="",onClick:s,type:c="button",href:m,disabled:d}){let p=a.default.fileDownload,u=a.default.externalLink,b=`
    font-button-u 
    flex items-center justify-center 
    rounded-[clamp(1.5rem,4vw,2.5rem)]
    py-[clamp(0.55rem,1.8vw,0.875rem)] 
    px-[clamp(1.15rem,3.5vw,2rem)] 
    gap-[clamp(0.4rem,1.5vw,1rem)]
    font-normal tracking-wide 
    transition-all duration-300 ease-in-out 
    hover:scale-105 active:scale-95 
    focus:outline-none 
    w-full min-[400px]:w-auto 
    group cursor-pointer
  `,x={primary:"bg-brand-cyan text-black hover:bg-bg-primary hover:text-brand-cyan",secondary:"bg-bg-nav text-text-dim border border-border-subtle/30 hover:bg-bg-hover-dim/80 hover:text-text-main shadow-[0_10px_40px_rgba(0,0,0,0.05)]"},f="w-[clamp(1rem,2.8vw,1.35rem)] h-[clamp(1rem,2.8vw,1.35rem)] transition-transform duration-300 transform group-hover:translate-x-[clamp(2px,0.5vw,5px)]";return(0,r.jsx)("a",{href:m,target:"All Projects"===e?"":"_blank",rel:"noreferrer",className:"w-full btn-interactive flex justify-center items-center align-middle",children:(0,r.jsxs)("button",{type:c,onClick:s,disabled:d,className:`${b} ${x[o]||x.primary} ${i} fade-down text-[clamp(0.9rem,2.2vw,1.25rem)]`,children:[(0,r.jsx)("span",{className:"whitespace-nowrap",children:d?n:e}),"Download CV"===e?(0,r.jsx)(p,{}):"View Certificate PDF"===e?(0,r.jsx)(u,{}):l?(0,r.jsx)(l,{className:f}):(0,r.jsx)(t.LuChevronsRight,{className:f})]})})}])}]);