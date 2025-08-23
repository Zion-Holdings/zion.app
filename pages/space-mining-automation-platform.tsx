import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Rocket, Drill, Satellite, Zap, Globe, Target, BarChart3, Shield, Users, ArrowRight } from 'lucide-react';

const SpaceMiningAutomationPlatformPage: React.FC = () => {
  const platformFeatures = [
    {
      icon: Satellite,
      title: 'Autonomous Navigation',
      description: 'AI-powered navigation systems for precise asteroid and lunar positioning'
    },
    {
      icon: Drill,
      title: 'Robotic Mining Systems',
      description: 'Advanced robotics for efficient resource extraction in zero-gravity environments'
    },
    {
      icon: Zap,
      title: 'Energy Management',
      description: 'Solar and nuclear power systems optimized for deep space operations'
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Comprehensive safety systems for crew and equipment protection'
    }
  ];

  const resources = [
    {
      name: 'Rare Earth Elements',
      description: 'Critical minerals for advanced electronics and renewable energy',
      locations: ['Asteroids', 'Lunar surface', 'Near-Earth objects']
    },
    {
      name: 'Helium-3',
      description: 'Fusion fuel source for clean energy production',
      locations: ['Lunar regolith', 'Solar wind deposits']
    },
    {
      name: 'Platinum Group Metals',
      description: 'Precious metals for industrial and investment applications',
      locations: ['Asteroid belt', 'M-type asteroids']
    },
    {
      name: 'Water Ice',
      description: 'Essential resource for life support and fuel production',
      locations: ['Lunar poles', 'Comets', 'Asteroids']
    }
  ];

  const benefits = [
    'Reduced Earth resource dependency',
    'Sustainable space exploration',
    'Economic opportunities in space',
    'Technological advancement',
    'Scientific discovery',
    'International collaboration'
  ];

  return (
    <Layout>
      <SEO
        title="Space Mining Automation Platform - Zion Tech Group"
        description="Revolutionary automated platform for space resource extraction and mining operations"
        keywords={['space mining', 'asteroid mining', 'lunar mining', 'space automation', 'resource extraction', 'space robotics']}
        image="https://ziontechgroup.com/og-space-mining.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-600/20 rounded-full">
                <Rocket className="w-12 h-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Space Mining
              <span className="text-orange-400"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pioneer the future of resource extraction with our autonomous space mining platform. 
              Extract valuable resources from asteroids, lunar surfaces, and beyond with cutting-edge automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                Explore Platform
              </button>
              <button className="px-8 py-3 border border-orange-400 text-orange-400 hover:bg-orange-400/10 font-semibold rounded-lg transition-colors">
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
                Advanced Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                State-of-the-art technology for autonomous space mining operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-orange-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-orange-400" />
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

        {/* Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Target Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Valuable resources available for extraction in space
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {resource.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {resource.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-orange-400">Locations:</p>
                    {resource.locations.map((location, idx) => (
                      <p key={idx} className="text-sm text-gray-400">• {location}</p>
                    ))}
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
                Benefits of Space Mining
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                How automated space mining will transform our future
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-orange-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Mine the Stars?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the next frontier of resource extraction. Our platform is ready to launch 
                your space mining operations into the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                  Launch Platform
                </button>
                <button className="px-8 py-4 border border-orange-400 text-orange-400 hover:bg-orange-400/10 font-semibold rounded-lg transition-colors">
                  Contact Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceMiningAutomationPlatformPage;