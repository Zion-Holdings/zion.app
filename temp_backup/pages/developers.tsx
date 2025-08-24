import dynamic from 'next/dynamic';
export default dynamic(() => Promise.resolve(DevelopersPage), { ssr: false });

function DevelopersPage() {
  return <DevelopersPageInner />
}

import { useEffect, useState } from 'react';

type ApiKeyRecord = {
  id: string;
  name: string;
  scopes: string[];
  approved: boolean;
  createdAt: string;
  lastUsedAt?: string;
  rateLimitPerMinute: number;
  successCount: number;
  failureCount: number;
};

type WebhookListener = {
  id: string;
  url: string;
  events: string[];
  createdAt: string;
  lastTestAt?: string;
};

type ApiLogRecord = {
  id: string;
  timestamp: string;
  method: string;
  path: string;
  status: number;
  success: boolean;
  errorCode?: string;
};

const SCOPES = [
  { id: 'view_jobs', label: 'View Jobs' },
  { id: 'post_jobs', label: 'Post Jobs' },
  { id: 'view_talent', label: 'View Talent' },
  { id: 'create_quotes', label: 'Create Quotes' },
  { id: 'webhook_manage', label: 'Webhook Listener Setup' },
];

function DevelopersPageInner() {
  const [tab, setTab] = useState<'keys' | 'webhooks' | 'logs' | 'docs'>('keys');
  const [keys, setKeys] = useState<ApiKeyRecord[]>([]);
  const [createdToken, setCreatedToken] = useState<string>('');
  const [listeners, setListeners] = useState<WebhookListener[]>([]);
  const [logs, setLogs] = useState<ApiLogRecord[]>([]);

  useEffect(() => {
    fetch('/api/devportal/keys').then((r) => r.json()).then((d) => setKeys(d.data || []));
    fetch('/api/devportal/webhooks').then((r) => r.json()).then((d) => setListeners(d.data || []));
    fetch('/api/devportal/logs').then((r) => r.json()).then((d) => setLogs(d.data || []));
  }, []);

  const bearer = createdToken ? createdToken : 'YOUR_API_KEY_HERE';

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight">Zion AI Marketplace — Developer Portal</h1>
        <p className="text-gray-400 mt-2">Manage API access, webhooks, and view docs.</p>

        <div className="mt-6 flex gap-2 border-b border-gray-800">
          {[
            { id: 'keys', label: 'API Keys' },
            { id: 'webhooks', label: 'Webhooks' },
            { id: 'logs', label: 'Logs' },
            { id: 'docs', label: 'Docs' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`px-4 py-2 border-b-2 ${tab === t.id ? 'border-indigo-500 text-white' : 'border-transparent text-gray-400'} hover:text-white`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'keys' && <KeysTab keys={keys} setKeys={setKeys} setCreatedToken={setCreatedToken} />}
        {tab === 'webhooks' && <WebhooksTab listeners={listeners} setListeners={setListeners} />}
        {tab === 'logs' && <LogsTab logs={logs} />}
        {tab === 'docs' && <DocsTab bearer={bearer} />}
      </div>
    </div>
  );
}

function KeysTab({ keys, setKeys, setCreatedToken }: { keys: ApiKeyRecord[]; setKeys: (k: ApiKeyRecord[]) => void; setCreatedToken: (t: string) => void }) {
  const [name, setName] = useState('My API Key');
  const [scopes, setScopes] = useState<string[]>(['view_jobs', 'view_talent']);

  async function createKey() {
    const res = await fetch('/api/devportal/keys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, scopes, autoApprove: true }) });
    const data = await res.json();
    if (res.ok) {
      setKeys([data.data.key, ...keys]);
      setCreatedToken(data.data.token);
    }
  }

  async function regenerate(id: string) {
    const res = await fetch('/api/devportal/keys', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, action: 'regenerate' }) });
    const data = await res.json();
    if (res.ok) {
      setKeys(keys.map((k) => (k.id === id ? data.data.key : k)));
      if (data.data.token) setCreatedToken(data.data.token);
    }
  }

  async function revoke(id: string) {
    const res = await fetch('/api/devportal/keys', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, action: 'revoke' }) });
    const data = await res.json();
    if (res.ok) setKeys(keys.map((k) => (k.id === id ? data.data : k)));
  }

  function ScopeSelector() {
    return (
      <div className="grid grid-cols-2 gap-2">
        {SCOPES.map((s) => (
          <label key={s.id} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-indigo-500" checked={scopes.includes(s.id)} onChange={(e) => setScopes(e.target.checked ? [...scopes, s.id] : scopes.filter((x) => x !== s.id))} />
            {s.label}
          </label>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
        <h2 className="text-xl font-semibold">Create API Key</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input className="bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="Key name" value={name} onChange={(e) => setName(e.target.value)} />
          <ScopeSelector />
          <button onClick={createKey} className="bg-indigo-600 hover:bg-indigo-500 rounded px-4 py-2 font-medium">Generate</button>
        </div>
        <p className="text-xs text-gray-400 mt-2">Keys require admin approval in production. For demo, keys are auto-approved when checked.</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Your API Keys</h3>
        <div className="space-y-3">
          {keys.map((k) => (
            <div key={k.id} className="bg-gray-900 border border-gray-800 rounded p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="font-medium">{k.name}</div>
                  <div className="text-xs text-gray-400">Scopes: {k.scopes.join(', ') || 'none'} • Rate: {k.rateLimitPerMinute}/min • Status: {k.approved ? 'Approved' : 'Pending'}</div>
                  {k.lastUsedAt && <div className="text-xs text-gray-500">Last used: {new Date(k.lastUsedAt).toLocaleString()}</div>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => regenerate(k.id)} className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded">Regenerate</button>
                  <button onClick={() => revoke(k.id)} className="px-3 py-1.5 bg-red-700 hover:bg-red-600 rounded">Revoke</button>
                </div>
              </div>
            </div>
          ))}
          {keys.length === 0 && <div className="text-gray-400 text-sm">No keys yet.</div>}
        </div>
      </div>

      {createdToken && (
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded p-4">
          <div className="font-semibold">Copy your new API token</div>
          <div className="mt-2 flex items-center gap-2">
            <code className="bg-black/50 px-2 py-1 rounded text-green-400 break-all">{createdToken}</code>
            <button onClick={() => navigator.clipboard.writeText(createdToken)} className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm">Copy</button>
          </div>
        </div>
      )}
    </div>
  );
}

function WebhooksTab({ listeners, setListeners }: { listeners: WebhookListener[]; setListeners: (l: WebhookListener[]) => void }) {
  const [url, setUrl] = useState('');
  const [events, setEvents] = useState<string[]>(['quote_received']);
  const EVENTS = [
    { id: 'new_application', label: 'New Application' },
    { id: 'quote_received', label: 'Quote Received' },
    { id: 'milestone_approved', label: 'Milestone Approved' },
    { id: 'talent_hired', label: 'Talent Hired' },
  ];

  async function addListener() {
    const res = await fetch('/api/devportal/webhooks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url, events }) });
    const data = await res.json();
    if (res.ok) setListeners([data.data, ...listeners]);
  }

  async function removeListener(id: string) {
    const res = await fetch('/api/devportal/webhooks?id=' + id, { method: 'DELETE' });
    if (res.ok) setListeners(listeners.filter((l) => l.id !== id));
  }

  async function testListener(id: string, testEvent: string) {
    await fetch('/api/devportal/webhooks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'test', listenerId: id, testEvent }) });
    const res = await fetch('/api/devportal/webhooks');
    const data = await res.json();
    setListeners(data.data || []);
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="bg-gray-900 border border-gray-800 rounded p-4">
        <h2 className="text-xl font-semibold">Add Listener</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input className="bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="https://example.com/webhooks/receive" value={url} onChange={(e) => setUrl(e.target.value)} />
          <div className="grid grid-cols-1 gap-2">
            {EVENTS.map((e) => (
              <label key={e.id} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-indigo-500" checked={events.includes(e.id)} onChange={(ev) => setEvents(ev.target.checked ? [...events, e.id] : events.filter((x) => x !== e.id))} />
                {e.label}
              </label>
            ))}
          </div>
          <button onClick={addListener} className="bg-indigo-600 hover:bg-indigo-500 rounded px-4 py-2 font-medium">Create</button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Your Listeners</h3>
        <div className="space-y-3">
          {listeners.map((l) => (
            <div key={l.id} className="bg-gray-900 border border-gray-800 rounded p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="font-medium">{l.url}</div>
                  <div className="text-xs text-gray-400">Events: {l.events.join(', ')}</div>
                  {l.lastTestAt && <div className="text-xs text-gray-500">Last tested: {new Date(l.lastTestAt).toLocaleString()}</div>}
                </div>
                <div className="flex gap-2">
                  <select onChange={(e) => testListener(l.id, e.target.value)} defaultValue="">
                    <option value="" disabled>Test event…</option>
                    <option value="new_application">New Application</option>
                    <option value="quote_received">Quote Received</option>
                    <option value="milestone_approved">Milestone Approved</option>
                    <option value="talent_hired">Talent Hired</option>
                  </select>
                  <button onClick={() => removeListener(l.id)} className="px-3 py-1.5 bg-red-700 hover:bg-red-600 rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
          {listeners.length === 0 && <div className="text-gray-400 text-sm">No listeners yet.</div>}
        </div>
      </div>
    </div>
  );
}

function LogsTab({ logs }: { logs: ApiLogRecord[] }) {
  return (
    <div className="mt-6">
      <div className="bg-gray-900 border border-gray-800 rounded p-4 overflow-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="py-2">Time</th>
              <th>Method</th>
              <th>Path</th>
              <th>Status</th>
              <th>Result</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l) => (
              <tr key={l.id} className="border-t border-gray-800">
                <td className="py-2 text-gray-300">{new Date(l.timestamp).toLocaleString()}</td>
                <td>{l.method}</td>
                <td className="font-mono text-xs text-gray-300">{l.path}</td>
                <td>{l.status}</td>
                <td className={l.success ? 'text-green-400' : 'text-red-400'}>{l.success ? 'Success' : 'Fail'}</td>
                <td className="text-gray-400">{l.errorCode || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DocsTab({ bearer }: { bearer: string }) {
  const curlGetJobs = `curl -s -H "Authorization: Bearer ${bearer}" https://your-domain.com/api/jobs`;
  const curlPostJob = `curl -s -X POST -H "Authorization: Bearer ${bearer}" -H "Content-Type: application/json" -d '{"title":"Backend Engineer","description":"Build APIs"}' https://your-domain.com/api/jobs`;
  const curlGetTalent = `curl -s -H "Authorization: Bearer ${bearer}" https://your-domain.com/api/talent`;
  const curlPostQuote = `curl -s -X POST -H "Authorization: Bearer ${bearer}" -H "Content-Type: application/json" -d '{"jobId":"job_abc","details":"Need a quote","budgetUsd":2500}' https://your-domain.com/api/quote`;
  const curlWebhookReceive = `curl -s -X POST -H "Content-Type: application/json" -d '{"event":"quote_received","payload":{}}' https://your-domain.com/webhooks/receive`;

  const jsExample = `import fetch from 'node-fetch';
const res = await fetch('https://your-domain.com/api/jobs', { headers: { Authorization: 'Bearer ${bearer}' } });
const data = await res.json();
console.log(data);`;

  const pyExample = `import requests
headers = { 'Authorization': 'Bearer ${bearer}' }
r = requests.get('https://your-domain.com/api/jobs', headers=headers)
print(r.json())`;

  return (
    <div className="mt-6 space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded p-4">
        <h2 className="text-xl font-semibold">Endpoints</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li><code>GET /api/jobs</code></li>
          <li><code>POST /api/jobs</code></li>
          <li><code>GET /api/talent</code></li>
          <li><code>POST /api/quote</code></li>
          <li><code>POST /webhooks/receive</code> (rewrites to <code>/api/webhooks/receive</code>)</li>
        </ul>
        <div className="text-sm text-gray-400 mt-2">Authenticate with <code>Authorization: Bearer &lt;API_KEY&gt;</code>. Default rate limit 60 req/min. Error responses include <code>error.code</code> and <code>error.message</code>.</div>
      </div>

      <CodeBlock title="cURL: GET /api/jobs" content={curlGetJobs} />
      <CodeBlock title="cURL: POST /api/jobs" content={curlPostJob} />
      <CodeBlock title="cURL: GET /api/talent" content={curlGetTalent} />
      <CodeBlock title="cURL: POST /api/quote" content={curlPostQuote} />
      <CodeBlock title="cURL: POST /webhooks/receive" content={curlWebhookReceive} />

      <CodeBlock title="JavaScript example" content={jsExample} />
      <CodeBlock title="Python example" content={pyExample} />
    </div>
  );
}

function CodeBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded p-4">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{title}</div>
        <button onClick={() => navigator.clipboard.writeText(content)} className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm">Copy</button>
      </div>
      <pre className="mt-2 whitespace-pre-wrap break-all text-sm text-green-400">{content}</pre>
    </div>
  );
}