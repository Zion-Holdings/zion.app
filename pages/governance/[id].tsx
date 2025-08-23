import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useWallet } from '../../hooks/useWallet';

export default function ProposalDetail() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const { address, connect } = useWallet();
  const [proposal, setProposal] = useState<any>(null);
  const [votesData, setVotesData] = useState<{ tally: any; votes: any[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/governance/proposals/${id}`).then(r => r.json()).then(d => { setProposal(d.proposal); setVotesData({ tally: d.tally, votes: d.votes }); });
  }, [id]);

  async function cast(option: 'approve' | 'reject' | 'abstain') {
    if (!id) return;
    setLoading(true); setError(null);
    try {
      if (!address) await connect();
      const res = await fetch('/api/governance/vote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ proposalId: id, voter: address, option }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      const refreshed = await fetch(`/api/governance/proposals/${id}`).then(r => r.json());
      setProposal(refreshed.proposal);
      setVotesData({ tally: refreshed.tally, votes: refreshed.votes });
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  const canVote = useMemo(() => proposal && Date.now() >= proposal.startTime && Date.now() <= proposal.endTime, [proposal]);

  if (!proposal) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{proposal.title}</h1>
        <div className="text-xs px-2 py-0.5 rounded-full border">{proposal.status}</div>
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{proposal.summary}</p>
      {proposal.fundingAsk ? <div>Funding ask: <span className="font-medium">{proposal.fundingAsk}</span></div> : null}
      <div className="text-sm text-gray-500">Voting ends {new Date(proposal.endTime).toLocaleString()}</div>
      {proposal.referenceLinks?.length ? (
        <div>
          <div className="text-sm font-medium mb-2">References</div>
          <ul className="list-disc pl-6 text-sm space-y-1">
            {proposal.referenceLinks.map((url: string) => (
              <li key={url}><a href={url} target="_blank" rel="noreferrer" className="underline">{url}</a></li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="border rounded p-4 space-y-3">
        <div className="text-sm font-medium">Cast your vote</div>
        <div className="flex gap-2">
          <button disabled={!canVote || loading} onClick={() => cast('approve')} className="px-3 py-1.5 rounded bg-green-600 text-white disabled:opacity-50">Approve</button>
          <button disabled={!canVote || loading} onClick={() => cast('reject')} className="px-3 py-1.5 rounded bg-red-600 text-white disabled:opacity-50">Reject</button>
          <button disabled={!canVote || loading} onClick={() => cast('abstain')} className="px-3 py-1.5 rounded bg-gray-700 text-white disabled:opacity-50">Abstain</button>
        </div>
        {!canVote && <div className="text-xs text-gray-500">Voting is not active.</div>}
        {error && <div className="text-sm text-red-600">{error}</div>}
      </div>

      <div className="border rounded p-4 space-y-2">
        <div className="text-sm font-medium">Results Transparency</div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="border rounded p-3"><div className="text-gray-500">Approve</div><div className="text-xl font-semibold">{votesData?.tally?.approve ?? 0}</div></div>
          <div className="border rounded p-3"><div className="text-gray-500">Reject</div><div className="text-xl font-semibold">{votesData?.tally?.reject ?? 0}</div></div>
          <div className="border rounded p-3"><div className="text-gray-500">Abstain</div><div className="text-xl font-semibold">{votesData?.tally?.abstain ?? 0}</div></div>
        </div>
        <div className="text-xs text-gray-600">Total power: {votesData?.tally?.total ?? 0}</div>
        {proposal.executedTxHash && (
          <div className="text-sm">On-chain TX: <a className="underline" href={`https://etherscan.io/tx/${proposal.executedTxHash}`} target="_blank" rel="noreferrer">{proposal.executedTxHash}</a></div>
        )}
        {(proposal.snapshotUrl || proposal.ipfsCid) && (
          <div className="text-sm space-y-1">
            {proposal.snapshotUrl && <div>Snapshot: <a className="underline" href={proposal.snapshotUrl} target="_blank" rel="noreferrer">view</a></div>}
            {proposal.ipfsCid && <div>IPFS: <a className="underline" href={`https://ipfs.io/ipfs/${proposal.ipfsCid}`} target="_blank" rel="noreferrer">{proposal.ipfsCid}</a></div>}
          </div>
        )}
      </div>
    </div>
  );
}