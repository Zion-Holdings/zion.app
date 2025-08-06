import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data: metrics, error } = await supabase
        .from('admin_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) {
        return res.status(500).json({ error: 'Failed to fetch metrics' });
      }

      res.status(200).json(metrics || []);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}