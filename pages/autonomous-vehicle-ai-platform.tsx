import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Car } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function AutonomousVehicleAIPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const features = [
    'AI-powered autonomous navigation',
    'Real-time traffic optimization',
    'Predictive maintenance AI',
    'Multi-vehicle coordination',
    'Fleet management dashboard',
    'Regulatory compliance tooling'
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Autonomous Vehicle AI Platform - Zion Tech Group</title>
        <meta name="description" content="AI platform managing and coordinating autonomous vehicles with top safety and efficiency." />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-vehicle-ai-platform" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Car className="w-10 h-10" />Autonomous Vehicle AI Platform
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">Breakthrough AI platform for safety-first coordination and management of autonomous vehicles.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-orange-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-orange-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-orange-500/30 p-6 h-fit">
              <div className="text-3xl font-bold text-white">$3,999<span className="text-slate-400 text-base">/month</span></div>
              <div className="text-slate-400">14-day free trial • Setup: 2 weeks</div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full mt-4">Start Free Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

