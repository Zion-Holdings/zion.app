var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,n=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&l(e,t,r[t]);if(o)for(var t of o(r))i.call(r,t)&&l(e,t,r[t]);return e};import{r as s}from"./react-vendor--RDDK63q.js";
/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,l)=>{const p=s.forwardRef((p,d)=>{var f,u,y,m=p,{color:h="currentColor",size:b=24,strokeWidth:k=2,absoluteStrokeWidth:v,className:w="",children:g}=m,O=((e,r)=>{var t={};for(var l in e)a.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&o)for(var l of o(e))r.indexOf(l)<0&&i.call(e,l)&&(t[l]=e[l]);return t})(m,["color","size","strokeWidth","absoluteStrokeWidth","className","children"]);return s.createElement("svg",n((f=n({ref:d},c),u={width:b,height:b,stroke:h,strokeWidth:v?24*Number(k)/Number(b):k,className:["lucide",`lucide-${y=e,y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,w].join(" ")},r(f,t(u))),O),[...l.map(([e,r])=>s.createElement(e,r)),...Array.isArray(g)?g:[g]])});return p.displayName=`${e}`,p},d=p("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),f=p("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);export{d as C,f as S,p as c};
