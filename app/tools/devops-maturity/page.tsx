'use client';

import { useState } from 'react';

export default function DevOpsMaturityTool() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, category: 'Culture', question: 'How are failures handled in your organization?', options: ['Blameless postmortems standard', 'Some blameless practices', 'Often blame individuals', 'No formal process'] },
    { id: 2, category: 'Culture', question: 'How do teams share knowledge?', options: ['Cross-team rotation, docs, demos', 'Some documentation', 'Silos with occasional sharing', 'No knowledge sharing'] },
    { id: 3, category: 'Automation', question: 'What percentage of deployments are automated?', options: ['100% automated', '75%+ automated', '50% automated', '< 50% automated'] },
    { id: 4, category: 'Automation', question: 'How are infrastructure changes managed?', options: ['Full IaC with GitOps', 'Partial IaC', 'Manual with some scripts', 'Fully manual'] },
    { id: 5, category: 'Lean', question: 'What is your typical batch size for changes?', options: ['Small, frequent commits', 'Daily batches', 'Weekly releases', 'Monthly or larger'] },
    { id: 6, category: 'Lean', question: 'How long from commit to production?', options: ['< 1 hour', '< 1 day', '< 1 week', '> 1 week'] },
    { id: 7, category: 'Measurement', question: 'Which metrics do you track continuously?', options: ['All DORA metrics', 'Lead time & deployment freq', 'Only deployment frequency', 'No metrics'] },
    { id: 8, category: 'Measurement', question: 'How is observability implemented?', options: ['Full stack: logs, metrics, traces', 'Logs + metrics', 'Logs only', 'Minimal monitoring'] },
    { id: 9, category: 'Sharing', question: 'How are incidents communicated?', options: ['Real-time status page + postmortems', 'Slack updates + postmortems', 'Email notifications only', 'Ad hoc communication'] },
    { id: 10, category: 'Sharing', question: 'How do teams collaborate on tooling?', options: ['Platform team with self-service', 'Shared tools repo', 'Copy-paste configs', 'No collaboration'] },
  ];

  const categories = [...new Set(questions.map(q => q.category))];

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    categories.forEach(cat => {
      const catQuestions = questions.filter(q => q.category === cat);
      const total = catQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      scores[cat] = Math.round((total / (catQuestions.length * 3)) * 100);
    });
    
    const overall = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / categories.length);
    
    let level = 'Initial';
    if (overall >= 80) level = 'Optimized';
    else if (overall >= 60) level = 'Managed';
    else if (overall >= 40) level = 'Defined';
    else if (overall >= 20) level = 'Repeatable';
    
    return { scores, overall, level };
  };

  const results = calculateResults();
  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  if (showResults) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Free Tools
          </Link>
          <h1 className="mb-2 text-3xl font-bold">DevOps Maturity Assessment Results</h1>
          
          <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-600/20 to-emerald-600/20 border border-purple-500/30 p-8 text-center">
            <div className="text-6xl font-bold text-white">{results.overall}%</div>
            <div className="mt-2 text-2xl font-semibold text-purple-400">{results.level}</div>
            <div className="mt-4 text-slate-300">DORA-based maturity across {categories.length} dimensions</div>
          </div>
          
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(cat => (
              <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="text-sm font-medium text-slate-400">{cat}</div>
                <div className="mt-2 text-3xl font-bold text-white">{results.scores[cat]}%</div>
                <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-500" style={{ width: `${results.scores[cat]}%` }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 font-semibold">Priority Improvements</h2>
            <ol className="space-y-2">
              {categories
                .sort((a, b) => results.scores[a] - results.scores[b])
                .slice(0, 3)
                .map((cat, i) => (
                  <li key={cat} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">{i + 1}</span>
                    <span className="font-medium">{cat}</span>
                    <span className="ml-auto text-slate-500">{results.scores[cat]}%</span>
                  </li>
                ))}
            </ol>
          </div>
          
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center">
            <button onClick={() => { setShowResults(false); setAnswers({}); }} className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-100 hover:border-purple-500 transition-colors">Retake Assessment</button>
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
        <h1 className="mb-2 text-3xl font-bold">DevOps Maturity Assessment</h1>
        <p className="mb-8 text-slate-400">DORA-based assessment across Culture, Automation, Lean, Measurement, and Sharing. 10 questions, ~3 minutes.</p>
        
        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-400">Progress</div>
              <div className="text-xl font-bold text-white">{Object.keys(answers).length} / {questions.length}</div>
            </div>
            <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-500" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {categories.map(cat => (
            <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                  {cat[0]}
                </span>
                {cat}
              </h2>
              <div className="space-y-4">
                {questions.filter(q => q.category === cat).map(q => (
                  <div key={q.id}>
                    <label className="mb-2 block text-sm font-medium">{q.question}</label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {q.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => setAnswers({ ...answers, [q.id]: 3 - i })}
                          className={`rounded-lg border-2 px-4 py-3 text-sm font-medium text-left transition-all ${
                            answers[q.id] === 3 - i
                              ? 'border-purple-500 bg-purple-500/20 text-white'
                              : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-purple-500/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => setShowResults(true)}
          disabled={!allAnswered}
          className="w-full rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {allAnswered ? 'View Results' : `Answer ${questions.length - Object.keys(answers).length} more questions`}
        </button>
      </div>
    </div>
  );
}

import Link from 'next/link';