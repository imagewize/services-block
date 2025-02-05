(()=>{"use strict";var e,t={96:()=>{const e=window.wp.blocks,t=window.wp.i18n,a=window.wp.blockEditor,s=window.ReactJSXRuntime,i=JSON.parse('{"UU":"imagewize/services-block"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){const n=(0,a.useBlockProps)(),{heading:r,intro:o}=e;return(0,s.jsx)("section",{...n,className:"py-16 bg-gray-50",children:(0,s.jsxs)("div",{className:"container mx-auto max-w-4xl px-4",children:[(0,s.jsxs)("div",{className:"mb-12",children:[(0,s.jsx)(a.RichText,{tagName:"h2",className:"text-3xl font-bold text-center font-open-sans",value:r,onChange:e=>i({heading:e}),placeholder:(0,t.__)("Add heading...","services-block")}),(0,s.jsx)(a.RichText,{tagName:"p",className:"mx-auto max-w-2xl text-xl leading-relaxed my-8 text-center text-textBodyGray font-open-sans font-light container",value:o,onChange:e=>i({intro:e}),placeholder:(0,t.__)("Add introduction text...","services-block")})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:(0,s.jsx)(a.InnerBlocks,{allowedBlocks:["imagewize/service-item"],template:[["imagewize/service-item"],["imagewize/service-item"],["imagewize/service-item"]]})})]})})},save:function({attributes:e}){const{heading:t,intro:i}=e;return(0,s.jsx)("section",{id:"services",className:"py-16 bg-gray-50",children:(0,s.jsxs)("div",{className:"container mx-auto max-w-4xl px-4",children:[(0,s.jsxs)("div",{className:"mb-12",children:[(0,s.jsx)(a.RichText.Content,{tagName:"h2",className:"text-3xl font-bold text-center font-open-sans",value:t}),(0,s.jsx)(a.RichText.Content,{tagName:"p",className:"mx-auto max-w-2xl text-xl leading-relaxed my-8 text-center text-textBodyGray font-open-sans font-light container",value:i})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-8"})]})})}})}},a={};function s(e){var i=a[e];if(void 0!==i)return i.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,s),n.exports}s.m=t,e=[],s.O=(t,a,i,n)=>{if(!a){var r=1/0;for(x=0;x<e.length;x++){for(var[a,i,n]=e[x],o=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(s.O).every((e=>s.O[e](a[c])))?a.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(x--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var x=e.length;x>0&&e[x-1][2]>n;x--)e[x]=e[x-1];e[x]=[a,i,n]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={482:0,542:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var i,n,[r,o,c]=a,l=0;if(r.some((t=>0!==e[t]))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var x=c(s)}for(t&&t(a);l<r.length;l++)n=r[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(x)},a=globalThis.webpackChunkservices_block=globalThis.webpackChunkservices_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=s.O(void 0,[542],(()=>s(96)));i=s.O(i)})();