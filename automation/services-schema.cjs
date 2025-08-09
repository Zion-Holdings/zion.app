#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

(function main() {
  const basePath = path.join(process.cwd(), 'data', 'services');
  const corePath = path.join(basePath, 'services.json');
  const enrichPath = path.join(basePath, 'enriched.json');
  if (!fs.existsSync(corePath)) {
    console.log('[schema] no services data found');
    return;
  }
  const services = JSON.parse(fs.readFileSync(corePath, 'utf8'));
  const enriched = fs.existsSync(enrichPath) ? JSON.parse(fs.readFileSync(enrichPath, 'utf8')) : {};

  const items = services.map((s) => {
    const slug = s.slug || s.name?.toLowerCase().replace(/\s+/g, '-') || 'service';
    const e = enriched[slug] || {};
    const min = Array.isArray(s.priceRangeUSD) ? s.priceRangeUSD[0] : undefined;
    const max = Array.isArray(s.priceRangeUSD) ? s.priceRangeUSD[1] : undefined;
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.name,
      description: e.shortSummary || s.description,
      category: s.category,
      provider: { '@type': 'Organization', name: 'Zion Marketplace Provider' },
      areaServed: 'Global',
      offers: min ? { '@type': 'Offer', priceCurrency: 'USD', price: String(min), priceSpecification: max ? { '@type': 'PriceSpecification', minPrice: String(min), maxPrice: String(max), priceCurrency: 'USD' } : undefined } : undefined,
      keywords: Array.isArray(e.tags) ? e.tags.join(', ') : undefined,
      url: `https://example.com/services/${slug}`
    };
  });

  const out = { '@graph': items };
  const outPath = path.join(basePath, 'schema.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log('[schema] wrote', outPath);
})();