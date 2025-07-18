import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Mock reviews data
  const reviews = [
    {
      id: '1',
      title: 'Great Service',
      content: 'Excellent experience with the platform.',
      rating: 5,
      author: 'John Doe',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Good Platform',
      content: 'Very useful and intuitive.',
      rating: 4,
      author: 'Jane Smith',
      date: '2024-01-10'
    }
  ];

  res.status(200).json({ reviews });
}
