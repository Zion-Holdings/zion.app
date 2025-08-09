import Head from 'next/head';
import content from '../../data/automation/content.json';

type Item = { source: string; title: string; url: string; tags?: string[]; score?: number };

export default function TechContentCurator() {
  const items = (content.items as Item[]) || [];
  return (
    <div>
      <Head>
        <title>Tech Content Curator</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">Tech Content Curator</h1>
      <p className="text-sm opacity-80 mb-4">Updated {new Date(content.updatedAt).toLocaleString()}</p>
      <div className="space-y-3">
        {items.map((it, idx) => (
          <a key={idx} href={it.url} target="_blank" rel="noreferrer" className="block enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-xs opacity-70 mt-1">{it.source} {(it.tags || []).slice(0,4).join(' · ')}</div>
              </div>
              {typeof it.score === 'number' && (
                <div className="text-xs px-2 py-1 rounded bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300">Score {it.score}</div>
              )}
            </div>
          </a>
        ))}
        {items.length === 0 && <div className="opacity-60">No content yet.</div>}
      </div>
    </div>
  );
}