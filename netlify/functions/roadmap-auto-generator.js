exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  function safeRead(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } }

  function summarizeTodos(md) {
    const lines = md.split(/\r?\n/).filter(Boolean);
    const items = [];
    for (const l of lines) {
      const m = l.match(/^[-*]\s+(\[[ xX]\]\s+)?(.+)/);
      if (m) items.push(m[2]);
    }
    return items.slice(0, 30);
  }

  function summarizeChangelog(md) {
    const lines = md.split(/\r?\n/);
    return lines.filter(l => /^-\s/.test(l)).slice(0, 20).map(l => l.replace(/^-\s*/, ''));
  }

  try {
    const rootDir = path.resolve(__dirname, '..', '..');
    const todo = safeRead(path.join(rootDir, 'docs', 'TODO_REPORT.md'));
    const changelog = safeRead(path.join(rootDir, 'docs', 'CHANGELOG_AI.md'));

    const todoItems = summarizeTodos(todo);
    const changes = summarizeChangelog(changelog);

    const out = [
      '# Autonomous Roadmap (Auto-Generated)\n',
      '',
      `Generated: ${new Date().toISOString()}`,
      '',
      '## Near-Term Focus',
      ...todoItems.map(i => `- ${i}`),
      '',
      '## Recent Autonomous Changes',
      ...changes.map(c => `- ${c}`),
      '',
      '## Notes',
      '- This file is synthesized from TODO_REPORT.md and CHANGELOG_AI.md by the roadmap-auto-generator.',
      '- Edits will be overwritten by the next run.'
    ].join('\n');

    const outPath = path.join(rootDir, 'docs', 'ROADMAP_AUTO.md');
    fs.writeFileSync(outPath, out, 'utf8');

    try {
      execSync('git config user.name "zion-bot"', { cwd: rootDir, stdio: 'inherit' });
      execSync('git config user.email "bot@zion.app"', { cwd: rootDir, stdio: 'inherit' });
      execSync(`git add ${JSON.stringify(path.relative(rootDir, outPath))}`, { cwd: rootDir, stdio: 'inherit', shell: true });
      execSync('git commit -m "docs(roadmap): refresh ROADMAP_AUTO.md [ci skip]" || true', { cwd: rootDir, stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { cwd: rootDir, stdio: 'inherit', shell: true });
    } catch {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, path: 'docs/ROADMAP_AUTO.md' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};