// app/industries/startup-ai-automation/page.tsx
// SEO-optimized landing page for AI Automation for Startups
'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Rocket, Brain, Automation, DollarSign, Clock, TrendingUp, Zap, Users } from 'lucide-react';

export const metadata = {
  title: 'AI Automation for Startups | Reduce Costs & Accelerate Growth | Zion Tech Group',
  description: 'AI automation solutions for startups. Cut operational costs by 40%, accelerate product development, and scale faster with enterprise-grade AI tools. Perfect for seed-stage and Series A companies.',
  keywords: 'startup AI, automation for startups, AI tools for startups, reduce costs, accelerate growth, seed stage AI, Series A automation, startup tech stack',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/startup-ai-automation',
  },
};

function StartupAIContent() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Zion Tech Group - AI Automation for Startups',
          description: 'Enterprise AI automation solutions designed specifically for startups at seed and Series A stages. Help startups reduce costs, accelerate development, and scale efficiently.',
          url: 'https://ziontechgroup.com/industries/startup-ai-automation',
          areaServed: 'Global',
          serviceType: 'AI Automation',
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900/20" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full filter blur-3xl" />

          <div className="container-page relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm font-medium mb-6">
                AI-Powered Startup Growth
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Scale Your Startup{' '}
                <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text">
                  Smarter, Not Harder
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                AI automation that cuts your operational costs by 40%, accelerates product development by 3x, and scales with your startup from seed to Series B and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/configurator/"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Your Custom Proposal
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  📞 Call: +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
              Startup AI Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: DollarSign, title: '40% Cost Reduction', desc: 'Automate repetitive tasks and cut operational expenses' },
                { icon: Clock, title: '3x Faster Development', desc: 'AI-powered workflows accelerate your product timeline' },
                { icon: TrendingUp, title: 'Faster Fundraising', desc: 'Demonstrate scalable systems to investors' },
                { icon: Users, title: 'Team Productivity', desc: 'Focus engineering time on core product features' },
                { icon: Rocket, title: 'Rapid Scaling', desc: 'Systems that grow with your startup' },
                { icon: Brain, title: 'Smart Automation', desc: 'LLM-powered tools for customer support and docs' },
                { icon: Zap, title: 'Instant Onboarding', desc: 'Get productive in days, not months' },
                { icon: Automation, title: 'No-Code Integration', desc: 'Connect tools without heavy engineering' },
              ].map((b, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <b.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-center mb-12 text-violet-400">
              AI Startup Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  id: 'ai-customer-support-agent', 
                  title: 'AI Customer Support Agent', 
                  desc: '24/7 AI support that handles 80% of customer queries automatically', 
                  price: 'From $499/mo' 
                },
                { 
                  id: 'automated-reporting-pipeline', 
                  title: 'Automated Reporting Pipeline', 
                  desc: 'Generate reports from multiple data sources in minutes, not days', 
                  price: 'From $799/mo' 
                },
                { 
                  id: 'product-requirements-ai', 
                  title: 'AI Product Requirements Generator', 
                  desc: 'Turn user feedback into actionable product specs with AI', 
                  price: 'From $399/mo' 
                },
                { 
                  id: 'sales-automation-suite', 
                  title: 'Sales Automation Suite', 
                  desc: 'AI-powered lead scoring, email sequences, and CRM integration', 
                  price: 'From $599/mo' 
                },
                { 
                  id: 'startup-knowledge-base', 
                  title: 'AI Knowledge Base', 
                  desc: 'RAG-powered internal docs that answer employee questions instantly', 
                  price: 'From $299/mo' 
                },
                { 
                  id: 'smart-onboarding', 
                  title: 'Smart User Onboarding', 
                  desc: 'AI-guided product tours that increase activation by 65%', 
                  price: 'From $349/mo' 
                },
              ].map((s) => (
                <div key={s.id} className="glass-card flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-300 text-sm font-medium">{s.price}</span>
                    </div>
                    <Link href={`/services/${s.id}`} className="text-sm text-purple-400 hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Startups Choose Us */}
        <section className="py-20 px-4">
          <div className="container-page max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">
              Why Startups Choose Zion Tech Group
            </h2>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Built for Resource-Constrained Teams</h3>
                <p className="text-slate-300">
                  Our solutions are designed specifically for startups that need maximum impact with minimal engineering overhead. No massive infrastructure investments or complex integrations.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Pay-as-you-grow Pricing</h3>
                <p className="text-slate-300">
                  Start with a single AI tool and scale as you grow. Our pricing model adjusts with your usage, not your headcount.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Seed-Stage Friendly</h3>
                <p className="text-slate-300">
                  We understand the unique challenges of early-stage startups. Get enterprise-grade AI without enterprise-grade complexity or cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-violet-900/20">
          <div className="container-page text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Startup?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Get a free 30-minute consultation to see how our AI automation can cut your costs and speed up your product development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/kleber-ziontechgroup" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-8 py-4">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function StartupAIAutomationPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-slate-950">
        <div className="container-page py-20">
          <h1 className="text-4xl font-bold mb-8">AI Automation for Startups</h1>
          <p className="text-slate-400">Loading...</p>
        </div>
      </main>
    }>
      <StartupAIContent />
    </Suspense>
  );
}