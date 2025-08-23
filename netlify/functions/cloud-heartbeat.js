exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');
  try {
    const outDir = path.join(process.cwd(), 'public', 'automation');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'heartbeat.json');
    const payload = {
      ok: true,
      name: 'cloud-heartbeat',
      timestamp: new Date().toISOString(),
      note: 'Autonomous cloud automations are live. This file is updated by a scheduled Netlify Function.'
    };
    fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));

    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add -A', { stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(automation): update cloud heartbeat [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch (_) {}

    return { statusCode: 200, body: JSON.stringify(payload) };
  } catch (err) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(err && err.stack || err) }) };
  }
};