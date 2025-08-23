import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { BookOpen, Brain, Zap, Users, Globe, CheckCircle, ArrowRight, Eye, Heart, Target } from 'lucide-react';

const QuantumLearningAcceleratorPage: React.FC = () => {
  const acceleratorFeatures = [
    {
      icon: BookOpen,
      title: 'Quantum Learning Algorithms',
      description: 'Advanced AI algorithms enhanced by quantum computing for personalized learning experiences'
    },
    {
      icon: Brain,
      title: 'Cognitive Enhancement',
      description: 'Quantum-powered tools that accelerate cognitive development and learning retention'
    },
    {
      icon: Zap,
      title: 'Real-time Adaptation',
      description: 'Instant learning path adjustment based on quantum analysis of student performance'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Quantum-enhanced collaborative environments for group learning and knowledge sharing'
    }
  ];

  const learningCapabilities = [
    'Personalized learning paths',
    'Adaptive content delivery',
    'Cognitive performance tracking',
    'Learning pattern analysis',
    'Knowledge gap identification',
    'Skill assessment automation',
    'Progress optimization',
    'Learning outcome prediction'
  ];

  const applications = [
    'K-12 education',
    'Higher education',
    'Corporate training',
    'Professional development',
    'Skills certification',
    'Language learning',
    'STEM education',
    'Special needs education'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Learning Accelerator - Zion Tech Group"
        description="Revolutionary quantum-powered learning accelerator for personalized education and cognitive enhancement"
        keywords={['quantum learning', 'learning accelerator', 'quantum education', 'AI learning', 'personalized education']}
        image="https://ziontechgroup.com/og-quantum-learning-accelerator.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-rose-600/20 rounded-full">
                <BookOpen className="w-12 h-12 text-rose-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-rose-400"> Learning Accelerator</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate learning with quantum-powered education technology. Personalized learning paths, 
              cognitive enhancement, and revolutionary educational experiences for students of all ages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors">
                Start Learning
              </button>
              <button className="px-8 py-3 border border-rose-400 text-rose-400 hover:bg-rose-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Accelerator Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accelerator Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum-powered learning capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {acceleratorFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-rose-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-rose-400" />
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

        {/* Learning Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learning Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum-powered learning features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-rose-400 mx-auto" />
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
                Transform education across all sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Heart className="w-12 h-12 text-rose-400 mx-auto" />
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
            <div className="bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join educational institutions that are already using quantum learning acceleration 
                to transform student outcomes and enhance educational experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-rose-400 text-rose-400 hover:bg-rose-400/10 font-semibold rounded-lg transition-colors">
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

export default QuantumLearningAcceleratorPage;