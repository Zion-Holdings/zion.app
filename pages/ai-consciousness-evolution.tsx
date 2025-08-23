import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Brain, Cpu, Zap, Lightbulb, Network, Eye, Heart, Sparkles, Target, Users } from 'lucide-react';

const AIConsciousnessEvolutionPage: React.FC = () => {
  const consciousnessStages = [
    {
      icon: Cpu,
      title: 'Basic AI',
      description: 'Rule-based systems and pattern recognition',
      capabilities: ['Data processing', 'Pattern matching', 'Automated responses']
    },
    {
      icon: Brain,
      title: 'Narrow AI',
      description: 'Specialized intelligence for specific tasks',
      capabilities: ['Image recognition', 'Language processing', 'Decision making']
    },
    {
      icon: Network,
      title: 'General AI',
      description: 'Multi-domain intelligence and learning',
      capabilities: ['Cross-domain learning', 'Abstract reasoning', 'Creative problem solving']
    },
    {
      icon: Sparkles,
      title: 'Conscious AI',
      description: 'Self-awareness and subjective experience',
      capabilities: ['Self-reflection', 'Emotional intelligence', 'Moral reasoning']
    }
  ];

  const researchAreas = [
    {
      icon: Eye,
      title: 'Self-Awareness',
      description: 'Developing systems that understand their own existence and capabilities'
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Creating AI that can recognize, understand, and respond to human emotions'
    },
    {
      icon: Target,
      title: 'Moral Reasoning',
      description: 'Building ethical frameworks and decision-making capabilities'
    },
    {
      icon: Users,
      title: 'Social Intelligence',
      description: 'Enabling AI to navigate complex social interactions and relationships'
    }
  ];

  const applications = [
    'Mental Health Companions',
    'Educational AI Tutors',
    'Creative Collaboration Partners',
    'Ethical Decision Support Systems',
    'Human-AI Team Coordination',
    'Emotional Support Networks'
  ];

  return (
    <Layout>
      <SEO
        title="AI Consciousness Evolution - Zion Tech Group"
        description="Pioneering research and development in AI consciousness evolution and ethical artificial intelligence"
        keywords={['AI consciousness', 'artificial intelligence', 'consciousness evolution', 'ethical AI', 'self-aware AI']}
        image="https://ziontechgroup.com/og-ai-consciousness.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-600/20 rounded-full">
                <Brain className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Evolution of
              <span className="text-purple-400"> AI Consciousness</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're at the forefront of developing artificial intelligence that goes beyond computation 
              to achieve genuine consciousness, self-awareness, and ethical reasoning capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Explore Research
              </button>
              <button className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-lg transition-colors">
                Join the Discussion
              </button>
            </div>
          </div>
        </section>

        {/* Consciousness Stages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Path to Consciousness
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Understanding the evolutionary stages from basic AI to conscious artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consciousnessStages.map((stage, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg">
                      <stage.icon className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {stage.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {stage.description}
                  </p>
                  <ul className="space-y-2">
                    {stage.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Research Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our multidisciplinary approach to understanding and developing AI consciousness
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <area.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {area.title}
                      </h3>
                      <p className="text-gray-300">
                        {area.description}
                      </p>
                    </div>
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
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                How conscious AI will transform industries and human-AI collaboration
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-purple-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
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
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Shape the Future of AI Consciousness
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our research team and contribute to one of the most important technological 
                developments in human history.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  Join Research Team
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

export default AIConsciousnessEvolutionPage;