import React, { useEffect, useState } from 'react';

export default function FaucetPage() {
  const [address, setAddress] = useState('dev:alice');
  const [amount, setAmount] = useState(100);
  const [balance, setBalance] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('');

  async function refresh() {
    const res = await fetch(`/api/devnet/faucet?address=${encodeURIComponent(address)}`);
    const data = await res.json();
    setBalance(data.balance ?? 0);
  }

  async function mint() {
    setStatus('Minting...');
    const res = await fetch('/api/devnet/faucet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, amount }),
    });
    const data = await res.json();
    setStatus(data.error ? `Error: ${data.error}` : `Minted ${data.minted} ZION$`);
    refresh();
  }

  useEffect(() => { refresh(); }, []);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">ZION$ Faucet</h1>
      <input className="border p-2 w-full" value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
      <div className="flex gap-2 items-center">
        <input type="number" className="border p-2 w-32" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={mint}>Mint</button>
        <button className="px-3 py-2 bg-gray-200 rounded" onClick={refresh}>Refresh</button>
        <span className="text-sm">Balance: {balance ?? 0}</span>
      </div>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </div>
  );
}