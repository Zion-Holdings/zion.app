import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group | Autonomous Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI automation, content generation, and infrastructure management." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI automation, content generation, and infrastructure management." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Comprehensive autonomous technology solutions designed to transform your business operations
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">AI & Automation Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Intelligent Process Automation</h3>
                  <p className="text-white/80 mb-4">
                    Automate complex business processes with AI-powered workflows that learn and optimize over time.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Workflow optimization</li>
                    <li>• Decision automation</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6 hover:border-pink-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Content Generation & Management</h3>
                  <p className="text-white/80 mb-4">
                    AI-powered content creation, optimization, and distribution across all digital channels.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Automated content creation</li>
                    <li>• SEO optimization</li>
                    <li>• Multi-platform distribution</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Predictive Analytics</h3>
                  <p className="text-white/80 mb-4">
                    Advanced machine learning models that predict trends and provide actionable business insights.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Trend forecasting</li>
                    <li>• Risk assessment</li>
                    <li>• Performance prediction</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Infrastructure & Cloud Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-indigo-400">Cloud Infrastructure Management</h3>
                  <p className="text-white/80 mb-4">
                    Automated cloud infrastructure deployment, scaling, and optimization across multiple providers.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Multi-cloud orchestration</li>
                    <li>• Auto-scaling</li>
                    <li>• Cost optimization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-6 hover:border-red-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">Security & Compliance</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive security monitoring and automated compliance management for all systems.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• 24/7 threat monitoring</li>
                    <li>• Automated compliance</li>
                    <li>• Incident response</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-400">Performance Optimization</h3>
                  <p className="text-white/80 mb-4">
                    Continuous monitoring and optimization of system performance and user experience.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Real-time monitoring</li>
                    <li>• Performance tuning</li>
                    <li>• Load balancing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Digital Marketing & Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-lg p-6 hover:border-rose-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-pink-400">Marketing Automation</h3>
                  <p className="text-white/80 mb-4">
                    AI-driven marketing campaigns that automatically optimize for maximum engagement and conversion.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Campaign optimization</li>
                    <li>• A/B testing</li>
                    <li>• ROI tracking</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-lg p-6 hover:border-amber-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">SEO & Analytics</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive search engine optimization and detailed analytics for data-driven decisions.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Keyword optimization</li>
                    <li>• Performance tracking</li>
                    <li>• Competitor analysis</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-violet-400">Social Media Management</h3>
                  <p className="text-white/80 mb-4">
                    Automated social media posting, engagement, and community management across all platforms.
                  </p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Content scheduling</li>
                    <li>• Engagement monitoring</li>
                    <li>• Community building</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss how our autonomous technology solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Schedule Consultation
                </Link>
                <Link href="/about" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Learn More
                </Link>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}