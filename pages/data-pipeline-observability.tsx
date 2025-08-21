import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, Activity } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { additionalServices } from '../data/additional-services';

export default function DataPipelineObservabilityPage() {
  const service = additionalServices.find(s => s.id === 'data-pipeline-observability');
  if (!service) return null;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/data-pipeline-observability" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6 flex items-center gap-3"><Activity className="w-10 h-10" />{service.name}</h1>
          <p className="text-slate-300 text-lg mb-8">{service.tagline}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <p className="text-slate-300 mb-4">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 10).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-200"><Check className="w-5 h-5 text-emerald-400 mt-0.5" />{feat}</li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit">
              <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
              <div className="text-slate-400 mb-4">{service.trialDays}-day trial • Setup: {service.setupTime}</div>
              <Button href="/contact" variant="quantum" className="w-full">Start Free Trial</Button>
              <div className="mt-6 text-sm text-slate-300 space-y-2">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" />{service.contactInfo.mobile}</div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-purple-400" />{service.contactInfo.email}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

