import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
import { v4 as uuid } from 'uuid';

const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient.from('talent_profiles').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return res.status(200).json({ items: data as TalentProfile[] });
      }
      return res.status(200).json({ items: LOCAL });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body as Partial<TalentProfile>;
      const slug = (payload.name || 'talent').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + uuid().slice(0, 6);
      const item: TalentProfile = {
        ...payload,
        id: uuid(),
        slug,
        verified: false,
        rating: 0,
        reviewsCount: 0,
        createdAt: new Date().toISOString(),
        summary: payload.summary || '',
        skills: payload.skills || [],
        name: payload.name || 'Unnamed',
        title: payload.title || 'Professional',
        location: payload.location || 'Remote',
        availability: (payload.availability as any) || 'Open',
      } as TalentProfile;

      if (hasSupabase) {
        const { error } = await supabaseClient.from('talent_profiles').insert({
          id: item.id,
          slug: item.slug,
          name: item.name,
          title: item.title,
          category: item.category,
          location: item.location,
          timezone: item.timezone,
          region: item.region,
          skills: item.skills,
          summary: item.summary,
          bio: item.bio,
          hourly_rate_usd: item.hourlyRateUsd ?? null,
          request_quote: item.requestQuote ?? null,
          availability: item.availability,
          profile_image_url: item.profileImageUrl ?? null,
          video_url: item.videoUrl ?? null,
          portfolio: item.portfolio ?? null,
          verified: item.verified ?? null,
          rating: item.rating ?? null,
          reviews_count: item.reviewsCount ?? null,
          created_at: item.createdAt,
        } as any);
        if (error) throw error;
        return res.status(201).json({ slug: item.slug });
      }

      // Fallback: return the slug as if saved
      return res.status(201).json({ slug: item.slug });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed');
}