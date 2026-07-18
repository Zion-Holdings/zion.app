'use client';

import { useState } from 'react';

export default function LoremTool() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState('');

  const generate = () => {
    const words = ['lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','sed','do','eiusmod','tempor','incididunt','ut','labore','et','dolore','magna','aliqua','enim','ad','minim','veniam','quis','nostrud','exercitation','ullamco','laboris','nisi','aliquip','ex','ea','commodo','consequat','duis','aute','irure','dolor','in','reprehenderit','voluptate','velit','esse','cillum','fugiat','nulla','pariatur','excepteur','sint','occaecat','cupidatat','non','proident','sunt','in','culpa','qui','officia','deserunt','mollit','anim','id','est','laborum'];
    const sentence = () => Array.from({ length: 6 + Math.floor(Math.random() * 8) }, () => words[(Math.random() * words.length) | 0]).join(' ');
    const paragraph = () => Array.from({ length: 4 + Math.floor(Math.random() * 4) }, () => sentence()).join(' ');
    const out = Array.from({ length: count }, () => paragraph()).join('\n\n');
    setText(out);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Lorem Ipsum Generator</h1>
        <p className="text-slate-400 mb-6">Generate placeholder text for layouts and mockups.</p>

        <label className="block text-sm font-medium text-slate-300 mb-2">Paragraphs</label>
        <input type="number" min={1} max={20} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-40 rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 focus:border-purple-500 focus:outline-none" />
        <button onClick={generate} className="ml-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Generate</button>

        <pre className="mt-6 h-80 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{text || 'Output will appear here'}</pre>
      </div>
    </main>
  );
}
