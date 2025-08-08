import { useEffect, useMemo, useState } from 'react';

function getRefCode(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('ref_code') || '';
}

export default function AffiliateDashboard() {
  const [code, setCode] = useState<string>('');
  const [metrics, setMetrics] = useState<any>(null);
  const [amount, setAmount] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  useEffect(() => {
    const c = getRefCode();
    setCode(c);
  }, []);

  useEffect(() => {
    if (!code) return;
    (async () => {
      try {
        const res = await fetch(`/api/partners/metrics?code=${encodeURIComponent(code)}`);
        const json = await res.json();
        setMetrics(json);
      } catch {}
    })();
  }, [code]);

  async function requestPayout() {
    setMsg('');
    try {
      const res = await fetch('/api/partners/request-payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, amount: amount ? Number(amount) : undefined }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setMsg('Payout requested');
    } catch (e: any) {
      setMsg(e?.message || 'Error');
    }
  }

  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code]);

  if (!code) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Total Visits" value={metrics?.total_visits ?? '-'} />
        <Stat label="Total Signups" value={metrics?.total_signups ?? '-'} />
        <Stat label="Profile Completions" value={metrics?.total_profile_completions ?? '-'} />
        <Stat label="Job Creations" value={metrics?.total_job_creations ?? '-'} />
      </div>
      <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Estimated Payout</div>
            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>
          </div>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>
            <a href={exportUrl} className="px-3 py-2 rounded border">Export CSV</a>
          </div>
        </div>
        {msg && <p className="mt-2 text-sm">{msg}</p>}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}