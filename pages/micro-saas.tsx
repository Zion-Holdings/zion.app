import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground';
import ServiceAds from '../components/sections/ServiceAds';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function MicroSaasPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const serviceHighlights = [
    {
      title: '🤖 AI Assistant Pro',
      description: 'Deploy a secure, branded AI copilot with guardrails, RAG, and analytics.',
      price: 'Starting at $149/month',
      features: ['RAG over your docs', 'Slack/Teams channels', 'Human handoff', 'Conversation analytics'],
      link: 'https://ziontechgroup.com/ai-assistant',
      contactInfo
    },
    {
      title: '💸 Cloud Cost Optimizer',
      description: 'Rightsizing, storage lifecycle, and anomaly detection with FinOps dashboards.',
      price: 'Starting at $99/month',
      features: ['Auto rightsizing', 'Idle cleanup', 'Spot orchestration', 'Anomaly detection'],
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      contactInfo
    }
  ];

  const topRealServices = enhancedRealMicroSaasServices
    .filter((s) => s.realService || s.realImplementation)
    .slice(0, 12);

  return (
    <QuantumHolographicMatrixBackground intensity={1.5}>
      <Head>
        <title>Micro SAAS Services - Zion Tech Group | Revolutionary AI & Technology Solutions</title>
        <meta name="description" content="Discover 150+ revolutionary micro SAAS services powered by AI and modern cloud. Transparent pricing and fast onboarding." />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Explore real, production-ready micro SaaS services with measurable ROI." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <section className="pt-24 pb-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Revolutionary Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with ready-to-run micro SaaS and AI offerings. Predictable pricing, fast setup, and measurable ROI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-5 h-5" /><span>{contactInfo.mobile}</span></div>
            <div className="flex items-center gap-2 text-purple-400"><Mail className="w-5 h-5" /><span>{contactInfo.email}</span></div>
            <div className="flex items-center gap-2 text-green-400"><MapPin className="w-5 h-5" /><span className="text-sm">{contactInfo.address}</span></div>
          </div>
        </div>
      </section>

      <ServiceAds heading="Top Picks" subheading="Handpicked services with the best ROI this month." items={serviceHighlights} />

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Popular Real Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRealServices.map((s) => (
              <Card key={s.id} className="p-6 bg-black/40 border border-gray-700/50">
                <div className="text-sm text-gray-400 mb-1">{s.category}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{s.description}</p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  {(s.features || []).slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-2xl font-bold text-white">{s.price}<span className="text-base text-gray-400">{s.period}</span></div>
                  <div className="flex gap-2">
                    <Button href={s.link} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Learn More</Button>
                    <Button href="/contact" variant="outline" className="border border-gray-600 text-gray-200">Contact</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </QuantumHolographicMatrixBackground>
  );
}

