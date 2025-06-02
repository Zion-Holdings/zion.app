import { createClient } from '@supabase/supabase-js';

// Basic types so this handler works in Node or Next.js
type Req = { method?: string; query?: any };
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API. Service cannot start.';
  console.error(errorMessage);
  // This error will be thrown when the module is loaded, preventing the API route from being available
  // if essential configuration is missing.
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: Req, res: JsonRes) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { category } = req.query; // Access the category parameter

  try {
    let query = supabase
      .from('services')
      .select('id, title AS name, slug, price');

    if (category) {
      console.log(`Fetching services with category: ${category}`);
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      const msg = error.message?.toLowerCase() || '';
      if (msg.includes('no rows') || msg.includes('0 rows')) {
        // Treat "no rows" as an empty result, not an error
        res.status(200).json([]);
        return;
      }
      console.error('Error fetching services from Supabase:', error.message);
      throw error;
    }

    res.status(200).json(data ?? []);
  } catch (err: any) {
    console.error('Service fetch error:', err.message ? err.message : JSON.stringify(err));
    res.status(500).json({ error: 'Database error while fetching services', details: err.message });
  }
}
