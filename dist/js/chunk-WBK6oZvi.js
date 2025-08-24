import{j as l}from"./chunk-BkSxYrLj.js";var d=Object.defineProperty,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))s.call(e,t)&&o(r,t,e[t]);if(n)for(var t of n(e))i.call(e,t)&&o(r,t,e[t]);return r},c=(r,e)=>{var t={};for(var a in r)s.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&n)for(var a of n(r))e.indexOf(a)<0&&i.call(r,a)&&(t[a]=r[a]);return t};function x(r){var e=r,{label:t,error:a,className:f=""}=e,p=c(e,["label","error","className"]);return l.jsxs("div",{className:"space-y-2",children:[t&&l.jsx("label",{className:"text-sm font-medium text-zion-slate-light",children:t}),l.jsx("input",m({className:`
          flex h-10 w-full rounded-md border border-zion-blue-light/30 
          bg-zion-blue-dark/50 px-3 py-2 text-sm 
          text-white placeholder:text-zion-slate-light/50
          focus:outline-none focus:ring-2 focus:ring-zion-cyan 
          focus:border-transparent transition-colors
          ${a?"border-red-500":""}
          ${f}
        `},p)),a&&l.jsx("p",{className:"text-sm text-red-500",children:a})]})}export{x as I};
