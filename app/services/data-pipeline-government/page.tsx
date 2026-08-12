import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Professional Data Pipeline Solutions | Zion Tech Group',
  description: 'Professional data pipeline solutions for government. Get expert implementation, support, and results.',
  alternates: { canonical: '/services/data-pipeline/government/' },

  openGraph: {
    title: 'Professional Data Pipeline Solutions | Zion Tech Group',
    description: 'Professional data pipeline solutions for government. Get expert implementation, support, and results.',
    url: 'https://ziontechgroup.com/services/data-pipeline/government/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
  twitter: { card: 'summary_large_image', title: 'Professional Data Pipeline Solutions | Zion Tech Group', description: 'Professional data pipeline solutions for government. Get expert implementation, support, and results.' }};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={{@context: "https://schema.org", @type: "Service", name: "Professional Data Pipeline Solutions | Zion Tech Group", description: "Professional data pipeline solutions for government. Get expert implementation, support, and results.", url: "https://ziontechgroup.com/services/data-pipeline-government/}} />
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Professional Data Pipeline Solutions</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">Professional data pipeline solutions for government. Get expert implementation, support, and results.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="glass-card p-6">
            <h3 className="text-white font-semibold mb-2">Benefits</h3>
            <ul className="text-slate-300 text-sm space-y-2 list-disc pl-4">
              <li>Reduce government costs by 30-50%</li>
          <li>Improve government efficiency by 40%</li>
          <li>Scale data pipeline without infrastructure limits</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white font-semibold mb-2">Implementation</h3>
            <p className="text-slate-300 text-sm">Typical timeline: 3 weeks</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white font-semibold mb-2">ROI Potential</h3>
            <p className="text-slate-300 text-sm">44% cost reduction</p>
          </div>
        </div>
        <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>
      </div>
    </main>
  );
}
