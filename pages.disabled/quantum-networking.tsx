import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Network, Zap, Shield, Globe, Users, CheckCircle, ArrowRight, Eye, Key, Cpu } from 'lucide-react';

const QuantumNetworkingPage: React.FC = () => {
  const networkingFeatures = [
    {
      icon: Network,
      title: 'Quantum Network Infrastructure',
      description: 'Next-generation quantum network infrastructure with quantum-secured communication channels'
    },
    {
      icon: Zap,
      title: 'Quantum Communication',
      description: 'Ultra-fast quantum communication with entanglement-based data transfer'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable network security with quantum encryption and authentication'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Worldwide quantum network connectivity for seamless communication'
    }
  ];

  const networkingCapabilities = [
    'Quantum key distribution',
    'Entanglement-based communication',
    'Quantum repeaters',
    'Quantum routers',
    'Quantum switches',
    'Quantum memory systems',
    'Quantum error correction',
    'Quantum network protocols'
  ];

  const applications = [
    'Government communications',
    'Financial networks',
    'Healthcare systems',
    'Military communications',
    'Critical infrastructure',
    'Cloud services',
    'IoT networks',
    '5G/6G networks'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Networking - Zion Tech Group"
        description="Revolutionary quantum networking platform for next-generation communication and network infrastructure"
        keywords={['quantum networking', 'quantum communication', 'quantum network', 'quantum infrastructure', 'quantum protocols']}
        image="https://ziontechgroup.com/og-quantum-networking.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-sky-600/20 rounded-full">
                <Network className="w-12 h-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-sky-400"> Networking</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of networking with quantum technology. Ultra-fast communication, 
              unbreakable security, and revolutionary network infrastructure for the next generation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors">
                Explore Networks
              </button>
              <button className="px-8 py-3 border border-sky-400 text-sky-400 hover:bg-sky-400/10 font-semibold rounded-lg transition-colors">
                Network Demo
              </button>
            </div>
          </div>
        </section>

        {/* Networking Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Networking Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum networking capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {networkingFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-sky-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-sky-400" />
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

        {/* Networking Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Networking Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum networking features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkingCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Cpu className="w-12 h-12 text-sky-400 mx-auto" />
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
                Transform communication across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-sky-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Networking?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that are already using quantum networking 
                to revolutionize communication and network infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-sky-400 text-sky-400 hover:bg-sky-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumNetworkingPage;