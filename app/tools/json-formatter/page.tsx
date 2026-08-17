// app/tools/json-formatter/page.tsx — JSON Formatter & Validator
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSON Formatter & Validator | Zion Tech Group',
  description: 'Format, validate, and prettify JSON with syntax highlighting. No data is sent to our servers.',
  alternates: { canonical: '/tools/json-formatter/' },
};

type Severity = 'ok' | 'error' | 'warn';

export default function JsonFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [indent, setIndent] = useState(2);

  useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError(null);
    } catch (e) {
      setOutput('');
      setError((e as Error).message);
    }
  }, [input, indent]);

  const isValid = !error && input.trim();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container-page py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link href="/" className="text-slate-400 hover:text-purple-400 transition-colors">Home</Link>
          <span className="mx-2 text-slate-600">/</span>
          <Link href="/tools" className="text-slate-400 hover:text-purple-400 transition-colors">Tools</Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-300">JSON Formatter</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs">📋</span>
              <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">Developer Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">JSON Formatter &amp; Validator</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Format, validate, and prettify JSON with syntax highlighting. Runs entirely in your browser — no data leaves your machine.
            </p>
          </header>

          <div className="mb-6 flex items-center gap-4">
            <label className="text-sm text-slate-400">Indent:</label>
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
              <option value={0}>None (compact)</option>
            </select>
            <div className={`text-sm ${isValid ? 'text-emerald-400' : error ? 'text-red-400' : 'text-slate-500'}`}>
              {isValid ? '✅ Valid JSON' : error ? '❌ Invalid JSON' : 'Waiting for input...'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Input</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"key": "value"}'
                className="w-full h-80 p-4 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Output</label>
              <div
                className={`w-full h-80 p-4 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono overflow-auto ${
                  error ? 'text-red-400' : 'text-emerald-400'
                }`}
              >
                {output || error || 'Formatted JSON will appear here'}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tools/"
              className="inline-block px-6 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-slate-700"
            >
              ← All Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
