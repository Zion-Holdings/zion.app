'use client';

import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & IT Solutions — Zion Tech Group',
  description: 'Discover AI and IT solutions that automate your business processes, optimize operations, and drive innovation. From AI chatbots to cybersecurity, we build what you need.',
  alternates: { canonical: '/solutions/' },
};


const INDUSTRIES = [
  { name: 'Healthcare', slug: 'healthcare', desc: 'HIPAA-ready AI, patient data automation, and secure cloud infrastructure.', icon: '🏥', more: 'AI-powered diagnostics, patient data management, secure telemedicine platforms, and compliance automation.' },
  { name: 'Finance', slug: 'finance', desc: 'Fraud detection, compliance automation, and low-latency trading infrastructure.', icon: '💰', more: 'Real-time fraud detection, automated compliance reporting, algorithmic trading infrastructure, and risk analytics.' },
  { name: 'Manufacturing', slug: 'manufacturing', desc: 'IoT, predictive maintenance, and supply-chain automation.', icon: '🏭', more: 'IoT sensor networks, predictive maintenance using ML, supply chain optimization, and quality control automation.' },
  { name: 'Retail', slug: 'retail', desc: 'Personalization, inventory AI, and omnichannel operations.', icon: '🛍️', more: 'Personalized recommendations, intelligent inventory management, omnichannel customer experience, and demand forecasting.' },
];

export default function SolutionsPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industry Solutions</h1>
          <p className="text-xl text-slate-300 leading-relaxed">Tailored AI and IT solutions for your specific industry. We combine deep domain expertise with cutting-edge technology to solve real business challenges.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.slug} href={`/services/${ind.slug}/`} className="glass-card group hover:border-purple-500/40 transition-colors block">
              <span className="text-3xl mb-3 block">{ind.icon}</span>
              <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{ind.name}</h3>
              <p className="text-slate-400 text-sm mb-2">{ind.desc}</p>
              <p className="text-slate-500 text-xs">{ind.more}</p>
              <span className="text-purple-400 text-xs mt-3 inline-block">Explore →</span>
            </Link>
          ))}
        </div>
      </PageWrapper>
  );
}
