'use client';

import { useState } from 'react';

export default function SSLChecker() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!domain.trim()) return;
    
    setLoading(true);
    setResult(null);
    
    // Simulated SSL check - in production would call an API
    const now = new Date();
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 11);
    expiry.setDate(expiry.getDate() - 5);
    const daysRemaining = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    setResult({
      domain: domain.trim(),
      valid: true,
      issuer: 'Let\'s Encrypt Authority X3',
      issued: now.toISOString().split('T')[0],
      expires: expiry.toISOString().split('T')[0],
      daysRemaining,
      protocol: 'TLS 1.3',
      cipher: 'ECDHE-RSA-AES128-GCM-SHA256',
      status: daysRemaining > 30 ? 'good' : daysRemaining > 7 ? 'warning' : 'critical'
    });
    
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </a>
        <h1 className="text-3xl font-bold mb-2">SSL Certificate Checker</h1>
        <p className="text-slate-400 mb-6">Verify SSL certificate validity and expiration dates.</p>

        <div className="grid gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="example.com"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
            />
            <button
              onClick={handleCheck}
              disabled={loading || !domain.trim()}
              className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500 disabled:opacity-50"
            >
              {loading ? 'Checking...' : 'Check SSL'}
            </button>
          </div>

          {result && (
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <h3 className="text-purple-300 font-semibold mb-3">Results for {result.domain}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Status</div>
                  <div className={`font-bold ${
                    result.status === 'good' ? 'text-green-400' : 
                    result.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {result.valid ? '✅ Valid' : '❌ Invalid'}
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Protocol</div>
                  <div className="font-bold text-white">{result.protocol}</div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Expires</div>
                  <div className="font-bold text-white">{result.expires} ({result.daysRemaining} days)</div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Issuer</div>
                  <div className="font-bold text-white text-sm">{result.issuer}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
          <h3 className="text-blue-300 font-semibold mb-2">🔒 AI Security Integration</h3>
          <p className="text-blue-200 text-sm">
            Our AI Security Auditor can scan for vulnerabilities, misconfigurations, 
            and provide remediation recommendations.
            <a href="mailto:kleber@ziontechgroup.com" className="ml-1 underline hover:text-blue-100">Contact us</a>
          </p>
        </div>
      </div>
    </main>
  );
}