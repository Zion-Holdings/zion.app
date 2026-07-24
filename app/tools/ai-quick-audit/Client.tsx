'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  { id: 'strategy', category: 'Strategy', text: 'Your company has a documented AI strategy with clear business outcomes.' },
  { id: 'data', category: 'Data', text: 'Your data is clean, accessible, and organized for AI workloads.' },
  { id: 'tech', category: 'Technology', text: 'You have the cloud/compute capacity to run AI experiments and pilots.' },
  { id: 'talent', category: 'Delivery', text: 'You have team members who can own AI/ML execution end to end.' },
  { id: 'ops', category: 'Delivery', text: 'AI outputs are evaluated for quality, drift, and business impact.' },
  { id: 'security', category: 'Technology', text: 'AI data and models have access controls, encryption, and privacy review.' },
  { id: 'governance', category: 'Governance', text: 'You have AI ethics and compliance guardrails before customer exposure.' },
  { id: 'roadmap', category: 'Strategy', text: 'You have a 90-day AI roadmap with prioritized use cases and owners.' },
];

const categories = ['Strategy', 'Data', 'Technology', 'Delivery', 'Governance'];

export default function AIQuickAuditClient() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (id: string, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    const catScores: Record<string, { earned: number; total: number }> = {};
    let earned = 0;
    let total = 0;

    questions.forEach(q => {
      const value = answers[q.id] ?? 0;
      total += 4;
      earned += value;
      if (!catScores[q.category]) catScores[q.category] = { earned: 0, total: 0 };
      catScores[q.category].earned += value;
      catScores[q.category].total += 4;
    });

    const pct = total > 0 ? Math.round((earned / total) * 100) : 0;
    const catResults = Object.entries(catScores).map(([category, s]) => ({
        category,
        score: Math.round((s.earned / s.total) * 100),
      }));

    return { pct, catResults };
  };

  const getMaturity = (score: number) => {
    if (score >= 85) return { label: 'Ready to Scale', color: '#34d399', desc: 'You have strong foundations; move to managed expansion.' };
    if (score >= 70) return { label: 'Advancing', color: '#60a5fa', desc: 'Core building blocks exist; tighten execution and measurement.' };
    if (score >= 55) return { label: 'Developing', color: '#fbbf24', desc: 'Good progress; focus on data and ops reliability.' };
    if (score >= 35) return { label: 'Exploring', color: '#fb923c', desc: 'Early stage; start with one high-value use case.' };
    return { label: 'Nascent', color: '#f87171', desc: 'No formal AI initiative yet; build strategy and data basics first.' };
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  if (showResults) {
    const { pct, catResults } = calculateScore();
    const maturity = getMaturity(pct);

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-slate-100">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Tools
          </Link>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">AI Readiness Summary</p>
            <h1 className="mt-2 text-3xl font-bold">AI Quick Audit Result</h1>
            <p className="mt-2 text-slate-400">This is a lightweight readiness signal, not a formal maturity assessment.</p>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900/60 p-8 text-center ring-1 ring-slate-800">
            <div className="text-6xl font-bold" style={{ color: maturity.color }}>
              {pct}%
            </div>
            <div className="mt-2 text-2xl font-semibold" style={{ color: maturity.color }}>
              {maturity.label}
            </div>
            <p className="mt-2 text-slate-400">{maturity.desc}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {catResults.map(cat => {
                const cm = getMaturity(cat.score);
                return (
                  <div key={cat.category} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-left">
                    <div className="text-sm font-semibold text-slate-300">{cat.category}</div>
                    <div className="mt-2 text-3xl font-bold" style={{ color: cm.color }}>
                      {cat.score}%
                    </div>
                    <div className="text-xs" style={{ color: cm.color }}>{cm.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/contact" className="rounded-xl bg-emerald-600 px-6 py-3 text-center font-semibold text-white hover:bg-emerald-500">
                Book Free Consultation
              </Link>
              <Link href="/services" className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 hover:border-slate-500">
                View AI & IT Services
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Prefer a quick call? Use Calendly https://calendly.com/kleber-ziontechgroup or email kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-slate-100">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Free Assessment</p>
          <h1 className="mt-2 text-3xl font-bold">AI Quick Audit</h1>
          <p className="mt-2 text-slate-400">
            8 questions, ~2 minutes. No signup required. Get a readiness score and recommended next step.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {categories.map(cat => {
            const catQuestions = questions.filter(q => q.category === cat);
            return (
              <div key={cat} className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-8 rounded bg-emerald-600" />
                  <h2 className="text-xl font-semibold">{cat}</h2>
                </div>
                <div className="space-y-6">
                  {catQuestions.map(q => (
                    <div key={q.id} className="space-y-3">
                      <label className="block text-base font-medium text-slate-200">{q.text}</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { value: 0, label: 'No', color: '#ef4444' },
                          { value: 1, label: 'Somewhat', color: '#f97316' },
                          { value: 2, label: 'Mostly', color: '#f59e0b' },
                          { value: 3, label: 'Yes', color: '#3b82f6' },
                          { value: 4, label: 'Fully', color: '#10b981' },
                        ].map(opt => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => handleAnswer(q.id, opt.value)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border`}
                            style={
                              answers[q.id] === opt.value
                                ? { backgroundColor: opt.color, color: '#ffffff', borderColor: opt.color }
                                : { backgroundColor: '#1f2937', color: '#e5e7eb', borderColor: '#374151' }
                            }
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center">
          <button
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className="w-full rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {allAnswered ? 'See Results' : `Answer all ${questions.length} questions to continue`}
          </button>
          <p className="mt-3 text-sm text-slate-500">No data is stored or transmitted. Runs entirely in your browser.</p>
        </div>
      </div>
    </div>
  );
}
