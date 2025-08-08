import type { NextApiRequest, NextApiResponse } from 'next';
import { withRateLimit } from '@/utils/api/rateLimit';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const prompt: string = String(body?.prompt || '').trim();
  const model: string = (body?.model as string) || 'gpt-4o-mini';
  if (!prompt) {
    res.status(400).json({ error: 'prompt is required' });
    return;
  }

  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    res.status(200).json({
      model,
      prompt,
      response: `MOCK: ${prompt.slice(0, 100)} ... [No OPENAI_API_KEY set]`,
    });
    return;
  }

  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: openaiKey });
    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: 'You are the Zion DevNet GPT tester.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });
    const content = completion.choices?.[0]?.message?.content || '';
    res.status(200).json({ model, prompt, response: content });
  } catch (err: any) {
    res.status(500).json({ error: 'OpenAI request failed', detail: String(err?.message || err) });
  }
}

export default withRateLimit(handler, { windowMs: 60_000, max: 30 });