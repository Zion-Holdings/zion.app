import fs from 'fs';
import path from 'path';
import { getOpenAI } from '../utils/openai';

async function main() {
  const openai = getOpenAI();
  // Simulated KPI history (replace with real data pulls)
  const history = Array.from({ length: 6 }).map((_, i) => ({
    month: `2025-${String(6 - i).padStart(2,'0')}`,
    activeUsers: 10000 + i * 500 + (i % 2 ? 200 : -100),
    gmv: 1000000 + i * 80000,
    mrr: 80000 + i * 4000,
    burn: 60000 + (i % 2 ? 1000 : -2000),
  })).reverse();

  const prompt = `You are a marketplace strategist. Given monthly KPIs for the last 6 months, forecast next 2 months and identify risks/opportunities. Produce JSON: forecast (two months, with KPIs), risks (string[]), opportunities (string[]), recommendedActions (Array<{title:string, description:string, owner:string, impact:'high'|'medium'|'low'}>). Keep it concise and actionable. History: ${JSON.stringify(history)}`;

  const completion = await (openai as any).chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: 'You are a precise strategy assistant. Always output valid JSON.' },
      { role: 'user', content: prompt },
    ],
  });

  const outDir = path.join(process.cwd(), 'data', 'reports', 'forecast');
  fs.mkdirSync(outDir, { recursive: true });
  const jsonText = completion.choices?.[0]?.message?.content || '{}';
  fs.writeFileSync(path.join(outDir, 'latest.json'), jsonText);
  console.log('Market health forecast written');
}

main().catch((e) => { console.error(e); process.exit(1); });