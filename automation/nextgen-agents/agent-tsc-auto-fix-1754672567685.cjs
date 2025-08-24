#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logFile = path.join(__dirname, '..', 'logs', 'agent-tsc-auto-fix.log');
function log(m){ const t=new Date().toISOString(); const l=`[${t}] ${m}`; console.log(l); fs.appendFileSync(logFile, l+'
'); }
function run(cmd){ try{ return {ok:true,out:execSync(cmd,{encoding:'utf8',stdio:'pipe',cwd:path.join(__dirname,'..','..')})}; }catch(e){ return {ok:false,out:(e.stdout||e.stderr||e.message||'').toString()}; }}
(async()=>{
  log('TSC agent starting...');
  let res = run('npm run type-check');
  if(!res.ok){
    log('Type errors detected, invoking syntax fixers');
    run('node fix_typescript_syntax_errors.cjs || true');
    run('node fix_all_typescript_errors.cjs || true');
  }
  res = run('npm run type-check');
  log(res.ok ? 'Type check clean after fix' : 'Type check still failing after fix');
})();
