import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIInsightsPage() {
  const insights = [
    {
      id: 1,
      title: "AI Market Growth 2025",
      description: "The global AI market is projected to reach $1.8 trillion by 2025, with enterprise AI adoption accelerating across all sectors.",
      category: "Market Analysis",
      icon: "📈",
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      title: "Generative AI Revolution",
      description: "Generative AI is transforming content creation, design, and product development, with 78% of companies planning to integrate it by 2025.",
      category: "Technology Trends",
      icon: "🎨",
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "AI Ethics & Governance",
      description: "85% of organizations are implementing AI ethics frameworks as regulatory requirements increase globally.",
      category: "Compliance",
      icon: "⚖️",
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 4,
      title: "Edge AI Adoption",
      description: "Edge AI deployment is growing 35% annually, enabling real-time processing and reduced latency in critical applications.",
      category: "Infrastructure",
      icon: "🌐",
      color: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      title: "AI Talent Shortage",
      description: "The AI talent gap is widening, with demand for AI professionals expected to exceed supply by 3:1 in 2025.",
      category: "Workforce",
      icon: "👥",
      color: "from-indigo-400 to-purple-400"
    },
    {
      id: 6,
      title: "AI ROI Metrics",
      description: "Companies implementing AI report average ROI of 300-400%, with automation and predictive analytics leading the gains.",
      category: "Business Impact",
      icon: "💰",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  const trends = [
    {
      title: "Multimodal AI Systems",
      description: "AI that can process text, images, audio, and video simultaneously is becoming the new standard for enterprise applications.",
      impact: "High",
      timeline: "2025-2026"
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Advanced threat detection and automated response systems are becoming essential as cyber threats grow more sophisticated.",
      impact: "Critical",
      timeline: "2025-2027"
    },
    {
      title: "Autonomous Operations",
      description: "Self-managing systems that can operate independently with minimal human oversight are transforming industries.",
      impact: "High",
      timeline: "2025-2028"
    },
    {
      title: "AI Democratization",
      description: "No-code and low-code AI platforms are making artificial intelligence accessible to non-technical users.",
      impact: "Medium",
      timeline: "2025-2026"
    }
  ];

  return (
    <>
      <Head>
        <title>AI Insights & Industry Trends 2025 | Zion Tech Group</title>
        <meta name="description" content="Stay ahead with the latest AI industry insights, market trends, and technological developments shaping the future of artificial intelligence in 2025." />
        <meta property="og:title" content="AI Insights & Industry Trends 2025 - Zion Tech Group" />
        <meta property="og:description" content="Latest AI industry insights, market trends, and technological developments for 2025." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Insights & Industry Trends 2025
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Stay ahead of the curve with comprehensive insights into the AI landscape, market dynamics, 
                and emerging technologies that will shape the future of artificial intelligence.
              </p>
            </header>

            {/* Key Insights Grid */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Key Industry Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.map((insight) => (
                  <div key={insight.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
                    <div className="text-4xl mb-4">{insight.icon}</div>
                    <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full mb-4 inline-block">
                      {insight.category}
                    </span>
                    <h3 className="text-xl font-bold mb-4 text-white">{insight.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{insight.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Emerging Trends */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Emerging Technology Trends</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {trends.map((trend, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{trend.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trend.impact === 'Critical' ? 'bg-red-400/20 text-red-400' :
                        trend.impact === 'High' ? 'bg-orange-400/20 text-orange-400' :
                        'bg-blue-400/20 text-blue-400'
                      }`}>
                        {trend.impact} Impact
                      </span>
                    </div>
                    <p className="text-white/70 mb-4">{trend.description}</p>
                    <div className="text-sm text-white/60">
                      <strong>Timeline:</strong> {trend.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Market Statistics */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Market Statistics & Projections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl p-6 text-center border border-blue-400/30">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$1.8T</div>
                  <div className="text-white/80 text-sm">Global AI Market by 2025</div>
                </div>
                <div className="bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl p-6 text-center border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">78%</div>
                  <div className="text-white/80 text-sm">Companies Planning GenAI Integration</div>
                </div>
                <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-2xl p-6 text-center border border-green-400/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">300-400%</div>
                  <div className="text-white/80 text-sm">Average AI ROI</div>
                </div>
                <div className="bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-2xl p-6 text-center border border-orange-400/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">35%</div>
                  <div className="text-white/80 text-sm">Annual Edge AI Growth</div>
                </div>
              </div>
            </section>

            {/* Industry Sectors */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">AI Adoption by Industry Sector</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Healthcare & Life Sciences</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Drug discovery acceleration</li>
                    <li>• Medical imaging analysis</li>
                    <li>• Personalized medicine</li>
                    <li>• Clinical trial optimization</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Financial Services</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Fraud detection systems</li>
                    <li>• Algorithmic trading</li>
                    <li>• Risk assessment</li>
                    <li>• Customer service automation</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Manufacturing</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Predictive maintenance</li>
                    <li>• Quality control automation</li>
                    <li>• Supply chain optimization</li>
                    <li>• Smart factory systems</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Retail & E-commerce</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Recommendation engines</li>
                    <li>• Inventory management</li>
                    <li>• Customer behavior analysis</li>
                    <li>• Dynamic pricing</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Transportation & Logistics</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Autonomous vehicles</li>
                    <li>• Route optimization</li>
                    <li>• Demand forecasting</li>
                    <li>• Fleet management</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Energy & Utilities</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Smart grid management</li>
                    <li>• Energy consumption optimization</li>
                    <li>• Renewable energy integration</li>
                    <li>• Predictive maintenance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white">Stay Ahead of the AI Curve</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Get personalized insights and strategic guidance on implementing AI solutions 
                  that align with your business objectives and industry trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Expert Consultation
                  </Link>
                  <Link 
                    href="/blog" 
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Read Our Blog
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