import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Brain, Moon, Zap, Users, Globe, CheckCircle, ArrowRight, Eye, Heart, Sparkles } from 'lucide-react';

const AIDreamInterpreterPlatformPage: React.FC = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: 'AI Dream Analysis',
      description: 'Advanced neural networks trained on extensive dream psychology and symbolism databases'
    },
    {
      icon: Moon,
      title: 'Dream Pattern Recognition',
      description: 'Identify recurring themes, symbols, and emotional patterns across dream sequences'
    },
    {
      icon: Zap,
      title: 'Real-time Interpretation',
      description: 'Instant dream analysis with contextual understanding and personalized insights'
    },
    {
      icon: Users,
      title: 'Collaborative Dream Journal',
      description: 'Share and compare dreams with community insights and expert analysis'
    }
  ];

  const interpretationCapabilities = [
    'Symbolic meaning analysis',
    'Emotional pattern recognition',
    'Cultural context awareness',
    'Personal history integration',
    'Recurring dream identification',
    'Lucid dreaming guidance',
    'Dream journal analytics',
    'Sleep quality correlation'
  ];

  const applications = [
    'Personal growth and self-awareness',
    'Psychological therapy support',
    'Creative inspiration',
    'Stress and anxiety analysis',
    'Sleep disorder insights',
    'Subconscious exploration'
  ];

  return (
    <Layout>
      <SEO
        title="AI Dream Interpreter Platform - Zion Tech Group"
        description="Revolutionary AI-powered platform for dream interpretation, analysis, and subconscious exploration"
        keywords={['AI dream interpreter', 'dream analysis', 'dream psychology', 'AI psychology', 'dream interpretation']}
        image="https://ziontechgroup.com/og-ai-dream-interpreter.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-600/20 rounded-full">
                <Moon className="w-12 h-12 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Dream
              <span className="text-indigo-400"> Interpreter</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock the mysteries of your subconscious with our AI-powered dream interpretation platform. 
              Understand your dreams, discover patterns, and gain insights into your inner world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                Start Interpreting
              </button>
              <button className="px-8 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 font-semibold rounded-lg transition-colors">
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
                Comprehensive AI-powered dream interpretation capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-indigo-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-indigo-400" />
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

        {/* Interpretation Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interpretation Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI algorithms for comprehensive dream analysis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interpretationCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Eye className="w-12 h-12 text-indigo-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {capability}
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
                How AI dream interpretation can enhance your life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Heart className="w-12 h-12 text-indigo-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore Your Dreams?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users who are already discovering the hidden meanings 
                in their dreams with AI-powered interpretation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 font-semibold rounded-lg transition-colors">
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

export default AIDreamInterpreterPlatformPage;