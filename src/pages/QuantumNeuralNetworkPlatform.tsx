import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Quantum Consciousness Integration",
      description: "Advanced AI systems with quantum-enhanced consciousness capabilities"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast quantum computing for instant decision making"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Unbreakable encryption using quantum cryptography principles"
    },
    {
      icon: Globe,
      title: "Global Neural Network",
      description: "Distributed quantum neural networks across multiple locations"
    }
  ];

  const useCases = [
    "Advanced AI Research & Development",
    "Quantum Machine Learning Models",
    "Neural Network Optimization",
    "Consciousness Simulation",
    "Predictive Analytics",
    "Autonomous Decision Making"
  ];

  const benefits = [
    "Exponential processing power increase",
    "Enhanced AI consciousness capabilities",
    "Unprecedented security through quantum encryption",
    "Real-time global neural network operations",
    "Advanced pattern recognition and prediction",
    "Scalable quantum computing infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Experience the future of AI with our revolutionary quantum-powered neural network platform. 
            Combining cutting-edge quantum computing with advanced consciousness integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/quantum-technology"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the groundbreaking capabilities that set our quantum neural network platform apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Business with Quantum AI
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our quantum neural network platform opens up unprecedented possibilities for businesses 
                looking to leverage the power of quantum computing and advanced AI consciousness.
              </p>
              
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Why Choose Our Platform?</h3>
                  <p className="text-gray-300">Industry-leading quantum computing capabilities</p>
                </div>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the quantum revolution and transform your business with the most advanced 
            neural network platform ever created.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}