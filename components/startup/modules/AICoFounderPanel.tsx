import React, { useState } from 'react';

export default function AICoFounderPanel() {
  const [prompt, setPrompt] = useState('Draft my employee offer letter');
  const [result, setResult] = useState<string | null>(null);

  async function generate(type: string) {
    const res = await fetch('/api/startup-os/ai-generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, prompt }),
    });
    const json = await res.json();
    setResult(json.output || 'Generated');
  }

  return (
    <div id="ai-cofounder" className="enhanced-card">
      <h2 className="text-lg font-semibold mb-4">AI Co-Founder Panel</h2>
      <div className="space-y-3">
        <textarea className="w-full border rounded px-3 py-2 min-h-[100px] bg-white dark:bg-black" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <div className="flex flex-wrap gap-2">
          <button onClick={() => generate('offer-letter')} className="px-3 py-2 rounded bg-blue-600 text-white">Offer Letter</button>
          <button onClick={() => generate('pitch-deck')} className="px-3 py-2 rounded bg-purple-600 text-white">Pitch Deck</button>
          <button onClick={() => generate('bmc')} className="px-3 py-2 rounded bg-green-600 text-white">Business Model Canvas</button>
          <button onClick={() => generate('hiring-plan')} className="px-3 py-2 rounded bg-amber-600 text-white">6-mo Hiring Plan</button>
        </div>
        {result && (
          <pre className="mt-2 text-xs p-3 bg-gray-100 dark:bg-gray-900 rounded overflow-auto">{result}</pre>
        )}
      </div>
    </div>
  );
}