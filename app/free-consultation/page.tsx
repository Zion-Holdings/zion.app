import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Consultation',
  description: 'Request a free consultation with Zion Tech Group for AI, IT, and security solutions.',
  alternates: { canonical: '/free-consultation/' },
};

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Consultation</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Tell us about your goals and we will recommend a practical AI or IT roadmap.
          </p>
        </div>
        <section className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What to expect</h2>
            <p className="text-slate-400 mb-6">
              A short discovery call focused on outcomes, constraints, and timeline. You will leave with a
              prioritized action plan, not a generic pitch deck.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
              <li>Business goal and success metrics</li>
              <li>Current systems and integration points</li>
              <li>Risk, compliance, and data-handling requirements</li>
              <li>Realistic delivery timeline and resourcing</li>
            </ul>
            <Link href="/contact/" className="btn-primary text-lg px-10 py-4 inline-block">
              Book Your Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
