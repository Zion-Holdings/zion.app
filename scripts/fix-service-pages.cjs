#!/usr/bin/env node
/**
 * Fix service pages that were damaged by bad automation:
 * - Replaced Layout import with empty next/navigation import
 * - Stripped all styling (purple/pink accents, responsive classes)
 *
 * This restores proper self-contained pages with:
 * - Correct metadata with title, description, canonical URL
 * - Proper dark theme styling (slate-950, purple/pink accents)
 * - Gradient pricing section
 * - Calendly CTA button
 * No external component dependencies.
 */
const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const repo = process.cwd();

const changedFiles = execSync(
  'git diff --name-only -- "app/services/*/page.tsx"',
  { cwd: repo, encoding: 'utf8' }
).trim().split('\n').filter(f => f.endsWith('page.tsx'));

console.log('Found ' + changedFiles.length + ' changed service page files.');

let fixed = 0;
let skipped = 0;
const errors = [];

function jsStr(s) {
  return JSON.stringify(s);
}

for (const file of changedFiles) {
  try {
    const fullPath = path.join(repo, file);
    const content = fs.readFileSync(fullPath, 'utf8');

    // Check if this page uses PageTemplate (from first fix attempt)
    if (content.includes("import PageTemplate from '@/components/PageTemplate'")) {
      // Need to convert from PageTemplate to self-contained
      const match = file.match(/^app\/services\/(.+)\/page\.tsx$/);
      if (!match) {
        errors.push('Could not parse slug from: ' + file);
        continue;
      }
      const slug = match[1];
      const canonicalUrl = 'https://ziontechgroup.com/services/' + slug;

      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      const descMatch = content.match(/description:\s*"([^"]*)"/);
      const title = titleMatch ? titleMatch[1] : 'AI-Powered Solution';
      const description = descMatch ? descMatch[1] : '';
      let serviceName = title.split(' - Zion Tech Group')[0].trim();

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
      continue;
    }

    // Check if this page has the bare main pattern from first fix (not yet PageTemplate)
    if (content.includes("import { } from 'next/navigation';")) {
      const match = file.match(/^app\/services\/(.+)\/page\.tsx$/);
      if (!match) {
        errors.push('Could not parse slug from: ' + file);
        continue;
      }
      const slug = match[1];
      const canonicalUrl = 'https://ziontechgroup.com/services/' + slug;

      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      const descMatch = content.match(/description:\s*"([^"]*)"/);
      const title = titleMatch ? titleMatch[1] : 'AI-Powered Solution';
      const description = descMatch ? descMatch[1] : '';
      let serviceName = title.split(' - Zion Tech Group')[0].trim();

      // Extract features from current page
      const features = [];
      const liMatches = content.matchAll(/<li>([^<]+)<\/li>/g);
      for (const m of liMatches) {
        let text = m[1].trim();
        if (text && !text.includes('Book') && !text.includes('Consultation') && !text.includes('Contact Us') && !text.includes('<')) {
          features.push(text);
        }
      }

      const featureLines = features.slice(0, 8).length > 0
        ? features.slice(0, 8).map(f => '            <li className="text-purple-300">✓ ' + f.replace(/&/g, '&amp;') + '</li>').join('\n')
        : '            <li className="text-purple-300">✓ AI-powered automation</li>\n            <li className="text-purple-300">✓ Real-time analytics</li>\n            <li className="text-purple-300">✓ Enterprise security</li>\n            <li className="text-purple-300">✓ API-first design</li>\n            <li className="text-purple-300">✓ Scalable architecture</li>';

      let newContent = [
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
        featureLines,
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
    } else {
      skipped++;
    }

    if (fixed % 500 === 0 && fixed > 0) {
      console.log('Progress: ' + fixed + ' files fixed...');
    }
  } catch (e) {
    errors.push(file + ': ' + e.message);
  }
}

console.log('Fixed: ' + fixed + ', Skipped: ' + skipped + ', Errors: ' + errors.length);
if (errors.length > 0) {
  console.error('Errors:', errors.slice(0, 20));
}
console.log('Done.');
