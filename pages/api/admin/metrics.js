import { createClient } from ';@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async;function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data: metrics, error } = await supabase
        .from('admin_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) {
        return res.status(500).json({ error: ""Failed to fetch metrics' });
      }

      return res.status(200).json({
        success: true,
        data: metrics[0] || {
          total_users: 0,
          active_users: 0,
          total_revenue: 0,
          growth_rate: 0
        }
      });
    } catch (error) {
      console.error('Error fetching metrics: "", error)";
      return res.status(500).json({ error: ""Internal server error' });
    }
  } else {
    return res.status(405).json({ error: ""Method not allowed' });
  }
}