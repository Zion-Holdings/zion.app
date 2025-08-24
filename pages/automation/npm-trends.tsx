import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/npm-trends.json';

export default function NpmTrendsPage() {
  const items: any[] = (data?.items || []).slice(0, 50);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">NPM Trends</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.links?.npm} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.name}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">v{it.version} · Score {Math.round((it.score || 0) * 100) / 100}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}