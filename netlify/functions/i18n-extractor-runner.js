const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

function listFilesRecursive(dir, predicate = () => true) {
  const result = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(abs);
      } else if (predicate(abs)) {
        result.push(abs);
      }
    }
  }
  return result;
}

function isSourceFile(filePath) {
  return /\.(js|jsx|ts|tsx)$/i.test(filePath);
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function extractStringsFromSource(source) {
  const results = new Set();
  // 1) Text between > ... < (very naive JSX text extractor)
  const jsxTextRegex = />\s*([^<>{}][^<>{}{\n\r]{2,})\s*</g;
  let m;
  while ((m = jsxTextRegex.exec(source))) {
    const text = m[1].trim();
    if (text.length >= 3 && /[A-Za-z]/.test(text) && !/^https?:\/\//i.test(text)) results.add(text);
  }
  // 2) String literals in quotes (avoid imports/paths)
  const litRegex = /(['"])((?:\\\1|.)*?)\1/g; // matches '...' or "..."
  while ((m = litRegex.exec(source))) {
    const text = (m[2] || '').trim();
    if (text.length >= 3 && /[A-Za-z]/.test(text) && !/\.(png|jpg|jpeg|gif|svg|webp|avif|css|js|ts|tsx|jsx|html|mdx?)$/i.test(text)) {
      if (!text.includes('{') && !text.includes('}') && !text.includes('<') && !text.includes('>')) {
        results.add(text);
      }
    }
  }
  return Array.from(results).
    map((s) => s.replace(/\s+/g, ' ').trim()).
    filter((s) => s.length >= 3 && s.length <= 160);
}

function writeFileEnsured(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.handler = async () => {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const logs = [];

  const srcDirs = ['pages', 'components'];
  const srcFiles = srcDirs
    .map((d) => path.join(repoRoot, d))
    .flatMap((abs) => listFilesRecursive(abs, isSourceFile));

  const allStrings = new Set();
  for (const f of srcFiles) {
    const content = readFileSafe(f);
    const strings = extractStringsFromSource(content);
    strings.forEach((s) => allStrings.add(s));
  }

  const extracted = Array.from(allStrings).sort();
  const outJsonPath = path.join(repoRoot, 'data', 'i18n', 'extracted-en.json');
  writeFileEnsured(outJsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), count: extracted.length, strings: extracted }, null, 2));

  // Simple HTML view
  const htmlRows = extracted.map((s) => `<tr><td style="padding:6px;border-bottom:1px solid #eee">${s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</td></tr>`).join('\n');
  const html = `<!doctype html><html><head><meta charset="utf-8"/><title>i18n Extractor</title><meta name="viewport" content="width=device-width, initial-scale=1"/><style>body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;margin:24px} h1{font-size:20px;margin:0 0 12px} table{border-collapse:collapse;width:100%} thead td{font-weight:700;background:#fafafa;border-bottom:1px solid #eee}</style></head><body><h1>i18n Extractor</h1><div>Generated: ${new Date().toISOString()}</div><div>Strings: ${extracted.length}</div><hr/><table><thead><tr><td>String</td></tr></thead><tbody>${htmlRows || '<tr><td style="padding:6px">No strings found</td></tr>'}</tbody></table></body></html>`;
  writeFileEnsured(path.join(repoRoot, 'public', 'reports', 'i18n', 'index.html'), html);

  // Commit and push
  try {
    const syncRes = runNode('automation/advanced-git-sync.cjs');
    logs.push(syncRes.stdout || 'git sync done');
    if (syncRes.stderr) logs.push(syncRes.stderr);
  } catch (e) {
    logs.push('git sync failed: ' + String(e));
  }

  return { statusCode: 200, body: logs.join('\n') };
};