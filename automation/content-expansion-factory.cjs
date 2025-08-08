#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'content-expansion-agents');
const LOGS_DIR = path.join(__dirname, 'logs');
const REGISTRY = path.join(LOGS_DIR, 'content-expansion-agents.json');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'marketing', 'linkedin', 'linkedin-pro-posts.json');

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

function createAgent(name, code) {
  const fp = path.join(OUT_DIR, name);
  if (!fs.existsSync(fp)) {
    fs.writeFileSync(fp, code);
    try { fs.chmodSync(fp, 0o755); } catch {}
    return fp;
  }
  return null;
}

function generateAgents(posts) {
  const created = [];
  for (const post of posts.slice(0, 100)) {
    const slug = slugify(post.text);

    const defs = [
      {
        name: `propost-to-service-page-${slug}.cjs`,
        code: `#!/usr/bin/env node\nconsole.log('Expanding service page from pro post: ${slug}');\n// TODO: Map pro post to /pages/services/... and update benefits, CTA, and case study snippets\n`
      },
      {
        name: `propost-to-blog-series-${slug}.cjs`,
        code: `#!/usr/bin/env node\nconsole.log('Creating blog series outline from pro post: ${slug}');\n// TODO: Create outline for a 3-part blog series and scaffold TSX files under /pages/blog\n`
      },
      {
        name: `propost-to-homepage-banner-${slug}.cjs`,
        code: `#!/usr/bin/env node\nconsole.log('Injecting homepage banner/CTA from pro post: ${slug}');\n// TODO: Update homepage hero or CTA panel with summarized message and deep link\n`
      }
    ];

    for (const def of defs) {
      const fp = createAgent(def.name, def.code);
      if (fp) created.push(fp);
    }
  }
  return created;
}

function main() {
  ensureDir(OUT_DIR);
  ensureDir(LOGS_DIR);

  if (!fs.existsSync(REPORT)) {
    console.error('No LinkedIn Pro posts report found');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const posts = Array.isArray(data?.posts) ? data.posts : [];

  const created = generateAgents(posts);

  fs.writeFileSync(REGISTRY, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Content expansion factory completed. Created ${created.length} agents.`);
}

if (require.main === module) main();

module.exports = { main };