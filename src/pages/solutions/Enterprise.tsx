import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Brain, Globe, Zap, Users, BarChart3, Lock } from 'lucide-react';

const EnterpriseSolutions = () => {
  const solutions = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Multi-source integration'
      ],
      icon: BarChart3,
      href: '/services/ai-autonomous-systems'
    },
    {
      title: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive security solutions designed for large organizations.',
      features: [
        'Threat detection & response',
        'Compliance management',
        'Identity & access control',
        'Security monitoring',
        'Incident response'
      ],
      icon: Shield,
      href: '/services/cybersecurity'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Scalable cloud solutions optimized for enterprise workloads.',
      features: [
        'Multi-cloud strategy',
        'Cost optimization',
        'Performance monitoring',
        'Disaster recovery',
        'Security compliance'
      ],
      icon: Globe,
      href: '/services/it-infrastructure'
    },
    {
      title: 'AI Process Automation',
      description: 'Streamline operations with intelligent automation across all departments.',
      features: [
        'Workflow automation',
        'Document processing',
        'Customer service bots',
        'Supply chain optimization',
        'Quality control'
      ],
      icon: Zap,
      href: '/services/ai-autonomous-systems'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered healthcare solutions for hospitals and medical facilities.',
      icon: Users,
      solutions: ['Patient care automation', 'Medical imaging AI', 'Drug discovery', 'Compliance management']
    },
    {
      name: 'Financial Services',
      description: 'Secure, compliant solutions for banks and financial institutions.',
      icon: Lock,
      solutions: ['Fraud detection', 'Risk assessment', 'Compliance automation', 'Customer analytics']
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing solutions for Industry 4.0 transformation.',
      icon: Building2,
      solutions: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Energy management']
    },
    {
      name: 'Retail',
      description: 'Omnichannel retail solutions for modern commerce.',
      icon: Globe,
      solutions: ['Customer personalization', 'Inventory management', 'Demand forecasting', 'E-commerce optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with cutting-edge AI technology. Our solutions are designed to scale 
            with your business and drive measurable results across all departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              Get Enterprise Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Core Solutions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Enterprise Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Industry-Specific Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{industry.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="bg-gray-700/50 rounded-lg p-3">
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scalable Architecture',
                description: 'Our solutions grow with your business, from startup to enterprise.',
                icon: Building2
              },
              {
                title: 'Security First',
                description: 'Enterprise-grade security with compliance certifications.',
                icon: Shield
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support with dedicated account managers.',
                icon: Users
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Enterprise Demo
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;