// netlify/functions/roadmap-curator.js
exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  const nowIso = new Date().toISOString();

  function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

  function scanForIdeas() {
    const ideas = [];
    // lightweight heuristics: look at docs/TODO_REPORT.md and scripts/generate-readme.js
    try {
      const todoPath = path.join(process.cwd(), 'docs', 'TODO_REPORT.md');
      if (fs.existsSync(todoPath)) {
        const content = fs.readFileSync(todoPath, 'utf8');
        const lines = content.split(/\r?\n/).filter(Boolean).slice(0, 300);
        for (const line of lines) {
          if (/\b(add|improve|automate|optimi[sz]e|refactor|enhance)\b/i.test(line)) {
            ideas.push({ source: 'docs/TODO_REPORT.md', text: line.trim() });
          }
        }
      }
    } catch {}

    try {
      const readmeGen = path.join(process.cwd(), 'scripts', 'generate-readme.js');
      if (fs.existsSync(readmeGen)) {
        const content = fs.readFileSync(readmeGen, 'utf8');
        const matches = content.match(/feature|roadmap|automation/gi) || [];
        if (matches.length) {
          ideas.push({ source: 'scripts/generate-readme.js', text: `Mentions: ${matches.length}` });
        }
      }
    } catch {}

    // Include existing reports to seed roadmap
    try {
      const revDir = path.join(process.cwd(), 'data', 'reports', 'revenue-ideas');
      if (fs.existsSync(revDir)) {
        const files = fs.readdirSync(revDir).filter(f => f.endsWith('.md'));
        for (const f of files.slice(0, 20)) {
          const content = fs.readFileSync(path.join(revDir, f), 'utf8');
          const title = (content.match(/^#\s+(.+)/m) || [])[1] || f;
          ideas.push({ source: `data/reports/revenue-ideas/${f}`, text: title });
        }
      }
    } catch {}

    return ideas;
  }

  function writeRoadmap(ideas) {
    const publicDir = path.join(process.cwd(), 'public', 'automation');
    const docsDir = path.join(process.cwd(), 'docs');
    ensureDir(publicDir);
    ensureDir(docsDir);

    const curated = ideas.slice(0, 100).map((i, idx) => ({ id: idx + 1, ...i }));
    const jsonPath = path.join(publicDir, 'roadmap.json');
    fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: nowIso, items: curated }, null, 2));

    const mdPath = path.join(docsDir, 'ROADMAP_AUTOMATIONS.md');
    const lines = [];
    lines.push('# Automation Roadmap');
    lines.push(`Generated: ${nowIso}`);
    lines.push('');
    curated.forEach((i) => {
      lines.push(`- ${i.text} _(source: ${i.source})_`);
    });
    fs.writeFileSync(mdPath, lines.join('\n'));

    return { jsonPath, mdPath, count: curated.length };
  }

  function gitSync(message) {
    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add -A', { stdio: 'inherit', shell: true });
      execSync(`git commit -m ${JSON.stringify(message)} || true`, { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch {}
  }

  try {
    const ideas = scanForIdeas();
    const out = writeRoadmap(ideas);
    gitSync(`chore(roadmap): ${out.count} curated items [ci skip]`);
    return { statusCode: 200, body: JSON.stringify({ ok: true, ...out }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};