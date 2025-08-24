const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function analyzeTypeHealth(rootDir) {
  const files = glob.sync('**/*.{ts,tsx}', { cwd: rootDir, nodir: true, ignore: ['node_modules/**', '.next/**', 'out/**'] });
  const perFile = [];
  let totals = { files: 0, any: 0, tsIgnore: 0, eslintDisable: 0, unknown: 0 };

  for (const rel of files) {
    const abs = path.join(rootDir, rel);
    const src = fs.readFileSync(abs, 'utf8');
    const anyCount = (src.match(/\bany\b/g) || []).length;
    const tsIgnoreCount = (src.match(/@ts-ignore/g) || []).length;
    const eslintDisableCount = (src.match(/eslint-disable(-next-line)?/g) || []).length;
    const unknownCount = (src.match(/\bunknown\b/g) || []).length;
    totals.files += 1;
    totals.any += anyCount;
    totals.tsIgnore += tsIgnoreCount;
    totals.eslintDisable += eslintDisableCount;
    totals.unknown += unknownCount;

    perFile.push({ file: rel, any: anyCount, tsIgnore: tsIgnoreCount, eslintDisable: eslintDisableCount, unknown: unknownCount, score: anyCount * 3 + tsIgnoreCount * 5 + eslintDisableCount * 2 + unknownCount });
  }

  perFile.sort((a, b) => b.score - a.score);
  return { totals, perFile };
}

function writeReports(rootDir, data) {
  const publicDir = path.join(rootDir, 'public', 'automation');
  const docsDir = path.join(rootDir, 'docs');
  ensureDir(publicDir);
  ensureDir(docsDir);

  // JSON
  const jsonPath = path.join(publicDir, 'type-health.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), ...data }, null, 2));

  // Markdown
  const md = [];
  md.push('# Type Health Report');
  md.push('');
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push('');
  md.push(`- Files scanned: ${data.totals.files}`);
  md.push(`- any: ${data.totals.any}`);
  md.push(`- @ts-ignore: ${data.totals.tsIgnore}`);
  md.push(`- eslint-disable: ${data.totals.eslintDisable}`);
  md.push(`- unknown: ${data.totals.unknown}`);
  md.push('');
  md.push('## Top files to improve');
  md.push('');
  md.push('| Rank | File | any | @ts-ignore | eslint-disable | unknown | Score |');
  md.push('| ---: | :--- | --: | ---------: | -------------: | ------: | ----: |');
  data.perFile.slice(0, 50).forEach((f, idx) => {
    md.push(`| ${idx + 1} | ${f.file} | ${f.any} | ${f.tsIgnore} | ${f.eslintDisable} | ${f.unknown} | ${f.score} |`);
  });

  const mdPath = path.join(docsDir, 'TYPE_HEALTH.md');
  fs.writeFileSync(mdPath, md.join('\n'));

  return { jsonPath, mdPath };
}

(function main() {
  const rootDir = path.resolve(__dirname, '..');
  const data = analyzeTypeHealth(rootDir);
  const { jsonPath, mdPath } = writeReports(rootDir, data);
  console.log('Type health report generated:', { jsonPath, mdPath, totals: data.totals });
})();