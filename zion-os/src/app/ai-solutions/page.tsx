import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions - Zion Tech Group',
  description: 'Comprehensive AI-powered solutions including autonomous systems, business intelligence, content generation, and more from Zion Tech Group.',
};

export default function AISolutionsPage() {
  const aiSolutions = [
    {
      category: 'AI Autonomous Systems',
      solutions: [
        {
          name: 'AI Autonomous Business Manager',
          description: 'Fully autonomous AI system that manages business operations, decision-making, and strategy execution.',
          icon: '🏢',
          features: ['Strategic Planning', 'Resource Allocation', 'Performance Monitoring', 'Risk Management'],
          href: '/ai-autonomous-business-manager'
        },
        {
          name: 'AI Autonomous Research Assistant',
          description: 'Advanced AI system that conducts independent research, analysis, and generates insights.',
          icon: '🔬',
          features: ['Data Analysis', 'Literature Review', 'Hypothesis Generation', 'Report Creation'],
          href: '/ai-autonomous-research-assistant'
        },
        {
          name: 'AI Autonomous Decision Engine',
          description: 'Intelligent decision-making system that processes complex data and provides optimal solutions.',
          icon: '🧠',
          features: ['Real-time Analysis', 'Multi-criteria Evaluation', 'Risk Assessment', 'Automated Execution'],
          href: '/ai-autonomous-decision-engine'
        }
      ]
    },
    {
      category: 'AI Business Intelligence',
      solutions: [
        {
          name: 'AI Business Intelligence Suite',
          description: 'Complete BI platform with AI-powered analytics, reporting, and predictive insights.',
          icon: '📊',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reporting', 'Data Visualization'],
          href: '/ai-business-intelligence-suite'
        },
        {
          name: 'AI Analytics Copilot',
          description: 'AI assistant that helps analyze data, identify trends, and generate actionable insights.',
          icon: '🤖',
          features: ['Natural Language Queries', 'Automated Insights', 'Trend Detection', 'Recommendation Engine'],
          href: '/ai-analytics-copilot'
        }
      ]
    },
    {
      category: 'AI Content & Marketing',
      solutions: [
        {
          name: 'AI Content Generator',
          description: 'Advanced AI system that creates high-quality, engaging content for various platforms.',
          icon: '✍️',
          features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Consistency', 'Performance Analytics'],
          href: '/ai-content-generator'
        },
        {
          name: 'AI Content Marketing Automation',
          description: 'End-to-end automation of content marketing workflows and campaigns.',
          icon: '📈',
          features: ['Campaign Management', 'Audience Targeting', 'Performance Tracking', 'A/B Testing'],
          href: '/ai-content-marketing-automation'
        },
        {
          name: 'AI Ad Creative Generator',
          description: 'AI-powered system that creates compelling ad creatives and optimizes campaigns.',
          icon: '🎯',
          features: ['Creative Generation', 'Performance Optimization', 'Multi-platform Support', 'ROI Tracking'],
          href: '/ai-ad-creative-generator'
        }
      ]
    },
    {
      category: 'AI Specialized Solutions',
      solutions: [
        {
          name: 'AI Agent Orchestrator',
          description: 'Platform for managing and coordinating multiple AI agents in complex workflows.',
          icon: '🌐',
          features: ['Multi-Agent Coordination', 'Workflow Management', 'Resource Allocation', 'Performance Optimization'],
          href: '/ai-agent-orchestrator'
        },
        {
          name: 'AI Autonomous Testing',
          description: 'Automated testing system that continuously validates software quality and performance.',
          icon: '🧪',
          features: ['Automated Testing', 'Quality Validation', 'Performance Monitoring', 'Continuous Integration'],
          href: '/ai-autonomous-testing'
        },
        {
          name: 'AI Autonomous Code Review',
          description: 'AI system that automatically reviews code for quality, security, and best practices.',
          icon: '💻',
          features: ['Code Quality Analysis', 'Security Scanning', 'Best Practice Validation', 'Automated Feedback'],
          href: '/ai-autonomous-code-review'
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 300%.',
      icon: '⚡'
    },
    {
      title: 'Better Decision Making',
      description: 'Leverage AI-powered insights and predictive analytics for data-driven business decisions.',
      icon: '📈'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and resource optimization.',
      icon: '💰'
    },
    {
      title: '24/7 Operation',
      description: 'AI systems work around the clock without fatigue, ensuring continuous business operations.',
      icon: '🌙'
    },
    {
      title: 'Scalability',
      description: 'Easily scale your AI solutions as your business grows and requirements evolve.',
      icon: '📊'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technology and innovation.',
      icon: '🚀'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      applications: ['Patient Diagnosis', 'Drug Discovery', 'Medical Research', 'Healthcare Operations'],
      icon: '🏥'
    },
    {
      name: 'Finance',
      applications: ['Risk Assessment', 'Trading Optimization', 'Fraud Detection', 'Customer Service'],
      icon: '💳'
    },
    {
      name: 'Manufacturing',
      applications: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain'],
      icon: '🏭'
    },
    {
      name: 'Retail',
      applications: ['Customer Analytics', 'Inventory Management', 'Marketing Automation', 'Pricing Optimization'],
      icon: '🛍️'
    },
    {
      name: 'Technology',
      applications: ['Software Development', 'DevOps Automation', 'Infrastructure Management', 'Security'],
      icon: '💻'
    },
    {
      name: 'Research',
      applications: ['Data Analysis', 'Literature Review', 'Hypothesis Testing', 'Collaboration'],
      icon: '🔬'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed 
            to automate, optimize, and revolutionize your operations.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionizing Business with AI</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI solutions represent the cutting edge of artificial intelligence technology, 
                designed to solve complex business challenges and unlock new opportunities for growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From autonomous systems that operate independently to intelligent assistants that enhance 
                human capabilities, our AI solutions are transforming how businesses operate across every industry.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  "AI solutions that think, learn, and act to transform your business operations."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">State-of-the-art AI technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Customizable for your specific needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed for every aspect of modern business operations
            </p>
          </div>
          
          <div className="space-y-16">
            {aiSolutions.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">{solution.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{solution.name}</h4>
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 mb-3">Key Features:</h5>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href={solution.href}
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why AI Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative benefits of implementing AI solutions in your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are transforming businesses across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology for successfully deploying AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Assessment</h3>
              <p className="text-gray-600">Understanding your business needs and current infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution Design</h3>
              <p className="text-gray-600">Custom AI solution architecture tailored to your requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600">Agile development with comprehensive testing and validation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment & Support</h3>
              <p className="text-gray-600">Smooth deployment with ongoing support and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the organizations that have already revolutionized their operations with our AI-powered solutions. 
            Contact our team to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}