import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIAutonomousResearchAssistantPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>AI Autonomous Research Assistant | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered research automation that works autonomously to gather, analyze, and synthesize information from multiple sources." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-research-assistant" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Revolutionary AI that conducts comprehensive research autonomously, gathering insights from multiple sources and delivering actionable intelligence.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Source Research</h3>
              <p className="text-white/70">
                Automatically gathers information from academic papers, news sources, industry reports, and more.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Analysis</h3>
              <p className="text-white/70">
                Uses advanced NLP and machine learning to understand context and extract meaningful insights.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Synthesis</h3>
              <p className="text-white/70">
                Combines information from multiple sources to create comprehensive, coherent reports.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Updates</h3>
              <p className="text-white/70">
                Continuously monitors sources for new information and updates research automatically.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Customizable Focus</h3>
              <p className="text-white/70">
                Adapts research focus based on your specific needs and areas of interest.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Trend Analysis</h3>
              <p className="text-white/70">
                Identifies patterns and trends across multiple data sources and time periods.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Define Research Scope</h3>
                  <p className="text-white/70">
                    Specify your research topic, objectives, and any specific sources or constraints.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Autonomous Data Collection</h3>
                  <p className="text-white/70">
                    AI automatically searches and gathers relevant information from multiple sources.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intelligent Processing</h3>
                  <p className="text-white/70">
                    Advanced algorithms analyze, categorize, and synthesize the collected information.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Insight Generation</h3>
                  <p className="text-white/70">
                    AI identifies key patterns, trends, and actionable insights from the data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Report Creation</h3>
                  <p className="text-white/70">
                    Comprehensive reports are generated with clear summaries and recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Monitoring</h3>
                  <p className="text-white/70">
                    System continues to monitor for updates and new information automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Market Research</h3>
              <p className="text-white/70 mb-4">
                Comprehensive analysis of market trends, competitor analysis, and industry insights for strategic decision-making.
              </p>
              <div className="text-cyan-400 text-sm">Perfect for: Business strategists, product managers, consultants</div>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Academic Research</h3>
              <p className="text-white/70 mb-4">
                Literature reviews, citation analysis, and research synthesis for academic and scientific projects.
              </p>
              <div className="text-cyan-400 text-sm">Perfect for: Researchers, students, academics</div>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Legal Research</h3>
              <p className="text-white/70 mb-4">
                Case law analysis, precedent research, and legal document synthesis for legal professionals.
              </p>
              <div className="text-cyan-400 text-sm">Perfect for: Lawyers, paralegals, legal researchers</div>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Investment Analysis</h3>
              <p className="text-white/70 mb-4">
                Financial data analysis, company research, and market trend identification for investment decisions.
              </p>
              <div className="text-cyan-400 text-sm">Perfect for: Investors, financial analysts, fund managers</div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Save 80% of research time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Access to 1000+ data sources</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">24/7 autonomous operation</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Real-time updates and alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Customizable research focus</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Export to multiple formats</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Research?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Experience the future of autonomous research with our AI-powered assistant. Get started today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}