#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..', '..', 'pages');
const APPLY = process.env.MONETIZATION_APPLY === 'true';
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  if(!APPLY){ console.log('checkout-stub-factory: MONETIZATION_APPLY is not true; skipping apply.'); return; }
  const apiDir = path.join(PAGES_DIR, 'api');
  ensureDir(apiDir);
  const target = path.join(apiDir, 'checkout.ts');
  if(fs.existsSync(target)){ console.log('Checkout API stub exists; skipping.'); return; }
  const body = 'export default function handler(req, res){ res.status(200).json({ ok: true, message: 'Checkout stub' }); }
';
  fs.writeFileSync(target, body);
  console.log('Created checkout API stub at', target);
}
main();
