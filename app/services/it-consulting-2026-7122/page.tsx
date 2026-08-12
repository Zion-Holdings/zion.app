import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'IT Consulting | Zion Tech Group',
  description: 'End-to-end it consulting services: assessment, deployment, and managed operations.',
  alternates: { canonical: '/services/it-consulting-2026-7122/' },

  openGraph: {
    title: 'IT Consulting | Zion Tech Group',
    description: 'End-to-end it consulting services: assessment, deployment, and managed operations.',
    url: 'https://ziontechgroup.com/services/it-consulting-2026-7122/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
  twitter: { card: 'summary_large_image', title: 'IT Consulting | Zion Tech Group', description: 'End-to-end it consulting services: assessment, deployment, and managed operations.' }};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={{@context: "https://schema.org", @type: "Service", name: "IT Consulting | Zion Tech Group", description: "End-to-end it consulting services: assessment, deployment, and managed operations.", url: "https://ziontechgroup.com/services/it-consulting-2026-7122/}} />
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">IT Consulting</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
          End-to-end it consulting services: assessment, deployment, and managed operations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Implementation', href: '/contact', desc: 'Production-ready deployment with governance.' },
            { title: 'Managed Support', href: '/contact', desc: '24/7 monitoring and incident response.' },
            { title: 'Automation', href: '/contact', desc: 'Workflow automation with measurable outcomes.' }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="glass-card p-6 block hover:border-purple-500/40 transition-colors">
              <h2 className="text-white font-semibold mb-2">{item.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              <span className="text-purple-400 text-sm mt-4 inline-block">Contact us →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
