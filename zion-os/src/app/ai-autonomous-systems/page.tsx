import Link from 'next/link';

export default function AIAutonomousSystemsPage() {
  const autonomousSystems = [
    {
      name: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations management with strategic decision-making capabilities',
      features: [
        'Strategic Planning & Execution',
        'Resource Allocation & Optimization',
        'Performance Monitoring & Analytics',
        'Risk Assessment & Mitigation',
        'Stakeholder Communication',
        'Compliance Management'
      ],
      benefits: [
        '24/7 Business Operations',
        'Data-Driven Decision Making',
        'Cost Reduction & Efficiency',
        'Scalable Operations',
        'Real-time Adaptability',
        'Continuous Improvement'
      ],
      href: '/ai-autonomous-business-manager'
    },
    {
      name: 'AI Autonomous Research Assistant',
      description: 'Advanced research automation across scientific, business, and academic domains',
      features: [
        'Literature Review & Analysis',
        'Data Collection & Processing',
        'Hypothesis Generation',
        'Statistical Analysis',
        'Report Writing & Summarization',
        'Citation Management'
      ],
      benefits: [
        'Accelerated Research',
        'Comprehensive Coverage',
        'Quality Assurance',
        'Time Savings',
        'Multi-language Support',
        'Collaborative Research'
      ],
      href: '/ai-autonomous-research-assistant'
    },
    {
      name: 'AI Autonomous Decision Engine',
      description: 'Real-time decision making powered by advanced machine learning algorithms',
      features: [
        'Predictive Analytics',
        'Scenario Modeling',
        'Risk Assessment',
        'Optimization Algorithms',
        'Real-time Processing',
        'Explainable AI'
      ],
      benefits: [
        'Faster Decision Making',
        'Reduced Human Bias',
        'Improved Accuracy',
        'Scalable Operations',
        'Continuous Learning',
        'Audit Trail'
      ],
      href: '/ai-autonomous-decision-engine'
    },
    {
      name: 'AI Autonomous Ecosystem Manager',
      description: 'Comprehensive management of complex AI ecosystems and integrations',
      features: [
        'System Integration',
        'Performance Monitoring',
        'Resource Optimization',
        'Security Management',
        'Scalability Planning',
        'Disaster Recovery'
      ],
      benefits: [
        'Unified Management',
        'Improved Reliability',
        'Cost Optimization',
        'Enhanced Security',
        'Easier Scaling',
        'Reduced Complexity'
      ],
      href: '/ai-autonomous-ecosystem-manager'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: [
        'Patient Diagnosis & Treatment Planning',
        'Medical Research & Drug Discovery',
        'Healthcare Operations Management',
        'Predictive Health Analytics'
      ]
    },
    {
      industry: 'Finance',
      applications: [
        'Risk Assessment & Management',
        'Portfolio Optimization',
        'Fraud Detection',
        'Trading Strategy Execution'
      ]
    },
    {
      industry: 'Manufacturing',
      applications: [
        'Predictive Maintenance',
        'Quality Control',
        'Supply Chain Optimization',
        'Production Planning'
      ]
    },
    {
      industry: 'Retail',
      applications: [
        'Inventory Management',
        'Customer Behavior Analysis',
        'Pricing Optimization',
        'Supply Chain Management'
      ]
    }
  ];

  const technologyStack = [
    {
      category: 'Machine Learning',
      technologies: ['Deep Learning', 'Reinforcement Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      category: 'AI Frameworks',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face Transformers']
    },
    {
      category: 'Cloud Infrastructure',
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker']
    },
    {
      category: 'Data Processing',
      technologies: ['Apache Spark', 'Apache Kafka', 'Elasticsearch', 'Redis']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Autonomous Systems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI agents that operate independently, making intelligent decisions and executing complex tasks 
            without human intervention. Transform your business operations with truly autonomous AI systems.
          </p>
        </div>

        {/* What are Autonomous Systems */}
        <div className="bg-black/20 p-8 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">What are AI Autonomous Systems?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                AI Autonomous Systems are advanced artificial intelligence platforms that can operate independently 
                without human supervision. These systems can perceive their environment, make decisions, and take 
                actions based on their understanding of the situation and predefined objectives.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Unlike traditional AI systems that require constant human oversight, autonomous AI systems can 
                learn, adapt, and evolve their strategies over time, making them ideal for complex, dynamic 
                environments where human intervention would be impractical or impossible.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Key Characteristics</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Self-learning and adaptation
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Independent decision making
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Continuous improvement
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Scalable operations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Autonomous Systems */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Autonomous AI Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {autonomousSystems.map((system, index) => (
              <div key={index} className="bg-black/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200">
                <h3 className="text-2xl font-semibold text-white mb-4">{system.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{system.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-purple-400 font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-blue-400 font-medium mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {system.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={system.href}
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-purple-400 mr-2">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyStack.map((tech, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <li key={techIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {technology}
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
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300 text-sm">Evaluate current systems and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">Design autonomous AI architecture and workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Build and train autonomous AI systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Deploy and monitor autonomous systems in production</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how autonomous AI systems can transform your business operations and drive unprecedented efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
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