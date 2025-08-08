import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { withMetrics } from '../../../utils/apiMetrics';

async function baseHandler(req: NextApiRequest, res: NextApiResponse) {
  const course = String(req.query.course || '');
  const lesson = String(req.query.lesson || '');
  const subject = course || lesson || 'this content';

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      res.status(200).json({ summary: `Key takeaways for ${subject}: 1) Core concepts, 2) Practical steps, 3) Resources to explore next.` });
      return;
    }

    const client = new OpenAI({ apiKey });
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Summarize clearly into 3-5 actionable bullet points.' },
        { role: 'user', content: `Summarize ${subject} for learner notes.` }
      ],
      temperature: 0.2
    });

    const summary = response.choices?.[0]?.message?.content || '';
    res.status(200).json({ summary });
  } catch (e: any) {
    res.status(200).json({ summary: `Summary error fallback for ${subject}.` });
  }
}

export default withMetrics(baseHandler, '/api/academy/summarize');