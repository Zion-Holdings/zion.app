import type { NextApiRequest, NextApiResponse } from 'next';
import { logErrorToProduction } from '@/utils/productionLogger';

type NewsletterResponse = 
  | { success: true; message: string }
  | { status: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsletterResponse>
) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({ status: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ status: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ status: 'Invalid email format' });
    }

    // Here you would integrate with your newsletter service
    // For example, Mailchimp, ConvertKit, etc.
    try {
      // Example integration (replace with your actual service)
      // const response = await fetch('https://api.yournewsletterservice.com/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // For now, just log the subscription
      console.log('Newsletter subscription:', { email });
      
      return res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter'
      });
    } catch (integrationError) {
      logErrorToProduction('Newsletter integration error:', { data: integrationError });
      const errorMessage = (integrationError as { message: string }).message;
      return res.status(500).json({ status: errorMessage });
    }
  } catch (error) {
    logErrorToProduction('Newsletter API error:', { data: error });
    return res.status(500).json({ status: 'Internal server error' });
  }
}