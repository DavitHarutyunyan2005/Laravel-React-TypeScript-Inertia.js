import{a as l,j as o}from"./app-BWfkA99c.js";function c({feature:e}){const r=l({upvote:!0}),i=l({upvote:!1}),n=s=>{if(e.user_has_upvoted&&s||e.user_has_downvoted&&!s)r.delete(route("upvote.destroy",e.id),{preserveScroll:!0});else{let t=null;s?t=r:t=i,t.post(route("upvote.store",e),{preserveScroll:!0})}};return o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("button",{onClick:()=>n(!0),className:e.user_has_upvoted?"text-amber-600":"",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-12",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})})}),o.jsx("span",{className:e.user_has_downvoted||e.user_has_upvoted?"text-2xl font-semibold text-amber-600":"text-2xl font-semibold",children:e.upvote_count}),o.jsx("button",{onClick:()=>n(!1),className:e.user_has_downvoted?"text-amber-600":"",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-12",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]})}export{c as F};
