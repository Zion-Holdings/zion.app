'use client';

import { useState } from 'react';

export default function SQLFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copy, setCopy] = useState(false);

  const format = () => {
    const keywords = ['SELECT','FROM','WHERE','AND','OR','JOIN','LEFT','RIGHT','INNER','OUTER','ON','GROUP BY','ORDER BY','HAVING','LIMIT','OFFSET','INSERT','INTO','VALUES','UPDATE','SET','DELETE','CREATE','TABLE','ALTER','DROP','INDEX','UNION','ALL','AS','CASE','WHEN','THEN','ELSE','END','IN','NOT','NULL','IS','LIKE','BETWEEN','EXISTS','OVER','PARTITION BY','DISTINCT','COUNT','SUM','AVG','MIN','MAX','CAST','CONVERT','COALESCE','NULLIF','IFNULL'];
    let sql = input.trim();
    if (!sql) return;
    const upper = sql.toUpperCase();
    for (const kw of keywords) {
      const re = new RegExp('\\b' + kw.replace(/ /g, '\\s+') + '\\b', 'gi');
      sql = sql.replace(re, '\n' + kw);
    }
    sql = sql.replace(/^\n+/, '').replace(/\n{3,}/g, '\n\n');
    setOutput(sql);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
        <p className="text-slate-400 mb-6">Beautify SQL queries in the browser.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Input SQL</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="SELECT * FROM users WHERE id=1" className="w-full h-72 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none" />
            <button onClick={format} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Format</button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Formatted SQL</label>
            <pre className="w-full h-72 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{output || 'Output will appear here'}</pre>
            <button onClick={async () => { await navigator.clipboard.writeText(output); setCopy(true); setTimeout(() => setCopy(false), 1200); }} className="mt-3 rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-700">{copy ? 'Copied' : 'Copy Output'}</button>
          </div>
        </div>
      </div>
    </main>
  );
}
