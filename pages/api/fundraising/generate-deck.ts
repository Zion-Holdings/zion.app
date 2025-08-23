import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { stage, style, operatorPrompt } = req.body || {};

  try {
    const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        title: `Auto Deck (${stage})`,
        sections: {
          vision: 'Vision generated placeholder',
          traction: 'Traction generated placeholder',
          useOfFunds: 'Use of funds placeholder',
          tokenomics: 'Token utility placeholder',
          growthModel: 'Multiverse growth model placeholder',
        },
      });
    }

    const client = new OpenAI({ apiKey });
    const prompt = `You are ZionGPT. Using the operator request below, generate concise section copy for a ${stage} fundraising deck in ${style} style. Include: vision, traction, use of funds, token utility (tokenomics), and multiverse growth model. Keep each section under 80 words.

Operator Request:\n${operatorPrompt}`;

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a precise and concise fundraising deck assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });

    const text = completion.choices?.[0]?.message?.content || '';
    const sections = {
      vision: extract(text, 'vision'),
      traction: extract(text, 'traction'),
      useOfFunds: extract(text, 'use of funds'),
      tokenomics: extract(text, 'token'),
      growthModel: extract(text, 'growth'),
    } as any;

    return res.status(200).json({ title: `Deck (${stage})`, sections });
  } catch (e: any) {
    return res.status(200).json({
      title: `Deck (${stage})`,
      sections: {
        vision: 'Vision placeholder',
        traction: 'Traction placeholder',
        useOfFunds: 'Use of funds placeholder',
        tokenomics: 'Token utility placeholder',
        growthModel: 'Growth model placeholder',
      },
    });
  }
}

function extract(text: string, key: string) {
  const regex = new RegExp(`${key}[:\-]\\s*([^\n]+)`, 'i');
  const match = text.match(regex);
  return match?.[1]?.trim() || '';
}