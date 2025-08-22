import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function SpaceTechnologyAIPlatformPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Space Technology AI Platform | Zion Tech Group</title>
        <meta name="description" content="AI platform for satellite management, space analytics, and mission operations." />
        <link rel="canonical" href="https://ziontechgroup.com/space-technology-ai-platform" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Space Technology AI Platform</h1>
            <p className="mt-4 text-slate-300">Manage satellite constellations, optimize orbits, and analyze space data with intelligent automation.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-slate-300">Constellation management, debris tracking, launch optimization, space weather prediction, and real-time mission planning.</p>
            </Card>
            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <div className="text-3xl font-bold text-white">Starting at $15,999<span className="text-base font-medium text-gray-400">/month</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: 30 days • Setup: 2–3 weeks</div>
              <div className="mt-6 flex gap-3">
                <Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
                <Button href="/services" variant="outline" className="flex-1 border border-gray-600 text-gray-200">Explore Services</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

