'use client';

import { useState, useEffect } from 'react';

interface CertInfo {
  subject?: string;
  issuer?: string;
  validFrom?: string;
  validTo?: string;
  daysLeft?: number;
}

export default function SSLCheckerTool() {
  const [host, setHost] = useState('ziontechgroup.com');
  const [info, setInfo] = useState<CertInfo | null>(null);
  const [error, setError] = useState('');

<<<<<<< HEAD
  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    
    setLoading(true);
    setResults(null);
    
    // Simulate SSL check
    await new Promise(r => setTimeout(r, 1500));
    
    const mockResult = {
          domain,
          valid: true,
          issuer: 'Let\'s Encrypt',
          subject: domain,
          validFrom: '2024-11-01',
          validTo: '2025-01-30',
          daysRemaining: 68 as number,
          san: [domain, `www.${domain}`, `api.${domain}`],
          protocol: 'TLS 1.3',
          cipher: 'TLS_AES_256_GCM_SHA384',
          keySize: 2048,
          signatureAlgorithm: 'RSA-SHA256',
          ocsp: true,
          hsts: true,
          grade: 'A+' as const,
          chainValid: true,
          warnings: (68 < 30 ? ['Certificate expires soon'] : []) as string[],
        };
    
    setResults(mockResult);
    setLoading(false);
=======
  const check = async () => {
    setError('');
    setInfo(null);
    try {
      const socket = new (window as any).Require ? (window as any).require('net').Socket : null;
      if (!socket) {
        setInfo({
          subject: host,
          issuer: 'Browser-only preview',
          validFrom: new Date().toISOString(),
          validTo: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          daysLeft: 365,
        });
        return;
      }
    } catch (e: any) {
      setError(e.message || 'Lookup failed');
    }
>>>>>>> main_pre_recovery
  };

  useEffect(() => {
    const raw = prompt('Node is unavailable in browser. Enter cert info manually?') || '';
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      setInfo(parsed);
    } catch {
      setError('Invalid JSON');
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">SSL Checker</h1>
        <p className="text-slate-400 mb-6">Check TLS certificate details for a domain.</p>

        <label className="block text-sm font-medium text-slate-300 mb-2">Host</label>
        <input
          value={host}
          onChange={(e) => setHost(e.target.value)}
          placeholder="ziontechgroup.com"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
        />
        <button onClick={check} className="mt-3 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">Check SSL</button>
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

        {info && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="text-slate-400">Subject</div>
              <div className="text-white">{info.subject}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="text-slate-400">Issuer</div>
              <div className="text-white">{info.issuer}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="text-slate-400">Valid From</div>
              <div className="text-white">{info.validFrom}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="text-slate-400">Valid To</div>
              <div className="text-white">{info.validTo}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="text-slate-400">Days Left</div>
              <div className="text-white">{info.daysLeft}</div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
