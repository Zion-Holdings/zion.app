import type { GetServerSideProps } from 'next';
import { verifySessionToken } from '../../utils/adminAuth';
import { useEffect, useState } from 'react';

type AgentStatus = {
  id: string;
  name: string;
  status: string;
  workload?: string;
  nextSteps?: string[];
  services?: string[];
  lastUpdated?: string;
};

type DashboardData = {
  status: { agents: AgentStatus[]; updatedAt: string | null };
  insights: { items: { title: string; url?: string }[]; updatedAt: string | null };
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookieHeader = req.headers.cookie || '';
  const token = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith('admin_session='))?.split('=')[1];
  const session = verifySessionToken(token);
  if (!session) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }
  return { props: {} };
};

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch('/api/admin/status');
      if (!res.ok) throw new Error('Failed to load status');
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setError(e.message);
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Agents Admin</h1>
        <a className="text-sm text-indigo-600 hover:underline" href="/api/admin/logout">Logout</a>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {!data && !error && <p>Loading…</p>}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded shadow p-4">
            <h2 className="font-medium mb-3">Agents</h2>
            <div className="divide-y">
              {data.status.agents.length === 0 && <p className="text-sm text-gray-500">No agents reported yet.</p>}
              {data.status.agents.map((a) => (
                <div key={a.id} className="py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{a.name}</p>
                      <p className="text-xs text-gray-500">{a.status}{a.lastUpdated ? ` • ${new Date(a.lastUpdated).toLocaleString()}` : ''}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${a.status === 'running' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{a.status}</span>
                  </div>
                  {a.workload && <p className="text-sm mt-1">Workload: {a.workload}</p>}
                  {a.nextSteps && a.nextSteps.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Next steps</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {a.nextSteps.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                  {a.services && a.services.length > 0 && (
                    <p className="text-sm mt-2">Services: {a.services.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">Updated: {data.status.updatedAt ? new Date(data.status.updatedAt).toLocaleString() : '—'}</p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-medium mb-3">Insights</h2>
            <ul className="space-y-2">
              {data.insights.items.length === 0 && <li className="text-sm text-gray-500">No insights yet.</li>}
              {data.insights.items.map((it, i) => (
                <li key={i} className="text-sm">
                  {it.url ? <a href={it.url} className="text-indigo-600 hover:underline" target="_blank" rel="noreferrer">{it.title}</a> : it.title}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-3">Updated: {data.insights.updatedAt ? new Date(data.insights.updatedAt).toLocaleString() : '—'}</p>
          </div>
        </div>
      )}
    </div>
  );
}