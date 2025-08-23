import React from 'react';
import Layout from '../../components/layout/Layout';
import { Cpu, Cloud, Server, Database, Network, Shield, Zap, Target, Star, Award } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      features: [
        'Multi-cloud management',
        'Cloud migration services',
        'Infrastructure as Code',
        'Cost optimization'
      ]
    },
    {
      title: 'Server Management',
      description: 'Comprehensive server infrastructure solutions',
      icon: Server,
      features: [
        'Server provisioning',
        'Performance monitoring',
        'Backup and recovery',
        'Security hardening'
      ]
    },
    {
      title: 'Database Solutions',
      description: 'High-performance database infrastructure',
      icon: Database,
      features: [
        'Database design',
        'Performance tuning',
        'High availability',
        'Data migration'
      ]
    },
    {
      title: 'Network Infrastructure',
      description: 'Robust networking solutions',
      icon: Network,
      features: [
        'Network design',
        'Security implementation',
        'Performance optimization',
        'Monitoring and alerting'
      ]
    }
  ];

  const infrastructureFeatures = [
    {
      title: 'Scalability',
      description: 'Grow your infrastructure as your business grows',
      icon: Zap
    },
    {
      title: 'Reliability',
      description: '99.9% uptime with redundant systems',
      icon: Award
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security measures',
      icon: Shield
    },
    {
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      icon: Target
    }
  ];

  return (
    <Layout
      title="IT Infrastructure Services | Zion Tech Group"
      description="Comprehensive IT infrastructure solutions including cloud services, server management, database solutions, and network infrastructure. Build a robust foundation for your business."
      keywords="IT infrastructure, cloud services, server management, database solutions, network infrastructure, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/it-infrastructure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Cpu className="mx-auto h-20 w-20 text-yellow-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Infrastructure
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Build a robust, scalable, and secure IT foundation that supports 
                your business growth and digital transformation initiatives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Build Infrastructure
              </button>
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Infrastructure Audit
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions for modern IT infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-yellow-500/20 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for performance, reliability, and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {infrastructureFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-yellow-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-10 w-10 text-yellow-400" />
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
              Ready to Build Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create a solid foundation that supports your business growth and 
              digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Building
              </button>
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Infrastructure Review
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ITInfrastructurePage;