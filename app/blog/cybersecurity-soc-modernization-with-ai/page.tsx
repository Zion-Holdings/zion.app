'use client';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Cybersecurity SOC modernization with AI | Zion Tech Group',
  description: 'How AI-driven detection, triage, and response reduce mean time to respond.',
  alternates: { canonical: 'https://ziontechgroup.com/blog/cybersecurity-soc-modernization-with-ai/' },
  openGraph: { title: 'Cybersecurity SOC modernization with AI', description: 'How AI-driven detection, triage, and response reduce mean time to respond.', url: 'https://ziontechgroup.com/blog/cybersecurity-soc-modernization-with-ai/', type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Cybersecurity SOC modernization with AI', description: 'How AI-driven detection, triage, and response reduce mean time to respond.' }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Cybersecurity SOC modernization with AI</h1>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">How AI-driven detection, triage, and response reduce mean time to respond.</p>
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
          
      <p>Security operations are changing from manual triage to AI-assisted detection and response. The goal is faster containment with lower analyst fatigue.</p>
      <h2>Key capabilities</h2>
      <ul>
        <li>Normalized telemetry across clouds and endpoints</li>
        <li>Automated enrichment and scoring</li>
        <li>Playbook-driven response with human approval</li>
        <li>Compliance reporting built into workflows</li>
      </ul>
  
        </article>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: 'Cybersecurity SOC modernization with AI',
        description: 'How AI-driven detection, triage, and response reduce mean time to respond.',
        author: { '@type':'Organization', name: 'Zion Tech Group' },
        publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        keywords: 'SOC, cybersecurity AI, incident response',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/cybersecurity-soc-modernization-with-ai/'
      }} />
        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">Get Your Custom Proposal →</Link>
          <p className="text-slate-400 text-sm">📞 <a href="tel:13024640950" className="text-purple-300 hover:underline">+1 302 464 0950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </main>
  );
}
