#!/usr/bin/env node
/*
 * Autonomous Health Monitor
 * - Scans internal links and public asset references across the codebase
 * - Logs warnings to automation/logs/auto-health-monitor.log
 * - Runs on an interval; safe to run locally without credentials
 */

import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../../');
const projectRoot = path.resolve(__dirname, '../../..');

const logsDir = path.join(projectRoot, 'automation', 'logs');
const logFilePath = path.join(logsDir, 'auto-health-monitor.log');
const configPath = path.join(__dirname, 'config.json');

function ensureDirectoryExists(directoryPath) {
  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch {}
}

ensureDirectoryExists(logsDir);

function readConfig() {
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { intervalMs: 15 * 60 * 1000 };
  }
}

function appendLog(message) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;
  try {
    fs.appendFileSync(logFilePath, line, 'utf8');
  } catch {}
  // Always echo to stdout for interactive runs
  process.stdout.write(line);
}

function* walkFiles(startDir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.mdx']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (extensions.includes(path.extname(entry.name))) {
          yield full;
        }
      }
    }
  }
}

function collectRoutes() {
  const routes = new Set(['/']);
  const candidates = [
    path.join(projectRoot, 'pages'),
    path.join(projectRoot, 'src', 'pages'),
    path.join(projectRoot, 'app'),
    path.join(projectRoot, 'src', 'app'),
  ];
  for (const base of candidates) {
    if (!fs.existsSync(base)) continue;
    for (const filePath of walkFiles(base, ['.js', '.jsx', '.ts', '.tsx', '.mdx'])) {
      const relative = path.relative(base, filePath);
      if (!relative) continue;
      // Exclude API and special files
      if (relative.startsWith('api' + path.sep)) continue;
      if (relative.endsWith('_app.tsx') || relative.endsWith('_app.jsx')) continue;
      if (relative.endsWith('_document.tsx') || relative.endsWith('_document.jsx')) continue;
      if (relative.endsWith('layout.tsx') || relative.endsWith('layout.jsx')) continue;
      // Derive route
      let withoutExt = relative.replace(/\.(js|jsx|ts|tsx|mdx)$/i, '');
      // Index routes
      if (withoutExt.endsWith('/index')) withoutExt = withoutExt.slice(0, -('/index'.length));
      // dynamic segments e.g. [slug] -> treat parent as route root
      if (withoutExt.includes('[')) {
        withoutExt = withoutExt.split('/').filter((seg) => !seg.includes('[')).join('/');
      }
      const route = '/' + withoutExt.replace(/\\/g, '/');
      routes.add(route === '//' ? '/' : route);
    }
  }
  return routes;
}

function isExternal(href) {
  return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

function normalizeInternalPath(href) {
  if (!href.startsWith('/')) return null;
  // drop hash and query
  const noHash = href.split('#')[0];
  const noQuery = noHash.split('?')[0];
  return noQuery || '/';
}

function listPublicAsset(assetPath) {
  const publicDirs = [
    path.join(projectRoot, 'public'),
    path.join(projectRoot, 'src', 'public'),
  ];
  for (const base of publicDirs) {
    const full = path.join(base, assetPath);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function scanCodeForIssues() {
  const routes = collectRoutes();
  const issues = { missingRoutes: [], missingAssets: [], totalFilesScanned: 0 };

  const codeDirs = [
    path.join(projectRoot, 'app'),
    path.join(projectRoot, 'pages'),
    path.join(projectRoot, 'src'),
  ];

  const hrefRegex = /href\s*=\s*{?\s*["'`]([^"'`\s}]+)["'`]/g;
  const imgRegex = /(?:src|image|contentUrl)\s*=\s*{?\s*["'`]([^"'`\s}]+)["'`]/g;

  for (const dir of codeDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const filePath of walkFiles(dir)) {
      issues.totalFilesScanned += 1;
      let text = '';
      try { text = fs.readFileSync(filePath, 'utf8'); } catch { continue; }

      // Links
      hrefRegex.lastIndex = 0;
      let match;
      while ((match = hrefRegex.exec(text)) !== null) {
        const href = match[1];
        if (!href || isExternal(href)) continue;
        const normalized = normalizeInternalPath(href);
        if (!normalized) continue;
        // Allow hash-only and root
        if (normalized === '/' || normalized.startsWith('/#')) continue;
        if (!routes.has(normalized) && !routes.has(normalized.replace(/\/$/, ''))) {
          issues.missingRoutes.push({ file: filePath, href: normalized });
        }
      }

      // Assets
      imgRegex.lastIndex = 0;
      let m2;
      while ((m2 = imgRegex.exec(text)) !== null) {
        const src = m2[1];
        if (!src || isExternal(src)) continue;
        if (!src.startsWith('/')) continue; // only public-root assets
        const exists = listPublicAsset(src.slice(1));
        if (!exists) {
          issues.missingAssets.push({ file: filePath, src });
        }
      }
    }
  }

  return issues;
}

function summarizeIssues(issues) {
  const parts = [];
  parts.push(`Files scanned: ${issues.totalFilesScanned}`);
  parts.push(`Missing internal routes: ${issues.missingRoutes.length}`);
  parts.push(`Missing public assets: ${issues.missingAssets.length}`);
  return parts.join(' | ');
}

function logIssueDetails(issues) {
  if (issues.missingRoutes.length) {
    appendLog('Details: Missing routes');
    for (const item of issues.missingRoutes.slice(0, 50)) {
      appendLog(`  - ${item.href} referenced in ${path.relative(projectRoot, item.file)}`);
    }
    if (issues.missingRoutes.length > 50) appendLog(`  ... and ${issues.missingRoutes.length - 50} more`);
  }
  if (issues.missingAssets.length) {
    appendLog('Details: Missing assets');
    for (const item of issues.missingAssets.slice(0, 50)) {
      appendLog(`  - ${item.src} referenced in ${path.relative(projectRoot, item.file)}`);
    }
    if (issues.missingAssets.length > 50) appendLog(`  ... and ${issues.missingAssets.length - 50} more`);
  }
}

async function runOnce() {
  const start = Date.now();
  appendLog('Auto Health Monitor: scan started');
  const issues = scanCodeForIssues();
  const summary = summarizeIssues(issues);
  appendLog(`Auto Health Monitor: scan finished in ${Date.now() - start}ms | ${summary}`);
  if (issues.missingRoutes.length || issues.missingAssets.length) {
    logIssueDetails(issues);
  }
}

async function main() {
  const { intervalMs } = readConfig();
  appendLog(`Auto Health Monitor initialized. Interval: ${intervalMs}ms`);
  await runOnce();
  const timer = setInterval(runOnce, intervalMs);
  // Keep process alive
  function shutdown(signal) {
    appendLog(`Received ${signal}. Exiting...`);
    clearInterval(timer);
    process.exit(0);
  }
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

main().catch((err) => {
  appendLog(`Fatal error: ${err?.stack || err?.message || String(err)}`);
  process.exit(1);
});


