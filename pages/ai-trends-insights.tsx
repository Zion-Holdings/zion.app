import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AITrendsInsights() {
  const currentTrends = [
    {
      title: 'Edge AI Computing',
      description: 'Moving AI processing closer to data sources for faster response times and reduced latency',
      impact: 'High',
      adoption: 'Growing',
      timeline: '2025-2026',
      benefits: ['Reduced latency', 'Lower bandwidth costs', 'Enhanced privacy', 'Real-time processing'],
      challenges: ['Limited processing power', 'Battery constraints', 'Security concerns']
    },
    {
      title: 'Federated Learning',
      description: 'Training AI models across decentralized data sources without sharing raw data',
      impact: 'Medium',
      adoption: 'Emerging',
      timeline: '2025-2027',
      benefits: ['Privacy preservation', 'Reduced data transfer', 'Collaborative learning', 'Regulatory compliance'],
      challenges: ['Communication overhead', 'Model convergence', 'Quality assurance']
    },
    {
      title: 'AutoML & No-Code AI',
      description: 'Automated machine learning tools enabling non-experts to build AI solutions',
      impact: 'High',
      adoption: 'Rapid',
      timeline: '2024-2026',
      benefits: ['Democratized AI', 'Faster development', 'Reduced costs', 'Wider adoption'],
      challenges: ['Limited customization', 'Quality control', 'Over-reliance on automation']
    },
    {
      title: 'Quantum AI Integration',
      description: 'Combining quantum computing with AI for solving complex optimization problems',
      impact: 'Very High',
      adoption: 'Early Stage',
      timeline: '2026-2030',
      benefits: ['Exponential speedup', 'New algorithm possibilities', 'Breakthrough applications'],
      challenges: ['Technical complexity', 'High costs', 'Limited availability']
    }
  ];

  const industryInsights = [
    {
      industry: 'Healthcare',
      trends: ['AI-powered diagnostics', 'Drug discovery acceleration', 'Personalized medicine', 'Predictive analytics'],
      challenges: ['Regulatory compliance', 'Data privacy', 'Clinical validation', 'Integration complexity'],
      opportunities: ['Improved patient outcomes', 'Cost reduction', 'Early disease detection', 'Treatment optimization']
    },
    {
      industry: 'Manufacturing',
      trends: ['Predictive maintenance', 'Quality control automation', 'Supply chain optimization', 'Digital twins'],
      challenges: ['Legacy system integration', 'Workforce training', 'Cybersecurity risks', 'ROI demonstration'],
      opportunities: ['Increased efficiency', 'Reduced downtime', 'Cost savings', 'Competitive advantage']
    },
    {
      industry: 'Finance',
      trends: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Customer service automation'],
      challenges: ['Regulatory requirements', 'Data security', 'Model interpretability', 'Bias mitigation'],
      opportunities: ['Enhanced security', 'Better risk management', 'Improved customer experience', 'Operational efficiency']
    },
    {
      industry: 'Transportation',
      trends: ['Autonomous vehicles', 'Traffic optimization', 'Predictive maintenance', 'Route planning'],
      challenges: ['Safety regulations', 'Infrastructure requirements', 'Public acceptance', 'Liability concerns'],
      opportunities: ['Reduced accidents', 'Lower emissions', 'Improved efficiency', 'New business models']
    }
  ];

  const futurePredictions = [
    {
      year: '2025',
      predictions: [
        'Widespread adoption of edge AI in IoT devices',
        'AutoML becomes standard in enterprise AI development',
        'AI-powered cybersecurity becomes essential',
        'Quantum AI shows first practical applications'
      ]
    },
    {
      year: '2026',
      predictions: [
        'Federated learning becomes mainstream for privacy-sensitive applications',
        'AI-generated content reaches human-quality levels',
        'Autonomous systems handle 30% of routine business operations',
        'Quantum AI demonstrates commercial viability'
      ]
    },
    {
      year: '2027',
      predictions: [
        'AI automation reaches 50% of knowledge work',
        'Personal AI assistants become ubiquitous',
        'AI-driven scientific discoveries accelerate dramatically',
        'Quantum AI transforms optimization industries'
      ]
    },
    {
      year: '2030',
      predictions: [
        'AI automation handles 80% of repetitive tasks',
        'Human-AI collaboration becomes the norm',
        'AI systems achieve general intelligence in specific domains',
        'Quantum AI enables breakthroughs in materials science and drug discovery'
      ]
    }
  ];

  const marketData = {
    globalMarketSize: '$1.8T',
    growthRate: '37.3%',
    keyDrivers: ['Digital transformation', 'Cost optimization', 'Competitive pressure', 'Regulatory requirements'],
    regionalBreakdown: [
      { region: 'North America', share: '42%', growth: '35.2%' },
      { region: 'Europe', share: '28%', growth: '38.1%' },
      { region: 'Asia Pacific', share: '25%', growth: '41.7%' },
      { region: 'Rest of World', share: '5%', growth: '33.8%' }
    ]
  };

  return (
    <>
      <Head>
        <title>AI Automation Trends & Insights 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore the latest AI automation trends, industry insights, and future predictions. Stay ahead of the curve with comprehensive analysis and market intelligence." />
        <meta property="og:title" content="AI Automation Trends & Insights 2025 | Zion Tech Group" />
        <meta property="og:description" content="Explore the latest AI automation trends, industry insights, and future predictions." />
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
                AI Automation Trends & Insights 2025
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Navigate the rapidly evolving landscape of AI automation with our comprehensive analysis of current trends, 
                industry insights, and future predictions. Stay ahead of the competition with data-driven intelligence.
              </p>
            </header>

            {/* Market Overview */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Market Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">Global Market Landscape</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Market Size (2025)</span>
                      <span className="text-3xl font-bold text-green-400">{marketData.globalMarketSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Annual Growth Rate</span>
                      <span className="text-2xl font-bold text-cyan-400">{marketData.growthRate}</span>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold text-white mb-3">Key Growth Drivers</h4>
                      <div className="space-y-2">
                        {marketData.keyDrivers.map((driver, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                            <span className="text-white/70">{driver}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">Regional Breakdown</h3>
                  <div className="space-y-4">
                    {marketData.regionalBreakdown.map((region, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white/80">{region.region}</span>
                        <div className="text-right">
                          <div className="text-white font-semibold">{region.share}</div>
                          <div className="text-cyan-400 text-sm">+{region.growth}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Current Trends */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Current Trends Shaping the Industry</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentTrends.map((trend, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{trend.title}</h3>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full border ${
                          trend.impact === 'Very High' ? 'bg-red-400/20 text-red-400 border-red-400/30' :
                          trend.impact === 'High' ? 'bg-orange-400/20 text-orange-400 border-orange-400/30' :
                          'bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
                        }`}>
                          {trend.impact}
                        </span>
                        <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                          {trend.adoption}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4">{trend.description}</p>
                    <div className="mb-4">
                      <span className="text-white/60 text-sm">Timeline: {trend.timeline}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {trend.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-white/70 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Challenges</h4>
                        <ul className="space-y-1">
                          {trend.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="text-white/70 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Industry Insights */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Industry-Specific Insights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {industryInsights.map((industry, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">{industry.industry}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Key Trends</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.trends.map((trend, trendIndex) => (
                            <span key={trendIndex} className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full border border-green-400/30">
                              {trend}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Challenges</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.challenges.map((challenge, challengeIndex) => (
                            <span key={challengeIndex} className="px-2 py-1 bg-red-400/20 text-red-400 text-xs rounded-full border border-red-400/30">
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Opportunities</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.opportunities.map((opportunity, opportunityIndex) => (
                            <span key={opportunityIndex} className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                              {opportunity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Predictions */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Future Predictions & Roadmap</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {futurePredictions.map((year, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{year.year}</span>
                    </div>
                    <ul className="space-y-3">
                      {year.predictions.map((prediction, predictionIndex) => (
                        <li key={predictionIndex} className="text-white/80 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                          {prediction}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Insights */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/20">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-white">Get Personalized Insights</h2>
                  <p className="text-white/80 mb-8">
                    Discover how these trends specifically impact your industry and organization. 
                    Our AI-powered analysis engine provides customized recommendations and strategic insights.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2">Industry Analysis</h3>
                      <p className="text-white/70 text-sm">Deep dive into your specific sector</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-fuchsia-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2">ROI Calculator</h3>
                      <p className="text-white/70 text-sm">Calculate potential returns on AI investments</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2">Implementation Roadmap</h3>
                      <p className="text-white/70 text-sm">Step-by-step guidance for your journey</p>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Your Custom Analysis
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Explore Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link href="/blog" className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">Blog & Insights</h3>
                    <p className="text-white/70 text-center">Deep dive into specific trends and technologies</p>
                  </div>
                </Link>
                
                <Link href="/resources" className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🛠️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">Tools & Resources</h3>
                    <p className="text-white/70 text-center">Essential tools and platforms for implementation</p>
                  </div>
                </Link>
                
                <Link href="/services" className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">Our Services</h3>
                    <p className="text-white/70 text-center">Professional implementation and consulting services</p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-2xl p-8 border border-purple-400/20">
                <h2 className="text-3xl font-bold mb-4 text-white">Stay Ahead of the Curve</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest AI automation trends and insights delivered to your inbox. 
                  Be the first to know about emerging technologies and market opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Weekly insights on AI automation trends and market intelligence.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}