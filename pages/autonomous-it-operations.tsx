import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Server, Zap, Shield, BarChart3, Users, Globe, CheckCircle, ArrowRight, Cpu, Network } from 'lucide-react';

const AutonomousITOperationsPage: React.FC = () => {
  const operationalFeatures = [
    {
      icon: Server,
      title: 'Infrastructure Automation',
      description: 'Automated provisioning, scaling, and management of IT infrastructure resources'
    },
    {
      icon: Zap,
      title: 'Self-Healing Systems',
      description: 'Intelligent systems that automatically detect and resolve operational issues'
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'Automated security monitoring, threat detection, and incident response'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and automatic optimization of system performance'
    }
  ];

  const automationCapabilities = [
    'Server provisioning and decommissioning',
    'Load balancing and scaling',
    'Backup and disaster recovery',
    'Patch management and updates',
    'Configuration management',
    'Monitoring and alerting',
    'Incident response automation',
    'Capacity planning and optimization'
  ];

  const benefits = [
    '99.9% uptime guarantee',
    '90% reduction in manual tasks',
    'Faster incident resolution',
    'Reduced operational costs',
    'Improved security posture',
    'Enhanced scalability'
  ];

  return (
    <Layout>
      <SEO
        title="Autonomous IT Operations - Zion Tech Group"
        description="Revolutionary autonomous IT operations platform for automated infrastructure management and operational excellence"
        keywords={['autonomous IT', 'IT automation', 'infrastructure automation', 'self-healing systems', 'IT operations']}
        image="https://ziontechgroup.com/og-autonomous-it-operations.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full">
                <Server className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous
              <span className="text-blue-400"> IT Operations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IT operations with autonomous automation. Self-healing systems, intelligent monitoring, 
              and automated management for maximum efficiency and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Operational Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Operational Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive autonomous IT operations capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {operationalFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-blue-400" />
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

        {/* Automation Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                End-to-end automation for all IT operational tasks
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Cpu className="w-12 h-12 text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your IT operations with measurable improvements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <CheckCircle className="w-12 h-12 text-blue-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your IT Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that are already using autonomous IT operations 
                to improve efficiency and reduce operational overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors">
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

export default AutonomousITOperationsPage;