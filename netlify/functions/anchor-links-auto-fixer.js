const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function addIdsToHeadings(content) {
  let changed = false;
  const pattern = /<h([2-4])([^>]*)>([^<]+)<\/h\1>/g;
  const result = content.replace(pattern, (match, level, attrs, text) => {
    if (/\bid\s*=/.test(attrs)) return match;
    const slug = slugify(text);
    if (!slug) return match;
    changed = true;
    const safeAttrs = attrs || '';
    return `<h${level} id="${slug}"${safeAttrs}>${text}</h${level}>`;
  });
  return { changed, result };
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  try {
    const workspace = process.cwd();
    const targets = [
      path.join(workspace, 'pages/**/*.tsx'),
      path.join(workspace, 'docs/**/*.{md,mdx}')
    ];

    let filesChanged = 0;
    let headingsInjected = 0;

    for (const pattern of targets) {
      const files = glob.sync(pattern, { nodir: true, absolute: true, ignore: ['**/node_modules/**', '**/.next/**'] });
      for (const file of files) {
        const ext = path.extname(file);
        const isTsx = ext === '.tsx' || ext === '.jsx';
        const isMd = ext === '.md' || ext === '.mdx';
        if (!isTsx && !isMd) continue;
        const before = fs.readFileSync(file, 'utf8');
        const { changed, result } = addIdsToHeadings(before);
        if (changed && result !== before) {
          fs.writeFileSync(file, result, 'utf8');
          filesChanged += 1;
          const addedCount = (result.match(/\sid="[^"]+"/g) || []).length - (before.match(/\sid="[^"]+"/g) || []).length;
          headingsInjected += Math.max(0, addedCount);
        }
      }
    }

    // Persist a small report
    const reportDir = path.join(workspace, 'data/reports/anchor-fixer');
    ensureDir(reportDir);
    const reportPath = path.join(reportDir, `report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
    fs.writeFileSync(reportPath, JSON.stringify({ filesChanged, headingsInjected, createdAt: new Date().toISOString() }, null, 2));

    // Git sync
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run(`git commit -m "chore(a11y): add missing heading anchors (${filesChanged} files, ${headingsInjected} ids) [skip ci]" || true`);
    run('git push origin main || true');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, filesChanged, headingsInjected })
    };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};