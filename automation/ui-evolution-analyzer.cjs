#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'ui-evolution');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function listFiles(dir, exts) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...listFiles(full, exts));
    else if (exts.includes(path.extname(entry))) out.push(full);
  }
  return out;
}

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const isPage = /\bpages\b/.test(filePath);
  const isComponent = /\bcomponents\b/.test(filePath);
  const isLayoutComponent = /components\/layout\//.test(filePath);

  const hasEnhancedLayout = /EnhancedLayout|from\s+['"]\.\.\/\.\.\/components\/layout\/EnhancedLayout['"]/i.test(src);
  const hasEnhancedNav = /EnhancedNavigation|InteractiveNavigation|from\s+['"][^'"]*EnhancedNavigation['"]/i.test(src);
  const hasNavLandmark = /<nav[\s>]|role\s*=\s*["']navigation["']/i.test(src);
  const hasSkipLink = /skip-link|<a[^>]+href=["']#main["']/i.test(src);
  const hasBreadcrumbs = /Breadcrumb|aria-label=["']breadcrumb["']/i.test(src);
  const hasHead = /<Head>|from\s+['"]next\/head['"]/i.test(src);
  const hasViewport = /<meta\s+name=["']viewport["']/i.test(src);
  const hasActiveLink = /aria-current=|\bactive\b/i.test(src);
  const hasMobileMenu = /MobileMenu|md:hidden|data-mobile-menu/i.test(src);
  const hasDarkTheme = /dark:/i.test(src);

  const issues = [];
  if (isPage && !hasEnhancedLayout) issues.push('missing_enhanced_layout');
  if ((isLayoutComponent || isComponent) && !hasEnhancedNav) issues.push('missing_enhanced_navigation');
  if ((isLayoutComponent || isComponent) && !hasNavLandmark) issues.push('missing_nav_landmark');
  if ((isLayoutComponent || isPage) && !hasSkipLink) issues.push('missing_skip_link');
  if ((isLayoutComponent || isPage) && !hasBreadcrumbs) issues.push('missing_breadcrumbs');
  if (isPage && !hasHead) issues.push('missing_head_import');
  if (isPage && !hasViewport) issues.push('missing_viewport_meta');
  if ((isLayoutComponent || isComponent) && !hasActiveLink) issues.push('no_active_link_highlight');
  if ((isLayoutComponent || isComponent) && !hasMobileMenu) issues.push('missing_mobile_menu');
  if ((isLayoutComponent || isComponent || isPage) && !hasDarkTheme) issues.push('no_dark_theme_support');

  return { filePath, issues };
}

function main() {
  ensureDir(OUTPUT_DIR);
  const files = [
    ...listFiles(path.join(__dirname, '..', 'pages'), ['.tsx', '.ts', '.jsx', '.js']),
    ...listFiles(path.join(__dirname, '..', 'components'), ['.tsx', '.ts', '.jsx', '.js'])
  ];

  const report = { timestamp: new Date().toISOString(), filesAnalyzed: files.length, items: [] };
  for (const f of files) {
    try {
      const { filePath, issues } = analyzeFile(f);
      if (issues.length > 0) report.items.push({ file: filePath, issues });
    } catch (err) {
      // ignore file read errors
    }
  }

  const outFile = path.join(OUTPUT_DIR, 'ui-evolution-analysis.json');
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log(`UI evolution analysis completed: ${report.items.length} items with issues`);
}

if (require.main === module) {
  main();
}