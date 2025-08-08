import React, { useEffect, useState } from 'react';
import type { GetServerSideProps } from 'next';

type SystemEntry = [string, any];

interface DashboardStatus {
  systems: SystemEntry[];
  metrics: any[];
  alerts: any[];
}

const API_BASE = process.env.NEXT_PUBLIC_AUTOMATION_DASHBOARD_URL || 'http://localhost:3001';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const auth = req.headers['authorization'] || '';
  const expectedUser = 'kleber@ziontechgroup.com';
  const expectedPass = 'Tw2.R5u&2!sDfeW';

  const unauthorized = () => {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin Automation"');
    res.end('Authentication required');
    return { props: {} } as any;
  };

  if (!auth.startsWith('Basic ')) {
    return unauthorized();
  }

  try {
    const base64 = auth.slice('Basic '.length).trim();
    const decoded = Buffer.from(base64, 'base64').toString('utf8');
    const [user, pass] = decoded.split(':');
    if (user !== expectedUser || pass !== expectedPass) {
      return unauthorized();
    }
  } catch {
    return unauthorized();
  }

  return { props: {} };
};

export default function AdminAutomationStatusPage() {
  const [status, setStatus] = useState<DashboardStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/status`);
      const json = await res.json();
      setStatus(json);
    } catch (e: any) {
      setError(e?.message || 'Failed to load status');
    } finally {
      setLoading(false);
    }
  };

  const runAll = async () => {
    try {
      await fetch(`${API_BASE}/api/run-all`, { method: 'POST' });
      setTimeout(fetchStatus, 1500);
    } catch {}
  };

  const runOne = async (system: string) => {
    try {
      await fetch(`${API_BASE}/api/run`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ system }) });
      setTimeout(fetchStatus, 1500);
    } catch {}
  };

  const downloadReport = () => {
    window.open(`${API_BASE}/api/report`, '_blank');
  };

  useEffect(() => {
    fetchStatus();
    const id = setInterval(fetchStatus, 5000);
    return () => clearInterval(id);
  }, []);

  const systems = status?.systems || [];
  const alerts = status?.alerts || [];

  return (
    <main className="min-h-screen p-6 md:p-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Admin Automation Status</h1>
          <div className="flex gap-2">
            <button onClick={fetchStatus} className="px-3 py-2 bg-gray-800 text-white rounded-md">Refresh</button>
            <button onClick={runAll} className="px-3 py-2 bg-blue-600 text-white rounded-md">Run All</button>
            <button onClick={downloadReport} className="px-3 py-2 bg-purple-600 text-white rounded-md">Download Report</button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>
        )}
        {loading && (
          <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded">Loading...</div>
        )}

        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3">Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map(([name, sys]) => (
              <div key={name} className="bg-white rounded border p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-gray-500">{sys.category || 'misc'}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${sys.isRunning ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {sys.isRunning ? 'Running' : 'Idle'}
                  </span>
                </div>
                <div className="text-sm text-gray-700 space-y-1 mb-3">
                  <div>Success: {sys.successCount || 0}</div>
                  <div>Failures: {sys.failureCount || 0}</div>
                  <div>Avg Time: {Math.round(sys.averageExecutionTime || 0)}ms</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => runOne(name)} className="px-3 py-1 bg-blue-600 text-white rounded">Run</button>
                  <a href={`${API_BASE}/api/report`} className="px-3 py-1 bg-gray-200 rounded">Report</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-3">Alerts</h2>
          <div className="space-y-2">
            {alerts.length === 0 && <div className="text-gray-500">No alerts</div>}
            {alerts.map((a: any, idx: number) => (
              <div key={idx} className={`p-3 rounded ${a.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                <div className="font-medium">{a.system}</div>
                <div className="text-sm">{a.message}</div>
                <div className="text-xs text-gray-600">{a.timestamp}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}