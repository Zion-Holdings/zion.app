import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      const { OpenAI } = await import('openai');
      const openai = new OpenAI({ apiKey });
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },
          { role: 'user', content: String(prompt) }
        ]
      });
      const text = resp.choices?.[0]?.message?.content || 'No response';
      return res.status(200).json({ text });
    }

    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' });
  }
}