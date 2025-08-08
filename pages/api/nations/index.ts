import type { NextApiRequest, NextApiResponse } from 'next';
import { createNation, loadAllNations, GovernanceStyle, FundingModel, NationCurrency } from '../../../lib/nations';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const nations = loadAllNations();
    return res.status(200).json({ nations });
  }

  if (req.method === 'POST') {
    try {
      const { name, flagDataUrl, constitution, governanceStyle, fundingModel, currency } = req.body || {};

      if (!name || !constitution || !governanceStyle || !fundingModel) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const nation = createNation({
        name,
        flagDataUrl,
        constitution,
        governanceStyle: governanceStyle as GovernanceStyle,
        fundingModel: fundingModel as FundingModel,
        currency: (currency as NationCurrency) || 'ZION$',
      });

      return res.status(201).json({ nation });
    } catch (error: any) {
      return res.status(500).json({ error: error?.message || 'Failed to create nation' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}