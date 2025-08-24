import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="financials.csv"');
  const rows = [
    ['month','mrr','burn','gmv'],
    ['2025-05','82000','-60000','1100000'],
    ['2025-06','86400','-62000','1200000'],
  ];
  const csv = rows.map(r => r.join(',')).join('\n');
  res.status(200).send(csv);
}