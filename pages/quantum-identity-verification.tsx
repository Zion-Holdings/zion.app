import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { User, Shield, Zap, CheckCircle, Users, Globe, ArrowRight, Eye, Key, Fingerprint } from 'lucide-react';

const QuantumIdentityVerificationPage: React.FC = () => {
  const verificationFeatures = [
    {
      icon: User,
      title: 'Quantum Biometrics',
      description: 'Advanced biometric verification enhanced by quantum computing algorithms'
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum-secured identity verification with cryptographic protection'
    },
    {
      icon: Zap,
      title: 'Real-time Verification',
      description: 'Instant identity verification with quantum-powered processing'
    },
    {
      icon: CheckCircle,
      title: 'Multi-factor Authentication',
      description: 'Layered security with quantum-enhanced authentication methods'
    }
  ];

  const verificationMethods = [
    'Quantum biometric scanning',
    'Quantum digital signatures',
    'Quantum key authentication',
    'Quantum random verification',
    'Quantum secure channels',
    'Quantum-resistant algorithms',
    'Quantum identity tokens',
    'Quantum blockchain verification'
  ];

  const applications = [
    'Government ID systems',
    'Financial services',
    'Healthcare access',
    'Border control',
    'Corporate security',
    'IoT device authentication',
    'Cloud access control',
    'Mobile device security'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Identity Verification - Zion Tech Group"
        description="Revolutionary quantum-powered identity verification system for unbreakable security and authentication"
        keywords={['quantum identity', 'identity verification', 'quantum authentication', 'quantum biometrics', 'identity security']}
        image="https://ziontechgroup.com/og-quantum-identity-verification.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-violet-600/20 rounded-full">
                <User className="w-12 h-12 text-violet-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-violet-400"> Identity Verification</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure your identity with quantum-powered verification technology. Unbreakable authentication, 
              quantum biometrics, and advanced security for the future of identity management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors">
                Get Verified
              </button>
              <button className="px-8 py-3 border border-violet-400 text-violet-400 hover:bg-violet-400/10 font-semibold rounded-lg transition-colors">
                Security Demo
              </button>
            </div>
          </div>
        </section>

        {/* Verification Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Verification Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum-powered identity verification capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {verificationFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-violet-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-violet-400" />
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

        {/* Verification Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Verification Methods
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum-powered verification techniques
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verificationMethods.map((method, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Fingerprint className="w-12 h-12 text-violet-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {method}
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
                Transform identity verification across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-violet-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Identity Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that trust our quantum identity verification system 
                for the highest level of security and authentication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-violet-400 text-violet-400 hover:bg-violet-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumIdentityVerificationPage;