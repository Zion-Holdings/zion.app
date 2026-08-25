'use client';

import { useState } from 'react';

export const metadata = {
  title: 'API Tester — Zion Tech Group',
  description: 'Free API testing tool: inspect requests, response codes, headers, and latency from your browser.',
  alternates: { canonical: '/tools/api-tester/' },
};

export default function ApiTesterPage() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    status?: number;
    headers?: Record<string, string>;
    body?: string;
    timeMs?: number;
    error?: string;
  }>({});

  const handleSend = async () => {
    if (!url) return;
    setLoading(true);
    const start = Date.now();
    try {
      const res = await fetch(url, { method, headers: { Accept: 'application/json' } });
      const text = await res.text();
      const headers: Record<string, string> = {};
      res.headers.forEach((value, key) => {
        headers[key] = value;
      });
      setResult({
        status: res.status,
        headers,
        body: text,
        timeMs: Date.now() - start,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setResult({
        error: message,
        timeMs: Date.now() - start,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">API Tester</h1>
      <p className="mt-2 text-slate-300">
        Send a request and inspect status, headers, and response body.
      </p>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={method}
            onChange={(event) => setMethod(event.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 sm:w-28"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://api.example.com/endpoint"
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200"
          />

          <button
            onClick={handleSend}
            disabled={loading || !url}
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {result.error && (
          <div className="rounded-xl border border-red-900/60 bg-red-950/60 p-4">
            <p className="text-sm text-red-200">Error: {result.error}</p>
          </div>
        )}

        {result.status !== undefined && (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs text-slate-400">Status</p>
              <p className="text-lg font-semibold text-white">{result.status}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs text-slate-400">Latency</p>
              <p className="text-lg font-semibold text-white">{result.timeMs}ms</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs text-slate-400">Method</p>
              <p className="text-lg font-semibold text-white">{method}</p>
            </div>
          </div>
        )}

        {result.headers && (
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs text-slate-400">Headers</p>
            <pre className="mt-2 overflow-x-auto text-xs text-slate-200">
              {JSON.stringify(result.headers, null, 2)}
            </pre>
          </div>
        )}

        {result.body && (
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs text-slate-400">Body</p>
            <pre className="mt-2 max-h-80 overflow-auto text-xs text-slate-200">
              {result.body}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
