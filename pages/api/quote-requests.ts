import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Only create Supabase client if environment variables are available
const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
  : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const quoteRequest = req.body;

      // For local development without Supabase, return mock response
      if (!supabase) {
        return res.status(201).json({
          success: true,
          id: `qr_${Date.now()}`,
          message: 'Quote request saved successfully (mock)'
        });
      }

      // Insert quote request into database
      const { data, error } = await supabase
        .from('quote_requests'
        .insert([
          {
            service_id: quoteRequest.serviceId,
            service_title: quoteRequest.serviceTitle,
            project_description: quoteRequest.projectDescription,
            timeline_start: quoteRequest.timeline.startDate,
            timeline_end: quoteRequest.timeline.endDate,
            budget_range: quoteRequest.budgetRange,
            contact_email: quoteRequest.contactEmail,
            additional_requirements: quoteRequest.additionalRequirements,
            ai_summary: quoteRequest.aiSummary,
            status: 'pending',
            created_at: new Date().toISOString(
          }
        ]
        .select(
        .single();

      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to save quote request' });
      }

      return res.status(201).json({
        success: true,
        id: data.id,
        message: 'Quote request saved successfully'
      });
    } catch (error) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const { email } = req.query;

      // For local development without Supabase, return mock data
      if (!supabase) {
        return res.status(200).json([]);
      }

      let query = supabase
        .from('quote_requests'
        .select('*'
        .order('created_at', { ascending: false });

      if (email) {
        query = query.eq('contact_email', email);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to fetch quote requests' });
      }

      return res.status(200).json(data || []);
    } catch (error) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
} )))))))