'use client';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Zero trust architecture for distributed IT teams | Zion Tech Group',
  description: 'Identity, device trust, and access controls for remote and hybrid environments.',
  alternates: { canonical: 'https://ziontechgroup.com/blog/zero-trust-architecture-for-distributed-it-teams/' },
  openGraph: { title: 'Zero trust architecture for distributed IT teams', description: 'Identity, device trust, and access controls for remote and hybrid environments.', url: 'https://ziontechgroup.com/blog/zero-trust-architecture-for-distributed-it-teams/', type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Zero trust architecture for distributed IT teams', description: 'Identity, device trust, and access controls for remote and hybrid environments.' }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Zero trust architecture for distributed IT teams</h1>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">Identity, device trust, and access controls for remote and hybrid environments.</p>
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
          <p>Security operations are changing from manual triage to AI-assisted detection and response. The goal is faster containment with lower analyst fatigue.</p>
      <h2>Key capabilities</h2><ul><li>Normalized telemetry across clouds and endpoints</li><li>Automated enrichment and scoring</li><li>Playbook-driven response with human approval</li><li>Compliance reporting built into workflows</li></ul>
        </article>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: 'Zero trust architecture for distributed IT teams',
        description: 'Identity, device trust, and access controls for remote and hybrid environments.',
        author: { '@type':'Organization', name: 'Zion Tech Group' },
        publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        keywords: 'zero trust, remote IT, identity security',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/zero-trust-architecture-for-distributed-it-teams/'
      }} />
        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">Get Your Custom Proposal →</Link>
          <p className="text-slate-400 text-sm">📞 <a href="tel:13024640950" className="text-purple-300 hover:underline">+1 302 464 0950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </main>
  );
}
