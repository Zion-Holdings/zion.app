import { useEffect, useRef, useState } from 'react';
import { supabase } from '../utils/supabase/client';

export type MetricDatum = {
  key: string;
  label: string;
  value: number;
  trend?: number[];
  meta?: Record<string, any>;
};

export type MetricsPayload = {
  marketplace: MetricDatum[];
  dao: MetricDatum[];
  token: MetricDatum[];
  multiverse: MetricDatum[];
  timestamp: string;
  history?: Record<string, number[]>;
};

function isSupabaseConfigured() {
  return (
    typeof process !== 'undefined' &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'
  );
}

export function useRealtimeMetrics() {
  const [data, setData] = useState<MetricsPayload | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchOnce() {
      try {
        const res = await fetch('/api/metrics');
        const json = (await res.json()) as MetricsPayload;
        if (isMounted) setData(json);
      } catch (e) {
        console.error('Metrics fetch failed', e);
      }
    }

    fetchOnce();

    if (isSupabaseConfigured()) {
      const channel = supabase
        .channel('kpi-changes')
        .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
          // For demo: simply re-fetch on any change
          fetchOnce();
        })
        .subscribe();

      return () => {
        isMounted = false;
        supabase.removeChannel(channel);
      };
    } else {
      intervalRef.current = setInterval(fetchOnce, 10_000);
      return () => {
        isMounted = false;
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, []);

  return data;
}