import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function InsightsPage() {
  return (
    <>
      <Head>
        <title>Insights | Zion Tech Group - Technology Trends & Research</title>
        <meta name="description" content="Stay ahead with Zion Tech Group's latest insights on autonomous technology, AI trends, and digital transformation strategies." />
        <meta property="og:title" content="Insights | Zion Tech Group - Technology Trends & Research" />
        <meta property="og:description" content="Stay ahead with Zion Tech Group's latest insights on autonomous technology, AI trends, and digital transformation strategies." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Technology Insights
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Stay ahead with our latest research, trends, and thought leadership on autonomous technology and AI innovation
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Featured Research</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">Research</span>
                    <span className="text-white/60 text-sm">January 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                    The Future of Autonomous Systems in Enterprise
                  </h3>
                  <p className="text-white/80 mb-6">
                    Our comprehensive study reveals how autonomous systems are transforming enterprise operations, 
                    with 73% of companies reporting significant efficiency gains and 89% planning increased investment.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-cyan-300">
                      <span className="font-semibold">15 min read</span>
                    </div>
                    <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read Full Report →
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-fuchsia-500 text-white text-sm rounded-full">Analysis</span>
                    <span className="text-white/60 text-sm">December 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">
                    AI Content Generation: Quality vs. Quantity
                  </h3>
                  <p className="text-white/80 mb-6">
                    An in-depth analysis of how AI-powered content generation is reshaping digital marketing, 
                    with insights on maintaining quality while scaling production 10x.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-fuchsia-300">
                      <span className="font-semibold">12 min read</span>
                    </div>
                    <Link href="#" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                      Read Full Report →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Trending Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300 text-center">AI & Machine Learning</h3>
                  <p className="text-white/80 text-center mb-4">
                    Latest developments in artificial intelligence and machine learning technologies
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-cyan-300">15 Articles</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300 text-center">Automation & Robotics</h3>
                  <p className="text-white/80 text-center mb-4">
                    Insights on process automation and robotic process automation trends
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-fuchsia-300">12 Articles</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-300 text-center">Digital Transformation</h3>
                  <p className="text-white/80 text-center mb-4">
                    Strategies and insights for successful digital transformation initiatives
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-green-300">18 Articles</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Latest Articles</h2>
              <div className="space-y-8">
                <article className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded">Technology</span>
                        <span className="text-white/60 text-sm">2 days ago</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                        How Autonomous Systems Are Revolutionizing DevOps
                      </h3>
                      <p className="text-white/80 mb-4">
                        Discover how autonomous systems are transforming DevOps practices, from automated testing 
                        to intelligent deployment strategies that reduce human error and increase efficiency.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>8 min read</span>
                          <span>•</span>
                          <span>2.3k views</span>
                        </div>
                        <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-fuchsia-500 text-white text-xs rounded">AI</span>
                        <span className="text-white/60 text-sm">1 week ago</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">
                        The Rise of Generative AI in Content Marketing
                      </h3>
                      <p className="text-white/80 mb-4">
                        Explore how generative AI is reshaping content marketing strategies, enabling businesses 
                        to create personalized, engaging content at scale while maintaining brand voice and quality.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>10 min read</span>
                          <span>•</span>
                          <span>1.8k views</span>
                        </div>
                        <Link href="#" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">Strategy</span>
                        <span className="text-white/60 text-sm">2 weeks ago</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-300">
                        Building Resilient Systems: Lessons from Production
                      </h3>
                      <p className="text-white/80 mb-4">
                        Learn from real-world experiences how to build resilient, self-healing systems that can 
                        withstand failures and automatically recover from disruptions.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>12 min read</span>
                          <span>•</span>
                          <span>3.1k views</span>
                        </div>
                        <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Research & Data</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Industry Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Companies using AI automation</span>
                      <span className="text-cyan-400 font-semibold">73%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Average efficiency improvement</span>
                      <span className="text-cyan-400 font-semibold">40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">ROI on automation projects</span>
                      <span className="text-cyan-400 font-semibold">312%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Time to market reduction</span>
                      <span className="text-cyan-400 font-semibold">65%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Technology Adoption</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Machine Learning adoption</span>
                      <span className="text-fuchsia-400 font-semibold">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Cloud-native applications</span>
                      <span className="text-fuchsia-400 font-semibold">67%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">DevOps practices</span>
                      <span className="text-fuchsia-400 font-semibold">82%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">API-first architecture</span>
                      <span className="text-fuchsia-400 font-semibold">74%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Stay Updated</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Get the latest insights delivered to your inbox. Join thousands of technology leaders 
                  staying ahead of the curve.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Subscribe to Newsletter
                  </button>
                  <Link href="/contact" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Contact Our Experts
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}