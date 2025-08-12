#!/usr/bin/env node
/*
 Alignment Factory
 - Consumes plan-latest.json and appends actionable items to docs/TODO_REPORT.md
 - Also writes a human-readable report in docs/reports/alignment.md
*/

const fs = require('fs-extra');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public', 'reports', 'alignment');

async function main(){
  const planPath = path.join(publicDir,'plan-latest.json');
  if (!fs.existsSync(planPath)) {
    console.error('[alignment-factory] No plan-latest.json found. Run analyzer first.');
    process.exit(1);
  }
  const plan = await fs.readJson(planPath);

  const todoPath = path.join(repoRoot, 'docs', 'TODO_REPORT.md');
  await fs.ensureFile(todoPath);

  const header = `\n\n## Alignment Tasks (auto-generated)\nGenerated: ${new Date().toISOString()}\n`;
  let body = '';
  for (const t of plan.tasks.slice(0, 100)) {
    body += `- [ ] (${t.type}) ${t.keyword ? '`'+t.keyword+'` ' : ''}${t.url ? t.url+' ' : ''}- ${t.recommendation}`;
    if (t.suggestedScripts?.length) body += `\n  - Suggest: ${t.suggestedScripts.join(', ')}`;
    body += '\n';
  }

  await fs.appendFile(todoPath, header + body, 'utf8');

  const reportDir = path.join(repoRoot, 'docs', 'reports');
  await fs.mkdirs(reportDir);
  const reportPath = path.join(reportDir, 'alignment.md');
  const summary = plan.summary || {};
  const report = `# Alignment Report\n\n- Generated: ${new Date().toISOString()}\n- Site pages: ${summary.totals?.sitePages || 0}\n- Desired keywords: ${summary.totals?.desiredKeywords || 0}\n- Present keywords: ${summary.totals?.presentKeywords || 0}\n- Gaps: ${summary.totals?.gapCount || 0}\n- Tasks: ${summary.totals?.taskCount || 0}\n\nTop Desired Keywords (sample):\n\n${(summary.topDesired||[]).slice(0,30).map(k=>`- ${k}`).join('\n')}\n`;
  await fs.writeFile(reportPath, report, 'utf8');

  console.log(`[alignment-factory] Appended ${todoPath} and wrote ${reportPath}`);
}

main().catch(err=>{ console.error('[alignment-factory] Error:', err); process.exitCode=1; });


