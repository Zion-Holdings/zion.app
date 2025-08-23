import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { GitBranch, Zap, Shield, BarChart3, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const AutonomousDevOpsPlatformPage: React.FC = () => {
  const platformFeatures = [
    {
      icon: GitBranch,
      title: 'Automated CI/CD',
      description: 'Intelligent pipeline orchestration with automated testing and deployment'
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'Automated security scanning, vulnerability assessment, and compliance checks'
    },
    {
      icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and configuration management'
    },
    {
      icon: BarChart3,
      title: 'Performance Monitoring',
      description: 'Real-time performance insights and automated optimization'
    }
  ];

  const capabilities = [
    'Self-healing infrastructure',
    'Automated rollback systems',
    'Intelligent scaling',
    'Predictive maintenance',
    'Cross-cloud orchestration',
    'Zero-downtime deployments'
  ];

  const benefits = [
    '90% reduction in deployment time',
    '99.9% uptime guarantee',
    'Automated security compliance',
    'Reduced operational costs',
    'Faster incident response',
    'Improved team productivity'
  ];

  return (
    <Layout>
      <SEO
        title="Autonomous DevOps Platform - Zion Tech Group"
        description="Revolutionary autonomous DevOps platform for automated, intelligent, and secure software delivery"
        keywords={['autonomous DevOps', 'CI/CD automation', 'DevOps automation', 'infrastructure automation', 'security automation']}
        image="https://ziontechgroup.com/og-autonomous-devops.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-teal-600/20 rounded-full">
                <GitBranch className="w-12 h-12 text-teal-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous
              <span className="text-teal-400"> DevOps Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your DevOps operations with intelligent automation. Deploy faster, 
              more securely, and with zero manual intervention using our autonomous platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive automation for every aspect of DevOps operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
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

        {/* Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Next-generation DevOps automation powered by AI and machine learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-teal-400 mr-3" />
                    <span className="text-white font-medium">{capability}</span>
                  </div>
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
                Measurable Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your DevOps performance with quantifiable improvements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-teal-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that are already using autonomous DevOps to 
                accelerate delivery and improve reliability.
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

export default AutonomousDevOpsPlatformPage;