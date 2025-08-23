import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const id = uuidv4();
    const body = req.body || {};

    // Basic validation
    if (!body?.contactEmail || !body?.projectName) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Here you could persist to a DB or send an email/notification.
    // For now we just echo back an id.
    return res.status(200).json({ id, received: true });
  } catch (error: any) {
    return res.status(500).json({ message: error?.message || 'Internal Server Error' });
  }
}