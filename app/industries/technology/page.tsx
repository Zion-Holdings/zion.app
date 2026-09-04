'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Technology AI Solutions | Zion Tech Group',
  description: 'AI-powered technology solutions for API management, DevOps automation, code quality, and SaaS growth analytics.',
};

const technologyServices = [
  { id: 'ai-api-management', title: 'API Management AI', href: '/services/ai-api-management', icon: '🔗', pricing: 'Custom', description: 'Intelligent API gateway with auto-scaling, rate limiting, and analytics.' },
  { id: 'ai-devops-automation', title: 'DevOps Automation', href: '/services/ai-devops-automation', icon: '⚙️', pricing: 'From $199/mo', description: 'CI/CD pipeline optimization with AI-powered testing and deployment.' },
  { id: 'ai-code-quality-assurance', title: 'Code Quality Assurance', href: '/services/ai-code-quality-assurance', icon: '✅', pricing: 'From $149/mo', description: 'AI-powered code review, security scanning, and quality metrics.' },
  { id: 'ai-saas-growth-analytics', title: 'SaaS Growth Analytics', href: '/services/ai-saas-growth-analytics', icon: '📈', pricing: 'From $129/mo', description: 'Growth metrics, funnel analysis, and retention optimization for SaaS products.' },
];

export default function TechnologyIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.15),rgba(165,130,250,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm mb-6">
            <span className="text-green-400">●</span> SaaS Ready
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">AI Solutions for Technology</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Accelerate development, automate operations, and grow your SaaS with AI-powered technology solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">🚀 Book Tech Consultation</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technology AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AI-powered tools for software development and SaaS operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Smarter Software?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation for your technology team.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}