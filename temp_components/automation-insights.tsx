import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationInsightsPage() {
  const automationTrends = [
    {
      id: 'ai-automation-2025',
      title: 'AI Automation Trends 2025',
      description: 'Discover the latest trends in AI automation that are reshaping industries worldwide.',
      category: 'Trends',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 'autonomous-systems',
      title: 'Building Autonomous Systems',
      description: 'Learn how to design and implement truly autonomous systems that operate independently.',
      category: 'Implementation',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 'automation-roi',
      title: 'Calculating Automation ROI',
      description: 'A comprehensive guide to measuring and maximizing return on investment for automation projects.',
      category: 'Business',
      readTime: '10 min read',
      featured: false
    }
  ];

  const automationTools = [
    {
      id: 'automation-framework',
      title: 'Zion Automation Framework',
      description: 'Our proprietary framework for building scalable automation solutions.',
      type: 'Framework',
      complexity: 'Advanced'
    },
    {
      id: 'performance-monitor',
      title: 'Performance Monitoring Suite',
      description: 'Comprehensive tools for monitoring and optimizing automation performance.',
      type: 'Tool',
      complexity: 'Intermediate'
    },
    {
      id: 'deployment-automation',
      title: 'Deployment Automation',
      description: 'Streamlined deployment processes for automation systems.',
      type: 'Process',
      complexity: 'Beginner'
    }
  ];

  const successMetrics = [
    {
      metric: '227',
      label: 'Active Automations',
      description: 'Successfully deployed and running'
    },
    {
      metric: '99.9%',
      label: 'Uptime',
      description: 'Reliable automation performance'
    },
    {
      metric: '40%',
      label: 'Efficiency Gain',
      label: 'Average improvement across projects'
    },
    {
      metric: '2,960+',
      label: 'Pages Generated',
      description: 'Content created autonomously'
    }
  ];

  return (
    <>
      <Head>
        <title>Automation Insights | Zion Tech Group - AI Automation Expertise</title>
        <meta name="description" content="Explore Zion Tech Group's automation insights, trends, and expertise in building autonomous systems." />
        <meta property="og:title" content="Automation Insights | Zion Tech Group" />
        <meta property="og:description" content="Expert insights on AI automation, autonomous systems, and industry trends." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Automation Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Deep insights into AI automation, autonomous systems, and the future of intelligent technology
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Success Metrics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Our Automation Success</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {successMetrics.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">{item.metric}</div>
                    <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                    <div className="text-sm text-white/70">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Trends */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Latest Automation Trends</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automationTrends.map((trend, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">{trend.category}</span>
                      <span className="text-white/60 text-sm">{trend.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{trend.title}</h3>
                    <p className="text-white/70 mb-4">{trend.description}</p>
                    <Link 
                      href={`/blog/${trend.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More <span className="ml-1">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Tools & Frameworks */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Our Automation Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {automationTools.map((tool, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{tool.title}</h3>
                    <p className="text-white/70 mb-4">{tool.description}</p>
                    <div className="flex justify-center gap-2">
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">{tool.type}</span>
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">{tool.complexity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Automate Your Business?</h2>
              <p className="text-xl text-white/80 mb-6">
                Let our experts help you build the automation systems of the future
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  href="/case-studies"
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}