'use client';

import { useState } from 'react';

export default function RegexBuilderTool() {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [flags, setFlags] = useState('g');
  const [matches, setMatches] = useState<string[]>([]);
  const [explanation, setExplanation] = useState('');

  const handleTest = () => {
    if (!pattern || !testString) return;
    try {
      const regex = new RegExp(pattern, flags);
      const matchArray = testString.match(regex);
      setMatches(matchArray ? [...matchArray] : []);
      
      // Generate explanation
      const parts = pattern.split('').map((char, i) => {
        if (char === '\\' && pattern[i + 1]) {
          return `\\${pattern[i + 1]} - escaped character`;
        }
        if (char === '[') return 'character class start';
        if (char === ']') return 'character class end';
        if (char === '(') return 'capture group start';
        if (char === ')') return 'capture group end';
        if (char === '|') return 'alternation (OR)';
        if (char === '*') return 'zero or more';
        if (char === '+') return 'one or more';
        if (char === '?') return 'zero or one';
        if (char === '.') return 'any character (except newline)';
        if (char === '^') return 'start of string/line';
        if (char === '$') return 'end of string/line';
        if (char === '{') return 'quantifier start';
        return '';
      }).filter(Boolean);
      
      setExplanation(parts.join('\n'));
    } catch (e) {
      setMatches(['Invalid regex: ' + (e as Error).message]);
      setExplanation('');
    }
  };

  const presets = [
    { name: 'Email', pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
    { name: 'URL', pattern: '^https?://(?:[\\w-]+\\.)+[\\w-]+(?:/[\\w-./?%&=]*)?$' },
    { name: 'IPv4', pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' },
    { name: 'UUID v4', pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' },
    { name: 'Date (YYYY-MM-DD)', pattern: '^\\d{4}-\\d{2}-\\d{2}$' },
    { name: 'Semantic Version', pattern: '^v?(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?(?:\\+([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?$' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">Regex Builder & Tester</h1>
        <p className="mb-8 text-slate-400">Build, test, and understand regular expressions interactively. Real-time matching with explanation.</p>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Pattern</label>
              <input
                type="text"
                value={pattern}
                onChange={e => setPattern(e.target.value)}
                placeholder="e.g., ^[a-z]+@[a-z]+\\.[a-z]{2,}$"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-white focus:border-purple-500 focus:outline-none"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {presets.map(p => (
                  <button
                    key={p.name}
                    onClick={() => setPattern(p.pattern)}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300 hover:border-purple-500 hover:text-white transition-colors"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium">Flags</label>
              <div className="flex flex-wrap gap-4">
                {['g', 'i', 'm', 's', 'u', 'y'].map(f => (
                  <label key={f} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={flags.includes(f)}
                      onChange={e => setFlags(e.target.checked ? flags + f : flags.replace(f, ''))}
                      className="rounded border-slate-600 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm">{f}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium">Test String</label>
              <textarea
                value={testString}
                onChange={e => setTestString(e.target.value)}
                placeholder="Paste text to test against..."
                className="w-full min-h-[150px] rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none placeholder-slate-600"
              />
            </div>
            
            <button
              onClick={handleTest}
              disabled={!pattern || !testString}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Test Regex
            </button>
            
            <div>
              <label className="mb-2 block text-sm font-medium">Matches</label>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm min-h-[150px]">
                {matches.length > 0 ? (
                  <ul className="space-y-1">
                    {matches.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">#{i + 1}</span>
                        <span className="text-slate-200">{m}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-slate-500">No matches found</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Pattern Explanation</label>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-300 min-h-[300px] whitespace-pre-wrap">
                {explanation || 'Build a pattern and click "Test Regex" for breakdown'}
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <h3 className="mb-3 font-semibold">Quick Reference</h3>
              <div className="space-y-1 text-xs text-slate-400">
                <div><code className="text-white">.</code> any char | <code className="text-white">\d</code> digit | <code className="text-white">\w</code> word char | <code className="text-white">\s</code> whitespace</div>
                <div><code className="text-white">*</code> 0+ | <code className="text-white">+</code> 1+ | <code className="text-white">?</code> 0/1 | <code className="text-white">{n,m}</code> range</div>
                <div><code className="text-white">^</code> start | <code className="text-white">$</code> end | <code className="text-white">\b</code> word boundary</div>
                <div><code className="text-white">(abc)</code> capture | <code className="text-white">(?:abc)</code> non-capture | <code className="text-white">a|b</code> or</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';