// Duplicate block removal

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Platform</title>
        <meta name="description" content="Explore Zion Tech Group's AI-powered automation platform: services, resources, blog, case studies, and real-time reports. Built for reliability, scale, and zero-downtime." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Platform" />
        <meta property="og:description" content="AI-powered automation platform with reliability, scale, and zero-downtime." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The autonomous innovation hub delivering AI-powered automation, self-healing cloud systems, and zero-downtime operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all">
                Explore Services
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">
                Get Started
              </Link>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mx-auto max-w-7xl px-0 pb-12">
            <h2 className="text-center text-3xl font-bold text-white/90 mb-8">Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-cyan-400 font-semibold mb-2">Autonomous Cloud</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Self-healing pipelines</li>
                  <li>• Zero-downtime deploys</li>
                  <li>• Intelligent scaling</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-fuchsia-400 font-semibold mb-2">AI Automation</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Content generation</li>
                  <li>• Quality assurance</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-green-400 font-semibold mb-2">Reliability</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Multi-layer redundancy</li>
                  <li>• Automatic failover</li>
                  <li>• Global distribution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Primary Navigation */}
          <section className="mx-auto max-w-7xl px-0 pb-16">
            <h2 className="text-center text-3xl font-bold text-white/90 mb-8">Explore the Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>🏢</span>
                </div>
                <h3 className="text-cyan-400 font-semibold">About</h3>
                <p className="text-white/70 text-sm">Mission & vision</p>
              </Link>
              <Link href="/services" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>🚀</span>
                </div>
                <h3 className="text-fuchsia-400 font-semibold">Services</h3>
                <p className="text-white/70 text-sm">AI solutions</p>
              </Link>
              <Link href="/resources" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📚</span>
                </div>
                <h3 className="text-blue-400 font-semibold">Resources</h3>
                <p className="text-white/70 text-sm">Tools & guides</p>
              </Link>
              <Link href="/case-studies" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📊</span>
                </div>
                <h3 className="text-yellow-400 font-semibold">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories</p>
              </Link>
              <Link href="/blog" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📝</span>
                </div>
                <h3 className="text-purple-400 font-semibold">Blog</h3>
                <p className="text-white/70 text-sm">Insights & trends</p>
              </Link>
              <Link href="/reports" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>📈</span>
                </div>
                <h3 className="text-indigo-400 font-semibold">Reports</h3>
                <p className="text-white/70 text-sm">Updates & analytics</p>
              </Link>
              <Link href="/contact" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>💬</span>
                </div>
                <h3 className="text-green-400 font-semibold">Contact</h3>
                <p className="text-white/70 text-sm">Start a project</p>
              </Link>
              <Link href="/privacy" className="group bg-white/10 rounded-xl p-6 border border-white/20 hover:border-red-400/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span>🔒</span>
                </div>
                <h3 className="text-red-400 font-semibold">Privacy</h3>
                <p className="text-white/70 text-sm">Trust & security</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mx-auto max-w-4xl px-0 pb-8">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to build with autonomous technology?</h2>
              <p className="text-white/80 mb-6">Partner with us to accelerate delivery, improve reliability, and scale effortlessly.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all">
                  Talk to an expert
                </Link>
                <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">
                  See how it works
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
