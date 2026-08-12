'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Solutions',
  description: 'Solutions from Zion Tech Group.',
  alternates: { canonical: '/app/solutions/' },
};


const INDUSTRIES = [
  { name: 'Healthcare', slug: 'healthcare', desc: 'HIPAA-ready AI, patient data automation, and secure cloud infrastructure.' },
  { name: 'Finance', slug: 'finance', desc: 'Fraud detection, compliance automation, and low-latency trading infrastructure.' },
  { name: 'Manufacturing', slug: 'manufacturing', desc: 'IoT, predictive maintenance, and supply-chain automation.' },
  { name: 'Retail', slug: 'retail', desc: 'Personalization, inventory AI, and omnichannel operations.' },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Solutions", description: "Solutions from Zion Tech Group.", url: "https://ziontechgroup.com/app/solutions/}} />
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
    </main>
  );
}