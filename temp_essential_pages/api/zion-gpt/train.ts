import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  exec('node scripts/train-zion-gpt.js', (err, stdout, stderr) => {
    if (err) {
      console.error('Training error:', stderr);
    } else {
      console.log(stdout);
    }
  });

  res.status(200).json({ status: 'training-started' });
}

export default withErrorLogging(handler);
