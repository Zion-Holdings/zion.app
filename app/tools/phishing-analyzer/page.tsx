'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

const SEVERITY_STYLES: Record<string, string> = {
  high: 'bg-red-500/10 border-red-500/20',
  medium: 'bg-amber-500/10 border-amber-500/20',
  low: 'bg-slate-800/50',
};

type Indicator = { type: string; severity: 'high' | 'medium' | 'low'; description: string };
type Results = { score: number; verdict: 'safe' | 'suspicious' | 'phishing'; indicators: Indicator[]; urls: string[] };

export default function PhishingAnalyzerTool() {
  const [emailInput, setEmailInput] = useState('');
  const [results, setResults] = useState<Results | null>(null);

  const analyzeEmail = () => {
    if (!emailInput.trim()) return;
    const text = emailInput.toLowerCase();
    const indicators: Indicator[] = [];
    let score = 0;

    const urgencyPatterns = [
      { pattern: /\b(urgent|immediate|asap|right now|today only|expires? (today|soon)|deadline)\b/, severity: 'high', desc: 'Artificial urgency/threat' },
      { pattern: /\b(act now|don't delay|limited time|final notice|last chance)\b/, severity: 'high', desc: 'Pressure tactics' },
    ];
    const credentialPatterns = [
      { pattern: /\b(verify|confirm|update|validate)\s+(your\s+)?(account|password|credentials|identity|login)\b/, severity: 'high', desc: 'Credential harvesting attempt' },
      { pattern: /\b(click|sign in|log in)\s+(here|below|link)\b/, severity: 'high', desc: 'Suspicious link directive' },
    ];
    const authorityPatterns = [
      { pattern: /\b(it|security|admin|helpdesk|support|hr|finance|payroll|ceo|cto|director|manager)\b/, severity: 'medium', desc: 'Authority impersonation' },
      { pattern: /\b(microsoft|google|amazon|apple|paypal|bank|irs|gov)\b/, severity: 'medium', desc: 'Brand impersonation' },
    ];
    const genericPatterns = [
      { pattern: /^(dear\s+)?(customer|user|client|member|team|employee|staff|colleague)\b/, severity: 'medium', desc: 'Generic greeting (not personalized)' },
    ];
    const senderPatterns = [
      { pattern: /@(gmail|yahoo|hotmail|outlook|live|aol|icloud|protonmail)\.(com|net|org)/, severity: 'medium', desc: 'Free email domain (not corporate)' },
      { pattern: /\.(xyz|top|club|online|site|info|biz|tk|ml|ga|cf)\b/, severity: 'high', desc: 'Suspicious TLD' },
    ];
    const grammarPatterns = [
      { pattern: /\b(recieve|seperate|definately|occured|accomodate|maintainance|priviledge)\b/, severity: 'low', desc: 'Common misspellings' },
    ];

    [...urgencyPatterns, ...credentialPatterns, ...authorityPatterns, ...genericPatterns, ...senderPatterns, ...grammarPatterns].forEach(({ pattern, severity, desc }) => {
      if (pattern.test(text)) {
        const existing = indicators.find(i => i.description === desc);
        if (!existing) {
          const points = severity === 'high' ? 25 : severity === 'medium' ? 15 : 5;
          indicators.push({ type: 'pattern', severity: severity as Indicator['severity'], description: desc });
          score += points;
        }
      }
    });

    if (/\battachment\b|\battached\b/.test(text)) {
      indicators.push({ type: 'attachment', severity: 'medium', description: 'Unexpected attachment mentioned' });
      score += 10;
    }

    const urls: string[] = text.match(/https?:\/\/[^\s]+/g) || [];
    urls.forEach(url => {
      try {
        const u = new URL(url);
        if (u.hostname.includes('@') || u.hostname.split('.').length > 4) {
          indicators.push({ type: 'url', severity: 'high', description: `Suspicious URL structure: ${u.hostname}` });
          score += 25;
        }
        if (!url.startsWith('https://')) {
          indicators.push({ type: 'url', severity: 'medium', description: `Non-HTTPS link: ${url}` });
          score += 10;
        }
      } catch { /* noop */ }
    });

    const verdict: Results['verdict'] = score >= 50 ? 'phishing' : score >= 20 ? 'suspicious' : 'safe';
    setResults({ score: Math.min(100, score), verdict, indicators, urls });
  };

  const verdictLabel = useMemo(() => {
    if (!results) return '';
    if (results.verdict === 'phishing') return 'High confidence phishing attempt. Do not click links or provide credentials.';
    if (results.verdict === 'suspicious') return 'Suspicious indicators found. Verify independently before acting.';
    return 'No significant phishing indicators detected.';
  }, [results]);

  const samples = [
    { name: 'Legitimate', text: 'Hi John, Please find the Q3 report attached. Let me know if you have questions. Thanks, Sarah from Finance' },
    { name: 'Phishing', text: 'URGENT: Your account will be closed today! Click here to verify your credentials immediately: http://security-update.bank-login.xyz/verify' },
    { name: 'Spear Phishing', text: 'Hi John, This is Sarah from IT. We need you to update your password today. Please use this secure link: https://company-password-reset.malicious-site.top/reset' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Free Tools
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold">Phishing Email Analyzer</h1>
              <p className="text-slate-400">Paste email content or headers to detect urgency tactics, credential harvesting, impersonation, suspicious URLs, and more.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <label className="mb-2 block text-sm font-medium text-slate-300">Email Content</label>
              <textarea
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                rows={12}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none"
                placeholder="Paste email body, headers, or suspicious text here..."
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={analyzeEmail} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition-colors">Analyze</button>
                <button onClick={() => { setEmailInput(''); setResults(null); }} className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-purple-500 transition-colors">Clear</button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {samples.map(s => (
                  <button key={s.name} onClick={() => { setEmailInput(s.text); setResults(null); }} className="rounded border border-slate-700 px-3 py-1 text-sm font-mono text-slate-300 hover:border-purple-500 transition-colors">{s.name}</button>
                ))}
              </div>
            </div>

            {results && (
              <div className="space-y-6">
                <div className={`rounded-2xl p-6 text-center ${
                  results.verdict === 'phishing' ? 'bg-red-500/20 border border-red-500/30' :
                  results.verdict === 'suspicious' ? 'bg-amber-500/20 border border-amber-500/30' :
                  'bg-emerald-500/20 border border-emerald-500/30'
                }`}>
                  <div className="mb-2 text-5xl font-bold">{results.score}%</div>
                  <div className="text-2xl font-semibold capitalize" style={{ color: results.verdict === 'phishing' ? '#f87171' : results.verdict === 'suspicious' ? '#fbbf24' : '#34d399' }}>{results.verdict}</div>
                  <div className="mt-3 text-slate-300">{verdictLabel}</div>
                </div>

                {results.urls.length > 0 && (
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                    <h3 className="mb-4 font-semibold">URLs Found ({results.urls.length})</h3>
                    <ul className="space-y-2">
                      {results.urls.map((u, i) => (
                        <li key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-3 font-mono text-sm text-slate-300 break-all">{u}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {results.indicators.length > 0 && (
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                    <h3 className="mb-4 font-semibold">Indicators ({results.indicators.length})</h3>
                    <div className="space-y-2">
                      {results.indicators.map((ind, i) => (
                        <div key={i} className={`flex items-center gap-3 rounded-xl p-3 ${SEVERITY_STYLES[ind.severity] || 'border border-slate-800 bg-slate-800/50'}`}>
                          <span className={`w-2 h-2 rounded-full ${ind.severity === 'high' ? 'bg-red-500' : ind.severity === 'medium' ? 'bg-amber-500' : 'bg-slate-500'}`} />
                          <span className="font-medium capitalize text-slate-300">{ind.severity}</span>
                          <span className="text-slate-300 flex-1">{ind.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold">Quick Actions</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-xl border border-slate-700 px-4 py-2 font-medium text-slate-100 hover:border-purple-500 transition-colors">Report to IT Security</button>
                    <button className="rounded-xl border border-slate-700 px-4 py-2 font-medium text-slate-100 hover:border-purple-500 transition-colors">Delete Email</button>
                    <button className="rounded-xl border border-slate-700 px-4 py-2 font-medium text-slate-100 hover:border-purple-500 transition-colors">Block Sender</button>
                    <Link href="/contact" className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-500 transition-colors">Book Security Consultation</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white">How to use this tool</h3>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-slate-300">
                <li>Copy the suspicious email body or full headers.</li>
                <li>Paste it into the text box.</li>
                <li>Click <strong>Analyze</strong>.</li>
                <li>Use the outcome to decide next steps.</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white">Related</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/services/?category=security" className="text-purple-300 hover:text-purple-200">Security Services</Link></li>
                <li><Link href="/services/?category=automation" className="text-purple-300 hover:text-purple-200">Automated Response Playbooks</Link></li>
                <li><Link href="/free-tools" className="text-purple-300 hover:text-purple-200">All Free Tools</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
