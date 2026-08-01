import Link from 'next/link';

export const metadata = {
  title: 'Field Tech Readiness Assessment | Zion Tech Group',
  description: 'Assess your field operations readiness for AI-assisted IT support. Get a quick score and tailored recommendations from Zion Tech Group.',
  alternates: { canonical: '/field-tech-readiness-assessment/' },
};

export default function FieldTechReadinessAssessmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Field Tech Readiness Assessment</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Review 4 quick questions to gauge your readiness for AI-assisted field support.
          </p>
        </header>

        <section className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { q: 'Do you need same-day or after-hours field coverage?' },
              { q: 'Is your field team growing faster than you can hire?' },
              { q: 'Are you using AI-assisted dispatch or ticketing today?' },
              { q: 'Is technician turnover impacting service quality?' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-700/60 bg-slate-900/50">
                <p className="text-white font-medium">{item.q}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="text-5xl font-bold text-white mb-4">~2 min</div>
            <p className="text-slate-300 mb-8">Answer these 4 questions and we’ll send a readiness score plus recommended next steps.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/field-tech/" className="btn-primary text-lg">Explore Field Tech Recruiting</Link>
              <Link href="/contact/" className="btn-secondary text-lg">Talk to an Expert</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
