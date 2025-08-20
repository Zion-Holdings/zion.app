import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIPage() {
  return (
    <>
      <Head>
        <title>AI & Machine Learning | Zion Tech Group - Intelligent Automation</title>
        <meta name="description" content="Explore Zion Tech Group's advanced AI and machine learning capabilities including content generation, trend analysis, predictive maintenance, and natural language processing." />
        <meta property="og:title" content="AI & Machine Learning - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI and machine learning capabilities with intelligent automation and insights." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI & Machine Learning
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence that transforms data into actionable insights and automates complex processes
            </p>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">AI Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Content Generation</h3>
                <p className="text-white/70 mb-6">
                  AI-powered content creation that produces high-quality, engaging material automatically.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Blog posts and articles</li>
                  <li>• Marketing copy</li>
                  <li>• Technical documentation</li>
                  <li>• Social media content</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Trend Analysis</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics that identify patterns and predict future trends in your data.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Market insights</li>
                  <li>• User behavior patterns</li>
                  <li>• Performance metrics</li>
                  <li>• Predictive modeling</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Predictive Maintenance</h3>
                <p className="text-white/70 mb-6">
                  Machine learning systems that predict and prevent system failures before they occur.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Failure prediction</li>
                  <li>• Performance optimization</li>
                  <li>• Resource allocation</li>
                  <li>• System health monitoring</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Natural Language Processing</h3>
                <p className="text-white/70 mb-6">
                  Advanced NLP capabilities that understand and process human language intelligently.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Text analysis</li>
                  <li>• Sentiment analysis</li>
                  <li>• Language translation</li>
                  <li>• Chatbot intelligence</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">AI Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-white/70">Automated</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/30 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-white/70">Learning</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-white/70">Accuracy</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/30 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Real-time</div>
                <div className="text-white/70">Processing</div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">How AI Powers Our Platform</h2>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Autonomous Content Creation</h3>
                <p className="text-white/70 mb-4">
                  Our AI systems continuously generate and optimize content, ensuring your platform stays fresh and engaging.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="text-sm text-white/60">Content Generation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm text-white/60">SEO Optimization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm text-white/60">Performance Tracking</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Intelligent System Management</h3>
                <p className="text-white/70 mb-4">
                  AI-powered monitoring and optimization ensure your systems run at peak performance around the clock.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔍</div>
                    <div className="text-sm text-white/60">Proactive Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm text-white/60">Performance Tuning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <div className="text-sm text-white/60">Security Analysis</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Predictive Analytics</h3>
                <p className="text-white/70 mb-4">
                  Machine learning algorithms analyze patterns to predict future trends and optimize decision-making.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm text-white/60">Data Analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔮</div>
                    <div className="text-sm text-white/60">Trend Prediction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm text-white/60">Strategic Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Experience the Power of AI
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our intelligent automation can transform your business operations and unlock new possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 border border-yellow-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-orange-400/50">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}