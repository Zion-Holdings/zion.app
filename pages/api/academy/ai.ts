import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { operatorPrompt, userMessage } = req.body || {};

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      res.status(200).json({ answer: `AI (dev mode): ${operatorPrompt}\n\nYou asked: ${userMessage}. Here are some tips and related links: https://developers.google.com/machine-learning/crash-course` });
      return;
    }

    const client = new OpenAI({ apiKey });
    const content = `${operatorPrompt}\n\nUser: ${userMessage}`;
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful AI teaching assistant.' },
        { role: 'user', content }
      ],
      temperature: 0.4
    });

    const answer = response.choices?.[0]?.message?.content || 'No response';
    res.status(200).json({ answer });
  } catch (e: any) {
    res.status(200).json({ answer: `AI error fallback: ${e?.message || 'Unknown error'}` });
  }
}