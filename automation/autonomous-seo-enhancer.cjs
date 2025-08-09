#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJsonSafe(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function generateSuggestion(file, meta) {
  const base = path.basename(file, '.json');
  const title = meta?.title || base.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  return {
    page: base,
    currentTitle: meta?.title || null,
    suggestedTitle: `${title} | Zion`,
    suggestedDescription: meta?.description || `Explore ${title} resources and insights from Zion.`,
    suggestedKeywords: Array.from(new Set([...(meta?.keywords || []), 'Zion', 'Academy', 'AI', 'DevOps'])).slice(0, 10)
  };
}

async function main() {
  const root = process.cwd();
  const metaDir = path.join(root, 'data', 'page-metadata');
  const outDir = path.join(root, 'data', 'reports');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(metaDir).filter((f) => f.endsWith('.json'));
  const suggestions = [];
  for (const f of files) {
    const full = path.join(metaDir, f);
    const meta = readJsonSafe(full) || {};
    suggestions.push(generateSuggestion(f, meta));
  }

  const out = { generatedAt: new Date().toISOString(), suggestions };
  fs.writeFileSync(path.join(outDir, 'seo-suggestions.json'), JSON.stringify(out, null, 2));

  // Create a page to view suggestions
  const pagePath = path.join(root, 'pages', 'admin', 'seo-suggestions.tsx');
  const page = `import data from '../../data/reports/seo-suggestions.json';\n\nexport default function SEOSuggestions(){\n  const d = data as any;\n  return (\n    <div className=\"py-10 space-y-4\">\n      <h1 className=\"text-2xl font-semibold\">SEO Suggestions</h1>\n      <div className=\"text-sm text-gray-500\">Updated: {new Date(d.generatedAt).toLocaleString()}</div>\n      <div className=\"overflow-auto\">\n        <table className=\"min-w-full text-sm\">\n          <thead>\n            <tr className=\"text-left\"><th className=\"p-2\">Page</th><th className=\"p-2\">Current</th><th className=\"p-2\">Suggested</th></tr>\n          </thead>\n          <tbody>\n            {d.suggestions?.map((s: any, i: number) => (\n              <tr key={i} className=\"border-t border-gray-200 dark:border-gray-800\">\n                <td className=\"p-2\">{s.page}</td>\n                <td className=\"p-2\">{s.currentTitle || '—'}</td>\n                <td className=\"p-2\">{s.suggestedTitle}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}\n`;
  fs.writeFileSync(pagePath, page);
  console.log('SEO suggestions updated.');
}

main().catch((e)=>{ console.error(e); process.exitCode = 1; });