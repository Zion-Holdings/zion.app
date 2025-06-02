import { createClient, SupabaseClient, PostgrestError } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define the structure of a Service item based on your DB schema and select query
interface ServiceItem {
  id: string;
  name: string; // Aliased from 'title' in the query
  slug: string;
  price: number;
  // Add other fields if selected and returned
}

interface ErrorResponse {
  error: string;
  details?: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (services). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase: SupabaseClient = createClient(supabaseUrl, serviceKey);

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ServiceItem[] | ErrorResponse>
) {
  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed for security
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET'); // Also set Allow for 405
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { category } = req.query; // category can be string or string[]

  try {
    let query = supabase
      .from('services')
      .select('id, title AS name, slug, price'); // Ensure these match ServiceItem

    if (category && typeof category === 'string') { // Handle category if it's a single string
      console.log(`Fetching services with category: ${category}`);
      query = query.eq('category', category);
    } else if (category) {
      // Handle cases where category might be an array or invalid, though typically it's a string from query
      console.warn(`Received non-string category query parameter: ${category}`);
      // Optionally, return a 400 error or ignore if multiple categories not supported
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching services from Supabase:', error.message);
      // Do not throw error here, let it be handled by the catch block or return a response
      return res.status(500).json({ error: "Database error while fetching services", details: error.message });
    }

    return res.status(200).json((data as ServiceItem[]) || []);
  } catch (err: unknown) {
    let errorMessage = "An unexpected error occurred while fetching services.";
    let errorDetails: string | undefined;

    if (err instanceof PostgrestError) { // More specific Supabase error
        errorMessage = "Database error while fetching services";
        errorDetails = `Code: ${err.code}, Message: ${err.message}`;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    console.error('Service fetch error:', err);
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  }
}
