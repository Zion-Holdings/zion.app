import { useEffect } from 'react';
import Router from 'next/router';

function send(route: string, ms: number) {
  try {
    fetch('/api/metrics/ingest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'pageLoad', route, ms })
    });
  } catch {}
}

export default function PageLoadTracker() {
  useEffect(() => {
    const report = (route: string) => {
      if (typeof performance !== 'undefined' && performance.getEntriesByType) {
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        const ms = nav ? nav.duration : performance.now();
        send(route, ms);
      }
    };

    report(window.location.pathname);

    const handleRouteChange = (url: string) => {
      setTimeout(() => report(url), 0);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
}