import type { NextApiRequest, NextApiResponse } from 'next';

type HealthResponse = {
  status: string;
  version: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | { error: string; status: string }>
) {
  if (req.method === 'GET') {
    try {
      let version = process.env.NEXT_PUBLIC_APP_VERSION;
      if (!version) {
        version = "unknown";
        console.warn("Application version not set. Defaulting to 'unknown'.");
      }
      res.status(200).json({ status: 'ok', version });
    } catch (error) {
      console.error('Failed to retrieve version information:', error);
      res.status(500).json({ error: 'Failed to retrieve version information.', status: 'error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
