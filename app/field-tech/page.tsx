import Link from 'next/link';

export const metadata = {
  title: 'Field Tech Recruiting | Zion Tech Group',
  description: 'Hire vetted field technicians fast through Zion Tech Group. We source, qualify, and deliver field-ready IT support talent on demand.',
  alternates: { canonical: '/field-tech/' },
};

export default function FieldTechRecruitingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Field Technician Recruiting</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Fast, reliable sourcing of field-ready IT and AI support talent for operations, MSPs, and support teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="/contact/" className="btn-primary text-lg">Request Candidates</Link>
            <Link href="/field-tech-rate-card/" className="btn-secondary text-lg">View Rate Card</Link>
            <Link href="/ai-it-consulting/" className="btn-secondary text-lg">AI & IT Consulting</Link>
            <Link href="/services/" className="btn-secondary text-lg">Our Services</Link>
          </div>
        </header>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Why Zion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Verified talent</h3>
              <p className="text-slate-400 text-sm">Pre-screened field techs with hands-on support, networking, and troubleshooting experience.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Fast delivery</h3>
              <p className="text-slate-400 text-sm">Shortlists and interview-ready profiles within days, not weeks.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Flexible engagement</h3>
              <p className="text-slate-400 text-sm">Staff augmentation that fits your workflow: project-based, retainer, or on-demand.</p>
            </div>
          </div>
        </section>
        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to strengthen your field team?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Tell us your requirements and we’ll deliver qualified candidates fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg">Talk to Us</Link>
            <a href="tel:+13024640950" className="btn-secondary text-lg">Call +1 302 464 0950</a>
          </div>
        </section>
      </div>
    </main>
  );
}
