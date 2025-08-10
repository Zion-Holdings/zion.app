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

  return { mdPath, jsonPath };
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

  const { mdPath, jsonPath } = writeReports(parsedFindings);
  console.log(`Report written to: ${mdPath} and ${jsonPath}`);
})();