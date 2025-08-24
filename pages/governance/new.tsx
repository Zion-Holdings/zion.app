import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export default function NewProposal() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [type, setType] = useState<'Feature' | 'Budget' | 'Community Grant'>('Feature');
  const [quorumPercent, setQuorumPercent] = useState<number>(10);
  const [votingPeriodDays, setVotingPeriodDays] = useState<number>(7);
  const [fundingAsk, setFundingAsk] = useState<number | ''>('');
  const [references, setReferences] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const referenceLinks = references.split('\n').map(s => s.trim()).filter(Boolean);
      const res = await fetch('/api/governance/proposals', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, summary, type, quorumPercent, votingPeriodDays, fundingAsk: fundingAsk === '' ? undefined : Number(fundingAsk), referenceLinks }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      router.push(`/governance/${data.proposal.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Create Proposal</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Summary</label>
          <textarea value={summary} onChange={e => setSummary(e.target.value)} className="w-full border rounded px-3 py-2 h-32" required />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Type</label>
            <select value={type} onChange={e => setType(e.target.value as any)} className="w-full border rounded px-3 py-2">
              <option>Feature</option>
              <option>Budget</option>
              <option>Community Grant</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Quorum (power)</label>
            <input type="number" value={quorumPercent} onChange={e => setQuorumPercent(Number(e.target.value))} className="w-full border rounded px-3 py-2" min={1} />
          </div>
          <div>
            <label className="block text-sm mb-1">Voting period (days)</label>
            <input type="number" value={votingPeriodDays} onChange={e => setVotingPeriodDays(Number(e.target.value))} className="w-full border rounded px-3 py-2" min={1} />
          </div>
          <div>
            <label className="block text-sm mb-1">Funding ask (optional)</label>
            <input type="number" value={fundingAsk} onChange={e => setFundingAsk(e.target.value === '' ? '' : Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Reference links (one per line)</label>
          <textarea value={references} onChange={e => setReferences(e.target.value)} className="w-full border rounded px-3 py-2 h-24" />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <div className="flex items-center gap-3">
          <button disabled={loading} className="px-4 py-2 bg-black text-white rounded">{loading ? 'Creating...' : 'Create Proposal'}</button>
        </div>
      </form>
    </div>
  );
}