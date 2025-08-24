import Link from 'next/link';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI Autonomous Systems',
      description: 'Revolutionary AI agents that operate independently across all business functions',
      services: [
        {
          name: 'AI Autonomous Business Manager',
          description: 'Fully autonomous business operations management with decision-making capabilities',
          href: '/ai-autonomous-business-manager',
          features: ['Strategic Planning', 'Resource Allocation', 'Performance Optimization', 'Risk Management']
        },
        {
          name: 'AI Autonomous Research Assistant',
          description: 'Advanced research automation across scientific, business, and academic domains',
          href: '/ai-autonomous-research-assistant',
          features: ['Literature Review', 'Data Analysis', 'Hypothesis Generation', 'Report Writing']
        },
        {
          name: 'AI Autonomous Decision Engine',
          description: 'Real-time decision making powered by advanced machine learning algorithms',
          href: '/ai-autonomous-decision-engine',
          features: ['Predictive Analytics', 'Scenario Modeling', 'Risk Assessment', 'Optimization']
        }
      ]
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing platforms for unprecedented processing power',
      services: [
        {
          name: 'Quantum Neural Network Platform',
          description: 'Quantum-enhanced neural networks for complex AI computations',
          href: '/quantum-neural-network-platform',
          features: ['Quantum Algorithms', 'Neural Network Optimization', 'Quantum-Classical Hybrid', 'Scalable Architecture']
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum computing solutions for high-frequency trading and risk analysis',
          href: '/quantum-financial-trading',
          features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading']
        },
        {
          name: 'Quantum Cloud Infrastructure',
          description: 'Cloud-based quantum computing services for enterprise applications',
          href: '/quantum-cloud-infrastructure',
          features: ['Quantum Processing Units', 'Hybrid Computing', 'API Access', 'Enterprise Security']
        }
      ]
    },
    {
      title: 'Enterprise AI Solutions',
      description: 'Comprehensive AI solutions designed for enterprise-scale operations',
      services: [
        {
          name: 'AI Business Intelligence Suite',
          description: 'Advanced analytics and business intelligence powered by AI',
          href: '/ai-business-intelligence-suite',
          features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Insights']
        },
        {
          name: 'AI-Powered Enterprise Security',
          description: 'Intelligent security solutions with AI-driven threat detection',
          href: '/ai-powered-enterprise-security',
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Management']
        },
        {
          name: 'AI Content Generation Platform',
          description: 'Enterprise-grade content creation and management with AI',
          href: '/ai-content-generator',
          features: ['Multi-format Content', 'Brand Consistency', 'SEO Optimization', 'Content Analytics']
        }
      ]
    },
    {
      title: 'Specialized AI Platforms',
      description: 'Domain-specific AI solutions for specialized industries and use cases',
      services: [
        {
          name: 'AI Autonomous Healthcare',
          description: 'AI-powered healthcare solutions for diagnosis and treatment planning',
          href: '/ai-autonomous-healthcare-physician',
          features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Patient Monitoring']
        },
        {
          name: 'AI Legal Counsel',
          description: 'Automated legal research and document analysis',
          href: '/ai-autonomous-legal-counsel',
          features: ['Contract Analysis', 'Legal Research', 'Compliance Checking', 'Document Generation']
        },
        {
          name: 'AI Manufacturing Systems',
          description: 'Intelligent manufacturing with predictive maintenance and quality control',
          href: '/ai-autonomous-manufacturing',
          features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation']
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize business processes',
      icon: '⚡'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      icon: '💰'
    },
    {
      title: 'Scalability',
      description: 'Scale operations without proportional cost increases',
      icon: '📈'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: '🚀'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address risks before they become issues',
      icon: '🛡️'
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain market leadership through AI innovation',
      icon: '🏆'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions that transform businesses and drive innovation. 
            From autonomous systems to quantum computing, we provide the technology you need to succeed.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/20 p-8 rounded-2xl border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-black/40 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-purple-400 font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                            <span className="text-purple-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={service.href}
                      className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}