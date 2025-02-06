(()=>{"use strict";var e,o={537:(e,o,r)=>{var n=r(997),l=r(723),i=r(715);const t=window.wp.components,s=window.wp.element,a=window.wp.mediaUtils,d=window.wp.compose,c=window.wp.data;var p=r(790);const g=(0,d.compose)((0,i.withColors)("backgroundColor"),(0,c.withSelect)((e=>({colors:e("core/block-editor").getSettings()?.colors||[]}))))((function({attributes:e,setAttributes:o,backgroundColor:r,setBackgroundColor:n,clientId:d}){const{svgUrl:c,width:g,height:u,borderRadius:x,padding:h}=e,[b,v]=(0,s.useState)(""),w=(0,i.__experimentalUseMultipleOriginColorsAndGradients)(),m=(0,i.useBlockProps)({style:{backgroundColor:e.backgroundColor,borderRadius:`${x}px`,padding:`${h}px`,width:`${g}px`,height:`${u}px`,display:"inline-flex",alignItems:"center",justifyContent:"center"}});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.BlockControls,{children:(0,p.jsx)(t.ToolbarGroup,{children:(0,p.jsx)(a.MediaUpload,{onSelect:e=>{"image/svg+xml"===e.mime?(v(""),o({svgUrl:e.url})):v("Please select an SVG file")},allowedTypes:["image/svg+xml"],render:({open:e})=>(0,p.jsx)(t.ToolbarButton,{onClick:e,icon:"upload",label:c?(0,l.__)("Replace SVG"):(0,l.__)("Upload SVG")})})})}),(0,p.jsx)(i.InspectorControls,{group:"color",children:(0,p.jsx)(i.__experimentalColorGradientSettingsDropdown,{panelId:d,settings:[{label:(0,l.__)("Background Color"),colorValue:e.backgroundColor,onColorChange:e=>{o({backgroundColor:e})}}],...w})}),(0,p.jsx)(i.InspectorControls,{children:(0,p.jsxs)(t.PanelBody,{title:(0,l.__)("SVG Settings"),children:[b&&(0,p.jsx)("p",{style:{color:"red"},children:b}),(0,p.jsx)(t.RangeControl,{label:(0,l.__)("Width (px)"),value:g,onChange:e=>o({width:e}),min:20,max:200}),(0,p.jsx)(t.RangeControl,{label:(0,l.__)("Height (px)"),value:u,onChange:e=>o({height:e}),min:20,max:200}),(0,p.jsx)(t.RangeControl,{label:(0,l.__)("Border Radius (px)"),value:x,onChange:e=>o({borderRadius:e}),min:0,max:50}),(0,p.jsx)(t.RangeControl,{label:(0,l.__)("Padding (px)"),value:h,onChange:e=>o({padding:e}),min:0,max:50})]})}),(0,p.jsx)("div",{...m,children:c?(0,p.jsx)("img",{src:c,alt:""}):(0,p.jsx)("p",{children:(0,l.__)("Upload an SVG")})})]})})),u=JSON.parse('{"UU":"imagewize/svg-block"}');(0,n.registerBlockType)(u.UU,{edit:g,save:function({attributes:e}){const{svgUrl:o,width:r,height:n,backgroundColor:l,borderRadius:t,padding:s}=e,a=i.useBlockProps.save({style:{"--svg-width":`${r}px`,"--svg-height":`${n}px`,"--svg-background":l,"--svg-border-radius":`${t}px`,"--svg-padding":`${s}px`}});return(0,p.jsx)("div",{...a,children:o&&(0,p.jsx)("img",{src:o,alt:""})})}})},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},997:e=>{e.exports=window.wp.blocks},723:e=>{e.exports=window.wp.i18n}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.m=o,e=[],n.O=(o,r,l,i)=>{if(!r){var t=1/0;for(c=0;c<e.length;c++){for(var[r,l,i]=e[c],s=!0,a=0;a<r.length;a++)(!1&i||t>=i)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(s=!1,i<t&&(t=i));if(s){e.splice(c--,1);var d=l();void 0!==d&&(o=d)}}return o}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,l,i]},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={830:0,542:0};n.O.j=o=>0===e[o];var o=(o,r)=>{var l,i,[t,s,a]=r,d=0;if(t.some((o=>0!==e[o]))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(a)var c=a(n)}for(o&&o(r);d<t.length;d++)i=t[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=globalThis.webpackChunkservices_block=globalThis.webpackChunkservices_block||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var l=n.O(void 0,[542],(()=>n(537)));l=n.O(l)})();