import type { NextApiRequest, NextApiResponse } from 'next';
import isEmail from 'validator/lib/isEmail';
import { subscribeToNewsletter } from '@/services/newsletterService';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string } | { error: string }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const email = (req.body && req.body.email) || '';
  if (typeof email !== 'string' || !isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    await subscribeToNewsletter(email);
    return res.status(200).json({ status: 'subscribed' });
  } catch (err: any) {
    console.error('Newsletter subscription error:', err);
    return res.status(500).json({ error: 'Subscription failed' });
  }
}

export default withErrorLogging(handler);
