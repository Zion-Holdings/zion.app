import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Book a free AI strategy consultation with Zion Tech Group experts.',
  alternates: { canonical: '/free-consultation/' },
};

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Consultation</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Get a personalized AI and IT strategy session with our team.
          </p>
          <div className="glass-card p-6 mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">What we’ll cover</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>AI opportunity mapping</li>
              <li>Implementation roadmap</li>
              <li>ROI estimate and timeline</li>
              <li>Compliance and security alignment</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/contact/" className="btn-primary">Book Consultation</Link>
            <Link href="/services/" className="btn-secondary">Browse Services</Link>
          </div>
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
    </div>
  );
}
