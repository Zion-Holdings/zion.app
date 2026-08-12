#!/usr/bin/env node
/**
 * regenerate-service-pages.cjs — Regenerates all service pages with improved content
 * 
 * Adds: JSON-LD structured data, related service links, breadcrumbs, 
 *       CTA sections, and proper Navigation/Footer via root layout
 */
const fs = require('fs');
const path = require('path');

const SERVICES_FILE = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const SERVICES_DIR = path.join(__dirname, '..', 'app', 'services');

// Load services data
let services = [];
try {
  services = JSON.parse(fs.readFileSync(SERVICES_FILE, 'utf8'));
} catch (e) {
  console.error('Cannot read servicesData.json:', e.message);
  process.exit(1);
}

// Category mappings
const categoryMap = {
  'AI Services': { label: 'AI & Machine Learning', color: 'purple' },
  'IT Services': { label: 'IT & Infrastructure', color: 'blue' },
  'Security Services': { label: 'Security & Compliance', color: 'orange' },
  'Cloud Services': { label: 'Cloud & Infrastructure', color: 'sky' },
  'Micro SaaS': { label: 'Micro SAAS', color: 'pink' },
  'Data & Analytics': { label: 'Data & Analytics', color: 'green' },
  'Automation': { label: 'Automation', color: 'rose' },
  'Consulting': { label: 'Consulting', color: 'indigo' },
};

// Map category to industry
const industryMap = {
  compliance: 'Regulatory & Compliance',
  insights: 'Business Intelligence',
  security: 'Cybersecurity',
  automation: 'Process Automation',
  data: 'Data Engineering',
  cloud: 'Cloud Infrastructure',
  networking: 'Network Engineering',
  marketing: 'Digital Marketing',
  sales: 'Sales Enablement',
  hr: 'Human Resources',
  finance: 'Financial Operations',
  operations: 'Operations',
  customer: 'Customer Service',
};

// Find related services by category
function findRelatedServices(currentId, services, limit = 4) {
  const current = services.find(s => s.id === currentId);
  if (!current) return [];
  
  return services
    .filter(s => s.id !== currentId && (
      s.category === current.category || 
      (current.industry && s.industry === current.industry)
    ))
    .slice(0, limit);
}

// Generate service page
function generateServicePage(service) {
  const slug = service.id;
  const href = service.href || `/services/${slug}`;
  const title = service.title || service.name || slug.replace(/-/g, ' ');
  const description = service.description || `AI-powered ${title} service by Zion Tech Group.`;
  const category = service.category || 'AI Services';
  const industry = service.industry || 'General';
  const features = service.features || [];
  const benefits = service.benefits || [];
  const pricing = service.pricing || { basic: '', pro: '', enterprise: '' };
  const caseStudyMetrics = service.caseStudyMetrics || [];
  
  const categoryLabel = categoryMap[category]?.label || category || 'AI Services';
  const industryLabel = industryMap[industry] || industry || 'General';
  const relatedServices = findRelatedServices(slug, services, 4);
  
  // Build features list HTML
  const featuresHtml = features.length > 0 
    ? `<ul class="list-disc list-inside space-y-2">\n${features.map(f => `        <li class="text-slate-300">${escapeHtml(f)}</li>`).join('\n')}\n      </ul>`
    : '<p class="text-slate-400">Custom features tailored to your specific use case.</p>';
  
  // Build benefits list HTML
  const benefitsHtml = benefits.length > 0
    ? `<ul class="list-disc list-inside space-y-2">\n${benefits.map(b => `        <li class="text-slate-300">${escapeHtml(b)}</li>`).join('\n')}\n      </ul>`
    : '<p class="text-slate-400">Measurable business outcomes delivered in weeks.</p>';
  
  // Build pricing HTML
  let pricingHtml = '';
  if (pricing.basic || pricing.pro || pricing.enterprise) {
    pricingHtml = `
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">${pricing.basic || 'Custom'}</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">${pricing.pro || 'Custom'}</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">${pricing.enterprise || 'Custom'}</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>`;
  }
  
  // Build related services HTML
  let relatedHtml = '';
  if (relatedServices.length > 0) {
    relatedHtml = `
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            ${relatedServices.map(s => `
              <div>
                <a href="/services/${s.id}" class="text-purple-300 hover:text-purple-200 font-medium">${s.title || s.name || s.id}</a>
                <p class="text-slate-400 text-sm mt-1">${(s.description || '').substring(0, 120)}...</p>
              </div>
            `).join('\n            ')}
          </div>
        </div>`;
  }
  
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "description": description,
    "category": categoryLabel,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": pricing.basic || pricing.pro || pricing.enterprise || "Custom",
    }
  };
  
  // Back to services link
  const backLinksHtml = `
        <div class="mb-6">
          <a href="/services/" class="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2">
            ← Back to All Services
          </a>
        </div>`;
  
  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: \`${escapeJsString(title)} | Zion Tech Group\`,
  description: \`${escapeJsString(description)}\`,
  keywords: '${escapeJsString(features.join(', '))}, ${escapeJsString(category)}, ${escapeJsString(industry)}, Zion Tech Group',
  alternates: {
    canonical: \`https://ziontechgroup.com/services/${slug}\`,
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        ${backLinksHtml}
        
        <h1 className="text-4xl font-bold mb-6 text-white">${escapeHtml(title)}</h1>
        <p className="text-lg text-slate-300 mb-8">${escapeHtml(description)}</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">${escapeHtml(categoryLabel)}</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">${escapeHtml(industryLabel)}</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          ${featuresHtml}
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          ${benefitsHtml}
        </div>
        
        ${pricingHtml ? pricingHtml : ''}
        ${relatedHtml}
        
        <div class="text-center">
          <Link
            href="/contact/"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
`;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function escapeJsString(str) {
  return String(str || '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

// Main
let updated = 0;
let created = 0;
const errors = [];

for (const service of services) {
  const slug = service.id;
  if (!slug) continue;
  
  const pageDir = path.join(SERVICES_DIR, slug);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  try {
    const pageContent = generateServicePage(service);
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
      created++;
    } else if (fs.existsSync(pageFile)) {
      updated++;
    } else {
      created++;
    }
    
    fs.writeFileSync(pageFile, pageContent);
  } catch (e) {
    errors.push({ slug, error: e.message });
  }
}

console.log(`\nService pages: ${updated} updated, ${created} created, ${errors.length} errors`);
if (errors.length > 0) {
  console.log('Errors:', errors.slice(0, 5));
}
