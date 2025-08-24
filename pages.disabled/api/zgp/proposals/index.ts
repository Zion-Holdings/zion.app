import type { NextApiRequest, NextApiResponse } from 'next';
import { createProposal, listProposals } from '@/utils/zgp-storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const proposals = listProposals();
      res.status(200).json({ proposals });
      return;
    }
    if (req.method === 'POST') {
      const {
        templateId,
        title,
        summary,
        motivation,
        specificationImpact,
        codeModuleAffected,
        votingOptions,
        fundingNeeded,
      } = req.body || {};
      if (!templateId || !title) {
        res.status(400).json({ error: 'templateId and title are required' });
        return;
      }
      const proposal = createProposal({
        templateId,
        title,
        summary: summary ?? '',
        motivation: motivation ?? '',
        specificationImpact: specificationImpact ?? '',
        codeModuleAffected: codeModuleAffected ?? '',
        votingOptions: Array.isArray(votingOptions) ? votingOptions : ['For', 'Against', 'Abstain'],
        fundingNeeded: fundingNeeded ?? null,
      });
      res.status(201).json({ proposal });
      return;
    }
    res.setHeader('Allow', 'GET, POST');
    res.status(405).json({ error: 'Method Not Allowed' });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}