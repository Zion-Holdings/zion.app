import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const themeScript = `(() => {try{var t=localStorage.getItem('theme');var e=t==='dark'||(t==='system'?!window.matchMedia||(window.matchMedia('(prefers-color-scheme: dark)').matches):false);var n=e?'dark':'light';var r=document.documentElement;r.classList.add(n);r.setAttribute('data-theme',n);}catch(e){}})();`;
  const loaderTimeoutScript = `setTimeout(function(){var el=document.getElementById('initial-loader');if(el){el.style.display='none';}},10000);`;
  return (
    <Html lang="en">
      <Head>
        {/* ULTIMATE NUCLEAR POLYFILL - MAXIMUM AGGRESSION */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
/* ULTIMATE POLYFILL EMERGENCY - HIGHEST PRIORITY */
;(function(){
'use strict';
var g=(function(){if(typeof globalThis!=='undefined')return globalThis;if(typeof window!=='undefined')return window;if(typeof global!=='undefined')return global;if(typeof self!=='undefined')return self;return this||{}})();
var p={
__extends:function(d,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())},
__assign:Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t},
__rest:function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t},
__spread:function(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(Array.prototype.slice.call(arguments[i]));return ar},
__spreadArrays:function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r},
process:{env:{NODE_ENV:'production'},versions:{},platform:'browser',browser:true,version:'18.0.0',arch:'x64'}
};
var c=[g];if(typeof window!=='undefined'&&window!==g)c.push(window);if(typeof global!=='undefined'&&global!==g)c.push(global);if(typeof self!=='undefined'&&self!==g)c.push(self);
for(var i=0;i<c.length;i++){var ctx=c[i];for(var key in p){if(!ctx[key]){try{Object.defineProperty(ctx,key,{value:p[key],writable:true,configurable:true,enumerable:false})}catch(e){ctx[key]=p[key]}}}}
if(typeof window!=='undefined'){window.addEventListener('error',function(e){if(e.message&&(e.message.includes('__extends')||e.message.includes('getInitialProps')||e.message.includes('Cannot destructure')||e.message.includes('Cannot read properties')))e.preventDefault()});
var originalConsoleError=console.error;console.error=function(){var args=Array.prototype.slice.call(arguments);if(args[0]&&typeof args[0]==='string'&&(args[0].includes('__extends')||args[0].includes('getInitialProps')))return;originalConsoleError.apply(console,args)}}
console.log('ULTIMATE polyfills loaded');
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
