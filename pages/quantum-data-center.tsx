import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Server, Zap, Shield, BarChart3, Users, Globe, CheckCircle, ArrowRight, Cpu, Database } from 'lucide-react';

const QuantumDataCenterPage: React.FC = () => {
  const dataCenterFeatures = [
    {
      icon: Server,
      title: 'Quantum Computing Infrastructure',
      description: 'State-of-the-art quantum computers and quantum-classical hybrid systems'
    },
    {
      icon: Zap,
      title: 'Quantum Processing Units',
      description: 'High-performance quantum processors for complex computational tasks'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable quantum encryption and secure quantum communication channels'
    },
    {
      icon: BarChart3,
      title: 'Quantum Analytics',
      description: 'Advanced quantum algorithms for data analysis and machine learning'
    }
  ];

  const quantumCapabilities = [
    'Quantum machine learning',
    'Quantum cryptography',
    'Quantum simulation',
    'Quantum optimization',
    'Quantum error correction',
    'Quantum networking',
    'Quantum memory systems',
    'Quantum sensing'
  ];

  const applications = [
    'Financial modeling',
    'Drug discovery',
    'Climate modeling',
    'Logistics optimization',
    'Cryptographic security',
    'AI acceleration',
    'Scientific research',
    'Supply chain optimization'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Data Center - Zion Tech Group"
        description="Revolutionary quantum data center infrastructure for next-generation computing and data processing"
        keywords={['quantum data center', 'quantum computing', 'quantum infrastructure', 'quantum processing', 'quantum storage']}
        image="https://ziontechgroup.com/og-quantum-data-center.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full">
                <Server className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-blue-400"> Data Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of computing with our quantum data center. Unprecedented processing power, 
              quantum security, and revolutionary computational capabilities for the next generation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Explore Infrastructure
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors">
                Schedule Tour
              </button>
            </div>
          </div>
        </section>

        {/* Data Center Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Center Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge quantum computing infrastructure and capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataCenterFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum computing and processing capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quantumCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Cpu className="w-12 h-12 text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform industries with quantum computing power
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Database className="w-12 h-12 text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that are already leveraging quantum computing 
                to solve previously impossible problems and accelerate innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumDataCenterPage;