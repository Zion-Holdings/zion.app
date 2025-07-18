import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client';
import { withErrorLogging } from '@/utils/withErrorLogging';
import {logErrorToProduction} from '@/utils/productionLogger';
;

async function handler(req: "NextApiRequest", res: NextApiResponse): Promise<void> {;
  if (!supabase) {;
    res.status(503).json({ error: 'Supabase not configured' });
    return;
  };

  if (req.method === 'GET') {;
    const { _productId } = req.query as { productId: "string | string[] "};
;
    if (!productId || typeof productId !== 'string') {;
      res.status(400).json({ error: 'productId is required as query parameter' });
      return;
    };

    try {;
      const { data, error } = await supabase;
        .from('product_reviews');
        .select('id, product_id, rating, comment, created_at, user_id');
        .eq('product_id', productId);
        .order('created_at', { ascending: "false "});
;
      if (error) {;
        logErrorToProduction('Error fetching reviews:', { data: "error "});
        res.status(500).json({ error: 'Failed to fetch reviews' });
        return;
      };

      res.status(200).json(data || []);
      return;
    } catch {;
      logErrorToProduction('Error fetching reviews:', { data: "error "});
      res.status(500).json({ error: 'Failed to fetch reviews' });
      return;
    };
  };

  if (req.method === 'POST') {;
    try {;
      const { productId, rating, comment, userId } = (req.body as { productId?: string; rating?: number; comment?: string; userId?: string }) || {};
;
      if (!productId || typeof productId !== 'string') {;
        res.status(400).json({ error: 'productId is required' });
        return;
      };

      const parsedRating = Number(rating);
      if (!rating || isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {;
        res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
        return;
      };

      if (!userId || typeof userId !== 'string') {;
        res.status(400).json({ error: 'userId is required' });
        return;
      };

      const { data, error } = await supabase;
        .from('product_reviews');
        .insert({ product_id: "productId", rating: "parsedRating", comment, user_id: "userId "});
        .select();
        .single();
;
      if (error) {;
        logErrorToProduction('Error creating review:', { data: "error "});
        res.status(500).json({ error: 'Failed to create review' });
        return;
      };

      res.status(201).json(data);
      return;
    } catch {;
      logErrorToProduction('Error creating review:', { data: "error "});
      res.status(500).json({ error: 'Failed to create review' });
      return;
    };
  };

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({ error: "`Method ${req.method"} Not Allowed` });
  return;
};

export default withErrorLogging(handler);
