#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..', '..', 'pages');
const APPLY = process.env.MONETIZATION_APPLY === 'true';
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  if(!APPLY){ console.log('signup-factory: MONETIZATION_APPLY is not true; skipping apply.'); return; }
  const authDir = path.join(PAGES_DIR, 'auth');
  ensureDir(authDir);
  const target = path.join(authDir, 'signup.tsx');
  if(fs.existsSync(target)){ console.log('Signup page exists; skipping.'); return; }
  const body = 'import React from 'react';
export default function Signup(){ return (<div><h1>Start your free trial</h1><form><input placeholder=\"Email\"/><button>Start</button></form></div>); }
';
  fs.writeFileSync(target, body);
  console.log('Created signup page at', target);
}
main();
