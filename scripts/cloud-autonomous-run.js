const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'data', 'reports', 'automation');
const STATUS_FILE = path.join(REPORTS_DIR, 'status.json');
const IDEAS_DIR = REPORTS_DIR;

function ensureDirs() {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function listAutomations() {
  const autoDir = path.join(ROOT, 'automation');
  if (!fs.existsSync(autoDir)) return [];
  const files = fs.readdirSync(autoDir);
  return files.filter((f) => f.endsWith('.cjs') || f.endsWith('.js')).sort();
}

function writeStatus(automations, extras = {}) {
  const status = {
    updatedAt: new Date().toISOString(),
    automations,
    ...extras,
  };
  fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
  return status;
}

async function analyzeFeedbackIfPossible() {
  try {
    const script = path.join(ROOT, 'scripts', 'analyze-feedback.js');
    if (fs.existsSync(script)) {
      // Run in-process to avoid spawning
      process.env.NODE_ENV = process.env.NODE_ENV || 'production';
      await import(pathToFileURL(script).href);
    }
  } catch (_) {
    // ignore
  }
}

async function generateIdeasIfPossible() {
  if (!process.env.OPENAI_API_KEY) return null;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const prompt = `Invent 5 new, practical, cloud-autonomous automations for a Next.js site with lots of scripts (design, marketing, analytics, content). For each, provide: name, description, inputs (if any), outputs (artifacts to commit), and a success metric. Return concise JSON array.`;
  const resp = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You design pragmatic engineering automations.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.3,
  });
  const text = resp.choices?.[0]?.message?.content || '[]';
  const ideasPath = path.join(IDEAS_DIR, `ideas-${new Date().toISOString().slice(0,10)}.json`);
  fs.writeFileSync(ideasPath, text.trim());
  return ideasPath;
}

async function main() {
  ensureDirs();
  const automations = listAutomations();

  // Minimal status update
  const status = writeStatus(automations, { note: 'Cloud autonomous run executed' });

  // Feedback analysis
  try {
    // Prefer spawning: node scripts/analyze-feedback.js
    const { spawnSync } = require('child_process');
    const r = spawnSync(process.execPath, ['scripts/analyze-feedback.js'], { stdio: 'inherit' });
    if (r.status !== 0) {
      // non-fatal
    }
  } catch {}

  // Generate automation ideas if key present
  try {
    await generateIdeasIfPossible();
  } catch {}

  console.log('Cloud autonomous run complete:', status.updatedAt);
}

main().catch((e) => { console.error(e); process.exit(1); });