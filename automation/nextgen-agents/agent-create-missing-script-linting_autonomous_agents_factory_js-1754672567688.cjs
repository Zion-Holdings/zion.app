#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '..', 'logs', 'agent-create-missing-script.log');
function log(m){ const t=new Date().toISOString(); const l=`[${t}] ${m}`; console.log(l); fs.appendFileSync(logFile, l+'
'); }
(function(){
  const target = path.join(__dirname,'..','..','automation/linting-autonomous-agents-factory.js');
  if (fs.existsSync(target)) { log('Target already exists: automation/linting-autonomous-agents-factory.js'); return; }
  const dir = path.dirname(target);
  fs.mkdirSync(dir, { recursive: true });
  const stub = '#!/usr/bin/env node
console.log('Stub for linting-autonomous-agents-factory.js');
';
  fs.writeFileSync(target, stub);
  try { fs.chmodSync(target, 0o755); } catch(_){}
  log('Created stub script: automation/linting-autonomous-agents-factory.js');
})();
