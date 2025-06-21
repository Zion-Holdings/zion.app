import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const internalAuthServiceUrl = process.env.INTERNAL_AUTH_SERVICE_URL;

  if (!internalAuthServiceUrl) {
    console.error('INTERNAL_AUTH_SERVICE_URL is not set. Cannot perform health check.');
    return res.status(500).json({ message: 'Auth service URL not configured' });
  }

  try {
    const response = await fetch(`${internalAuthServiceUrl}/health`);
    if (!response.ok) {
      console.error('Auth service health check failed with status', response.status);
      return res.status(500).json({ message: 'Auth service unreachable' });
    }
    const data = await response.json().catch(() => ({ status: 'unknown' }));
    return res.status(200).json({ status: 'ok', service: data });
  } catch (error: any) {
    console.error('Auth service health check error:', error);
    return res.status(500).json({ message: 'Auth service unreachable' });
  }
}
