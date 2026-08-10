import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Public Roadmap',
  description: 'Public product and service roadmap from Zion Tech Group.',
  alternates: { canonical: '/public-roadmap/' },
};

export default function PublicRoadmapPage() {
  const items = [
    { quarter: 'Q3 2026', title: 'AI Customer Success Agents', status: 'In Progress' },
    { quarter: 'Q4 2026', title: 'Expanded Micro-SaaS Catalog', status: 'Planned' },
    { quarter: 'Q1 2027', title: 'Compliance Automation Suite', status: 'Planned' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Public Roadmap</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            See what we’re building next and track delivery milestones.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <p className="text-slate-300 text-sm mb-2">{item.quarter}</p>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.status}</p>
              </div>
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
    </div>
  );
}
