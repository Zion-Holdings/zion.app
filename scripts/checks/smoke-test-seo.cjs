const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const outDir = path.join(repo, 'out');
const indexPath = path.join(outDir, 'index.html');
const testimonialsPath = path.join(outDir, 'testimonials', 'index.html');

function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    process.exitCode = 1;
    return;
  }
  console.log('PASS:', message);
}

function main() {
  const results = {
    checkedAt: new Date().toISOString(),
    indexExists: fs.existsSync(indexPath),
    testimonialsExists: fs.existsSync(testimonialsPath),
  };

  assert(results.indexExists, 'static export exists: out/index.html');
  assert(results.testimonialsExists, 'testimonials page exists: out/testimonials/index.html');

  if (results.indexExists) {
    const html = fs.readFileSync(indexPath, 'utf8');
    assert(html.includes('"@type":"Organization"'), 'index page includes Organization JSON-LD');
    assert(html.includes('"aggregateRating"'), 'index page includes AggregateRating JSON-LD');
    assert(html.includes('sameAs'), 'index page Organization includes sameAs');
  }

  if (results.testimonialsExists) {
    const html = fs.readFileSync(testimonialsPath, 'utf8');
    assert(html.includes('"@type":"AggregateRating"'), 'testimonials page includes AggregateRating JSON-LD');
    assert(html.includes('"@type":"Review"'), 'testimonials page includes Review JSON-LD');
    assert(html.includes('"@type":"BreadcrumbList"'), 'testimonials page includes BreadcrumbList JSON-LD');
  }

  const reportPath = path.join(repo, 'automation', 'reports', 'smoke-test-seo-latest.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log('wrote', reportPath);
}

try { main(); } catch (e) { console.error(e); process.exit(1); }
