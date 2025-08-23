import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Palette, Music, Video, PenTool, Sparkles, Zap, Users, Globe, CheckCircle } from 'lucide-react';

const AICreativityOrchestratorPage: React.FC = () => {
  const creativeDomains = [
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'AI-powered painting, illustration, and graphic design generation'
    },
    {
      icon: Music,
      title: 'Audio & Music',
      description: 'Composition, sound design, and audio production automation'
    },
    {
      icon: Video,
      title: 'Video & Animation',
      description: 'Dynamic video creation, editing, and animation generation'
    },
    {
      icon: PenTool,
      title: 'Writing & Content',
      description: 'Creative writing, storytelling, and content generation'
    }
  ];

  const features = [
    'Multi-modal creative synthesis',
    'Style transfer and adaptation',
    'Collaborative AI-human creation',
    'Real-time creative feedback',
    'Cross-domain inspiration',
    'Intelligent creative workflows'
  ];

  const applications = [
    'Marketing & Advertising',
    'Entertainment & Media',
    'Product Design',
    'Educational Content',
    'Brand Development',
    'Creative Agencies'
  ];

  return (
    <Layout>
      <SEO
        title="AI Creativity Orchestrator - Zion Tech Group"
        description="Revolutionary AI-powered platform for orchestrating creative processes across multiple domains"
        keywords={['AI creativity', 'creative orchestration', 'AI art', 'AI music', 'AI video', 'creative automation']}
        image="https://ziontechgroup.com/og-ai-creativity-orchestrator.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-violet-600/20 rounded-full">
                <Sparkles className="w-12 h-12 text-violet-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Creativity
              <span className="text-violet-400"> Orchestrator</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock unlimited creative potential with our AI-powered orchestration platform. 
              Seamlessly blend human imagination with artificial intelligence across all creative domains.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors">
                Start Creating
              </button>
              <button className="px-8 py-3 border border-violet-400 text-violet-400 hover:bg-violet-400/10 font-semibold rounded-lg transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Creative Domains */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Domains
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore the full spectrum of AI-powered creative expression
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {creativeDomains.map((domain, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-violet-600/20 rounded-lg mr-4">
                      <domain.icon className="w-8 h-8 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {domain.title}
                      </h3>
                      <p className="text-gray-300">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to orchestrate your creative vision
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-violet-400 mr-3" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
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
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform creative workflows across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-violet-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Orchestrate Your Creativity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join creative professionals who are already using AI to push the boundaries 
                of what's possible in art, music, video, and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-violet-400 text-violet-400 hover:bg-violet-400/10 font-semibold rounded-lg transition-colors">
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

export default AICreativityOrchestratorPage;