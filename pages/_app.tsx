import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useEffect, useState } from 'react';

function Sidebar() {
  const [feed, setFeed] = useState<any>(null);
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/sidebar/feed.json', { cache: 'no-store' });
        if (!res.ok) return;
        const json = await res.json();
        if (!cancelled) setFeed(json);
      } catch (e) {
        // ignore
      }
    }
    load();
    const id = setInterval(load, 1000 * 60 * 5); // refresh every 5min on client
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  return (
    <aside className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
      <nav aria-label="Live sidebar" className="space-y-3">
        {feed?.quickLinks && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/70">Quick Links</div>
            <ul className="space-y-1 text-sm">
              {feed.quickLinks.map((l: any, idx: number) => (
                <li key={idx}><a className="text-cyan-300/90 hover:text-cyan-200" href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        )}
        {feed?.changelog?.length ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur max-w-xs">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/70">Latest Changes</div>
            <ul className="space-y-1 text-xs text-white/80">
              {feed.changelog.slice(0, 6).map((c: string, idx: number) => (
                <li key={idx} className="truncate" title={c}>• {c}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {feed?.latestReports?.length ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur max-w-xs">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/70">Reports</div>
            <ul className="space-y-1 text-xs text-white/80">
              {feed.latestReports.slice(0, 6).map((r: any, idx: number) => (
                <li key={idx} className="truncate">
                  <a className="text-cyan-300/90 hover:text-cyan-200" href={r.href} title={r.summary || r.slug}>{r.slug}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </aside>
  );
}

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Sidebar />
    </>
  );
}
