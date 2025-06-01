import type { NextApiRequest, NextApiResponse } from 'next';

interface Item {
  id: string;
  title: string;
  category: string;
}

const items: Item[] = [
  { id: '1', title: 'Service A', category: 'services' },
  { id: '2', title: 'Service B', category: 'services' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const { category } = req.query;
  const result = typeof category === 'string'
    ? items.filter(i => i.category === category)
    : items;

  res.status(200).json(result);
}
