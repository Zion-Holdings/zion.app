import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type EmailRequest = {
  startupName: string;
  founderName?: string;
  investorName: string;
  investorType?: string;
  highlights?: string[];
  pitchSummary: string;
  roundType?: string;
  website?: string;
};

export type EmailResponse = {
  subject: string;
  body_markdown: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });
  }

  const body: EmailRequest = req.body;
  if (!body || !body.startupName || !body.investorName || !body.pitchSummary) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const openai = new OpenAI({ apiKey });

    const system = `You are a world-class fundraising operator crafting concise, personalized cold emails to investors. Return strictly JSON with subject and body_markdown. The tone should be confident, crisp, and under 150 words. Include a clear CTA and links if provided.`;

    const user = `Write a personalized email from the founder of ${body.startupName} to ${body.investorName} (${body.investorType || 'Investor'}), including highlights and why there's alignment.

Context:
- Founder: ${body.founderName || 'Founder'}
- Pitch: ${body.pitchSummary}
- Round: ${body.roundType || 'Early-stage'}
- Website: ${body.website || 'N/A'}
- Highlights: ${(body.highlights || []).join('; ') || 'N/A'}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.4,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      response_format: { type: 'json_object' },
    });

    const content = completion.choices?.[0]?.message?.content || '';
    let parsed: EmailResponse | null = null;
    try {
      parsed = JSON.parse(content) as EmailResponse;
    } catch {}

    if (!parsed || !parsed.subject || !parsed.body_markdown) {
      return res.status(502).json({ error: 'Invalid model response', raw: content });
    }

    return res.status(200).json(parsed);
  } catch (error: any) {
    console.error('Email generation error:', error?.response?.data || error);
    return res.status(500).json({ error: 'Failed to generate email' });
  }
}