import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({ summary: baseSummary, provider: 'local' });
    }

    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`;
    const chat = await client.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.3 });
    const content = chat.choices?.[0]?.message?.content || baseSummary;
    return res.status(200).json({ summary: content, provider: 'openai' });
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to generate highlights' });
  }
}