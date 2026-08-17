// app/tools/base64/page.tsx — Base64 Encoder/Decoder
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pingTool } from '@/data/tools_ping_client';

export const metadata: Metadata = {
  title: 'Base64 Encoder/Decoder | Zion Tech Group',
  description: 'Free online Base64 encoder and decoder. Encode text or files to Base64, decode Base64 back to text — no installs, no data stored.',
  alternates: { canonical: '/tools/base64/' },
};

export default function Base64Page() {
  useEffect(() => { pingTool('base64'); }, []);

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      setError('');
      if (mode === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e: any) {
      setError(e.message || 'Invalid Base64 input');
    }
  };

  return (
    <div className="container-page py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/tools/" className="text-purple-400 text-sm hover:underline mb-6 inline-block">← All Tools</Link>
        <h1 className="text-4xl font-bold text-white mb-4">🔐 Base64 Encoder / Decoder</h1>
        <p className="text-slate-400 mb-8">
          Encode text to Base64 or decode Base64 back to plain text. No data leaves your browser — all
          processing happens client-side. Perfect for encoding credentials, JWT payloads, and binary data.
        </p>

        <div className="glass-card p-6 mb-8">
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => { setMode('encode'); setOutput(''); setError(''); }}
              className={`px-4 py-2 rounded ${mode === 'encode' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >Encode</button>
            <button
              onClick={() => { setMode('decode'); setOutput(''); setError(''); }}
              className={`px-4 py-2 rounded ${mode === 'decode' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >Decode</button>
          </div>

          <label className="block text-white font-medium mb-2">Input text</label>
          <textarea
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(''); }}
            placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 outline-none resize-y min-h-[100px]"
          />

          <button
            onClick={convert}
            disabled={!input.trim()}
            className="btn-primary px-6 mt-4"
          >
            {mode === 'encode' ? 'Encode to Base64' : 'Decode from Base64'}
          </button>
          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

          {output && (
            <>
              <label className="block text-white font-medium mb-2 mt-6">Output</label>
              <textarea
                readOnly
                value={output}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white min-h-[80px]"
              />
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="btn-secondary px-4 mt-2 text-sm"
              >Copy output</button>
            </>
          )}
        </div>

        <div className="text-sm text-slate-500">
          <p>💡 <strong>Tip:</strong> Base64 increases size by ~33%. Use only when an ASCII-safe encoding is required (data URLs, HTTP auth, JSON payloads).</p>
        </div>
      </div>
    </div>
  );
}
