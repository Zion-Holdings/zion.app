#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fileExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function toTitleCase(slug) {
  return slug
    .replace(/\.[^/.]+$/, '')
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, ch => ch.toUpperCase());
}

function collectServiceLinks(rootDir) {
  const servicesDir = path.join(rootDir, 'pages', 'services');
  if (!fileExists(servicesDir)) return [];
  const files = fs
    .readdirSync(servicesDir)
    .filter(name => name.endsWith('.tsx') && name !== 'index.tsx');

  const links = files.map(file => {
    const slug = file.replace(/\.tsx$/, '');
    const cleaned = slug
      .replace(/-chat$/, '')
      .replace(/-page$/, '')
      .replace(/-service$/, '');
    const title = toTitleCase(cleaned);
    return {
      href: `/services/${slug}`,
      label: `${title}`,
    };
  });

  // Stable sort by label
  return links.sort((a, b) => a.label.localeCompare(b.label)).slice(0, 12);
}

function collectCoreLinks(rootDir) {
  const corePages = [
    { href: '/automation', label: 'Automation Status — live agents & reports' },
    { href: '/newsroom', label: 'Newsroom — latest autonomous updates' },
    { href: '/site-health', label: 'Site Health — audits & insights' },
    { href: '/contact', label: 'Contact — discuss your use‑case' },
  ];

  // Only include core links that exist
  return corePages.filter(link => {
    const target = link.href === '/'
      ? path.join(rootDir, 'pages', 'index.tsx')
      : path.join(rootDir, 'pages', `${link.href.replace(/^\//, '')}.tsx`);
    return fileExists(target) || link.href === '/automation';
  });
}

function collectReportsLinks(rootDir) {
  const publicReportsDir = path.join(rootDir, 'public', 'reports');
  if (!fileExists(publicReportsDir)) return [];
  const links = [];

  const seoDir = path.join(publicReportsDir, 'seo');
  if (fileExists(path.join(seoDir, 'index.html'))) {
    links.push({ href: '/reports/seo', label: 'SEO Report — latest audit' });
  }

  const aiTrendsDir = path.join(publicReportsDir, 'ai-trends');
  if (fileExists(path.join(aiTrendsDir, 'index.html'))) {
    links.push({ href: '/reports/ai-trends', label: 'AI Trends Radar — autonomous feed' });
  }

  return links;
}

function readJSONSafe(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function collectHighlights(rootDir) {
  const highlights = [];

  // Repo knowledge graph size
  const kgPath = path.join(rootDir, 'data', 'reports', 'repo-knowledge-graph.json');
  const kg = readJSONSafe(kgPath);
  if (kg && Array.isArray(kg.nodes) && Array.isArray(kg.edges)) {
    highlights.push(`Repository graph: ${kg.nodes.length} nodes, ${kg.edges.length} edges`);
  }

  // SEO report presence
  const seoIndex = path.join(rootDir, 'public', 'reports', 'seo', 'index.html');
  if (fileExists(seoIndex)) {
    highlights.push('Latest SEO report available');
  }

  // AI trends recent
  const aiTrendsLatest = path.join(rootDir, 'public', 'reports', 'ai-trends', 'latest.json');
  const trends = readJSONSafe(aiTrendsLatest);
  if (trends && Array.isArray(trends.items)) {
    highlights.push(`AI trends: ${trends.items.length} curated signals`);
  }

  // Automation logs touch
  const guardianLog = path.join(rootDir, 'automation', 'logs', 'automation-guardian-10min.log');
  if (fileExists(guardianLog)) {
    const stat = fs.statSync(guardianLog);
    if (stat && stat.mtime) {
      const minutes = Math.floor((Date.now() - stat.mtime.getTime()) / 60000);
      highlights.push(`Automation guardian active ~${minutes} min ago`);
    }
  }

  if (highlights.length === 0) {
    highlights.push('Autonomous systems standing by');
  }

  return highlights.slice(0, 4);
}

function buildLinkItem({ href, label }) {
  // Keep structure consistent with existing design
  return `            <Link href="${href}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${label}</span></a></Link>`;
}

function renderAutoSection(links) {
  const items = links.map(buildLinkItem).join('\n\n');
  return `/* AUTO-GENERATED: HOME_UPDATER_START */\n<section className="mx-auto max-w-7xl px-6 pb-16">\n  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>\n  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">\n\n${items}\n  </div>\n</section>\n/* AUTO-GENERATED: HOME_UPDATER_END */`;
}

function renderIntelSection(lines) {
  const items = lines.map(text => (
    `            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">\n              <span className=\"mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]\" />\n              <span className=\"text-sm text-white/80\">${text}</span>\n            </div>`
  )).join('\n');

  return `/* AUTO-GENERATED: HOME_INTEL_START */\n<section className=\"mx-auto max-w-7xl px-6 pb-10\">\n  <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Live Highlights</h2>\n  <div className=\"mx-auto mt-4 grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-2\">\n${items}\n  </div>\n</section>\n/* AUTO-GENERATED: HOME_INTEL_END */`;
}

function replaceBlock(src, startToken, endToken, replacement) {
  const startIdx = src.indexOf(startToken);
  const endIdx = src.indexOf(endToken);
  if (startIdx === -1 || endIdx === -1) return src;
  const before = src.slice(0, startIdx);
  const after = src.slice(endIdx + endToken.length);
  return before + replacement + after;
}

function updateHomepage(rootDir) {
  const homePath = path.join(rootDir, 'pages', 'index.tsx');
  if (!fileExists(homePath)) {
    console.error('Cannot find pages/index.tsx');
    process.exit(0);
  }
  const src = fs.readFileSync(homePath, 'utf8');

  // HOME_UPDATER block
  const startToken = '{/* AUTO-GENERATED: HOME_UPDATER_START */}';
  const endToken = '{/* AUTO-GENERATED: HOME_UPDATER_END */}';
  const services = collectServiceLinks(rootDir);
  const core = collectCoreLinks(rootDir);
  const reports = collectReportsLinks(rootDir);
  const combined = [...services, ...core, ...reports]
    .filter((v, i, a) => a.findIndex(x => x.href === v.href) === i)
    .slice(0, 16);
  const newExplore = renderAutoSection(combined);

  // HOME_INTEL block
  const intelStart = '{/* AUTO-GENERATED: HOME_INTEL_START */}';
  const intelEnd = '{/* AUTO-GENERATED: HOME_INTEL_END */}';
  const intelLines = collectHighlights(rootDir);
  const newIntel = renderIntelSection(intelLines);

  let next = replaceBlock(src, startToken, endToken, newExplore);
  next = replaceBlock(next, intelStart, intelEnd, newIntel);

  if (next !== src) {
    fs.writeFileSync(homePath, next);
    console.log(`Homepage updated: ${homePath}`);
  } else {
    console.log('Homepage already up to date.');
  }
}

(function main() {
  const root = process.cwd();
  updateHomepage(root);
})();