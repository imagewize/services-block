(()=>{"use strict";var e,o={537:(e,o,r)=>{var n=r(997),i=r(723),l=r(715);const s=window.wp.components,t=window.wp.element,a=window.wp.mediaUtils,d=window.wp.compose,c=window.wp.data;var g=r(790);const p=(0,d.compose)((0,l.withColors)("backgroundColor"),(0,c.withSelect)((e=>({colors:e("core/block-editor").getSettings()?.colors||[]}))))((function({attributes:e,setAttributes:o,backgroundColor:r,setBackgroundColor:n,clientId:d}){const{svgUrl:c,width:p,height:u,borderRadius:x,padding:h}=e,[v,b]=(0,t.useState)(""),w=(0,l.__experimentalUseMultipleOriginColorsAndGradients)(),C=(0,l.useBlockProps)({style:{backgroundColor:e.backgroundColor,"--svg-background":e.backgroundColor,"--svg-width":`${p}px`,"--svg-height":`${u}px`,"--svg-border-radius":`${x}px`,"--svg-padding":`${h}px`}});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.BlockControls,{children:(0,g.jsx)(s.ToolbarGroup,{children:(0,g.jsx)(a.MediaUpload,{onSelect:e=>{"image/svg+xml"===e.mime?(b(""),o({svgUrl:e.url})):b("Please select an SVG file")},allowedTypes:["image/svg+xml"],render:({open:e})=>(0,g.jsx)(s.ToolbarButton,{onClick:e,icon:"upload",label:c?(0,i.__)("Replace SVG"):(0,i.__)("Upload SVG")})})})}),(0,g.jsx)(l.InspectorControls,{group:"color",children:(0,g.jsx)(l.__experimentalColorGradientSettingsDropdown,{panelId:d,settings:[{label:(0,i.__)("Container Background"),colorValue:e.backgroundColor,onColorChange:e=>{o({backgroundColor:e})}}],...w})}),(0,g.jsxs)(l.InspectorControls,{children:[(0,g.jsxs)(s.PanelBody,{title:(0,i.__)("SVG Settings"),initialOpen:!0,children:[v&&(0,g.jsx)("p",{style:{color:"red"},children:v}),(0,g.jsx)(s.RangeControl,{label:(0,i.__)("SVG Width (px)"),value:p,onChange:e=>o({width:e}),min:20,max:200}),(0,g.jsx)(s.RangeControl,{label:(0,i.__)("SVG Height (px)"),value:u,onChange:e=>o({height:e}),min:20,max:200})]}),(0,g.jsxs)(s.PanelBody,{title:(0,i.__)("Container Settings"),initialOpen:!0,children:[(0,g.jsx)(s.RangeControl,{label:(0,i.__)("Padding (px)"),value:h,onChange:e=>o({padding:e}),min:0,max:50}),(0,g.jsx)(s.RangeControl,{label:(0,i.__)("Border Radius (px)"),value:x,onChange:e=>o({borderRadius:e}),min:0,max:50})]})]}),(0,g.jsx)("div",{...C,children:c?(0,g.jsx)("img",{src:c,alt:""}):(0,g.jsx)("p",{children:(0,i.__)("Upload an SVG")})})]})})),u=JSON.parse('{"UU":"imagewize/svg-block"}');(0,n.registerBlockType)(u.UU,{edit:p,save:function({attributes:e}){const{svgUrl:o,width:r,height:n,backgroundColor:i,borderRadius:s,padding:t}=e,a=l.useBlockProps.save({style:{"--svg-background":i,"--svg-border-radius":`${s}px`,"--svg-padding":`${t}px`,"--svg-width":`${r}px`,"--svg-height":`${n}px`}});return(0,g.jsx)("div",{...a,children:o&&(0,g.jsx)("img",{src:o,alt:"",decoding:"async"})})}})},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},997:e=>{e.exports=window.wp.blocks},723:e=>{e.exports=window.wp.i18n}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var l=r[e]={exports:{}};return o[e](l,l.exports,n),l.exports}n.m=o,e=[],n.O=(o,r,i,l)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,i,l]=e[c],t=!0,a=0;a<r.length;a++)(!1&l||s>=l)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(t=!1,l<s&&(s=l));if(t){e.splice(c--,1);var d=i();void 0!==d&&(o=d)}}return o}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,i,l]},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={830:0,542:0};n.O.j=o=>0===e[o];var o=(o,r)=>{var i,l,[s,t,a]=r,d=0;if(s.some((o=>0!==e[o]))){for(i in t)n.o(t,i)&&(n.m[i]=t[i]);if(a)var c=a(n)}for(o&&o(r);d<s.length;d++)l=s[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=globalThis.webpackChunkservices_block=globalThis.webpackChunkservices_block||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var i=n.O(void 0,[542],(()=>n(537)));i=n.O(i)})();