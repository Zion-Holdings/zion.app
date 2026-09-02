// app/industries/legal/page.tsx - Legal & Compliance AI Solutions
'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Briefcase, FileText, Shield, Scale, Clock, CheckCircle, ArrowLeftIcon } from 'lucide-react';

export const metadata = {
  title: 'Legal AI Solutions | Contract Automation & Compliance | Zion Tech Group',
  description: 'AI-powered legal technology for contract analysis, compliance automation, e-discovery, and legal document processing. Reduce legal costs by 60% and accelerate deal cycles.',
  keywords: 'legal AI, contract automation, compliance AI, e-discovery, legal tech, document review, contract analysis',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/legal',
  },
};

const LEGAL_SERVICES = [
  {
    id: 'contract-analysis-ai',
    title: 'AI Contract Analysis Platform',
    desc: 'Automated contract review with clause extraction, risk scoring, and anomaly detection. Review 1000x faster than manual.',
    price: 'From $2,999/mo',
    metrics: '1000x faster review',
    icon: '📄'
  },
  {
    id: 'compliance-monitoring-ai',
    title: 'AI Compliance Monitoring',
    desc: 'Real-time regulatory compliance tracking with automated alerts. Stay compliant with GDPR, SOX, HIPAA, and more.',
    price: 'From $3,999/mo',
    metrics: '99% compliance',
    icon: '🛡️'
  },
  {
    id: 'legal-document-review',
    title: 'AI Legal Document Review',
    desc: 'E-discovery and document review with intelligent categorization. Reduce review time by 80% and costs by 70%.',
    price: 'From $4,999/mo',
    metrics: '80% time saved',
    icon: '🔍'
  },
  {
    id: 'legal-portal-automation',
    title: 'Legal Operations Portal',
    desc: 'Centralized legal workflow management with matter tracking, billing automation, and performance analytics.',
    price: 'From $1,999/mo',
    metrics: '50% ops efficiency',
    icon: '🖥️'
  },
  {
    id: 'regulatory-risk-ai',
    title: 'AI Regulatory Risk Assessment',
    desc: 'Predictive risk modeling for regulatory changes. Get early warnings on compliance risks and mitigation strategies.',
    price: 'From $5,999/mo',
    metrics: '60% risk reduction',
    icon: '⚠️'
  },
  {
    id: 'legal-ai-knowledge-base',
    title: 'Legal AI Knowledge Base',
    desc: 'Smart legal research platform with precedent identification and case law analysis. Find relevant precedents in seconds.',
    price: 'From $2,499/mo',
    metrics: '90% research time saved',
    icon: '📚'
  },
];

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group - Legal AI Solutions',
          description: 'Enterprise AI solutions for Legal & Compliance sectors including contract analysis, e-discovery, regulatory monitoring, and legal operations automation.',
          url: 'https://ziontechgroup.com/industries/legal',
          industry: 'Legal',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            countryName: 'USA',
          },
          sameAs: ['https://ziontechgroup.com/industries/legal'],
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Breadcrumb */}
        <div className="container-page py-4">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-300">Legal</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900/20" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full filter blur-3xl" />

          <div className="container-page relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" /> Legal AI Solutions
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text">
                  Legal Innovation
                </span>{' '}
                <span className="text-white">with AI</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transform legal operations with AI-powered contract analysis, compliance monitoring, 
                and document review. Reduce legal costs by 60% and accelerate deal cycles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/configurator/"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Your Custom Proposal
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View All Legal Services
                </Link>
              </div>

              <div className="flex justify-center">
                <a href="tel:+130****0950" className="text-slate-400 hover:text-slate-300">
                  ☎ +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 px-4">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
                Legal Impact
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Proven results across law firms, corporate legal departments, and compliance teams.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
                <div className="text-slate-400 text-sm">Faster Review</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-slate-400 text-sm">Cost Reduction</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                <div className="text-slate-400 text-sm">Compliance Rate</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-slate-400 text-sm">Risk Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
              Legal AI Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEGAL_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group glass-card flex flex-col h-full hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-base mb-1 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2 line-clamp-2">{service.desc}</p>
                      <div className="text-xs text-purple-400 font-semibold mb-3">
                        {service.metrics}
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <span className="text-purple-300 text-sm font-medium">
                      {service.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-green-400">
                Legal AI Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-400" />
                  Contract Automation
                </h3>
                <p className="text-slate-400 text-sm">
                  AI-powered contract review and analysis at scale.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Compliance Automation
                </h3>
                <p className="text-slate-400 text-sm">
                  Real-time monitoring and alerts for regulatory compliance.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Risk Mitigation
                </h3>
                <p className="text-slate-400 text-sm">
                  Identify and address legal risks before they become issues.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  Faster Deal Cycles
                </h3>
                <p className="text-slate-400 text-sm">
                  Accelerate contract negotiation and approval processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-violet-900/20">
          <div className="container-page text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Operations?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Schedule a free consultation to see how our AI solutions can reduce costs, 
              accelerate deal cycles, and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/kleber-ziontechgroup"
                className="btn-primary text-lg px-8 py-4"
              >
                Book Free Consultation
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                Email: kleber@ziontechgroup.com
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}