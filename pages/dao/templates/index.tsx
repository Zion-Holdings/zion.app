import { useEffect, useState } from 'react';
import Link from 'next/link';

type Template = {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
};

type ApiResponse = {
  templates: Template[];
  byCategory: Record<string, Template[]>;
};

export default function ZgpTemplateLibraryPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/zgp/templates')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  const filtered = (category: string) => {
    const items = data?.byCategory?.[category] || [];
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter(t => (t.title + t.code + t.description).toLowerCase().includes(q));
  };

  const categories = Object.keys(data?.byCategory || {});

  return (
    <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Zion Governance Proposal Library</h1>
      <p className="text-gray-500 mb-6">Draft proposals using ready-to-use templates. Compatible with ZionDAO and public governance flows.</p>

      <div className="mb-8 flex items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search templates..."
          className="w-full border rounded px-3 py-2"
        />
        <Link href="/governance/zgp-library" className="text-sm text-blue-600 underline">Alt Route</Link>
      </div>

      {categories.length === 0 && <p className="text-gray-500">Loading templates…</p>}

      <div className="space-y-10">
        {categories.map((cat) => (
          <section key={cat}>
            <h2 className="text-xl font-medium mb-3">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered(cat).map(t => (
                <div key={t.id} className="border rounded p-4 hover:shadow-sm transition">
                  <div className="text-xs text-gray-500 mb-1">{t.code}</div>
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{t.description}</div>
                  <div className="mt-3">
                    <Link href={`/dao/templates/${t.id}`} className="text-blue-600 underline">Draft with this template</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}