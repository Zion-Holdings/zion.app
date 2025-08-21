import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { CheckCircle, Sparkles, Shield, Gauge, Rocket, ArrowRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function FeaturesPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    { title: 'Outcome-Focused Blueprints', desc: 'Productized services with SLAs, templates, and playbooks for fast time-to-value.', icon: Rocket },
    { title: 'AI With Guardrails', desc: 'LLM gateways, policy registry, and evaluation harnesses to ship safely at scale.', icon: Shield },
    { title: 'Futuristic UX', desc: 'Quantum holographic interfaces, responsive design, and accessibility-first layouts.', icon: Sparkles },
    { title: 'Performance & Observability', desc: 'Edge-first architectures, RUM + synthetic monitoring, and SLO dashboards.', icon: Gauge },
  ];

  const proofLinks = [
    { label: 'Market Pricing References', href: '/market-pricing' },
    { label: 'Services Directory', href: '/services' },
    { label: 'Professional Offers', href: '/pricing' },
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.9}>
      <Head>
        <title>Features & Capabilities | Zion Tech Group</title>
        <meta name="description" content="Explore our outcomes, guardrails, futuristic UX, and observability. Benchmarks and market pricing references included." />
        <link rel="canonical" href="https://ziontechgroup.com/features" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Capabilities That Drive Results
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Real services, not mockups—delivered with clear SLAs, automation, and measurable ROI.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/services" variant="primary" className="px-8 py-4">
                Explore Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">
                See Market Pricing <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </header>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="flex items-center gap-3 mb-3">
                    <f.icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-white font-semibold">{f.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Proof & References</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {proofLinks.map((l) => (
                <a key={l.label} href={l.href} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-gray-200">
                  {l.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-200">{contact.mobile}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-200">{contact.email}</span>
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-200 text-sm">{contact.address}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

