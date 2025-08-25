import React from 'react';
import { Link } from 'react-router-dom';

export default function QuantumNeuralNetworkPlatform() {
  const platformFeatures = [
    {
      title: 'Quantum-Classical Hybrid Training',
      description: 'Seamlessly combine quantum and classical neural networks for optimal performance',
      icon: '⚛️',
      benefits: ['Hybrid optimization', 'Quantum advantage', 'Classical stability']
    },
    {
      title: 'Quantum Feature Mapping',
      description: 'Transform classical data into quantum representations for enhanced learning',
      icon: '🔮',
      benefits: ['Quantum encoding', 'Feature extraction', 'Dimensionality reduction']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Advanced error correction algorithms for reliable quantum computations',
      icon: '🛡️',
      benefits: ['Fault tolerance', 'Noise mitigation', 'Reliable results']
    },
    {
      title: 'Real-time Quantum Simulation',
      description: 'Simulate quantum systems and neural networks in real-time',
      icon: '⚡',
      benefits: ['Instant feedback', 'Interactive learning', 'Rapid prototyping']
    }
  ];

  const applications = [
    {
      domain: 'Drug Discovery',
      description: 'Accelerate pharmaceutical research with quantum-enhanced molecular modeling',
      useCases: ['Protein folding', 'Drug interactions', 'Molecular dynamics']
    },
    {
      domain: 'Financial Modeling',
      description: 'Revolutionize risk assessment and portfolio optimization',
      useCases: ['Risk analysis', 'Portfolio optimization', 'Market prediction']
    },
    {
      domain: 'Climate Science',
      description: 'Model complex climate systems with unprecedented accuracy',
      useCases: ['Weather forecasting', 'Climate modeling', 'Environmental impact']
    },
    {
      domain: 'AI & Machine Learning',
      description: 'Enhance neural network performance with quantum computing',
      useCases: ['Pattern recognition', 'Optimization', 'Feature learning']
    }
  ];

  const quantumAdvantages = [
    {
      advantage: 'Superposition',
      description: 'Process multiple states simultaneously',
      impact: 'Exponential speedup for certain algorithms'
    },
    {
      advantage: 'Entanglement',
      description: 'Correlate quantum states across the network',
      impact: 'Enhanced information processing capabilities'
    },
    {
      advantage: 'Quantum Tunneling',
      description: 'Navigate complex optimization landscapes',
      impact: 'Better convergence in training algorithms'
    },
    {
      advantage: 'Quantum Interference',
      description: 'Leverage wave-like properties for computation',
      impact: 'Improved accuracy in pattern recognition'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Quantum Neural Network Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the future of computing with our quantum-enhanced neural network platform. 
            Combine the power of quantum mechanics with advanced AI for unprecedented performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Access Platform
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{app.domain}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                <ul className="space-y-2">
                  {app.useCases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Quantum Computing Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{advantage.advantage}</h3>
                <p className="text-gray-300 mb-4 text-sm">{advantage.description}</p>
                <p className="text-cyan-300 text-sm font-semibold">{advantage.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Specifications</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Quantum Resources</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Up to 1000+ qubits</li>
                  <li>• Quantum error correction</li>
                  <li>• Multi-qubit entanglement</li>
                  <li>• Quantum memory systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Classical Integration</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• GPU acceleration</li>
                  <li>• Distributed computing</li>
                  <li>• Real-time processing</li>
                  <li>• API integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Security & Compliance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Quantum-safe encryption</li>
                  <li>• SOC 2 compliance</li>
                  <li>• Data privacy controls</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Quantum AI?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational power 
              for your AI applications and research projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services/quantum-technology"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More About Quantum Tech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}