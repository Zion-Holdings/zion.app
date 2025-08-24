import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { targetInstitution, type, regionalScope, budgetOrGoals, supportingMultiverses, language, customPrompt } = req.body || {};

  let markdown = '';
  let structured: any = {};

  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  if (hasOpenAI) {
    try {
      const { OpenAI } = await import('openai');
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const system = 'You are a policy and development program proposal writer for global institutions.';
      const user = `${customPrompt || ''}\n\nContext:\n- Target institution: ${targetInstitution}\n- Type: ${type}\n- Region: ${regionalScope}\n- Budget/Goals: ${budgetOrGoals}\n- Supporting multiverses: ${supportingMultiverses}\n- Language: ${language || 'English'}\n\nOutput:
1) A thorough proposal in Markdown.
2) A JSON object with fields: title, summary, objectives[], metrics[], outcomes[], governance (dao_logic), budget, timeline, risks, partnerships, implementation_plan.`;
      const resp = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        temperature: 0.4,
      });
      const text = resp.choices?.[0]?.message?.content || '';
      // naive split
      const jsonStart = text.indexOf('{');
      if (jsonStart > -1) {
        const md = text.slice(0, jsonStart).trim();
        const js = text.slice(jsonStart).trim();
        markdown = md;
        try { structured = JSON.parse(js); } catch {
          structured = { title: 'Zion Proposal', summary: 'Structured JSON unavailable from model.' };
        }
      } else {
        markdown = text;
        structured = { title: 'Zion Proposal', summary: 'Structured JSON not found.' };
      }
    } catch (e) {
      markdown = '';
      structured = {};
    }
  }

  if (!markdown) {
    const id = uuidv4();
    markdown = `# Zion x ${targetInstitution || 'UNDP'}: ${type || 'Workforce Dev'} Initiative\n\nRegion: ${regionalScope || 'Global'}\n\n## Summary\nIntegrate Zion into the Digital Labor Initiative to expand equitable access to dignified digital work.\n\n## Objectives\n- Onboard 10,000 workers in year one\n- Establish DAO-based governance with regional councils\n\n## Metrics\n- Placement rate, income uplift, gender parity, skills certifications\n\n## Governance\nZion DAO with quadratic voting, transparent treasury, and citizen feedback loops.\n\n## Budget / Goals\n${budgetOrGoals || 'To be defined'}\n\n## Supporting Multiverses\n${supportingMultiverses || 'Zion.Work, Zion.ID'}\n`;
    structured = {
      id,
      title: `Zion x ${targetInstitution || 'UNDP'}: ${type || 'Workforce Dev'} Initiative`,
      summary: 'Integrate Zion into the Digital Labor Initiative to expand equitable access to dignified digital work.',
      objectives: ['Onboard 10k workers in year one', 'Establish DAO-based governance with regional councils'],
      metrics: ['Placement rate', 'Income uplift', 'Gender parity', 'Skills certifications'],
      governance: { dao_logic: 'Quadratic voting, transparent treasury, citizen feedback loops' },
      budget: budgetOrGoals || 'TBD',
      region: regionalScope || 'Global',
      type: type || 'Workforce Dev',
      targetInstitution: targetInstitution || 'UNDP',
    };
  }

  res.status(200).json({ markdown, json: structured });
}