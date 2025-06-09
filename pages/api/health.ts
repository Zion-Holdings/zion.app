import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';

type HealthResponse = {
  status: string;
  version: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | { error: string }>
) {
  if (req.method === 'GET') {
    try {
      const commitHash = execSync('git rev-parse HEAD').toString().trim();
      res.status(200).json({ status: 'ok', version: commitHash });
    } catch (error) {
      console.error('Failed to get commit hash:', error);
      res.status(500).json({ error: 'Failed to retrieve version information.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
