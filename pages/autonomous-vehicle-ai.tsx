import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Car, Brain, Shield, Zap, Users, Globe, CheckCircle, ArrowRight, Eye, Map } from 'lucide-react';

const AutonomousVehicleAIPage: React.FC = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: 'Advanced Perception',
      description: 'Multi-sensor fusion for comprehensive environmental understanding and object detection'
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Redundant safety mechanisms and fail-safe protocols for maximum passenger protection'
    },
    {
      icon: Zap,
      title: 'Real-time Decision Making',
      description: 'Instant AI-powered decision making for complex traffic scenarios and navigation'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless interaction between autonomous systems and human drivers'
    }
  ];

  const technologyCapabilities = [
    'Computer vision and object recognition',
    'Lidar and radar sensor fusion',
    'GPS and mapping integration',
    'Predictive analytics',
    'Machine learning algorithms',
    'Edge computing processing',
    '5G connectivity',
    'Cloud-based updates'
  ];

  const safetyFeatures = [
    '360-degree environmental awareness',
    'Predictive collision avoidance',
    'Emergency braking systems',
    'Lane departure prevention',
    'Traffic sign recognition',
    'Pedestrian detection',
    'Weather adaptation',
    'Redundant sensor systems'
  ];

  return (
    <Layout>
      <SEO
        title="Autonomous Vehicle AI - Zion Tech Group"
        description="Revolutionary AI-powered autonomous vehicle technology for safe, efficient, and intelligent transportation"
        keywords={['autonomous vehicles', 'self-driving cars', 'AI transportation', 'autonomous driving', 'vehicle AI']}
        image="https://ziontechgroup.com/og-autonomous-vehicle-ai.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600/20 rounded-full">
                <Car className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Vehicle
              <span className="text-green-400"> AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize transportation with our AI-powered autonomous vehicle technology. Safe, efficient, 
              and intelligent driving systems for the future of mobility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                Learn More
              </button>
              <button className="px-8 py-3 border border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced artificial intelligence capabilities for autonomous driving
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-green-400" />
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

        {/* Technology Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technology stack for autonomous vehicle operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologyCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Safety Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive safety systems for maximum passenger protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature}
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
                Ready for the Future of Transportation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the autonomous vehicle revolution. Our AI technology is paving the way 
                for safer, more efficient, and sustainable transportation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-colors">
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

export default AutonomousVehicleAIPage;