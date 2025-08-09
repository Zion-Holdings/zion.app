#!/usr/bin/env node
/*
  Investor Update Draft Generator
  - Creates a concise investor update draft using current KPIs
  - Optionally uses OpenAI if OPENAI_API_KEY is present
*/
const fs = require('fs');
const path = require('path');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function getKpis() {
  return [
    { key: 'MRR', value: 220450, unit: 'USD' },
    { key: 'GMV', value: 4800000, unit: 'USD' },
    { key: 'Active Users (Monthly)', value: 18452, unit: '' },
    { key: 'Churn Rate', value: 2.4, unit: '%' },
  ];
}

function summarizeWithHeuristics(kpis) {
  const lines = [];
  lines.push('Highlights:');
  const mrr = kpis.find(k => k.key === 'MRR');
  const au = kpis.find(k => k.key === 'Active Users (Monthly)');
  const churn = kpis.find(k => k.key === 'Churn Rate');
  if (mrr) lines.push(`- MRR reached $${mrr.value.toLocaleString()}`);
  if (au) lines.push(`- Active users: ${au.value.toLocaleString()}`);
  if (churn) lines.push(`- Churn rate stable at ${churn.value}%`);
  lines.push('Roadmap:');
  lines.push('- Scaling enterprise integrations and partnerships');
  lines.push('- Strengthening compliance and audit readiness');
  return lines.join('\n');
}

async function maybeOpenAI(summary) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return summary; // skip if not configured
  try {
    const { OpenAI } = require('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Rewrite the following investor update in a crisp CEO tone with numbered sections and a call-to-action.\n\n${summary}`;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    const text = completion.choices?.[0]?.message?.content?.trim();
    return text || summary;
  } catch (e) {
    return summary;
  }
}

async function main() {
  const outDir = path.resolve(process.cwd(), 'data', 'ipo-portal', 'drafts');
  ensureDir(outDir);
  const kpis = getKpis();
  const heuristic = summarizeWithHeuristics(kpis);
  const rewritten = await maybeOpenAI(heuristic);
  const content = [`# Investor Update (Draft)`, '', `Date: ${new Date().toISOString().slice(0,10)}`, '', rewritten].join('\n');
  fs.writeFileSync(path.join(outDir, 'latest.md'), content, 'utf8');
  console.log('Wrote drafts/latest.md');
}

main();