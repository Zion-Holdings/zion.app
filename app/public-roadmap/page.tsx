import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Public Roadmap',
  description: 'Public product and service roadmap from Zion Tech Group.',
  alternates: { canonical: '/public-roadmap/' },

  openGraph: {
    title: 'Public Roadmap',
    description: 'Public product and service roadmap from Zion Tech Group.',
    url: 'https://ziontechgroup.com/public-roadmap/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function PublicRoadmapPage() {
  const items = [
    { quarter: 'Q3 2026', title: 'AI Customer Success Agents', status: 'In Progress' },
    { quarter: 'Q4 2026', title: 'Expanded Micro-SaaS Catalog', status: 'Planned' },
    { quarter: 'Q1 2027', title: 'Compliance Automation Suite', status: 'Planned' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Public Roadmap", description: "Public product and service roadmap from Zion Tech Group.", url: "https://ziontechgroup.com/public-roadmap/}} />
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
      </main>
      <Footer />
    </div>
  );
}
