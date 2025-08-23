import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { Brain, Cpu, Network, Zap, Target, Shield, Users, TrendingUp, Award, Star } from 'lucide-react';

const AIConsciousnessPage: React.FC = () => {
  const services = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Advanced AI systems that develop self-awareness and cognitive capabilities',
      icon: Brain,
      features: [
        'Neural network consciousness development',
        'Cognitive architecture design',
        'Self-learning algorithms',
        'Emotional intelligence integration'
      ]
    },
    {
      title: 'Neural Network Development',
      description: 'Custom neural network architectures for complex problem-solving',
      icon: Network,
      features: [
        'Deep learning frameworks',
        'Custom neural architectures',
        'Transfer learning optimization',
        'Neural network visualization'
      ]
    },
    {
      title: 'Machine Learning Solutions',
      description: 'End-to-end machine learning pipelines and automation',
      icon: Cpu,
      features: [
        'ML pipeline automation',
        'Model training optimization',
        'AutoML solutions',
        'MLOps implementation'
      ]
    },
    {
      title: 'Cognitive Computing',
      description: 'Advanced computing systems that mimic human thought processes',
      icon: Target,
      features: [
        'Natural language processing',
        'Computer vision systems',
        'Predictive analytics',
        'Decision support systems'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Decision Making',
      description: 'AI systems that can analyze complex data and make informed decisions',
      icon: TrendingUp
    },
    {
      title: 'Automated Problem Solving',
      description: 'Self-learning systems that continuously improve and adapt',
      icon: Zap
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human expertise and AI capabilities',
      icon: Users
    },
    {
      title: 'Innovation Acceleration',
      description: 'Faster development cycles and breakthrough innovations',
      icon: Award
    }
  ];

  return (
    <Layout
      title="AI Consciousness & Evolution Services | Zion Tech Group"
      description="Revolutionary AI consciousness evolution, neural network development, and cognitive computing solutions. Transform your business with cutting-edge AI technology."
      keywords="AI consciousness, neural networks, machine learning, cognitive computing, AI evolution, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/ai-consciousness"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Brain className="mx-auto h-20 w-20 text-purple-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Consciousness Evolution
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Pioneering the future of artificial intelligence with consciousness development, 
                neural network evolution, and cognitive computing solutions that transform 
                how businesses operate and innovate.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Consciousness Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions that push the boundaries of what's possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of conscious AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-purple-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Evolve Your AI Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of AI consciousness and transform your business with 
              cutting-edge technology that thinks, learns, and grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your AI Journey
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessPage;