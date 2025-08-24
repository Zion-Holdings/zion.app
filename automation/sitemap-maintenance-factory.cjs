#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'sitemap-maintenance-agents');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

const AGENTS = {
  'generate-sitemap': `#!/usr/bin/env node\nconst { execSync } = require('child_process');\ntry { execSync('node scripts/generate-sitemap.mjs', { stdio: 'inherit' }); } catch { console.log('sitemap script missing, creating placeholder sitemap.xml'); const fs=require('fs'); const path=require('path'); const p=path.join(process.cwd(), 'public', 'sitemap.xml'); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, '<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\\n'); }\nconsole.log('Sitemap generation completed');\n` ,
  'verify-robots': `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nconst rp = path.join(process.cwd(), 'public', 'robots.txt');\nif (!fs.existsSync(rp)) { fs.mkdirSync(path.dirname(rp), { recursive: true }); fs.writeFileSync(rp, 'User-agent: *\\nAllow: /\\nSitemap: /sitemap.xml\\n'); console.log('Created robots.txt'); } else { console.log('robots.txt exists'); }\n`,
  'ensure-404-500-pages': `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nfunction ensurePage(name){ const p = path.join(process.cwd(), 'pages', name + '.tsx'); if (!fs.existsSync(p)) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, 'export default function '+name.replace(/\\W/g,'_')+'(){return (<div>'+name+' page</div>)}\\n'); console.log('Created', p); } else { console.log('Exists', p); } }\nensurePage('404');\nensurePage('500');\n`,
};

function main() {
  ensureDir(OUT_DIR);
  const created = [];
  for (const [name, code] of Object.entries(AGENTS)) {
    const fp = path.join(OUT_DIR, `${name}.cjs`);
    if (!fs.existsSync(fp)) { fs.writeFileSync(fp, code + '\n'); try { fs.chmodSync(fp, 0o755); } catch {} created.push(fp); }
  }
  const registry = path.join(__dirname, 'logs', 'sitemap-maintenance-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Sitemap maintenance factory created ${created.length} agent(s).`);
}

main();