import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Managed IT, AI automation, cybersecurity, cloud, and consulting services from Zion Tech Group.',
  alternates: { canonical: '/services/' },
};

const SERVICES = [
  { title: 'Managed IT', slug: 'managed-it', desc: '24/7 monitoring, helpdesk, and endpoint management.' },
  { title: 'Cybersecurity', slug: 'cybersecurity', desc: 'SOC, threat detection, and compliance automation.' },
  { title: 'Cloud', slug: 'cloud', desc: 'AWS/GCP/Azure migration, FinOps, and managed cloud.' },
  { title: 'AI Automation', slug: 'ai-automation', desc: 'LLM integration, RAG, and agentic workflows.' },
  { title: 'Networking', slug: 'networking', desc: 'SD-WAN, VPN, structured cabling, and Wi-Fi optimization.' },
  { title: 'Consulting', slug: 'consulting', desc: 'Architecture, roadmap, and digital transformation.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
          <p className="text-slate-400 text-lg max-w-2xl">Enterprise IT, AI, and cybersecurity services built for performance and compliance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="glass-card group hover:border-purple-500/40 transition-colors block">
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
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