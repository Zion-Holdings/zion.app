import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

type ApiResponse = {
  ok: boolean;
  query: string;
  parsed: any;
  keywords: string[];
  didYouMean?: string | null;
  counts: { all: number; talent: number; jobs: number; projects: number };
  results: {
    all: any[];
    talent: any[];
    jobs: any[];
    projects: any[];
  };
};

function Highlight({ text, keywords }: { text: string; keywords: string[] }) {
  const spans = useMemo(() => {
    if (!keywords?.length) return [text];
    const pattern = new RegExp(`(${keywords.map(k => k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'ig');
    const parts = text.split(pattern);
    return parts.map((part, i) =>
      keywords.some(k => new RegExp(k, 'i').test(part)) ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-700/50 rounded px-0.5">{part}</mark> : <span key={i}>{part}</span>
    );
  }, [text, keywords]);
  return <>{spans}</>;
}

export default function SearchPage() {
  const router = useRouter();
  const q = (router.query.q as string) || '';
  const [data, setData] = useState<ApiResponse | null>(null);
  const [tab, setTab] = useState<'all' | 'talent' | 'jobs' | 'projects'>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) return;
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then(r => r.json())
      .then(j => setData(j))
      .finally(() => setLoading(false));
  }, [q]);

  const results = useMemo(() => {
    if (!data) return [] as any[];
    const map: any = { all: data.results.all, talent: data.results.talent, jobs: data.results.jobs, projects: data.results.projects };
    return map[tab] || [];
  }, [data, tab]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end gap-3">
        <h1 className="text-xl font-semibold">Search</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Find talent, jobs, and projects using natural language.</p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800">
        {(['all','talent','jobs','projects'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`-mb-px px-3 py-2 text-sm border-b-2 ${tab===t?'border-indigo-600 text-indigo-600':'border-transparent text-gray-600 dark:text-gray-400'}`}>
            {t[0].toUpperCase()+t.slice(1)}{data ? ` (${data.counts[t as keyof typeof data.counts]})` : ''}
          </button>
        ))}
      </div>

      {loading && <div className="text-sm text-gray-500">Searching...</div>}

      {data?.didYouMean && results.length === 0 && (
        <div className="text-sm text-gray-600 dark:text-gray-400">Did you mean <button className="underline" onClick={() => router.push(`/search?q=${encodeURIComponent(data.didYouMean || '')}`)}>{data.didYouMean}</button>?</div>
      )}

      {data && (
        <div className="rounded-md border border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
          {results.map((r, i) => (
            <div key={r.id || i} className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="font-medium">
                  <Highlight text={r.title} keywords={data.keywords} />
                </div>
                {r.subtitle && <div className="text-sm text-gray-600 dark:text-gray-400"><Highlight text={r.subtitle} keywords={data.keywords} /></div>}
                {r.description && <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-2"><Highlight text={r.description} keywords={data.keywords} /></div>}
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                  {r.location && <span>📍 {r.location}</span>}
                  {typeof r.hourlyRateUsd === 'number' && <span>💵 ${r.hourlyRateUsd}/hr</span>}
                  {r.availability && <span>⏱ {r.availability}</span>}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {r.tags?.slice(0, 8).map((t: string, idx: number) => (
                    <span key={idx} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                {r.verified && <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">Verified</span>}
              </div>
            </div>
          ))}
          {results.length === 0 && !loading && (
            <div className="p-6 text-sm text-gray-600 dark:text-gray-400">No results found.</div>
          )}
        </div>
      )}

      {data && (
        <div className="rounded-md bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-900/40 p-3 text-sm text-indigo-900 dark:text-indigo-200">
          <div className="font-medium">ZionGPT Tip</div>
          <div className="mt-1">Try filtering by experience level, availability, or budget range. For example: "Senior React developers under $100/hr".</div>
        </div>
      )}
    </div>
  );
}