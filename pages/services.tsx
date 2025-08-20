import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that operate autonomously, continuously improving and optimizing your operations.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      features: [
        '227+ autonomous agents',
        'Intelligent content generation',
        'Automated quality assurance',
        'Smart error recovery',
        'Predictive maintenance'
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, reliable cloud solutions with zero-downtime deployments and automatic scaling.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      features: [
        'Self-healing CI/CD pipelines',
        'Intelligent build orchestration',
        'Automated dependency management',
        'Real-time performance monitoring',
        'Zero-downtime deployments'
      ]
    },
    {
      title: 'Redundancy & Reliability',
      description: 'Multi-layer redundancy systems ensuring 99.99% uptime and automatic failover protection.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      features: [
        'Multi-layer redundancy systems',
        'Automatic failover protection',
        'Geographic distribution',
        'Continuous health monitoring',
        'Self-repairing infrastructure'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'AI-driven performance analysis and optimization for maximum efficiency and speed.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      features: [
        'Real-time performance metrics',
        'Automated optimization',
        'Lighthouse integration',
        'Performance budgets',
        'Trend analysis'
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated threat detection and compliance monitoring.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      features: [
        'Automated security scanning',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Threat detection & response',
        'Zero-trust architecture'
      ]
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation with SEO optimization and automated quality assurance.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Autonomous content generation',
        'SEO optimization automation',
        'Quality assurance systems',
        'Content distribution',
        'Performance analytics'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - AI-Powered Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI-powered services including automation, cloud infrastructure, and intelligent solutions." />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="AI-powered automation and cloud solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered solutions designed to transform your business operations
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-white" spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver results that speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Results</h3>
            <p className="text-gray-600">
              227+ active automations and 2,960+ dynamic pages generated autonomously
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 Operation</h3>
            <p className="text-gray-600">
              Our autonomous systems work around the clock, ensuring continuous improvement
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">99.99% Uptime</h3>
            <p className="text-gray-600">
              Multi-layer redundancy systems ensure your operations never stop
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Discovery</h3>
            <p className="text-gray-600 text-sm">
              We analyze your current systems and identify optimization opportunities
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Design</h3>
            <p className="text-gray-600 text-sm">
              Custom solutions designed to meet your specific needs and goals
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Deploy</h3>
            <p className="text-gray-600 text-sm">
              Seamless implementation with zero-downtime deployment
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">4</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Optimize</h3>
            <p className="text-gray-600 text-sm">
              Continuous monitoring and autonomous optimization
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI-powered services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" href="/case-studies" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}