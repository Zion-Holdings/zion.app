#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

const requiredPages = [
  { file: 'pages/services/index.tsx', kind: 'file' },
  { file: 'pages/products/index.tsx', kind: 'file' },
  { file: 'pages/contact.tsx', kind: 'file' },
  { file: 'pages/services/ai-seo-auditor.tsx', kind: 'file' },
  { file: 'pages/services/customer-support-chatbot.tsx', kind: 'file' },
  { file: 'pages/services/landing-page-generator.tsx', kind: 'file' },
  { file: 'pages/services/price-intelligence-service.tsx', kind: 'file' },
];

function ensureFile(relPath, contents) {
  const abs = path.join(projectRoot, relPath);
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(abs)) {
    fs.writeFileSync(abs, contents, 'utf8');
    console.log(`Created missing page: ${relPath}`);
  }
}

const placeholder = (title, body) => `import Head from 'next/head';\nexport default function Page(){return(<div className=\"min-h-screen bg-slate-950 text-white\"><Head><title>${title}</title><meta name=\"description\" content=\"${body}\"/></Head><main className=\"container mx-auto px-6 py-16\"><h1 className=\"text-4xl font-bold\">${title}</h1><p className=\"mt-3 text-white/80\">${body}</p></main></div>)}\n`;

(function main(){
  for (const p of requiredPages) {
    if (p.kind === 'file') {
      const title = p.file.split('/').slice(-1)[0].replace(/\.tsx?$/, '').replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase());
      ensureFile(p.file, placeholder(title, 'Auto-created to prevent broken internal links.'));
    }
  }
  console.log('Site link fixer completed.');
})();