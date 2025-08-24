import type { NextApiRequest, NextApiResponse } from 'next';
import { requireSuperadminApi } from '../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const rows = [
    ['Metric','Value','Trend%'],
    ['Monthly Recurring Revenue (MRR)','$220,450','8.2'],
    ['GMV','$4,800,000','5.1'],
    ['Active users (monthly)','18452','3.9'],
    ['Active users (TTM)','162340','12.4'],
    ['Churn rate','2.4%','-0.3'],
    ['CAC/LTV ratio','1:5.6','0.4'],
  ];
  const csv = rows.map(r => r.map(v => String(v)).join(',')).join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="ipo-metrics.csv"');
  res.status(200).send(csv);
}