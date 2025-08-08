import React, { useEffect, useState } from 'react';

interface Nation { id: string; name: string; founder: string; manifesto?: string; createdAt: number }

export default function NationsPage() {
  const [nations, setNations] = useState<Nation[]>([]);
  const [name, setName] = useState('New Micro-Nation');
  const [founder, setFounder] = useState('dev:alice');
  const [selected, setSelected] = useState<Nation | null>(null);
  const [manifesto, setManifesto] = useState('');

  async function load() {
    const res = await fetch('/api/devnet/nation');
    const data = await res.json();
    setNations(data.nations || []);
  }

  async function createNation() {
    const res = await fetch('/api/devnet/nation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, founder }),
    });
    const data = await res.json();
    setSelected(data.nation);
    setManifesto(data.nation?.manifesto || '');
    load();
  }

  async function loadManifesto(n: Nation) {
    const res = await fetch(`/api/devnet/vault?nationId=${encodeURIComponent(n.id)}`);
    const data = await res.json();
    setSelected(n);
    setManifesto(data.manifesto || '');
  }

  async function saveManifesto() {
    if (!selected) return;
    await fetch('/api/devnet/vault', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nationId: selected.id, manifesto }),
    });
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Micro-Nations</h1>

      <section className="border rounded p-4 space-y-2">
        <h2 className="font-semibold">Create Nation</h2>
        <div className="flex gap-2 items-center">
          <input className="border p-2" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input className="border p-2" value={founder} onChange={e => setFounder(e.target.value)} placeholder="Founder address" />
          <button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={createNation}>Create</button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-2">My Nations</h2>
          {nations.map(n => (
            <div key={n.id} className={`border rounded p-3 mb-2 ${selected?.id===n.id ? 'border-indigo-600' : ''}`}>
              <div className="font-medium">{n.name}</div>
              <div className="text-xs text-gray-500">by {n.founder} • {new Date(n.createdAt).toLocaleString()}</div>
              <button className="mt-2 px-3 py-1 bg-gray-200 rounded" onClick={() => loadManifesto(n)}>Edit Manifesto</button>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-semibold mb-2">Manifesto Editor</h2>
          {selected ? (
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Nation: {selected.name}</div>
              <textarea className="border p-2 w-full h-48" value={manifesto} onChange={e => setManifesto(e.target.value)} />
              <button className="px-3 py-2 bg-green-600 text-white rounded" onClick={saveManifesto}>Save</button>
            </div>
          ) : (
            <div className="text-sm text-gray-600">Select a nation to edit its manifesto.</div>
          )}
        </div>
      </section>
    </div>
  );
}