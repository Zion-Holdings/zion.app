import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client';
import { withErrorLogging } from '@/utils/withErrorLogging';
import {logErrorToProduction} from '@/utils/productionLogger';


async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (!supabase) {
    res.status(503).json({ error: 'Supabase not configured' });
    return;
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { _productId } = req.query as { productId: string | string[] };
  if (!productId || typeof productId !== 'string') {
    res.status(400).json({
      error: 'productId is required in the URL path and must be a string.',
    });
    return;
  }

  try {
    const { data, error } = await supabase
      .from('product_reviews')
      .select('id, product_id, rating, comment, created_at, user_id')
      .eq('product_id', productId)
      .order('created_at', { ascending: false });

    if (error) {
      logErrorToProduction('Error fetching reviews:', { data: error });
      res.status(500).json({ error: 'Failed to fetch reviews' });
      return;
    }

    res.status(200).json(data || []);
    return;
  } catch {
    logErrorToProduction('Error fetching reviews:', { data: error });
    res.status(500).json({
      error: 'Internal server error while fetching reviews.',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
    return;
  }
}

export default withErrorLogging(handler);
