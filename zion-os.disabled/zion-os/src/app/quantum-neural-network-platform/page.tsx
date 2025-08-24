import Link from 'next/link';

export default function QuantumNeuralNetworkPlatformPage() {
  const platformFeatures = [
    {
      title: 'Quantum-Classical Hybrid Architecture',
      description: 'Seamlessly integrates quantum processing with classical computing for optimal performance',
      benefits: [
        'Enhanced computational power',
        'Faster training times',
        'Improved accuracy',
        'Scalable architecture'
      ]
    },
    {
      title: 'Advanced Quantum Algorithms',
      description: 'State-of-the-art quantum algorithms optimized for neural network operations',
      benefits: [
        'Quantum advantage',
        'Efficient optimization',
        'Novel computational approaches',
        'Research-driven innovation'
      ]
    },
    {
      title: 'Real-time Processing',
      description: 'Ultra-fast processing capabilities for real-time AI applications',
      benefits: [
        'Instant decision making',
        'Live data processing',
        'Minimal latency',
        'High throughput'
      ]
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud-based quantum computing infrastructure that scales with your needs',
      benefits: [
        'Pay-per-use pricing',
        'Global accessibility',
        'Enterprise security',
        'Automatic scaling'
      ]
    }
  ];

  const applications = [
    {
      category: 'Financial Services',
      useCases: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Algorithmic Trading',
        'Fraud Detection',
        'Credit Scoring'
      ]
    },
    {
      category: 'Healthcare & Life Sciences',
      useCases: [
        'Drug Discovery',
        'Protein Folding',
        'Medical Imaging',
        'Genomic Analysis',
        'Clinical Trials'
      ]
    },
    {
      category: 'Logistics & Supply Chain',
      useCases: [
        'Route Optimization',
        'Inventory Management',
        'Demand Forecasting',
        'Warehouse Optimization',
        'Transportation Planning'
      ]
    },
    {
      category: 'Energy & Utilities',
      useCases: [
        'Grid Optimization',
        'Renewable Energy',
        'Load Balancing',
        'Predictive Maintenance',
        'Energy Trading'
      ]
    }
  ];

  const technologySpecs = [
    {
      category: 'Quantum Processing',
      specs: [
        'Quantum Bits (Qubits): 50-1000+',
        'Quantum Volume: 1000+',
        'Coherence Time: 100+ microseconds',
        'Gate Fidelity: 99.9%+',
        'Error Correction: Surface code'
      ]
    },
    {
      category: 'Classical Integration',
      specs: [
        'CPU: Multi-core processors',
        'GPU: CUDA-enabled graphics cards',
        'Memory: 128GB+ RAM',
        'Storage: NVMe SSDs',
        'Network: 100Gbps+ connectivity'
      ]
    },
    {
      category: 'Software Stack',
      specs: [
        'Quantum SDK: Qiskit, Cirq',
        'ML Frameworks: TensorFlow, PyTorch',
        'Optimization: Qiskit Optimization',
        'Simulation: Qiskit Aer',
        'Development: Python, Julia'
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        'Encryption: AES-256',
        'Authentication: Multi-factor',
        'Compliance: SOC 2, ISO 27001',
        'Audit: Full audit trail',
        'Privacy: GDPR compliant'
      ]
    }
  ];

  const performanceMetrics = [
    {
      metric: '10x-100x',
      label: 'Speed Improvement',
      description: 'Compared to classical neural networks'
    },
    {
      metric: '99.9%',
      label: 'Accuracy',
      description: 'In complex optimization problems'
    },
    {
      metric: '<1ms',
      label: 'Latency',
      description: 'For real-time applications'
    },
    {
      metric: '24/7',
      label: 'Uptime',
      description: 'Continuous quantum processing'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quantum Neural Network</span> Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with our revolutionary quantum neural network platform. 
            Harness the power of quantum mechanics to solve complex problems that were previously impossible.
          </p>
        </div>

        {/* What is Quantum Neural Networks */}
        <div className="bg-black/20 p-8 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">What are Quantum Neural Networks?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Quantum Neural Networks (QNNs) represent the convergence of quantum computing and artificial intelligence. 
                By leveraging quantum mechanical phenomena like superposition and entanglement, QNNs can process information 
                in ways that classical computers cannot.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform combines the best of both worlds: quantum processing for complex computations and classical 
                computing for practical applications, creating a hybrid system that delivers unprecedented performance.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Advantages</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">⚛️</span>
                  Quantum superposition
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">🔗</span>
                  Quantum entanglement
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">📊</span>
                  Parallel processing
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">🚀</span>
                  Exponential speedup
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-black/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200">
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-purple-400 font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{application.category}</h3>
                <ul className="space-y-2">
                  {application.useCases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-purple-400 mr-2">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Specifications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technology Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologySpecs.map((tech, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {spec}
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
              <p className="text-gray-300 text-sm">Evaluate quantum computing needs and use cases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">Design quantum-classical hybrid architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Develop and optimize quantum algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Deploy on quantum cloud infrastructure</p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  100 quantum operations/month
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Basic quantum algorithms
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Email support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  API access
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/30 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$2,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  1,000 quantum operations/month
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Advanced quantum algorithms
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Priority support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Training & consultation
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-black/20 p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Unlimited quantum operations
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Custom quantum algorithms
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  24/7 dedicated support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  On-premise deployment
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  SLA guarantees
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Quantum Computing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the future of computing with our quantum neural network platform. 
            Transform your business with unprecedented computational power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/quantum-computing"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}