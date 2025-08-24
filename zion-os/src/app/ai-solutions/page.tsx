import Link from 'next/link';

export default function AISolutionsPage() {
  const aiSolutions = [
    {
      category: 'AI Autonomous Systems',
      description: 'Revolutionary AI agents that operate independently across all business functions',
      solutions: [
        {
          name: 'AI Autonomous Business Manager',
          description: 'Fully autonomous business operations management with strategic decision-making capabilities',
          href: '/ai-autonomous-business-manager',
          icon: '🤖'
        },
        {
          name: 'AI Autonomous Research Assistant',
          description: 'Advanced research automation across scientific, business, and academic domains',
          href: '/ai-autonomous-research-assistant',
          icon: '🔬'
        },
        {
          name: 'AI Autonomous Decision Engine',
          description: 'Real-time decision making powered by advanced machine learning algorithms',
          href: '/ai-autonomous-decision-engine',
          icon: '⚡'
        }
      ]
    },
    {
      category: 'AI Business Intelligence',
      description: 'Advanced analytics and business intelligence powered by AI',
      solutions: [
        {
          name: 'AI Business Intelligence Suite',
          description: 'Comprehensive business intelligence platform with AI-powered insights',
          href: '/ai-business-intelligence-suite',
          icon: '📊'
        },
        {
          name: 'AI Analytics Copilot',
          description: 'AI-powered analytics assistant for data-driven decision making',
          href: '/ai-analytics-copilot',
          icon: '📈'
        },
        {
          name: 'AI Market Research',
          description: 'Intelligent market research and competitive analysis',
          href: '/ai-market-research',
          icon: '🔍'
        }
      ]
    },
    {
      category: 'AI Content & Creativity',
      description: 'AI-powered content creation and creative solutions',
      solutions: [
        {
          name: 'AI Content Generator',
          description: 'Enterprise-grade content creation and management with AI',
          href: '/ai-content-generator',
          icon: '✍️'
        },
        {
          name: 'AI Ad Creative Generator',
          description: 'AI-powered advertising creative generation and optimization',
          href: '/ai-ad-creative-generator',
          icon: '🎨'
        },
        {
          name: 'AI Brand Personality Generator',
          description: 'AI-driven brand personality development and management',
          href: '/ai-brand-personality-generator',
          icon: '🌟'
        }
      ]
    },
    {
      category: 'AI Enterprise Solutions',
      description: 'Comprehensive AI solutions designed for enterprise-scale operations',
      solutions: [
        {
          name: 'AI-Powered Enterprise Security',
          description: 'Intelligent security solutions with AI-driven threat detection',
          href: '/ai-powered-enterprise-security',
          icon: '🔒'
        },
        {
          name: 'AI Compliance Automation',
          description: 'Automated compliance management and regulatory adherence',
          href: '/ai-compliance-automation',
          icon: '📋'
        },
        {
          name: 'AI Code Review Copilot',
          description: 'AI-powered code review and quality assurance',
          href: '/ai-code-review-copilot',
          icon: '💻'
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI solutions for medical diagnosis, drug discovery, and patient care',
      icon: '🏥',
      solutions: ['Medical Imaging AI', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support']
    },
    {
      name: 'Finance',
      description: 'AI-powered financial services and risk management',
      icon: '💳',
      solutions: ['Fraud Detection', 'Risk Assessment', 'Portfolio Optimization', 'Algorithmic Trading']
    },
    {
      name: 'Manufacturing',
      description: 'Intelligent manufacturing with predictive maintenance and quality control',
      icon: '🏭',
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation']
    },
    {
      name: 'Retail',
      description: 'AI-driven retail solutions for customer experience and operations',
      icon: '🛍️',
      solutions: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Demand Forecasting']
    },
    {
      name: 'Education',
      description: 'AI-powered educational tools and learning platforms',
      icon: '🎓',
      solutions: ['Personalized Learning', 'Content Generation', 'Assessment Tools', 'Student Support']
    },
    {
      name: 'Transportation',
      description: 'AI solutions for logistics, autonomous vehicles, and smart cities',
      icon: '🚗',
      solutions: ['Route Optimization', 'Autonomous Vehicles', 'Traffic Management', 'Fleet Management']
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize business processes',
      icon: '⚡',
      metrics: ['30-50% time savings', 'Reduced manual errors', 'Faster processing']
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      icon: '💰',
      metrics: ['20-40% cost savings', 'Reduced overhead', 'Optimized resource allocation']
    },
    {
      title: 'Improved Accuracy',
      description: 'AI-powered systems provide consistent, accurate results',
      icon: '🎯',
      metrics: ['99.9% accuracy', 'Reduced human bias', 'Continuous improvement']
    },
    {
      title: 'Scalability',
      description: 'Scale operations without proportional cost increases',
      icon: '📈',
      metrics: ['Linear scaling', 'Global deployment', 'Multi-tenant architecture']
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: '🚀',
      metrics: ['Latest AI models', 'Research partnerships', 'Continuous updates']
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain market leadership through AI innovation',
      icon: '🏆',
      metrics: ['First-mover advantage', 'Market differentiation', 'Customer loyalty']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions that transform businesses and drive innovation. 
            From autonomous systems to business intelligence, we provide the technology you need to succeed.
          </p>
        </div>

        {/* AI Solutions Categories */}
        <div className="space-y-20">
          {aiSolutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/20 p-8 rounded-2xl border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{category.category}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="bg-black/40 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{solution.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{solution.description}</p>
                    
                    <Link
                      href={solution.href}
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

        {/* Industry Solutions */}
        <div className="mt-20 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-purple-400 mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">Understand your business needs and AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-300 text-sm">Develop comprehensive AI implementation strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Build and train AI models for your specific use case</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Deploy AI solutions and provide ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can drive innovation, efficiency, and growth for your organization.
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