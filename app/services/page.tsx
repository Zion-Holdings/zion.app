<<<<<<< HEAD
export const metadata = {
  title: 'IT & AI Services | Zion Tech Group',
  description: 'Managed IT, AI implementation, cybersecurity, cloud, and data analytics services.',
  alternates: { canonical: 'https://ziontechgroup.com/services/' },
  openGraph: { title: 'Zion Tech Group Services', url: 'https://ziontechgroup.com/services/' }
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="mb-6 text-slate-300">Production-ready AI and IT services with measurable outcomes.</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>Managed IT</li>
        <li>AI Implementation</li>
        <li>Cybersecurity</li>
        <li>Cloud & Data</li>
      </ul>
      <div className="mt-8">
        <a href="/contact/" className="inline-block rounded bg-purple-600 px-4 py-2 font-semibold">Talk to us</a>
      </div>
    </main>
  );
}
=======
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
    </main>
  );
}
>>>>>>> c89101ceb6175f0e09522b52352eb3d5c4182e81
