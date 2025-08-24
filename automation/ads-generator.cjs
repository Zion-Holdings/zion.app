#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function readLatestReport() {
  const reportDir = path.join(__dirname, '..', 'data', 'reports', 'venture');
  if (!fs.existsSync(reportDir)) return null;
  const files = fs
    .readdirSync(reportDir)
    .filter((f) => f.startsWith('venture-plan-') && f.endsWith('.json'))
    .sort((a, b) => b.localeCompare(a));
  if (!files.length) return null;
  return JSON.parse(fs.readFileSync(path.join(reportDir, files[0]), 'utf8'));
}

function buildAds(service) {
  const [minPrice, maxPrice] = service.priceRangeUSD || [0, 0];
  const priceLine = minPrice && maxPrice ? `Avg market: $${minPrice}–$${maxPrice}` : '';
  const base = {
    headline: `${service.name} — ${service.cta || 'Book a demo'}`,
    valueProps: [
      'Faster setup',
      'Transparent pricing',
      'Tangible outcomes',
    ],
    price: priceLine,
  };

  return {
    LinkedIn: {
      ...base,
      copy: `Struggling with ${service.category}? ${service.name} delivers results in days. ${priceLine}. ${service.cta || 'Book a demo'} today.`,
    },
    'Google Ads': {
      ...base,
      copy: `${service.name} for ${service.targetAudience?.[0] || 'your team'}. ${priceLine}. Get started now.`,
    },
    'Twitter/X': {
      ...base,
      copy: `${service.name}: ship in ~${service.baselineEffortDays} days. ${priceLine}. DM for details.`,
    },
    Email: {
      subject: `${service.name} in ${service.baselineEffortDays} days`,
      body: `Hi there,\n\nWe built ${service.name}: ${service.description}. ${priceLine}.\n\nInterested in a quick demo?\n\nBest,\nTeam`,
    },
  };
}

function writeAds(service, ads) {
  const outDir = path.join(__dirname, '..', 'data', 'ads', service.slug);
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'ads.json'), JSON.stringify(ads, null, 2));
}

function main() {
  const report = readLatestReport();
  if (!report) {
    console.error('No venture plan report found');
    process.exit(1);
  }
  for (const service of report.services) {
    const ads = buildAds(service);
    writeAds(service, ads);
  }
  console.log(`Generated ads for ${report.services.length} services.`);
}

if (require.main === module) main();