import { createClient } from ';@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async;function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('autonomous_agents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching agents: "", error)";
      res.status(500).json({ error: ""Internal server error' });
    }
  } else {
    res.status(405).json({ error: ""Method not allowed' });
  }
}