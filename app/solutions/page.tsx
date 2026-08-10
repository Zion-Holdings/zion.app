import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
'use client';

import Link from 'next/link';

const INDUSTRIES = [
  { name: 'Healthcare', slug: 'healthcare', desc: 'HIPAA-ready AI, patient data automation, and secure cloud infrastructure.' },
  { name: 'Finance', slug: 'finance', desc: 'Fraud detection, compliance automation, and low-latency trading infrastructure.' },
  { name: 'Manufacturing', slug: 'manufacturing', desc: 'IoT, predictive maintenance, and supply-chain automation.' },
  { name: 'Retail', slug: 'retail', desc: 'Personalization, inventory AI, and omnichannel operations.' },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Solutions</h1>
          <p className="text-xl text-slate-300 leading-relaxed">Industry-specific AI and IT solutions tailored to your business.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.slug} href={`/services/${ind.slug}/`} className="glass-card">
              <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
              <p className="text-slate-400 text-sm">{ind.desc}</p>
              <span className="text-purple-400 text-xs mt-3 inline-block">Learn more →</span>
            </Link>
          ))}
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
    </div>);
}