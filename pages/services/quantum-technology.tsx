import React from 'react';
import Layout from '../../components/layout/Layout';
import { Atom, Cpu, Shield, Network, Zap, Target, Brain, Star, TrendingUp, Award } from 'lucide-react';

const QuantumTechnologyPage: React.FC = () => {
  const services = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum processors and computing systems',
      icon: Cpu,
      features: [
        'Quantum processor development',
        'Quantum algorithm optimization',
        'Hybrid quantum-classical systems',
        'Quantum error correction'
      ]
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      icon: Shield,
      features: [
        'Quantum key distribution',
        'Post-quantum cryptography',
        'Quantum-resistant algorithms',
        'Secure communication protocols'
      ]
    },
    {
      title: 'Hybrid Quantum Systems',
      description: 'Integration of quantum and classical computing',
      icon: Network,
      features: [
        'Quantum-classical interfaces',
        'Hybrid algorithm development',
        'Performance optimization',
        'Scalable architectures'
      ]
    },
    {
      title: 'Quantum Algorithms',
      description: 'Custom algorithms for quantum advantage',
      icon: Brain,
      features: [
        'Quantum machine learning',
        'Optimization algorithms',
        'Simulation algorithms',
        'Quantum search algorithms'
      ]
    }
  ];

  const applications = [
    {
      title: 'Financial Modeling',
      description: 'Quantum algorithms for complex financial calculations',
      icon: TrendingUp
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and pharmaceutical research',
      icon: Award
    },
    {
      title: 'Logistics Optimization',
      description: 'Quantum solutions for supply chain optimization',
      icon: Target
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced climate simulation and prediction',
      icon: Zap
    }
  ];

  return (
    <Layout
      title="Quantum Technology Services | Zion Tech Group"
      description="Revolutionary quantum computing, cryptography, and hybrid systems. Experience the power of quantum technology that transforms industries and solves previously impossible problems."
      keywords="quantum computing, quantum cryptography, hybrid systems, quantum algorithms, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/quantum-technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Atom className="mx-auto h-20 w-20 text-cyan-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Harnessing the power of quantum mechanics to revolutionize computing, 
                cryptography, and problem-solving across industries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Quantum Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Quantum Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum solutions that push the boundaries of computation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-cyan-500/20 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world applications where quantum technology provides unprecedented advantages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-cyan-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <application.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with quantum technology that solves previously 
              impossible problems and unlocks new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Quantum Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Quantum Assessment
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumTechnologyPage;