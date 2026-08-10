import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Zion Tech Group.',
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Acceptance</h2>
          <p className="text-slate-400 text-sm">By using our services, you agree to these terms.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Services</h2>
          <p className="text-slate-400 text-sm">We provide IT, AI, and consulting services under agreed statements of work.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Payment</h2>
          <p className="text-slate-400 text-sm">Payment terms are specified in individual service agreements.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
          <p className="text-slate-400 text-sm">Our liability is limited to the fees paid for the specific service giving rise to the claim.</p>
        </section>
      </div>
    </main>
  
      <Footer />
    </div>);
}
