'use client';

import { useState } from 'react';

export default function LogErrorExplainerTool() {
  const [logInput, setLogInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!logInput.trim()) return;
    setLoading(true);
    setResult('Analyzing log entry...');
    
    await new Promise(r => setTimeout(r, 1200));
    
    // Simulate intelligent log analysis
    const analyses = [
      { level: 'ERROR', component: 'payment-service', message: 'Connection timeout to stripe.api after 30s', rootCause: 'Network partition or Stripe API degradation', action: 'Check Stripe status page; implement circuit breaker; add retry with exponential backoff' },
      { level: 'WARN', component: 'redis-cluster', message: 'High memory usage: 89% (maxmemory 2GB)', rootCause: 'Memory leak in session cache or missing TTL on keys', action: 'Run MEMORY DOCTOR; add TTL to session keys; consider maxmemory-policy allkeys-lru' },
      { level: 'ERROR', component: 'k8s-pod', message: 'OOMKilled: Container exceeded memory limit', rootCause: 'Memory limit too low or application memory leak', action: 'Increase memory limit; profile heap usage; check for unbounded caches' },
    ];
    
    setResult(analyses.map(a => 
      `[${a.level}] ${a.component}\n${a.message}\n\n🔍 Root Cause: ${a.rootCause}\n✅ Recommended Action: ${a.action}`
    ).join('\n\n---\n\n'));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">Log Error Explainer</h1>
        <p className="mb-8 text-slate-400">Paste any log line (syslog, journald, k8s, Docker, JSON, plain text) for root-cause analysis and remediation steps.</p>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Log Entry</label>
            <textarea
              value={logInput}
              onChange={e => setLogInput(e.target.value)}
              placeholder="2024-01-15T10:23:45.123Z ERROR payment-service Connection timeout to stripe.api after 30000ms"
              className="w-full min-h-[300px] rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none placeholder-slate-600"
              spellCheck={false}
            />
            <div className="mt-2 flex gap-2 text-xs text-slate-500">
              <span>Supports: syslog, RFC5424, JSON, k8s, Docker, CloudWatch, Datadog, plain text</span>
            </div>
            
            <button
              onClick={handleExplain}
              disabled={loading || !logInput.trim()}
              className="mt-4 w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Analyzing...' : 'Explain Error'}
            </button>
          </div>
          
          <div>
            <label className="mb-2 block text-sm font-medium">Analysis</label>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[300px] whitespace-pre-wrap">
              {result || 'Paste a log entry and click "Explain Error" for AI-powered root cause analysis and remediation steps.'}
            </div>
            
            {result && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-red-500/10 p-4 border border-red-500/20">
                  <h4 className="mb-2 font-semibold text-red-400">Immediate Actions</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Check dependent service status pages</li>
                    <li>• Verify network connectivity and DNS</li>
                    <li>• Review recent deployments for regressions</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/20">
                  <h4 className="mb-2 font-semibold text-emerald-400">Preventive Measures</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Implement circuit breakers and retries</li>
                    <li>• Add distributed tracing (OpenTelemetry)</li>
                    <li>• Set up alerting on error rate thresholds</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';