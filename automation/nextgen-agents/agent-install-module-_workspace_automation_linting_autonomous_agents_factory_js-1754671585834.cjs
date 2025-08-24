#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logFile = path.join(__dirname, '..', 'logs', 'agent-install-module.log');
function log(m){ const t=new Date().toISOString(); const l=`[${t}] ${m}`; console.log(l); fs.appendFileSync(logFile, l+'
'); }
function run(cmd){ try{ return {ok:true,out:execSync(cmd,{encoding:'utf8',stdio:'pipe',cwd:path.join(__dirname,'..','..')})}; }catch(e){ return {ok:false,out:(e.stdout||e.stderr||e.message||'').toString()}; }}
(async()=>{
  log('Attempting to install missing module: /workspace/automation/linting-autonomous-agents-factory.js');
  const res = run('npm i /workspace/automation/linting-autonomous-agents-factory.js');
  log(res.ok ? 'Installed /workspace/automation/linting-autonomous-agents-factory.js' : 'Failed to install /workspace/automation/linting-autonomous-agents-factory.js');
})();
