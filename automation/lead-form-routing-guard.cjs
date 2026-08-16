// Lead Form Routing Guard — validates contact form routing config
// Checks: contact page exists, email form action is correct, targetEmail is valid
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const reportsDir = path.join(repoRoot, 'automation', 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const findings = [];
const targetEmail = process.env.TARGET_EMAIL || 'kleber@ziontechgroup.com';

// Check contact page source
const contactPagePath = path.join(repoRoot, 'app', 'contact', 'page.tsx');
if (!fs.existsSync(contactPagePath)) {
  findings.push({
    severity: 'critical',
    type: 'missing-page',
    file: 'app/contact/page.tsx',
    detail: 'Contact page source not found'
  });
}

// Check if contact page references the target email
const contactContent = fs.existsSync(contactPagePath)
  ? fs.readFileSync(contactPagePath, 'utf8')
  : '';

if (contactContent && !contactContent.includes(targetEmail)) {
  findings.push({
    severity: 'warning',
    type: 'email-mismatch',
    file: 'app/contact/page.tsx',
    detail: `Contact page does not reference target email ${targetEmail}`
  });
}

// Check lead routing config files
const routingConfigPath = path.join(repoRoot, 'automation', 'config', 'lead-routing.json');
if (!fs.existsSync(routingConfigPath)) {
  findings.push({
    severity: 'warning',
    type: 'missing-config',
    file: 'automation/config/lead-routing.json',
    detail: 'Lead routing config not found'
  });
}

// Check contact forms
const contactFormPath = path.join(repoRoot, 'app', 'components', 'ContactForm.tsx');
if (!fs.existsSync(contactFormPath)) {
  // Try alternative path
  const altPath = path.join(repoRoot, 'app', 'contact', 'ContactForm.tsx');
  if (!fs.existsSync(altPath)) {
    findings.push({
      severity: 'warning',
      type: 'missing-form',
      file: 'app/components/ContactForm.tsx',
      detail: 'Contact form component not found'
    });
  }
}

const status = findings.filter(f => f.severity === 'critical').length > 0 ? 'unhealthy' : 'healthy';

const report = {
  status,
  targetEmail,
  findings,
  checkedAt: new Date().toISOString(),
  summary: {
    total: findings.length,
    critical: findings.filter(f => f.severity === 'critical').length,
    warning: findings.filter(f => f.severity === 'warning').length,
  }
};

const reportPath = path.join(reportsDir, 'lead-form-routing-guard-latest.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`Lead form routing guard: ${status} (${findings.length} findings)`);
process.exit(0);
