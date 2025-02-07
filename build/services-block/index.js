(()=>{"use strict";var e,M={96:()=>{const e=window.wp.blocks,M=(window.wp.i18n,window.wp.blockEditor);window.React;const t=window.ReactJSXRuntime,o=JSON.parse('{"UU":"imagewize/services-block"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const i=(0,M.useBlockProps)();return(0,t.jsx)("section",{...i,className:"py-16 bg-gray-50",children:(0,t.jsx)("div",{className:"container mx-auto max-w-4xl px-4",children:(0,t.jsx)(M.InnerBlocks,{template:[["core/heading",{level:2,content:"Our Awesome Services.",textAlign:"center",align:"center",className:"text-3xl text-center font-bold font-open-sans mb-12",style:{typography:{fontWeight:"700",fontStyle:"normal",fontFamily:"var(--wp--preset--font-family--open-sans)"},spacing:{margin:{bottom:"3rem"}}}}],["core/paragraph",{content:"We live and breathe web design, e-commerce, hosting, and website maintenance. If you need a stunning website for your products or services, a tailored e-commerce solution, speed optimization, or ongoing site maintenance, we're here to help you succeed.",align:"center",className:"text-xl leading-relaxed mb-12 text-textBodyGray font-open-sans",style:{typography:{fontWeight:"400",fontStyle:"normal",fontFamily:"var(--wp--preset--font-family--open-sans)",fontSize:"var(--wp--preset--font-size--xl)"},spacing:{margin:{bottom:"3rem"}},elements:{link:{color:{text:"var:preset|color|textbodygray"}}}},textColor:"textbodygray"}],["core/columns",{},[["core/column",{backgroundColor:"white",style:{spacing:{padding:"1.5rem"}}},[["core/columns",{},[["core/column",{width:"20%",className:"icon-column"},[["imagewize/svg-block",{svgUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTY0LjA5NCAxMjYuMjI0YzM0LjI3NS0uMDUyIDYyLjAyMS0yNy45MzMgNjIuMDIxLTYyLjMyNWMwLTMzLjgzMy0yNy42MTgtNjEuNjk3LTYwLjYxMy02Mi4yODZDMzAuODUuOTk1IDEuODk0IDI5LjExMyAxLjg4NSA2My4yMWMtLjAxIDM1LjA3OSAyNy42MTIgNjMuMDY0IDYyLjIwOSA2My4wMTRNNjMuOTkzIDQuNjNjMzIuOTA3LS4wMTEgNTkuMTI2IDI2LjcyNSA1OS4xMTYgNjAuMjhjLS4wMTEgMzEuNjc5LTI2LjkyNSA1OC4xOC01OS4wOTIgNTguMTg3Yy0zMi43NzEuMDA3LTU5LjEyNS0yNi41NjMtNTkuMTI0LTU5LjYwOGMuMDAyLTMyLjE5MyAyNi43NjYtNTguODQ4IDU5LjEtNTguODU5TTM5LjE1NyAzNS44OTZjLjUzOCAxLjc5My0uOTY4IDIuNDE3LTIuNTY5IDIuNTQyYy0xLjY4NS4xMy0zLjM2OS4yNTctNS4zMjUuNDA2YzYuNDU2IDE5LjIzNCAxMi44MTUgMzguMTgzIDE5LjMyNSA1Ny41NzNjLjQ2NC0uNzU5LjY1NS0uOTczLjczOS0xLjIyM2MzLjU3NC0xMC42ODIgNy4xNjgtMjEuMzU3IDEwLjY1MS0zMi4wNjljLjMxOC0uOTc3LjE2LTIuMjcxLS4xODgtMy4yNzVjLTEuODQzLTUuMzItNC4wNTEtMTAuNTI0LTUuNjY3LTE1LjkwOGMtMS4xMDUtMy42ODYtMi41NzEtNi4wNzEtNi45MjgtNS42NDRjLS43NDIuMDczLTEuNjQ4LTEuNTI0LTIuNDc5LTIuMzQ5YzEuMDA1LS42IDIuMDAzLTEuNzA0IDMuMDE3LTEuNzE5YTg1MCA4NTAgMCAwIDEgMjYuNjE4LjAwOGMxLjAxOC4wMTcgMi4wMTYgMS4xNSAzLjAyMSAxLjc2NWMtLjg4LjgwNC0xLjYzOSAyLjAxLTIuNjY4IDIuMzIxYy0xLjY1MS40OTgtMy40ODIuNDA0LTUuNDU4LjU4bDE5LjM0OSA1Ny41NmMyLjkzMS05LjczNiA1LjY1OC0xOC42NzYgOC4zMS0yNy42MzljMi4zNjYtOC4wMDEuOTU2LTE1LjQ3My0zLjMyMi0yMi41MmMtMS4yODYtMi4xMTktMi44NjYtNC4xNzUtMy41OTUtNi40ODZjLS44MjgtMi42MjktMS41MTYtNS42MjItMS4wNzctOC4yNTljLjc0NS00LjQ2OSA0LjE3NC02LjY4OCA4LjgxNC03LjExM0M3NC4zMzMuODgxIDM0LjQzMSA5LjMxNyAxOS43MjggMzQuOTIyYzUuNjYtLjI2MSAxMS4wNjQtLjYwNCAxNi40NzItLjY3OGMxLjAyMi0uMDEzIDIuNzE3Ljg1MSAyLjk1NyAxLjY1Mm0xMC4xMTcgNzcuOTcxYy0uMTE4LjM0NS0uMTI1LjcyOS0uMjE4IDEuMzAyYzEwLjk0MyAzLjAzNCAyMS42NzUgMi44MTUgMzIuNjU5LS44ODZsLTE2Ljc4LTQ1Ljk2Yy01LjM3IDE1LjYxMS0xMC41MiAzMC41NzUtMTUuNjYxIDQ1LjU0NG0tOC40NTYtMi4wNzhsLTI1LjI4MS02OS4zNWMtMTEuNDA1IDIyLjI3OC0yLjcyOSA1Ni4yNjggMjUuMjgxIDY5LjM1bTc2LjQyOC00NC41NjJjLjgwMi0xMC41MzQtMi44MzItMjUuMTE5LTUuOTctMjcuMTI1Yy0uMzUgMy44NzUtLjEwNiA4LjE4Ni0xLjIxOCAxMi4xMTRjLTIuNjE3IDkuMjU1LTUuODE3IDE4LjM0OS04Ljg5OSAyNy40NjhjLTMuMzUgOS45MTItNi44MzIgMTkuNzc5LTEwLjI1NyAyOS42NjZjMTYuMDkyLTkuNTM5IDI0LjkzNS0yMy42MTggMjYuMzQ0LTQyLjEyMyIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",className:"aligncenter"}]]],["core/column",{width:"80%",className:"content-column"},[["core/heading",{level:3,content:"WordPress Sites",className:"service-title",fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"600"},color:{text:"#000000"}}}],["core/paragraph",{content:"Need a website that stands out? At Imagewize, we design custom WordPress themes and plugins tailored to your brand. Get a unique design and functionality that goes beyond basic templates, delivering a website that truly reflects your business.",className:"service-body",fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}}}]]]]]]],["core/column",{backgroundColor:"white",style:{spacing:{padding:"1.5rem"}}},[["core/columns",{},[["core/column",{width:"20%",className:"icon-column"},[["imagewize/svg-block",{svgUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDguNiA0Ni45Yy0yLjMtLjItNi43IDEtOC43IDEwLjhjMCA1LjkgMS40IDkuNSAzLjYgMTAuOGM0LjEgMS4yIDguOS00LjMgOC45LTEwLjJjLjItNC4xLjQtOS4yLTMuOC0xMS40Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExNi4zIDI1LjhIMTEuN0M1LjIgMjUuOCAwIDMxIDAgMzcuNHY0MGMwIDYuNCA1LjIgMTEuNyAxMS43IDExLjdoMTA0LjdjNi40IDAgMTEuNy01LjIgMTEuNy0xMS43di00MGMtLjEtNi40LTUuMy0xMS42LTExLjgtMTEuNk00NCA4MHMtNi45LTkuMS04LjUtMTZjLTEuNi02LjgtMi0zLjctMi0zLjdTMjggNzIuNyAyMi4zIDgwLjZzLTguNS0zLjktOC41LTMuOWMtMi0yLjQtNy43LTM3LjMtNy43LTM3LjNjMy4yLTguOSA4LjctMS42IDguNy0xLjZsNS41IDI4LjRzOC41LTE3LjQgMTEuNC0yMS45YzIuOC00LjUgNy43LTMuMiA4LjEgMS40Yy40IDQuNyA1LjEgMTcuNCA1LjEgMTcuNGMuNC0xMy40IDUuOS0yNi4yIDYuNy0yOC4yczkuNy00LjUgOC4xIDQuMUM1NS44IDQ4LjUgNTIgNjguNiA1MyA3OS42Yy0yLjcgOC4zLTkgLjQtOSAuNG0zNS45LTQuNWMtMi42IDEuMi0xMi4zIDcuOS0xOS4yLTcuMUM1Ni40IDUzLjMgNjYgNDIuMiA2NiA0Mi4yczEyLjUtMTAuNyAyMSAzLjVjNi45IDE1LjYtNC41IDI4LjYtNy4xIDI5LjhtMzEuOCAwYy0yLjYgMS4yLTEyLjMgNy45LTE5LjItNy4xYy00LjMtMTUuMSA1LjMtMjYuMiA1LjMtMjYuMnMxMi42LTEwLjggMjEuMSAzLjRjNi45IDE1LjctNC42IDI4LjctNy4yIDI5LjkiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzYuNyA0Ni45Yy0yLjMtLjItNi43IDEtOC43IDEwLjhjMCA1LjkgMS40IDkuNSAzLjYgMTAuOGM0LjEgMS4yIDguOS00LjMgOC45LTEwLjJjLjMtNC4xLjUtOS4yLTMuOC0xMS40TTYxLjMgODkuMWwyMi4zIDEzLjFsLTQuNy0xMy4xbC0xMi44LTMuNnoiLz48L3N2Zz4="}]]],["core/column",{width:"80%",className:"content-column"},[["core/heading",{level:3,content:"E-Commerce Sites",className:"service-title",fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"600"},color:{text:"#000000"}}}],["core/paragraph",{content:"For years, we’ve specialized in creating custom WooCommerce & Shopify stores, combining beautiful design with seamless functionality. Our tailored e-commerce solutions are built to meet your unique business needs and deliver an exceptional shopping experience for your customers.",className:"service-body",fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}}}]]]]]]]]],["core/columns",{},[["core/column",{backgroundColor:"white",style:{spacing:{padding:"1.5rem"}}},[["core/columns",{},[["core/column",{width:"20%",className:"icon-column"},[["imagewize/svg-block",{svgUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcgMjlIMTNjLTEuMSAwLTItLjktMi0ydi00aDJ2NGgxNFYxM2gtNHYtMmg0YzEuMSAwIDIgLjkgMiAydjE0YzAgMS4xLS45IDItMiAyIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExIDE5aDEwdjJIMTF6bTAtNGgxMHYySDExem0wLTRoMTB2MkgxMXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNSAzaDE0YzEuMSAwIDIgLjkgMiAydjRoLTJWNUg1djE0aDR2Mkg1Yy0xLjEgMC0yLS45LTItMlY1YzAtMS4xLjktMiAyLTIiLz48L3N2Zz4=",className:"aligncenter"}]]],["core/column",{width:"80%",className:"content-column"},[["core/heading",{level:3,content:"Hosting",className:"service-title",fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"600"},color:{text:"#000000"}}}],["core/paragraph",{content:"We are dead serious about creating the best WordPress server setup you could need. We love delivering quality. We work with partners who feel the same way about quality. If you need something sloppy and fast you are at the wrong address.",className:"service-body",fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}}}]]]]]]],["core/column",{backgroundColor:"white",style:{spacing:{padding:"1.5rem"}}},[["core/columns",{},[["core/column",{width:"20%",className:"icon-column"},[["imagewize/svg-block",{svgUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuNzU4IDE1LjE5MnEuNDUyLjQ1MiAxLjE4LjQxNXEuNzMtLjAzOCAxLjA3OC0uNTE1bDUuMjUzLTcuMzIzbC03LjM2MSA1LjIxNnEtLjQ5Ni4zMzQtLjU1OSAxLjAzNXQuNDA5IDEuMTcyTTUuMSAxOXEtLjI4IDAtLjUxMi0uMTQxcS0uMjMyLS4xNDItLjM5Mi0uMzg2cS0uNTkyLTEuMDIxLS44OTQtMi4xNThUMyAxNHEwLTEuODY0LjcxLTMuNTA2cS43MTEtMS42NDIgMS45MjctMi44NTdRNi44NTIgNi40MiA4LjQ5NCA1LjcxVDEyIDVxMS44NTggMCAzLjQ4NS42OTh0Mi44NTIgMS45MDF0MS45MzggMi44MTd0LjcyIDMuNDcycS4wMDUgMS4yNC0uMjk0IDIuNDA5dC0uOTAzIDIuMjUzcS0uMTQuMjQ0LS4zODIuMzQ3cS0uMjQxLjEwMy0uNTIyLjEwM3oiLz48L3N2Zz4=",className:"aligncenter"}]]],["core/column",{width:"80%",className:"content-column"},[["core/heading",{level:3,content:"Speed Optimization",className:"service-title",fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"600"},color:{text:"#000000"}}}],["core/paragraph",{content:"Boost your WordPress and WooCommerce site’s speed with image optimization, caching, and rendering-block fixes. Faster load times improve user experience and technical SEO, driving better rankings and conversions!",className:"service-body",fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}}}]]]]]]]]],["core/columns",{},[["core/column",{backgroundColor:"white",style:{spacing:{padding:"1.5rem"}}},[["core/columns",{},[["core/column",{width:"20%",className:"icon-column"},[["imagewize/svg-block",{svgUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuOSA1LjFzLS4yLjA2LS41NC4xN2MtLjA2LS4xOC0uMTQtLjQxLS4yNi0uNjNjLS4zOC0uNzMtLjk0LTEuMTEtMS42Mi0xLjEyYy0uMDUgMC0uMDkgMC0uMTQuMDFjLS4wMi0uMDItLjA0LS4wNS0uMDYtLjA3Yy0uMjktLjMyLS42Ny0uNDctMS4xMi0uNDZjLS44Ny4wMy0xLjc0LjY2LTIuNDUgMS43OGMtLjUuNzktLjg3IDEuNzgtLjk4IDIuNTRjLTEgLjMxLTEuNy41My0xLjcyLjUzYy0uNTEuMTYtLjUyLjE4LS41OS42NWMtLjA1LjM2LTEuMzcgMTAuNi0xLjM3IDEwLjZMMTUuMDMgMjFWNS4wOGMtLjA1IDAtLjEuMDEtLjEzLjAybS0yLjU0Ljc5Yy0uNTguMTgtMS4yMi4zOC0xLjg1LjU3Yy4xOC0uNjkuNTItMS4zNy45NC0xLjgyYy4xNi0uMTcuMzctLjM1LjYzLS40NmMuMjQuNTEuMjkgMS4yMi4yOCAxLjcxbS0xLjE5LTIuMzFjLjIgMCAuMzguMDQuNTMuMTRjLS4yNC4xMi0uNDYuMy0uNjguNTNjLS41NS41OS0uOTggMS41Mi0xLjE1IDIuNDFjLS41My4xNi0xLjA0LjMyLTEuNTIuNDdjLjMtMS40MSAxLjQ4LTMuNTEgMi44Mi0zLjU1bS0xLjcgNy45OWMuMDYuOTMgMi41MiAxLjE0IDIuNjYgMy4zM2MuMTEgMS43Mi0uOTEgMi45LTIuMzkgMi45OUM3Ljk4IDE4IDcgMTYuOTYgNyAxNi45NmwuMzctMS41OXMuOTguNzQgMS43Ni42OWMuNTEtLjAzLjY5LS40NS42OC0uNzRjLS4wOC0xLjIyLTIuMDgtMS4xNS0yLjItMy4xNWMtLjExLTEuNjkgMS0zLjM5IDMuNDQtMy41NWMuOTUtLjA2IDEuNDMuMTggMS40My4xOGwtLjU2IDIuMDlzLS42Mi0uMjgtMS4zNi0uMjRjLTEuMDguMDctMS4xLjc1LTEuMDkuOTJtMy40Ny01Ljg2Yy0uMDEtLjQ0LS4wNi0xLjA2LS4yNy0xLjU5Yy42Ni4xMy45OS44NyAxLjEzIDEuMzJjLS4yNS4wOC0uNTQuMTctLjg2LjI3bTIuNDUgMTUuMjVsNC41Ni0xLjEzUzE3Ljk5IDYuNTcgMTcuOTggNi40OHMtLjA5LS4xNC0uMTYtLjE1cy0xLjM1LS4wMy0xLjM1LS4wM3MtLjc4LS43Ni0xLjA4LTEuMDV6Ii8+PC9zdmc+",className:"aligncenter"}]]],["core/column",{width:"80%",className:"content-column"},[["core/heading",{level:3,content:"Shopify",className:"service-title",fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"600"},color:{text:"#000000"}}}],["core/paragraph",{content:"Transform your online business with our expert Shopify development services. We create stunning, conversion-focused Shopify stores with custom themes and advanced features. From setup to optimization, we'll help you build a powerful e-commerce presence that drives sales.",className:"service-body",fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}}}]]]]]]],["core/column",{backgroundColor:"white",style:{spacing:{padding:"1.5rem"}}},[["core/columns",{},[["core/column",{width:"20%",className:"icon-column"},[["imagewize/svg-block",{svgUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjEuNyA2LjUzYy4wMS4wMi4wMS4wNS4wMS4wOHY0LjI5YzAgLjEtLjA2LjIyLS4xNS4yN2wtMy42MSAyLjA4djQuMTFjMCAuMTEtLjA1LjIxLS4xNS4yN2wtNy41MiA0LjMzYy0uMDIuMDEtLjA0LjA0LS4wNi4wNEgxMHMwLS4wMy0uMDQtLjA0bC03LjUyLTQuMzNhLjMyLjMyIDAgMCAxLS4xNS0uMjdWNC41YzAtLjA1IDAtLjA4LjAxLS4xYzAtLjAxLjAxLS4wMi4wMS0uMDNjMC0uMDIuMDEtLjAzLjAyLS4wNWMwLS4wMS4wMS0uMDIuMDItLjAzbC4wMy0uMDNsLjAzLS4wM2MuMDEtLjAxLjAyLS4wMi4wMy0uMDJMNi4yIDIuMDRjLjEtLjA0LjIyLS4wNC4zIDBsMy43OCAyLjE3Yy4wMS4wMS4wMi4wMS4wMy4wMmwuMDMuMDNsLjAzLjAzYy4wMS4wMS4wMi4wMi4wMi4wM2MuMDEuMDIuMDIuMDMuMDIuMDVjMCAuMDEuMDEuMDIuMDEuMDNjLjAxLjAzLjAxLjA1LjAxLjF2OGwzLjE0LTEuNzhWNi42MWMwLS4wMyAwLS4wNi4wMS0uMDhsLjAxLS4wM3MuMDEtLjAzLjAyLS4wNWMwLS4wMS4wMS0uMDIuMDItLjAzbC4wMy0uMDNsLjAzLS4wM2MuMDEtLjAxLjAyLS4wMi4wMy0uMDJsMy43OC0yLjE3Yy4wOC0uMDYuMi0uMDYuMyAwbDMuNzYgMi4xN2MuMDEgMCAuMDIuMDEuMDMuMDJsLjAzLjAzbC4wMy4wM2MuMDEuMDEuMDEuMDIuMDIuMDNjLjAxLjAyLjAxLjA1LjAyLjA1cy4wMSAwIC4wMS4wM20tLjYxIDQuMTlWNy4xNWwtMy4xNCAxLjh2My41NXptLTMuNzYgNi40NlYxMy42bC02LjkgMy45NHYzLjYxek0yLjkxIDV2MTIuMThsNi45IDMuOTd2LTMuNjFsLTMuNi0yLjA0SDYuMmMtLjAxIDAtLjAyIDAtLjAzLS4wM2MtLjAxIDAtLjAyLS4wMS0uMDMtLjAybC0uMDMtLjAzYy0uMDEtLjAxLS4wMS0uMDItLjAyLS4wM2MtLjAxLS4wMi0uMDEtLjAzLS4wMi0uMDRjMC0uMDItLjAxLS4wMy0uMDEtLjA0Yy0uMDEtLjAxLS4wMS0uMDMtLjAxLS4wNFY2Ljgyem0zLjQ1LTIuMzJMMy4yMyA0LjVsMy4xMyAxLjc4TDkuNSA0LjV6bTMuNDUgMTAuMlY1TDYuNjcgNi44MnY3Ljg3em03LjgzLTguMDhMMTQuNSA2LjYxbDMuMTQgMS44bDMuMTMtMS44em0tLjMxIDQuMTVsLTMuMTQtMS44djMuNTdsMy4xNCAxLjc4ek0xMC4xMiAxN0wxNyAxMy4wNmwtMy4xMi0xLjhMNyAxNS4yM3oiLz48L3N2Zz4=",className:"aligncenter"}]]],["core/column",{width:"80%",className:"content-column"},[["core/heading",{level:3,content:"Laravel",className:"service-title",fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"600"},color:{text:"#000000"}}}],["core/paragraph",{content:"Sometimes you need something bigger, more robust, custom made. Sometimes you need to launch a SaaS or an online platform. You are in luck. Imagewize loves building server environments for custom apps and we love using Laravel / vueJS to launch your dreams.",className:"service-body",fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}}}]]]]]]]]]]})})})},save:function(){const e=M.useBlockProps.save();return(0,t.jsx)("section",{...e,className:"py-16 bg-gray-50",children:(0,t.jsx)("div",{className:"container mx-auto max-w-4xl px-4",children:(0,t.jsx)(M.InnerBlocks.Content,{})})})}})}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var L=t[e]={exports:{}};return M[e](L,L.exports,o),L.exports}o.m=M,e=[],o.O=(M,t,i,L)=>{if(!t){var u=1/0;for(s=0;s<e.length;s++){for(var[t,i,L]=e[s],a=!0,j=0;j<t.length;j++)(!1&L||u>=L)&&Object.keys(o.O).every((e=>o.O[e](t[j])))?t.splice(j--,1):(a=!1,L<u&&(u=L));if(a){e.splice(s--,1);var n=i();void 0!==n&&(M=n)}}return M}L=L||0;for(var s=e.length;s>0&&e[s-1][2]>L;s--)e[s]=e[s-1];e[s]=[t,i,L]},o.o=(e,M)=>Object.prototype.hasOwnProperty.call(e,M),(()=>{var e={482:0,542:0};o.O.j=M=>0===e[M];var M=(M,t)=>{var i,L,[u,a,j]=t,n=0;if(u.some((M=>0!==e[M]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(j)var s=j(o)}for(M&&M(t);n<u.length;n++)L=u[n],o.o(e,L)&&e[L]&&e[L][0](),e[L]=0;return o.O(s)},t=globalThis.webpackChunkservices_block=globalThis.webpackChunkservices_block||[];t.forEach(M.bind(null,0)),t.push=M.bind(null,t.push.bind(t))})();var i=o.O(void 0,[542],(()=>o(96)));i=o.O(i)})();