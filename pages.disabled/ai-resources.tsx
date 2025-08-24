import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIResources() {
  const resources = [
    {
      category: 'Getting Started',
      items: [
        {
          title: 'AI Automation Fundamentals',
          description: 'Essential concepts and principles for understanding AI automation',
          type: 'Guide',
          duration: '30 min read',
          level: 'Beginner',
          link: '#'
        },
        {
          title: 'Business Process Mapping',
          description: 'How to identify and map processes for automation',
          type: 'Template',
          duration: '45 min',
          level: 'Beginner',
          link: '#'
        },
        {
          title: 'ROI Calculator for AI Projects',
          description: 'Calculate potential returns on AI automation investments',
          type: 'Tool',
          duration: '15 min',
          level: 'Beginner',
          link: '#'
        }
      ]
    },
    {
      category: 'Implementation',
      items: [
        {
          title: 'AI Project Planning Guide',
          description: 'Step-by-step guide to planning successful AI automation projects',
          type: 'Guide',
          duration: '60 min read',
          level: 'Intermediate',
          link: '#'
        },
        {
          title: 'Change Management Strategies',
          description: 'Managing organizational change during AI implementation',
          type: 'Guide',
          duration: '45 min read',
          level: 'Intermediate',
          link: '#'
        },
        {
          title: 'Integration Best Practices',
          description: 'Seamlessly integrating AI systems with existing infrastructure',
          type: 'Guide',
          duration: '40 min read',
          level: 'Intermediate',
          link: '#'
        }
      ]
    },
    {
      category: 'Advanced Topics',
      items: [
        {
          title: 'Machine Learning Model Selection',
          description: 'Choosing the right ML models for your automation needs',
          type: 'Guide',
          duration: '90 min read',
          level: 'Advanced',
          link: '#'
        },
        {
          title: 'AI Ethics and Governance',
          description: 'Establishing ethical frameworks for AI systems',
          type: 'Guide',
          duration: '60 min read',
          level: 'Advanced',
          link: '#'
        },
        {
          title: 'Scalability and Performance',
          description: 'Optimizing AI systems for enterprise-scale operations',
          type: 'Guide',
          duration: '75 min read',
          level: 'Advanced',
          link: '#'
        }
      ]
    }
  ];

  const tools = [
    {
      name: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation',
      category: 'Assessment',
      icon: '📊'
    },
    {
      name: 'Process Automation Calculator',
      description: 'Calculate potential time and cost savings from automation',
      category: 'Calculator',
      icon: '🧮'
    },
    {
      name: 'AI Vendor Comparison Matrix',
      description: 'Compare different AI solution providers and platforms',
      category: 'Template',
      icon: '⚖️'
    },
    {
      name: 'Implementation Timeline Generator',
      description: 'Create realistic timelines for AI automation projects',
      category: 'Generator',
      icon: '📅'
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare Process Automation',
      industry: 'Healthcare',
      challenge: 'Manual patient scheduling and administrative processes',
      solution: 'AI-powered scheduling system with predictive analytics',
      results: '40% reduction in scheduling errors, 60% faster patient processing',
      roi: '280%'
    },
    {
      title: 'Manufacturing Quality Control',
      industry: 'Manufacturing',
      challenge: 'Inconsistent quality control and high defect rates',
      solution: 'Computer vision-based quality inspection system',
      results: '95% defect detection rate, 30% reduction in waste',
      roi: '320%'
    },
    {
      title: 'Financial Services Compliance',
      industry: 'Finance',
      challenge: 'Manual compliance monitoring and reporting',
      solution: 'Automated compliance monitoring with real-time alerts',
      results: '90% faster compliance reporting, 100% audit trail',
      roi: '250%'
    }
  ];

  const events = [
    {
      title: 'AI Automation Summit 2025',
      date: 'March 15-17, 2025',
      location: 'Virtual Event',
      description: 'Join industry leaders and experts for three days of insights on AI automation trends and best practices.',
      type: 'Conference'
    },
    {
      title: 'AI Implementation Workshop',
      date: 'February 28, 2025',
      location: 'San Francisco, CA',
      description: 'Hands-on workshop covering practical aspects of implementing AI automation in your organization.',
      type: 'Workshop'
    },
    {
      title: 'AI Ethics Roundtable',
      date: 'March 8, 2025',
      location: 'Virtual Event',
      description: 'Interactive discussion on ethical considerations and governance frameworks for AI systems.',
      type: 'Roundtable'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Resources & Tools | Zion Tech Group - Educational Content & Automation Tools</title>
        <meta name="description" content="Access comprehensive AI automation resources, tools, and educational content from Zion Tech Group. From beginner guides to advanced implementation strategies." />
        <meta property="og:title" content="AI Resources & Tools | Zion Tech Group - Educational Content & Automation Tools" />
        <meta property="og:description" content="Access comprehensive AI automation resources, tools, and educational content from Zion Tech Group. From beginner guides to advanced implementation strategies." />
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
                AI Resources & Tools
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive educational content, practical tools, and expert insights to help you succeed with AI automation
              </p>
            </header>

            {/* Resource Categories */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Learning Resources</h2>
              <div className="space-y-12">
                {resources.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-2xl font-semibold mb-6 text-cyan-400">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                              {item.type}
                            </span>
                            <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                              {item.level}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                          <p className="text-white/80 text-sm mb-3">{item.description}</p>
                          <div className="flex items-center justify-between text-sm text-white/60">
                            <span>{item.duration}</span>
                            <Link href={item.link} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                              Access →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Tools */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Interactive Tools & Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{tool.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{tool.description}</p>
                    <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Real-World Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-white/60">Challenge:</span>
                        <p className="text-white/80">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Solution:</span>
                        <p className="text-white/80">{study.solution}</p>
                      </div>
                      <div>
                        <span className="text-white/60">Results:</span>
                        <p className="text-white/80">{study.results}</p>
                      </div>
                      <div className="pt-2">
                        <span className="text-green-400 font-semibold">ROI: {study.roi}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Events */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Upcoming Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-orange-400/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-orange-400/20 text-orange-400 text-sm rounded-full border border-orange-400/30">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                    <div className="space-y-2 text-sm text-white/80 mb-4">
                      <p><span className="text-white/60">Date:</span> {event.date}</p>
                      <p><span className="text-white/60">Location:</span> {event.location}</p>
                    </div>
                    <p className="text-white/70 text-sm mb-4">{event.description}</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Get the latest AI automation insights, case studies, and industry updates delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Community Forum</h3>
                  <p className="text-white/80 mb-4">
                    Connect with other AI automation professionals, share experiences, and get answers to your questions.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Join Community
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Expert Consultation</h3>
                  <p className="text-white/80 mb-4">
                    Schedule a free consultation with our AI automation experts to discuss your specific needs.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dive Deeper?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Explore our comprehensive resources and start your AI automation journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/ai-automation-services" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Explore Services
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Get in Touch
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