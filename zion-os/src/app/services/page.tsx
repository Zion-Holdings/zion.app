import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Zion Tech Group',
  description: 'Comprehensive AI solutions, autonomous systems, quantum computing, and technology services from Zion Tech Group.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI Autonomous Systems',
      description: 'Next-generation AI systems that operate independently and drive business transformation',
      icon: '🤖',
      services: [
        {
          name: 'AI Autonomous Business Manager',
          description: 'Fully autonomous AI system that manages business operations, decision-making, and strategy execution.',
          href: '/ai-autonomous-business-manager',
          features: ['Strategic Planning', 'Resource Allocation', 'Performance Monitoring', 'Risk Management']
        },
        {
          name: 'AI Autonomous Research Assistant',
          description: 'Advanced AI system that conducts independent research, analysis, and generates insights.',
          href: '/ai-autonomous-research-assistant',
          features: ['Data Analysis', 'Literature Review', 'Hypothesis Generation', 'Report Creation']
        },
        {
          name: 'AI Autonomous Decision Engine',
          description: 'Intelligent decision-making system that processes complex data and provides optimal solutions.',
          href: '/ai-autonomous-decision-engine',
          features: ['Real-time Analysis', 'Multi-criteria Evaluation', 'Risk Assessment', 'Automated Execution']
        }
      ]
    },
    {
      title: 'AI Business Intelligence',
      description: 'Comprehensive business intelligence solutions powered by artificial intelligence',
      icon: '📊',
      services: [
        {
          name: 'AI Business Intelligence Suite',
          description: 'Complete BI platform with AI-powered analytics, reporting, and predictive insights.',
          href: '/ai-business-intelligence-suite',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reporting', 'Data Visualization']
        },
        {
          name: 'AI Analytics Copilot',
          description: 'AI assistant that helps analyze data, identify trends, and generate actionable insights.',
          href: '/ai-analytics-copilot',
          features: ['Natural Language Queries', 'Automated Insights', 'Trend Detection', 'Recommendation Engine']
        }
      ]
    },
    {
      title: 'AI Content & Marketing',
      description: 'Revolutionary content creation and marketing automation powered by AI',
      icon: '✍️',
      services: [
        {
          name: 'AI Content Generator',
          description: 'Advanced AI system that creates high-quality, engaging content for various platforms.',
          href: '/ai-content-generator',
          features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Consistency', 'Performance Analytics']
        },
        {
          name: 'AI Content Marketing Automation',
          description: 'End-to-end automation of content marketing workflows and campaigns.',
          href: '/ai-content-marketing-automation',
          features: ['Campaign Management', 'Audience Targeting', 'Performance Tracking', 'A/B Testing']
        },
        {
          name: 'AI Ad Creative Generator',
          description: 'AI-powered system that creates compelling ad creatives and optimizes campaigns.',
          href: '/ai-ad-creative-generator',
          features: ['Creative Generation', 'Performance Optimization', 'Multi-platform Support', 'ROI Tracking']
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and compliance automation for modern enterprises',
      icon: '🔒',
      services: [
        {
          name: 'Advanced Cybersecurity Suite',
          description: 'Comprehensive security platform with AI-powered threat detection and response.',
          href: '/advanced-cybersecurity-suite',
          features: ['Threat Detection', 'Incident Response', 'Vulnerability Assessment', 'Security Monitoring']
        },
        {
          name: 'SOC2 Compliance Automation',
          description: 'Automated compliance management system for SOC2 certification and maintenance.',
          href: '/soc2-compliance-automation',
          features: ['Compliance Monitoring', 'Automated Auditing', 'Risk Assessment', 'Documentation Management']
        },
        {
          name: 'AI-Powered Enterprise Security',
          description: 'Enterprise-grade security solutions enhanced with artificial intelligence.',
          href: '/ai-powered-enterprise-security',
          features: ['Advanced Threat Protection', 'Behavioral Analysis', 'Security Orchestration', 'Compliance Reporting']
        }
      ]
    },
    {
      title: 'IT Infrastructure & DevOps',
      description: 'Modern infrastructure solutions and DevOps automation for scalable operations',
      icon: '🏗️',
      services: [
        {
          name: 'Advanced IT Infrastructure Services',
          description: 'Scalable, secure, and high-performance infrastructure solutions for modern businesses.',
          href: '/advanced-it-infrastructure-services',
          features: ['Cloud Architecture', 'Performance Optimization', 'Security Hardening', 'Scalability Planning']
        },
        {
          name: 'Autonomous DevOps Platform',
          description: 'AI-powered DevOps platform that automates deployment, monitoring, and operations.',
          href: '/autonomous-devops-platform',
          features: ['Automated Deployment', 'Continuous Monitoring', 'Performance Optimization', 'Incident Response']
        }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for complex problem-solving',
      icon: '⚛️',
      services: [
        {
          name: 'Quantum Neural Network Platform',
          description: 'Advanced platform combining quantum computing with neural networks for breakthrough performance.',
          href: '/quantum-neural-network-platform',
          features: ['Quantum Algorithms', 'Neural Network Integration', 'Performance Optimization', 'Scalable Architecture']
        },
        {
          name: 'Quantum Cloud Infrastructure',
          description: 'Cloud-based quantum computing infrastructure accessible to businesses of all sizes.',
          href: '/quantum-cloud-infrastructure',
          features: ['Quantum Processing Units', 'Cloud Integration', 'API Access', 'Performance Monitoring']
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum-powered trading algorithms for financial markets and investment strategies.',
          href: '/quantum-financial-trading',
          features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization', 'Real-time Trading']
        }
      ]
    }
  ];

  const additionalServices = [
    {
      name: 'AI Agent Orchestrator',
      description: 'Platform for managing and coordinating multiple AI agents in complex workflows.',
      href: '/ai-agent-orchestrator'
    },
    {
      name: 'AI Autonomous Testing',
      description: 'Automated testing system that continuously validates software quality and performance.',
      href: '/ai-autonomous-testing'
    },
    {
      name: 'AI Autonomous Code Review',
      description: 'AI system that automatically reviews code for quality, security, and best practices.',
      href: '/ai-autonomous-code-review'
    },
    {
      name: 'AI Autonomous Creative Director',
      description: 'AI system that manages creative projects and ensures brand consistency.',
      href: '/ai-autonomous-creative-director'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive AI-powered technology solutions designed to transform your business 
            and drive innovation across all operations.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions and technology services
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-b border-gray-200 pb-16 last:border-b-0">
                <div className="text-center mb-12">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions and emerging technologies to meet your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">Over 10 years of experience in AI and technology innovation with successful deployments across industries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">Access to the latest AI research, quantum computing capabilities, and emerging technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                    <p className="text-gray-600">Tailored solutions designed specifically for your business needs and objectives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock support and maintenance to ensure your systems run smoothly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Contact our team to discuss your specific needs and discover how our AI-powered 
                solutions can transform your business.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Business Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have already transformed their operations 
            with our innovative AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}