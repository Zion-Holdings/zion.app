/**
 * Migrate remaining emerald-style AI simple pages to StandardPageLayout.
 * Handles subdirectory pages (micro-saas/*, solutions/*, seo/*, services/*, etc.)
 * 
 * Usage: node scripts/migrate-emerald-pages.cjs
 */

const fs = require('fs');
const path = require('path');
const APP_DIR = path.join(__dirname, '..', 'app');

function inferColor(dirName, content) {
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
  return colorMap.purple; // default for emerald-style pages
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

function extractPageInfo(content, dirName) {
  let title = dirToTitle(dirName);
  let description = '';
  let metaTitle = '';
  let metaDescription = '';
  
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

  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  if (h1Match) {
    const h1Title = h1Match[1].replace(/<[^>]+>/g, '').trim();
    if (h1Title) title = h1Title;
  }

  const pMatch = content.match(/<p[^>]*>(.*?)<\/p>/s);
  if (pMatch) {
    description = pMatch[1].replace(/<[^>]+>/g, '').trim();
  }
  
  if (!description) {
    description = `${title} from Zion Tech Group — AI, IT, and automation solutions.`;
  }

  if (!metaTitle) {
    metaTitle = `${title} | Zion Tech Group`;
  }
  if (!metaDescription) {
    metaDescription = description;
  }

  return { title, description, metaTitle, metaDescription, color: inferColor(dirName, content) };
}

function generatePage(dirPath, info) {
  const relPath = path.relative(APP_DIR, dirPath).replace(/\\/g, '/');
  const slugPath = '/' + relPath;
  return `import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: '${info.metaTitle}',
  description: '${info.metaDescription}',
  alternates: { canonical: '${slugPath}/' },
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

// Directories to skip (complex pages, already migrated, or special layouts)
const SKIP_DIRS = new Set([
  'zion-ai-api-tester', 'zion-ai-approval-workflow', // already migrated
  'ai', 'ai-lab', 'industries', 'service-discovery',
  'success-stories', 'tools', 'contact', 'testimonials',
  'about', 'pricing', 'services', 'solutions', 'partners',
  'faq', 'help', 'blog', 'careers', 'academy',
  'case-studies', 'proposals', 'proposal-generator',
  'status', 'dashboard', 'client-portal', 'configurator',
  'data-analytics-services', // already done
  'business-intelligence-services', // already done
  'cloud-ai-services', // already done
  'ai-agent-services', // already done
  'ai-consulting-strategy', // already done
  'ai-consulting-services', // already done
  'ai-development', // already done
  'ai-for-enterprise', // already done
  'ai-readiness-assessment-services', // already done
  'micro-saas-products', // already done
  'digital-transformation-services', // already done
  'enterprise-ai-integration', // already done
  'email-intelligence-services', // already done
  'cloud-infrastructure-management', // already done
  'business-it-consulting', // already done
  'it-consulting-services', // already done
  'it-managed-services', // already done
  'it-support-services', // already done
  'free-ai-assessment', // already done
  'free-ai-consultation', // already done
  'email-automation', // already done
  'seo-services', // already done
  'training', // already done
  'mobile-app-development', // already done
  'mobile-development', // already done
  'system-integration', // already done
  'digital-twin-platform', // already done
  'enterprise-security', // already done
  'custom-development', // already done
  'devops-automation', // already done
  'data-services', // already done
  'data-analytics-bi', // already done
  'business-intelligence', // already done
  'cloud-infrastructure', // already done
  'cloud-services', // already done
  'computer-vision', // already done
  'smart-inventory', // already done
  'telemedicine', // already done
  'micro-saas', // subdirectory - handle separately
  'seo',
  'services',
  'ai-services',
]);

// Skip specific complex directories
const COMPLEX_DIR_NAMES = new Set(['ai-lab', 'contact', 'testimonials', 'tools', 'tools/service-comparison', 'tools/health-check', 'tools/roi-calculator', 'tools/port-scanner', 'tools/ssl-checker', 'tools/json-formatter', 'tools/css-gradient-generator', 'tools/ai-service-router', 'tools/analytics', 'tools/track-engineer-fit']);

function findEmeraldPages(dir, baseDir = '') {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = baseDir ? `${baseDir}/${entry.name}` : entry.name;
    
    if (entry.isDirectory()) {
      // Check if it's a page directory (has page.tsx)
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const content = fs.readFileSync(pageFile, 'utf8');
        
        // Skip if already using StandardPageLayout
        if (content.includes('StandardPageLayout')) continue;
        
        // Check for emerald-style pattern
        if (content.includes('text-emerald-400') && content.includes('/contact')) {
          // Skip complex directories
          if (COMPLEX_DIR_NAMES.has(relPath)) continue;
          if (COMPLEX_DIR_NAMES.has(entry.name)) continue;
          
          results.push({ pageFile, relPath, content, dirName: entry.name });
        }
        
        // Recurse into subdirectories for emerald-style pages
        if (entry.name === 'micro-saas' || entry.name === 'seo' || entry.name === 'solutions' || entry.name === 'services') {
          results.push(...findEmeraldPages(fullPath, relPath));
        }
      }
    }
  }
  
  return results;
}

const pagesToMigrate = findEmeraldPages(APP_DIR);
console.log(`Found ${pagesToMigrate.length} emerald-style pages to migrate`);

const results = { migrated: [], skipped: [], errors: [] };

for (const { pageFile, relPath, content, dirName } of pagesToMigrate) {
  try {
    if (content.length > 3000 && !content.includes('text-emerald-400 hover:text-emerald-300')) {
      results.skipped.push(relPath + ' (complex)');
      continue;
    }
    
    const info = extractPageInfo(content, path.basename(dirName));
    const newContent = generatePage(path.dirname(pageFile), info);
    fs.writeFileSync(pageFile, newContent);
    results.migrated.push(relPath);
  } catch (error) {
    results.errors.push({ file: relPath, error: error.message });
  }
}

console.log(`\nMigrated: ${results.migrated.length}`);
console.log(`Skipped: ${results.skipped.length}`);
console.log(`Errors: ${results.errors.length}`);
results.migrated.forEach(p => console.log(`  ✓ ${p}`));
if (results.skipped.length > 0) {
  console.log('Skipped:');
  results.skipped.forEach(p => console.log(`  - ${p}`));
}
if (results.errors.length > 0) {
  console.log('Errors:', JSON.stringify(results.errors, null, 2));
}
