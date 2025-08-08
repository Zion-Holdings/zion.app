import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DevNetDashboard() {
  const [address, setAddress] = useState('dev:alice');
  const [faucetAmount, setFaucetAmount] = useState(100);
  const [balance, setBalance] = useState<number | null>(null);
  const operatorPrompt = `Create a local development instance of Zion OS that forks the DAO module, loads mock talent profiles, enables free ZION$ faucet, and supports testnet governance votes.`;

  async function fetchBalance(addr: string) {
    const res = await fetch(`/api/devnet/faucet?address=${encodeURIComponent(addr)}`);
    const data = await res.json();
    setBalance(data.balance ?? 0);
  }

  async function mint() {
    await fetch('/api/devnet/faucet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, amount: faucetAmount }),
    });
    fetchBalance(address);
  }

  useEffect(() => {
    fetchBalance(address);
  }, []);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Zion DevNet</h1>
      <p className="text-gray-600">Local/cloud simulator for jobs, DAO votes, token faucet, nations, and GPT testing.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="border rounded p-4">
          <h2 className="font-semibold mb-2">Token Faucet (ZION$)</h2>
          <div className="space-y-2">
            <input className="border p-2 w-full" value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
            <div className="flex gap-2 items-center">
              <input type="number" className="border p-2 w-32" value={faucetAmount} onChange={e => setFaucetAmount(Number(e.target.value))} />
              <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={mint}>Mint</button>
              <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => fetchBalance(address)}>Refresh</button>
              <span className="ml-2 text-sm">Balance: {balance ?? 0}</span>
            </div>
            <Link href="/faucet" className="text-blue-600 underline">Open faucet</Link>
          </div>
        </section>

        <section className="border rounded p-4">
          <h2 className="font-semibold mb-2">DAO Proposal Sandbox</h2>
          <p className="text-sm mb-2">Submit proposals and cast votes. Simple pass/fail logic.</p>
          <Link href="/dao/dev" className="px-3 py-2 inline-block bg-purple-600 text-white rounded">Open DAO Sandbox</Link>
        </section>

        <section className="border rounded p-4">
          <h2 className="font-semibold mb-2">Marketplace (Mock)</h2>
          <p className="text-sm mb-2">Browse or post jobs; sample talent loaded.</p>
          <Link href="/marketplace" className="px-3 py-2 inline-block bg-emerald-600 text-white rounded">Open Marketplace</Link>
        </section>

        <section className="border rounded p-4">
          <h2 className="font-semibold mb-2">Micro-Nations & Manifesto</h2>
          <p className="text-sm mb-2">Create a test nation and edit its manifesto.</p>
          <Link href="/nations" className="px-3 py-2 inline-block bg-indigo-600 text-white rounded">Open Nations</Link>
        </section>

        <section className="border rounded p-4">
          <h2 className="font-semibold mb-2">GPT Playground</h2>
          <p className="text-sm mb-2">Test GPT calls. Uses mock if no OPENAI_API_KEY.</p>
          <Link href="/gpt-playground" className="px-3 py-2 inline-block bg-gray-800 text-white rounded">Open Playground</Link>
        </section>
      </div>

      <section className="border rounded p-4">
        <h2 className="font-semibold mb-2">Operator Prompt</h2>
        <p className="text-sm text-gray-600 mb-2">Use this as a reference when operating the simulator:</p>
        <textarea className="border p-2 w-full h-24" readOnly value={operatorPrompt} />
      </section>
    </div>
  );
}