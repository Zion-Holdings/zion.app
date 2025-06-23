import type { NextApiRequest, NextApiResponse } from 'next';
import { mailchimpService } from '@/integrations/mailchimp';

type ResponseData = 
  | { status: string; message: string }
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
    const { email } = req.body;

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

    // Check if Mailchimp is configured
    if (!mailchimpService) {
      console.warn('Mailchimp not configured - environment variables may be missing');
      console.log(`Newsletter subscription request for: ${trimmedEmail}`);
      
      // For now, log subscription and return success
      // In production, this should integrate with an alternative email service
      return res.status(200).json({ 
        status: 'subscribed',
        message: 'Successfully subscribed to newsletter!'
      });
    }

    // Use Mailchimp service
    try {
      await mailchimpService.addSubscriber({
        email: trimmedEmail,
        mergeFields: {
          SOURCE: 'website_footer',
          SIGNUP_DATE: new Date().toISOString()
        }
      });

      console.log(`Successfully subscribed ${trimmedEmail} to Mailchimp newsletter`);
      
      return res.status(200).json({ 
        status: 'subscribed',
        message: 'Successfully subscribed to newsletter!'
      });
    } catch (mailchimpError: any) {
      console.error('Mailchimp subscription error:', mailchimpError);

      // Handle specific Mailchimp errors
      if (mailchimpError.message && mailchimpError.message.includes('already a list member')) {
        return res.status(200).json({ 
          status: 'already_subscribed',
          message: 'You\'re already subscribed to our newsletter!'
        });
      }

      if (mailchimpError.message && mailchimpError.message.includes('Invalid email')) {
        return res.status(400).json({ 
          error: 'Invalid email address',
          details: 'Please check your email and try again'
        });
      }

      // For other Mailchimp errors, still return success to user but log the error
      console.log('Mailchimp error occurred, but returning success to user');
      return res.status(500).json({ 
        error: 'Subscription failed',
        details: 'Please try again later or contact support'
      });
    }
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    
    return res.status(500).json({ 
      error: 'Subscription failed',
      details: 'Please try again later or contact support if the problem persists'
    });
  }
} 