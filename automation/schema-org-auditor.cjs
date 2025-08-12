const fs = require('fs');
const path = require('path');
const glob = require('glob');

function scanForJsonLd(content) {
  const hasScriptTag = /<script[^>]+application\/ld\+json/i.test(content);
  const hasSeoHead = new RegExp('schema\\.org', 'i').test(content) || new RegExp('"@context"\\s*:\\s*"https?:\\/\\/schema\\.org"', 'i').test(content);
  return { hasScriptTag, hasSeoHead };
}

function main() {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  const files = glob.sync('**/*.{js,jsx,ts,tsx}', { cwd: pagesDir, nodir: true });
  const results = [];
  for (const rel of files) {
    const full = path.join(pagesDir, rel);
    let content = '';
    try { content = fs.readFileSync(full, 'utf8'); } catch(e) {}
    const { hasScriptTag, hasSeoHead } = scanForJsonLd(content);
    results.push({ file: `pages/${rel}`, hasScriptTag, hasSeoHead });
  }

  const coverage = {
    total: results.length,
    withJsonLd: results.filter(r => r.hasScriptTag || r.hasSeoHead).length,
  };

  const suggestions = [];
  for (const r of results) {
    if (!r.hasScriptTag && !r.hasSeoHead) {
      suggestions.push({ file: r.file, suggestion: 'Add JSON-LD structured data for better SEO.' });
    }
  }

  const out = {
    generatedAt: new Date().toISOString(),
    coverage,
    suggestions: suggestions.slice(0, 200),
  };

  const publicOut = path.resolve(process.cwd(), 'public', 'automation', 'schema-audit.json');
  fs.mkdirSync(path.dirname(publicOut), { recursive: true });
  fs.writeFileSync(publicOut, JSON.stringify(out, null, 2));
  console.log('Schema.org audit written:', publicOut);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(0); }
}