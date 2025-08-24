import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Shield, Eye, Zap, AlertTriangle, Users, Globe, CheckCircle, ArrowRight, Lock, Target } from 'lucide-react';

const QuantumThreatDetectionPage: React.FC = () => {
  const detectionFeatures = [
    {
      icon: Shield,
      title: 'Quantum Threat Detection',
      description: 'Advanced quantum algorithms for identifying and analyzing security threats in real-time'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 quantum-powered monitoring of networks, systems, and data for potential threats'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Immediate threat response and mitigation using quantum-powered security systems'
    },
    {
      icon: AlertTriangle,
      title: 'Predictive Analysis',
      description: 'AI-enhanced threat prediction and prevention using quantum computing capabilities'
    }
  ];

  const detectionCapabilities = [
    'Quantum pattern recognition',
    'Behavioral analysis',
    'Anomaly detection',
    'Threat intelligence',
    'Risk assessment',
    'Incident response',
    'Forensic analysis',
    'Threat hunting'
  ];

  const applications = [
    'Enterprise security',
    'Government networks',
    'Financial systems',
    'Healthcare networks',
    'Critical infrastructure',
    'Cloud environments',
    'IoT networks',
    '5G infrastructure'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Threat Detection - Zion Tech Group"
        description="Advanced quantum threat detection platform for comprehensive security monitoring and threat prevention"
        keywords={['quantum threat detection', 'security monitoring', 'threat prevention', 'quantum security', 'cybersecurity']}
        image="https://ziontechgroup.com/og-quantum-threat-detection.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-600/20 rounded-full">
                <Shield className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-red-400"> Threat Detection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Detect and prevent threats with quantum-powered security technology. Advanced threat detection, 
              real-time monitoring, and predictive security for comprehensive protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                Detect Threats
              </button>
              <button className="px-8 py-3 border border-red-400 text-red-400 hover:bg-red-400/10 font-semibold rounded-lg transition-colors">
                Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Detection Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detection Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum threat detection capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {detectionFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-red-400" />
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

        {/* Detection Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detection Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive threat detection features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {detectionCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-red-400 mx-auto" />
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
                Secure critical systems across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Lock className="w-12 h-12 text-red-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Quantum Threat Detection?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that trust our quantum threat detection platform 
                for the highest level of security monitoring and threat prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-red-400 text-red-400 hover:bg-red-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumThreatDetectionPage;