#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function generateServiceIdeas() {
  // Heuristic set; in real use, feed from analytics and market signals
  const ideas = [
    {
      name: 'AI SEO Auditor',
      category: 'marketing-tech',
      description: 'Automated SEO audit and recommendations for Next.js websites.',
      targetAudience: ['SMBs', 'agencies', 'founders'],
      stack: 'nextjs',
      baselineEffortDays: 5,
      priceRangeUSD: [499, 1499],
      channels: ['LinkedIn', 'Google Ads', 'Email'],
    },
    {
      name: 'Landing Page Generator',
      category: 'no-code',
      description: 'Form-driven landing page generator with templates and analytics.',
      targetAudience: ['startups', 'agencies'],
      stack: 'nextjs',
      baselineEffortDays: 4,
      priceRangeUSD: [299, 999],
      channels: ['LinkedIn', 'Twitter/X', 'Product Hunt'],
    },
    {
      name: 'Customer Support Chatbot',
      category: 'ai-automation',
      description: 'Context-aware support bot seeded from docs, with email escalation.',
      targetAudience: ['SaaS', 'ecommerce'],
      stack: 'node',
      baselineEffortDays: 7,
      priceRangeUSD: [999, 2999],
      channels: ['LinkedIn', 'Cold Email', 'YouTube'],
    },
    {
      name: 'Price Intelligence Service',
      category: 'data-scraping',
      description: 'Competitor price tracking dashboard with alerts.',
      targetAudience: ['ecommerce', 'marketplaces'],
      stack: 'node',
      baselineEffortDays: 6,
      priceRangeUSD: [799, 2499],
      channels: ['LinkedIn', 'Cold Email'],
    },
    {
      name: 'Instagram Content Scheduler',
      category: 'social-media',
      description: 'Auto-generate posts from blog feeds and schedule with analytics.',
      targetAudience: ['creators', 'brands', 'agencies'],
      stack: 'nextjs',
      baselineEffortDays: 5,
      priceRangeUSD: [399, 1299],
      channels: ['Instagram', 'LinkedIn', 'Email'],
    },
  ];

  return ideas.map((idea) => ({
    ...idea,
    slug: slugify(idea.name),
    adsAngles: [
      'Save time and scale your output',
      'Data-driven decisions with clear ROI',
      'Fast setup, measurable results',
    ],
    cta: 'Book a demo',
  }));
}

function writeReport(services) {
  const reportDir = path.join(__dirname, '..', 'data', 'reports', 'venture');
  ensureDir(reportDir);
  const reportPath = path.join(
    reportDir,
    `venture-plan-${Date.now()}.json`
  );

  const report = {
    timestamp: new Date().toISOString(),
    services,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  return reportPath;
}

function main() {
  const services = generateServiceIdeas();
  const reportPath = writeReport(services);
  console.log(`Generated venture plan: ${reportPath}`);
}

if (require.main === module) {
  main();
}