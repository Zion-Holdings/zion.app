import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function EnterpriseAIOpsPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Enterprise AI Operations Center | Zion Tech Group</title>
        <meta name="description" content="Centralized AI operations management for enterprises with monitoring, optimization, cost, and security controls." />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-ai-operations-center" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Enterprise AI Operations Center</h1>
            <p className="mt-4 text-slate-300">Monitor, optimize, and manage all AI systems across your organization with quantum-enhanced performance.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-slate-300">Centralized AI monitoring, performance optimization, resource and cost management, security, compliance, and analytics—designed for enterprise scale.</p>
            </Card>
            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <div className="text-3xl font-bold text-white">Starting at $35,999<span className="text-base font-medium text-gray-400">/month</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: 30 days • Setup: 1–2 weeks</div>
              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
                <Link href="/services" variant="outline" className="flex-1 border border-gray-600 text-gray-200">Explore Services</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

