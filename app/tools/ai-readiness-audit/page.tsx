'use client';

import { useState } from 'react';

const questions = [
  { id: 'strategy', category: 'Strategy', text: 'Does your organization have a documented AI strategy aligned with business goals?', weight: 10 },
  { id: 'leadership', category: 'Strategy', text: 'Is there executive sponsorship and clear ownership for AI initiatives?', weight: 8 },
  { id: 'use-cases', category: 'Strategy', text: 'Have you identified and prioritized specific AI use cases with measurable ROI?', weight: 10 },
  { id: 'data-quality', category: 'Data', text: 'Is your data accurate, complete, and accessible for AI training/inference?', weight: 10 },
  { id: 'data-governance', category: 'Data', text: 'Do you have data governance policies (privacy, lineage, quality, access)?', weight: 8 },
  { id: 'data-infrastructure', category: 'Data', text: 'Can your data infrastructure handle ML workloads (storage, compute, pipelines)?', weight: 8 },
  { id: 'ml-platform', category: 'Technology', text: 'Do you have an ML platform for experiment tracking, model registry, and deployment?', weight: 7 },
  { id: 'mloops', category: 'Technology', text: 'Are ML models deployed with CI/CD, monitoring, and automated retraining?', weight: 9 },
  { id: 'compute', category: 'Technology', text: 'Do you have sufficient GPU/TPU compute for training and inference?', weight: 6 },
  { id: 'security', category: 'Technology', text: 'Are models and data secured (encryption, access control, model protection)?', weight: 7 },
  { id: 'talent', category: 'People', text: 'Do you have in-house ML engineers, data scientists, and ML ops capability?', weight: 9 },
  { id: 'training', category: 'People', text: 'Is there ongoing AI/ML training and upskilling for technical and non-technical staff?', weight: 6 },
  { id: 'culture', category: 'People', text: 'Does your culture embrace experimentation, failure tolerance, and data-driven decisions?', weight: 7 },
  { id: 'ethics', category: 'Governance', text: 'Do you have AI ethics guidelines (bias, fairness, transparency, accountability)?', weight: 8 },
  { id: 'compliance', category: 'Governance', text: 'Are AI systems compliant with relevant regulations (GDPR, AI Act, HIPAA, SOC2)?', weight: 8 },
  { id: 'risk', category: 'Governance', text: 'Do you have risk assessment and mitigation processes for AI deployments?', weight: 7 },
];

const categories = ['Strategy', 'Data', 'Technology', 'People', 'Governance'];

export default function AIReadinessAuditTool() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (id: string, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    let totalWeight = 0;
    let earnedWeight = 0;
    const catScores: Record<string, { earned: number; total: number }> = {};
    
    questions.forEach(q => {
      const answer = answers[q.id] || 0;
      totalWeight += q.weight;
      earnedWeight += (answer / 4) * q.weight;
      
      if (!catScores[q.category]) catScores[q.category] = { earned: 0, total: 0 };
      catScores[q.category].earned += (answer / 4) * q.weight;
      catScores[q.category].total += q.weight;
    });
    
    const overall = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;
    const catResults = Object.entries(catScores).map(([cat, s]) => ({
      category: cat,
      score: Math.round((s.earned / s.total) * 100),
    }));
    
    return { overall, catResults, totalWeight, earnedWeight };
  };

  const getMaturity = (score: number) => {
    if (score >= 80) return { label: 'Leading', color: 'text-emerald-400', desc: 'AI is a core competency; continuous innovation' };
    if (score >= 60) return { label: 'Advancing', color: 'text-blue-400', desc: 'Multiple production models; scaling across business units' };
    if (score >= 40) return { label: 'Developing', color: 'text-amber-400', desc: 'Pilot projects running; building foundations' };
    if (score >= 20) return { label: 'Exploring', color: 'text-orange-400', desc: 'Early experimentation; strategy being defined' };
    return { label: 'Nascent', color: 'text-red-400', desc: 'No formal AI initiative; ad-hoc exploration only' };
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  if (showResults) {
    const { overall, catResults } = calculateScore();
    const maturity = getMaturity(overall);

    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Free Tools
          </Link>
          
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">AI Readiness Audit Results</h1>
            <p className="text-slate-400">Your organization's AI maturity assessment</p>
          </div>

          <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-slate-900 p-8 text-center">
            <div className="mb-2 text-6xl font-bold" style={{ color: maturity.color.replace('text-', '') }}>
              {overall}%
            </div>
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className={`text-2xl font-semibold ${maturity.color}`}>{maturity.label}</span>
            </div>
            <p className="text-slate-300">{maturity.desc}</p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {catResults.map(cat => {
              const catMaturity = getMaturity(cat.score);
              return (
                <div key={cat.category} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-semibold text-white">{cat.category}</h3>
                  <div className="mb-2 text-3xl font-bold" style={{ color: catMaturity.color.replace('text-', '') }}>
                    {cat.score}%
                  </div>
                  <span className={`text-sm ${catMaturity.color}`}>{catMaturity.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 font-semibold">Recommended Next Steps</h2>
            <ol className="space-y-3">
              {catResults
                .filter(c => c.score < 60)
                .sort((a, b) => a.score - b.score)
                .slice(0, 3)
                .map((c, i) => (
                  <li key={c.category} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">{i + 1}</span>
                    <div>
                      <span className="font-medium">Strengthen {c.category.toLowerCase()}</span>
                      <p className="text-sm text-slate-400">
                        {c.category === 'Strategy' && 'Define clear AI strategy with executive sponsorship and prioritized use cases'}
                        {c.category === 'Data' && 'Invest in data quality, governance, and accessible infrastructure'}
                        {c.category === 'Technology' && 'Build ML platform with MLOps, monitoring, and automated retraining'}
                        {c.category === 'People' && 'Hire/upskill ML talent; foster data-driven culture'}
                        {c.category === 'Governance' && 'Establish AI ethics, compliance, and risk frameworks'}
                      </p>
                    </div>
                  </li>
                ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => { setAnswers({}); setShowResults(false); }} className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-purple-500 transition-colors">
              Retake Assessment
            </button>
            <Link href="/contact" className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition-colors">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-400">Free Assessment</p>
          <h1 className="mb-4 text-3xl font-bold">AI Readiness Audit</h1>
          <p className="text-slate-400">
            16 questions across 5 dimensions. Takes ~5 minutes. No sign-up required.
            Get a maturity score, category breakdown, and prioritized next steps.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold">Progress</h2>
            <span className="text-slate-400">{Object.keys(answers).length} / {questions.length}</span>
          </div>
          <div className="mb-6 h-2 rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-purple-600 transition-all" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
          </div>
        </div>

        <div className="space-y-8">
          {categories.map((cat, catIdx) => {
            const catQuestions = questions.filter(q => q.category === cat);
            return (
              <div key={cat} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-8 bg-purple-600 rounded" />
                  <h3 className="text-xl font-semibold">{cat}</h3>
                </div>
                <div className="space-y-6">
                  {catQuestions.map((q, qIdx) => (
                    <div key={q.id} className="space-y-3">
                      <label className="block text-base font-medium">{q.text}</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { value: 0, label: 'Not at all', color: 'red' },
                          { value: 1, label: 'Slightly', color: 'orange' },
                          { value: 2, label: 'Partially', color: 'amber' },
                          { value: 3, label: 'Mostly', color: 'blue' },
                          { value: 4, label: 'Fully', color: 'emerald' },
                        ].map(opt => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => handleAnswer(q.id, opt.value)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              answers[q.id] === opt.value
                                ? `bg-${opt.color}-600 text-white shadow-${opt.color}-500/20`
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
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
            className="w-full rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {allAnswered ? 'View Results' : `Complete all ${questions.length} questions to see results`}
          </button>
          <p className="mt-4 text-sm text-slate-500">No data is stored or transmitted. Assessment runs entirely in your browser.</p>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';