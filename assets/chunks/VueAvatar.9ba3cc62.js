import{e as S,f as i,u as y,o as c,c as d,g as f,F as A,h as b,t as x,i as m,r as V,n as k,_ as z}from"../app.1869c0e6.js";const C=["src","alt"],$=S({__name:"VueAvatar",props:{username:{default:"Vue Avatar"},size:{default:50},borderRadius:{default:"100%"},backgroundColor:null,color:null,lighten:{default:150},imgSrc:null,imgAlt:null},setup(u){const t=u,h=i(()=>{var e;return(e=t.username.match(/[A-ZА-ЯЁё]/g))==null?void 0:e.slice(0,3).join("")}),v=i(()=>({width:`${t.size}px`,height:`${t.size}px`,borderRadius:t.borderRadius,fontSize:`${t.size/2.2}px`,backgroundColor:g.value,color:t.color||_(g.value,t.lighten)})),_=(e,s)=>{let r=!1;e[0]==="#"&&(e=e.slice(1),r=!0);const a=parseInt(e,16);let l=(a>>16)+s;l>255?l=255:l<0&&(l=0);let o=(a>>8&255)+s;o>255?o=255:o<0&&(o=0);let n=(a&255)+s;return n>255?n=255:n<0&&(n=0),(r?"#":"")+(n|o<<8|l<<16).toString(16)},g=i(()=>{if(t.backgroundColor)return t.backgroundColor;let e=0;for(let r=0;r<t.username.length;r++)e=t.username.charCodeAt(r)+((e<<5)-e);let s="#";for(let r=0;r<3;r++){const a=e>>r*8&255;s+=("00"+a.toString(16)).substr(-2)}return s}),p=y();return(e,s)=>(c(),d("div",{style:k(f(v)),class:"vue-avatar"},[!f(p).default&&!t.imgSrc?(c(),d(A,{key:0},[b(x(f(h)),1)],64)):m("",!0),u.imgSrc&&u.imgSrc.length?(c(),d("img",{key:1,src:t.imgSrc,alt:u.imgAlt},null,8,C)):m("",!0),V(e.$slots,"default",{},void 0,!0)],4))}});const R=z($,[["__scopeId","data-v-98873f24"]]);export{R as V};