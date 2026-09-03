/** Tiny honest closer for leftover Next.js / ghost SKU routes. */
export function titleFromSlug(slug) {
  const last = String(slug).replace(/\/index\.html$/, '').split('/').filter(Boolean).pop() || 'Page';
  return last
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bAi\b/g, 'AI')
    .replace(/\bIt\b/g, 'IT')
    .replace(/\bMsp\b/g, 'MSP')
    .replace(/\bSoc\b/g, 'SOC')
    .replace(/\bN8n\b/g, 'n8n');
}

export function honestCloser({ title, canonical = '/services/' }) {
  const safeTitle = String(title).replace(/[<>]/g, '');
  const href = canonical.startsWith('/') ? canonical : `/${canonical}`;
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>${safeTitle} · Zion Tech Group</title>
<link rel="canonical" href="https://ziontechgroup.com${href}">
<meta name="description" content="Not a packaged SKU. Zion scopes work after the $99 AI/IT Discovery.">
<meta http-equiv="refresh" content="0; url=${href}">
<style>body{font-family:system-ui;background:#0b1220;color:#e6f0ff;max-width:720px;margin:0 auto;padding:48px 24px;line-height:1.65}a{color:#a78bfa}</style></head>
<body>
<h1>${safeTitle}</h1>
<p>No packaged SKU, no free consultation, and no leftover service catalog. Work is scoped after the $99 Discovery.</p>
<p><a href="/services/">Services</a> · <a href="/book/">Book $99</a> · <a href="/plans/">Prices</a></p>
</body></html>
`;
}

/** Ghost URLs Google still ranks (SerpAPI 2026-09-03) that currently 404 on Pages. */
export const SERP_CLOSER_PATHS = [
  'services/postgresql/index.html',
  'services/managed-it-services-small-business-2026-6559/index.html',
  'services/ai-observability-2026-6565/index.html',
  'services/cybersecurity-platform-msp-2026-6558/index.html',
  'services/cloud-cost-ai-optimizer-2026-6534/index.html',
  'services/prometheus/index.html',
  'services/ai-observability/index.html',
  'services/ai-sentiment-monitor/index.html',
  'services/ai-smart-global-campaign/index.html',
  'services/cloud-migration-services-2026-6572/index.html',
  'services/w174-database-admin-managed/index.html',
  'services/looking-glass-holographic-displays/index.html',
  'services/ai-recruitment-resume-screener/index.html',
  'services/ai-legal-discovery-platform/index.html',
  'services/optomec-aerosol-jet-3d-printing/index.html',
  'services/locus-autonomous-mobile-robots/index.html',
  'services/ai-chatbot-builder/index.html',
  'services/it-backup-disaster-recovery/index.html',
  'services/it-asset-management/index.html',
  'blog/cloud-cost-ai-optimizer-checklist-for-it-leaders/index.html',
  'tools/port-scanner/index.html',
  'tools/support-automation-roi-calculator/index.html',
  'blog/ai-observability-security-and-governance/index.html',
  'blog/ai-msp-security-compliance-implementation-playbook/index.html',
  'solutions/index.html',
  'solutions/ai-customer-experience-suite-for-enterprises/index.html',
  'solutions/ai-data-pipeline-modernization/index.html',
  'solutions/ai-iot-operations-for-enterprises/index.html',
  'solutions/managed-soc-for-msps/index.html',
  'community/index.html',
];
