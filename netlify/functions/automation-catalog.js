exports.handler = async function(event, context) {
  const fs = require('fs');
  const path = require('path');

  function readJson(p) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }
  function listAutomationScripts() {
    const dir = path.join(process.cwd(), 'automation');
    const items = [];
    try {
      for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        const stat = fs.statSync(full);
        if (stat.isFile() && /\.(cjs|js|mjs|ts)$/.test(name)) {
          items.push({ type: 'script', name, path: `automation/${name}` });
        }
      }
    } catch {}
    return items;
  }

  function listNetlifyFunctions() {
    const manifest = readJson(path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json'));
    if (!manifest || !Array.isArray(manifest.functions)) return [];
    return manifest.functions.map((fn) => ({ type: 'function', name: fn, href: `/.netlify/functions/${fn}` }));
  }

  const catalog = {
    generatedAt: new Date().toISOString(),
    functions: listNetlifyFunctions(),
    scripts: listAutomationScripts()
  };

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catalog)
  };
};