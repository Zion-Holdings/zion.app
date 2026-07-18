'use client';

import { useState } from 'react';

function describeField(val: string, field: 'minute' | 'hour' | 'dom' | 'month' | 'dow') {
  if (val === '*') return 'every unit';
  if (val.includes(',')) return val.split(',').map(describeFieldSingle).join(', ');
  if (val.includes('-')) return `from ${val.split('-')[0]} to ${val.split('-')[1]}`;
  if (val.includes('/')) {
    const [base, step] = val.split('/');
    return `every ${step} starting at ${base === '*' ? '0' : base}`;
  }
  return describeFieldSingle(val);
}

function describeFieldSingle(val: string) {
  if (val === '*') return 'every';
  return val;
}

export default function CronExplainerTool() {
  const [expr, setExpr] = useState('*/15 * * * *');
  const [error, setError] = useState('');

  const parts = expr.trim().split(/\s+/);
  const needsMore = parts.length < 5;
  const description = parts.length === 5
    ? `At minute ${describeField(parts[0], 'minute')}, hour ${describeField(parts[1], 'hour')}, day-of-month ${describeField(parts[2], 'dom')}, month ${describeField(parts[3], 'month')}, day-of-week ${describeField(parts[4], 'dow')}.`
    : '';

  const validate = () => {
    setError('');
    if (needsMore) {
      setError('Standard cron needs 5 fields: minute hour day-of-month month day-of-week.');
      return;
    }
    for (const p of parts) {
      if (/[^0-9*/,%-]/.test(p)) {
        setError('Invalid cron field. Use digits, *, /, -, and commas only.');
        return;
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Cron Expression Explainer</h1>
        <p className="text-slate-400 mb-6">Enter a cron schedule to get a plain-English description.</p>

        <label className="block text-sm font-medium text-slate-300 mb-2">Cron Expression</label>
        <input
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          placeholder="*/15 * * * *"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
        />
        <button onClick={validate} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Explain</button>
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        {description && !error && (
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-200">
            {description}
          </div>
        )}
      </div>
    </main>
  );
}
