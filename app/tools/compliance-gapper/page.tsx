'use client';

import { useState } from 'react';

export default function ComplianceGapperTool() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const frameworks = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS'];
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['SOC 2 Type II', 'ISO 27001']);

  const questions = [
    { id: 1, category: 'Governance', question: 'Are security policies documented, approved, and reviewed annually?', options: ['Yes, with annual review', 'Yes, reviewed ad hoc', 'Partial documentation', 'No policies'] },
    { id: 2, category: 'Governance', question: 'Is there a designated security officer / DPO?', options: ['Full-time CISO/DPO', 'Part-time assignment', 'Shared responsibility', 'No designated role'] },
    { id: 3, category: 'Risk', question: 'Is there a formal risk assessment process?', options: ['Annual formal assessment', 'Periodic assessments', 'Ad hoc risk reviews', 'No risk process'] },
    { id: 4, category: 'Risk', question: 'Are vendor/third-party risks assessed?', options: ['All vendors assessed + contracts', 'Critical vendors only', 'Basic questionnaires', 'No vendor assessment'] },
    { id: 5, category: 'Access', question: 'Is MFA enforced for all remote/admin access?', options: ['Enforced everywhere', 'Admin only', 'Some systems', 'No MFA'] },
    { id: 6, category: 'Access', question: 'Is access reviewed quarterly (least privilege)?', options: ['Automated quarterly reviews', 'Manual quarterly', 'Annual reviews', 'No regular reviews'] },
    { id: 7, category: 'Data', question: 'Is data classified and labeled?', options: ['Full classification + DLP', 'Partial classification', 'Basic labels only', 'No classification'] },
    { id: 8, category: 'Data', question: 'Is encryption enforced at rest and in transit?', options: ['AES-256 everywhere + TLS 1.2+', 'Encryption at rest only', 'Partial encryption', 'No encryption'] },
    { id: 9, category: 'Monitoring', question: 'Is centralized logging with 1+ year retention?', options: ['Centralized SIEM + 1yr+', 'Centralized logs, < 1yr', 'Decentralized logs', 'Minimal logging'] },
    { id: 10, category: 'Monitoring', question: 'Are security events monitored 24/7?', options: ['24/7 SOC + alerting', 'Business hours monitoring', 'Periodic log review', 'No monitoring'] },
    { id: 11, category: 'Incident', question: 'Is there a tested incident response plan?', options: ['Tested annually', 'Documented, not tested', 'Draft plan', 'No plan'] },
    { id: 12, category: 'Incident', question: 'Are breach notification procedures defined?', options: ['Defined + tested', 'Documented', 'Basic awareness', 'No procedures'] },
    { id: 13, category: 'Training', question: 'Is security awareness training mandatory and tracked?', options: ['Annual + phishing tests', 'Annual training only', 'Onboarding only', 'No training'] },
    { id: 14, category: 'Training', question: 'Are developers trained in secure coding?', options: ['Regular secure code training', 'Annual training', 'Onboarding only', 'No training'] },
    { id: 15, category: 'Ops', question: 'Is vulnerability scanning automated and continuous?', options: ['Continuous + SAST/DAST', 'Monthly scans', 'Quarterly scans', 'Ad hoc/none'] },
    { id: 16, category: 'Ops', question: 'Is patch management automated with SLAs?', options: ['Automated + SLA tracking', 'Semi-automated', 'Manual with tracking', 'No patch management'] },
  ];

  const categories = ['Governance', 'Risk', 'Access', 'Data', 'Monitoring', 'Incident', 'Training', 'Ops'];

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    categories.forEach(cat => {
      const catQuestions = questions.filter(q => q.category === cat);
      if (catQuestions.length === 0) return;
      const total = catQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      scores[cat] = Math.round((total / (catQuestions.length * 3)) * 100);
    });
    
    const overall = categories.filter(c => scores[c] !== undefined).length > 0
      ? Math.round(Object.values(scores).filter(v => v !== undefined).reduce((a, b) => a + b, 0) / Object.values(scores).filter(v => v !== undefined).length)
      : 0;
    
    let readiness = 'Not Ready';
    if (overall >= 80) readiness = 'Audit Ready';
    else if (overall >= 60) readiness = 'Near Ready';
    else if (overall >= 40) readiness = 'Significant Gaps';
    else if (overall >= 20) readiness = 'Early Stage';
    
    return { scores, overall, readiness };
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
          <h1 className="mb-2 text-3xl font-bold">Compliance Gap Assessment Results</h1>
          <p className="mb-4 text-slate-400">Target frameworks: {selectedFrameworks.join(', ')}</p>
          
          <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 p-8 text-center">
            <div className="text-6xl font-bold text-white">{results.overall}%</div>
            <div className="mt-2 text-2xl font-semibold text-blue-400">{results.readiness}</div>
            <div className="mt-4 text-slate-300">Compliance readiness across {categories.length} domains</div>
          </div>
          
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.filter(c => results.scores[c] !== undefined).map(cat => (
              <div key={cat} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="text-sm font-medium text-slate-400">{cat}</div>
                <div className="mt-2 text-3xl font-bold text-white">{results.scores[cat]}%</div>
                <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${results.scores[cat]}%` }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 font-semibold">Priority Gaps</h2>
            <ol className="space-y-2">
              {categories
                .filter(c => results.scores[c] !== undefined && results.scores[c] < 60)
                .sort((a, b) => (results.scores[a] || 0) - (results.scores[b] || 0))
                .slice(0, 3)
                .map((cat, i) => (
                  <li key={cat} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">{i + 1}</span>
                    <span className="font-medium">{cat}</span>
                    <span className="ml-auto text-slate-500">{results.scores[cat]}%</span>
                  </li>
                ))}
            </ol>
          </div>
          
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center">
            <button onClick={() => { setShowResults(false); setAnswers({}); }} className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-100 hover:border-blue-500 transition-colors">Retake Assessment</button>
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Free Assessment</p>
          <h1 className="mb-4 text-3xl font-bold">Compliance Gap Assessment</h1>
          <p className="text-slate-400">
            16 questions across 8 domains. Select target frameworks, get gap scores, 
            and prioritized remediation roadmap. Aligned with SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS.
          </p>
        </div>

        <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <label className="mb-2 block text-sm font-medium">Target Frameworks</label>
          <div className="flex flex-wrap gap-2">
            {frameworks.map(fw => (
              <label key={fw} className={`rounded-lg border-2 px-4 py-2 text-sm font-medium cursor-pointer transition-all ${
                selectedFrameworks.includes(fw)
                  ? 'border-blue-500 bg-blue-500/20 text-white'
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500/50'
              }`}>
                <input type="checkbox" checked={selectedFrameworks.includes(fw)} onChange={e => e.target.checked ? setSelectedFrameworks([...selectedFrameworks, fw]) : setSelectedFrameworks(selectedFrameworks.filter(f => f !== fw))} className="mr-2" />
                {fw}
              </label>
            ))}
          </div>
        </div>
        
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-400">Progress</div>
              <div className="text-xl font-bold text-white">{Object.keys(answers).length} / {questions.length}</div>
            </div>
            <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
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
                              ? 'border-blue-500 bg-blue-500/20 text-white shadow-blue-500/20'
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
          {allAnswered ? 'View Gap Report' : `Answer ${questions.length - Object.keys(answers).length} more questions`}
        </button>
      </div>
    </div>
  );
}

import Link from 'next/link';