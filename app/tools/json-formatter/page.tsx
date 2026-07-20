'use client';

import Link from 'next/link';
import { useState } from 'react';

function syntaxHighlight(json: string) {
  return json
    .replace(("(\\"(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\\\\"])*\\"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)"), (match) => {
      let cls = 'text-emerald-400';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) cls = 'text-purple-400';
        else cls = 'text-amber-300';
      } else if (/true|false/.test(match)) cls = 'text-blue-400';
      else if (/null/.test(match)) cls = 'text-slate-400';
      return `<span class="${cls}">${match}</span>`;
    })
    .replace(/\n/g, '<br/>');
}

export default function JsonFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const format = () => {
    setError('');
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (e: any) {
      setError(e.message || 'Invalid JSON');
      setOutput('');
    }
  };

  const minify = () => {
    setError('');
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch (e: any) {
      setError(e.message || 'Invalid JSON');
      setOutput('');
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <Link href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>
        <h1 className="text-3xl font-bold mb-2">JSON Formatter & Validator</h1>
        <p className="text-slate-400 mb-6">Paste JSON to format, validate, and preview with syntax highlighting.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Input</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"key":"value"}'
              className="w-full h-72 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <div className="mt-3 flex flex-wrap gap-3">
              <button onClick={format} className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Format</button>
              <button onClick={minify} className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-700">Minify</button>
            </div>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Output</label>
            <div
              className="w-full h-72 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono"
              dangerouslySetInnerHTML={{ __html: output ? syntaxHighlight(output) : '<span class="text-slate-500">Output will appear here</span>' }}
            />
            <div className="mt-3">
              <button onClick={copy} className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-700">
                {copied ? 'Copied' : 'Copy Output'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Link(props: { href: string; className?: string; children: any }) {
  return <a {...props} />;
}
