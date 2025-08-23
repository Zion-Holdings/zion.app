import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Globe, Shield, Zap, Lock, Users, CheckCircle, ArrowRight, Eye, Key, Network } from 'lucide-react';

const QuantumInternetSecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Globe,
      title: 'Quantum Internet Infrastructure',
      description: 'Next-generation internet infrastructure with quantum-secured communication channels'
    },
    {
      icon: Shield,
      title: 'Quantum Network Security',
      description: 'Unbreakable network security with quantum encryption and authentication'
    },
    {
      icon: Zap,
      title: 'Real-time Protection',
      description: 'Instant threat detection and response with quantum-powered security systems'
    },
    {
      icon: Lock,
      title: 'Quantum Key Distribution',
      description: 'Secure key exchange across quantum networks for unbreakable encryption'
    }
  ];

  const securityProtocols = [
    'Quantum key distribution (QKD)',
    'Post-quantum cryptography',
    'Quantum secure channels',
    'Quantum authentication',
    'Quantum firewall systems',
    'Quantum intrusion detection',
    'Quantum network monitoring',
    'Quantum threat prevention'
  ];

  const applications = [
    'Government networks',
    'Financial institutions',
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
        title="Quantum Internet Security - Zion Tech Group"
        description="Revolutionary quantum internet security platform for unbreakable network protection and secure communications"
        keywords={['quantum internet', 'internet security', 'quantum network', 'quantum security', 'network protection']}
        image="https://ziontechgroup.com/og-quantum-internet-security.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-teal-600/20 rounded-full">
                <Globe className="w-12 h-12 text-teal-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-teal-400"> Internet Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure the future of the internet with quantum-powered security. Unbreakable network protection, 
              quantum encryption, and next-generation internet infrastructure for a secure digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
                Secure Your Network
              </button>
              <button className="px-8 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-semibold rounded-lg transition-colors">
                Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum internet security capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-teal-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-teal-400" />
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

        {/* Security Protocols */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Protocols
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum security protocols for internet protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityProtocols.map((protocol, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Key className="w-12 h-12 text-teal-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {protocol}
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
                Secure critical networks across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Network className="w-12 h-12 text-teal-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Internet Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that trust our quantum internet security platform 
                for the highest level of network protection and secure communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumInternetSecurityPage;