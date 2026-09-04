'use client';

import { useEffect, useMemo, useState } from 'react';

type Story = {
  id: string;
  title: string;
  date: string;
  category: 'news' | 'social-impact' | 'product';
  summary: string;
  link: string;
};

const stories: Story[] = [
  {
    id: 'zion-news-2026-q1',
    title: 'Zion expands AI services across Latin America',
    date: '2026-03-15',
    category: 'news',
    summary: 'New regional delivery model for AI consulting with faster onboarding for enterprise clients.',
    link: '/news/zion-tech-news-2026-q1',
  },
  {
    id: 'zion-social-impact-2026',
    title: 'Free IT/AI training program for communities',
    date: '2026-04-02',
    category: 'social-impact',
    summary: 'Local workshops focused on practical AI adoption, cloud basics, and cybersecurity awareness.',
    link: '/news/zion-tech-news-2027-q2',
  },
  {
    id: 'zion-product-update-2026',
    title: 'AI Observability platform update',
    date: '2026-05-10',
    category: 'product',
    summary: 'Improved tracing, alerting, and dashboarding for AI services and model workloads.',
    link: '/services/ai-observability/',
  },
];

type Metric = { label: string; value: string; helper: string };

const metrics: Metric[] = [
  { label: 'News updates', value: '24+', helper: 'Last 12 months' },
  { label: 'Social programs', value: '8', helper: 'Communities supported' },
  { label: 'Free tools', value: '35+', helper: 'On ziontechgroup.com' },
];

export default function NewsroomTracker() {
  const [filter, setFilter] = useState<'all' | Story['category']>('all');
  const [keyword, setKeyword] = useState('');

  const items = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return stories.filter((item) => {
      if (filter !== 'all' && item.category !== filter) return false;
      if (!kw) return true;
      return (
        item.title.toLowerCase().includes(kw) ||
        item.summary.toLowerCase().includes(kw) ||
        item.category.toLowerCase().includes(kw)
      );
    });
  }, [filter, keyword]);

  useEffect(() => {
    const saved = localStorage.getItem('newsroom_mentions_raw');
    if (!saved) {
      const initial = {
        updatedAt: new Date().toISOString(),
        mentions: [
          { source: 'Wayback/Archive', title: '2024 homepage capture preserved', url: 'https://web.archive.org/web/20250124132838/https://ziontechgroup.com/' },
          { source: 'Live site', title: 'Current deployment', url: 'https://ziontechgroup.com' },
        ],
      };
      localStorage.setItem('newsroom_mentions_raw', JSON.stringify(initial));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="text-2xl font-semibold text-white">{m.value}</div>
            <div className="text-sm text-slate-300">{m.label}</div>
            <div className="text-xs text-slate-500">{m.helper}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {(['all', 'news', 'social-impact', 'product'] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-3 py-1.5 text-sm ${
                filter === item ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-200'
              }`}
            >
              {item === 'social-impact' ? 'Social impact' : item}
            </button>
          ))}
        </div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search newsroom..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-400 sm:w-72"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <a key={item.id} href={item.link} className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{item.category}</span>
              <span className="text-xs text-slate-500">{item.date}</span>
            </div>
            <div className="mt-2 text-white group-hover:text-white/90">{item.title}</div>
            <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
            <span className="mt-3 inline-block text-sm font-medium text-cyan-300 group-hover:text-cyan-200">Read more →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
