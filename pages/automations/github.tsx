import Head from 'next/head';
import gh from '../../data/automation/github.json';

type Repo = { full_name: string; stars: number; html_url: string };

export default function GitHubEcosystem() {
  const topics = gh.topics || {} as Record<string, Repo[]>;
  return (
    <div>
      <Head>
        <title>GitHub Ecosystem Metrics</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">GitHub Ecosystem Metrics</h1>
      <p className="text-sm opacity-80 mb-4">Updated {new Date(gh.updatedAt).toLocaleString()}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(topics).length === 0 && <div className="enhanced-card border border-gray-100 dark:border-gray-800">No data yet.</div>}
        {Object.entries(topics).map(([topic, repos]) => (
          <div key={topic} className="enhanced-card border border-gray-100 dark:border-gray-800">
            <div className="font-medium mb-2">{topic}</div>
            <div className="space-y-1 text-sm">
              {repos.map((r, i) => (
                <a key={i} href={r.html_url} target="_blank" rel="noreferrer" className="flex justify-between hover:underline">
                  <span className="opacity-80">{r.full_name}</span>
                  <span className="tabular-nums">★ {r.stars.toLocaleString()}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}