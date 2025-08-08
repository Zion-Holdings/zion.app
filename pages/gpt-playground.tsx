import React, { useState } from 'react';

export default function GptPlaygroundPage() {
  const [prompt, setPrompt] = useState('Explain the DevNet simulator in Zion OS.');
  const [model, setModel] = useState('gpt-4o-mini');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    setResponse('');
    const res = await fetch('/api/devnet/gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, model }),
    });
    const data = await res.json();
    setResponse(data.response || data.error || '');
    setLoading(false);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">GPT Playground</h1>
      <textarea className="border p-2 w-full h-40" value={prompt} onChange={e => setPrompt(e.target.value)} />
      <div className="flex items-center gap-2">
        <input className="border p-2" value={model} onChange={e => setModel(e.target.value)} />
        <button className="px-3 py-2 bg-gray-800 text-white rounded" onClick={run} disabled={loading}>{loading ? 'Running...' : 'Run'}</button>
      </div>
      {response && (
        <pre className="border p-3 whitespace-pre-wrap bg-gray-50">{response}</pre>
      )}
    </div>
  );
}