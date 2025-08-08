import { useEffect, useMemo, useState } from 'react';
import type { GetServerSideProps } from 'next';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { requireSuperadminSSR, SessionUser } from '../../utils/auth-utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return requireSuperadminSSR(ctx as any);
};

type Props = { user: SessionUser };

type Metric = { label: string; value: string | number; trend?: number };

type DataRoomSection = 'Financials' | 'Cap Table' | 'Legal Docs' | 'Strategic Partnerships' | 'Press Coverage / PR kit';

export default function IpoPortal({ user }: Props) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'dataroom' | 'updates' | 'dealroom'>('dashboard');

  return (
    <EnhancedLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">IPO Readiness Portal</h1>
        <div className="flex gap-2">
          <a href="/api/ipo/export-metrics" className="px-3 py-2 border rounded">Export Metrics</a>
          <a href="/api/ipo/audit-log" className="px-3 py-2 border rounded">Download Audit Log</a>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-2 rounded border ${activeTab==='dashboard' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>KPI Dashboard</button>
        <button onClick={() => setActiveTab('dataroom')} className={`px-3 py-2 rounded border ${activeTab==='dataroom' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Data Room</button>
        <button onClick={() => setActiveTab('updates')} className={`px-3 py-2 rounded border ${activeTab==='updates' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Investor Updates</button>
        <button onClick={() => setActiveTab('dealroom')} className={`px-3 py-2 rounded border ${activeTab==='dealroom' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>Deal Room</button>
      </div>

      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'dataroom' && <DataRoom />}
      {activeTab === 'updates' && <InvestorUpdates />}
      {activeTab === 'dealroom' && <DealRoom />}
    </EnhancedLayout>
  );
}

function Dashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  useEffect(() => {
    fetch('/api/ipo/metrics').then((r) => r.json()).then(setMetrics).catch(() => setMetrics([]));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((m) => (
        <div key={m.label} className="border rounded p-4">
          <div className="text-sm text-gray-500">{m.label}</div>
          <div className="text-2xl font-semibold">{m.value}</div>
          {typeof m.trend === 'number' && (
            <div className={`text-sm ${m.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>{m.trend >= 0 ? '+' : ''}{m.trend}%</div>
          )}
        </div>
      ))}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Retention cohorts</div>
          <img src="/api/ipo/cohort-chart" alt="Retention cohorts" className="w-full h-64 object-cover bg-gray-100" />
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Global user breakdown</div>
          <img src="/api/ipo/geo-chart" alt="Global user breakdown" className="w-full h-64 object-cover bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

function DataRoom() {
  const sections: DataRoomSection[] = useMemo(() => [
    'Financials',
    'Cap Table',
    'Legal Docs',
    'Strategic Partnerships',
    'Press Coverage / PR kit',
  ], []);
  const [active, setActive] = useState<DataRoomSection>('Financials');
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/ipo/dataroom/list?section=${encodeURIComponent(active)}`).then((r) => r.json()).then(setFiles).catch(() => setFiles([]));
  }, [active]);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.set('section', active);
    form.set('file', file);
    await fetch('/api/ipo/dataroom/upload', { method: 'POST', body: form });
    const next = await fetch(`/api/ipo/dataroom/list?section=${encodeURIComponent(active)}`).then((r) => r.json()).catch(() => []);
    setFiles(next);
  }

  function onOpen(fileName: string) {
    window.open(`/api/ipo/dataroom/file?section=${encodeURIComponent(active)}&file=${encodeURIComponent(fileName)}`, '_blank');
  }

  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {sections.map((s) => (
          <button key={s} onClick={() => setActive(s)} className={`px-3 py-2 rounded border ${active===s ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>{s}</button>
        ))}
      </div>
      <div className="mb-4">
        <input type="file" onChange={onUpload} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {files.map((f) => (
          <div key={f.name} className="border rounded p-3 flex items-center justify-between">
            <div className="truncate">{f.name}</div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border rounded" onClick={() => onOpen(f.name)}>Open</button>
              <a className="px-2 py-1 border rounded" href={`/api/ipo/dataroom/download?section=${encodeURIComponent(active)}&file=${encodeURIComponent(f.name)}`}>Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestorUpdates() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [kpis, setKpis] = useState('');

  async function refresh() {
    const list = await fetch('/api/ipo/updates/list').then((r) => r.json()).catch(() => []);
    setUpdates(list);
  }

  useEffect(() => { refresh(); }, []);

  async function save() {
    await fetch('/api/ipo/updates/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, summary, kpis })
    });
    setShowModal(false);
    setTitle(''); setDate(''); setSummary(''); setKpis('');
    refresh();
  }

  return (
    <div>
      <div className="mb-4">
        <button className="px-3 py-2 border rounded" onClick={() => setShowModal(true)}>Create Update</button>
      </div>
      <div className="space-y-3">
        {updates.map((u) => (
          <div key={u.id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{u.title}</div>
              <div className="text-sm text-gray-500">{u.date}</div>
            </div>
            <div className="flex gap-2">
              <a className="px-2 py-1 border rounded" href={`/api/ipo/updates/export?id=${encodeURIComponent(u.id)}`}>Email PDF</a>
              <a className="px-2 py-1 border rounded" href={`/api/ipo/updates/opens?id=${encodeURIComponent(u.id)}`}>Opens</a>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded p-4 space-y-3">
            <div className="text-lg font-semibold">Create Update</div>
            <input className="w-full border px-3 py-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className="w-full border px-3 py-2 rounded" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <textarea className="w-full border px-3 py-2 rounded" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
            <textarea className="w-full border px-3 py-2 rounded" placeholder="KPIs" value={kpis} onChange={(e) => setKpis(e.target.value)} />
            <div className="flex justify-end gap-2">
              <button className="px-3 py-2 border rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-3 py-2 border rounded bg-black text-white dark:bg-white dark:text-black" onClick={save}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DealRoom() {
  const [terms, setTerms] = useState<any>({});
  const [softCommit, setSoftCommit] = useState('');
  const [offerings, setOfferings] = useState({ safe: true, equity: true, token: false });

  useEffect(() => {
    fetch('/api/ipo/deal/terms').then((r) => r.json()).then(setTerms).catch(() => setTerms({}));
    fetch('/api/ipo/deal/offerings').then((r) => r.json()).then(setOfferings).catch(() => {});
  }, []);

  async function saveOfferings() {
    await fetch('/api/ipo/deal/offerings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(offerings) });
  }

  async function submitSoftCommit() {
    await fetch('/api/ipo/deal/commit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: softCommit }) });
    setSoftCommit('');
  }

  return (
    <div className="space-y-4">
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Current Round Terms</div>
        <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(terms, null, 2)}</pre>
      </div>
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Offerings</div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2"><input type="checkbox" checked={offerings.safe} onChange={(e) => setOfferings((o) => ({ ...o, safe: e.target.checked }))} /> SAFE</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={offerings.equity} onChange={(e) => setOfferings((o) => ({ ...o, equity: e.target.checked }))} /> Equity</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={offerings.token} onChange={(e) => setOfferings((o) => ({ ...o, token: e.target.checked }))} /> Token</label>
        </div>
        <div className="mt-3">
          <button className="px-3 py-2 border rounded" onClick={saveOfferings}>Save</button>
        </div>
      </div>
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Soft Commitments</div>
        <div className="flex gap-2">
          <input className="border px-3 py-2 rounded" placeholder="$ Amount" value={softCommit} onChange={(e) => setSoftCommit(e.target.value)} />
          <button className="px-3 py-2 border rounded" onClick={submitSoftCommit}>Submit</button>
        </div>
      </div>
    </div>
  );
}