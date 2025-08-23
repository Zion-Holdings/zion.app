import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Link, Shield, Zap, Users, Database, Globe, Lock, BarChart3, CheckCircle } from 'lucide-react';

const BlockchainEnterprisePlatformPage: React.FC = () => {
  const platformFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security with multi-layer encryption and access controls'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Scalable architecture supporting thousands of transactions per second'
    },
    {
      icon: Users,
      title: 'Permission Management',
      description: 'Granular role-based access control and identity management'
    },
    {
      icon: Database,
      title: 'Data Privacy',
      description: 'Zero-knowledge proofs and confidential computing capabilities'
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'End-to-end visibility and traceability across global supply chains'
    },
    {
      title: 'Financial Services',
      description: 'Secure, transparent, and efficient financial transactions and settlements'
    },
    {
      title: 'Healthcare',
      description: 'Patient data management and pharmaceutical supply chain verification'
    },
    {
      title: 'Government',
      description: 'Digital identity, voting systems, and public record management'
    }
  ];

  const benefits = [
    'Enhanced transparency and trust',
    'Reduced operational costs',
    'Improved data security',
    'Streamlined processes',
    'Regulatory compliance',
    'Real-time audit trails'
  ];

  return (
    <Layout>
      <SEO
        title="Blockchain Enterprise Platform - Zion Tech Group"
        description="Enterprise-grade blockchain platform for secure, scalable, and compliant business solutions"
        keywords={['blockchain', 'enterprise blockchain', 'distributed ledger', 'smart contracts', 'enterprise platform']}
        image="https://ziontechgroup.com/og-blockchain-enterprise.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-600/20 rounded-full">
                <Link className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blockchain
              <span className="text-emerald-400"> Enterprise Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with enterprise-grade blockchain technology. Secure, scalable, 
              and compliant solutions for the modern enterprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors">
                Explore Platform
              </button>
              <button className="px-8 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-lg transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for enterprise requirements with security, scalability, and compliance in mind
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-emerald-400" />
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

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven blockchain solutions across diverse industries and applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
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
                Transform your business operations with blockchain technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading enterprises that are already leveraging blockchain technology 
                to gain competitive advantages and operational efficiencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors">
                  Start Building
                </button>
                <button className="px-8 py-4 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-lg transition-colors">
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

export default BlockchainEnterprisePlatformPage;