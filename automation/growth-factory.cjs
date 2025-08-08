#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'growth-agents');
const LOGS_DIR = path.join(__dirname, 'logs');
const REGISTRY = path.join(LOGS_DIR, 'growth-agents.json');

const REPORTS = {
  linkedin: path.join(__dirname, '..', 'data', 'reports', 'marketing', 'linkedin', 'linkedin-posts.json'),
  variation: path.join(__dirname, '..', 'data', 'reports', 'variation', 'variation-report.json')
};

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

function safeReadJson(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return null;
  }
}

function createAgentFile(filePath, contents) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, contents);
    try { fs.chmodSync(filePath, 0o755); } catch {}
    return true;
  }
  return false;
}

function agentsFromLinkedIn(posts) {
  const created = [];
  for (const post of posts.slice(0, 50)) {
    const slug = slugify(post.text);
    const agents = [
      {
        name: `linkedin-to-blog-${slug}.cjs`,
        code: `#!/usr/bin/env node\nconsole.log('Generating blog draft from LinkedIn post: ${slug}');\n// TODO: Create or update pages/blog/${slug}.tsx with structured content from LinkedIn text\n// - Extract headline, bullets, CTA\n// - Ensure SEO fields and internal links\n`
      },
      {
        name: `linkedin-to-landing-cta-${slug}.cjs`,
        code: `#!/usr/bin/env node\nconsole.log('Creating landing CTA update from LinkedIn post: ${slug}');\n// TODO: Update relevant landing page sections with fresh CTA copy derived from LinkedIn\n// - Identify target pages by tags in post\n// - Insert CTA blocks or cards via safe codemod\n`
      }
    ];

    for (const agent of agents) {
      const fp = path.join(OUT_DIR, agent.name);
      if (createAgentFile(fp, agent.code)) created.push(fp);
    }
  }
  return created;
}

function agentsFromVariation(variation) {
  const created = [];
  const duplicates = Array.isArray(variation?.duplicates) ? variation.duplicates : [];
  for (const dup of duplicates.slice(0, 50)) {
    const pat = slugify(dup.pattern || dup.key || 'pattern');
    const fp = path.join(OUT_DIR, `dedupe-and-expand-${pat}.cjs`);
    const code = `#!/usr/bin/env node\nconsole.log('Dedupe and expand content cluster for: ${pat}');\n// TODO: Resolve duplicate topics and create a pillar page with supporting internal links\n// - Identify overlapping pages\n// - Propose redirects or canonical tags\n// - Generate outline for pillar + cluster articles\n`;
    if (createAgentFile(fp, code)) created.push(fp);
  }
  return created;
}

function main() {
  ensureDir(OUT_DIR);
  ensureDir(LOGS_DIR);

  const created = [];

  const linkedinReport = safeReadJson(REPORTS.linkedin);
  if (linkedinReport?.posts?.length) {
    created.push(...agentsFromLinkedIn(linkedinReport.posts));
  }

  const variationReport = safeReadJson(REPORTS.variation);
  if (variationReport) {
    created.push(...agentsFromVariation(variationReport));
  }

  fs.writeFileSync(REGISTRY, JSON.stringify({
    timestamp: new Date().toISOString(),
    created
  }, null, 2));

  console.log(`Growth factory completed. Created ${created.length} agents.`);
}

if (require.main === module) {
  main();
}

module.exports = { main };