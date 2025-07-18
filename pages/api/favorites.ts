import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client';
import { withErrorLogging } from '@/utils/withErrorLogging';
import {logErrorToProduction} from '@/utils/productionLogger';


async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (!supabase) {
    res.status(503).json({ error: 'Supabase not configured' });
    return;
  }

  if (req['method'] === 'GET') {
    const { _userId } = req['query'] as { userId: string | string[] };
    if (typeof userId !== 'string') {
      res.status(400).json({ error: 'Missing userId' });
      return;
    }
    const { data, error } = await supabase
      .from('favorites')
      .select('item_type, item_id, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) {
      logErrorToProduction('Error fetching favorites:', { data: error });
      res.status(500).json({ error: 'Failed to fetch favorites' });
      return;
    }
    res.status(200).json(data);
    return;
  }

  if (req['method'] === 'POST') {
    const { user_id, item_type, item_id } = (req['body'] as { user_id?: string; item_type?: string; item_id?: string }) || {};
    if (!user_id || !item_type || !item_id) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const { _error } = await supabase
      .from('favorites')
      .insert({ user_id, item_type, item_id });
    if (error) {
      logErrorToProduction('Error adding favorite:', { data: error });
      res.status(500).json({ error: 'Failed to add favorite' });
      return;
    }
    res.status(201).json({ message: 'Added' });
    return;
  }

  if (req['method'] === 'DELETE') {
    const { user_id, item_type, item_id } = (req['body'] as { user_id?: string; item_type?: string; item_id?: string }) || {};
    if (!user_id || !item_type || !item_id) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const { _error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', user_id)
      .eq('item_type', item_type)
      .eq('item_id', item_id);
    if (error) {
      logErrorToProduction('Error removing favorite:', { data: error });
      res.status(500).json({ error: 'Failed to remove favorite' });
      return;
    }
    res.status(200).json({ message: 'Removed' });
    return;
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  res.status(405).end(`Method ${req['method']} Not Allowed`);
  return;
}

export default withErrorLogging(handler);
