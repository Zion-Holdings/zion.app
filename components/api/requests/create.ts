import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

async function loadRequests(): Promise<any[]> {
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function saveRequests(requests: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(requests, null, 2));
}

async function summarizeWithOpenAI(description: string) {
  try {
    if (!process.env.OPENAI_API_KEY) return { summary: description.slice(0, 280), type: 'unknown' };
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e.g., web app, AI/ML, data, cloud, security):\n\n"""${description}"""`;
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });
    const content = response.choices[0]?.message?.content || '';
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' };
  } catch (err) {
    return { summary: description.slice(0, 280), type: 'unknown' };
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, budget, timeline, description, talentSlug } = req.body || {};
  if (!name || !email || !description) return res.status(400).json({ error: 'Missing required fields' });

  const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
  const ai = await summarizeWithOpenAI(String(description));

  const requests = await loadRequests();
  const now = new Date().toISOString();
  const id = `req_${Date.now()}`;
  const record = {
    id,
    name,
    email,
    budget: normalizedBudget,
    timeline: String(timeline || ''),
    description: String(description),
    talentSlug: talentSlug || null,
    aiSummary: ai.summary,
    aiType: ai.type,
    status: 'new',
    createdAt: now,
    updatedAt: now,
  };
  requests.push(record);
  await saveRequests(requests);

  // TODO: Integrate notifications (email/webhook) for admin and talent

  return res.status(200).json({ id, status: 'ok' });
}