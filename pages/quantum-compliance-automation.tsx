import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Shield, Zap, CheckCircle, Users, Globe, ArrowRight, Lock, FileText, Brain, Target } from 'lucide-react';

const QuantumComplianceAutomationPage: React.FC = () => {
  const complianceFeatures = [
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable quantum encryption for compliance data protection and audit trails'
    },
    {
      icon: Zap,
      title: 'Automated Monitoring',
      description: 'Real-time compliance monitoring with instant violation detection and alerts'
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Updates',
      description: 'Automatic regulatory framework updates and compliance requirement tracking'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Quantum-secured access control with granular permissions and audit logging'
    }
  ];

  const supportedFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'SOX',
    'FedRAMP',
    'NIST Cybersecurity'
  ];

  const automationCapabilities = [
    'Continuous compliance monitoring',
    'Automated evidence collection',
    'Real-time risk assessment',
    'Instant violation alerts',
    'Automated remediation',
    'Compliance reporting',
    'Audit trail generation',
    'Regulatory mapping'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Compliance Automation - Zion Tech Group"
        description="Revolutionary quantum-powered compliance automation platform for enterprise regulatory compliance and risk management"
        keywords={['quantum compliance', 'compliance automation', 'regulatory compliance', 'quantum security', 'compliance automation']}
        image="https://ziontechgroup.com/og-quantum-compliance.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyan-600/20 rounded-full">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-cyan-400"> Compliance Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your compliance processes with quantum-powered automation. Achieve and maintain 
              regulatory compliance with unprecedented security and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
                Get Compliant
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-colors">
                Compliance Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Quantum-powered compliance capabilities for enterprise organizations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-cyan-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-cyan-400" />
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

        {/* Supported Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Frameworks
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive support for major compliance frameworks and standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {framework}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                End-to-end automation for all compliance processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that trust our quantum-powered compliance platform 
                to maintain regulatory compliance with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumComplianceAutomationPage;