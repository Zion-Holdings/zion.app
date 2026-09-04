'use client';

import { useState } from 'react';

export default function CloudMigrationReadinessTool() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, category: 'Business', question: 'What is the primary driver for cloud migration?', options: ['Cost optimization', 'Agility/speed', 'Scalability needs', 'Data center exit', 'Not decided'] },
    { id: 2, category: 'Business', question: 'Is there executive sponsorship and budget approval?', options: ['Full sponsorship + budget', 'Sponsorship, budget pending', 'Initial talks only', 'No sponsorship'] },
    { id: 3, category: 'Technical', question: 'What percentage of applications are cloud-ready (12-factor, stateless)?', options: ['> 80%', '50-80%', '20-50%', '< 20%'] },
    { id: 4, category: 'Technical', question: 'How is application dependency mapping done?', options: ['Automated discovery complete', 'Partial mapping done', 'Manual inventory exists', 'No dependency map'] },
    { id: 5, category: 'Technical', question: 'What is your containerization adoption?', options: ['Most apps containerized', 'Some apps containerized', 'Planning containerization', 'No containers'] },
    { id: 6, category: 'Data', question: 'How is data gravity addressed for large datasets?', options: ['Hybrid/multi-cloud strategy defined', 'Data migration plan exists', 'Evaluating options', 'No plan'] },
    { id: 7, category: 'Data', question: 'What is your compliance/data residency requirement?', options: ['Flexible - any region', 'Specific regions required', 'On-prem only for some data', 'Not assessed'] },
    { id: 8, category: 'Security', question: 'What is your cloud security posture?', options: ['CSPM/CWPP deployed', 'Partial cloud security tools', 'On-prem tools only', 'No cloud security'] },
    { id: 9, category: 'Security', question: 'How are secrets and keys managed?', options: ['Centralized vault (HashiCorp/AWS/Azure)', 'Some secrets management', 'Manual/environment vars', 'No management'] },
    { id: 10, category: 'Operations', question: 'What is your observability maturity?', options: ['Full stack observability', 'Logs + metrics', 'Basic monitoring', 'Reactive only'] },
    { id: 11, category: 'Operations', question: 'How are incidents managed in cloud?', options: ['Automated runbooks + SRE', 'Runbooks exist', 'Ad hoc response', 'No process'] },
    { id: 12, category: 'People', question: 'What is team cloud skill level?', options: ['Certified architects + engineers', 'Some certified staff', 'Self-taught basics', 'No cloud experience'] },
    { id: 12, category: 'People', question: 'Is there a Cloud Center of Excellence (CCoE)?', options: ['Active CCoE', 'Forming CCoE', 'Planned', 'No CCoE'] },
  ];

  const categories = ['Business', 'Technical', 'Data', 'Security', 'Operations', 'People'];

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    categories.forEach(cat => {
      const catQuestions = questions.filter(q => q.category === cat);
      const total = catQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      scores[cat] = Math.round((total / (catQuestions.length * 3)) * 100);
    });
    
    const overall = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / categories.length);
    
    let phase = 'Assess';
    if (overall >= 75) phase = 'Optimize';
    else if (overall >= 50) phase = 'Migrate';
    else if (overall >= 25) phase = 'Plan';
    
    return { scores, overall, phase };
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
          <h1 className="mb-2 text-3xl font-bold">Cloud Migration Readiness Results</h1>
          
          <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-8 text-center">
            <div className="text-6xl font-bold text-white">{results.overall}%</div>
            <div className="mt-2 text-2xl font-semibold text-blue-400">Phase: {results.phase}</div>
            <div className="mt-4 text-slate-300">Your organization's readiness across 6 dimensions</div>
          </div>
          
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(cat => (
              <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="text-sm font-medium text-slate-400">{cat}</div>
                <div className="mt-2 text-3xl font-bold text-white">{results.scores[cat]}%</div>
                <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${results.scores[cat]}%` }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 font-semibold">Recommended Migration Approach</h2>
            <div className="space-y-2">
              {results.phase === 'Assess' && (
                <>
                  <p className="text-slate-300">Start with portfolio assessment and dependency mapping. Build business case.</p>
                  <p className="text-slate-400 text-sm">Typical duration: 2-4 weeks for assessment phase</p>
                </>
              )}
              {results.phase === 'Plan' && (
                <>
                  <p className="text-slate-300">Design target architecture, select migration patterns (6 Rs), pilot with low-risk apps.</p>
                  <p className="text-slate-400 text-sm">Typical duration: 4-8 weeks for planning</p>
                </>
              )}
              {results.phase === 'Migrate' && (
                <>
                  <p className="text-slate-300">Execute migration waves. Start with rehost/replatform, move to refactor. Automate CI/CD.</p>
                  <p className="text-slate-400 text-sm">Typical duration: Months, wave-based approach</p>
                </>
              )}
              {results.phase === 'Optimize' && (
                <>
                  <p className="text-slate-300">Focus on cost optimization, performance tuning, security hardening, and cloud-native capabilities.</p>
                  <p className="text-slate-400 text-sm">Ongoing continuous improvement</p>
                </>
              )}
            </div>
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
        <h1 className="mb-2 text-3xl font-bold">Cloud Migration Readiness</h1>
        <p className="mb-8 text-slate-400">Assess your organization across 6 dimensions. 12 questions, ~3 minutes.</p>
        
        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-400">Progress</div>
              <div className="text-xl font-bold text-white">{Object.keys(answers).length} / {questions.length}</div>
            </div>
            <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {categories.map(cat => (
            <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
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
                              ? 'border-blue-500 bg-blue-500/20 text-white'
                              : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500/50'
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
          className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {allAnswered ? 'View Readiness Report' : `Answer ${questions.length - Object.keys(answers).length} more questions`}
        </button>
      </div>
    </div>
  );
}

import Link from 'next/link';