import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const themeScript = `(() => {try{var t=localStorage.getItem('theme');var e=t==='dark'||(t==='system'?!window.matchMedia||(window.matchMedia('(prefers-color-scheme: dark)').matches):false);var n=e?'dark':'light';var r=document.documentElement;r.classList.add(n);r.setAttribute('data-theme',n);}catch(e){}})();`;
  const loaderTimeoutScript = `setTimeout(function(){var el=document.getElementById('initial-loader');if(el){el.style.display='none';}},10000);`;
  return (
    <Html lang="en">
      <Head>
                 {/* APOCALYPTIC POLYFILL - BEYOND NUCLEAR */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
/* APOCALYPTIC SOLUTION - WEBPACK RUNTIME HIJACK */
;(function(){
'use strict';
console.log('🚨 APOCALYPTIC POLYFILL LOADING...');

// PHASE 1: Global context detection and setup
var g=(function(){
if(typeof globalThis!=='undefined')return globalThis;
if(typeof window!=='undefined')return window;
if(typeof global!=='undefined')return global;
if(typeof self!=='undefined')return self;
return this||{}
})();

// PHASE 2: Core polyfill definitions
var polyfills={
__extends:function(d,b){
if(typeof b!=="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");
function __(){this.constructor=d}
d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())
},
__assign:Object.assign||function(t){
for(var s,i=1,n=arguments.length;i<n;i++){
s=arguments[i];
for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]
}
return t
},
process:{env:{NODE_ENV:'production'},versions:{},platform:'browser',browser:true}
};

// PHASE 3: Aggressive multi-context injection
var contexts=[g];
if(typeof window!=='undefined'&&window!==g)contexts.push(window);
if(typeof global!=='undefined'&&global!==g)contexts.push(global);
if(typeof self!=='undefined'&&self!==g)contexts.push(self);

for(var i=0;i<contexts.length;i++){
var ctx=contexts[i];
for(var key in polyfills){
if(!ctx[key]){
try{
Object.defineProperty(ctx,key,{value:polyfills[key],writable:true,configurable:true,enumerable:false});
}catch(e){
ctx[key]=polyfills[key];
}
}
}
}

// PHASE 4: WEBPACK RUNTIME HIJACK - ULTIMATE INTERVENTION
if(typeof window!=='undefined'){
// Store references to polyfills in non-enumerable properties
Object.defineProperty(window,'__EMERGENCY_EXTENDS',{value:polyfills.__extends,writable:false,configurable:false});
Object.defineProperty(window,'__EMERGENCY_ASSIGN',{value:polyfills.__assign,writable:false,configurable:false});
Object.defineProperty(window,'__EMERGENCY_PROCESS',{value:polyfills.process,writable:false,configurable:false});

// ULTRA-AGGRESSIVE: Override global property access
var originalGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;
Object.getOwnPropertyDescriptor=function(obj,prop){
if(prop==='__extends'&&(!obj||!obj[prop])){
return {value:window.__EMERGENCY_EXTENDS,writable:true,configurable:true,enumerable:false};
}
if(prop==='__assign'&&(!obj||!obj[prop])){
return {value:window.__EMERGENCY_ASSIGN,writable:true,configurable:true,enumerable:false};
}
if(prop==='process'&&(!obj||!obj[prop])){
return {value:window.__EMERGENCY_PROCESS,writable:true,configurable:true,enumerable:false};
}
return originalGetOwnPropertyDescriptor.call(this,obj,prop);
};

// NUCLEAR: Override destructuring at the Object level
var originalKeys=Object.keys;
Object.keys=function(obj){
if(obj&&typeof obj==='object'){
var keys=originalKeys.call(this,obj);
if(keys.includes('__extends')&&!obj.__extends)obj.__extends=window.__EMERGENCY_EXTENDS;
if(keys.includes('__assign')&&!obj.__assign)obj.__assign=window.__EMERGENCY_ASSIGN;
if(keys.includes('process')&&!obj.process)obj.process=window.__EMERGENCY_PROCESS;
}
return originalKeys.call(this,obj);
};

// APOCALYPTIC: Proxy all object access
if(typeof Proxy!=='undefined'){
window.__ORIGINAL_OBJECT=Object;
window.Object=new Proxy(Object,{
get:function(target,prop){
if(prop==='__extends')return window.__EMERGENCY_EXTENDS;
if(prop==='__assign')return window.__EMERGENCY_ASSIGN;
if(prop==='process')return window.__EMERGENCY_PROCESS;
return target[prop];
}
});
}

console.log('🚨 APOCALYPTIC POLYFILL ACTIVE - WEBPACK RUNTIME HIJACKED');
}
})();

/* EMERGENCY WEBPACK REQUIRE OVERRIDE */
;(function(){
if(typeof window!=='undefined'){
var checkInterval=setInterval(function(){
if(typeof window.__webpack_require__!=='undefined'){
console.log('🚨 HIJACKING WEBPACK REQUIRE...');
var originalRequire=window.__webpack_require__;
window.__webpack_require__=function(moduleId){
// Ensure polyfills exist before ANY module execution
if(!window.__extends)window.__extends=window.__EMERGENCY_EXTENDS;
if(!window.__assign)window.__assign=window.__EMERGENCY_ASSIGN;
if(!window.process)window.process=window.__EMERGENCY_PROCESS;
if(!globalThis.__extends)globalThis.__extends=window.__EMERGENCY_EXTENDS;
if(!globalThis.__assign)globalThis.__assign=window.__EMERGENCY_ASSIGN;
if(!globalThis.process)globalThis.process=window.__EMERGENCY_PROCESS;
return originalRequire.apply(this,arguments);
};
// Copy all properties
for(var prop in originalRequire){
window.__webpack_require__[prop]=originalRequire[prop];
}
clearInterval(checkInterval);
}
},10);
// Stop trying after 5 seconds
setTimeout(function(){clearInterval(checkInterval)},5000);
}
})();
            `
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
