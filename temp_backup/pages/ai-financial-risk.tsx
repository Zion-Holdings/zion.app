import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Button } from '../components/ui/Button';

export default function AIFinancialRiskPage() {
  return (
    <UltraFuturisticBackground variant="neural" intensity="high">
      <Head>
        <title>AI Financial Risk Analytics | Zion Tech Group</title>
        <meta name="description" content="Scenario stress-tests, risk scoring with explainability, drift monitoring and governance for lending and trading models." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-risk" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Financial Risk Analytics</h1>
            <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Run scenario simulations, generate explainable risk scores and monitor drift to keep lending and trading models compliant and resilient.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-black/40 border border-emerald-500/30 rounded-2xl p-6">
                <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
                <p className="text-slate-300">Unlock robust governance with built‑in explainability, stress scenarios and model drift detection. Export audit‑ready reports and integrate with your data platforms.</p>
              </div>
              <div className="bg-black/40 border border-emerald-500/30 rounded-2xl p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                  <li>Scenario generator for macro/market shocks</li>
                  <li>Explainability reports (SHAP‑like) for regulators</li>
                  <li>Model/data drift monitors and alerts</li>
                  <li>Regulatory checklists and evidence export</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/40 border border-emerald-500/30 rounded-2xl p-6">
                <div className="text-sm text-slate-400 mb-1">Pricing</div>
                <div className="text-3xl font-bold text-white">$299<span className="text-base font-medium text-slate-400">/month</span></div>
                <div className="text-sm text-slate-400 mt-2">Trial: 14 days • Setup: 1 week</div>
                <div className="mt-6 flex gap-3">
                  <Link href="/contact" className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white">Contact Sales</Button>
                  <Link href="/market-pricing" variant="outline" className="flex-1 border border-slate-600 text-slate-200">See Market Pricing</Button>
                </div>
              </div>
              <div className="bg-black/40 border border-emerald-500/30 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Contact</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>Phone: <a className="text-cyan-300" href="tel:+13024640950">+1 302 464 0950</a></div>
                  <div>Email: <a className="text-purple-300" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
                  <div>Address: 364 E Main St STE 1008 Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

