import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';

const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function applyTranslations(item: TalentProfile, lang?: string) {
  if (!lang || !item.translations) return { item, translated: false };
  const t = item.translations;
  const translated: Partial<TalentProfile> = {};
  if (t.title?.[lang]) translated.title = t.title[lang];
  if (t.summary?.[lang]) translated.summary = t.summary[lang];
  if (t.bio?.[lang]) translated.bio = t.bio[lang];
  if (t.category?.[lang]) translated.category = t.category[lang];
  return { item: { ...item, ...translated }, translated: Object.keys(translated).length > 0 };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.setHeader('Allow', 'GET').status(405).end('Method Not Allowed');
  }
  const { slug, lang } = req.query as { slug: string; lang?: string };

  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient.from('talent_profiles').select('*').eq('slug', slug).single();
      if (error) throw error;
      const { item, translated } = applyTranslations(data as unknown as TalentProfile, lang);
      return res.status(200).json({ item, translated });
    }

    const base = LOCAL.find((t) => t.slug === slug) || null;
    if (!base) return res.status(404).json({ error: 'Not found' });
    const { item, translated } = applyTranslations(base, lang);
    return res.status(200).json({ item, translated });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}