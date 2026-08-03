#!/usr/bin/env node
/**
 * content-loop-runner.cjs
 *
 * Generates static HTML blog posts into docs/blog/<slug>/index.html
 * for GitHub Pages deployment on ziontechgroup.com
 */

const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const REPO = process.cwd();
const BLOG_DIR = path.join(REPO, 'blog');
const GENERATED_LOG = path.join(REPO, 'automation', 'content-loop', 'generated', 'log.jsonl');
const LOCK_FILES = ['.git/index.lock', '.git/HEAD.lock', '.git/index.stash.lock'];
const SHOULD_PUSH = String(process.env.HERMES_CONTENT_LOOP_PUSH || '').toLowerCase() === 'true';
const POSTS_PER_RUN = parseInt(process.env.HERMES_CONTENT_LOOP_POSTS || '3', 10);

const SITE = 'https://ziontechgroup.com';
const ORG = 'Zion Tech Group';
const PHONE = '+1 302 464 0950';
const EMAIL = 'kleber@ziontechgroup.com';

function now() { return new Date().toISOString(); }
function run(cmd, opts = {}) {
  try {
    const out = execSync(cmd, { cwd: REPO, encoding: 'utf8', stdio: 'pipe', timeout: 900000, ...opts });
    return { ok: true, out: String(out.stdout || '').slice(-4000) };
  } catch (e) {
    return { ok: false, out: String((e.stdout || '') + (e.stderr || '')).slice(-4000), code: e.status || 1 };
  }
}
function logEvent(evt) {
  const line = JSON.stringify({ ts: now(), ...evt });
  fs.mkdirSync(path.dirname(GENERATED_LOG), { recursive: true });
  fs.appendFileSync(GENERATED_LOG, line + '\n', 'utf8');
}
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function cleanLocks() {
  for (const lock of LOCK_FILES) {
    const p = path.join(REPO, lock);
    if (fs.existsSync(p)) {
      try { fs.unlinkSync(p); } catch {}
    }
  }
}

const BLOG_BODY_TEMPLATES = {
  "automation": `<p>AI automation is moving from experiments to production workflows. The teams that win in 2026 measure automation by throughput, deflection, and time-to-resolution, not just coverage.</p>
      <h2>Where to start</h2>
      <ul><li>Pick one high-volume, repetitive workflow</li><li>Define success metrics before deploying</li><li>Add human escalation rules from day one</li><li>Measure weekly and tune prompts or routing</li></ul>
      <h2>Common pitfalls</h2><p>Automation without governance creates noise. Avoid broad rollout before proving containment quality and escalation accuracy.</p>
      <h2>Next step</h2><p>Start with a scoped pilot, validate ROI in 30 days, and scale what works.</p>`,
  "cloud": `<p>Cloud spend grows faster than usage when cost visibility is weak. Modern FinOps combines tagging, anomaly detection, and automated recommendations to keep growth efficient.</p>
      <h2>Quick wins</h2><ul><li>Enable budgets and anomaly alerts</li><li>Right-size compute and database tiers</li><li>Reserve steady-state capacity</li><li>Remove orphaned storage and snapshots</li></ul>
      <h2>Governance</h2><p>Weekly cost reviews, tagging standards, and accountable team ownership make savings durable.</p>`,
  "ai": `<p>AI adoption is accelerating across enterprises, but most programs stall without clear ownership, guardrails, and measurable outcomes.</p>
      <h2>What works</h2><ul><li>Start with low-risk, high-value workflows</li><li>Use production data, not demos</li><li>Create operator runbooks and escalation paths</li><li>Review model behavior weekly</li></ul>
      <h2>Outcome</h2><p>With strong governance, AI moves from experiment to reliable operating layer.</p>`,
  "data": `<p>Data strategy in 2026 is less about collecting more signals and more about routing the right signal to the right decision maker at the right time.</p>
      <h2>Patterns</h2><ul><li>Unify batch and streaming in a governed lakehouse</li><li>Use semantic layers for consistent metrics</li><li>Automate anomaly detection and alert routing</li><li>Make data quality a first-class service</li></ul>`,
  "security": `<p>Security operations are changing from manual triage to AI-assisted detection and response. The goal is faster containment with lower analyst fatigue.</p>
      <h2>Key capabilities</h2><ul><li>Normalized telemetry across clouds and endpoints</li><li>Automated enrichment and scoring</li><li>Playbook-driven response with human approval</li><li>Compliance reporting built into workflows</li></ul>`,
  "micro-saas": `<p>Micro-SaaS products can solve narrow problems fast, but only if the buying journey is clear and the integration cost stays low.</p>
      <h2>Decision framework</h2><ul><li>Map build, buy, and integrate options</li><li>Score on time-to-value, control, and cost</li><li>Run a 30-day evaluation with real workflows</li><li>Choose the option that preserves optionality</li></ul>`,
  "it": `<p>Modern IT operations need predictive dispatch, automated knowledge delivery, and real-time visibility across devices and sites.</p>
      <h2>What to automate first</h2><ul><li>Ticket triage and knowledge retrieval</li><li>Parts and inventory forecasting</li><li>Scheduling optimization</li><li>Customer communication before arrival</li></ul>`,
  "fintech": `<p>Financial services AI requires strict accuracy, auditability, and compliance. The best implementations start with narrow use cases and expand only after validation.</p>
      <h2>High-value use cases</h2><ul><li>Transaction monitoring and anomaly scoring</li><li>Underwriting assistance with human review</li><li>Embedded finance orchestration</li><li>Regulatory reporting automation</li></ul>`
};

function createBlogPost({ title, excerpt, keywords, category }) {
  const slug = slugify(title);
  const dir = path.join(BLOG_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'index.html');
  const kw = Array.isArray(keywords) ? keywords.join(', ') : String(keywords || 'AI, IT, automation');
  const body = BLOG_BODY_TEMPLATES[category] || BLOG_BODY_TEMPLATES['automation'];
  const url = `${SITE}/blog/${slug}/`;

  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)} | Zion Tech Group</title>
  <meta name="description" content="${esc(excerpt)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(excerpt)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(excerpt)}" />
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"BlogPosting",
    "headline":"${esc(title)}",
    "description":"${esc(excerpt)}",
    "author":{"@type":"Organization","name":"${esc(ORG)}"},
    "publisher":{"@type":"Organization","name":"${esc(ORG)}","url":"${SITE}"},
    "mainEntityOfPage":"${url}",
    "keywords":"${esc(kw)}"
  }
  </script>
</head>
<body>
  <header>
    <nav>
      <a href="/">Zion Tech Group</a>
      <a href="/services/">Services</a>
      <a href="/blog/">Blog</a>
      <a href="/contact/">Contact</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>${esc(title)}</h1>
      <p class="lead">${esc(excerpt)}</p>
      <div class="body">
        ${body}
      </div>
    </article>
    <div class="cta">
      <a href="/contact/" class="btn-primary">Get Your Custom Proposal →</a>
      <p class="contact">📞 <a href="tel:${PHONE.replace(/\D/g,'')}">${PHONE}</a> · ✉️ <a href="mailto:${EMAIL}">${EMAIL}</a></p>
    </div>
  </main>
  <footer>
    <p>© ${new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
  </footer>
</body>
</html>`;

  fs.writeFileSync(file, content, 'utf8');
  return { slug, file, type: 'blog' };
}

function loadTopics() {
  const topicsPath = path.join(REPO, 'automation', 'content-loop', 'topics.json');
  if (!fs.existsSync(topicsPath)) return { blogs: [] };
  try { return JSON.parse(fs.readFileSync(topicsPath, 'utf8')); }
  catch { return { blogs: [] }; }
}

function generateContent() {
  const { blogs } = loadTopics();
  const created = [];
  const existing = new Set(fs.readdirSync(BLOG_DIR).filter(x => x !== 'page.tsx' && fs.statSync(path.join(BLOG_DIR, x)).isDirectory()));
  const newBlogs = (blogs || []).filter(b => !existing.has(slugify(b.title)));
  for (const blog of newBlogs.slice(0, POSTS_PER_RUN)) {
    const result = createBlogPost(blog);
    created.push(result);
  }
  return { ok: true, created };
}

function gitPush(created) {
  cleanLocks();
  if (created.length === 0) return { ok: true, skipped: true, reason: 'no files created' };

  const filesToAdd = created.map(c => c.file.slice(REPO.length + 1));
  const add = run('git add -- "' + filesToAdd.join('" "') + '"');
  if (!add.ok) return { ok: false, error: add.out };

  const status = run('git status --short');
  if (!status.ok) return { ok: false, error: status.out };
  if (!status.out.trim()) return { ok: true, skipped: true };

  const hash = crypto.randomBytes(6).toString('hex');
  const commit = run('git commit -m "chore(content): ' + hash + '" --no-verify');
  if (!commit.ok && commit.code !== 1) return { ok: false, error: commit.out };

  if (!SHOULD_PUSH) return { ok: true, committed: true, pushed: false, reason: 'push disabled' };

  const push = run('git push origin main');
  if (!push.ok) {
    const pull = run('git pull --rebase origin main');
    if (!pull.ok) return { ok: false, error: pull.out };
    cleanLocks();
    const retry = run('git push origin main');
    if (!retry.ok) return { ok: false, error: retry.out };
  }
  return { ok: true, pushed: true };
}

function main() {
  logEvent({ event: 'start' });
  const gen = generateContent();
  logEvent({ event: 'generate', ...gen });
  const pushed = gitPush(gen.created || []);
  logEvent({ event: 'push', ...pushed });
  console.log('Generated:', JSON.stringify(gen));
  console.log('Push:', JSON.stringify(pushed));
}

main();
