import Link from 'next/link';
import type { Metadata } from 'next';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessStructuredData';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Zion Tech Group: mission, leadership, delivery model, and US-based team.',
  alternates: { canonical: '/about/' },

  openGraph: {
    title: 'About Us',
    description: 'Learn about Zion Tech Group: mission, leadership, delivery model, and US-based team.',
    url: 'https://ziontechgroup.com/about/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us',
    description: 'Learn about Zion Tech Group: mission, leadership, delivery model, and US-based team.',
    images: ['/og-default.png'],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <JsonLd data={@context: "https://schema.org", @type: "WebPage", name: "About Us", description: "Learn about Zion Tech Group: mission, leadership, delivery model, and US-based team.", url: "https://ziontechgroup.com/about/"} />
      <LocalBusinessJsonLd />
      <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We build intelligent systems that transform enterprise operations — from
            AI-powered automation to cloud infrastructure and beyond.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-300 mb-4">
            Zion Tech Group helps enterprises harness artificial intelligence, modern
            cloud infrastructure, and intelligent automation to achieve measurable
            business outcomes. We believe every organization — from startups to Fortune
            500s — deserves access to world-class technology solutions.
          </p>
          <p className="text-slate-300">
            Founded and led by Kleber Garcia Alcatrão, we operate as a US-based team
            with deep expertise across AI/ML, cybersecurity, cloud architecture, and
            enterprise software delivery.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'AI & Machine Learning', desc: 'Custom AI models, RAG systems, autonomous agents, predictive analytics, and enterprise copilots tailored to your business.' },
              { title: 'Cloud & Infrastructure', desc: 'AWS, Azure, and Google Cloud architecture. Kubernetes, serverless, DevOps, and 24/7 managed infrastructure.' },
              { title: 'Cybersecurity', desc: 'Zero-trust architecture, penetration testing, compliance automation (SOC2, HIPAA, NIST), and managed security operations.' },
              { title: 'Automation & Integration', desc: 'End-to-end workflow automation, API orchestration, RPA+AI hybrid systems, and custom Micro SAAS platforms.' },
              { title: 'Managed IT & Support', desc: 'Help desk, endpoint management, identity and access management, and operations coverage for growing teams.' },
              { title: 'Data & Analytics', desc: 'Modern data platforms, pipelines, observability, and decision-ready reporting for executive teams.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-purple-400 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                <Link href="/services/" className="text-purple-300 text-sm mt-3 inline-block hover:underline">
                  Explore services →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group</h2>
          <div className="space-y-4">
            {[
              { title: 'US-Based Team', desc: '100% US-based engineers and architects. No offshoring, no communication gaps.' },
              { title: 'Comprehensive Catalog', desc: 'A broad portfolio of AI, IT, security, cloud, and automation services ready to deploy.' },
              { title: 'Custom Proposals', desc: 'Every engagement starts with a free discovery call and a tailored proposal with transparent pricing.' },
              { title: 'Proven Methodology', desc: 'AI-inferred deployment roadmaps with a phased delivery framework. From pilot to production in weeks.' },
              { title: 'Enterprise Ready', desc: 'SLA guarantees, compliance frameworks, and security-first architecture in every solution.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="text-white font-semibold">{item.title}:</span>{' '}
                  <span className="text-slate-400">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '600+', label: 'Service Modules' },
              { value: '10+', label: 'Practice Areas' },
              { value: '100%', label: 'US-Based' },
              { value: '24/7', label: 'Support Coverage' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-900/40 rounded-xl p-6 border border-slate-800">
                <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-10 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Get a free discovery call and custom proposal. No obligation, same-day turnaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="btn-primary">
              ✉ Get Free Consultation
            </a>
            <Link href="/services/" className="btn-secondary">
              Browse Services →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
