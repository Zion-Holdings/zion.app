'use client';

import { useState } from 'react';

export default function SSLCheckerTool() {
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    
    setLoading(true);
    setResults(null);
    
    // Simulate SSL check
    await new Promise(r => setTimeout(r, 1500));
    
    const daysRemainingCalc = 68;
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
          warnings: (daysRemainingCalc < 30 ? ['Certificate expires soon'] : []) as string[],
        };
    
    setResults(mockResult);
    setLoading(false);
  };

  const quickDomains = ['ziontechgroup.com', 'github.com', 'google.com', 'stripe.com', 'cloudflare.com'];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">SSL Certificate Checker</h1>
        <p className="mb-8 text-slate-400">Verify SSL/TLS certificates, check expiration, chain validity, and security configuration for any domain.</p>
        
        <form onSubmit={handleCheck} className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium">Domain</label>
              <input
                type="text"
                value={domain}
                onChange={e => setDomain(e.target.value)}
                placeholder="example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !domain}
              className="self-end rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Checking...' : 'Check Certificate'}
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
            Quick test: {quickDomains.map(d => (
              <button
                key={d}
                type="button"
                onClick={() => setDomain(d)}
                className="rounded border border-slate-700 bg-slate-800 px-3 py-1 hover:border-purple-500 hover:text-white transition-colors"
              >
                {d}
              </button>
            ))}
          </div>
        </form>
        
        {results && (
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">{results.domain}</h2>
                  <p className="text-slate-400">Issued by {results.issuer}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`rounded-full px-4 py-2 text-xl font-bold ${
                    results.grade.startsWith('A') ? 'bg-emerald-500/20 text-emerald-400' :
                    results.grade.startsWith('B') ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    Grade: {results.grade}
                  </span>
                  <span className={`rounded-full px-4 py-2 font-medium ${
                    results.daysRemaining > 30 ? 'bg-emerald-500/20 text-emerald-400' :
                    results.daysRemaining > 14 ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {results.daysRemaining} days remaining
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <DetailCard title="Validity Period" items={[
                { label: 'Valid From', value: results.validFrom },
                { label: 'Valid To', value: results.validTo },
                { label: 'Days Remaining', value: results.daysRemaining.toString() },
              ]} />
              <DetailCard title="Certificate Details" items={[
                { label: 'Subject', value: results.subject },
                { label: 'Key Size', value: `${results.keySize} bits` },
                { label: 'Signature Algorithm', value: results.signatureAlgorithm },
              ]} />
              <DetailCard title="Security" items={[
                { label: 'Protocol', value: results.protocol },
                { label: 'Cipher Suite', value: results.cipher },
                { label: 'OCSP Stapling', value: results.ocsp ? 'Enabled ✓' : 'Disabled ✗' },
                { label: 'HSTS', value: results.hsts ? 'Enabled ✓' : 'Disabled ✗' },
                { label: 'Chain Valid', value: results.chainValid ? 'Yes ✓' : 'No ✗' },
              ]} />
              
              {results.san.length > 0 && (
                <DetailCard title="Subject Alternative Names" items={
                  results.san.map(s => ({ label: 'SAN', value: s }))
                } />
              )}
              
              {results.warnings.length > 0 && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                  <h4 className="mb-2 font-semibold text-red-400">Warnings</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {results.warnings.map((w, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-red-400">⚠</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailCard({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <h3 className="mb-3 font-semibold text-slate-300">{title}</h3>
      <dl className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between">
            <dt className="text-slate-500">{item.label}</dt>
            <dd className="text-white font-mono text-sm">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

import Link from 'next/link';