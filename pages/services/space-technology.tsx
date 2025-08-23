import React from 'react';
import Layout from '../../components/layout/Layout';
import { Rocket, Satellite, Globe, Target, Star, Award, Zap, Users } from 'lucide-react';

const SpaceTechnologyPage: React.FC = () => {
  const services = [
    {
      title: 'Space Exploration',
      description: 'Advanced technologies for space exploration and discovery',
      icon: Rocket,
      features: [
        'Satellite technology',
        'Space mission planning',
        'Exploration robotics',
        'Data collection systems'
      ]
    },
    {
      title: 'Resource Management',
      description: 'Intelligent systems for space resource optimization',
      icon: Target,
      features: [
        'Resource mapping',
        'Optimization algorithms',
        'Sustainability planning',
        'Efficiency monitoring'
      ]
    },
    {
      title: 'Satellite Systems',
      description: 'Next-generation satellite technology and management',
      icon: Satellite,
      features: [
        'Satellite design',
        'Orbital mechanics',
        'Communication systems',
        'Ground station management'
      ]
    },
    {
      title: 'Space Analytics',
      description: 'Data-driven insights for space operations',
      icon: Globe,
      features: [
        'Space data analysis',
        'Predictive modeling',
        'Performance optimization',
        'Risk assessment'
      ]
    }
  ];

  const spaceFeatures = [
    {
      title: 'Innovation',
      description: 'Cutting-edge space technology solutions',
      icon: Zap
    },
    {
      title: 'Reliability',
      description: 'Mission-critical systems built for space',
      icon: Award
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly space solutions',
      icon: Star
    },
    {
      title: 'Expertise',
      description: 'Specialized space technology team',
      icon: Users
    }
  ];

  return (
    <Layout
      title="Space Technology Services | Zion Tech Group"
      description="Revolutionary space technology solutions including exploration, resource management, satellite systems, and space analytics. Pioneer the future of space technology."
      keywords="space technology, space exploration, satellite systems, resource management, space analytics, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/space-technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Rocket className="mx-auto h-20 w-20 text-pink-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Space Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Pioneering the future of space exploration and resource management 
                with cutting-edge technology that pushes the boundaries of what's possible.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Space Tech
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Space Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions for the final frontier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-pink-500/20 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-pink-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-pink-400 mr-3 flex-shrink-0" />
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
                Why Choose Our Space Tech?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading-edge technology for space exploration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {spaceFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-pink-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-10 w-10 text-pink-400" />
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
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the space revolution and be part of humanity's next great adventure 
              with cutting-edge space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Launch Space Journey
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Space Technology Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceTechnologyPage;