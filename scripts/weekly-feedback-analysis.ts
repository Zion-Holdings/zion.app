import fs from 'fs';
import path from 'path';
import { getOpenAI } from '../utils/openai';

async function main() {
  const openai = getOpenAI();

  // TODO: Replace with real data pulls from DB, chat logs, app store reviews, etc.
  const items = [
    { timestamp: new Date().toISOString(), feature: 'chatbot', stars: 4, comment: 'Better intents, but sometimes repeats.' },
    { timestamp: new Date().toISOString(), feature: 'rentals', stars: 1, comment: 'Payment fails on iOS 17.5' },
    { timestamp: new Date().toISOString(), feature: 'jobs', stars: 5, comment: 'Love saved searches!' },
    { timestamp: new Date().toISOString(), feature: 'dashboard', stars: 2, comment: 'Filters reset on refresh; annoying' },
  ];

  const prompt = `You are a product ops analyst. Analyze the following weekly batch of feedback items (JSON). Group by feature area (chatbot, rentals, jobs, dashboard), compute sentiment mix (positive/neutral/negative), and extract common bugs, frustrations, and feature requests. Then produce (1) a concise Top Insights summary for an admin dashboard and (2) a prioritized improvement backlog with titles, descriptions, priorities (P0/P1/P2), and area. Respond as strict JSON with keys: groupedByFeature, topInsights, improvementBacklog. If feature area is missing, infer it. Be terse, actionable, and avoid duplicates. Items: ${JSON.stringify(items)}`;

  const completion = await (openai as any).chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: 'You are a precise product analytics assistant. Always output valid JSON.' },
      { role: 'user', content: prompt },
    ],
  });

  const jsonText = completion.choices?.[0]?.message?.content || '{}';
  const outPath = path.join(process.cwd(), 'data', 'reports', 'feedback');
  fs.mkdirSync(outPath, { recursive: true });
  fs.writeFileSync(path.join(outPath, 'latest.json'), jsonText);
  console.log('Wrote latest feedback report');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});