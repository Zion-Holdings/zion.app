'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function AutonomousFunnelOrchestratorPage() {
  const [ctaCount, setCtaCount] = useState(3);
  const [socialProofItems, setSocialProofItems] = useState(2);
  const [urgencyLevel, setUrgencyLevel] = useState(60);
  const [pageType, setPageType] = useState<'landing' | 'pricing' | 'checkout'>('landing');

  const funnelScore = useMemo(() => {
    const ctaScore = Math.min(ctaCount * 12, 35);
    const proofScore = Math.min(socialProofItems * 10, 30);
    const urgencyScore = urgencyLevel * 0.35;
    return Math.round(ctaScore + proofScore + urgencyScore);
  }, [ctaCount, socialProofItems, urgencyLevel]);

  const recommendations = useMemo(() => {
    const recs: string[] = [];
    if (ctaCount < 3) recs.push('Add at least 3 CTAs above the fold for optimal conversion.');
    if (socialProofItems < 3) recs.push('Include 3+ social proof elements (testimonials, logos, ratings).');
    if (urgencyLevel < 50) recs.push('Increase urgency signals (limited-time offers, countdown timers).');
    if (pageType === 'pricing') recs.push('Highlight recommended plan and add money-back guarantee.');
    if (pageType === 'checkout') recs.push('Simplify form fields and add trust badges near payment.');
    if (recs.length === 0) recs.push('Funnel is well-optimized. Consider A/B testing minor variations.');
    return recs;
  }, [ctaCount, socialProofItems, urgencyLevel, pageType]);

  const confidence = Math.min(92, 65 + ctaCount * 3 + socialProofItems * 2);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <Link href="/ai-lab" className="mb-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
          ← Back to AI Lab
        </Link>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-400">Conversion Intelligence</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Autonomous Funnel Orchestrator</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Design smarter CTAs, social proof placement, and funnel actions with weighted impact and confidence scoring.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Controls */}
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold text-slate-200">Funnel Configuration</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-400">Page Type</label>
                  <div className="mt-2 flex gap-2">
                    {(['landing', 'pricing', 'checkout'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setPageType(t)}
                        className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                          pageType === t
                            ? 'bg-purple-600 text-white'
                            : 'border border-slate-700 bg-slate-800 text-slate-300 hover:border-purple-500'
                        }`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400">CTA Count: {ctaCount}</label>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={ctaCount}
                    onChange={(e) => setCtaCount(Number(e.target.value))}
                    className="mt-2 w-full accent-purple-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400">Social Proof Items: {socialProofItems}</label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={socialProofItems}
                    onChange={(e) => setSocialProofItems(Number(e.target.value))}
                    className="mt-2 w-full accent-purple-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400">Urgency Level: {urgencyLevel}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={urgencyLevel}
                    onChange={(e) => setUrgencyLevel(Number(e.target.value))}
                    className="mt-2 w-full accent-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold text-slate-200">AI Recommendations</h3>
              <ul className="mt-3 space-y-2">
                {recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-0.5 text-emerald-400">→</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Score */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-slate-900/80 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">Funnel Score</p>
              <p className="mt-3 text-5xl font-bold text-white">{funnelScore}</p>
              <p className="mt-1 text-sm text-slate-400">/ 100</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                  style={{ width: `${funnelScore}%` }}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Confidence</p>
              <p className="mt-2 text-3xl font-bold text-emerald-300">{confidence}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
