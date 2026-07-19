'use client';

import { useState } from 'react';

export default function WebhookInspectorTool() {
  const [payload, setPayload] = useState('');
  const [method, setMethod] = useState('POST');
  const [headers, setHeaders] = useState('Content-Type: application/json\nX-GitHub-Event: push\nX-GitHub-Delivery: abc123');
  const [result, setResult] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  const handleInspect = () => {
    try {
      const parsed = JSON.parse(payload);
      const headerObj: Record<string, string> = {};
      headers.split('\n').forEach(line => {
        const [key, ...val] = line.split(':');
        if (key && val.length) headerObj[key.trim()] = val.join(':').trim();
      });

      const analysis = {
        timestamp: new Date().toISOString(),
        method,
        headers: headerObj,
        payload: parsed,
        payloadSize: JSON.stringify(parsed).length,
        keys: Object.keys(parsed).slice(0, 50),
        depth: getDepth(parsed),
        sampleValues: getSampleValues(parsed),
      };

      setResult(analysis);
      setHistory(prev => [analysis, ...prev.slice(0, 9)]);
    } catch (e) {
      setResult({ error: 'Invalid JSON: ' + (e as Error).message });
    }
  };

  const getDepth = (obj: any, depth = 0): number => {
    if (typeof obj !== 'object' || obj === null) return depth;
    return Math.max(...Object.values(obj).map(v => getDepth(v, depth + 1)));
  };

  const getSampleValues = (obj: any, prefix = '', max = 10): Record<string, any> => {
    const result: Record<string, any> = {};
    if (typeof obj !== 'object' || obj === null) return result;
    Object.entries(obj).forEach(([k, v]) => {
      const key = prefix ? `${prefix}.${k}` : k;
      if (result[key] === undefined && Object.keys(result).length < max) {
        if (typeof v === 'object' && v !== null) {
          result[key] = Array.isArray(v) ? `[array, ${v.length} items]` : `{object, ${Object.keys(v).length} keys}`;
        } else {
          result[key] = v;
        }
      }
    });
    return result;
  };

  const samples = [
    { name: 'GitHub Push', payload: { ref: 'refs/heads/main', repository: { full_name: 'user/repo' }, pusher: { name: 'user' }, commits: [{ id: 'abc123', message: 'Fix bug' }] }, headers: 'Content-Type: application/json\nX-GitHub-Event: push\nX-GitHub-Delivery: abc123' },
    { name: 'Stripe Webhook', payload: { id: 'evt_123', type: 'payment_intent.succeeded', data: { object: { id: 'pi_123', amount: 2000, currency: 'usd' } } }, headers: 'Content-Type: application/json\nStripe-Signature: sig_123' },
    { name: 'Slack Event', payload: { type: 'event_callback', event: { type: 'message', user: 'U123', text: 'Hello', channel: 'C123', ts: '1234567890.123456' } }, headers: 'Content-Type: application/json\nX-Slack-Signature: sig_123' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">Webhook Payload Inspector</h1>
        <p className="mb-8 text-slate-400">Inspect, validate, and understand webhook payloads from GitHub, Stripe, Slack, and custom sources.</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">HTTP Method</label>
              <select value={method} onChange={e => setMethod(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none">
                <option value="POST">POST</option>
                <option value="GET">GET</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Headers (one per line: Key: Value)</label>
              <textarea
                value={headers}
                onChange={e => setHeaders(e.target.value)}
                rows={6}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none"
                placeholder="Content-Type: application/json&#10;X-GitHub-Event: push&#10;X-GitHub-Delivery: abc123"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Payload (JSON)</label>
              <textarea
                value={payload}
                onChange={e => setPayload(e.target.value)}
                rows={15}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none"
                placeholder='{&#10;  "ref": "refs/heads/main",&#10;  "repository": { "full_name": "user/repo" },&#10;  "commits": [{ "id": "abc123", "message": "Fix bug" }]&#10;}'
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={handleInspect} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition-colors">Inspect Payload</button>
              <button onClick={() => setPayload('')} className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-purple-500 transition-colors">Clear</button>
            </div>

            <div className="flex flex-wrap gap-2">
              {samples.map(s => (
                <button key={s.name} onClick={() => { setPayload(JSON.stringify(s.payload, null, 2)); setHeaders(s.headers); }} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-mono text-slate-300 hover:border-purple-500 hover:text-white transition-colors">{s.name}</button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-4 font-semibold">Analysis</h3>
              {result ? (
                result.error ? (
                  <div className="rounded-lg bg-red-500/10 p-4 text-red-400">{result.error}</div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <StatCard label="Payload Size" value={`${result.payloadSize} bytes`} />
                      <StatCard label="Top-level Keys" value={result.keys.length} />
                      <StatCard label="Max Depth" value={result.depth} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Top-level Keys</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.keys.map(k => <span key={k} className="rounded bg-slate-800 px-2 py-1 text-sm font-mono text-purple-300">{k}</span>)}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Sample Values</h4>
                      <pre className="rounded-lg bg-slate-900 p-4 overflow-x-auto text-sm font-mono text-slate-300">{JSON.stringify(result.sampleValues, null, 2)}</pre>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Headers</h4>
                      <pre className="rounded-lg bg-slate-900 p-4 overflow-x-auto text-sm font-mono text-slate-300">{JSON.stringify(result.headers, null, 2)}</pre>
                    </div>
                  </div>
                )
              ) : (
                <p className="text-slate-500">Paste a payload and click "Inspect Payload" to see analysis.</p>
              )}
            </div>

            {history.length > 0 && (
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-4 font-semibold">Recent Inspections</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {history.map((h, i) => (
                    <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-purple-400">{h.timestamp}</span>
                        <span className="text-slate-500">{h.payloadSize} bytes • {h.keys.length} keys • depth {h.depth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

import Link from 'next/link';