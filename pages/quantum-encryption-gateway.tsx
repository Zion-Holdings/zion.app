import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Lock, Shield, Zap, Users, Globe, CheckCircle, ArrowRight, Eye, Key, Network } from 'lucide-react';

const QuantumEncryptionGatewayPage: React.FC = () => {
  const gatewayFeatures = [
    {
      icon: Lock,
      title: 'Quantum Key Distribution',
      description: 'Unbreakable encryption keys generated through quantum mechanics principles'
    },
    {
      icon: Shield,
      title: 'Post-Quantum Cryptography',
      description: 'Advanced cryptographic algorithms resistant to quantum computing attacks'
    },
    {
      icon: Zap,
      title: 'Real-time Encryption',
      description: 'Instant encryption and decryption with quantum-secured communication channels'
    },
    {
      icon: Users,
      title: 'Multi-party Security',
      description: 'Secure communication between multiple parties with quantum authentication'
    }
  ];

  const encryptionCapabilities = [
    'Quantum key distribution (QKD)',
    'Post-quantum cryptography',
    'Quantum random number generation',
    'Quantum digital signatures',
    'Quantum secure channels',
    'Quantum authentication',
    'Quantum key management',
    'Quantum-resistant algorithms'
  ];

  const applications = [
    'Government communications',
    'Financial transactions',
    'Healthcare data protection',
    'Military communications',
    'Critical infrastructure',
    'Cloud security',
    'IoT device protection',
    'Blockchain security'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Encryption Gateway - Zion Tech Group"
        description="Revolutionary quantum encryption gateway for unbreakable security and quantum-secured communications"
        keywords={['quantum encryption', 'quantum cryptography', 'quantum security', 'quantum key distribution', 'post-quantum cryptography']}
        image="https://ziontechgroup.com/og-quantum-encryption-gateway.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-600/20 rounded-full">
                <Lock className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-emerald-400"> Encryption Gateway</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure your communications with quantum encryption technology. Unbreakable security, 
              quantum key distribution, and post-quantum cryptography for the future of secure communication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors">
                Get Secured
              </button>
              <button className="px-8 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-lg transition-colors">
                Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Gateway Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gateway Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum encryption capabilities for maximum security
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {gatewayFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-emerald-400" />
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

        {/* Encryption Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Encryption Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum encryption and security features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {encryptionCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Key className="w-12 h-12 text-emerald-400 mx-auto" />
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
                Secure critical communications across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-emerald-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that trust our quantum encryption gateway 
                for the highest level of security and data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumEncryptionGatewayPage;