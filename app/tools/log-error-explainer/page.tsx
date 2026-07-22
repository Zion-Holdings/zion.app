'use client';

import { useState } from 'react';

export default function LogErrorExplainerTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const explain = () => {
    setLoading(true);
    setOutput('');
    setTimeout(() => {
      const text = input.trim();
      if (!text) {
        setOutput('Paste an error or log to analyze.');
        setLoading(false);
        return;
      }
      const lines = text.split('\n').slice(0, 20);
      const summary = lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (/^ERROR/i.test(trimmed)) return `${idx + 1}. ERROR-level message: ${trimmed}`;
        if (/^WARN/i.test(trimmed)) return `${idx + 1}. WARNING: ${trimmed}`;
        if (/^\s+at\s+/.test(trimmed)) return `${idx + 1}. Stack frame: ${trimmed.trim()}`;
        if (/TypeError|ReferenceError|RangeError|SyntaxError|EvalError|InternalError/.test(trimmed)) return `${idx + 1}. JavaScript exception detected: ${trimmed}`;
        if (/Traceback|Error:|Exception/.test(trimmed)) return `${idx + 1}. Runtime exception detected: ${trimmed}`;
        return `${idx + 1}. ${trimmed}`;
      }).filter(Boolean).join('\n');

      const tips = [
        'Check the first frame in the stack trace — it usually points to the root cause.',
        'If the error repeats, compare timestamps with deployments or dependency changes.',
        'Search the exact error string with the project name; often a known issue.',
        'Prefer reproducing in dev with breakpoints instead of adding print/log spam.'
      ].join('\n');

      setOutput(`## Analysis\n${summary || 'No recognizable patterns found.'}\n\n## Suggested Next Steps\n${tips}`);
      setLoading(false);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Log Error Explainer</h1>
        <p className="text-slate-400 mb-6">Paste a stack trace or error log for a plain-English breakdown.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Error / Log</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={"ERROR: Cannot read property 'id' of undefined\n    at UserService.find (src/services/user.ts:45:22)\n    at async ..."}
              className="w-full h-72 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <button onClick={explain} disabled={loading} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500 disabled:opacity-50">
              {loading ? 'Analyzing...' : 'Explain'}
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Explanation</label>
            <div className="w-full h-72 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">
              {output || 'Output will appear here'}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
