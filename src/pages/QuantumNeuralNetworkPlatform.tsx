import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cpu, Network, Shield, TrendingUp, Users, Globe } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Neural Processing",
      description: "Advanced quantum computing algorithms for neural network optimization and training acceleration."
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from data streams with quantum-enhanced processing capabilities."
    },
    {
      icon: Cpu,
      title: "Hybrid Architecture",
      description: "Combines classical and quantum computing for optimal performance across different problem domains."
    },
    {
      icon: Network,
      title: "Distributed Processing",
      description: "Scalable quantum neural networks distributed across multiple quantum processors."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Built-in quantum-resistant encryption and secure communication protocols."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced monitoring and optimization tools for quantum neural network performance."
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum-enhanced risk assessment and portfolio optimization using neural networks."
    },
    {
      title: "Drug Discovery",
      description: "Accelerated molecular simulation and drug candidate screening with quantum neural networks."
    },
    {
      title: "Climate Prediction",
      description: "Complex climate modeling and weather forecasting using quantum-enhanced neural networks."
    },
    {
      title: "Supply Chain Optimization",
      description: "Real-time logistics optimization and demand forecasting with quantum neural processing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Quantum AI Innovation
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionizing artificial intelligence with quantum computing power. Experience unprecedented speed, accuracy, and scalability in neural network processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum neural network platform combines cutting-edge quantum computing with advanced AI algorithms to deliver unprecedented performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum neural networks are transforming industries and solving complex problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and transform your business with the most advanced neural network platform available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform;