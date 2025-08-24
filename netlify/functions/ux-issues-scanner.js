const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function writeFileEnsuringDir(targetPath, content) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, content, 'utf8');
}

function listFiles(dir, matcher) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    if (!fs.existsSync(current)) continue;
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (matcher(full)) out.push(full);
    }
  }
  return out;
}

function scanLargeAssets(root) {
  const publicDir = path.join(root, 'public');
  const rasterThreshold = 800 * 1024; // 800 KB
  const svgThreshold = 300 * 1024; // 300 KB
  const images = listFiles(publicDir, (f) => /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(f));
  const issues = [];
  for (const img of images) {
    try {
      const size = fs.statSync(img).size;
      const isSvg = /\.svg$/i.test(img);
      const limit = isSvg ? svgThreshold : rasterThreshold;
      if (size > limit) {
        issues.push({ path: path.relative(root, img), size });
      }
    } catch {}
  }
  return { count: issues.length, issues };
}

function toMarkdown(report) {
  const lines = [];
  lines.push('# UX Issues Report');
  lines.push('');
  lines.push(`Generated at: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`Found ${report.largeAssets.count} large assets exceeding thresholds.`);
  if (report.largeAssets.issues.length) {
    lines.push('');
    lines.push('## Large Assets');
    for (const it of report.largeAssets.issues.slice(0, 200)) {
      lines.push(`- ${it.path} — ${(it.size/1024).toFixed(0)} KB`);
    }
  }
  return lines.join('\n');
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async function handler() {
  try {
    const root = path.resolve(__dirname, '..', '..');
    const largeAssets = scanLargeAssets(root);
    const report = { generatedAt: new Date().toISOString(), largeAssets };

    const reportsDir = path.join(root, 'public', 'reports');
    writeFileEnsuringDir(path.join(reportsDir, 'ux-issues.json'), JSON.stringify(report, null, 2));
    writeFileEnsuringDir(path.join(reportsDir, 'ux-issues.md'), toMarkdown(report));

    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add public/reports/ux-issues.*', { stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(reports): update UX issues report [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: '/reports/ux-issues.json' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};