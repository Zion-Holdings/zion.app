/**
 * Migrate AI simple pages and simple stub pages to StandardPageLayout.
 * 
 * Usage: node scripts/migrate-stub-pages.cjs
 * 
 * Targets two patterns:
 * 1. AI simple pages (ai-fraud-detection style): emerald links, two-button CTAs
 * 2. Simple stub pages: container-page py-20, minimal h1 + description + buttons
 */

const fs = require('fs');
const path = require('path');
const APP_DIR = path.join(__dirname, '..', 'app');

// Color inference based on directory name keywords
function inferColor(dirName, content) {
  // Check for explicit color in existing content
  const colorMap = {
    'red': 'from-red-500 to-orange-500',
    'green': 'from-green-500 to-emerald-500',
    'blue': 'from-blue-500 to-cyan-500',
    'teal': 'from-teal-500 to-green-500',
    'sky': 'from-sky-400 to-blue-600',
    'purple': 'from-purple-500 to-indigo-500',
    'amber': 'from-amber-500 to-orange-500',
    'orange': 'from-orange-500 to-amber-500',
    'cyan': 'from-cyan-500 to-blue-500',
    'yellow': 'from-yellow-500 to-amber-600',
    'pink': 'from-pink-500 to-rose-500',
    'indigo': 'from-indigo-500 to-purple-600',
    'emerald': 'from-emerald-500 to-teal-500',
    'fuchsia': 'from-fuchsia-500 to-pink-600',
  };

  const found = content.match(/border-(emerald|red|green|blue|teal|sky|purple|amber|orange|cyan|yellow|pink|indigo|fuchsia)-400/);
  if (found) {
    return colorMap[found[1]] || 'from-purple-500 to-indigo-500';
  }
  
  // Check bg gradient
  const bgMatch = content.match(/bg-gradient-to-r\s+from-(emerald|red|green|blue|teal|sky|purple|amber|orange|cyan|yellow|pink|indigo|fuchsia)-500/);
  if (bgMatch) {
    return colorMap[bgMatch[1]] || 'from-purple-500 to-indigo-500';
  }
  
  // Default based on keywords in directory name
  if (dirName.includes('security') || dirName.includes('fraud') || dirName.includes('shield') || dirName.includes('threat')) {
    return 'from-red-500 to-orange-500';
  }
  if (dirName.includes('cloud') || dirName.includes('infrastructure')) {
    return 'from-sky-400 to-blue-600';
  }
  if (dirName.includes('data') || dirName.includes('analytics') || dirName.includes('bi')) {
    return 'from-green-500 to-emerald-500';
  }
  if (dirName.includes('automation') || dirName.includes('workflow')) {
    return 'from-pink-500 to-rose-500';
  }
  if (dirName.includes('devops') || dirName.includes('platform')) {
    return 'from-cyan-500 to-blue-500';
  }
  if (dirName.includes('blockchain') || dirName.includes('crypto')) {
    return 'from-yellow-500 to-amber-600';
  }
  if (dirName.includes('saas') || dirName.includes('micro')) {
    return 'from-amber-500 to-orange-500';
  }
  if (dirName.includes('iot') || dirName.includes('edge')) {
    return 'from-teal-500 to-green-500';
  }
  return 'from-purple-500 to-indigo-500';
}

function dirToTitle(dirName) {
  const parts = dirName.split('-').map(w => {
    if (w === 'ai') return 'AI';
    if (w === 'it') return 'IT';
    if (w === 'saas') return 'SaaS';
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  });
  return parts.join(' ');
}

/**
 * Extract metadata and content from a page file
 */
function extractPageInfo(content, dirName) {
  let title = dirToTitle(dirName);
  let description = '';
  let metaTitle = '';
  let metaDescription = '';
  
  // Try extracting from metadata block
  const metaMatch = content.match(/export const metadata\s*=\s*\{([\s\S]*?)\};/);
  if (metaMatch) {
    const metaContent = metaMatch[1];
    const titleM = metaContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descM = metaContent.match(/description:\s*['"`]([^'"`]+)['"`]/);
    if (titleM) {
      metaTitle = titleM[1].trim();
      title = metaTitle.replace(/\s*\|\s*Zion Tech Group$/, '').trim();
    }
    if (descM) metaDescription = descM[1].trim();
  }

  // Try extracting from h1
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  if (h1Match) {
    const h1Title = h1Match[1].replace(/<[^>]+>/g, '').trim();
    if (h1Title) title = h1Title;
  }

  // Try extracting description from <p> tags
  if (!description) {
    const pMatch = content.match(/<p[^>]*>(.*?)<\/p>/s);
    if (pMatch) {
      description = pMatch[1].replace(/<[^>]+>/g, '').trim();
    }
  }
  
  if (!description) {
    description = `${title} from Zion Tech Group — AI, IT, and automation solutions for modern enterprises.`;
  }

  if (!metaTitle) {
    metaTitle = `${title} | Zion Tech Group`;
  }
  if (!metaDescription) {
    metaDescription = description;
  }

  const color = inferColor(dirName, content);

  return { title, description, metaTitle, metaDescription, color };
}

function generatePage(dirName, info) {
  return `import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: '${info.metaTitle}',
  description: '${info.metaDescription}',
  alternates: { canonical: '/${dirName}/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: ${JSON.stringify(info.title)},
      description: ${JSON.stringify(info.description)},
      category: 'AI Service',
      categoryColor: ${JSON.stringify(info.color)},
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
`;
}

const results = { migrated: [], skipped: [], errors: [] };

// 1. Migrate AI simple pages (emerald style with /contact and /services links)
const aiSimplePattern = /text-emerald-400/;
const directories = fs.readdirSync(APP_DIR)
  .filter(d => {
    const fullPath = path.join(APP_DIR, d);
    return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, 'page.tsx'));
  });

for (const dirName of directories) {
  // Skip zion pages (already migrated)
  if (dirName.startsWith('zion-')) continue;
  
  // Skip directories that have already been migrated
  const filePath = path.join(APP_DIR, dirName, 'page.tsx');
  const content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('StandardPageLayout')) {
    results.skipped.push(dirName);
    continue;
  }
  
  // Check for AI simple page pattern (emerald links, minimal structure)
  const isAISimplePage = aiSimplePattern.test(content) && content.includes('/contact') && content.includes('/services');
  
  // Check for simple stub page pattern
  const isStubPage = content.includes('container-page py-20') && 
    content.includes('<h1') && 
    content.includes('text-xl text-slate-300') &&
    content.includes('btn-primary') &&
    content.includes('btn-secondary') &&
    content.length < 3000;

  if (isAISimplePage || isStubPage) {
    try {
      const info = extractPageInfo(content, dirName);
      // Skip pages with complex content (like ai-services/page.tsx which has filtering)
      if (content.length > 3000) {
        results.skipped.push(dirName + ' (complex content)');
        continue;
      }
      const newContent = generatePage(dirName, info);
      fs.writeFileSync(filePath, newContent);
      results.migrated.push(dirName);
    } catch (error) {
      results.errors.push({ dir: dirName, error: error.message });
    }
  }
}

console.log('AI simple + stub pages migration:');
console.log(`  Migrated: ${results.migrated.length}`);
console.log(`  Skipped: ${results.skipped.length}`);
console.log(`  Errors: ${results.errors.length}`);
if (results.errors.length > 0) {
  console.log('  Errors:', JSON.stringify(results.errors, null, 2));
}
console.log('---');
results.migrated.forEach(d => console.log(`  ✓ ${d}`));
console.log('---');
console.log('Skipped:');
results.skipped.forEach(d => console.log(`  - ${d}`));
