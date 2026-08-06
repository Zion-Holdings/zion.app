#!/usr/bin/env node
/**
 * generate_services_json.cjs
 * Generates services.json from servicesData.json for the build.
 */
const fs = require('fs');
const path = require('path');

function generate() {
  const servicesPath = path.join(process.cwd(), 'app', 'data', 'servicesData.json');
  const outDir = path.join(process.cwd(), 'out');
  const outputPath = path.join(outDir, 'data', 'services.json');

  let services = [];
  if (fs.existsSync(servicesPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
      services = Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('Error loading services data:', e.message);
    }
  }

  const output = {
    totalServices: services.length,
    generatedAt: new Date().toISOString(),
    services: services.slice(0, 500)
  };

  const outDirData = path.join(outDir, 'data');
  if (!fs.existsSync(outDirData)) fs.mkdirSync(outDirData, { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  fs.writeFileSync(path.join(process.cwd(), 'data', 'services.json'), JSON.stringify(output, null, 2));

  console.log(`Generated services.json with ${services.length} services`);
}

generate();
