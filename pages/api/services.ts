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

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';
const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

if (!supabaseUrl || !serviceKey) {
  console.error('Missing database connection string for pages/api/services.ts');
}

const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  try {
    const rawLimit = req.query?.limit;
    let parsedLimit = 20; // Default limit
    if (rawLimit) {
      const num = parseInt(String(rawLimit), 10); // Ensure rawLimit is treated as string
      if (!isNaN(num) && num > 0) {
        parsedLimit = num;
      } else if (rawLimit) { // Log if limit was provided but invalid
        console.warn(`Invalid limit value received: ${rawLimit}. Using default ${parsedLimit}.`);
      }
    }

    // Optionally get count for pagination, though not strictly required by the prompt
    // For simplicity, we'll stick to the select fields mentioned.
    const query = supabase
      .from('services')
      .select('id, title, price, rating, category')
      .limit(parsedLimit);

    const { data, error } = await query;

    if (error) {
      throw error; // Let the catch block handle it
    }

    res.status(200).json(data || []);
  } catch (err: any) {
    let errorMessage = 'Failed to fetch services';
    let errorCode = 'UNKNOWN_ERROR'; // Default error code
    let errorDetails = '';

    if (err.code) { // Check if it's a Supabase error with a code
      errorCode = err.code;
      errorDetails = err.details || '';
      // You could customize errorMessage based on err.code here if desired
      // e.g., if (err.code === '42P01') errorMessage = 'Service table not found.';
    }
    
    console.error(
      'Service fetch error:', 
      err.message, 
      'Details:', errorDetails, 
      'Code:', errorCode, 
      'Full error:', JSON.stringify(err, Object.getOwnPropertyNames(err)) // Stringify for better logging
    );
    
    // It's good practice to not expose raw error messages/details to the client
    // unless they are specifically crafted for client consumption.
    res.status(500).json({ error: 'An internal server error occurred while fetching services.', code: errorCode });
  }
}
