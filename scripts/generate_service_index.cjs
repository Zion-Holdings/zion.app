#!/usr/bin/env node
/**
 * generate_service_index.cjs
 * Generates the service index JSON file from app/data/servicesData.json.
 */
const fs = require('fs');
const path = require('path');

function generate() {
  const servicesPath = path.join(process.cwd(), 'app', 'data', 'servicesData.json');
  const outDir = path.join(process.cwd(), 'out');
  const outputPath = path.join(outDir, 'service-index.json');

  let services = [];
  if (fs.existsSync(servicesPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
      services = Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('Error loading services data:', e.message);
    }
  }

  const index = {
    totalServices: services.length,
    generatedAt: new Date().toISOString(),
    services: services.map((s, i) => ({
      id: s.id || `service-${i}`,
      title: s.name || s.title || '',
      slug: s.slug || '',
      category: s.category || 'AI',
      description: s.description || s.overview || ''
    })).slice(0, 100) // Keep first 100 for index
  };

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
  
  // Also copy to root
  fs.writeFileSync(path.join(process.cwd(), 'service-index.json'), JSON.stringify(index, null, 2));

  console.log(`Generated service-index.json with ${services.length} services`);
  console.log(`Output: ${outputPath}`);
}

generate();
