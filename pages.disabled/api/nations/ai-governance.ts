import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, governanceStyle, fundingModel } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const basePrompt = `Draft a concise constitution (200-300 words) and a governance outline for a micro-DAO called "${name || 'New Nation'}".
- Governance style: ${governanceStyle || 'admin/token_weighted/delegate'}
- Funding model: ${fundingModel || 'ZION$ treasury'}
Include: mission, rights, decision-making process, transparency, treasury oversight, and a delegate framework if relevant.`;

  if (!apiKey) {
    return res.status(200).json({
      constitutionDraft: `Preamble: We, the citizens of ${name || 'New Nation'}, unite to advance shared prosperity, creativity, and mutual aid.\n\nMission: Our mission is to coordinate talent and resources to deliver value to citizens and clients under fair, transparent, and resilient rules.\n\nRights & Duties: Every citizen holds the right to voice, due process, and data dignity; and the duty to contribute, uphold integrity, and steward the commons.\n\nGovernance: Decisions are made under the ${governanceStyle || 'admin'} model, with clear escalation paths, recorded votes, and periodic review. Treasury operations follow the ${fundingModel || 'ZION$ treasury'} model, with multi-party visibility and quarterly reporting.\n\nAmendments: This constitution may be amended by supermajority vote or delegate consensus, preserving core rights and financial solvency.`,
      structureSuggestion: {
        governance: governanceStyle || 'admin',
        delegates: governanceStyle === 'delegate' ? [
          { scope: 'Treasury', selection: 'elected quarterly', powers: ['budgeting', 'grants'] },
          { scope: 'Compliance', selection: 'appointed', powers: ['policy review', 'risk'] },
          { scope: 'Delivery', selection: 'elected by talent', powers: ['roadmap', 'quality'] }
        ] : [],
        voting: governanceStyle === 'token_weighted' ? { method: 'token-weighted', quorum: 0.2 } : { method: 'one-citizen-one-vote', quorum: 0.33 },
      }
    });
  }

  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert in DAO governance and constitutional design.' },
        { role: 'user', content: basePrompt }
      ],
      temperature: 0.6,
    });

    const content = completion.choices?.[0]?.message?.content || '';

    return res.status(200).json({
      constitutionDraft: content,
      structureSuggestion: {
        governance: governanceStyle || 'admin',
        delegates: governanceStyle === 'delegate' ? [
          { scope: 'Treasury', selection: 'elected quarterly', powers: ['budgeting', 'grants'] },
          { scope: 'Compliance', selection: 'appointed', powers: ['policy review', 'risk'] },
          { scope: 'Delivery', selection: 'elected by talent', powers: ['roadmap', 'quality'] }
        ] : [],
        voting: governanceStyle === 'token_weighted' ? { method: 'token-weighted', quorum: 0.2 } : { method: 'one-citizen-one-vote', quorum: 0.33 },
      }
    });
  } catch (error: any) {
    return res.status(200).json({
      constitutionDraft: `Preamble: We, the citizens of ${name || 'New Nation'}, unite to advance shared prosperity...`,
      structureSuggestion: { governance: governanceStyle || 'admin', delegates: [], voting: { method: 'one-citizen-one-vote', quorum: 0.33 } },
      note: 'Returned fallback due to AI error',
      error: error?.message || 'AI generation failed'
    });
  }
}