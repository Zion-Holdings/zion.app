import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('tools');

  const resources = {
    tools: [
      {
        title: 'AI Automation Framework',
        description: 'Our proprietary framework for building scalable autonomous systems',
        category: 'Framework',
        link: '#',
        featured: true
      },
      {
        title: 'Quantum Computing Simulator',
        description: 'Interactive simulator for exploring quantum AI concepts',
        category: 'Simulation',
        link: '#',
        featured: true
      },
      {
        title: 'Security Assessment Toolkit',
        description: 'Comprehensive tools for evaluating autonomous system security',
        category: 'Security',
        link: '#'
      },
      {
        title: 'Performance Monitoring Suite',
        description: 'Real-time monitoring and optimization tools for AI systems',
        category: 'Monitoring',
        link: '#'
      },
      {
        title: 'Sustainability Metrics Dashboard',
        description: 'Track and optimize environmental impact of automation systems',
        category: 'Sustainability',
        link: '#'
      },
      {
        title: 'Integration API Library',
        description: 'APIs for connecting autonomous systems with existing infrastructure',
        category: 'Integration',
        link: '#'
      }
    ],
    learning: [
      {
        title: 'AI Automation Fundamentals',
        description: 'Comprehensive course covering the basics of autonomous systems',
        duration: '8 weeks',
        level: 'Beginner',
        link: '#',
        featured: true
      },
      {
        title: 'Advanced Quantum AI',
        description: 'Deep dive into quantum computing applications in AI',
        duration: '12 weeks',
        level: 'Advanced',
        link: '#'
      },
      {
        title: 'Cybersecurity for Autonomous Systems',
        description: 'Security best practices and threat mitigation strategies',
        duration: '6 weeks',
        level: 'Intermediate',
        link: '#'
      },
      {
        title: 'Sustainable Automation Practices',
        description: 'Environmental considerations in AI system design',
        duration: '4 weeks',
        level: 'Intermediate',
        link: '#'
      },
      {
        title: 'Performance Optimization Masterclass',
        description: 'Techniques for maximizing efficiency in large-scale deployments',
        duration: '10 weeks',
        level: 'Advanced',
        link: '#'
      },
      {
        title: 'Ethics in AI Development',
        description: 'Responsible development practices for autonomous systems',
        duration: '5 weeks',
        level: 'All Levels',
        link: '#'
      }
    ],
    documentation: [
      {
        title: 'API Reference Guide',
        description: 'Complete documentation for all our automation APIs',
        version: 'v2.1.0',
        lastUpdated: 'January 2025',
        link: '#',
        featured: true
      },
      {
        title: 'Architecture Patterns',
        description: 'Best practices and design patterns for autonomous systems',
        version: 'v1.3.0',
        lastUpdated: 'December 2024',
        link: '#'
      },
      {
        title: 'Security Guidelines',
        description: 'Comprehensive security documentation and compliance guides',
        version: 'v2.0.0',
        lastUpdated: 'January 2025',
        link: '#'
      },
      {
        title: 'Deployment Handbook',
        description: 'Step-by-step guides for deploying autonomous systems',
        version: 'v1.8.0',
        lastUpdated: 'November 2024',
        link: '#'
      },
      {
        title: 'Troubleshooting Guide',
        description: 'Common issues and solutions for autonomous systems',
        version: 'v1.5.0',
        lastUpdated: 'October 2024',
        link: '#'
      },
      {
        title: 'Performance Tuning Guide',
        description: 'Optimization techniques and performance benchmarks',
        version: 'v1.7.0',
        lastUpdated: 'December 2024',
        link: '#'
      }
    ],
    community: [
      {
        title: 'Developer Forum',
        description: 'Connect with other developers and share experiences',
        members: '2,500+',
        activity: 'High',
        link: '#',
        featured: true
      },
      {
        title: 'Open Source Projects',
        description: 'Contribute to our open source automation tools',
        contributors: '150+',
        stars: '1,200+',
        link: '#'
      },
      {
        title: 'Hackathon Events',
        description: 'Regular events for building innovative automation solutions',
        frequency: 'Quarterly',
        nextEvent: 'March 2025',
        link: '#'
      },
      {
        title: 'Expert Office Hours',
        description: 'Weekly sessions with our automation experts',
        schedule: 'Every Tuesday',
        time: '2:00 PM EST',
        link: '#'
      },
      {
        title: 'User Groups',
        description: 'Local and virtual meetups for automation enthusiasts',
        locations: '15+ cities',
        members: '5,000+',
        link: '#'
      },
      {
        title: 'Mentorship Program',
        description: 'One-on-one guidance from experienced professionals',
        duration: '6 months',
        spots: '25 available',
        link: '#'
      }
    ]
  };

  const renderResourceCard = (resource, index) => (
    <div 
      key={index} 
      className={`bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 ${
        resource.featured ? 'ring-2 ring-cyan-400/30' : ''
      }`}
    >
      {resource.featured && (
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors">
          {resource.title}
        </h3>
        {resource.category && (
          <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
            {resource.category}
          </span>
        )}
      </div>
      
      <p className="text-white/80 mb-4 text-sm">
        {resource.description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-white/60 mb-4">
        {resource.duration && <span>Duration: {resource.duration}</span>}
        {resource.level && <span>Level: {resource.level}</span>}
        {resource.version && <span>v{resource.version}</span>}
        {resource.lastUpdated && <span>Updated: {resource.lastUpdated}</span>}
        {resource.members && <span>{resource.members} members</span>}
        {resource.activity && <span>Activity: {resource.activity}</span>}
      </div>
      
      <Link 
        href={resource.link}
        className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 text-sm"
      >
        Learn More
      </Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Tools & Learning</title>
        <meta name="description" content="Access comprehensive resources for AI automation including tools, learning materials, documentation, and community support from Zion Tech Group." />
        <meta property="og:title" content="Resources | Zion Tech Group - AI & Automation Tools & Learning" />
        <meta property="og:description" content="Access comprehensive resources for AI automation including tools, learning materials, documentation, and community support." />
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
                AI Automation Resources
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to build, deploy, and optimize autonomous systems. 
                From cutting-edge tools to comprehensive learning resources.
              </p>
            </header>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(resources).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources[activeTab].map((resource, index) => renderResourceCard(resource, index))}
            </div>
            
            {/* Additional Resources Section */}
            <section className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Join thousands of developers and organizations already building the future with autonomous systems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl border border-cyan-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Free Learning Path</h3>
                  <p className="text-white/80 mb-4">
                    Start with our comprehensive learning path designed for beginners
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Start Learning
                  </Link>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl border border-purple-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Join Community</h3>
                  <p className="text-white/80 mb-4">
                    Connect with like-minded professionals and share knowledge
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  >
                    Join Now
                  </Link>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl border border-green-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Get Support</h3>
                  <p className="text-white/80 mb-4">
                    Need help? Our experts are here to support your automation journey
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300"
                  >
                    Contact Us
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