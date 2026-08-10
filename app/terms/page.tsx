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
    <section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
<h2 className="text-xl font-bold text-white mb-2">Why it matters</h2>
<p className="text-slate-300">This page is part of Zion Tech Group's core catalog. It connects visitors to the right service, tool, or workflow without leaving the site.</p>
<ul className="list-disc pl-6 text-slate-300 space-y-1">
<li>Clear next steps aligned to the current page topic</li>
<li>Direct paths to contact, proposal, or demo flows</li>
<li>Consistent navigation and footer on every route</li>
</ul>
</section>
</main>
  
      <Footer />
    </div>);
}
