import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
import { NotificationItem, NotificationType } from '../../../utils/notifications';

function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split(';').map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userId = getUserId(req);
    const { filter = 'all', countOnly, limit = '50', offset = '0' } = req.query as Record<string, string>;

    // If countOnly, return unread count quickly
    if (countOnly === 'true') {
      const { data, error } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read_status', false);

      if (error) {
        // Fallback to 0 on error (e.g., table missing)
        return res.status(200).json({ count: 0 });
      }

      const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed
      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);
        return res.status(200).json({ count: exactCount || 0 });
      }

      return res.status(200).json({ count });
    }

    // Build query based on filter
    let query = supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });

    if (filter === 'unread') {
      query = query.eq('read_status', false);
    } else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {
      query = query.eq('type', filter as NotificationType);
    }

    const { data, error } = await query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);

    if (error) {
      // Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
        {
          id: 'seed-1',
          user_id: userId,
          type: 'onboarding',
          title: 'Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.',
          created_at: new Date().toISOString(),
          read_status: false,
          related_action: '/profile',
        },
        {
          id: 'seed-2',
          user_id: userId,
          type: 'system',
          title: 'System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.',
          created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          read_status: false,
          related_action: '/status',
        },
      ];
      return res.status(200).json({ notifications: fallback });
    }

    return res.status(200).json({ notifications: data as NotificationItem[] });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}