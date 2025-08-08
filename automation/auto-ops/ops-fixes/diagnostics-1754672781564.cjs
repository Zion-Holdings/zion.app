#!/usr/bin/env node
const { exec } = require('child_process');
function run(cmd) { return new Promise((r)=>exec(cmd, { maxBuffer: 10*1024*1024 }, (e,so,se)=>r({ok:!e, code:e?e.code:0, so:String(so||''), se:String(se||'')}))); }
(async () => {
  const scripts = ["autonomous:status","mcp:status","google-docs:status","design:status","syntax:status","linting:status"];
  for (const s of scripts) {
    const res = await run('npm run -s ' + s);
    console.log('Status for', s, '=> ok=', res.ok, 'code=', res.code);
    if (!res.ok) {
      console.log('--- stdout ---\n' + res.so);
      console.error('--- stderr ---\n' + res.se);
    }
  }
})();
