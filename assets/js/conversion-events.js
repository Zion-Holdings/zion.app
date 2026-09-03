function ztgEmit(name){try{const d={event:'ztg_conversion',name,url:location.href,ts:Date.now()};console.log('[ZTG]',d);}catch(e){}}
document.addEventListener('click',function(e){const a=e.target.closest('a[href="/contact/"], a[href="/free-consultation/"], a[href="/free-ai-itools/"], a[href="/services/"], a[href="https://calendly.com/kleber-ziontechgroup"]'); if(a) ztgEmit('cta_click');});
