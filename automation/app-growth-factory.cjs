#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'app-growth', 'app-growth-actions.json');
const OUT_DIR = path.join(__dirname, 'app-growth-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const AGENTS = {
  generate_new_app_pages: [
    '#!/usr/bin/env node',
    '',
    'const fs = require(\'fs\');',
    'const path = require(\'path\');',
    'const REPORT = path.join(__dirname, \"..\", \"data\", \"reports\", \"app-growth\", \"app-growth-actions.json\");',
    'const PAGES_DIR = path.join(__dirname, \"..\", \"..\", \"pages\", \"auto\");',
    '',
    'function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }',
    '',
    'function toComponentName(slug) {',
    '  const base = slug.split(\'-\').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(\'\');',
    '  return base.replace(/[^a-zA-Z0-9]/g, \"\") || \"AutoPage\";',
    '}',
    '',
    'function generatePage({ slug, title, description }) {',
    '  ensureDir(PAGES_DIR);',
    '  const fp = path.join(PAGES_DIR, slug + \' .tsx\');',
    '  if (fs.existsSync(fp)) return false;',
    '  const Component = toComponentName(slug);',
    '  const codeLines = [',
    '    "import type { NextPage } from \'next\';",',
    '    "import Head from \'next/head\';",',
    '    "import Link from \'next/link\';",',
    '    "",',
    '    "const " + Component + ": NextPage = () => {",',
    '    "  return (",',
    '    "    <div>",',
    '    "      <Head>",',
    '    "        <title>" + title + "</title>",',
    '    "        <meta name=\\\"description\\\" content=\\\"" + description + "\\\" />",',
    '    "      </Head>",',
    '    "",',
    '    "      <main className=\\\"container mx-auto px-4 py-8\\\">",',
    '    "        <h1 className=\\\"text-3xl font-bold mb-4\\\">" + title + "</h1>",',
    '    "        <p className=\\\"text-gray-700 mb-6\\\">" + description + "</p>",',
    '    "        <Link href=\\\"/\\\"><a className=\\\"text-blue-600 underline\\\">Back to Home</a></Link>",',
    '    "      </main>",',
    '    "    </div>",',
    '    "  );",',
    '    "};",',
    '    "",',
    '    "export default " + Component + ";",',
    '  ];',
    '  fs.writeFileSync(fp, codeLines.join("\n"));',
    '  try { fs.chmodSync(fp, 0o644); } catch {}',
    '  return true;',
    '}',
    '',
    '(function main() {',
    '  if (!fs.existsSync(REPORT)) { console.error(\'No app-growth report found\'); process.exit(1); }',
    '  const { proposedPages = [] } = JSON.parse(fs.readFileSync(REPORT, \"utf8\"));',
    '  let created = 0;',
    '  for (const p of proposedPages) {',
    '    if (generatePage(p)) created++;',
    '  }',
    '  console.log(\'Generated \'+created+\' new app page(s)\');',
    '})();'
  ].join('\n'),

  update_navigation_for_app_growth: [
    '#!/usr/bin/env node',
    'const fs = require(\'fs\');',
    'const path = require(\'path\');',
    'const REPORT = path.join(__dirname, \"..\", \"..\", \"data\", \"reports\", \"app-growth\", \"app-growth-actions.json\");',
    'const NAV_PATH = path.join(__dirname, \"..\", \"..\", \"components\", \"layout\", \"EnhancedNavigation.tsx\");',
    '',
    'function loadReport() {',
    '  return JSON.parse(fs.readFileSync(REPORT, \"utf8\"));',
    '}',
    '',
    'function buildLinks(pages) {',
    '  return pages.map(p =>',
    '    "            <Link href=\\\"" + p.route + "\\\">\n              <a className=\\\"text-gray-600 hover:text-gray-900\\\">" + p.title + "</a>\n            </Link>"',
    '  ).join("\n");',
    '}',
    '',
    '(function main() {',
    '  if (!fs.existsSync(REPORT)) { console.error(\'No app-growth report found\'); process.exit(1); }',
    '  if (!fs.existsSync(NAV_PATH)) { console.error(\'Navigation not found\'); process.exit(1); }',
    '  const { proposedPages = [] } = loadReport();',
    '  if (!proposedPages.length) { console.log(\'No proposed pages for nav\'); process.exit(0); }',
    '  let src = fs.readFileSync(NAV_PATH, \"utf8\");',
    '  const markerStart = \"{/* APP-GROWTH-LINKS-START */}\";',
    '  const markerEnd = \"{/* APP-GROWTH-LINKS-END */}\";',
    '  const linksBlock = markerStart + "\n" + buildLinks(proposedPages) + "\n            " + markerEnd;',
    '  if (src.includes(markerStart)) {',
    '    src = src.replace(new RegExp(markerStart + "[\\\\s\\\\S]*?" + markerEnd), linksBlock);',
    '  } else {',
    '    const insertionPoint = \"          </div>\";',
    '    const idx = src.indexOf(insertionPoint);',
    '    if (idx !== -1) {',
    '      src = src.replace(insertionPoint, linksBlock + "\n" + insertionPoint);',
    '    } else {',
    '      src += "\n// Injected by app-growth\n" + linksBlock + "\n";',
    '    }',
    '  }',
    '  fs.writeFileSync(NAV_PATH, src);',
    '  console.log(\'Navigation updated for app growth\');',
    '})();'
  ].join('\n'),

  update_homepage_with_feature_sections: [
    '#!/usr/bin/env node',
    'const fs = require(\'fs\');',
    'const path = require(\'path\');',
    'const REPORT = path.join(__dirname, \"..\", \"..\", \"data\", \"reports\", \"app-growth\", \"app-growth-actions.json\");',
    'const HOME_PATH = path.join(__dirname, \"..\", \"..\", \"pages\", \"enhanced-home.tsx\");',
    '',
    'function loadReport() { return JSON.parse(fs.readFileSync(REPORT, \"utf8\")); }',
    '',
    'function buildSection(pages) {',
    '  const items = pages.map(p => "            <li className=\\\"mb-2\\\"><a className=\\\"text-blue-600 underline\\\" href=\\\"" + p.route + "\\\">" + p.title + "</a> — " + p.description + "</li>").join("\\n");',
    '  return [',
    '    "",',
    '    "        {/* APP-GROWTH-FEATURES-START */}",',
    '    "        <section className=\\\"mt-10\\\">",',
    '    "          <h2 className=\\\"text-2xl font-semibold mb-4\\\">New Features</h2>",',
    '    "          <ul>",',
    '    items,',
    '    "          </ul>",',
    '    "        </section>",',
    '    "        {/* APP-GROWTH-FEATURES-END */}",',
    '  ].join("\\n");',
    '}',
    '',
    '(function main() {',
    '  if (!fs.existsSync(REPORT)) { console.error(\'No app-growth report found\'); process.exit(1); }',
    '  if (!fs.existsSync(HOME_PATH)) { console.error(\'Enhanced home page not found\'); process.exit(1); }',
    '  const { proposedPages = [] } = loadReport();',
    '  if (!proposedPages.length) { console.log(\'No proposed pages for homepage section\'); process.exit(0); }',
    '  let src = fs.readFileSync(HOME_PATH, \"utf8\");',
    '  const start = \"{/* APP-GROWTH-FEATURES-START */}\";',
    '  const end = \"{/* APP-GROWTH-FEATURES-END */}\";',
    '  const section = buildSection(proposedPages);',
    '  if (src.includes(start)) {',
    '    src = src.replace(new RegExp(start + "[\\\\s\\\\S]*?" + end), section);',
    '  } else {',
    '    src = src.replace(\"</main>\", section + "\\n      </main>");',
    '  }',
    '  fs.writeFileSync(HOME_PATH, src);',
    '  console.log(\'Enhanced home updated with feature sections\');',
    '})();'
  ].join('\n'),

  advertise_new_features_in_home: [
    '#!/usr/bin/env node',
    'const fs = require(\'fs\');',
    'const path = require(\'path\');',
    'const REPORT = path.join(__dirname, \"..\", \"..\", \"data\", \"reports\", \"app-growth\", \"app-growth-actions.json\");',
    'const HOME_PATH = path.join(__dirname, \"..\", \"..\", \"pages\", \"enhanced-home.tsx\");',
    '',
    '(function main() {',
    '  if (!fs.existsSync(REPORT)) { console.error(\'No app-growth report found\'); process.exit(1); }',
    '  if (!fs.existsSync(HOME_PATH)) { console.error(\'Enhanced home page not found\'); process.exit(1); }',
    '  let src = fs.readFileSync(HOME_PATH, \"utf8\");',
    '  const bannerStart = \"{/* APP-GROWTH-BANNER-START */}\";',
    '  const bannerEnd = \"{/* APP-GROWTH-BANNER-END */}\";',
    '  const banner = [',
    '    \"\",',
    '    \"        \" + bannerStart,',
    '    \"        <div className=\\\"mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded\\\">\",',
    '    \"          <strong>New:</strong> Explore our latest pages and capabilities below.\",',
    '    \"        </div>\",',
    '    \"        \" + bannerEnd',
    '  ].join(\"\\n\");',
    '  if (src.includes(bannerStart)) {',
    '    src = src.replace(new RegExp(bannerStart + "[\\\\s\\\\S]*?" + bannerEnd), banner);',
    '  } else {',
    '    src = src.replace(\"<main>\", \"<main>\" + banner);',
    '  }',
    '  fs.writeFileSync(HOME_PATH, src);',
    '  console.log(\'Homepage banner ensured\');',
    '})();'
  ].join('\n'),

  update_sitemap_after_new_pages: [
    '#!/usr/bin/env node',
    'const { spawnSync } = require(\'child_process\');',
    '',
    '(function main() {',
    '  const res = spawnSync(\'npm\', [\'run\', \'sitemap\'], { stdio: \"inherit\" });',
    '  process.exit(res.status || 0);',
    '})();'
  ].join('\n')
};

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No app-growth report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const { actions = [] } = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const action of actions) {
    const code = AGENTS[action];
    if (!code) {
      console.error(`Unknown action: ${action}`);
      continue;
    }
    const fp = path.join(OUT_DIR, `${action}.cjs`);
    fs.writeFileSync(fp, code + '\n');
    try { fs.chmodSync(fp, 0o755); } catch {}
    created.push(fp);
  }
  const registry = path.join(__dirname, 'logs', 'app-growth-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} app growth agent(s)`);
}

main();