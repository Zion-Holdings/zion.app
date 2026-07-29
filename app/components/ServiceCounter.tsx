'use client';

import { useEffect, useRef, useState } from 'react';
import { allServices } from '../data/servicesData';

/** Animated number counter — counts up from 0 to target on mount */
export default function ServiceCounter() {
  const [displayed, setDisplayed] = useState(0);
  const [target, setTarget] = useState<number>(() => {
    const base = (allServices as readonly any[]).length;
    if (base > 0) return base;
    return 0;
  });
  const started = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;
    async function loadStats() {
      try {
        const res = await fetch('/data/serviceStats.json', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const total = Number(data?.total_services || 0);
        if (total > 0) setTarget(total);
      } catch {
        // ignore
      }
    }
    loadStats();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const duration  = 1200;        // ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.floor(eased * target));

      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(target);        // snap to exact
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target]);

  return (
    <span className="font-bold gradient-text tabular-nums">
      {displayed.toLocaleString()}
    </span>
  );
}
