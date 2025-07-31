import { NextApiRequest, NextApiResponse } from 'next';

interface QuoteRequestData {
  services: string[];
  talent: string[];
  equipment: string[];
  projectName: string;
  projectDescription: string;
  projectType: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  urgency: string;
  budgetRange: string;
  budgetDetails: string;
  clientName: string;
  email: string;
  phone: string;
  company: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: QuoteRequestData = req.body;

    // Basic validation
    if (!data.clientName || !data.email) {
      return res.status(400).json({ 
        error: 'Client name and email are required' 
      });
    }

    if (!data.email.includes('@')) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address' 
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create CRM entry
    // 4. Log the request

    console.log('Quote request received:', {
      timestamp: new Date().toISOString(),
      data
    });

    // For now, we'll just return success
    // In a real implementation, you would:
    // - Save to your database (e.g., Supabase, PostgreSQL)
    // - Send email notifications to your team
    // - Create a CRM entry
    // - Send confirmation email to client

    return res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `QR-${Date.now()}` // Generate a unique quote ID
    });

  } catch (error) {
    console.error('Error processing quote request:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
} 