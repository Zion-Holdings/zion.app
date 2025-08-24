#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function runTsPrune(projectPath) {
  const args = ['--yes', 'ts-prune', '-p', projectPath];
  const result = spawnSync('npx', args, { encoding: 'utf8' });
  const stdout = (result.stdout || '').trim();
  const stderr = (result.stderr || '').trim();

  if (result.error) {
    throw result.error;
  }

  // ts-prune exits with code 0 even when there are unused exports
  // If it exits non-zero, fallback to collected output for debugging
  const output = stdout || stderr;
  return output;
}

function parseTsPruneOutput(output) {
  // Expected lines like: src/file.ts:123 - exportName
  const lines = output.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  return lines.map(line => {
    const match = line.match(/^(.*?):(\d+)\s*-\s*(.*)$/);
    if (!match) {
      return { raw: line };
    }
    return {
      file: match[1],
      line: Number(match[2]),
      exportName: match[3]
    };
  });
}

function writeReports(findings) {
  const timestampIso = new Date().toISOString();
  const reportsDir = path.join('docs', 'reports');
  ensureDirectoryExists(reportsDir);

  const jsonDir = path.join('data', 'analysis');
  ensureDirectoryExists(jsonDir);

  const mdPath = path.join(reportsDir, 'unused-exports.md');
  const jsonPath = path.join(jsonDir, 'unused-exports.json');

  const total = findings.length;

  const header = `# Unused Exports Report\n\nGenerated: ${timestampIso}\n\nTotal unused exports: ${total}\n`;
  const tableHeader = '\n| File | Line | Export |\n|------|------:|--------|\n';
  const rows = findings
    .filter(f => f.file)
    .map(f => `| ${f.file} | ${f.line} | \`${f.exportName}\` |`)
    .join('\n');
  const rawSection = findings.some(f => !f.file)
    ? `\n\nNotes (unparsed lines):\n\n${findings
        .filter(f => !f.file)
        .map(f => `- ${f.raw}`)
        .join('\n')}`
    : '';

  const mdContent = `${header}${tableHeader}${rows || '\n_None found_'}${rawSection}\n`;
  fs.writeFileSync(mdPath, mdContent, 'utf8');

  const jsonContent = {
    generatedAt: timestampIso,
    total,
    findings
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');

  // Public HTML for site viewing
  const publicDir = path.join('public', 'reports', 'maintenance', 'unused-exports');
  ensureDirectoryExists(publicDir);
  const htmlRows = findings
    .filter(f => f.file)
    .map(f => `<tr><td>${f.file}</td><td style="text-align:right">${f.line}</td><td><code>${f.exportName}</code></td></tr>`) 
    .join('\n');
  const html = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8"/>\n<meta name="viewport" content="width=device-width, initial-scale=1"/>\n<title>Unused Exports Report</title>\n<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,sans-serif;margin:24px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px;font-size:14px}th{background:#f3f4f6;text-align:left}</style>\n</head>\n<body>\n<h1>Unused Exports Report</h1>\n<p>Generated: ${timestampIso}. Total unused exports: ${total}.</p>\n<table>\n<thead><tr><th>File</th><th style="text-align:right">Line</th><th>Export</th></tr></thead>\n<tbody>\n${htmlRows || '<tr><td colspan="3"><em>None found</em></td></tr>'}\n</tbody>\n</table>\n</body>\n</html>`;
  fs.writeFileSync(path.join(publicDir, 'index.html'), html, 'utf8');

  return { mdPath, jsonPath, htmlPath: path.join(publicDir, 'index.html') };
}

(function main() {
  const tsconfigPath = fs.existsSync('tsconfig.json') ? 'tsconfig.json' : null;
  if (!tsconfigPath) {
    console.error('tsconfig.json not found. Skipping unused exports scan.');
    process.exit(0);
  }

  console.log('Running ts-prune to detect unused exports...');
  const output = runTsPrune(tsconfigPath);
  const findings = output ? parseTsPruneOutput(output) : [];
  const parsedFindings = findings.filter(f => f.file);

  const { mdPath, jsonPath, htmlPath } = writeReports(parsedFindings);
  console.log(`Report written to: ${mdPath} and ${jsonPath} and ${htmlPath}`);
})();