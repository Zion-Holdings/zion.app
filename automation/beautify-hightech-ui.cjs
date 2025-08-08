#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'ui-evolution');
const SUGGESTIONS_FILE = path.join(REPORT_DIR, 'beautify-suggestions.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function main() {
  ensureDir(REPORT_DIR);
  const suggestions = [];
  const themeHints = {
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    neon: 'text-cyan-400 hover:text-cyan-300',
    card: 'rounded-xl border border-gray-800/50 bg-black/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)]',
    button: 'inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white transition-all',
    glass: 'bg-white/5 backdrop-blur supports-backdrop-blur:bg-white/10',
  };

  const targets = [
    path.join(__dirname, '..', 'components'),
    path.join(__dirname, '..', 'pages')
  ];

  for (const dir of targets) {
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) continue;
      if (!/\.(tsx|ts|jsx|js)$/.test(entry)) continue;
      const src = fs.readFileSync(full, 'utf8');
      const rec = { file: full, hints: [] };
      if (!/dark:/.test(src)) rec.hints.push({ type: 'theme', message: 'Add dark mode Tailwind variants for a high-tech look' });
      if (!/class(Name)?=.*gradient/.test(src)) rec.hints.push({ type: 'style', message: `Use gradient hero backgrounds like: ${themeHints.gradient}` });
      if (!/InteractiveNavigation|EnhancedNavigation/.test(src) && /Navigation|Navbar|Header/.test(src)) rec.hints.push({ type: 'component', message: 'Adopt EnhancedNavigation for futuristic nav interactions' });
      if (/Button|btn|<a\s+/.test(src)) rec.hints.push({ type: 'style', message: `Adopt high-tech button style: ${themeHints.button}` });
      if (/Card|Panel|Section/.test(src)) rec.hints.push({ type: 'style', message: `Adopt glassy card style: ${themeHints.card}` });
      if (rec.hints.length) suggestions.push(rec);
    }
  }

  fs.writeFileSync(SUGGESTIONS_FILE, JSON.stringify({ timestamp: new Date().toISOString(), suggestions }, null, 2));
  console.log(`Beautify suggestions generated: ${suggestions.length} files with hints`);
}

if (require.main === module) main();