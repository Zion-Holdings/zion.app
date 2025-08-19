import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and more.',
      features: [
        'Blog post generation',
        'Social media content',
        'Marketing copy',
        'Product descriptions',
        'SEO-optimized content',
        'Multi-language support'
      ],
      pricing: 'Starting at $99/month',
      cta: 'Start Generating'
    },
    {
      icon: '☁️',
      title: 'Cloud Automation',
      description: 'Intelligent automation of cloud infrastructure, deployment, and scaling operations.',
      features: [
        'Infrastructure as Code',
        'Auto-scaling',
        'Cost optimization',
        'Security automation',
        'Disaster recovery',
        'Performance monitoring'
      ],
      pricing: 'Starting at $199/month',
      cta: 'Automate Cloud'
    },
    {
      icon: '🔄',
      title: 'DevOps Automation',
      description: 'Streamline your development workflow with intelligent CI/CD and deployment automation.',
      features: [
        'Automated testing',
        'Continuous deployment',
        'Code quality checks',
        'Security scanning',
        'Performance testing',
        'Rollback automation'
      ],
      pricing: 'Starting at $149/month',
      cta: 'Optimize DevOps'
    },
    {
      icon: '📊',
      title: 'Business Process Automation',
      description: 'Automate repetitive business tasks and workflows to increase efficiency.',
      features: [
        'Data entry automation',
        'Report generation',
        'Email automation',
        'Document processing',
        'Customer support',
        'Invoice processing'
      ],
      pricing: 'Starting at $79/month',
      cta: 'Automate Processes'
    },
    {
      icon: '🔒',
      title: 'Security Automation',
      description: 'Proactive security monitoring and automated threat response systems.',
      features: [
        'Threat detection',
        'Automated response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Incident management',
        'Security reporting'
      ],
      pricing: 'Starting at $299/month',
      cta: 'Secure Systems'
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Automated data collection, analysis, and intelligent reporting insights.',
      features: [
        'Data aggregation',
        'Real-time analytics',
        'Custom dashboards',
        'Predictive insights',
        'Automated alerts',
        'Report scheduling'
      ],
      pricing: 'Starting at $129/month',
      cta: 'Get Insights'
    }
  ];

  const industries = [
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'Automate inventory management, customer service, and marketing campaigns.'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Streamline patient care, administrative tasks, and medical record management.'
    },
    {
      name: 'Finance',
      icon: '💰',
      description: 'Automate compliance, risk assessment, and customer onboarding processes.'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Optimize production lines, quality control, and supply chain management.'
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Automate grading, content creation, and student engagement tracking.'
    },
    {
      name: 'Real Estate',
      icon: '🏠',
      description: 'Streamline property management, lead generation, and client communication.'
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Increased Efficiency',
      description: 'Reduce manual work by up to 80% and focus on high-value tasks.'
    },
    {
      icon: '💰',
      title: 'Cost Savings',
      description: 'Cut operational costs by 30-50% through intelligent automation.'
    },
    {
      icon: '📈',
      title: 'Scalability',
      description: 'Scale operations without proportional increases in headcount.'
    },
    {
      icon: '🎯',
      title: 'Accuracy',
      description: 'Eliminate human errors and ensure consistent quality output.'
    },
    {
      icon: '🕒',
      title: '24/7 Operation',
      description: 'Your automation systems work around the clock without breaks.'
    },
    {
      icon: '🔍',
      title: 'Better Insights',
      description: 'Gain deeper understanding of your operations through automated analytics.'
    }
  ];

  return (
    <>
      <Head>
        <title>Services | Zion - Automation Solutions</title>
        <meta name="description" content="Discover Zion's comprehensive automation services including AI content generation, cloud automation, DevOps optimization, and business process automation." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive automation solutions to transform your business operations
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered content creation to complex business process automation, 
              we provide end-to-end solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Industry-Specific Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Zion Automation?
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How We Implement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We analyze your current processes and identify automation opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
                <p className="text-gray-600">
                  We design a customized automation strategy tailored to your needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Our team builds and deploys your automation solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor and improve your automation systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 3 automation workflows
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic AI content generation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Standard integrations
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 15 automation workflows
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced AI content generation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Analytics dashboard
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited automation workflows
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated support team
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Zion to streamline operations, 
              reduce costs, and scale efficiently.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}