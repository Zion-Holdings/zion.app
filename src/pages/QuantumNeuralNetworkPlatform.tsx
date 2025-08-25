import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Brain, Zap, Shield, Globe, Cpu, Network, Rocket } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Consciousness Integration",
      description: "Advanced neural networks with quantum consciousness capabilities for human-like AI reasoning"
    },
    {
      icon: Atom,
      title: "Quantum Computing Power",
      description: "Leveraging quantum bits for exponentially faster neural network training and inference"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from new data streams in real-time"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography"
    },
    {
      icon: Globe,
      title: "Global Neural Network",
      description: "Distributed quantum neural networks across multiple quantum computing nodes"
    },
    {
      icon: Cpu,
      title: "Hybrid Architecture",
      description: "Seamless integration of classical and quantum computing for optimal performance"
    }
  ];

  const useCases = [
    {
      title: "Scientific Research",
      description: "Accelerating drug discovery, climate modeling, and fundamental physics research",
      icon: Atom
    },
    {
      title: "Financial Modeling",
      description: "Complex risk assessment, portfolio optimization, and market prediction",
      icon: Globe
    },
    {
      title: "AI Development",
      description: "Training next-generation AI models with quantum-enhanced neural networks",
      icon: Brain
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat detection and quantum-safe communication protocols",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Atom className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The future of artificial intelligence is here. Our quantum neural network platform combines 
              the power of quantum computing with advanced neural networks to create AI systems that 
              think, learn, and evolve like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services/quantum-technology"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-400">Discover what makes our platform truly groundbreaking</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transformative Use Cases</h2>
            <p className="text-xl text-gray-400">See how quantum neural networks are revolutionizing industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Technology Stack</h2>
            <p className="text-xl text-gray-400">Built with cutting-edge technologies for maximum performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Quantum Computing", icon: Atom, description: "IBM Q, Google Sycamore, D-Wave" },
              { name: "Neural Networks", icon: Brain, description: "TensorFlow, PyTorch, Custom Models" },
              { name: "Cloud Infrastructure", icon: Network, description: "AWS, Azure, Google Cloud" },
              { name: "Security", icon: Shield, description: "Quantum Key Distribution, Post-Quantum Crypto" }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and discover what's possible with the most advanced 
            neural network platform ever created.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
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