import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

type Item = { source: string; name: string; url: string; description?: string; downloads?: number };

type Props = { pypi: Item[]; crates: Item[]; github: { [k: string]: Item[] } };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'tech-radar.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return {
      props: {
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {},
      },
      revalidate: 7200,
    };
  } catch {
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 };
  }
};

export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys(github);
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Tech Radar</h1>
        <p className="text-gray-600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>
      </header>

      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {crates.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
            </li>
          ))}
        </ul>
      </section>

      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] || []).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
                {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}