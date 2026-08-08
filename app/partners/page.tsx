import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Partner with Zion Tech Group. Technology alliances, resellers, and referral partnerships.',
  alternates: { canonical: '/partners/' },
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partners</h1>
          <p className="text-xl text-slate-300 leading-relaxed">Build with Zion Tech Group through technology alliances, reseller programs, and referral partnerships.</p>
        </div>
        <section className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-slate-400 mb-6">We collaborate with technology providers, MSPs, and system integrators to deliver joint solutions.</p>
            <Link href="/contact/" className="btn-primary text-lg px-10 py-4 inline-block">Partner Inquiry →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
