#!/usr/bin/env node
/**
 * Fix ALL broken service pages on hero-carousel branch.
 * Handles: `import { Layout } from '@/components/Layout'` and
 *          `import { } from 'next/navigation'` + bare <main>
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = process.cwd();

function jsStr(s) {
  return JSON.stringify(s);
}

function isBadPage(content) {
    return content.includes("import { Layout } from '@/components/Layout'") ||
           content.includes("import { } from 'next/navigation'");
}

function generateFixedPage(slug, title, description) {
    const canonicalUrl = 'https://ziontechgroup.com/services/' + slug;
    const serviceName = title.replace(/ - Zion Tech Group$/, '').replace(/ \| Zion Tech Group$/, '').trim();
    if (!description) description = serviceName;
    
    return [
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
      '          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Key Features</h2>',
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
      '          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Business Benefits</h2>',
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
      '              <div className="text-3xl font-bold text-white mb-2">$299/mo</div>',
      '              <div className="text-white">Basic</div>',
      '            </div>',
      '            <div className="bg-white/20 rounded-lg p-4 border-2 border-purple-500">',
      '              <div className="text-3xl font-bold text-white mb-2">$799/mo</div>',
      '              <div className="text-white">Pro</div>',
      '            </div>',
      '            <div className="bg-white/10 rounded-lg p-4">',
      '              <div className="text-3xl font-bold text-white mb-2">$2,499/mo</div>',
      '              <div className="text-white">Enterprise</div>',
      '            </div>',
      '          </div>',
      '        </div>',
      '',
      '        <div className="text-center">',
      '          <a href=' + jsStr('https://calendly.com/kleber-ziontechgroup/consultation') + ' target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-colors">',
      '            Book a Demo',
      '          </a>',
      '        </div>',
      '      </div>',
      '    </main>',
      '  );',
      '}',
      '',
    ].join('\n');
}

// Use grep to find files with bad imports
const output = execSync(
    'grep -rl "import.*Layout\|import { } from .next/navigation." --include="page.tsx" app/services/ 2>/dev/null',
    { cwd: repo, encoding: 'utf8', timeout: 120000 }
).trim().split('\n').filter(f => f);

console.log('Found ' + output.length + ' pages to fix.');

let fixed = 0;
let skipped = 0;
const errors = [];

for (let i = 0; i < output.length; i++) {
    const file = output[i];
    try {
        const fullPath = path.join(repo, file);
        const content = fs.readFileSync(fullPath, 'utf8');
        
        if (!isBadPage(content)) {
            skipped++;
            continue;
        }
        
        const match = file.match(/^app\/services\/(.+)\/page\.tsx$/);
        if (!match) {
            errors.push('Could not parse slug: ' + file);
            continue;
        }
        
        const slug = match[1];
        
        // Try to extract title and description from existing content
        let title = '';
        let description = '';
        
        const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
        const descMatch = content.match(/description:\s*["']([^"']*)["']/);
        if (titleMatch) title = titleMatch[1];
        if (descMatch) description = descMatch[1];
        
        if (!title) {
            const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
            if (h1Match) title = h1Match[1].trim();
        }
        
        if (!title) {
            title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
        
        const newContent = generateFixedPage(slug, title, description);
        fs.writeFileSync(fullPath, newContent);
        fixed++;
        
        if (fixed % 2000 === 0) {
            console.log('Progress: ' + fixed + ' fixed, ' + (i - fixed + 1) + ' remaining...');
        }
    } catch (e) {
        errors.push(file + ': ' + e.message);
    }
}

console.log('=== SUMMARY ===');
console.log('Total to check: ' + output.length);
console.log('Fixed: ' + fixed);
console.log('Skipped (already good): ' + skipped);
console.log('Errors: ' + errors.length);
if (errors.length > 0) console.error('Errors:', errors.slice(0, 20));
console.log('Done.');
