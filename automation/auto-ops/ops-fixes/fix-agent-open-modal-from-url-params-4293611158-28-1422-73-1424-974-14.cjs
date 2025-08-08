#!/usr/bin/env node
const fs = require('fs-extra');
const { exec } = require('child_process');

function run(cmd, options = {}) { return new Promise((r)=>exec(cmd, { ...options, maxBuffer: 10*1024*1024 }, (e,so,se)=>r({ok:!e, code:e?e.code:0, so:String(so||''), se:String(se||'')}))); }

(async () => {
  const target = "/workspace/automation/agent-open-modal-from-url-params-4293611158-28-1422-73-1424-974-14.cjs";
  const backup = target + '.bak.autoops';
  try {
    if (await fs.pathExists(target)) {
      await fs.copy(target, backup, { overwrite: true });
    }
    await run('npx --yes eslint --fix ' + JSON.stringify(target));
    // Normalize line endings to LF
    const data = await fs.readFile(target, 'utf8');
    const normalized = data.replace(/\r\n/g, '\n');
    if (normalized !== data) await fs.writeFile(target, normalized, 'utf8');

    const check = await run('node --check ' + JSON.stringify(target));
    if (!check.ok) {
      console.error('Post-fix syntax still failing. Reverting to backup. Error:', check.se || check.so);
      if (await fs.pathExists(backup)) await fs.copy(backup, target, { overwrite: true });
      process.exit(1);
    }
    console.log('✅ Fixed and validated:', target);
  } catch (e) {
    console.error('Fixer error:', e && e.message ? e.message : String(e));
    // Attempt revert
    try { if (await fs.pathExists(backup)) await fs.copy(backup, target, { overwrite: true }); } catch {}
    process.exit(1);
  }
})();
