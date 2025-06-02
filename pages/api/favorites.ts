import { createClient, PostgrestError } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define interfaces for request and response types
interface FavoriteItem {
  item_type: string;
  item_id: string;
  created_at?: string; // Optional for request, present in response
  user_id?: string; // Optional for request, not usually returned in GET all
}

interface FavoriteRequestBody {
  user_id?: string; // Can also come from query for GET
  item_type?: string;
  item_id?: string;
}

interface FavoriteRequestQuery {
  userId?: string;
}

type GetFavoritesResponse = FavoriteItem[];
interface MutationSuccessResponse {
  success: boolean;
  message?: string; // Optional success message
}
interface ErrorResponse {
  error: string;
  details?: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (favorites). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<GetFavoritesResponse | MutationSuccessResponse | ErrorResponse>
) {
  // Extract userId from body (for POST/DELETE) or query (for GET)
  const reqBody = req.body as FavoriteRequestBody;
  const reqQuery = req.query as FavoriteRequestQuery;
  const userId = reqBody.user_id || reqQuery.userId;

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId in request body or query parameters' });
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('favorites')
      .select('item_type, item_id, created_at')
      .eq('user_id', userId as string) // userId is now potentially string[] from query, ensure it's string
      .order('created_at', { ascending: false });

    if (error) {
      console.error('GET Favorites Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data || []);
  }

  // For POST and DELETE, item_type and item_id are expected in the body
  const { item_type, item_id } = reqBody;
  if (!item_type || !item_id) {
    return res.status(400).json({ error: 'Missing item_type or item_id in request body' });
  }

  if (req.method === 'POST') {
    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: userId as string, item_type, item_id });

    if (error) {
      console.error('POST Favorite Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, message: 'Favorite added successfully.' });
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', userId as string)
      .eq('item_type', item_type)
      .eq('item_id', item_id);

    if (error) {
      console.error('DELETE Favorite Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, message: 'Favorite removed successfully.' });
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
