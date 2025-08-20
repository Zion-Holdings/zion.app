import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce Platform Optimization',
      company: 'TechRetail Inc.',
      description: 'Implemented autonomous AI systems that increased conversion rates by 45% and reduced cart abandonment by 60%.',
      results: [
        '45% increase in conversion rates',
        '60% reduction in cart abandonment',
        '3x faster page load times',
        '99.9% uptime maintained'
      ],
      category: 'E-commerce',
      image: '/api/placeholder/400/300',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Financial Services Automation',
      company: 'GlobalBank',
      description: 'Deployed intelligent automation systems that processed 10x more transactions while maintaining 100% accuracy.',
      results: [
        '10x increase in transaction processing',
        '100% accuracy maintained',
        '24/7 autonomous operation',
        '50% reduction in operational costs'
      ],
      category: 'Financial Services',
      image: '/api/placeholder/400/300',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Healthcare Data Management',
      company: 'MedTech Solutions',
      description: 'Built autonomous data processing systems that improved patient care efficiency by 35% and reduced errors by 90%.',
      results: [
        '35% improvement in care efficiency',
        '90% reduction in data errors',
        'Real-time patient monitoring',
        'HIPAA compliance automation'
      ],
      category: 'Healthcare',
      image: '/api/placeholder/400/300',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Manufacturing Process Optimization',
      company: 'AutoManufacturing Co.',
      description: 'Implemented AI-powered monitoring systems that increased production efficiency by 40% and reduced downtime by 75%.',
      results: [
        '40% increase in production efficiency',
        '75% reduction in downtime',
        'Predictive maintenance automation',
        'Real-time quality control'
      ],
      category: 'Manufacturing',
      image: '/api/placeholder/400/300',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Content Generation Platform',
      company: 'Digital Media Corp.',
      description: 'Created autonomous content generation systems that produce 1000+ articles daily with 95% accuracy and SEO optimization.',
      results: [
        '1000+ articles generated daily',
        '95% content accuracy',
        'Automatic SEO optimization',
        '24/7 content production'
      ],
      category: 'Digital Media',
      image: '/api/placeholder/400/300',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Cloud Infrastructure Scaling',
      company: 'CloudScale Tech',
      description: 'Built self-scaling cloud infrastructure that automatically handles traffic spikes and maintains 99.99% uptime.',
      results: [
        'Automatic traffic scaling',
        '99.99% uptime maintained',
        'Zero-downtime deployments',
        'Cost optimization automation'
      ],
      category: 'Cloud Infrastructure',
      image: '/api/placeholder/400/300',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const categories = ['All', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Digital Media', 'Cloud Infrastructure'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing how our autonomous technology solutions have transformed businesses across industries." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and case studies from our autonomous technology implementations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-world results from our autonomous technology implementations across diverse industries
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our autonomous solutions have delivered measurable business impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className={`w-full h-48 bg-gradient-to-br ${study.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{study.company}</div>
                    <div className="text-sm opacity-90">{study.category}</div>
                  </div>
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {study.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <span className={`w-2 h-2 bg-gradient-to-r ${study.color} rounded-full mr-3`}></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View Full Case Study
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quantified results from our autonomous technology implementations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">45%</div>
            <div className="text-sm text-gray-600">Average Conversion Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">10x</div>
            <div className="text-sm text-gray-600">Processing Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">99.99%</div>
            <div className="text-sm text-gray-600">Uptime Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">75%</div>
            <div className="text-sm text-gray-600">Cost Reduction</div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our autonomous technology solutions work across diverse sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">E-commerce</h3>
            <p className="text-gray-600">
              Optimize conversion rates, reduce cart abandonment, and automate customer experience
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Financial Services</h3>
            <p className="text-gray-600">
              Automate transaction processing, ensure compliance, and optimize risk management
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare</h3>
            <p className="text-gray-600">
              Streamline patient care, automate data processing, and ensure compliance
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Manufacturing</h3>
            <p className="text-gray-600">
              Optimize production processes, reduce downtime, and automate quality control
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Digital Media</h3>
            <p className="text-gray-600">
              Automate content generation, optimize SEO, and scale content production
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Auto-scaling systems, zero-downtime deployments, and intelligent optimization
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our autonomous technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}