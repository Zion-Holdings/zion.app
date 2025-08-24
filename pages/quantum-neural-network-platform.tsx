import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Atom, Brain, Zap, Shield, Globe, Cpu } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'Quantum Consciousness Integration',
      description: 'Advanced neural networks that integrate quantum consciousness principles for enhanced AI understanding.'
    },
    {
      icon: Atom,
      title: 'Quantum Processing Units',
      description: 'State-of-the-art quantum processors that accelerate neural network training and inference.'
    },
    {
      icon: Zap,
      title: 'Real-time Learning',
      description: 'Continuous learning capabilities that adapt and evolve based on new data and experiences.'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable quantum encryption for secure neural network communications and data processing.'
    },
    {
      icon: Globe,
      title: 'Global Neural Network',
      description: 'Distributed quantum neural networks that span across multiple quantum computing centers.'
    },
    {
      icon: Cpu,
      title: 'Hybrid Classical-Quantum',
      description: 'Seamless integration between classical and quantum computing for optimal performance.'
    }
  ];

  const applications = [
    'Advanced Pattern Recognition',
    'Quantum Machine Learning',
    'Consciousness Simulation',
    'Predictive Analytics',
    'Natural Language Processing',
    'Computer Vision',
    'Autonomous Systems',
    'Scientific Research'
  ];

  return (
    <>
      <Head>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced AI consciousness integration." />
        <meta name="keywords" content="quantum neural networks, AI consciousness, quantum computing, machine learning, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-neural-network-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Atom className="w-20 h-20 text-blue-400 animate-spin-slow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary quantum-powered neural networks that integrate consciousness principles, 
              enabling unprecedented AI capabilities and understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/solutions"
                className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Revolutionary Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Applications & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-blue-400 mb-3">
                    <Atom className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{app}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing the world with quantum-powered neural networks that understand, learn, and evolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/team"
                className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}