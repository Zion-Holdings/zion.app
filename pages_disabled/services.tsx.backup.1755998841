import React from 'react';
import Head from 'next/head';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: '🚀',
      title: 'AI-Powered Automation',
      description: 'Transform your business operations with intelligent automation systems that learn, adapt, and optimize continuously.',
      features: [
        'Machine Learning Workflows',
        'Intelligent Process Automation',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Autonomous Decision Making'
      ],
      color: 'from-cyan-400 to-blue-500',
      glow: 'glow'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Protect your digital assets with comprehensive cybersecurity solutions designed for modern threats.',
      features: [
        'Zero-Trust Architecture',
        'Advanced Threat Detection',
        'Security Operations Center',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      color: 'from-purple-400 to-pink-500',
      glow: 'glow-purple'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Build scalable, resilient cloud solutions that grow with your business and optimize costs.',
      features: [
        'Multi-Cloud Strategy',
        'Container Orchestration',
        'Serverless Architecture',
        'DevOps Automation',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      color: 'from-green-400 to-teal-500',
      glow: 'glow-pink'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and business intelligence platforms.',
      features: [
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence',
        'Data Governance',
        'Performance Monitoring'
      ],
      color: 'from-orange-400 to-red-500',
      glow: 'glow'
    },
    {
      icon: '🌐',
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack for the digital age.',
      features: [
        'Process Optimization',
        'Legacy System Migration',
        'Change Management',
        'Digital Strategy',
        'User Experience Design',
        'Technology Roadmapping'
      ],
      color: 'from-indigo-400 to-purple-500',
      glow: 'glow-purple'
    },
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'Custom ML solutions that learn from your data to provide predictive insights and intelligent automation.',
      features: [
        'Custom Model Development',
        'Data Pipeline Engineering',
        'Model Training & Deployment',
        'A/B Testing Framework',
        'Model Monitoring',
        'Continuous Learning'
      ],
      color: 'from-pink-400 to-rose-500',
      glow: 'glow-pink'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services — Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of technology services including AI automation, cloud solutions, cybersecurity, and digital transformation." />
        <meta property="og:title" content="Our Services — Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive suite of technology services including AI automation, cloud solutions, cybersecurity, and digital transformation." />
      </Head>

      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cutting-Edge{' '}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From AI-powered automation to enterprise security, we deliver comprehensive technology solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 ${service.glow}`}
              >
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{' '}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We analyze your needs and define project scope' },
              { number: '02', title: 'Strategy', description: 'Develop comprehensive solution architecture' },
              { number: '03', title: 'Implementation', description: 'Build and deploy with agile methodology' },
              { number: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                             Let&apos;s discuss how our technology solutions can drive innovation, 
               improve efficiency, and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}