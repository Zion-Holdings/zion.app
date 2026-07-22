'use client';

import { useState } from 'react';

const stacks = [
  {
    name: 'Node.js',
    content: `node_modules\n.env\n.env.local\n.env.*.local\ndist\nbuild\ncoverage\n.next\nout\nlogs\n*.log\n.npm\n.eslintcache\n.TurboCacheStore\n.vscode-test\n`,
  },
  {
    name: 'Python',
    content: `__pycache__/\n*.pyc\n*.pyo\n.env\n.venv/\nenv/\nvenv/\nENV/\ndist/\nbuild/\n*.egg-info/\n.pytest_cache/\n.mypy_cache/\n*.sqlite3\n`,
  },
  {
    name: 'React Native',
    content: `node_modules/\n.expo/\nexpo-shared/\nandroid/.gradle\nios/Pods\nios/build\n*.jks\n*.keystore\n.env\n.env.local\n`,
  },
  {
    name: 'Java',
    content: `*.class\n*.jar\n*.war\n*.ear\ntarget/\nbuild/\n.gradle/\n.idea/\n.vscode/\n*.iml\n.logs\n.env\n`,
  },
];

export default function GitignoreGeneratorPage() {
  const [stack, setStack] = useState(stacks[0].name);
  const template = stacks.find((s) => s.name === stack) || stacks[0];
  const [content, setContent] = useState(template.content);
  const [error, setError] = useState('');

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">🚫 .gitignore Generator</h1>
        <p className="text-slate-400 mb-6">Copy a sensible .gitignore for common stacks and tweak it before downloading.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm text-slate-300">
              Stack
              <select
                value={stack}
                onChange={(e) => {
                  const picked = stacks.find((s) => s.name === e.target.value)!;
                  setStack(e.target.value);
                  setContent(picked.content);
                  setError('');
                }}
                className="mt-2 w-full rounded-lg bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2"
              >
                {stacks.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </label>

            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(content)}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
              >
                Copy
              </button>
              <button
                onClick={() => {
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = '.gitignore';
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  URL.revokeObjectURL(url);
                }}
                className="px-4 py-2 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors"
              >
                Download
              </button>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-80 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 p-3 font-mono text-sm leading-relaxed"
          />
        </div>
      </div>
    </main>
  );
}
