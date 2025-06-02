import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { recommendEquipment } from '@/utils/recommendationEngine';

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl || '', serviceKey || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const userId = typeof req.query.userId === 'string' ? req.query.userId : undefined;
  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  const recommendations = await recommendEquipment(userId, supabase);
  res.status(200).json(recommendations);
}
