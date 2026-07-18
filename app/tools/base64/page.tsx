'use client';

import { useState } from 'react';

function b64Encode(str: string) {
  try { return btoa(unescape(encodeURIComponent(str))); } catch { return ''; }
}
function b64Decode(str: string) {
  try { return decodeURIComponent(escape(atob(str))); } catch { return ''; }
}

export default function Base64Tool() {
  const [text, setText] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');
  const [tab, setTab] = useState<'encode' | 'decode'>('encode');

  const handleEncode = () => {
    setEncoded(b64Encode(text));
    setDecoded('');
  };

  const handleDecode = () => {
    setDecoded(b64Decode(text));
    setEncoded('');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">Base64 Encoder/Decoder</h1>
        <p className="text-slate-400 mb-6">Convert text to Base64 and back.</p>

        <div className="flex gap-3 mb-4">
          <button onClick={() => setTab('encode')} className={`rounded-xl px-4 py-2 text-sm font-semibold ${tab === 'encode' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}>Encode</button>
          <button onClick={() => setTab('decode')} className={`rounded-xl px-4 py-2 text-sm font-semibold ${tab === 'decode' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}>Decode</button>
        </div>

        <label className="block text-sm font-medium text-slate-300 mb-2">{tab === 'encode' ? 'Plain Text' : 'Base64'}</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={tab === 'encode' ? 'Hello' : 'SGVsbG8='} className="w-full h-40 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none" />

        <button onClick={tab === 'encode' ? handleEncode : handleDecode} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">{tab === 'encode' ? 'Encode' : 'Decode'}</button>

        <label className="block text-sm font-medium text-slate-300 mt-8 mb-2">{tab === 'encode' ? 'Encoded' : 'Decoded'}</label>
        <pre className="w-full h-40 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{tab === 'encode' ? encoded : decoded || 'Output'}</pre>
      </div>
    </main>
  );
}
