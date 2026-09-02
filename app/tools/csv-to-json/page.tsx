'use client';

import { useState } from 'react';

export const metadata = {
  title: 'CSV to JSON Converter — Zion Tech Group',
  description: 'Convert CSV data to JSON instantly in the browser. Download or copy the result.',
  alternates: { canonical: '/tools/csv-to-json/' },
};

export default function CsvToJsonPage() {
  const [csv, setCsv] = useState('');
  const [json, setJson] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    setError('');
    setJson('');
    if (!csv.trim()) return;
    try {
      const lines = csv.trim().split(/\r?\n/);
      if (lines.length < 2) throw new Error('CSV must have a header and at least one row.');
      const headers = lines[0].split(',').map((h) => h.trim());
      const rows = lines.slice(1).map((line) => {
        const values = line.split(',');
        const entry: Record<string, string> = {};
        headers.forEach((header, index) => {
          entry[header] = values[index]?.trim() ?? '';
        });
        return entry;
      });
      setJson(JSON.stringify(rows, null, 2));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Conversion failed';
      setError(message);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">CSV to JSON Converter</h1>
      <p className="mt-2 text-slate-300">
        Paste CSV and get JSON. Client-side only.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <textarea
          value={csv}
          onChange={(event) => setCsv(event.target.value)}
          placeholder="name,plan,status&#10;Zion,growth,active"
          className="h-64 rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200"
        />
        <textarea
          value={json}
          readOnly
          placeholder="JSON output"
          className="h-64 rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={convert}
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500"
        >
          Convert
        </button>
        <button
          onClick={() => {
            if (!json) return;
            navigator.clipboard.writeText(json);
          }}
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-purple-500/50"
        >
          Copy JSON
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-900/60 bg-red-950/60 p-4 text-sm text-red-200">
          {error}
        </div>
      )}
    </div>
  );
}
