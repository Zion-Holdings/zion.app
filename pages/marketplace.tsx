import React, { useEffect, useState } from 'react';

interface Job { id: string; title: string; description: string; reward: number; createdByAddress: string; createdAt: number }
interface Talent { id: string; name: string; skills: string[]; bio?: string }

export default function MarketplacePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [talent, setTalent] = useState<Talent[]>([]);
  const [title, setTitle] = useState('Build Feature');
  const [description, setDescription] = useState('Implement mock feature');
  const [reward, setReward] = useState(100);
  const [addr, setAddr] = useState('dev:alice');

  async function load() {
    const res = await fetch('/api/devnet/marketplace');
    const data = await res.json();
    setJobs(data.jobs || []);
    setTalent(data.talent || []);
  }

  async function createJob() {
    await fetch('/api/devnet/marketplace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, reward, createdByAddress: addr }),
    });
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Marketplace</h1>

      <section className="border rounded p-4 space-y-2">
        <h2 className="font-semibold">Post Job</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input className="border p-2" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
          <input className="border p-2" type="number" value={reward} onChange={e => setReward(Number(e.target.value))} placeholder="Reward" />
          <input className="border p-2 md:col-span-2" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
          <input className="border p-2" value={addr} onChange={e => setAddr(e.target.value)} placeholder="Your address" />
        </div>
        <button className="px-3 py-2 bg-emerald-600 text-white rounded" onClick={createJob}>Create</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-2">Jobs</h2>
          {jobs.map(j => (
            <div key={j.id} className="border rounded p-3 mb-2">
              <div className="font-medium">{j.title} <span className="text-xs text-gray-500">({j.reward} ZION$)</span></div>
              <div className="text-sm text-gray-700">{j.description}</div>
              <div className="text-xs text-gray-500">by {j.createdByAddress} • {new Date(j.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-semibold mb-2">Talent</h2>
          {talent.map(t => (
            <div key={t.id} className="border rounded p-3 mb-2">
              <div className="font-medium">{t.name}</div>
              <div className="text-sm text-gray-700">Skills: {t.skills.join(', ')}</div>
              {t.bio && <div className="text-sm text-gray-700">{t.bio}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}