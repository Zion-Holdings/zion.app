import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function InsightsPage() {
  const industryTrends = [
    {
      title: 'AI Automation Market Growth',
      description: 'The global AI automation market is projected to reach $184 billion by 2027, driven by increasing demand for operational efficiency.',
      metric: '184B',
      unit: 'USD by 2027',
      trend: 'up',
      change: '+23.5%',
      period: 'CAGR 2022-2027'
    },
    {
      title: 'Autonomous Systems Adoption',
      description: '78% of Fortune 500 companies have implemented or are planning to implement autonomous systems within the next 2 years.',
      metric: '78%',
      unit: 'Fortune 500',
      trend: 'up',
      change: '+15%',
      period: 'vs. 2023'
    },
    {
      title: 'Energy Efficiency Gains',
      description: 'AI-powered autonomous systems are delivering average energy savings of 25-40% across manufacturing and infrastructure sectors.',
      metric: '25-40%',
      unit: 'Energy Savings',
      trend: 'up',
      change: '+12%',
      period: 'vs. 2023'
    },
    {
      title: 'Cybersecurity Investment',
      description: 'Organizations are increasing cybersecurity spending for autonomous systems by an average of 35% annually.',
      metric: '35%',
      unit: 'Annual Increase',
      trend: 'up',
      change: '+8%',
      period: 'vs. 2023'
    }
  ];

  const researchInsights = [
    {
      title: 'Human-AI Collaboration Patterns',
      description: 'Our research reveals that organizations with strong human-AI collaboration frameworks achieve 3x better outcomes than those relying solely on automation.',
      category: 'Research Study',
      date: 'January 2025',
      readTime: '5 min read',
      insights: ['3x better outcomes', 'Improved job satisfaction', 'Higher innovation rates']
    },
    {
      title: 'Edge Computing in Autonomous Systems',
      description: 'Analysis of 500+ autonomous system deployments shows that edge computing reduces latency by 60% and improves reliability by 40%.',
      category: 'Technical Analysis',
      date: 'December 2024',
      readTime: '7 min read',
      insights: ['60% latency reduction', '40% reliability improvement', 'Cost optimization']
    },
    {
      title: 'Sustainability Impact Measurement',
      description: 'Comprehensive study of autonomous systems across industries reveals average carbon footprint reduction of 30-45%.',
      category: 'Environmental Study',
      date: 'November 2024',
      readTime: '6 min read',
      insights: ['30-45% carbon reduction', 'Resource optimization', 'Circular economy integration']
    }
  ];

  const thoughtLeadership = [
    {
      author: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      company: 'Zion Tech Group',
      title: 'The Future of Autonomous Decision-Making',
      excerpt: 'As autonomous systems become more sophisticated, we\'re entering an era where AI can make complex decisions with minimal human oversight. But what does this mean for business, society, and human agency?',
      date: 'January 20, 2025',
      readTime: '8 min read',
      category: 'AI Ethics'
    },
    {
      author: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      company: 'Zion Tech Group',
      title: 'Building Resilient Autonomous Infrastructure',
      excerpt: 'The key to successful autonomous systems isn\'t just intelligence—it\'s resilience. Learn how to design systems that can adapt, recover, and thrive in unpredictable environments.',
      date: 'January 18, 2025',
      readTime: '10 min read',
      category: 'Infrastructure'
    },
    {
      author: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Zion Tech Group',
      title: 'Quantum AI: Beyond the Hype',
      excerpt: 'Quantum computing promises to revolutionize AI, but what\'s real and what\'s hype? Our research team breaks down the current state and future potential of quantum AI.',
      date: 'January 15, 2025',
      readTime: '12 min read',
      category: 'Quantum Computing'
    }
  ];

  const upcomingResearch = [
    {
      title: 'Autonomous Systems in Healthcare: Safety and Efficacy Study',
      description: 'Comprehensive analysis of autonomous systems in healthcare settings, focusing on patient safety, clinical outcomes, and regulatory compliance.',
      timeline: 'Q2 2025',
      status: 'In Progress',
      team: 'Healthcare AI Research Team'
    },
    {
      title: 'Edge AI Performance Benchmarking Framework',
      description: 'Development of standardized benchmarks for evaluating edge AI performance in autonomous systems across different industries and use cases.',
      timeline: 'Q3 2025',
      status: 'Planning Phase',
      team: 'Performance Engineering Team'
    },
    {
      title: 'Sustainable AI Development Guidelines',
      description: 'Creating industry standards and best practices for developing environmentally conscious AI systems and autonomous technologies.',
      timeline: 'Q4 2025',
      status: 'Research Phase',
      team: 'Sustainability Research Team'
    }
  ];

  return (
    <>
      <Head>
        <title>Insights & Research | Zion Tech Group - AI & Automation Intelligence</title>
        <meta name="description" content="Access cutting-edge research, industry insights, and thought leadership on autonomous systems and AI automation from Zion Tech Group." />
        <meta property="og:title" content="Insights & Research | Zion Tech Group - AI & Automation Intelligence" />
        <meta property="og:description" content="Access cutting-edge research, industry insights, and thought leadership on autonomous systems and AI automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Insights & Research
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Cutting-edge research, industry trends, and thought leadership on the future of autonomous systems and AI automation
              </p>
            </header>

            {/* Industry Trends */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Industry Trends & Metrics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industryTrends.map((trend, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{trend.metric}</div>
                      <div className="text-white/60 text-sm">{trend.unit}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{trend.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{trend.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-sm font-semibold">{trend.change}</span>
                      <span className="text-white/60 text-xs">{trend.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Insights */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Latest Research Insights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchInsights.map((insight, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-400/10 to-fuchsia-400/10 rounded-xl p-6 border border-purple-400/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                        {insight.category}
                      </span>
                      <span className="text-white/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{insight.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{insight.description}</p>
                    <div className="space-y-2 mb-4">
                      {insight.insights.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          <span className="text-white/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-white/60 text-xs">{insight.date}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Thought Leadership */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Thought Leadership</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {thoughtLeadership.map((article, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-xl p-6 border border-green-400/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                        {article.category}
                      </span>
                      <span className="text-white/60 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{article.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{article.excerpt}</p>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-white/90 font-semibold text-sm">{article.author}</div>
                      <div className="text-white/60 text-xs">{article.role}, {article.company}</div>
                      <div className="text-white/60 text-xs mt-1">{article.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Research */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Upcoming Research Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingResearch.map((project, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-xl p-6 border border-blue-400/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                        {project.status}
                      </span>
                      <span className="text-white/60 text-sm">{project.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    <div className="text-white/60 text-xs">{project.team}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Methodology */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Our Research Methodology</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Data-Driven Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Primary Research</h4>
                        <p className="text-white/80 text-sm">Direct interviews, surveys, and case studies with industry leaders and practitioners.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Data Analysis</h4>
                        <p className="text-white/80 text-sm">Advanced analytics and machine learning techniques to identify patterns and trends.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Expert Validation</h4>
                        <p className="text-white/80 text-sm">Peer review and validation from industry experts and academic researchers.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">Quality Standards</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-fuchsia-400 rounded-full flex items-center justify-center text-black text-sm font-bold">✓</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Peer Review</h4>
                        <p className="text-white/80 text-sm">All research undergoes rigorous peer review by domain experts.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-fuchsia-400 rounded-full flex items-center justify-center text-black text-sm font-bold">✓</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Reproducibility</h4>
                        <p className="text-white/80 text-sm">Research methods and data are documented for reproducibility.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-fuchsia-400 rounded-full flex items-center justify-center text-black text-sm font-bold">✓</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Ethical Standards</h4>
                        <p className="text-white/80 text-sm">All research adheres to ethical guidelines and privacy standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-4 text-white">Collaborate on Research</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Interested in collaborating on research projects or need custom insights for your organization? 
                  Our research team is available for partnerships and consulting engagements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Collaboration
                  </Link>
                  <Link 
                    href="/resources" 
                    className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    View Resources
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