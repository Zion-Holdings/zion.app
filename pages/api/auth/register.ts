import type { NextApiRequest, NextApiResponse } from 'next;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });

  // Mock API response
  res.status(200).json({
    message: 'API endpoint working',
    endpoint: 'auth/register',
    method: req.method,
    timestamp: new Date().toISOString(),
  });
