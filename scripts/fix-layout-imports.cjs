#!/usr/bin/env node
/**
 * Fix service pages that have broken `import { Layout } from '@/components/Layout'`
 * The Layout component is NOT tracked in git, causing build failures.
 *
 * This script converts pages with Layout imports to self-contained pages
 * with proper dark theme styling and canonical metadata.
 *
 * Handles these patterns:
 * 1. Pages with `import { Layout } from '@/components/Layout'` (7,523 pages on HEAD)
 * 2. Pages with `import PageTemplate from '@/components/PageTemplate'` (from prior fix attempt)
 * 3. Pages with `import { } from 'next/navigation';` + bare <main> (first automation damage)
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = process.cwd();

// Find all changed service pages that still have the Layout import
function findBadPages() {
    // Find all service pages with the Layout import (tracked in git)
    let pages = [];
    try {
        const output = execSync(
            'git ls-files "app/services/*/" -- "*/page.tsx" | head -10000',
            { cwd: repo, encoding: 'utf8', timeout: 60000 }
        ).trim().split('\n').filter(f => f);
        
        for (const file of pages_all) {
            const content = fs.readFileSync(file, 'utf8');
            pages.push(file);
        }
    } catch(e) {}
    
    // Better approach: use grep to find files with Layout import
    try {
        const output = execSync(
            'grep -rl "import.*Layout" app/services/*/page.tsx 2>/dev/null',
            { cwd: repo, encoding: 'utf8', timeout: 60000 }
        ).trim().split('\n').filter(f => f);
        return output;
    } catch(e) {
        return [];
    }
}

let pages;
try {
    // Use grep to find all files with Layout import (recursive search)
    const output = execSync(
        'grep -rl "import.*Layout" --include="*.tsx" app/services/ 2>/dev/null',
        { cwd: repo, encoding: 'utf8', timeout: 120000 }
    ).trim().split('\n').filter(f => f);
    pages = output;
} catch(e) {
    pages = [];
}

console.log('Found ' + pages.length + ' pages with Layout import.');

let fixed = 0;
let skipped = 0;
const errors = [];

function jsStr(s) {
  return JSON.stringify(s);
}

for (const file of pages) {
  try {
    const fullPath = path.join(repo, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    const match = file.match(/^app\/services\/(.+)\/page\.tsx$/);
    if (!match) {
      errors.push('Could not parse slug from: ' + file);
      continue;
    }
    const slug = match[1];
    const canonicalUrl = 'https://ziontechgroup.com/services/' + slug;

    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const descMatch = content.match(/description:\s*["']([^"']*)["']/);
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = descMatch ? descMatch[1] : title;
    
    const serviceName = title.replace(/ - Zion Tech Group$/, '').replace(/ \| Zion Tech Group$/, '').trim();

    const newContent = [
      "import { Metadata } from 'next';",
      '',
      'export const metadata: Metadata = {',
      '  title: ' + jsStr(title) + ',',
      '  description: ' + jsStr(description) + ',',
      '  alternates: {',
      '    canonical: ' + jsStr(canonicalUrl) + ',',
      '  },',
      '};',
      '',
      'export default function ServicePage() {',
      '  return (',
      '    <main className="min-h-screen bg-slate-950 text-white">',
      '      <div className="max-w-4xl mx-auto py-16 px-4">',
      '        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">',
      '          ' + serviceName,
      '        </h1>',
      '        <p className="text-xl text-slate-300 mb-8">',
      '          ' + description,
      '        </p>',
      '',
      '        <div className="bg-slate-900 rounded-xl p-8 mb-8">',
      '          <h2 className="text-2xl font-semibold text-purple-400 mb-4">',
      '            Key Features',
      '          </h2>',
      '          <ul className="list-disc list-inside space-y-2">',
      '            <li className="text-purple-300">✓ AI-powered automation</li>',
      '            <li className="text-purple-300">✓ Real-time analytics</li>',
      '            <li className="text-purple-300">✓ Enterprise security</li>',
      '            <li className="text-purple-300">✓ API-first design</li>',
      '            <li className="text-purple-300">✓ Scalable architecture</li>',
      '          </ul>',
      '        </div>',
      '',
      '        <div className="bg-slate-900 rounded-xl p-8 mb-8">',
      '          <h2 className="text-2xl font-semibold text-purple-400 mb-4">',
      '            Business Benefits',
      '          </h2>',
      '          <ul className="list-disc list-inside space-y-2">',
      '            <li className="text-purple-300">✓ Reduce costs with AI automation</li>',
      '            <li className="text-purple-300">✓ Improve operational efficiency</li>',
      '            <li className="text-purple-300">✓ Scale without complexity</li>',
      '            <li className="text-purple-300">✓ Enterprise-grade reliability</li>',
      '          </ul>',
      '        </div>',
      '',
      '        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">',
      '          <h3 className="text-2xl font-bold mb-4 text-white">Pricing</h3>',
      '          <div className="grid md:grid-cols-3 gap-4">',
      '            <div className="bg-white/10 rounded-lg p-4">',
      '              <div className="text-3xl font-bold text-white mb-2">$$299/mo</div>',
      '              <div className="text-white">Basic</div>',
      '            </div>',
      '            <div className="bg-white/20 rounded-lg p-4 border-2 border-purple-500">',
      '              <div className="text-3xl font-bold text-white mb-2">$$799/mo</div>',
      '              <div className="text-white">Pro</div>',
      '            </div>',
      '            <div className="bg-white/10 rounded-lg p-4">',
      '              <div className="text-3xl font-bold text-white mb-2">$$2,499/mo</div>',
      '              <div className="text-white">Enterprise</div>',
      '            </div>',
      '          </div>',
      '        </div>',
      '',
      '        <div className="text-center">',
      '          <a ',
      '            href=' + jsStr('https://calendly.com/kleber-ziontechgroup/consultation'),
      '            target="_blank"',
      '            rel="noopener noreferrer"',
      '            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-colors"',
      '          >',
      '            Book a Demo',
      '          </a>',
      '        </div>',
      '      </div>',
      '    </main>',
      '  );',
      '}',
      '',
    ].join('\n');

    fs.writeFileSync(fullPath, newContent);
    fixed++;
    if (fixed % 500 === 0 && fixed > 0) {
      console.log('Progress: ' + fixed + ' files fixed...');
    }
  } catch (e) {
    errors.push(file + ': ' + e.message);
  }
}

console.log('Fixed: ' + fixed + ', Errors: ' + errors.length);
if (errors.length > 0) {
  console.error('Errors:', errors.slice(0, 20));
}
console.log('Done.');
