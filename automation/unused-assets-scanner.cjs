#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const WORKSPACE_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(WORKSPACE_ROOT, 'public');
const REPORTS_DIR = path.join(PUBLIC_DIR, 'reports');
const OUTPUT_JSON = path.join(REPORTS_DIR, 'unused-assets.json');

const IGNORE_DIRS = new Set([
  'node_modules', '.git', '.next', 'out', '.husky', '.cursor'
]);

const CODE_DIRS = [
  path.join(WORKSPACE_ROOT, 'pages'),
  path.join(WORKSPACE_ROOT, 'components'),
  path.join(WORKSPACE_ROOT, 'styles'),
  path.join(WORKSPACE_ROOT, 'automation'),
  path.join(WORKSPACE_ROOT, 'netlify', 'functions'),
  path.join(WORKSPACE_ROOT, 'scripts')
];

const CODE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.mdx', '.cjs', '.mjs', '.css', '.scss']);

function listFilesRecursively(startDir, filterFn) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
      } else if (!filterFn || filterFn(abs)) {
        results.push(abs);
      }
    }
  }
  walk(startDir);
  return results;
}

function getAllAssets() {
  const assets = listFilesRecursively(PUBLIC_DIR, (p) => {
    const rel = path.relative(PUBLIC_DIR, p).replace(/\\/g, '/');
    if (!rel) return false;
    if (rel === 'sitemap.xml' || rel === 'robots.txt') return false;
    if (rel.startsWith('reports/')) return false; // keep reports out of scan
    return true;
  });
  return assets;
}

function getAllCodeFiles() {
  const files = [];
  for (const dir of CODE_DIRS) {
    files.push(...listFilesRecursively(dir, (p) => CODE_EXTS.has(path.extname(p))));
  }
  return files;
}

function buildCodeIndex(files) {
  const MAX_FILE_SIZE = 512 * 1024; // 512KB guard per file
  let concatenated = '';
  for (const file of files) {
    try {
      const stat = fs.statSync(file);
      if (stat.size > MAX_FILE_SIZE) continue;
      const content = fs.readFileSync(file, 'utf8');
      concatenated += `\n\n/* FILE:${path.relative(WORKSPACE_ROOT, file)} */\n` + content;
    } catch {}
  }
  return concatenated;
}

function isAssetReferenced(assetAbsPath, codeIndex) {
  const relFromPublic = path.relative(PUBLIC_DIR, assetAbsPath).replace(/\\/g, '/');
  const withLeadingSlash = '/' + relFromPublic;
  const fileNameOnly = path.basename(assetAbsPath);

  // Simple checks: full path with and without leading slash, and file name only
  const candidates = [relFromPublic, withLeadingSlash, fileNameOnly];
  for (const c of candidates) {
    if (c && codeIndex.includes(c)) return true;
  }
  return false;
}

function formatBytes(bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 B';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

function main() {
  const startedAt = new Date().toISOString();
  const assets = getAllAssets();
  const codeFiles = getAllCodeFiles();
  const codeIndex = buildCodeIndex(codeFiles);

  const unused = [];
  for (const asset of assets) {
    const referenced = isAssetReferenced(asset, codeIndex);
    if (!referenced) {
      let stat;
      try { stat = fs.statSync(asset); } catch { stat = undefined; }
      unused.push({
        path: '/' + path.relative(PUBLIC_DIR, asset).replace(/\\/g, '/'),
        sizeBytes: stat ? stat.size : null,
        size: stat ? formatBytes(stat.size) : null,
        modifiedAt: stat ? stat.mtime.toISOString() : null
      });
    }
  }

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    totalAssets: assets.length,
    totalUnused: unused.length,
    unused
  };
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(report, null, 2));
  console.log(`Unused assets report written to ${path.relative(WORKSPACE_ROOT, OUTPUT_JSON)} with ${unused.length} items.`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error('unused-assets-scanner failed:', err && err.stack || String(err));
    process.exit(1);
  }
}