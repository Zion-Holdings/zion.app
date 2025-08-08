import React, { useState } from 'react';

export default function TreasuryModule() {
  const [connected, setConnected] = useState(false);
  const [currency, setCurrency] = useState('ZION$');

  async function connect() {
    try {
      await fetch('/api/startup-os/treasury', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'connect' }) });
      setConnected(true);
    } catch {}
  }

  async function pay() {
    await fetch('/api/startup-os/treasury', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'pay', currency }) });
    alert('Payment sent (stub)');
  }

  return (
    <div id="treasury" className="enhanced-card">
      <h2 className="text-lg font-semibold mb-4">Treasury (Optional)</h2>
      <div className="space-y-3">
        <div className="flex gap-2">
          <button onClick={connect} className="px-3 py-2 rounded bg-blue-600 text-white">{connected ? 'Connected' : 'Connect Bank/Wallet'}</button>
          <select className="border rounded px-3 py-2 bg-white dark:bg-black" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option>ZION$</option>
            <option>USD</option>
            <option>USDC</option>
          </select>
          <button onClick={pay} className="px-3 py-2 rounded bg-green-600 text-white">Pay Team</button>
        </div>
        <div className="text-sm grid grid-cols-3 gap-4">
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
            <div className="text-xs text-gray-500">Balance</div>
            <div className="font-semibold">$0</div>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
            <div className="text-xs text-gray-500">Monthly Runway</div>
            <div className="font-semibold">N/A</div>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
            <div className="text-xs text-gray-500">P&L</div>
            <div className="font-semibold">Summary</div>
          </div>
        </div>
      </div>
    </div>
  );
}