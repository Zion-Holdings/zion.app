import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-agent-repos.json';

export default function GithubAgentReposPage() {
  const items: any[] = (data?.items || []).slice(0, 50);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language || '—'}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}