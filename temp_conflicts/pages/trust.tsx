import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';

export default function TrustPage() {
  const [userId, setUserId] = useState<string>('demo-user');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const u = params.get('user');
    if (u) setUserId(u);
  }, []);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch(`/api/trust/${encodeURIComponent(userId)}?analyze=true`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    load();
  }, [userId]);

  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type }) });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');
  }

  async function submitAppeal(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get('message');
    const contactEmail = formData.get('email');
    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');
    form.reset();
  }

  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>
          </div>
        </div>

        {loading && <div>Loading...</div>}
        {!loading && data && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <TrustBadge score={data.total} reason={data.reasonSummary} communityVerified={data.communityVerified} />
                <RiskIndicator status={data.riskLevel} />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded border p-4">
                <h2 className="font-medium mb-2">Trust Metrics</h2>
                <TrustRadar metrics={(data.components || []).map((c: any) => ({ label: c.key, value: Math.round(c.raw * 100) }))} />
              </div>
              {showLogic && (
                <div className="bg-white dark:bg-gray-900 rounded border p-4 text-sm">
                  <h3 className="font-medium mb-2">Score Breakdown</h3>
                  <ul className="space-y-1">
                    {data.components.map((c: any) => (
                      <li key={c.key} className="flex justify-between">
                        <span>{c.key}</span>
                        <span>{Math.round(c.raw * 100)} / weighted {c.weighted.toFixed(3)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.reasonSummary && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap">
                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                <h3 className="font-medium">Peer Review</h3>
                <button className="text-sm px-3 py-1 rounded bg-green-600 text-white" onClick={() => submitPeer('endorse')}>Endorse</button>
                <button className="text-sm px-3 py-1 rounded bg-red-600 text-white" onClick={() => submitPeer('flag')}>Flag</button>
              </div>
              {data.total < 70 && (
                <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                  <h3 className="font-medium">Appeal Score</h3>
                  <form onSubmit={submitAppeal} className="space-y-2">
                    <input name="email" type="email" placeholder="Contact email" className="w-full border rounded px-2 py-1 text-sm" />
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w-full border rounded px-2 py-1 text-sm" rows={4} required />
                    <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white" type="submit">Submit Appeal</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </EnhancedLayout>
  );
}