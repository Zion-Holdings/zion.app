#!/usr/bin/env node
/**
 * ai-uninterruptable-content-loop.cjs
 * Generates content pages from service catalog in a resumable manner.
 * Uses checkpoint-based execution to survive interruptions.
 */
const fs = require('fs');
const path = require('path');

const SERVICES_DATA = path.join(process.cwd(), 'app', 'data', 'servicesData.json');
const CHECKPOINT = path.join(process.cwd(), 'automation', 'reports', 'content-loop-checkpoint.json');
const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');

function ensureReports() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function loadCheckpoint() {
  try {
    if (fs.existsSync(CHECKPOINT)) {
      return JSON.parse(fs.readFileSync(CHECKPOINT, 'utf8'));
    }
  } catch {}
  return { lastIndex: 0, totalProcessed: 0, servicesGenerated: 0 };
}

function saveCheckpoint(cp) {
  ensureReports();
  fs.writeFileSync(CHECKPOINT, JSON.stringify(cp, null, 2));
}

function loadServices() {
  try {
    if (fs.existsSync(SERVICES_DATA)) {
      const data = JSON.parse(fs.readFileSync(SERVICES_DATA, 'utf8'));
      return Array.isArray(data) ? data : [];
    }
  } catch (e) {
    console.error('Error loading services data:', e.message);
  }
  return [];
}

function generateServicePage(service, index) {
  const name = service.name || service.title || `Service ${index}`;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  
  const pageDir = path.join(process.cwd(), 'app', 'blog', `${slug}-${index}`);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  const pageContent = `---\ntitle: "${name}"\n---\n\n# ${name}\n\n${service.description || service.overview || \`AI-powered \${name} service by Zion Tech Group.\`}\n`;
  
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
  return slug;
}

function runContentLoop() {
  const services = loadServices();
  const cp = loadCheckpoint();
  
  const batchSize = 200;
  const maxCycles = 50;
  let processed = 0;
  
  const start = cp.lastIndex;
  const end = Math.min(start + batchSize, services.length);
  
  for (let i = start; i < end; i++) {
    const service = services[i];
    if (service) {
      generateServicePage(service, i);
      processed++;
    }
  }
  
  cp.lastIndex = end;
  cp.totalProcessed = cp.totalProcessed + processed;
  cp.servicesGenerated = cp.totalProcessed;
  cp.timestamp = new Date().toISOString();
  saveCheckpoint(cp);
  
  const report = {
    timestamp: new Date().toISOString(),
    totalServices: services.length,
    processed: processed,
    nextIndex: end,
    checkpoint: cp
  };
  
  ensureReports();
  fs.writeFileSync(
    path.join(REPORTS_DIR, 'content-loop-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log(`Content loop: Generated ${processed} pages (total: ${cp.totalProcessed}/${services.length})`);
  console.log(`Report saved to automation/reports/content-loop-report.json`);
  
  if (end < services.length) {
    console.log(`Next index: ${end}. Run again to continue.`);
  } else {
    console.log('All services processed!');
  }
  
  process.exit(0);
}

runContentLoop();
