import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { moduleTitle, moduleContent } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;

  const fallback = () => {
    return res.status(200).json({
      questions: [
        {
          question: `Which topic is central to ${moduleTitle}?`,
          options: ['Random Ops', 'Zion OS mission', 'Unrelated finance', 'Legacy ERP'],
          answerIndex: 1,
        },
        {
          question: 'What does DAO commonly refer to?',
          options: ['Data Access Object', 'Decentralized Autonomous Organization', 'Digital Asset Option', 'Dynamic Allocation Output'],
          answerIndex: 1,
        },
        {
          question: 'What should be configured during deployment?',
          options: ['Genesis Deploy Kit & modules', 'Only UI colors', 'Nothing', 'Random plugins'],
          answerIndex: 0,
        },
        {
          question: 'Who are key community roles to hire?',
          options: ['Moderators, educators, ambassadors', 'Astronauts', 'Comedians', 'No one'],
          answerIndex: 0,
        },
        {
          question: 'Which docs are needed for launch?',
          options: ['Whitepaper + governance docs', 'Novel', 'Recipe book', 'None'],
          answerIndex: 0,
        },
      ],
    });
  };

  if (!apiKey) return fallback();

  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert course designer for founders.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    });

    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);
    } catch {
      return fallback();
    }
  } catch (err) {
    return fallback();
  }
}