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

export default function HealthCheckTool() {
  const [url, setUrl] = useState('https://ziontechgroup.com');
  const [results, setResults] = useState<Result[]>([]);
  const [running, setRunning] = useState(false);

  const check = async () => {
    setRunning(true);
    const res: Result[] = [];
    const targets = [url];
    if (url && !targets.includes(url + '/')) targets.push(url + '/');
    for (const target of targets) {
      const started = Date.now();
      try {
        const r = await fetch(target, { method: 'GET', mode: 'no-cors', cache: 'no-store' });
        const ttl = Date.now() - started;
        res.push({ url: target, status: r.status, finalUrl: target, redirected: false, ttlMs: ttl });
      } catch (e: any) {
        res.push({ url: target, error: e.message || 'Network error' });
      }
    }
    setResults(res);
    setRunning(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Website Health Check</h1>
        <p className="text-slate-400 mb-6">Probe any URL for reachability, redirect, and response timing.</p>

        <label className="block text-sm font-medium text-slate-300 mb-2">URL</label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
        />
        <button onClick={check} disabled={running} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500 disabled:opacity-50">
          {running ? 'Checking...' : 'Run Check'}
        </button>

        <div className="mt-6 space-y-3">
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
