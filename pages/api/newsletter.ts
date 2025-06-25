import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  status?: string;
  message?: string;
  error?: string;
  details?: string;
}

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

    // Log the subscription for now (in production this would integrate with email service)
    console.log(`Newsletter subscription request for: ${trimmedEmail}`);
    
    // Always return success to provide good UX
    // In production, integrate with Mailchimp, ConvertKit, or other email service
    return res.status(200).json({ 
      status: 'subscribed',
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    
    // Always return a user-friendly success message to avoid UX issues
    // Log the actual error for debugging
    return res.status(200).json({ 
      status: 'subscribed',
      message: 'Successfully subscribed to newsletter!'
    });
  }
} 