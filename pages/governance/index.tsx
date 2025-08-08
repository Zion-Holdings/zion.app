import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useWallet } from '../../hooks/useWallet';

type Proposal = {
  id: string; title: string; summary: string; type: string; quorumPercent: number; votingPeriodDays: number; fundingAsk?: number; referenceLinks?: string[]; createdAt: number; startTime: number; endTime: number; status: string; queued?: boolean; executedTxHash?: string;
};

type Vote = { id: string; proposalId: string; voter: string; option: 'approve' | 'reject' | 'abstain'; power: number; createdAt: number };

export default function GovernanceHome() {
  const { address, connect, disconnect } = useWallet();
  const [activeTab, setActiveTab] = useState<'board' | 'my' | 'dashboard'>('board');
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [sort, setSort] = useState<'newest' | 'expiring' | 'funded'>('newest');

  useEffect(() => {
    fetch('/api/governance/proposals').then(r => r.json()).then(d => setProposals(d.proposals || []));
  }, []);

  useEffect(() => {
    fetch('/api/governance/vote').then(r => r.json()).then(d => setVotes(d.votes || []));
  }, []);

  const sorted = useMemo(() => {
    const list = [...proposals];
    if (sort === 'newest') list.sort((a, b) => b.createdAt - a.createdAt);
    if (sort === 'expiring') list.sort((a, b) => a.endTime - b.endTime);
    if (sort === 'funded') list.sort((a, b) => (b.fundingAsk || 0) - (a.fundingAsk || 0));
    return list;
  }, [proposals, sort]);

  const myVotes = useMemo(() => votes.filter(v => v.voter === (address || '').toLowerCase()), [votes, address]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Zion Governance</h1>
        <div className="flex items-center gap-3">
          {address ? (
            <>
              <span className="text-sm text-gray-600">{address.slice(0, 6)}...{address.slice(-4)}</span>
              <button onClick={disconnect} className="px-3 py-1.5 rounded border">Disconnect</button>
            </>
          ) : (
            <button onClick={connect} className="px-3 py-1.5 rounded bg-black text-white">Connect Wallet</button>
          )}
          <Link href="/governance/new"><a className="px-3 py-1.5 rounded border">Create Proposal</a></Link>
        </div>
      </div>

      <div className="flex gap-2 text-sm">
        <button className={`px-3 py-1.5 rounded ${activeTab==='board'?'bg-gray-900 text-white':'border'}`} onClick={() => setActiveTab('board')}>Proposal Board</button>
        <button className={`px-3 py-1.5 rounded ${activeTab==='my'?'bg-gray-900 text-white':'border'}`} onClick={() => setActiveTab('my')}>My Votes</button>
        <button className={`px-3 py-1.5 rounded ${activeTab==='dashboard'?'bg-gray-900 text-white':'border'}`} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
      </div>

      {activeTab === 'board' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Sort:</span>
            <select value={sort} onChange={e => setSort(e.target.value as any)} className="border rounded px-2 py-1">
              <option value="newest">Newest</option>
              <option value="expiring">Expiring soon</option>
              <option value="funded">Funding ask</option>
            </select>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {sorted.map(p => (
              <li key={p.id} className="border rounded p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{p.type}</div>
                  <div className="text-xs px-2 py-0.5 rounded-full border">{p.status}</div>
                </div>
                <Link href={`/governance/${p.id}`}><a className="text-lg font-medium hover:underline">{p.title}</a></Link>
                <p className="text-sm text-gray-600 line-clamp-3">{p.summary}</p>
                {p.fundingAsk ? <div className="text-sm">Funding ask: <span className="font-medium">{p.fundingAsk}</span></div> : null}
                <div className="text-xs text-gray-500">Ends {new Date(p.endTime).toLocaleString()}</div>
              </li>
            ))}
            {sorted.length === 0 && <div className="text-gray-500">No proposals yet.</div>}
          </ul>
        </div>
      )}

      {activeTab === 'my' && (
        <div className="space-y-3">
          {!address && <div className="text-sm text-gray-600">Connect your wallet to see your votes.</div>}
          {address && (
            <ul className="space-y-3">
              {myVotes.map(v => (
                <li key={v.id} className="border rounded p-3 text-sm flex items-center justify-between">
                  <span>Voted on <Link href={`/governance/${v.proposalId}`}><a className="underline">{v.proposalId.slice(0,8)}</a></Link></span>
                  <span className="uppercase text-xs">{v.option}</span>
                </li>
              ))}
              {myVotes.length === 0 && <div className="text-gray-500">You have not voted yet.</div>}
            </ul>
          )}
        </div>
      )}

      {activeTab === 'dashboard' && (
        <Dashboard proposals={proposals} votes={votes} />
      )}
    </div>
  );
}

function Dashboard({ proposals, votes }: { proposals: Proposal[]; votes: Vote[] }) {
  const numVoters = useMemo(() => new Set(votes.map(v => v.voter)).size, [votes]);
  const totalPower = useMemo(() => votes.reduce((a, v) => a + v.power, 0), [votes]);
  const outcomes = useMemo(() => {
    const ended = proposals.filter(p => Date.now() > p.endTime);
    const byStatus = ended.reduce((acc: Record<string, number>, p) => { acc[p.status] = (acc[p.status] || 0) + 1; return acc; }, {});
    return byStatus;
  }, [proposals]);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="border rounded p-4"><div className="text-sm text-gray-500">Voters</div><div className="text-2xl font-semibold">{numVoters}</div></div>
      <div className="border rounded p-4"><div className="text-sm text-gray-500">ZION$ used</div><div className="text-2xl font-semibold">{totalPower}</div></div>
      <div className="border rounded p-4"><div className="text-sm text-gray-500">Historical outcomes</div><div className="text-sm">{Object.entries(outcomes).map(([k,v]) => (<div key={k}>{k}: {v}</div>))}</div></div>
    </div>
  );
}