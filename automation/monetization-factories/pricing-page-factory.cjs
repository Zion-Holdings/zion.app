#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..', '..', 'pages');
const APPLY = process.env.MONETIZATION_APPLY === 'true';
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  if(!APPLY){ console.log('pricing-page-factory: MONETIZATION_APPLY is not true; skipping apply.'); return; }
  const target = path.join(PAGES_DIR, 'pricing.tsx');
  if(fs.existsSync(target)){ console.log('Pricing page exists; skipping.'); return; }
  const body = 'import React from 'react';
export default function Pricing(){ return (<div><h1>Pricing</h1><p>Starter, Pro, Enterprise.</p></div>); }
';
  fs.writeFileSync(target, body);
  console.log('Created pricing page at', target);
}
main();
