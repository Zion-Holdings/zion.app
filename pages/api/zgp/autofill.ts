import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { loadTemplates } from '@/utils/zgp-storage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }
    const { templateId, brief } = req.body || {};
    if (!templateId || !brief) {
      res.status(400).json({ error: 'templateId and brief are required' });
      return;
    }
    const template = loadTemplates().find(t => t.id === templateId);
    if (!template) {
      res.status(404).json({ error: 'Template not found' });
      return;
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      res.status(200).json({
        suggestion: {
          summary: template.defaults.summary,
          motivation: template.defaults.motivation,
          specificationImpact: template.defaults.specificationImpact,
          codeModuleAffected: template.defaults.codeModuleAffected,
          votingOptions: template.defaults.votingOptions,
        },
        note: 'OPENAI_API_KEY not set; returned template defaults.'
      });
      return;
    }

    const client = new OpenAI({ apiKey });
    const system = `You are an assistant helping draft ZionDAO Governance Proposals (ZGP). Produce concise, clear fields: summary, motivation, specificationImpact, codeModuleAffected, votingOptions (3-5 strings).`;
    const user = `Template: ${template.code} ${template.title} (${template.category})\nBrief: ${brief}\nReturn JSON`;
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }
      ],
      response_format: { type: 'json_object' }
    });

    const content = response.choices?.[0]?.message?.content || '{}';
    let parsed: any;
    try { parsed = JSON.parse(content); } catch { parsed = {}; }

    res.status(200).json({ suggestion: parsed });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}