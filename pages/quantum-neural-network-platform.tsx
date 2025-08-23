import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Brain, Atom, Zap, Shield, Cpu, Database, Network, Server, Monitor, Globe, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb, Search, Grid, List, TrendingUp, ArrowRight } from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    'Quantum-Classical Hybrid Computing',
    'Neural Network Optimization',
    'Quantum Error Correction',
    'Real-time Quantum Processing',
    'Advanced AI Integration',
    'Scalable Architecture'
  ];

  const benefits = [
    'Exponential speedup for complex AI tasks',
    'Enhanced pattern recognition capabilities',
    'Improved optimization algorithms',
    'Future-proof quantum-ready infrastructure',
    'Reduced computational costs',
    'Advanced security through quantum cryptography'
  ];

  const useCases = [
    'Drug Discovery & Molecular Modeling',
    'Financial Risk Analysis',
    'Climate Change Modeling',
    'Advanced Machine Learning',
    'Cryptography & Security',
    'Scientific Research & Simulation'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center">
                <Atom className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary quantum-powered neural networks that combine the best of quantum computing and artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature}</h3>
                  <p className="text-gray-300">
                    Advanced quantum computing capabilities integrated with cutting-edge neural network technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300">
                      Transform your computational capabilities with quantum-powered solutions.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase}</h3>
                  <p className="text-gray-300 text-sm">
                    Leverage quantum neural networks for breakthrough results in this domain.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock unprecedented computational power
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a 
                href="/quantum-services"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View All Quantum Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumNeuralNetworkPlatform;