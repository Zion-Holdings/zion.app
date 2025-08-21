import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Star } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function QuantumAICognitivePage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/quantum-ai-cognitive'));

  if (!service) {
    return null;
  }

  const contactInfo = service.contactInfo;

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic">
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={service.link} />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {service.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400"><Star className="w-4 h-4 mr-1" />{service.rating.toFixed(1)}</div>
              </div>
              <div className="text-slate-300 text-sm mb-4">Market: {service.marketSize}, Growth: {service.growthRate}</div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{contactInfo.address}</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h3 className="text-xl font-semibold mb-3">Who is this for</h3>
              <p className="text-slate-300">{service.targetAudience}</p>
            </div>
            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h3 className="text-xl font-semibold mb-3">Competitive landscape</h3>
              <p className="text-slate-300">{service.marketPosition}</p>
            </div>
            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h3 className="text-xl font-semibold mb-3">Expected ROI</h3>
              <p className="text-slate-300">{service.roi}</p>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

