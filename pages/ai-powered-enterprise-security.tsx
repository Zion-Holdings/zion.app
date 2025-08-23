import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Shield, Brain, Zap, Users, Globe, CheckCircle, ArrowRight, Lock, Eye, AlertTriangle } from 'lucide-react';

const AIPoweredEnterpriseSecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms for real-time threat identification and response'
    },
    {
      icon: Shield,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive security framework with continuous verification and access control'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant threat mitigation and incident response automation'
    },
    {
      icon: Users,
      title: 'Behavioral Analytics',
      description: 'User behavior monitoring and anomaly detection for insider threat prevention'
    }
  ];

  const threatProtection = [
    'Advanced persistent threats (APT)',
    'Ransomware and malware',
    'Phishing and social engineering',
    'Insider threats',
    'DDoS attacks',
    'Data exfiltration',
    'Supply chain attacks',
    'Zero-day vulnerabilities'
  ];

  const complianceFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Cybersecurity Framework',
    'FedRAMP',
    'SOX'
  ];

  return (
    <Layout>
      <SEO
        title="AI-Powered Enterprise Security - Zion Tech Group"
        description="Next-generation AI-powered enterprise security platform for comprehensive threat protection and compliance"
        keywords={['AI security', 'enterprise security', 'threat detection', 'cybersecurity', 'zero-trust security']}
        image="https://ziontechgroup.com/og-ai-enterprise-security.jpg"
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
              AI-Powered
              <span className="text-red-400"> Enterprise Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your enterprise with next-generation AI-powered security. Detect, prevent, and respond 
              to threats in real-time with intelligent automation and advanced threat intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                Get Protected
              </button>
              <button className="px-8 py-3 border border-red-400 text-red-400 hover:bg-red-400/10 font-semibold rounded-lg transition-colors">
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
                Comprehensive AI-powered security capabilities for enterprise protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
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

        {/* Threat Protection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive protection against all types of cyber threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {threatProtection.map((threat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Lock className="w-12 h-12 text-red-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {threat}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Frameworks
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built-in compliance with major industry standards and regulations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <CheckCircle className="w-12 h-12 text-red-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {framework}
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
                Ready to Secure Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading enterprises that trust our AI-powered security platform 
                to protect their digital assets and maintain compliance.
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

export default AIPoweredEnterpriseSecurityPage;