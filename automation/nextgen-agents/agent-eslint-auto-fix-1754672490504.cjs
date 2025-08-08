#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logFile = path.join(__dirname, '..', 'logs', 'agent-eslint-auto-fix.log');
function log(m){ const t=new Date().toISOString(); const l=`[${t}] ${m}`; console.log(l); fs.appendFileSync(logFile, l+'
'); }
function run(cmd){ try{ return {ok:true,out:execSync(cmd,{encoding:'utf8',stdio:'pipe',cwd:path.join(__dirname,'..','..')})}; }catch(e){ return {ok:false,out:(e.stdout||e.stderr||e.message||'').toString()}; }}
(async()=>{
  log('ESLint agent starting...');
  let res = run('npm run lint');
  if(!res.ok){ log('Lint errors detected, attempting --fix'); run('npm run lint -- --fix'); }
  // Re-check once after fix
  res = run('npm run lint');
  log(res.ok ? 'Lint clean after fix' : 'Lint still failing after fix');
})();
