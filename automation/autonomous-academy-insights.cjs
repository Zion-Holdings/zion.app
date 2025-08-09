#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchJson(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    try {
      const req = https.get(url, { timeout: timeoutMs }, (res) => {
        let data = '';
        res.on('data', (d) => (data += d));
        res.on('end', () => {
          try { resolve(JSON.parse(data)); } catch { resolve(null); }
        });
      });
      req.on('error', () => resolve(null));
      req.on('timeout', () => { req.destroy(); resolve(null); });
    } catch {
      resolve(null);
    }
  });
}

async function main() {
  const root = process.cwd();
  const reportDir = path.join(root, 'data', 'reports');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  // Try external trending topics (Hacker News)
  const topStories = await fetchJson('https://hacker-news.firebaseio.com/v0/topstories.json');
  let trending = [];
  if (Array.isArray(topStories) && topStories.length) {
    const ids = topStories.slice(0, 10);
    const items = await Promise.all(ids.map((id) => fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)));
    trending = items.filter(Boolean).map((it) => ({ title: it.title, url: it.url || `https://news.ycombinator.com/item?id=${it.id}` }));
  } else {
    trending = [
      { title: 'Edge AI toolchains rise in 2025', url: 'https://example.com' },
      { title: 'Serverless data pipelines simplified', url: 'https://example.com' },
      { title: 'Generative UI patterns for enterprise apps', url: 'https://example.com' }
    ];
  }

  const insights = {
    generatedAt: new Date().toISOString(),
    featuredCourses: [
      { slug: 'ai-engineering-foundations', reason: 'High engagement; matches trend: Edge AI' },
      { slug: 'devops-cloud-primer', reason: 'Interest in serverless pipelines' }
    ],
    trendingTopics: trending,
    recommendations: [
      { title: 'Add lesson: Edge AI deployment to mobile', course: 'ai-engineering-foundations' },
      { title: 'Add module: Serverless ETL with modern runtimes', course: 'devops-cloud-primer' }
    ]
  };

  const outJson = path.join(reportDir, 'academy-insights.json');
  fs.writeFileSync(outJson, JSON.stringify(insights, null, 2));

  // Ensure insights page folder exists
  const insightsPageDir = path.join(root, 'pages', 'academy', 'insights');
  if (!fs.existsSync(insightsPageDir)) fs.mkdirSync(insightsPageDir, { recursive: true });

  const pageIndex = `export { default } from './latest';\n`;
  const latestPage = `import insights from '../../../data/reports/academy-insights.json';\n\nexport default function AcademyInsights() {\n  const t = insights as any;\n  return (\n    <div className=\"py-10 space-y-6\">\n      <h1 className=\"text-2xl font-semibold\">Academy Insights</h1>\n      <div className=\"text-sm text-gray-500\">Updated: {new Date(t.generatedAt).toLocaleString()}</div>\n      <section>\n        <h2 className=\"text-lg font-medium mb-2\">Trending Topics</h2>\n        <ul className=\"list-disc pl-5 space-y-1\">\n          {t.trendingTopics?.map((x: any, i: number) => (\n            <li key={i}><a className=\"text-blue-600 underline\" href={x.url} target=\"_blank\" rel=\"noreferrer\">{x.title}</a></li>\n          ))}\n        </ul>\n      </section>\n      <section>\n        <h2 className=\"text-lg font-medium mb-2\">Featured Courses</h2>\n        <ul className=\"space-y-1\">\n          {t.featuredCourses?.map((x: any, i: number) => (\n            <li key={i} className=\"flex items-center justify-between\">\n              <span className=\"truncate\">{x.slug}</span>\n              <span className=\"text-xs text-gray-500\">{x.reason}</span>\n            </li>\n          ))}\n        </ul>\n      </section>\n      <section>\n        <h2 className=\"text-lg font-medium mb-2\">Recommendations</h2>\n        <ul className=\"list-disc pl-5 space-y-1\">\n          {t.recommendations?.map((x: any, i: number) => (\n            <li key={i}>{x.title} <span className=\"text-xs text-gray-500\">({x.course})</span></li>\n          ))}\n        </ul>\n      </section>\n    </div>\n  );\n}\n`;

  fs.writeFileSync(path.join(insightsPageDir, 'index.tsx'), pageIndex);
  fs.writeFileSync(path.join(insightsPageDir, 'latest.tsx'), latestPage);

  console.log('Academy insights updated.');
}

main().catch((e) => { console.error(e); process.exitCode = 1; });