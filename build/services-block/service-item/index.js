(()=>{"use strict";var e={790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},997:e=>{e.exports=window.wp.blocks},723:e=>{e.exports=window.wp.i18n}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}var o=i(997),s=i(723),r=i(715);const n=window.wp.components;var c=i(790);const l=JSON.parse('{"UU":"imagewize/service-item"}');(0,o.registerBlockType)(l.UU,{edit:function({attributes:e,setAttributes:t}){const{icon:i,title:o,description:l}=e;return(0,c.jsx)("div",{className:"services-block bg-white p-6 rounded-lg group",children:(0,c.jsxs)("div",{className:"grid grid-cols-[auto_1fr] gap-4 items-start",children:[(0,c.jsx)(n.TextControl,{className:"service-icon inline-flex p-2 text-3xl bg-blue-600 rounded-lg",value:i,onChange:e=>t({icon:e}),placeholder:"SVG icon code"}),(0,c.jsxs)("div",{children:[(0,c.jsx)(r.RichText,{tagName:"h3",className:"service-title text-lg text-blue-600 group-hover:text-gray-700 font-semibold",value:o,onChange:e=>t({title:e}),placeholder:(0,s.__)("Service title...","services-block")}),(0,c.jsx)(r.RichText,{tagName:"div",className:"service-body prose text-textBodyGray font-open-sans leading-loose",value:l,onChange:e=>t({description:e}),placeholder:(0,s.__)("Service description...","services-block")})]})]})})},save:()=>null})})();