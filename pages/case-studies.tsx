import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const caseStudies = [
    {
      id: 'quantum-ai-financial-trading',
      title: 'Quantum AI Revolutionizes Financial Trading',
      company: 'Global Financial Markets Inc.',
      industry: 'Financial Services',
      challenge: 'Traditional trading algorithms were limited by computational power and couldn\'t process complex market patterns in real-time.',
      solution: 'Implemented quantum-enhanced AI trading systems that can analyze thousands of market variables simultaneously.',
      results: [
        '300% increase in trading accuracy',
        '85% reduction in processing time',
        '$2.5B additional revenue generated',
        '99.9% system uptime achieved'
      ],
      technologies: ['Quantum AI', 'Machine Learning', 'Real-time Analytics', 'High-Frequency Trading'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'autonomous-manufacturing-optimization',
      title: 'Autonomous Manufacturing Optimization',
      company: 'Advanced Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues were causing 15% waste and 20% downtime.',
      solution: 'Deployed autonomous AI systems for predictive maintenance, quality control, and production optimization.',
      results: [
        '40% increase in production efficiency',
        '60% reduction in downtime',
        '25% improvement in product quality',
        '30% reduction in energy consumption'
      ],
      technologies: ['Computer Vision', 'IoT Sensors', 'Predictive Analytics', 'Robotic Process Automation'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'sustainable-energy-management',
      title: 'Sustainable Energy Management System',
      company: 'Green Energy Solutions',
      industry: 'Energy',
      challenge: 'Inefficient energy distribution and lack of real-time optimization was causing 25% energy waste.',
      solution: 'Implemented AI-powered smart grid management with autonomous load balancing and renewable energy integration.',
      results: [
        '35% reduction in energy waste',
        '50% increase in renewable energy utilization',
        '40% improvement in grid stability',
        '$15M annual cost savings'
      ],
      technologies: ['Smart Grid AI', 'Renewable Energy Integration', 'Predictive Analytics', 'IoT Infrastructure'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'healthcare-diagnostic-automation',
      title: 'AI-Powered Healthcare Diagnostics',
      company: 'Metropolitan Health Systems',
      industry: 'Healthcare',
      challenge: 'Manual diagnostic processes were slow and error-prone, leading to delayed treatments and misdiagnoses.',
      solution: 'Deployed autonomous AI diagnostic systems with computer vision and natural language processing.',
      results: [
        '90% reduction in diagnostic time',
        '95% accuracy in disease detection',
        '60% improvement in patient outcomes',
        '40% reduction in healthcare costs'
      ],
      technologies: ['Computer Vision', 'Natural Language Processing', 'Medical AI', 'Predictive Analytics'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'logistics-automation-transformation',
      title: 'Logistics Automation Transformation',
      company: 'Global Logistics Network',
      industry: 'Logistics',
      challenge: 'Complex supply chain operations were causing delays, inefficiencies, and increased costs.',
      solution: 'Implemented autonomous logistics systems with predictive routing, automated warehousing, and real-time tracking.',
      results: [
        '45% improvement in delivery times',
        '30% reduction in operational costs',
        '99.5% delivery accuracy',
        '50% increase in warehouse efficiency'
      ],
      technologies: ['Autonomous Vehicles', 'Predictive Routing', 'Warehouse Automation', 'Real-time Tracking'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'retail-customer-experience',
      title: 'AI-Enhanced Retail Customer Experience',
      company: 'NextGen Retail Solutions',
      industry: 'Retail',
      challenge: 'Traditional retail systems couldn\'t provide personalized experiences or optimize inventory in real-time.',
      solution: 'Deployed AI-powered customer analytics, autonomous inventory management, and personalized marketing systems.',
      results: [
        '65% increase in customer satisfaction',
        '40% improvement in inventory turnover',
        '35% increase in average order value',
        '50% reduction in stockouts'
      ],
      technologies: ['Customer Analytics', 'Inventory AI', 'Personalization Engine', 'Predictive Marketing'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'cybersecurity-threat-detection',
      title: 'Advanced Cybersecurity Threat Detection',
      company: 'SecureNet Technologies',
      industry: 'Cybersecurity',
      challenge: 'Traditional security systems couldn\'t detect sophisticated cyber threats in real-time.',
      solution: 'Implemented autonomous AI security systems with behavioral analysis and predictive threat detection.',
      results: [
        '99.9% threat detection accuracy',
        '90% reduction in false positives',
        'Real-time threat response',
        'Zero successful breaches in 18 months'
      ],
      technologies: ['Behavioral Analytics', 'Threat Intelligence', 'Machine Learning', 'Real-time Monitoring'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'agriculture-precision-farming',
      title: 'Precision Agriculture with AI',
      company: 'SmartFarm Innovations',
      industry: 'Agriculture',
      challenge: 'Traditional farming methods were inefficient and couldn\'t optimize resource usage or crop yields.',
      solution: 'Deployed autonomous farming systems with drone monitoring, soil analysis, and predictive irrigation.',
      results: [
        '50% increase in crop yields',
        '40% reduction in water usage',
        '30% decrease in fertilizer costs',
        '25% improvement in crop quality'
      ],
      technologies: ['Drone Technology', 'Soil Analysis AI', 'Predictive Irrigation', 'Crop Monitoring'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const industries = ['All', 'Financial Services', 'Manufacturing', 'Energy', 'Healthcare', 'Logistics', 'Retail', 'Cybersecurity', 'Agriculture'];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world success stories of AI automation implementation across industries. See how organizations achieved remarkable results with autonomous systems." />
        <meta property="og:title" content="Case Studies | Zion Tech Group - AI & Automation Success Stories" />
        <meta property="og:description" content="Explore real-world success stories of AI automation implementation across industries." />
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
                Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world examples of how AI automation and autonomous systems are transforming 
                industries and delivering measurable business value.
              </p>
            </header>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === industry
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            
            {/* Featured Case Studies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.filter(study => study.featured).map((study) => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-white/80 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Solution</h4>
                      <p className="text-white/80 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-400 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                    >
                      Read Full Case Study
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* All Case Studies */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.filter(study => !study.featured).map((study) => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{study.company}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">Challenge</h4>
                      <p className="text-white/80 text-sm line-clamp-3">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-400 mb-2 text-sm">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-white/80 text-xs">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            +{study.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join the organizations already achieving remarkable results with AI automation. 
                  Let's discuss how autonomous systems can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Your Transformation
                  </Link>
                  <Link 
                    href="/services"
                    className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Explore Our Services
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