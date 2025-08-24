import{j as n}from"./chunk-DjnvCE_i.js";function u({children:r,className:e=""}){return n.jsx("h2",{className:`text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent ${e}`,children:r})}var d=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))i.call(e,t)&&o(r,t,e[t]);if(l)for(var t of l(e))s.call(e,t)&&o(r,t,e[t]);return r},m=(r,e)=>{var t={};for(var a in r)i.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&l)for(var a of l(r))e.indexOf(a)<0&&s.call(r,a)&&(t[a]=r[a]);return t};function b(r){var e=r,{label:t,error:a,className:f=""}=e,p=m(e,["label","error","className"]);return n.jsxs("div",{className:"space-y-2",children:[t&&n.jsx("label",{className:"text-sm font-medium text-zion-slate-light",children:t}),n.jsx("input",c({className:`
          flex h-10 w-full rounded-md border border-zion-blue-light/30 
          bg-zion-blue-dark/50 px-3 py-2 text-sm 
          text-white placeholder:text-zion-slate-light/50
          focus:outline-none focus:ring-2 focus:ring-zion-cyan 
          focus:border-transparent transition-colors
          ${a?"border-red-500":""}
          ${f}
        `},p)),a&&n.jsx("p",{className:"text-sm text-red-500",children:a})]})}export{u as G,b as I};
