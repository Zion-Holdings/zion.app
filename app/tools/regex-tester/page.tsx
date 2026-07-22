'use client';

import { useState } from 'react';

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [matches, setMatches] = useState<{ match: string; index: number; groups: string[] }[]>([]);

  const tryMatch = () => {
    setError('');
    try {
      const regex = new RegExp(pattern || '', flags);
      const found: { match: string; index: number; groups: string[] }[] = [];
      let m: RegExpExecArray | null;
      const textStr = text;
      while ((m = regex.exec(textStr)) !== null) {
        found.push({ match: m[0], index: m.index, groups: Array.from(m).slice(1) });
        if (!regex.global) break;
        if (m.index === regex.lastIndex) regex.lastIndex += 1;
      }
      setMatches(found.slice(0, 50));
    } catch (e: any) {
      setError(e.message || 'Invalid regular expression');
      setMatches([]);
    }
  };

  const highlighted = (() => {
    if (!text || !pattern) return text;
    try {
      const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
      const parts = text.split(regex);
      const matches2 = text.match(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags)) || [];
      let idx = 0;
      return parts.map((part, i) => (
        <span key={i}>
          {part}
          {matches2[i] && <mark className="bg-yellow-200/20 text-yellow-200 rounded px-0.5">{matches2[i]}</mark>}
        </span>
      ));
    } catch {
      return text;
    }
  })();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Regex Tester</h1>
        <p className="text-slate-400 mb-6">Test regular expressions against text with live highlighting.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Pattern</label>
            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="e.g. [A-Z]\w+"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <label className="block text-sm font-medium text-slate-300 mt-4 mb-2">Flags</label>
            <input
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              placeholder="gim"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <button onClick={tryMatch} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Test</button>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Test String</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste text to match against"
              className="w-full h-40 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <h3 className="text-sm font-semibold text-slate-300 mb-2">Matches ({matches.length})</h3>
              <div className="space-y-2 text-xs font-mono">
                {matches.map((m, i) => (
                  <div key={i} className="rounded-lg bg-slate-800 p-2">
                    <div className="text-yellow-200">{m.match}</div>
                    <div className="text-slate-400">index: {m.index}</div>
                    {m.groups.length > 0 && <div className="text-slate-400">groups: {m.groups.join(', ')}</div>}
                  </div>
                ))}
                {matches.length === 0 && <div className="text-slate-500">No matches</div>}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">Text Preview</label>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap break-words">{highlighted}</div>
        </div>
      </div>
    </main>
  );
}
