import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Diagnostics Platform',
      client: 'Major Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Need for faster, more accurate diagnostic tools to improve patient outcomes and reduce wait times.',
      solution: 'Deployed AI-powered diagnostic platform with quantum-enhanced image processing capabilities.',
      results: [
        '95% reduction in diagnostic time',
        '99.2% accuracy rate in preliminary diagnoses',
        '40% improvement in patient satisfaction scores',
        '30% reduction in operational costs'
      ],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Risk Management System',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge: 'Complex risk assessment requiring real-time analysis of multiple data streams and market conditions.',
      solution: 'Implemented quantum-powered risk management platform with autonomous decision-making capabilities.',
      results: [
        '60% faster risk assessment',
        '45% reduction in false positives',
        'Real-time monitoring of 1000+ risk factors',
        '$50M+ in risk mitigation savings'
      ],
      image: '/images/case-studies/financial-risk.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing AI Optimization',
      client: 'Automotive Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues affecting output and customer satisfaction.',
      solution: 'AI-driven production optimization system with predictive maintenance and quality control.',
      results: [
        '25% increase in production efficiency',
        '90% reduction in quality defects',
        'Predictive maintenance preventing 95% of breakdowns',
        '15% reduction in operational costs'
      ],
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Intelligence',
      client: 'Government Agency',
      industry: 'Government',
      challenge: 'Advanced persistent threats requiring sophisticated detection and response capabilities.',
      solution: 'Zero-trust network architecture with AI-powered threat detection and automated response.',
      results: [
        '99.9% threat detection rate',
        'Real-time response to 99% of incidents',
        'Zero successful breaches since implementation',
        '50% reduction in security team workload'
      ],
      image: '/images/case-studies/cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Retail Customer Experience Platform',
      client: 'International Retail Chain',
      industry: 'Retail',
      challenge: 'Personalized customer experience across multiple channels and locations.',
      solution: 'AI-powered customer experience platform with predictive analytics and autonomous optimization.',
      results: [
        '35% increase in customer engagement',
        'Personalized recommendations with 85% accuracy',
        '20% increase in average order value',
        'Real-time optimization across 500+ locations'
      ],
      image: '/images/case-studies/retail-cx.jpg'
    },
    {
      id: 6,
      title: 'Energy Grid Optimization',
      client: 'Utility Company',
      industry: 'Energy & Utilities',
      challenge: 'Grid efficiency and renewable energy integration requiring complex optimization algorithms.',
      solution: 'Quantum computing-powered grid optimization system with AI-driven demand forecasting.',
      results: [
        '30% improvement in grid efficiency',
        '40% increase in renewable energy integration',
        'Predictive maintenance reducing outages by 60%',
        '$100M+ in operational savings annually'
      ],
      image: '/images/case-studies/energy-grid.jpg'
    }
  ];

  const industries = ['All', 'Healthcare', 'Financial Services', 'Manufacturing', 'Government', 'Retail', 'Energy & Utilities'];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Case Studies - Zion Tech Group" 
        description="Explore real-world success stories and results from Zion Tech Group's innovative technology solutions"
        keywords="case studies, success stories, results, implementations, Zion Tech Group"
        canonical="https://ziontechgroup.com/case-studies"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how our innovative AI, quantum computing, and autonomous solutions 
            are transforming businesses across industries. Real results, measurable impact, 
            and proven success stories.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Success Story</h2>
          {caseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">Featured Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    Read Full Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="w-full h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Case Studies Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study) => (
              <div key={study.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-3">{study.client}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {study.challenge}
                  </p>
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group"
                  >
                    Read Case Study
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-3xl p-8 border border-green-500/20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Collective Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Across all our implementations, we've delivered measurable results that drive 
              business transformation and competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-300">Successful Implementations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2B+</div>
              <p className="text-gray-300">Value Generated for Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <p className="text-gray-300">Average Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
              <p className="text-gray-300">Industries Served</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of organizations that have transformed their operations 
            with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}