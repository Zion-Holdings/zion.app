'use client';

import { useState, useEffect } from 'react';

interface Result {
  url: string;
  status?: number;
  statusText?: string;
  finalUrl?: string;
  redirected?: boolean;
  contentType?: string;
  server?: string;
  xCache?: string;
  ttlMs?: number;
  error?: string;
}

const PRESETS = [
  { name: 'Home', url: 'https://ziontechgroup.com' },
  { name: 'AI Services', url: 'https://ziontechgroup.com/ai-services/' },
  { name: 'Contact', url: 'https://ziontechgroup.com/contact/' },
  { name: 'Free Tools', url: 'https://ziontechgroup.com/free-tools-hub/' },
  { name: 'Services', url: 'https://ziontechgroup.com/services/' },
  { name: 'Blog', url: 'https://ziontechgroup.com/blog/' },
  { name: 'Status', url: 'https://ziontechgroup.com/status/service-health/' },
];

export default function HealthCheckTool() {
  const [url, setUrl] = useState('https://ziontechgroup.com');
  const [results, setResults] = useState<Result[]>([]);
  const [running, setRunning] = useState(false);

  const check = async (target: string) => {
    const started = Date.now();
    try {
      const r = await fetch(target, { method: 'GET', mode: 'no-cors', cache: 'no-store' });
      const ttl = Date.now() - started;
      return { url: target, status: r.status as number | undefined, finalUrl: target, redirected: false, ttlMs: ttl } as Result;
    } catch (e: any) {
      return { url: target, error: e?.message || 'Network error' } as Result;
    }
  };

  const runChecks = async () => {
    setRunning(true);
    const items = [url];
    if (url && !items.includes(url + '/')) items.push(url + '/');
    const out = await Promise.all(items.map(check));
    setResults(out);
    setRunning(false);
  };

  const runPresets = async () => {
    setRunning(true);
    const out = await Promise.all(PRESETS.map(p => check(p.url)));
    setResults(out);
    setRunning(false);
  };

  useEffect(() => {
    runPresets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const summary = results.reduce(
    (acc, r) => {
      if (r.error) acc.error++;
      else if (r.status && r.status >= 200 && r.status < 400) acc.ok++;
      else acc.other++;
      return acc;
    },
    { ok: 0, error: 0, other: 0 }
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Website Health Check</h1>
        <p className="text-slate-400 mb-4">Quick client-side reachability check for the public Zion Tech Group routes and any URL.</p>
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-400">
          <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1">🟢 OK: {summary.ok}</span>
          <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1">🔴 Error: {summary.error}</span>
          <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1">⚫ Other: {summary.other}</span>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          <button onClick={runPresets} disabled={running} className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500 disabled:opacity-50">
            {running ? 'Checking…' : 'Check Public Routes'}
          </button>
        </div>

        <div className="mb-6 flex gap-2">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
          />
          <button onClick={runChecks} disabled={running} className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-700 disabled:opacity-50">
            Check URL
          </button>
        </div>

        <div className="space-y-3">
          {results.map((r, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm">
              <div className="font-mono text-slate-200">{r.url}</div>
              <div className="text-slate-400 mt-1">
                {r.error ? `Error: ${r.error}` : `status=${r.status ?? 'unknown'} time=${r.ttlMs ?? '-'}ms`}
              </div>
            </div>
          ))}
          {results.length === 0 && <div className="text-slate-500">No results yet.</div>}
        </div>
      </div>
    </main>
  );
}
