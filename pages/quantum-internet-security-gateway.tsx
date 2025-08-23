import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Server, Shield, Zap, Lock, Users, CheckCircle, ArrowRight, Eye, Key, Network } from 'lucide-react';

const QuantumInternetSecurityGatewayPage: React.FC = () => {
  const gatewayFeatures = [
    {
      icon: Server,
      title: 'Quantum Gateway Security',
      description: 'Advanced gateway protection with quantum encryption and threat prevention'
    },
    {
      icon: Shield,
      title: 'Network Perimeter Defense',
      description: 'Comprehensive perimeter security with quantum-powered firewall systems'
    },
    {
      icon: Zap,
      title: 'Real-time Threat Detection',
      description: 'Instant threat identification and response with quantum AI systems'
    },
    {
      icon: Lock,
      title: 'Quantum Access Control',
      description: 'Secure access management with quantum authentication and authorization'
    }
  ];

  const securityCapabilities = [
    'Quantum firewall protection',
    'Intrusion detection systems',
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
        title="Quantum Internet Security Gateway - Zion Tech Group"
        description="Advanced quantum internet security gateway for comprehensive network protection and threat prevention"
        keywords={['quantum gateway', 'internet security', 'network security', 'quantum firewall', 'gateway protection']}
        image="https://ziontechgroup.com/og-quantum-internet-security-gateway.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-600/20 rounded-full">
                <Server className="w-12 h-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Internet Security
              <span className="text-orange-400"> Gateway</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your network with our quantum internet security gateway. Advanced threat prevention, 
              quantum encryption, and comprehensive network security for the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                Secure Your Gateway
              </button>
              <button className="px-8 py-3 border border-orange-400 text-orange-400 hover:bg-orange-400/10 font-semibold rounded-lg transition-colors">
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
                Advanced quantum gateway security capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {gatewayFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-orange-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-orange-400" />
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
                Comprehensive security features for network protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-orange-400 mx-auto" />
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
                    <Network className="w-12 h-12 text-orange-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Gateway Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that trust our quantum internet security gateway 
                for the highest level of network protection and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-orange-400 text-orange-400 hover:bg-orange-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumInternetSecurityGatewayPage;