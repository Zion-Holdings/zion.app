#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'saas');
const SERVICES_DIR = path.join(__dirname, '..', 'pages', 'services');
const UTILS_SERVICES = path.join(__dirname, '..', 'utils', 'data', 'services.ts');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function detectActions() {
  const actions = new Set();

  // If services data exists, propose generating landing/docs/pricing
  if (fs.existsSync(UTILS_SERVICES)) {
    actions.add('generate_service_landing_pages');
    actions.add('generate_service_docs_pages');
    actions.add('generate_service_pricing_pages');
  }

  // If services pages exist, ensure API scaffolds
  if (fs.existsSync(SERVICES_DIR)) {
    actions.add('generate_service_api_endpoints');
    actions.add('wire_signup_login_flow');
  }

  // Periodic SAAS health checks
  actions.add('periodic_saas_health_check');

  return Array.from(actions);
}

function main() {
  ensureDir(REPORT_DIR);
  const actions = detectActions();
  const report = {
    timestamp: new Date().toISOString(),
    actions
  };
  const outPath = path.join(REPORT_DIR, 'saas-actions.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`SaaS analyzer completed: ${actions.length} action(s)`);
}

main();


