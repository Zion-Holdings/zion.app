'use client';

import { useState } from 'react';

function b64Decode(str: string) {
  let s = str.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  try {
    return decodeURIComponent(atob(s).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
  } catch {
    return atob(s);
  }
}

function decodeToken(token: string) {
  const [header, payload, signature] = token.split('.');
  if (!header || !payload) return null;
  try {
    const headerObj = JSON.parse(b64Decode(header));
    const payloadObj = JSON.parse(b64Decode(payload));
    return { header: headerObj, payload: payloadObj, signature };
  } catch {
    return null;
  }
}

export default function JwtDecoderTool() {
  const [token, setToken] = useState('');
  const [result, setResult] = useState<ReturnType<typeof decodeToken>>(null);
  const [error, setError] = useState('');

  const handleDecode = () => {
    setError('');
    if (!token.trim()) {
      setResult(null);
      return;
    }
    try {
      const res = decodeToken(token.trim());
      if (!res) setError('Invalid JWT format. Expected 3 dot-separated segments.');
      else setResult(res);
    } catch (e: any) {
      setError(e.message || 'Failed to decode');
      setResult(null);
    }
  };

  const now = Math.floor(Date.now() / 1000);
  const expired = result?.payload?.exp ? now > result.payload.exp : false;
  const notYet = result?.payload?.nbf ? now < result.payload.nbf : false;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">JWT Decoder</h1>
        <p className="text-slate-400 mb-6">Paste a JWT token to inspect header, payload, and signature.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Token</label>
            <textarea
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              className="w-full h-40 rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <button onClick={handleDecode} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Decode</button>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <div className="space-y-4">
            {result && (
              <>
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Header</h3>
                    <span className="text-xs text-slate-400">Algorithm: {result.header.alg}</span>
                  </div>
                  <pre className="mt-2 text-xs font-mono text-slate-300">{JSON.stringify(result.header, null, 2)}</pre>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Payload</h3>
                    <div className="flex gap-2">
                      {expired && <span className="text-xs text-red-400">Expired</span>}
                      {notYet && <span className="text-xs text-amber-400">Not yet valid</span>}
                      {result.payload.exp && !expired && <span className="text-xs text-emerald-400">Valid</span>}
                    </div>
                  </div>
                  <pre className="mt-2 text-xs font-mono text-slate-300">{JSON.stringify(result.payload, null, 2)}</pre>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <h3 className="font-semibold">Signature</h3>
                  <p className="mt-2 break-all text-xs font-mono text-slate-400">{result.signature || 'none'}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
