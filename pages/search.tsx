import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';

type SearchItem = { title: string; url: string; summary?: string };

export default function SearchPage() {
  const [q, setQ] = useState('');
  const [items, setItems] = useState<SearchItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/search/index.json')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          setItems(Array.isArray(data) ? data : []);
          setLoaded(true);
        }
      })
      .catch(() => setLoaded(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items.slice(0, 50);
    return items
      .filter((it) =>
        [it.title, it.url, it.summary ?? ''].some((v) => v?.toLowerCase().includes(term))
      )
      .slice(0, 100);
  }, [q, items]);

  return (
    <div>
      <Head>
        <title>Search — Zion</title>
        <meta name="description" content="Search across pages and reports." />
      
        <meta property="og:title" content="Search" />
        <meta property="og:description" content="Search — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold">Search</h1>
        <div className="mt-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={loaded ? 'Type to search…' : 'Loading index…'}
            className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none placeholder:text-white/50"
          />
        </div>
        <ul className="mt-6 space-y-3">
          {filtered.map((it) => (
            <li key={it.url} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <a href={it.url} className="text-cyan-300 hover:text-cyan-200 underline">
                {it.title || it.url}
              </a>
              {it.summary ? <p className="text-white/70 text-sm mt-1">{it.summary}</p> : null}
            </li>
          ))}
          {loaded && filtered.length === 0 ? (
            <li className="text-white/60">No results.</li>
          ) : null}
        </ul>
      </main>
    </div>
  );
}


