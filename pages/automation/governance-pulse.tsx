import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore - JSON import
import data from '../../data/governance-pulse.json';

export default function GovernancePulsePage() {
  const items: any[] = (data?.items || []).slice(0, 60);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Governance Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.space} · {it.state} · Start {new Date(it.start * 1000).toLocaleString()} · End {new Date(it.end * 1000).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}