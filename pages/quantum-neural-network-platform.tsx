import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function QuantumNeuralNetworkPlatformPage() {
  const features = [
    {
      title: "Quantum-Classical Hybrid Training",
      description: "Seamlessly combine quantum and classical neural networks for optimal performance",
      icon: "⚛️",
      benefits: ["Faster convergence", "Better generalization", "Quantum advantage in specific tasks"]
    },
    {
      title: "Quantum Feature Mapping",
      description: "Transform classical data into quantum states for enhanced pattern recognition",
      icon: "🔮",
      benefits: ["Higher dimensional representations", "Quantum entanglement features", "Improved separability"]
    },
    {
      title: "Variational Quantum Circuits",
      description: "Parameterized quantum circuits that can be optimized for specific machine learning tasks",
      icon: "🔄",
      benefits: ["Trainable quantum parameters", "Hybrid optimization", "Quantum gradient descent"]
    },
    {
      title: "Quantum Error Mitigation",
      description: "Advanced error correction and mitigation techniques for reliable quantum computations",
      icon: "🛡️",
      benefits: ["Noise reduction", "Error correction", "Reliable results"]
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum-enhanced risk assessment and portfolio optimization",
      icon: "💰",
      benefits: ["Complex risk modeling", "Portfolio optimization", "Market prediction"]
    },
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular simulations",
      icon: "🧬",
      benefits: ["Molecular dynamics", "Protein folding", "Drug interaction prediction"]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate simulations with quantum-enhanced computational power",
      icon: "🌍",
      benefits: ["Weather prediction", "Climate change modeling", "Environmental impact analysis"]
    },
    {
      title: "Logistics Optimization",
      description: "Solve complex routing and scheduling problems with quantum algorithms",
      icon: "🚚",
      benefits: ["Route optimization", "Supply chain management", "Resource allocation"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Quantum Hardware",
      specs: [
        "Support for 50+ qubit systems",
        "Multiple quantum processor types",
        "Real-time quantum state monitoring",
        "Quantum error correction support"
      ]
    },
    {
      category: "Classical Integration",
      specs: [
        "TensorFlow/PyTorch compatibility",
        "RESTful API endpoints",
        "Real-time data streaming",
        "Cloud deployment options"
      ]
    },
    {
      category: "Performance",
      specs: [
        "10-100x speedup for specific tasks",
        "Scalable to enterprise workloads",
        "Real-time inference capabilities",
        "Multi-tenant architecture"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with AI. Experience unprecedented computational power for complex machine learning tasks." />
        <meta name="keywords" content="quantum neural network, quantum AI, quantum machine learning, quantum computing platform, hybrid quantum-classical AI" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Experience the future of AI with our revolutionary quantum neural network platform. 
              Combine the power of quantum computing with advanced machine learning for unprecedented computational capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#features" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Features
              </Link>
              <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Quantum Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold mb-4">Exponential Speedup</h3>
                <p className="text-gray-300">
                  Achieve 10-100x performance improvements for specific computational tasks 
                  through quantum parallelism and entanglement.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-semibold mb-4">Enhanced Learning</h3>
                <p className="text-gray-300">
                  Leverage quantum superposition and interference for more sophisticated 
                  pattern recognition and decision-making capabilities.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-2xl font-semibold mb-4">Novel Solutions</h3>
                <p className="text-gray-300">
                  Solve previously intractable problems in optimization, simulation, 
                  and machine learning through quantum algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  <ul className="space-y-1 text-left">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <span className="text-blue-400 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Technical Specifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">{spec.category}</h3>
                  <ul className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Platform Architecture</h2>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="text-3xl">🌐</div>
                    <h3 className="text-lg font-semibold">Classical Layer</h3>
                    <p className="text-sm text-gray-300">Data preprocessing, classical ML models, API endpoints</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-3xl">🔗</div>
                    <h3 className="text-lg font-semibold">Hybrid Interface</h3>
                    <p className="text-sm text-gray-300">Quantum-classical data conversion, optimization algorithms</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-3xl">⚛️</div>
                    <h3 className="text-lg font-semibold">Quantum Layer</h3>
                    <p className="text-sm text-gray-300">Quantum processors, quantum algorithms, error correction</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-300 text-sm">
                    Seamless integration between classical and quantum computing resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Get Started</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Quick Start Guide</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Access Platform</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        zion quantum login --platform qnn
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Create Quantum Model</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        zion quantum create --type neural-network --qubits 10
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Train & Deploy</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        zion quantum train --model qnn-model --data dataset
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link href="/docs" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    View Full Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Quantum AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of artificial intelligence with our quantum neural network platform. 
              Unlock unprecedented computational power for your most complex challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Quantum Journey
              </Link>
              <Link href="/services" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}