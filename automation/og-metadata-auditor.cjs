#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(absolutePath) {
  try { fs.mkdirSync(absolutePath, { recursive: true }); } catch {}
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function writeFileSafe(p, content) {
  try {
    fs.writeFileSync(p, content);
    return true;
  } catch (e) {
    console.error('Failed to write', p, e.message);
    return false;
  }
}

function listFilesRecursively(dir, extPredicate) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursively(p, extPredicate));
    } else if (extPredicate(p)) {
      results.push(p);
    }
  }
  return results;
}

function extractFirstH1Text(source) {
  const match = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return '';
  const inner = match[1]
    .replace(/<[^>]+>/g, '')
    .replace(/\{[^}]+\}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return inner;
}

function hasDescriptionMetaInsideHead(source) {
  // Quick heuristic: look for name="description" before closing </Head> of any block
  const headBlocks = [];
  let idx = 0;
  while (true) {
    const start = source.indexOf('<Head', idx);
    if (start === -1) break;
    const openEnd = source.indexOf('>', start);
    if (openEnd === -1) break;
    const close = source.indexOf('</Head>', openEnd);
    if (close === -1) break;
    headBlocks.push(source.slice(openEnd + 1, close));
    idx = close + 7;
  }
  if (headBlocks.length === 0) return false;
  return headBlocks.some(block => /name\s*=\s*"description"/i.test(block));
}

function insertDescriptionMeta(source, defaultDescription) {
  // Insert into the first Head block after its opening tag end '>'
  const headStart = source.indexOf('<Head');
  if (headStart === -1) return { updated: source, changed: false, reason: 'no-head' };
  const openEnd = source.indexOf('>', headStart);
  const close = source.indexOf('</Head>', openEnd);
  if (openEnd === -1 || close === -1) return { updated: source, changed: false, reason: 'malformed-head' };

  const before = source.slice(0, openEnd + 1);
  const after = source.slice(openEnd + 1);

  // Determine indentation by peeking next line
  const nextLineIndent = (() => {
    const afterUntilNL = after.match(/\n(\s*)/);
    return afterUntilNL ? afterUntilNL[1] : '  ';
  })();

  const meta = `\n${nextLineIndent}<meta name="description" content=${JSON.stringify(defaultDescription)} />`;
  const updated = before + meta + after;
  return { updated, changed: updated !== source, reason: 'inserted' };
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const pagesDir = path.join(workspaceRoot, 'pages');
  const logDir = path.join(workspaceRoot, 'automation', 'logs');
  ensureDir(logDir);

  const report = {
    startedAt: new Date().toISOString(),
    modifiedFiles: [],
    skipped: [],
    totalFiles: 0,
    notes: [],
  };

  if (!fs.existsSync(pagesDir)) {
    report.notes.push('pages directory not found');
    writeFileSafe(path.join(logDir, 'og-meta-audit.json'), JSON.stringify(report, null, 2));
    console.log('No pages directory found. Exiting.');
    process.exit(0);
  }

  const files = listFilesRecursively(pagesDir, (p) => p.endsWith('.tsx'))
    .filter((p) => !/\/(?:_app|_document|api)\.tsx$/.test(p));
  report.totalFiles = files.length;

  files.forEach((filePath) => {
    const original = readFileSafe(filePath);
    if (!original) { report.skipped.push({ file: filePath, reason: 'read-failed' }); return; }

    if (!original.includes('<Head')) { report.skipped.push({ file: filePath, reason: 'no-head' }); return; }

    if (hasDescriptionMetaInsideHead(original)) { report.skipped.push({ file: filePath, reason: 'has-description' }); return; }

    const h1 = extractFirstH1Text(original);
    const defaultDesc = h1
      ? `${h1} — autonomous cloud automations by Zion.`
      : 'Autonomous cloud automations by Zion — continuously improving in the cloud.';

    const { updated, changed, reason } = insertDescriptionMeta(original, defaultDesc);
    if (changed && updated !== original) {
      if (writeFileSafe(filePath, updated)) {
        report.modifiedFiles.push({ file: path.relative(workspaceRoot, filePath), reason });
      } else {
        report.skipped.push({ file: filePath, reason: 'write-failed' });
      }
    } else {
      report.skipped.push({ file: filePath, reason });
    }
  });

  report.finishedAt = new Date().toISOString();
  writeFileSafe(path.join(logDir, 'og-meta-audit.json'), JSON.stringify(report, null, 2));
  console.log('OG metadata audit completed.', JSON.stringify({ modified: report.modifiedFiles.length, total: report.totalFiles }));
}

main();