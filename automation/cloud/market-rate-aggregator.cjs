#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const OpenAI = (() => { try { return require('openai'); } catch { return null; } })();

const OUT = path.resolve('data/market-rates.json');

const BASELINES = {
  frontend: 45,
  backend: 55,
  devops: 60,
  data: 65,
  mobile: 55,
  design: 40,
};

const LOCATION_INDEX = {
  usa: 1.15,
  canada: 1.10,
  europe: 1.05,
  brazil: 0.85,
  india: 0.75,
  nigeria: 0.75,
  philippines: 0.7,
  singapore: 1.2,
  australia: 1.15,
  default: 1.0,
};

async function aiRefine(baselines) {
  if (!OpenAI || !process.env.OPENAI_API_KEY) return null;
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `You are a compensation analyst. Given baseline hourly rates (USD) for roles and location multipliers, output refined JSON with keys: baselines, locationIndex. Keep similar structure and only slight adjustments.`;
    const resp = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.1,
      messages: [
        { role: 'system', content: 'Output strict JSON only.' },
        { role: 'user', content: JSON.stringify({ baselines, locationIndex: LOCATION_INDEX }) },
        { role: 'user', content: prompt },
      ],
    });
    const txt = resp.choices?.[0]?.message?.content || '';
    const jsonStart = txt.indexOf('{');
    const jsonEnd = txt.lastIndexOf('}');
    const json = JSON.parse(txt.slice(jsonStart, jsonEnd + 1));
    return json;
  } catch {
    return null;
  }
}

(async () => {
  const refined = await aiRefine(BASELINES);
  const payload = refined && refined.baselines && refined.locationIndex ? refined : { baselines: BASELINES, locationIndex: LOCATION_INDEX };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ ...payload, updatedAt: new Date().toISOString() }, null, 2) + '\n');
  console.log('[rates] Updated', OUT);
})();