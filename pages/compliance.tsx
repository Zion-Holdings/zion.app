import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Lock, Database, Globe, Zap, Target } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      icon: Shield,
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for data security and availability',
      features: ['Security controls', 'Availability monitoring', 'Processing integrity', 'Confidentiality', 'Privacy']
    },
    {
      icon: Lock,
      title: 'ISO 27001',
      description: 'Information Security Management System certification',
      features: ['Risk assessment', 'Security controls', 'Incident management', 'Business continuity']
    },
    {
      icon: Database,
      title: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data protection',
      features: ['Data processing', 'User consent', 'Data portability', 'Right to be forgotten']
    },
    {
      icon: Users,
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      features: ['PHI protection', 'Privacy rules', 'Security standards', 'Breach notification']
    }
  ];

  const complianceTools = [
    {
      icon: FileText,
      title: 'Automated Auditing',
      description: 'Continuous monitoring and automated compliance reporting'
    },
    {
      icon: Target,
      title: 'Policy Management',
      description: 'Centralized policy creation, distribution, and enforcement'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Live compliance status and instant violation alerts'
    },
    {
      icon: CheckCircle,
      title: 'Evidence Collection',
      description: 'Automated evidence gathering for audit preparation'
    }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Technology & SaaS',
    'Government & Defense',
    'Retail & E-commerce',
    'Manufacturing',
    'Energy & Utilities',
    'Education'
  ];

  return (
    <Layout>
      <SEO
        title="Compliance Solutions - Zion Tech Group"
        description="Comprehensive compliance automation and management solutions for enterprise organizations"
        keywords={['compliance', 'SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'audit automation', 'risk management']}
        image="https://ziontechgroup.com/og-compliance.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600/20 rounded-full">
                <Shield className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automated
              <span className="text-green-400"> Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your compliance processes with AI-powered automation. Achieve and maintain 
              compliance across multiple frameworks with confidence and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                Get Compliant
              </button>
              <button className="px-8 py-3 border border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-colors">
                Compliance Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Framework Support
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We support all major compliance frameworks and standards across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                      <framework.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {framework.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {framework.description}
                      </p>
                      <ul className="space-y-2">
                        {framework.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Compliance Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform provides everything you need to manage compliance effectively
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-600/20 rounded-lg">
                      <tool.icon className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We understand the unique compliance challenges across different industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {industry}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Simplify Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of organizations that trust us to manage their compliance requirements 
                with automated, intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-colors">
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

export default CompliancePage;