import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { topic = 'Zion OS' } = req.body || {};

  const quiz = [
    {
      question: `What is the primary goal of ${topic}?`,
      options: ['AI, Talent, Trust mission', 'Random mission'],
      answer: 0,
    },
    {
      question: 'Which token powers governance in Zion?',
      options: ['ZION$', 'BTC'],
      answer: 0,
    },
  ];

  return res.status(200).json({ quiz });
}

export default withErrorLogging(handler);
