const fs = require('fs');
const path = require('path');

const FRONT_PAGE = path.resolve(__dirname, '..', 'pages', 'main', 'front', 'index.tsx');

const START_MARK = '{/* AUTO-GENERATED: FRONT_FUTURIZER_START */}';
const END_MARK = '{/* AUTO-GENERATED: FRONT_FUTURIZER_END */}';

function buildGeneratedSection() {
  const cards = [
    { title: 'Automation Hub', desc: 'Factories, agents, and live workflows', href: '/automation' },
    { title: 'Site Health', desc: 'A11y, performance, and link integrity', href: '/site-health' },
    { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts', href: '/reports/seo' },
    { title: 'AI Trends', desc: 'Signals inspiring new factories and experiments', href: '/reports/ai-trends' },
    { title: 'Newsroom', desc: 'Autonomous updates and product evolution', href: '/newsroom' },
    { title: 'Documentation', desc: 'Technical notes and guides', href: '/.netlify/functions/docs-index-runner' },
    { title: 'AI Changelog', desc: 'Summarized autonomous changes and highlights', href: '/newsroom' },
    { title: 'Live Pipelines', desc: 'Observe CI pipelines, logs, and artifacts', href: '/.netlify/functions/netlify-auto-healer-runner' }
  ];

  const features = [
    'Self‑improving autonomous agents',
    'Repo sync to main with safe diffs',
    'Zero‑ops, cloud‑native runtime',
    'Defense‑in‑depth guardrails',
  ];
  const capabilities = [
    'Code quality and refactors',
    'A11y and performance tuning',
    'Content curation and SEO',
    'Observability and analytics',
  ];
  const benefits = [
    '24/7 progress without manual ops',
    'Faster feedback with small edits',
    'Higher confidence via layered checks',
    'Links to hubs, reports, and docs',
  ];

  const cardItems = cards.map((c) => (
    c.external
      ? `\n            <a key="${c.title}" href=\"${c.href}\" target=\"_blank\" rel=\"noopener\" className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo\">\n              <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n              <div className=\"text-base font-semibold\">${c.title}</div>\n              <div className=\"mt-1 text-sm text-white/75\">${c.desc}</div>\n              <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div>\n            </a>`
      : `\n            <Link key=\"${c.title}\" href=\"${c.href}\">\n              <a className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo\">\n                <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n                <div className=\"text-base font-semibold\">${c.title}</div>\n                <div className=\"mt-1 text-sm text-white/75\">${c.desc}</div>\n                <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div>\n              </a>\n            </Link>`
  )).join('\n');

  const list = (items) => items.map((t) => (
    `\n            <li className=\"flex items-start gap-2\">\n              <span className=\"mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse\" />\n              <span className=\"text-sm text-white/80\">${t}</span>\n            </li>`
  )).join('\n');

  return [
    START_MARK,
    `\n        <section id=\"front-futurizer\" className=\"mx-auto max-w-7xl px-6 pb-20\">\n          <h2 className=\"text-center text-2xl font-bold tracking-wide text-white/90\">Explore More — Features, Capabilities, Benefits</h2>\n          <p className=\"mx-auto mt-2 max-w-3xl text-center text-sm text-white/70\">A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc.</p>\n          <div className=\"mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3\">\n            <div className=\"rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl\">\n              <div className=\"text-lg font-semibold\">Features</div>\n              <ul className=\"mt-3 space-y-2\">${list(features)}\n              </ul>\n            </div>\n            <div className=\"rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl\">\n              <div className=\"text-lg font-semibold\">Capabilities</div>\n              <ul className=\"mt-3 space-y-2\">${list(capabilities)}\n              </ul>\n            </div>\n            <div className=\"rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl\">\n              <div className=\"text-lg font-semibold\">Benefits</div>\n              <ul className=\"mt-3 space-y-2\">${list(benefits)}\n              </ul>\n            </div>\n          </div>\n          <div className=\"mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3\">\n${cardItems}\n          </div>\n        </section>`,
    END_MARK,
  ].join('\n');
}

function ensureImports(content) {
  // Ensure Link import exists
  if (!content.includes("from 'next/link'")) {
    content = content.replace(/(import\s+Head\s+from\s+'next\/head';?\s*)/, `$1\nimport Link from 'next/link';\n`);
  }
  return content;
}

function insertOrUpdate() {
  if (!fs.existsSync(FRONT_PAGE)) {
    throw new Error(`Front page not found at ${FRONT_PAGE}`);
  }
  let content = fs.readFileSync(FRONT_PAGE, 'utf8');
  content = ensureImports(content);

  const generated = buildGeneratedSection();
  const hasMarks = content.includes(START_MARK) && content.includes(END_MARK);

  if (hasMarks) {
    const newContent = content.replace(new RegExp(`${START_MARK}[\s\S]*?${END_MARK}`), generated);
    if (newContent !== content) {
      fs.writeFileSync(FRONT_PAGE, newContent, 'utf8');
      console.log('Updated generated section in front page.');
    } else {
      console.log('No changes needed.');
    }
    return;
  }

  // Insert before Footer or before closing main
  const footerIdx = content.indexOf('{/* Footer */}');
  const mainCloseIdx = content.lastIndexOf('</main>');
  let insertAt = -1;
  if (footerIdx !== -1) insertAt = footerIdx;
  else if (mainCloseIdx !== -1) insertAt = mainCloseIdx;

  if (insertAt === -1) {
    // Fallback: append before last closing div
    const divCloseIdx = content.lastIndexOf('</div>');
    insertAt = divCloseIdx !== -1 ? divCloseIdx : content.length;
  }

  const newContent = content.slice(0, insertAt) + `\n        ${generated}\n` + content.slice(insertAt);
  fs.writeFileSync(FRONT_PAGE, newContent, 'utf8');
  console.log('Inserted generated section in front page.');
}

try {
  insertOrUpdate();
} catch (e) {
  console.error('front-futurizer failed:', e);
  process.exitCode = 1;
}