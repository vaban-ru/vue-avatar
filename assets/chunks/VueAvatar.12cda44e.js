import{e as b,f as i,u as y,o as d,c as g,g as c,F as A,h as C,t as x,i as f,r as z,n as V,j as k,_ as R}from"../app.f2b5a22f.js";const $=["src","alt"],N=b({__name:"VueAvatar",props:{username:{default:"Vue Avatar"},size:{default:50},borderRadius:{default:"100%"},backgroundColor:null,color:null,lighten:{default:150},imgSrc:null,imgAlt:null},setup(u){const e=u,v=i(()=>{var t;return(t=e.username.match(/[A-ZА-ЯЁё]/g))==null?void 0:t.slice(0,3).join("")}),h=i(()=>({width:`${e.size}px`,height:`${e.size}px`,borderRadius:e.borderRadius,fontSize:`${e.size/2.2}px`,backgroundColor:m.value,color:e.color||p(m.value,e.lighten)})),_=i(()=>["vue-avatar",{"vue-avatar--rounded":e.borderRadius&&e.borderRadius.length>0}]),p=(t,a)=>{let r=!1;t[0]==="#"&&(t=t.slice(1),r=!0);const s=parseInt(t,16);let l=(s>>16)+a;l>255?l=255:l<0&&(l=0);let o=(s>>8&255)+a;o>255?o=255:o<0&&(o=0);let n=(s&255)+a;return n>255?n=255:n<0&&(n=0),(r?"#":"")+(n|o<<8|l<<16).toString(16)},m=i(()=>{if(e.backgroundColor)return e.backgroundColor;let t=0;for(let r=0;r<e.username.length;r++)t=e.username.charCodeAt(r)+((t<<5)-t);let a="#";for(let r=0;r<3;r++){const s=t>>r*8&255;a+=("00"+s.toString(16)).substr(-2)}return a}),S=y();return(t,a)=>(d(),g("div",{style:V(c(h)),class:k(c(_))},[!c(S).default&&!e.imgSrc?(d(),g(A,{key:0},[C(x(c(v)),1)],64)):f("",!0),u.imgSrc&&u.imgSrc.length?(d(),g("img",{key:1,src:e.imgSrc,alt:u.imgAlt},null,8,$)):f("",!0),z(t.$slots,"default",{},void 0,!0)],6))}});const B=R(N,[["__scopeId","data-v-c26894da"]]);export{B as V};
