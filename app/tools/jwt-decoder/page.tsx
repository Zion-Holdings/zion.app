'use client';

import { useState } from 'react';

export const metadata = {
  title: 'JWT Decoder — Zion Tech Group',
  description: 'Decode and inspect JWT tokens in the browser. Header, payload, signature, and expiry info.',
  alternates: { canonical: '/tools/jwt-decoder/' },
};

export default function JwtDecoderPage() {
  const [token, setToken] = useState('');
  const [decoded, setDecoded] = useState<{
    header?: Record<string, unknown>;
    payload?: Record<string, unknown>;
    error?: string;
  }>({});

  const decodeToken = () => {
    setDecoded({});
    if (!token.trim()) return;
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        setDecoded({ error: 'Token must have 3 parts separated by dots.' });
        return;
      }
      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));
      setDecoded({ header, payload });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Decoding failed';
      setDecoded({ error: message });
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">JWT Decoder</h1>
      <p className="mt-2 text-slate-300">
        Inspect JWT header and payload without sending data to a server.
      </p>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
        <input
          value={token}
          onChange={(event) => setToken(event.target.value)}
          placeholder="eyJhbGciOi..."
          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 font-mono text-xs text-slate-200"
        />
        <button
          onClick={decodeToken}
          className="mt-3 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500"
        >
          Decode
        </button>
      </div>

      {decoded.error && (
        <div className="mt-4 rounded-xl border border-red-900/60 bg-red-950/60 p-4 text-sm text-red-200">
          {decoded.error}
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {decoded.header && (
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs text-slate-400">Header</p>
            <pre className="mt-2 overflow-x-auto text-xs text-slate-200">
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
          </div>
        )}
        {decoded.payload && (
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs text-slate-400">Payload</p>
            <pre className="mt-2 overflow-x-auto text-xs text-slate-200">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
