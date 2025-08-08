import React, { useEffect, useState } from 'react';

interface Proposal {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  status: 'open' | 'passed' | 'failed';
  votes: { voter: string; choice: 'yes' | 'no'; timestamp: number }[];
}

export default function DaoDevPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [title, setTitle] = useState('Test Governance Change');
  const [description, setDescription] = useState('Allow free faucet for DevNet.');
  const [author, setAuthor] = useState('dev:alice');
  const [voter, setVoter] = useState('dev:bob');

  async function load() {
    const res = await fetch('/api/devnet/dao');
    const data = await res.json();
    setProposals(data.proposals || []);
  }

  async function submit() {
    await fetch('/api/devnet/dao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'submit', title, description, author }),
    });
    load();
  }

  async function vote(id: string, choice: 'yes' | 'no') {
    await fetch('/api/devnet/dao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'vote', proposalId: id, voter, choice }),
    });
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">DAO Proposal Sandbox</h1>

      <section className="border rounded p-4 space-y-2">
        <h2 className="font-semibold">Submit Proposal</h2>
        <input className="border p-2 w-full" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea className="border p-2 w-full" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <div className="flex gap-2 items-center">
          <input className="border p-2" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author address" />
          <button className="px-3 py-2 bg-purple-600 text-white rounded" onClick={submit}>Submit</button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Proposals</h2>
        {proposals.map(p => (
          <div key={p.id} className="border rounded p-3">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-600">{p.description}</div>
                <div className="text-xs text-gray-500">by {p.author} • {new Date(p.createdAt).toLocaleString()}</div>
              </div>
              <div className="text-sm">Status: <span className="font-semibold">{p.status}</span></div>
            </div>
            <div className="mt-2 text-sm">Votes: yes {p.votes.filter(v => v.choice==='yes').length} / no {p.votes.filter(v => v.choice==='no').length}</div>
            {p.status === 'open' && (
              <div className="mt-2 flex items-center gap-2">
                <input className="border p-2" value={voter} onChange={e => setVoter(e.target.value)} placeholder="Voter address" />
                <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={() => vote(p.id, 'yes')}>Vote Yes</button>
                <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={() => vote(p.id, 'no')}>Vote No</button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}