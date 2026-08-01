import { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Field Tech Readiness Assessment | Zion Tech Group',
  description: 'Assess your field operations readiness for AI-assisted IT support. Get a quick score and tailored recommendations from Zion Tech Group.',
  alternates: { canonical: '/field-tech-readiness-assessment/' },
};

export default function FieldTechReadinessAssessmentPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 'coverage', text: 'Do you need same-day or after-hours field coverage?' },
    { id: 'scale', text: 'Is your field team growing faster than you can hire?' },
    { id: 'ai', text: 'Are you using AI-assisted dispatch or ticketing today?' },
    { id: 'retention', text: 'Is technician turnover impacting service quality?' },
  ];

  const toggle = (id) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const yesCount = questions.filter((q) => answers[q.id]).length;
  const score = Math.round((yesCount / questions.length) * 100);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Field Tech Readiness Assessment</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Answer 4 quick questions and get a readiness score plus tailored next steps.
          </p>
        </header>

        <section className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {questions.map((q) => (
              <button
                key={q.id}
                onClick={() => toggle(q.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  answers[q.id]
                    ? 'border-purple-500/60 bg-purple-500/10'
                    : 'border-slate-700/60 bg-slate-900/50 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">{q.text}</p>
                  <span className="text-sm text-slate-400">{answers[q.id] ? 'Yes' : 'No'}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                className="btn-primary text-base px-8 py-3"
              >
                See My Readiness Score
              </button>
            ) : (
              <div className="space-y-4">
                <div className="text-5xl font-bold text-white">{score}%</div>
                <p className="text-slate-300">
                  {score >= 75
                    ? 'Your operations are ready for AI-assisted field support.'
                    : score >= 50
                    ? 'You have good foundations; a few upgrades will unlock major gains.'
                    : 'This is a strong signal that managed field augmentation can help.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/field-tech/" className="btn-primary text-lg">Explore Field Tech Recruiting</Link>
                  <Link href="/contact/" className="btn-secondary text-lg">Talk to an Expert</Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
