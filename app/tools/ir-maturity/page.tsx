'use client';

import { useState } from 'react';

export default function IRMaturityTool() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, category: 'Preparation', question: 'Do you have a documented Incident Response Plan (IRP)?', options: ['Tested annually + updated', 'Documented but not tested', 'Draft/partial plan', 'No plan'] },
    { id: 2, category: 'Preparation', question: 'Is there a dedicated IR team with defined roles?', options: ['24/7 team with on-call', 'Part-time team defined', 'Ad hoc assignments', 'No team'] },
    { id: 3, category: 'Preparation', question: 'Are playbooks available for top attack scenarios?', options: ['Playbooks for top 10 scenarios', 'Playbooks for top 3-5', '1-2 playbooks', 'No playbooks'] },
    { id: 4, category: 'Detection', question: 'What is your detection capability?', options: ['EDR + SIEM + threat intel', 'SIEM with rules', 'Basic AV + logs', 'Reactive/user reports'] },
    { id: 5, category: 'Detection', question: 'Mean Time to Detect (MTTD)?', options: ['< 1 hour', '< 1 day', '< 1 week', '> 1 week / unknown'] },
    { id: 6, category: 'Detection', question: 'How are alerts triaged?', options: ['Automated enrichment + tiered triage', 'Manual tier 1 triage', 'Single queue manual', 'No formal triage'] },
    { id: 7, category: 'Analysis', question: 'What forensic capabilities exist?', options: ['Full disk/memory/net forensics', 'Disk + memory', 'Disk only', 'No forensics'] },
    { id: 8, category: 'Analysis', question: 'Is threat intelligence integrated?', options: ['Automated TI feeds + hunting', 'Manual TI lookups', 'Vendor reports only', 'No TI'] },
    { id: 9, category: 'Containment', question: 'What containment actions can be executed automatically?', options: ['Network isolation, account disable, EDR block', 'Network isolation only', 'Manual only', 'No containment'] },
    { id: 10, category: 'Containment', question: 'Can you isolate compromised systems in < 10 min?', options: ['Yes, automated', 'Yes, manual', '30-60 minutes', '> 1 hour'] },
    { id: 11, category: 'Eradication', question: 'How is root cause identification handled?', options: ['Formal RCA with evidence preservation', 'Root cause documented', 'Ad hoc analysis', 'No RCA'] },
    { id: 12, category: 'Eradication', question: 'Are attacker artifacts removed and verified?', options: ['Verified clean + validation', 'Artifacts removed', 'Partial cleanup', 'No verification'] },
    { id: 13, category: 'Recovery', question: 'What is your recovery validation process?', options: ['Staged recovery + integrity verification', 'Restore from backup + test', 'Restore only', 'No validation'] },
    { id: 14, category: 'Recovery', question: 'Is there a communication plan for stakeholders?', options: ['Template-driven, tested', 'Communication templates exist', 'Ad hoc communications', 'No plan'] },
    { id: 15, category: 'Post-Incident', question: 'Are post-incident reviews conducted?', options: ['Always, with action tracking', 'Usually', 'Sometimes', 'Rarely/never'] },
    { id: 16, category: 'Post-Incident', question: 'Are metrics tracked and reported?', options: ['Full KPI dashboard (MTTD, MTTR, etc.)', 'Basic metrics tracked', 'Incident count only', 'No metrics'] },
  ];

  const categories = ['Preparation', 'Detection', 'Analysis', 'Containment', 'Eradication', 'Recovery', 'Post-Incident'];

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    categories.forEach(cat => {
      const catQuestions = questions.filter(q => q.category === cat);
      const total = catQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      scores[cat] = Math.round((total / (catQuestions.length * 3)) * 100);
    });
    
    const overall = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / categories.length);
    
    let maturity = 'Ad Hoc';
    if (overall >= 80) maturity = 'Optimized';
    else if (overall >= 60) maturity = 'Managed';
    else if (overall >= 40) maturity = 'Defined';
    else if (overall >= 20) maturity = 'Repeatable';
    
    return { scores, overall, maturity };
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
          <h1 className="mb-2 text-3xl font-bold">IR Maturity Assessment Results</h1>
          
          <div className="mb-8 rounded-2xl bg-gradient-to-r from-red-600/20 to-amber-600/20 border border-red-500/30 p-8 text-center">
            <div className="text-6xl font-bold text-white">{results.overall}%</div>
            <div className="mt-2 text-2xl font-semibold text-red-400">{results.maturity}</div>
            <div className="mt-4 text-slate-300">NIST SP 800-61 aligned maturity across {categories.length} phases</div>
          </div>
          
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(cat => (
              <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="text-sm font-medium text-slate-400">{cat}</div>
                <div className="mt-2 text-3xl font-bold text-white">{results.scores[cat]}%</div>
                <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-amber-500" style={{ width: `${results.scores[cat]}%` }} />
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
                    <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">{i + 1}</span>
                    <span className="font-medium">{cat}</span>
                    <span className="ml-auto text-slate-500">{results.scores[cat]}%</span>
                  </li>
                ))}
            </ol>
          </div>
          
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center">
            <button onClick={() => { setShowResults(false); setAnswers({}); }} className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-100 hover:border-red-500 transition-colors">Retake Assessment</button>
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-400">Free Assessment</p>
          <h1 className="mb-4 text-3xl font-bold">Incident Response Maturity Assessment</h1>
          <p className="text-slate-400">
            16 questions aligned with NIST SP 800-61 (Preparation → Post-Incident). 
            Takes ~4 minutes. Get a maturity score, phase breakdown, and priority improvements.
          </p>
        </div>
        
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-400">Progress</div>
              <div className="text-xl font-bold text-white">{Object.keys(answers).length} / {questions.length}</div>
            </div>
            <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-amber-500" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {categories.map(cat => (
            <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">
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
                              ? 'border-red-500 bg-red-500/20 text-white shadow-red-500/20'
                              : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-red-500/50'
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
          className="w-full rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {allAnswered ? 'View Maturity Report' : `Answer ${questions.length - Object.keys(answers).length} more questions`}
        </button>
      </div>
    </div>
  );
}

import Link from 'next/link';