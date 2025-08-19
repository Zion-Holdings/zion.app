import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ResourceToolPage() {
  const router = useRouter();
  const { id } = router.query;

  // Tool data - in a real app, this would come from an API or database
  const tools = {
    'automation-assessment': {
      title: 'Automation Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation implementation.',
      type: 'Interactive Tool',
      estimatedTime: '15 minutes',
      fullDescription: 'This comprehensive assessment tool helps organizations evaluate their current state and readiness for AI automation implementation. It covers technical infrastructure, team capabilities, process maturity, and organizational readiness.',
      benefits: [
        'Identify current automation maturity level',
        'Understand technical and organizational gaps',
        'Get personalized recommendations',
        'Create a roadmap for automation success'
      ],
      howItWorks: 'The assessment consists of 25 carefully crafted questions across four key areas: Technical Infrastructure, Team Capabilities, Process Maturity, and Organizational Readiness. Based on your responses, you\'ll receive a detailed report with actionable insights.',
      categories: [
        'Technical Infrastructure',
        'Team Capabilities', 
        'Process Maturity',
        'Organizational Readiness'
      ]
    },
    'ai-maturity-model': {
      title: 'AI Maturity Model',
      description: 'Assess your current AI capabilities and plan your transformation journey.',
      type: 'Framework',
      estimatedTime: '30 minutes',
      fullDescription: 'The AI Maturity Model provides a structured framework for organizations to assess their current AI capabilities and plan their transformation journey. It helps identify the next steps needed to advance to higher levels of AI maturity.',
      benefits: [
        'Understand your current AI maturity level',
        'Identify specific areas for improvement',
        'Get a clear roadmap for advancement',
        'Benchmark against industry standards'
      ],
      howItWorks: 'This framework evaluates your organization across five maturity levels: Initial, Managed, Defined, Quantitatively Managed, and Optimizing. Each level has specific criteria and requirements that must be met before advancing.',
      categories: [
        'Data Management',
        'Model Development',
        'Deployment & Operations',
        'Governance & Ethics',
        'Business Integration'
      ]
    },
    'performance-benchmark': {
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes',
      fullDescription: 'This benchmarking tool allows you to compare your automation performance metrics against industry standards and best practices. It provides insights into where you excel and areas where you can improve.',
      benefits: [
        'Compare performance to industry standards',
        'Identify performance gaps and opportunities',
        'Track improvement over time',
        'Get actionable improvement recommendations'
      ],
      howItWorks: 'The tool collects key performance indicators (KPIs) from your automation initiatives and compares them against a comprehensive database of industry benchmarks. You\'ll receive detailed analysis and recommendations for improvement.',
      categories: [
        'Efficiency Metrics',
        'Quality Metrics',
        'Cost Metrics',
        'Time Metrics',
        'ROI Metrics'
      ]
    }
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-white/80 mb-8">The requested tool could not be found.</p>
          <Link href="/resources" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{tool.title} | Zion Tech Group - Resources</title>
        <meta name="description" content={tool.description} />
        <meta property="og:title" content={`${tool.title} | Zion Tech Group Resources`} />
        <meta property="og:description" content={tool.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-6">
                <span className="px-4 py-2 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                  {tool.type}
                </span>
                <span className="ml-3 px-3 py-2 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                  Est. time: {tool.estimatedTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{tool.title}</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">{tool.description}</p>
            </header>

            {/* Tool Content */}
            <div className="space-y-12">
              {/* Full Description */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-white">About This Tool</h2>
                <p className="text-white/80 leading-relaxed text-lg">{tool.fullDescription}</p>
              </section>

              {/* Benefits */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
                <p className="text-white/80 leading-relaxed">{tool.howItWorks}</p>
              </section>

              {/* Categories */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Coverage Areas</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {tool.categories.map((category, index) => (
                    <span key={index} className="px-4 py-2 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                      {category}
                    </span>
                  ))}
                </div>
              </section>

              {/* Launch Tool */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
                  <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Launch this tool now to begin your assessment and get personalized insights 
                    for your AI automation journey.
                  </p>
                  <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 text-lg">
                    Launch Tool
                  </button>
                  <p className="text-white/60 text-sm mt-4">
                    Estimated completion time: {tool.estimatedTime}
                  </p>
                </div>
              </section>

              {/* Call to Action */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <h2 className="text-2xl font-bold mb-4 text-white">Need More Resources?</h2>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Explore our other tools, case studies, and resources to accelerate 
                    your AI automation journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/resources"
                      className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                    >
                      Browse All Resources
                    </Link>
                    <Link 
                      href="/contact"
                      className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                    >
                      Get Expert Help
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}