import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

type Item = { source: string; title: string; url: string; date?: string; summary?: string };

type Props = { items: Item[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'innovation-digest.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { items: data.items || [] }, revalidate: 1800 };
  } catch {
    return { props: { items: [] }, revalidate: 1800 };
  }
};

export default function InnovationDigest({ items }: Props) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Innovation Digest</h1>
        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>
      )}
      <ul className="space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{it.source}</div>
              {it.date && <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(it.date).toLocaleString()}</div>}
            </div>
            <a href={it.url} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400">{it.title}</a>
            {it.summary && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}