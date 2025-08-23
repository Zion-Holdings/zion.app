import React from 'react';
import Layout from '../../components/layout/Layout';
import { Shield, Lock, Eye, AlertTriangle, Users, Network, Zap, Target, Star, Award } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security against sophisticated cyber threats',
      icon: Shield,
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'AI-powered threat intelligence',
        'Automated response systems'
      ]
    },
    {
      title: 'Zero Trust Security',
      description: 'Never trust, always verify security architecture',
      icon: Lock,
      features: [
        'Identity verification',
        'Access control policies',
        'Network segmentation',
        'Continuous monitoring'
      ]
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      icon: AlertTriangle,
      features: [
        '24/7 incident monitoring',
        'Forensic analysis',
        'Recovery planning',
        'Post-incident review'
      ]
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments and compliance',
      icon: Eye,
      features: [
        'Vulnerability assessments',
        'Penetration testing',
        'Compliance audits',
        'Security recommendations'
      ]
    }
  ];

  const securityFeatures = [
    {
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of your digital assets',
      icon: Eye
    },
    {
      title: 'AI-Powered Detection',
      description: 'Machine learning for advanced threat identification',
      icon: Zap
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulations',
      icon: Award
    },
    {
      title: 'Expert Team',
      description: 'Certified cybersecurity professionals',
      icon: Users
    }
  ];

  return (
    <Layout
      title="Cybersecurity Services | Zion Tech Group"
      description="Advanced cybersecurity solutions including threat protection, zero trust security, incident response, and comprehensive security audits. Protect your business with cutting-edge security technology."
      keywords="cybersecurity, threat protection, zero trust, incident response, security audits, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="mx-auto h-20 w-20 text-red-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Advanced security solutions that protect your business from evolving 
                cyber threats with cutting-edge technology and expert expertise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Secure Your Business
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Security Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced features that provide comprehensive protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-red-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-10 w-10 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a breach to happen. Protect your business with 
              enterprise-grade cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Protected Now
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Free Security Audit
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;