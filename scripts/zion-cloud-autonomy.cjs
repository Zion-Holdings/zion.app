#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function safeReadJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function tightenPrompt(text, userIntent) {
  const trimmed = String(text || '').replace(/\s+/g, ' ').trim();
  const withoutFillers = trimmed
    .replace(/\bplease\b\s*/gi, '')
    .replace(/\bcould you\b\s*/gi, '')
    .replace(/\bbasically\b\s*/gi, '')
    .replace(/\bkind of\b\s*/gi, '')
    .replace(/\bsort of\b\s*/gi, '')
    .replace(/\bvery\b\s*/gi, '')
    .replace(/\breally\b\s*/gi, '');
  return `${withoutFillers}\n\nConstraints: 4-6 bullets; only actionable steps; max 120 words; avoid repetition.${userIntent ? ` Intent: ${userIntent}.` : ''}`;
}

async function maybeOptimizeWithOpenAI(prompt, userIntent) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return { optimized: tightenPrompt(prompt, userIntent), method: 'heuristic' };
  try {
    const { OpenAI } = require('openai');
    const openai = new OpenAI({ apiKey });
    const system = 'You optimize prompts for speed and specificity. Return only the rewritten prompt.';
    const user = `Review this prompt and rewrite it to be 30% faster and more specific to user intent.\n\nUser intent: ${userIntent || 'unknown'}\n\nPrompt to optimize:\n${prompt}`;
    const resp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature: 0.2,
      max_tokens: 400,
    });
    const content = resp?.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error('empty openai result');
    return { optimized: content, method: 'openai' };
  } catch (e) {
    return { optimized: tightenPrompt(prompt, userIntent), method: 'heuristic' };
  }
}

async function main() {
  const root = process.cwd();
  const dataDir = path.join(root, 'data', 'zion-brain');
  const logsPath = path.join(dataDir, 'logs.json');
  const statePath = path.join(dataDir, 'state.json');
  const analyticsPath = path.join(dataDir, 'analytics.json');
  const reportPath = path.join(root, 'automation_logs', 'zion-cloud-latest.json');
  const promptsSrc = path.join(root, 'data', 'prompts', 'source');
  const promptsOut = path.join(root, 'data', 'prompts', 'optimized');

  ensureDir(dataDir);
  ensureDir(path.dirname(reportPath));
  ensureDir(promptsSrc);
  ensureDir(promptsOut);

  const logs = safeReadJson(logsPath, { entries: [] });
  const state = safeReadJson(statePath, { metrics: { signupsLastHour: 0, disputeFlagsLastHour: 0, zionVelocity: 100 }, lastTriggers: [] });

  // Build analytics summary
  const byModule = {};
  const byType = {};
  const last100 = logs.entries.slice(-100);
  for (const e of last100) {
    byModule[e.module] = (byModule[e.module] || 0) + 1;
    const t = String(e.type);
    byType[t] = (byType[t] || 0) + 1;
  }
  const analytics = {
    updatedAt: new Date().toISOString(),
    totals: { entries: logs.entries.length, lastWindow: last100.length },
    byModule,
    byType,
  };

  // Opportunistic prompt optimization for any .md in prompts/source
  const optimizedSummaries = [];
  const files = fs.readdirSync(promptsSrc).filter((f) => f.endsWith('.md'));
  for (const f of files) {
    const srcPath = path.join(promptsSrc, f);
    const outPath = path.join(promptsOut, f.replace(/\.md$/, '.optimized.md'));
    const content = fs.readFileSync(srcPath, 'utf8');
    const { optimized, method } = await maybeOptimizeWithOpenAI(content, 'general');
    fs.writeFileSync(outPath, optimized);
    optimizedSummaries.push({ file: f, method, originalChars: content.length, optimizedChars: optimized.length });
  }

  // Update state heartbeat
  state.heartbeatAt = new Date().toISOString();

  fs.writeFileSync(analyticsPath, JSON.stringify(analytics, null, 2));
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2));

  const report = {
    ranAt: new Date().toISOString(),
    analytics,
    optimized: optimizedSummaries,
    env: { openai: Boolean(process.env.OPENAI_API_KEY) },
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log('Zion cloud autonomy completed:', {
    analyticsTotals: analytics.totals,
    optimizedCount: optimizedSummaries.length,
  });
}

main().catch((e) => {
  console.error('Autonomy run failed', e);
  process.exit(1);
});