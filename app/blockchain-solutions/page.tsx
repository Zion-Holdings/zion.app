import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Solutions',
  description: 'Enterprise blockchain, smart contracts, Web3 operations, and tokenized infrastructure.',
  alternates: { canonical: '/blockchain-solutions' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Blockchain Solutions</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">{'🔗'}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blockchain Solutions</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">Enterprise blockchain strategy, smart contract development, and Web3 infrastructure.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[<span key="Smart Contracts" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">Smart Contracts</span>,<span key="Web3" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">Web3</span>,<span key="Tokenization" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">Tokenization</span>,<span key="DLT" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">DLT</span>].map(tag => tag)}
          </div>
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4 inline-block">⚡ Get Your Custom Proposal →</Link>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[<div className="glass-card"><span className="text-3xl block mb-3">🕸️</span><h3 className="text-lg font-semibold text-white mb-2">Smart Contract Development</h3><p className="text-slate-400 text-sm">Secure, audited smart contracts for Ethereum, Solana, and enterprise chains.</p></div>,<div className="glass-card"><span className="text-3xl block mb-3">🏛️</span><h3 className="text-lg font-semibold text-white mb-2">Enterprise DLT</h3><p className="text-slate-400 text-sm">Permissioned blockchain networks for supply chain, finance, and identity.</p></div>,<div className="glass-card"><span className="text-3xl block mb-3">🔐</span><h3 className="text-lg font-semibold text-white mb-2">Web3 Security</h3><p className="text-slate-400 text-sm">Security audits, key management, and compliance for decentralized systems.</p></div>].map((item, i) => <div key={i}>{item}</div>)}
          </div>
        </div>

        {/* Why Zion Tech Group */}
        <div className="mb-16 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Zion Tech Group</h2>
          <ul className="space-y-3">
            {[<li className="flex items-start gap-3 text-slate-300"><span className="text-purple-400 mt-1 shrink-0">✓</span><span className="text-sm">Production-grade blockchain expertise with real deployments</span></li>,<li className="flex items-start gap-3 text-slate-300"><span className="text-purple-400 mt-1 shrink-0">✓</span><span className="text-sm">Regulatory-compliant tokenization and smart contract frameworks</span></li>,<li className="flex items-start gap-3 text-slate-300"><span className="text-purple-400 mt-1 shrink-0">✓</span><span className="text-sm">End-to-end delivery from PoC to mainnet and managed operations</span></li>].map((item, i) => <div key={i}>{item}</div>)}
          </ul>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Industries We Serve</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-6">
            We have deployed these solutions across organisations in Supply Chain, Financial Services, Government, Healthcare, Real Estate.
          </p>
        </div>

        {/* CTA */}
        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build This Together</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need a scoped proof-of-concept or a full enterprise engagement, we will tailor a plan that fits your timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">⚡ Get Custom Proposal</Link>
            <Link href="/contact/" className="btn-secondary text-lg px-10 py-4">Talk to an Expert</Link>
          </div>
        </section>
      </div>
    </main>
  
      <Footer />
    </div>);
}
