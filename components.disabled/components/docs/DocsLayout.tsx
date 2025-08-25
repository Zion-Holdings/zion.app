import React, { useMemo, useState } from 'react';
import Link from 'next/link';

export type DocsNavItem = {
  id: string;
  title: string;
};

export type DocsLayoutProps = {
  title: string;
  nav: DocsNavItem[];
  children: React.ReactNode;
};

export default function DocsLayout({ title, nav, children }: DocsLayoutProps) {
  const [query, setQuery] = useState('');

  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return nav;
    return nav.filter((n) => n.title.toLowerCase().includes(q));
  }, [query, nav]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-6">
      <aside className="lg:sticky lg:top-20 self-start space-y-4">
        <div>
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <input
            type="search"
            placeholder="Search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 text-sm bg-white dark:bg-black"
          />
        </div>
        <nav className="space-y-1 text-sm">
          {filteredNav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </article>

      <aside className="hidden lg:block lg:sticky lg:top-20 self-start">
        <div className="border-l pl-4 border-gray-200 dark:border-gray-800">
          <p className="text-xs uppercase tracking-wide text-gray-500">On this page</p>
          <ul id="toc" className="mt-2 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link href="/developers/docs/print"><a className="text-sm underline">Download PDF</a></Link>
        </div>
      </aside>
    </div>
  );
}