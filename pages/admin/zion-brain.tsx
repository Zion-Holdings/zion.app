import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedNavigation from '@/components/layout/EnhancedNavigation';

type LogsSummary = { entries: any[]; byModule: Record<string, number>; byType: Record<string, number>; total: number };

export default function ZionBrainAdmin() {
  const [token, setToken] = useState<string>('');
  const [routerInput, setRouterInput] = useState('');
  const [routerResult, setRouterResult] = useState<any>(null);

  const [metrics, setMetrics] = useState({ signupsLastHour: 18, disputeFlagsLastHour: 2, zionVelocity: 110 });
  const [triggers, setTriggers] = useState<any[]>([]);

  const [prompt, setPrompt] = useState('');
  const [userIntent, setUserIntent] = useState('');
  const [optimized, setOptimized] = useState('');

  const [logs, setLogs] = useState<LogsSummary | null>(null);
  const [stuck, setStuck] = useState<any[]>([]);

  useEffect(() => {
    const t = localStorage.getItem('zion_superadmin_token') || '';
    setToken(t);
    refreshLogs(t);
  }, []);

  const authHeaders = useMemo(() => (token ? { 'x-admin-token': token } : {}), [token]);

  async function refreshLogs(t?: string) {
    const headers = t ? { 'x-admin-token': t } : authHeaders;
    const res = await fetch('/api/zion-brain/logs', { headers });
    if (res.ok) setLogs(await res.json());
    const stuckRes = await fetch('/api/zion-brain/logs?stuck=1', { headers });
    if (stuckRes.ok) setStuck((await stuckRes.json()).entries || []);
  }

  async function handleRoute() {
    const res = await fetch('/api/zion-brain/router', { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders }, body: JSON.stringify({ text: routerInput }) });
    const data = await res.json();
    setRouterResult(data);
    await refreshLogs();
  }

  async function handleEvaluateReflex() {
    const res = await fetch('/api/zion-brain/reflex', { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders }, body: JSON.stringify(metrics) });
    const data = await res.json();
    setTriggers(data.triggers || []);
    await refreshLogs();
  }

  async function handleOptimize() {
    const res = await fetch('/api/zion-brain/optimize', { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders }, body: JSON.stringify({ prompt, userIntent }) });
    const data = await res.json();
    setOptimized(data.optimized || '');
    await refreshLogs();
  }

  function saveToken() {
    localStorage.setItem('zion_superadmin_token', token);
    refreshLogs(token);
  }

  const heatCells = useMemo(() => {
    if (!logs) return [] as { key: string; value: number }[];
    return Object.entries(logs.byModule || {}).map(([k, v]) => ({ key: k, value: v as number }));
  }, [logs]);

  return (
    <>
      <Head>
        <title>Zion Brain Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <EnhancedNavigation />
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-2xl font-semibold">Zion Brain — Admin</h1>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Always-on, self-monitoring AI</span>
        </div>

        <section className="mb-8 p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Superadmin Access</h2>
          <div className="flex gap-2 items-center">
            <input className="border px-2 py-1 rounded w-80" placeholder="Enter admin token" value={token} onChange={(e) => setToken(e.target.value)} />
            <button className="px-3 py-1 bg-black text-white rounded" onClick={saveToken}>Save</button>
            <span className="text-xs text-gray-500">Token is required if SUPERADMIN_TOKEN is set on server</span>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">1) Auto-Prompt Router</h2>
            <textarea className="w-full border rounded p-2 mb-2" rows={4} placeholder="Type a user request..." value={routerInput} onChange={(e) => setRouterInput(e.target.value)} />
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleRoute}>Detect & Route</button>
            {routerResult && (
              <div className="mt-3 text-sm">
                <div><b>Intent</b>: {routerResult.intent} ({Math.round((routerResult.confidence || 0) * 100)}%)</div>
                <div><b>Routed</b>: {routerResult.routed?.routed ? 'yes' : 'no'}</div>
              </div>
            )}
            <ul className="text-xs mt-2 list-disc pl-5 text-gray-600">
              <li>Chains: Resume builder, DAO explainer, Tokenomics simulator, Governance summarizer, Nation assistant</li>
            </ul>
          </section>

          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">2) Reflex Engine</h2>
            <div className="grid grid-cols-3 gap-2 mb-2 text-sm">
              <label className="flex flex-col">
                <span>Signups/hr</span>
                <input type="number" className="border rounded px-2 py-1" value={metrics.signupsLastHour} onChange={(e) => setMetrics({ ...metrics, signupsLastHour: Number(e.target.value) })} />
              </label>
              <label className="flex flex-col">
                <span>Disputes/hr</span>
                <input type="number" className="border rounded px-2 py-1" value={metrics.disputeFlagsLastHour} onChange={(e) => setMetrics({ ...metrics, disputeFlagsLastHour: Number(e.target.value) })} />
              </label>
              <label className="flex flex-col">
                <span>ZION$/min</span>
                <input type="number" className="border rounded px-2 py-1" value={metrics.zionVelocity} onChange={(e) => setMetrics({ ...metrics, zionVelocity: Number(e.target.value) })} />
              </label>
            </div>
            <button className="px-3 py-1 bg-green-700 text-white rounded" onClick={handleEvaluateReflex}>Evaluate</button>
            {triggers?.length > 0 ? (
              <ul className="mt-3 text-sm list-disc pl-5">
                {triggers.map((t, i) => (
                  <li key={i}>{t.action} — {t.reason} ({t.severity})</li>
                ))}
              </ul>
            ) : (
              <div className="mt-3 text-sm text-gray-600">No triggers</div>
            )}
          </section>

          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">3) Prompt Optimizer</h2>
            <input className="border rounded px-2 py-1 w-full mb-2" placeholder="Optional: user intent" value={userIntent} onChange={(e) => setUserIntent(e.target.value)} />
            <textarea className="w-full border rounded p-2 mb-2" rows={5} placeholder="Paste a prompt to optimize" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-purple-700 text-white rounded" onClick={handleOptimize}>Optimize</button>
              <span className="text-xs text-gray-500">Instruction: Review this prompt and rewrite it to be 30% faster and more specific to user intent.</span>
            </div>
            {optimized && (
              <div className="mt-3">
                <div className="text-xs uppercase text-gray-500 mb-1">Optimized</div>
                <pre className="text-sm whitespace-pre-wrap bg-gray-50 dark:bg-gray-900 p-2 rounded">{optimized}</pre>
              </div>
            )}
          </section>

          <section className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">4) Visualization Dashboard</h2>
            <div className="text-sm mb-2">Logs per prompt type and module usage</div>
            <div className="grid grid-cols-5 gap-2">
              {heatCells.map(({ key, value }) => (
                <div key={key} className="p-3 rounded text-center text-xs" style={{ background: `rgba(59,130,246,${Math.min(1, 0.2 + value / 15)})`, color: 'white' }}>
                  <div className="font-semibold">{key}</div>
                  <div>{value}</div>
                </div>
              ))}
              {heatCells.length === 0 && <div className="text-xs text-gray-500">No data</div>}
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium mb-1">Stuck users</div>
              {stuck.length > 0 ? (
                <ul className="text-xs list-disc pl-5">
                  {stuck.map((e, i) => (
                    <li key={i}>{e.module} — {String(e.type)} — {e.status} — {e.latencyMs || '?'}ms</li>
                  ))}
                </ul>
              ) : (
                <div className="text-xs text-gray-500">None detected</div>
              )}
            </div>
          </section>
        </div>

        <section className="mt-8 p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">Superadmin Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <button className="px-3 py-2 border rounded hover:bg-gray-50" onClick={() => alert('Deploy chain — stubbed')}>Deploy new GPT chain</button>
            <button className="px-3 py-2 border rounded hover:bg-gray-50" onClick={() => alert('Suspend agent — stubbed')}>Suspend agents</button>
            <button className="px-3 py-2 border rounded hover:bg-gray-50" onClick={() => refreshLogs()}>View audit trail (refresh logs)</button>
          </div>
        </section>
      </main>
    </>
  );
}