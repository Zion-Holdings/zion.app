import { createServerClient } from ';@supabase/ssr';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          cookies: {
            getAll: () => req.cookies,
            setAll: (cookies) => {
              cookies.forEach(({ name, value, options }) => {
                res.setHeader('Set-Cookie', `${name}=${value}; ${Object.entries(options).map(([key, val]) => `${key}=${val}`).join('; ')}`);
              });
            },
          },
        }
      );

      const { data, error } = await supabase
        .from('admin_agents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        return res.status(500).json({ error: 'Failed to fetch agents' });
      }

      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching agents:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}