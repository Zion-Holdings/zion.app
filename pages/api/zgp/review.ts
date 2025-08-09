import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }
    const { text } = req.body || {};
    if (!text) {
      res.status(400).json({ error: 'text is required' });
      return;
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      res.status(200).json({ review: 'OPENAI_API_KEY not set; no review performed.' });
      return;
    }

    const client = new OpenAI({ apiKey });
    const system = `You are a governance writing assistant. Review the provided proposal text for clarity, neutrality, and completeness. Suggest concise improvements.`;
    const user = text;
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }
      ]
    });

    const content = response.choices?.[0]?.message?.content || '';
    res.status(200).json({ review: content });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}