import fs from 'fs';
import path from 'path';

let OpenAIClient = null;
try {
  const { OpenAI } = await import('openai');
  if (process.env.OPENAI_API_KEY) {
    OpenAIClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
} catch {}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readJson(filePath, fallback) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf-8')); } catch { return fallback; }
}

async function generateTrends() {
  const file = path.join(process.cwd(), 'data', 'ai-trends.json');
  const existing = readJson(file, []);
  const now = new Date();
  const id = `trend_${now.toISOString().slice(0,10)}`;
  const date = now.toISOString();

  if (existing.find(x => x.id === id)) return; // avoid duplicate for the day

  let title = 'Daily AI/Cloud Trend Brief';
  let summary = 'Fallback: Daily synthesized overview of AI, cloud, and developer tooling trends.';
  let highlights = [
    'Model efficiency and inference optimization remain top-of-mind.',
    'Teams seek practical RAG patterns and evaluation frameworks.',
    'Platform and security automation continues to accelerate.'
  ];
  let tags = ['ai','cloud','devtools'];

  if (OpenAIClient) {
    const prompt = 'Provide a concise 3-5 bullet analysis of current AI/cloud/devtools trends for today with a 1-2 sentence executive summary. Format as JSON with fields: title, summary, highlights (array), tags (array). Keep neutral tone.';
    const resp = await OpenAIClient.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful analyst generating actionable daily briefs.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });
    const content = resp.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse(content);
      title = parsed.title || title;
      summary = parsed.summary || summary;
      highlights = Array.isArray(parsed.highlights) ? parsed.highlights : highlights;
      tags = Array.isArray(parsed.tags) ? parsed.tags : tags;
    } catch {}
  }

  const record = { id, date, title, summary, highlights, tags };
  existing.push(record);
  existing.sort((a, b) => (a.date < b.date ? 1 : -1));
  writeJson(file, existing);
  console.log('Generated trends:', record.id);
}

async function generateTalentSummaries() {
  const talent = await import('../data/talent.ts');
  const outFile = path.join(process.cwd(), 'data', 'talent_ai.json');
  const now = new Date().toISOString();
  const summaries = [];

  for (const t of talent.TALENT_PROFILES) {
    let summary = `${t.name} excels as ${t.title}. Core strengths: ${t.skills.slice(0,5).join(', ')}.`;
    if (OpenAIClient) {
      const prompt = `Write a crisp 3-4 sentence professional summary tailored to a client evaluating ${t.name} (title: ${t.title}, skills: ${t.skills.join(', ')}). Emphasize outcomes and reliability.`;
      const resp = await OpenAIClient.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You write concise, client-friendly talent summaries.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.4,
      });
      summary = resp.choices?.[0]?.message?.content?.trim() || summary;
    }
    summaries.push({ slug: t.slug, summary });
  }

  writeJson(outFile, { generatedAt: now, summaries });
  console.log('Updated talent summaries:', summaries.length);
}

await generateTrends();
await generateTalentSummaries();
console.log('Automations complete.');