'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Legal AI Solutions | Zion Tech Group',
  description: 'AI-powered legal technology for contract analysis, compliance monitoring, e-discovery, and legal research automation.',
};

const legalServices = [
  { id: 'ai-legal-contract-analyzer', title: 'AI Legal Contract Analyzer', href: '/services/ai-legal-contract-analyzer', icon: '📄', pricing: 'From $149/mo', description: 'AI-powered contract review and analysis with automated risk scoring and redline suggestions.' },
  { id: 'ai-compliance-monitor', title: 'AI Compliance Monitor', href: '/services/ai-compliance-monitor', icon: '📜', pricing: 'Custom', description: 'Automated compliance monitoring, AML detection, and regulatory reporting for legal teams.' },
  { id: 'ai-legal-research', title: 'Legal Research Assistant', href: '/services/ai-legal-research', icon: '🔍', pricing: 'From $99/mo', description: 'AI-powered legal research with case law analysis and precedent identification.' },
  { id: 'ai-ediscovery', title: 'E-Discovery Automation', href: '/services/ai-ediscovery', icon: '🗂️', pricing: 'Custom', description: 'Automated document review, categorization, and privilege detection for litigation.' },
];

export default function LegalIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(124,58,237,0.15),rgba(165,130,250,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm mb-6">
            <span className="text-green-400">●</span> LegalTech Ready
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">AI Solutions for Legal</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Contract analysis, compliance, and e-discovery automation for modern law firms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">⚖️ Book Legal Consultation</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Legal AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AI-powered tools for contract review and compliance.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-violet-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-violet-500/20 text-violet-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Legal Practice?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation for your law firm.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}