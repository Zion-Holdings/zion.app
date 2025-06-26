import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!supabase) {
    return res.status(503).json({ error: 'Supabase not configured' });
  }

  if (req.method === 'GET') {
    const { productId } = req.query;

    if (!productId || typeof productId !== 'string') {
      return res.status(400).json({ error: 'productId is required as query parameter' });
    }

    try {
      const { data, error } = await supabase
        .from('product_reviews')
        .select('id, product_id, rating, comment, created_at, user_id')
        .eq('product_id', productId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        return res.status(500).json({ error: 'Failed to fetch reviews' });
      }

      return res.status(200).json(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { productId, rating, comment, userId } = req.body || {};

      if (!productId || typeof productId !== 'string') {
        return res.status(400).json({ error: 'productId is required' });
      }

      const parsedRating = Number(rating);
      if (!rating || isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
        return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
      }

      if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ error: 'userId is required' });
      }

      const { data, error } = await supabase
        .from('product_reviews')
        .insert({ product_id: productId, rating: parsedRating, comment, user_id: userId })
        .select()
        .single();

      if (error) {
        console.error('Error creating review:', error);
        return res.status(500).json({ error: 'Failed to create review' });
      }

      return res.status(201).json(data);
    } catch (error) {
      console.error('Error creating review:', error);
      return res.status(500).json({ error: 'Failed to create review' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}

export default withErrorLogging(handler);
