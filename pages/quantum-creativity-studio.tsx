import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Palette, Sparkles, Zap, Users, Globe, CheckCircle, ArrowRight, Eye, Heart, Brain } from 'lucide-react';

const QuantumCreativityStudioPage: React.FC = () => {
  const studioFeatures = [
    {
      icon: Palette,
      title: 'Quantum Art Generation',
      description: 'AI-powered creative tools enhanced by quantum computing for unprecedented artistic expression'
    },
    {
      icon: Sparkles,
      title: 'Creative Algorithms',
      description: 'Quantum algorithms that generate unique patterns, designs, and creative content'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Instant creative collaboration with quantum-powered real-time rendering and sharing'
    },
    {
      icon: Users,
      title: 'Community Workspace',
      description: 'Collaborative creative environment for artists, designers, and innovators'
    }
  ];

  const creativeTools = [
    'Quantum pattern generator',
    'AI-powered design assistant',
    '3D modeling and sculpting',
    'Music composition tools',
    'Video editing suite',
    'Digital painting canvas',
    'Animation creation',
    'Interactive storytelling'
  ];

  const applications = [
    'Digital art and design',
    'Music and audio production',
    'Film and animation',
    'Game development',
    'Architectural visualization',
    'Fashion design',
    'Product prototyping',
    'Educational content'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Creativity Studio - Zion Tech Group"
        description="Revolutionary quantum-powered creative studio for artists, designers, and innovators"
        keywords={['quantum creativity', 'creative studio', 'AI art', 'quantum art', 'creative tools', 'digital art']}
        image="https://ziontechgroup.com/og-quantum-creativity-studio.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-pink-600/20 rounded-full">
                <Palette className="w-12 h-12 text-pink-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-pink-400"> Creativity Studio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unleash your creativity with quantum-powered tools and AI-enhanced artistic capabilities. 
              Create, collaborate, and innovate in ways never before possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
                Start Creating
              </button>
              <button className="px-8 py-3 border border-pink-400 text-pink-400 hover:bg-pink-400/10 font-semibold rounded-lg transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Studio Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Quantum-powered creative capabilities for unlimited artistic expression
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {studioFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-pink-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-pink-400" />
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

        {/* Creative Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive suite of quantum-enhanced creative applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creativeTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Sparkles className="w-12 h-12 text-pink-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {tool}
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
                Transform industries with quantum-powered creativity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Heart className="w-12 h-12 text-pink-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create with Quantum Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join creative professionals who are already using quantum technology 
                to push the boundaries of artistic expression and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-pink-400 text-pink-400 hover:bg-pink-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumCreativityStudioPage;