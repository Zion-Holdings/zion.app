const fs = require('fs');
const path = require('path');
const glob = require('glob');

function analyzeComponent(content) {
  const hasAny = /:\s*any\b/.test(content);
  const hasInterface = /interface\s+\w+Props\s*\{[\s\S]*?\}/m.test(content) || /type\s+\w+Props\s*=\s*\{[\s\S]*?\}/m.test(content);
  const hasFC = /React\.FC<\w+Props>/.test(content) || /function\s+\w+\(props:\s*\w+Props\)/.test(content) || /\(\s*props\s*:\s*\w+Props\s*\)/.test(content);
  return { hasAny, hasInterface, hasFC };
}

function main() {
  const compDir = path.resolve(process.cwd(), 'components');
  const files = glob.sync('**/*.{tsx,ts,jsx,js}', { cwd: compDir, nodir: true });
  const results = [];
  for (const rel of files) {
    const full = path.join(compDir, rel);
    let content = '';
    try { content = fs.readFileSync(full, 'utf8'); } catch(e) {}
    const stats = analyzeComponent(content);
    results.push({ file: `components/${rel}`, ...stats });
  }
  const summary = {
    total: results.length,
    anyCount: results.filter(r => r.hasAny).length,
    withPropsTypes: results.filter(r => r.hasInterface || r.hasFC).length,
    typedCoveragePct: results.length ? Math.round(100 * (results.filter(r => r.hasInterface || r.hasFC).length) / results.length) : 0,
  };
  const out = { generatedAt: new Date().toISOString(), summary, results: results.slice(0, 500) };
  const publicOut = path.resolve(process.cwd(), 'public', 'automation', 'component-prop-coverage.json');
  fs.mkdirSync(path.dirname(publicOut), { recursive: true });
  fs.writeFileSync(publicOut, JSON.stringify(out, null, 2));
  console.log('Component prop coverage written:', publicOut);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(0); }
}