import fs from 'fs';
import path from 'path';

type RepoHealth = {
  fullName: string;
  stars: number;
  forks: number;
  openIssues: number;
  openPRs: number;
  defaultBranch: string;
  latestCommitAt: string;
};

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'repo-health.json');
  let repos: RepoHealth[] = [];
  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    repos = json.repos || [];
    generatedAt = json.generatedAt || '';
  } catch {}
  return { props: { repos, generatedAt } };
}

export default function RepoHealthPage({ repos, generatedAt }: { repos: RepoHealth[]; generatedAt: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Repo Health</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="overflow-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-2">Repository</th>
              <th className="text-left p-2">Stars</th>
              <th className="text-left p-2">Forks</th>
              <th className="text-left p-2">Open Issues</th>
              <th className="text-left p-2">Open PRs</th>
              <th className="text-left p-2">Latest Commit</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(r => (
              <tr key={r.fullName} className="border-t">
                <td className="p-2">{r.fullName}</td>
                <td className="p-2">{r.stars}</td>
                <td className="p-2">{r.forks}</td>
                <td className="p-2">{r.openIssues}</td>
                <td className="p-2">{r.openPRs}</td>
                <td className="p-2">{new Date(r.latestCommitAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}