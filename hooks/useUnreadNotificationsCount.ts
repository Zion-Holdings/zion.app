import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase/client';

const LOCAL_STORAGE_KEY = 'zion.notifications';

function isSupabaseConfigured(): boolean {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || '';
  const anon = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) || '';
  if (!url || !anon) return false;
  if (url.includes('placeholder.supabase.co') || anon.includes('placeholder')) return false;
  return true;
}

export function useUnreadNotificationsCount() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    async function fetchCount() {
      try {
        if (isSupabaseConfigured()) {
          const { count: serverCount } = await supabase
            .from('notifications')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'New');
          if (!cancelled) setCount(serverCount || 0);
        } else if (typeof window !== 'undefined') {
          const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
          const arr = raw ? (JSON.parse(raw) as any[]) : [];
          const localCount = arr.filter((n) => n.status === 'New').length;
          if (!cancelled) setCount(localCount);
        }
      } catch {
        if (!cancelled) setCount(0);
      }
    }

    fetchCount();

    const interval = setInterval(fetchCount, 15000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return count;
}