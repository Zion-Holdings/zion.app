import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationOverviewPage() {
  const repoBase = 'https://github.com/Zion-Holdings/zion.app/blob/main';
  return (
    <>
      <Head>
        <title>Automation Systems — Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous systems: redundancy, AI automation, build orchestration, monitoring, and security." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12 max-w-7xl">
          <section className="text-center mb-14">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Automation Systems
            </h1>
            <p className="text-white/85 text-lg max-w-3xl mx-auto">
              A unified overview of our redundancy, AI automation, build orchestration, monitoring, and security capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300">AI Services</Link>
              <Link href="/resources" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all duration-300">Resources</Link>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-3 text-center">Redundancy Systems</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-3">
                <li>• Ultimate Redundancy V2</li>
                <li>• Comprehensive Redundancy</li>
                <li>• PM2 Process Management</li>
                <li>• GitHub Actions Redundancy</li>
                <li>• Netlify Functions Redundancy</li>
              </ul>
              <a href={`${repoBase}/README_ULTIMATE_REDUNDANCY_V2.md`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Read Ultimate Redundancy V2 →</a>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-3 text-center">AI Automation</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-3">
                <li>• AI Trends Research</li>
                <li>• Content Generation</li>
                <li>• Intelligent Orchestration</li>
                <li>• Autonomous Agents</li>
                <li>• Innovation Systems</li>
              </ul>
              <a href={`${repoBase}/EXPONENTIAL_GROWTH_AUTOMATION.md`} target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">Explore Growth Automation →</a>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-3 text-center">Build & Deploy</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-3">
                <li>• Smart Build Orchestration</li>
                <li>• Continuous Monitoring</li>
                <li>• Self-Healing Systems</li>
                <li>• Performance Optimization</li>
                <li>• Quality Assurance</li>
              </ul>
              <a href={`${repoBase}/README_GITHUB_ACTIONS.md`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">View CI/CD Automation →</a>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Core References</h3>
              <div className="space-y-2 text-sm">
                <a href={`${repoBase}/README.md`} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 block">Main README</a>
                <a href={`${repoBase}/ARCHITECTURE.md`} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 block">Architecture Guide</a>
                <a href={`${repoBase}/DEPLOYMENT.md`} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 block">Deployment Guide</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Redundancy Docs</h3>
              <div className="space-y-2 text-sm">
                <a href={`${repoBase}/README_COMPREHENSIVE_REDUNDANCY.md`} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 block">Comprehensive Redundancy</a>
                <a href={`${repoBase}/README_PM2_REDUNDANCY_COMPLETE.md`} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 block">PM2 Redundancy</a>
                <a href={`${repoBase}/README_CONTINUOUS_OPERATION.md`} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 block">Continuous Operation</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Security & Performance</h3>
              <div className="space-y-2 text-sm">
                <a href={`${repoBase}/SECURITY.md`} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 block">Security Guide</a>
                <a href={`${repoBase}/PERFORMANCE.md`} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 block">Performance Guide</a>
              </div>
            </div>
          </section>

          <section className="text-center mx-auto max-w-3xl">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/20">
              <h2 className="text-2xl font-bold mb-4">Ready to leverage autonomous systems?</h2>
              <p className="text-white/80 mb-6">Talk to us about implementing redundancy, AI automation, and self-healing operations tailored to your needs.</p>
              <Link href="/contact" className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300">Contact Us</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

