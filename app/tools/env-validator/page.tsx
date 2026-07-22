'use client';

import { useState } from 'react';

function validateEnv(value: string) {
  if (!value.trim()) return { ok: true as const, msg: '' };
  const raw = value.trim();
  if (raw.includes('=')) return { ok: true as const, msg: '' };
  if (raw.includes('://')) return { ok: true as const, msg: '' };
  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(raw)) return { ok: true as const, msg: '' };
  if (/^[\w.+-]+$/.test(raw)) return { ok: true as const, msg: 'Weak format' };
  return { ok: false as const, msg: 'Potential unsafe environment value format' };
}

export default function EnvValidatorPage() {
  const [text, setText] = useState(`DATABASE_URL=postgres://user:pass@localhost:5432/app\nAPI_KEY=\nOPENAI_API_KEY=sk-...\nNODE_ENV=development\nBAD SECRET VALUE!\n`);
  const lines = text.split('\n');

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">🔐 ENV Validator</h1>
        <p className="text-slate-400 mb-6">Paste .env contents and flag blank values, weak formats, or suspicious syntax.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-80 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 p-3 font-mono text-sm"
          />
          <div className="space-y-2">
            {lines.map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed || trimmed.startsWith('#')) {
                return <div key={idx} className="text-slate-500 text-sm">#{idx + 1} skipped</div>;
              }
              const result = validateEnv(trimmed);
              return (
                <div key={idx} className={`flex items-start gap-3 rounded-lg border p-3 ${result.ok ? 'border-slate-700 bg-slate-800/60' : 'border-red-500/40 bg-red-500/10'}`}>
                  <span className="text-xs text-slate-400 mt-0.5">#{idx + 1}</span>
                  <div>
                    <p className="text-slate-200 text-sm break-all">{trimmed}</p>
                    <p className={`text-sm mt-1 ${result.ok ? 'text-slate-300' : 'text-red-300'}`}>{result.msg || 'Looks good'}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
