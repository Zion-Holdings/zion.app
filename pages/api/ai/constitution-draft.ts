import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const { name, governanceStyle, fundingModel, operatorPrompt } = req.body || {};

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    const draft = `Preamble: We, the members of ${name || 'our Nation'}, establish a sovereign digital nation on Zion OS...\n\nGovernance: ${governanceStyle || 'admin'} model.\nFunding: ${fundingModel || 'zion-treasury'}.\nRights & Duties: ...\nAmendments: ...`;
    const structure = {
      council: governanceStyle === 'delegate' ? ['Lead Delegate', 'Operations Delegate', 'Treasury Delegate'] : ['Administrator'],
      voting: governanceStyle === 'token-weighted' ? 'Token-weighted quorum 20%, majority 50%+' : 'Simple majority',
      treasury: fundingModel || 'zion-treasury',
    };
    return res.status(200).json({ constitutionDraft: draft, suggestedStructure: structure });
  }

  const openai = new OpenAI({ apiKey: key });
  const prompt = `Draft a succinct, practical DAO constitution and suggest a governance structure for a digital nation.\nName: ${name}\nGovernance: ${governanceStyle}\nFunding: ${fundingModel}\nOperator guidance: ${operatorPrompt || 'none'}.\nReturn two sections: (1) Constitution (~250-400 words). (2) Structure (bullet list: roles, voting rules, treasury policy).`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert DAO governance designer.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.5,
    });

    const text = completion.choices[0]?.message?.content || '';
    return res.status(200).json({ constitutionDraft: text, suggestedStructure: text });
  } catch (e: any) {
    return res.status(200).json({ constitutionDraft: `Preamble for ${name || 'Nation'}...`, suggestedStructure: { note: 'AI unavailable' } });
  }
}