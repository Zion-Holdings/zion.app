import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Shield, Scale, Users, Globe, CheckCircle, ArrowRight, BookOpen, Heart } from 'lucide-react';

const AIEthicsGovernancePage: React.FC = () => {
  const governancePrinciples = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear understanding of how AI systems make decisions and operate'
    },
    {
      icon: Scale,
      title: 'Fairness',
      description: 'Ensuring AI systems treat all individuals and groups equitably'
    },
    {
      icon: Users,
      title: 'Accountability',
      description: 'Clear responsibility for AI system outcomes and decisions'
    },
    {
      icon: Heart,
      title: 'Privacy Protection',
      description: 'Safeguarding personal data and maintaining user confidentiality'
    }
  ];

  const frameworks = [
    'IEEE Ethics in Action',
    'EU AI Act Compliance',
    'OECD AI Principles',
    'UNESCO AI Ethics',
    'NIST AI Risk Management',
    'ISO/IEC 42001 Standards'
  ];

  const implementationAreas = [
    'Algorithmic bias detection',
    'Data privacy compliance',
    'Human oversight systems',
    'Impact assessment tools',
    'Ethics training programs',
    'Stakeholder engagement'
  ];

  return (
    <Layout>
      <SEO
        title="AI Ethics & Governance - Zion Tech Group"
        description="Comprehensive AI ethics and governance solutions for responsible artificial intelligence development"
        keywords={['AI ethics', 'AI governance', 'responsible AI', 'ethical AI', 'AI compliance', 'AI regulations']}
        image="https://ziontechgroup.com/og-ai-ethics-governance.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-600/20 rounded-full">
                <Shield className="w-12 h-12 text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Ethics &
              <span className="text-amber-400"> Governance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build and deploy AI systems with confidence using our comprehensive ethics 
              and governance framework. Ensure responsible AI development from concept to deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-semibold rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Governance Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Fundamental principles that guide responsible AI development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {governancePrinciples.map((principle, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-amber-600/20 rounded-lg mr-4">
                      <principle.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-300">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Frameworks
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Support for major international AI ethics and governance standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <BookOpen className="w-12 h-12 text-amber-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {framework}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Practical tools and solutions for implementing AI ethics and governance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationAreas.map((area, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-amber-400 mr-3" />
                    <span className="text-white font-medium">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Responsible AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join organizations that are leading the way in ethical AI development 
                and governance. Build trust and ensure compliance from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">
                  Start Implementation
                </button>
                <button className="px-8 py-4 border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-semibold rounded-lg transition-colors">
                  Contact Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIEthicsGovernancePage;