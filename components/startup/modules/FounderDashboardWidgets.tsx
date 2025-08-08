import React, { useState } from 'react';

export default function FounderDashboardWidgets() {
  const [investors, setInvestors] = useState<Array<{ name: string; status: string }>>([]);
  const [newInvestor, setNewInvestor] = useState({ name: '', status: 'New' });
  const [equity, setEquity] = useState(80);
  const [tokens, setTokens] = useState(20);

  function addInvestor() {
    if (!newInvestor.name) return;
    setInvestors((prev) => [...prev, newInvestor]);
    setNewInvestor({ name: '', status: 'New' });
  }

  return (
    <div id="founder-dashboard" className="enhanced-card">
      <h2 className="text-lg font-semibold mb-4">Founder Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="space-y-3">
          <h3 className="font-semibold">Legal Templates</h3>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>NDA (Mutual/One-way)</li>
            <li>Contractor Agreement</li>
            <li>Advisor Agreement</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="font-semibold">Investor CRM</h3>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2 flex-1 bg-white dark:bg-black" placeholder="Investor name" value={newInvestor.name} onChange={(e) => setNewInvestor({ ...newInvestor, name: e.target.value })} />
            <select className="border rounded px-3 py-2 bg-white dark:bg-black" value={newInvestor.status} onChange={(e) => setNewInvestor({ ...newInvestor, status: e.target.value })}>
              <option>New</option>
              <option>Contacted</option>
              <option>Meeting</option>
              <option>Committed</option>
            </select>
            <button onClick={addInvestor} className="px-3 py-2 rounded bg-blue-600 text-white">Add</button>
          </div>
          <ul className="text-sm divide-y divide-gray-200 dark:divide-gray-800">
            {investors.map((inv, idx) => (
              <li key={idx} className="py-2 flex items-center justify-between">
                <span>{inv.name}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900">{inv.status}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="font-semibold">Equity + Token Split</h3>
          <div className="text-sm space-y-2">
            <label className="block">Equity: {equity}%</label>
            <input type="range" min={0} max={100} value={equity} onChange={(e) => setEquity(parseInt(e.target.value, 10))} className="w-full" />
            <label className="block">Tokens: {tokens}%</label>
            <input type="range" min={0} max={100} value={tokens} onChange={(e) => setTokens(parseInt(e.target.value, 10))} className="w-full" />
            <p className="text-xs text-gray-600 dark:text-gray-400">Ensure equity + tokens = 100%</p>
          </div>
        </section>
      </div>
    </div>
  );
}