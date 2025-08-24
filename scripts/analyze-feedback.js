const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const DATA_DIR = path.join(process.cwd(), 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');
const REPORT_DIR = path.join(DATA_DIR, 'reports', 'feedback');

function readAll() {
  try {
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) {
    return [];
  }
}

function lastNDays(days) {
  const now = Date.now();
  const cutoff = now - days * 24 * 60 * 60 * 1000;
  return (x) => x.ts >= cutoff;
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('Missing OPENAI_API_KEY');
    process.exit(1);
  }
  const all = readAll();
  const recent = all.filter(lastNDays(7));
  const downs = recent.filter((r) => r.rating === 'down');

  if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

  const summaryPath = path.join(REPORT_DIR, `analysis-${new Date().toISOString().slice(0,10)}.md`);
  const baselinePath = path.join(REPORT_DIR, 'prompt-improvements.md');

  if (downs.length === 0) {
    fs.writeFileSync(summaryPath, '# Weekly Feedback Analysis\n\nNo thumbs-down feedback this week.');
    console.log('No low-rated feedback to analyze.');
    return;
  }

  const prompt = `You are an AI QA analyst. Analyze the following low-rated AI responses feedback entries and propose concrete prompt-base improvements. Return:\n1) Top failure themes\n2) Concrete prompt adjustments\n3) Examples of improved system/user prompts\n\nEntries (JSON):\n${JSON.stringify(downs.slice(-100), null, 2)}`;

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const resp = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a senior AI prompt engineer.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.3,
  });

  const text = resp.choices?.[0]?.message?.content || 'No analysis';

  const md = `# Weekly Feedback Analysis (low-rated)\n\nDate: ${new Date().toISOString()}\n\n## Summary\n${text}\n`;
  fs.writeFileSync(summaryPath, md);

  // Append to prompt improvements
  const current = fs.existsSync(baselinePath) ? fs.readFileSync(baselinePath, 'utf8') : '';
  fs.writeFileSync(baselinePath, `${current}\n\n## ${new Date().toISOString()}\n${text}\n`);
  console.log('Analysis written to', summaryPath);
}

main().catch((e) => { console.error(e); process.exit(1); });