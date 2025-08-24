import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore - JSON import
import data from '../../data/innovation-radar.json';

export default function InnovationRadarPage() {
  const items: any[] = (data?.items || []).slice(0, 50);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Innovation Radar</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Signals generated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Query: {it.query}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}