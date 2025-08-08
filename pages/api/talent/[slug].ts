import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';

const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.setHeader('Allow', 'GET').status(405).end('Method Not Allowed');
  }
  const { slug } = req.query as { slug: string };

  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient.from('talent_profiles').select('*').eq('slug', slug).single();
      if (error) throw error;
      return res.status(200).json({ item: data });
    }

    const item = LOCAL.find((t) => t.slug === slug) || null;
    if (!item) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ item });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}