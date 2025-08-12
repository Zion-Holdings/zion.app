import type { NextApiRequest, NextApiResponse } from 'next';
import { subscribeToNewsletter } from '@/services/newsletterService';
import {logErrorToProduction} from '@/utils/productionLogger';


type ResponseData =
  | { status: string }
  | { error: string; details?: string };

// Email validation regex (same as used in FooterNewsletter component)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email } = req.body as { email?: unknown };

    // Validate email
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ 
        error: 'Email is required',
        details: 'Please provide a valid email address'
      });
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        details: 'Please check your email address and try again'
      });
    }

    const trimmedEmail = email.trim().toLowerCase();

    try {
      await subscribeToNewsletter(trimmedEmail);
      return res.status(200).json({ status: 'subscribed' });
    } catch (integrationError: any) {
      logErrorToProduction('Newsletter integration error:', { data: integrationError });
      if (integrationError.message && integrationError.message.includes('already a list member')) {
        return res.status(200).json({ status: 'already_subscribed' });
      }
      if (integrationError.message && integrationError.message.includes('Invalid email')) {
        return res.status(400).json({
          error: 'Invalid email address',
          details: 'Please check your email and try again'
        });
      }
      return res.status(500).json({
        error: 'Subscription failed',
        details: 'Please try again later or contact support'
      });
    }
  } catch (error: any) {
    logErrorToProduction('Newsletter subscription error:', { data: error });
    return res.status(500).json({
      error: 'Subscription failed',
      details: 'Please try again later or contact support if the problem persists'
    });
  }
}
