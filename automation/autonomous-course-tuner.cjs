#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

async function main(){
  const root = process.cwd();
  const reports = path.join(root, 'data', 'reports');
  if (!fs.existsSync(reports)) fs.mkdirSync(reports, { recursive: true });

  const insightsPath = path.join(reports, 'academy-insights.json');
  let insights = null;
  try { insights = JSON.parse(fs.readFileSync(insightsPath, 'utf8')); } catch {}

  const actions = [];
  if (insights?.trendingTopics?.length) {
    actions.push({
      type: 'lesson-add',
      course: 'ai-engineering-foundations',
      title: 'Deploying Edge AI to Mobile (2025 updates)',
      rationale: 'Align with trending Edge AI topics from external signals.'
    });
  }
  if (insights?.featuredCourses?.some((x)=>x.slug==='devops-cloud-primer')){
    actions.push({
      type: 'module-add',
      course: 'devops-cloud-primer',
      title: 'Serverless ETL with Durable Execution',
      rationale: 'Matches interest in serverless pipelines.'
    });
  }

  const out = { generatedAt: new Date().toISOString(), actions };
  fs.writeFileSync(path.join(reports, 'course-tuner.json'), JSON.stringify(out, null, 2));

  // Create a small Markdown file suitable for PR descriptions
  const md = ['# Course Tuner Suggestions', '', `Updated: ${new Date().toISOString()}`, ''];
  for (const a of actions) {
    md.push(`- [${a.type}] ${a.course} → ${a.title} — ${a.rationale}`);
  }
  fs.writeFileSync(path.join(reports, 'course-tuner.md'), md.join('\n'));
  console.log('Course tuner suggestions updated.');
}

main().catch((e)=>{ console.error(e); process.exitCode = 1; });