import { useEffect, useState } from 'react';

type RepoStats = { generatedAt?: string; pages?: number; blogPosts?: number; digests?: number; governance?: { voters: number; totalPower: number; proposals: number } | null };

export default function RepoAutomation() {
  const [stats, setStats] = useState<RepoStats | null>(null);

  useEffect(() => {
    fetch('/api/reports/repo').then(r => r.json()).then(setStats).catch(() => setStats(null));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Repo Stats</h1>
        <p className="text-gray-600 mt-2">Automatically tracks content and governance stats and updates README badges.</p>
      </div>
      {stats ? (
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="border rounded p-4"><div className="text-gray-500">Generated</div><div className="font-semibold">{stats.generatedAt ? new Date(stats.generatedAt).toLocaleString() : '—'}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Pages</div><div className="font-semibold">{stats.pages ?? '—'}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Blog posts</div><div className="font-semibold">{stats.blogPosts ?? '—'}</div></div>
          <div className="border rounded p-4"><div className="text-gray-500">Digests</div><div className="font-semibold">{stats.digests ?? '—'}</div></div>
        </div>
      ) : <div className="text-sm text-gray-600">No repo stats yet.</div>}
    </div>
  );
}