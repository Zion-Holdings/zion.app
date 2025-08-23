import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Network, Shield, Zap, Lock, Users, CheckCircle, ArrowRight, Eye, Key, Globe } from 'lucide-react';

const QuantumNetworkSecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Network,
      title: 'Quantum Network Protection',
      description: 'Advanced quantum encryption and security for comprehensive network protection'
    },
    {
      icon: Shield,
      title: 'Threat Prevention',
      description: 'Proactive threat detection and prevention using quantum-powered security systems'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous network monitoring with instant threat response and mitigation'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Quantum-secured access management and authentication for network resources'
    }
  ];

  const securityCapabilities = [
    'Quantum firewall systems',
    'Intrusion detection',
    'DDoS protection',
    'Malware prevention',
    'Traffic analysis',
    'Threat intelligence',
    'Incident response',
    'Security monitoring'
  ];

  const applications = [
    'Enterprise networks',
    'Data centers',
    'Cloud environments',
    'IoT networks',
    '5G infrastructure',
    'Government networks',
    'Financial systems',
    'Healthcare networks'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Network Security - Zion Tech Group"
        description="Advanced quantum network security platform for comprehensive protection and threat prevention"
        keywords={['quantum network security', 'network protection', 'quantum security', 'network defense', 'threat prevention']}
        image="https://ziontechgroup.com/og-quantum-network-security.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-lime-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-lime-600/20 rounded-full">
                <Network className="w-12 h-12 text-lime-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-lime-400"> Network Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure your network with quantum-powered security technology. Advanced threat prevention, 
              quantum encryption, and comprehensive network protection for the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-colors">
                Secure Your Network
              </button>
              <button className="px-8 py-3 border border-lime-400 text-lime-400 hover:bg-lime-400/10 font-semibold rounded-lg transition-colors">
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
                Advanced quantum network security capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-lime-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-lime-400" />
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

        {/* Security Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive network security features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-lime-400 mx-auto" />
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
                Secure networks across diverse environments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-lime-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-lime-600/20 to-green-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Network Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that trust our quantum network security platform 
                for the highest level of network protection and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-lime-400 text-lime-400 hover:bg-lime-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumNetworkSecurityPage;