import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Globe, Users, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Eye, Heart, Sparkles } from 'lucide-react';

const MetaverseDigitalRealityPlatformPage: React.FC = () => {
  const platformFeatures = [
    {
      icon: Globe,
      title: 'Virtual Worlds',
      description: 'Create and explore immersive 3D environments with unlimited possibilities'
    },
    {
      icon: Users,
      title: 'Social Interaction',
      description: 'Connect with people globally through avatars and virtual experiences'
    },
    {
      icon: Zap,
      title: 'Real-time Rendering',
      description: 'High-performance graphics and smooth interactions for seamless experiences'
    },
    {
      icon: Shield,
      title: 'Digital Identity',
      description: 'Secure and customizable digital identities with privacy protection'
    }
  ];

  const immersiveExperiences = [
    'Virtual reality (VR) integration',
    'Augmented reality (AR) support',
    '3D spatial audio',
    'Haptic feedback systems',
    'Gesture recognition',
    'Eye tracking technology',
    'Brain-computer interfaces',
    'Emotional AI responses'
  ];

  const applications = [
    'Virtual meetings and collaboration',
    'Digital entertainment and gaming',
    'Virtual education and training',
    'Digital commerce and shopping',
    'Virtual tourism and exploration',
    'Social networking and events',
    'Virtual real estate',
    'Digital art and creativity'
  ];

  return (
    <Layout>
      <SEO
        title="Metaverse Digital Reality Platform - Zion Tech Group"
        description="Revolutionary metaverse platform for immersive digital experiences, virtual worlds, and social interaction"
        keywords={['metaverse', 'digital reality', 'virtual worlds', 'immersive experiences', 'VR AR platform']}
        image="https://ziontechgroup.com/og-metaverse-platform.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-600/20 rounded-full">
                <Globe className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Metaverse
              <span className="text-purple-400"> Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Step into the future with our metaverse digital reality platform. Create, explore, and connect 
              in immersive virtual worlds that blur the line between digital and physical reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Enter Metaverse
              </button>
              <button className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-lg transition-colors">
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
                Comprehensive metaverse capabilities for immersive digital experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-purple-400" />
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

        {/* Immersive Experiences */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Immersive Experiences
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technology for truly immersive digital reality
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {immersiveExperiences.map((experience, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Eye className="w-12 h-12 text-purple-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {experience}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform industries with metaverse technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Sparkles className="w-12 h-12 text-purple-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enter the Metaverse?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the digital revolution. Our platform is your gateway to immersive virtual experiences 
                and the future of human interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MetaverseDigitalRealityPlatformPage;