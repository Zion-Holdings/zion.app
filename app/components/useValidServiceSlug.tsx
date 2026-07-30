'use client';

import { useState, useEffect, useMemo } from 'react';

export function useValidServiceSlug() {
  const [slugs, setSlugs] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8_000);
    fetch('/data/service-slug-index.json', { cache: 'no-store', signal: controller.signal as any })
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then((d) => {
        if (cancelled) return;
        const set = new Set<string>((d?.slugs ?? []).filter((s: any) => s?.status === 'present').map((s: any) => s.slug));
        setSlugs(set);
      })
      .catch(() => {
        if (!cancelled) setSlugs(new Set());
      })
      .finally(() => clearTimeout(timer));
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  return useMemo(() => slugs, [slugs]);
}
