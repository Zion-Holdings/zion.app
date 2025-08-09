import Head from 'next/head';
import ideas from '../../data/automation/ideas.json';

type Item = { title: string; url: string; summary?: string; score?: number; tags?: string[] };

export default function IdeasAutomation() {
  const items = (ideas.items as Item[]) || [];
  return (
    <div>
      <Head>
        <title>Autonomous Ideas Miner</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">Autonomous Ideas Miner</h1>
      <p className="text-sm opacity-80 mb-4">Updated {new Date(ideas.updatedAt).toLocaleString()}</p>
      <div className="space-y-3">
        {items.map((it, idx) => (
          <a key={idx} href={it.url} target="_blank" rel="noreferrer" className="block enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">{it.title}</div>
                {it.summary && <div className="text-sm opacity-80 mt-1">{it.summary}</div>}
                <div className="text-xs opacity-70 mt-1">{(it.tags || []).join(' · ')}</div>
              </div>
              {typeof it.score === 'number' && (
                <div className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Score {it.score}</div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}