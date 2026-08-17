/**
 * Scripts to migrate pages to StandardPageLayout.
 * 
 * Usage: node scripts/migrate-pages-to-standard-layout.js
 * 
 * This script reads all Zion product pages, AI service pages, and simple stub
 * pages, extracts their metadata, and rewrites them to use the shared StandardPageLayout component.
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Convert a kebab-case directory name to a human-readable title
 * e.g. "zion-ai-code-assistant" -> "Zion AI Code Assistant"
 */
function dirToTitle(dirName) {
  // Handle special cases
  const specialCases = {
    'zion-smart-crm-automation': 'Zion Smart CRM Automation',
    'zion-cloud-vault': 'Zion Cloud Vault',
    'zion-invoice-genius': 'Zion Invoice Genius',
    'zion-data-sync': 'Zion Data Sync',
    'zion-project-master': 'Zion Project Master',
    'zion-performance-monitor': 'Zion Performance Monitor',
    'zion-email-automation': 'Zion Email Automation',
    'zion-devops-automation': 'Zion DevOps Automation',
    'zion-lead-magnet': 'Zion Lead Magnet',
    'zion-crm-intelligence': 'Zion CRM Intelligence',
    'zion-content-studio': 'Zion Content Studio',
    'zion-smart-analytics-dashboard': 'Zion Smart Analytics Dashboard',
    'zion-analytics-pro': 'Zion Analytics Pro',
    'zion-security-shield': 'Zion Security Shield',
    'zion-ai-workforce-analytics': 'Zion AI Workforce Analytics',
    'zion-ai-workflow-orchestrator': 'Zion AI Workflow Orchestrator',
    'zion-ai-workflow-automator': 'Zion AI Workflow Automator',
    'zion-ai-workflow-automator-pro': 'Zion AI Workflow Automator Pro',
    'zion-ai-voice-assistant': 'Zion AI Voice Assistant',
    'zion-ai-vendor-risk-analytics': 'Zion AI Vendor Risk Analytics',
    'zion-ai-vendor-manager': 'Zion AI Vendor Manager',
    'zion-ai-talent-acquisition': 'Zion AI Talent Acquisition',
    'zion-ai-sustainability-tracker': 'Zion AI Sustainability Tracker',
    'zion-ai-supply-visibility': 'Zion AI Supply Visibility',
    'zion-ai-supplier-risk': 'Zion AI Supplier Risk',
    'zion-ai-spend-intelligence': 'Zion AI Spend Intelligence',
    'zion-ai-social-media-manager': 'Zion AI Social Media Manager',
    'zion-ai-seo-optimizer': 'Zion AI SEO Optimizer',
    'zion-ai-schedule-optimizer': 'Zion AI Schedule Optimizer',
    'zion-ai-risk-assessor': 'Zion AI Risk Assessor',
    'zion-ai-revenue-forecaster': 'Zion AI Revenue Forecaster',
    'zion-ai-resource-scheduler': 'Zion AI Resource Scheduler',
    'zion-ai-report-generator': 'Zion AI Report Generator',
    'zion-ai-quality-insights': 'Zion AI Quality Insights',
    'zion-ai-quality-assurance': 'Zion AI Quality Assurance',
    'zion-ai-project-portfolio': 'Zion AI Project Portfolio',
    'zion-ai-procurement-automation': 'Zion AI Procurement Automation',
    'zion-ai-pricing-intelligence': 'Zion AI Pricing Intelligence',
    'zion-ai-predictive-analytics': 'Zion AI Predictive Analytics',
    'zion-ai-meeting-assistant': 'Zion AI Meeting Assistant',
    'zion-ai-market-intelligence': 'Zion AI Market Intelligence',
    'zion-ai-marketing-automation': 'Zion AI Marketing Automation',
    'zion-ai-lead-scoring': 'Zion AI Lead Scoring',
    'zion-ai-lead-enrichment': 'Zion AI Lead Enrichment',
    'zion-ai-knowledge-management': 'Zion AI Knowledge Management',
    'zion-ai-knowledge-base': 'Zion AI Knowledge Base',
    'zion-ai-inventory-planner': 'Zion AI Inventory Planner',
    'zion-ai-incident-response': 'Zion AI Incident Response',
    'zion-ai-incident-predictor': 'Zion AI Incident Predictor',
    'zion-ai-help-desk': 'Zion AI Help Desk',
    'zion-ai-fraud-detection': 'Zion AI Fraud Detection',
    'zion-ai-field-service-manager': 'Zion AI Field Service Manager',
    'zion-ai-expense-tracker': 'Zion AI Expense Tracker',
    'zion-ai-employee-experience': 'Zion AI Employee Experience',
    'zion-ai-email-marketing-pro': 'Zion AI Email Marketing Pro',
    'zion-ai-document-classifier': 'Zion AI Document Classifier',
    'zion-ai-demand-forecasting': 'Zion AI Demand Forecasting',
    'zion-ai-database-optimizer': 'Zion AI Database Optimizer',
    'zion-ai-data-governance': 'Zion AI Data Governance',
    'zion-ai-cyber-threat-intel': 'Zion AI Cyber Threat Intelligence',
    'zion-ai-customer-support-pro': 'Zion AI Customer Support Pro',
    'zion-ai-customer-success': 'Zion AI Customer Success',
    'zion-ai-customer-feedback': 'Zion AI Customer Feedback',
    'zion-ai-customer-360': 'Zion AI Customer 360',
    'zion-ai-cost-optimizer': 'Zion AI Cost Optimizer',
    'zion-ai-conversation-analytics': 'Zion AI Conversation Analytics',
    'zion-ai-contract-lifecycle': 'Zion AI Contract Lifecycle',
    'zion-ai-compliance-checker': 'Zion AI Compliance Checker',
    'zion-ai-code-reviewer': 'Zion AI Code Reviewer',
    'zion-ai-chatbot-builder': 'Zion AI Chatbot Builder',
    'zion-ai-chatbot-analytics': 'Zion AI Chatbot Analytics',
    'zion-ai-capacity-planner': 'Zion AI Capacity Planner',
    'zion-ai-brand-monitor': 'Zion AI Brand Monitor',
    'zion-ai-approval-workflow': 'Zion AI Approval Workflow',
    'zion-ai-api-tester': 'Zion AI API Tester',
  };
  if (specialCases[dirName]) return specialCases[dirName];

  // Generic conversion: zion-ai-fraud-detection -> Zion AI Fraud Detection
  const parts = dirName.replace(/^zion-/, '').split('-').map(w => {
    // Handle "ai" -> "AI"
    if (w === 'ai') return 'AI';
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  });
  return 'Zion ' + parts.join(' ');
}

// Color mapping for categories
const COLOR_MAP = {
  'ai': 'from-purple-500 to-indigo-500',
  'it': 'from-blue-500 to-cyan-500',
  'cloud': 'from-sky-400 to-blue-600',
  'security': 'from-red-500 to-orange-500',
  'data': 'from-green-500 to-emerald-500',
  'automation': 'from-pink-500 to-rose-500',
  'micro-saas': 'from-amber-500 to-orange-500',
  'devops': 'from-cyan-500 to-blue-500',
  'blockchain': 'from-yellow-500 to-amber-600',
  'iot': 'from-teal-500 to-green-500',
  'email-intelligence': 'from-violet-500 to-purple-600',
  'database': 'from-blue-600 to-indigo-600',
  'collaboration': 'from-sky-500 to-cyan-600',
  'media-streaming': 'from-rose-500 to-pink-600',
};

/**
 * Extract structured data from a Zion product page
 */
function extractZionPageData(content, dirName) {
  const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : dirToTitle(dirName);

  // Extract description
  const descMatch = content.match(/<p[^>]*className="text-lg text-slate-400[^>]*>(.*?)<\/p>/s);
  let description = '';
  if (descMatch) {
    description = descMatch[1].replace(/<[^>]+>/g, '').trim();
  }
  // If no description found, try the generic pattern
  if (!description) {
    const pMatch = content.match(/<p[^>]*className="[^"]*text-slate-300[^"]*"[^>]*>(.*?)<\/p>/s);
    if (pMatch) {
      description = pMatch[1].replace(/<[^>]+>/g, '').trim();
    }
  }

  if (!description) {
    description = `${title} — Zion Tech Group enterprise AI and IT solutions.`;
  }

  // Extract category from the colored label
  let category = 'AI Service';
  const catMatch = content.match(/text-(green|red|blue|teal|sky|purple|amber|orange|cyan|yellow|pink|indigo|emerald|fuchsia)-400[^>]*>([^<]+)</);
  if (catMatch) {
    category = catMatch[2].trim();
  }

  // Extract color from border/gradient
  let categoryColor = 'from-purple-500 to-indigo-500';
  const colorMatch = content.match(/from-(green|red|blue|teal|sky|purple|amber|orange|cyan|yellow|pink|indigo|emerald|fuchsia)-500/);
  if (colorMatch) {
    const colorName = colorMatch[1];
    // Map color names to gradient
    const gradientMap = {
      'green': 'from-green-500 to-emerald-500',
      'red': 'from-red-500 to-orange-500',
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
    categoryColor = gradientMap[colorName] || 'from-purple-500 to-indigo-500';
  }

  // Extract features (from the Key Features section)
  const features = [];
  // Pattern: <h3 class="text-lg font-semibold text-white mb-2">Feature Title</h3>
  //          <p class="text-sm text-slate-400">Description.</p>
  const featureRegex = /<h3[^>]*class="text-lg font-semibold text-white mb-2"[^>]*>(.*?)<\/h3>\s*<p[^>]*class="text-sm text-slate-400"[^>]*>(.*?)<\/p>/g;
  let match;
  while ((match = featureRegex.exec(content)) !== null) {
    features.push({
      title: match[1].replace(/<[^>]+>/g, '').trim(),
      description: match[2].replace(/<[^>]+>/g, '').trim(),
    });
  }

  // Extract metadata
  let metaTitle = '';
  let metaDescription = '';
  const metaMatch = content.match(/export const metadata\s*=\s*\{([\s\S]*?)\};/);
  if (metaMatch) {
    const metaContent = metaMatch[1];
    const titleM = metaContent.match(/title:\s*['`]([^'`]+)['`]/);
    const descM = metaContent.match(/description:\s*['"]([^'"]*)['"]/);
    if (titleM) metaTitle = titleM[1].trim();
    if (descM) metaDescription = descM[1].trim();
  }

  // If no metadata block, construct from title/description
  if (!metaTitle) {
    metaTitle = `${title} | Zion Tech Group`;
  }
  if (!metaDescription) {
    metaDescription = description;
  }

  return {
    title,
    description,
    category,
    categoryColor,
    features: features.length > 0 ? features : undefined,
    metaTitle,
    metaDescription,
  };
}

/**
 * Generate the new page content using StandardPageLayout
 */
function generateStandardPage(data, dirName) {
  const title = data.title;
  const description = data.description;
  const category = data.category;
  const categoryColor = data.categoryColor;
  
  const featuresStr = data.features && data.features.length > 0
    ? `features: ${JSON.stringify(data.features, null, 2)},`
    : '';

  const imports = `import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';`;

  const metadataBlock = `export const metadata: Metadata = {
  title: '${data.metaTitle}',
  description: '${data.metaDescription}',
  alternates: { canonical: '/${dirName}/' },
};`;

  const dataObj = `{
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    category: ${JSON.stringify(category)},
    categoryColor: ${JSON.stringify(categoryColor)},
    ctaLabel: 'Get Started',
    ctaHref: '/contact',
    secondaryCtaLabel: 'View Pricing',
    secondaryCtaHref: '/pricing',
    ${featuresStr}
  }`;

  return `${imports}

${metadataBlock}

export default function Page() {
  return (
    <StandardPageLayout data={${dataObj}} />
  );
}
`;
}

/**
 * Generate a simple stub page using StandardPageLayout
 */
function generateStubPage(dirName, title, description, color) {
  const imports = `import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';`;

  const metadataBlock = `export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  alternates: { canonical: '/${dirName}/' },
};`;

  const dataObj = `{
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    category: 'AI Service',
    categoryColor: ${JSON.stringify(color || 'from-purple-500 to-indigo-500')},
    ctaLabel: 'Contact us',
    ctaHref: '/contact/',
    secondaryCtaLabel: 'Services',
    secondaryCtaHref: '/services/',
  }`;

  return `${imports}

${metadataBlock}

export default function Page() {
  return (
    <StandardPageLayout data={${dataObj}} />
  );
}
`;
}

// ─── Main Migration ────────────────────────────────────────────────────────

const results = { created: [], skipped: [], errors: [] };

// 1. Migrate Zion product pages
const zionPages = fs.readdirSync(APP_DIR)
  .filter(d => d.startsWith('zion-') && fs.statSync(path.join(APP_DIR, d)).isDirectory())
  .filter(d => fs.existsSync(path.join(APP_DIR, d, 'page.tsx')));

for (const dirName of zionPages) {
  try {
    const filePath = path.join(APP_DIR, dirName, 'page.tsx');
    const oldContent = fs.readFileSync(filePath, 'utf8');
    
    // Skip pages that already use StandardPageLayout
    if (oldContent.includes('StandardPageLayout')) {
      results.skipped.push(dirName);
      continue;
    }
    
    const data = extractZionPageData(oldContent, dirName);
    const newContent = generateStandardPage(data, dirName);
    
    fs.writeFileSync(filePath, newContent);
    results.created.push(dirName);
  } catch (error) {
    results.errors.push({ dir: dirName, error: error.message });
  }
}

console.log('Zion product pages migration:');
console.log(`  Migrated: ${results.created.length}`);
console.log(`  Skipped (already StandardPageLayout): ${results.skipped.length}`);
console.log(`  Errors: ${results.errors.length}`);
if (results.errors.length > 0) {
  console.log('  Errors:', JSON.stringify(results.errors, null, 2));
}
console.log('---');
results.created.forEach(d => console.log(`  ✓ ${d}`));
