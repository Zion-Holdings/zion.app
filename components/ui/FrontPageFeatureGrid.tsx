import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface AppPageMeta {
  route: string;
  title: string;
  category: string;
}

const FrontPageFeatureGrid: React.FC = () => {
  const [pages, setPages] = useState<AppPageMeta[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/app-pages.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPages(Array.isArray(data.pages) ? data.pages : []);
      } catch (e: any) {
        setError(e?.message || 'Failed to load');
      }
    }
    load();
  }, []);

  if (error) {
    return <div className="text-sm text-red-300">Failed to load features: {error}</div>;
  }

  const categories = Array.from(new Set(pages.map((p) => p.category)));

  return (
    <div className="mt-16 space-y-10">
      {categories.map((cat) => (
        <section key={cat}>
          <h2 className="text-2xl font-semibold mb-4 capitalize text-white/90">{cat.replace(/-/g, ' ')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages
              .filter((p) => p.category === cat)
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((p) => (
                <Link key={p.route} href={p.route}>
                  <a className="block bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-cyan-400/30 hover:translate-y-[-2px] transition">
                    <div className="text-lg font-medium mb-2 text-white/95">{p.title}</div>
                    <div className="text-xs text-white/60 break-all">{p.route}</div>
                  </a>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default FrontPageFeatureGrid;