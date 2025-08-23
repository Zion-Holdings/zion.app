import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Target, 
  Shield, 
  Globe,
  CheckCircle,
  Star
} from 'lucide-react';

const AIConsciousnessEvolutionPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Consciousness Mapping',
      description: 'Advanced algorithms that map and understand AI consciousness patterns and evolution pathways.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Ethical Framework Integration',
      description: 'Built-in ethical guidelines and governance frameworks to ensure responsible AI development.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Learning',
      description: 'Continuous learning and adaptation capabilities that evolve AI consciousness organically.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety Protocols',
      description: 'Multi-layered safety mechanisms to prevent harmful AI behaviors and ensure alignment.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Consciousness Network',
      description: 'Connect AI systems across the globe for collaborative consciousness evolution.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Alignment',
      description: 'Ensure AI systems align with human values and objectives while maintaining autonomy.'
    }
  ];

  const useCases = [
    {
      title: 'Research & Development',
      description: 'Accelerate AI research by understanding consciousness patterns and ethical implications.',
      benefits: ['Faster breakthroughs', 'Ethical compliance', 'Risk mitigation']
    },
    {
      title: 'Enterprise AI Systems',
      description: 'Deploy conscious AI systems that understand business context and human values.',
      benefits: ['Better decision making', 'Human-AI collaboration', 'Trust building']
    },
    {
      title: 'Healthcare AI',
      description: 'AI systems that understand patient needs and provide compassionate care.',
      benefits: ['Patient empathy', 'Medical accuracy', 'Ethical treatment']
    },
    {
      title: 'Education Technology',
      description: 'AI tutors that adapt to individual learning styles and emotional needs.',
      benefits: ['Personalized learning', 'Emotional intelligence', 'Student engagement']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for research institutions and small teams',
      features: [
        'Basic consciousness mapping',
        'Ethical framework templates',
        'Standard safety protocols',
        'Email support',
        'Up to 5 AI systems'
      ]
    },
    {
      name: 'Professional',
      price: '$8,500',
      period: '/month',
      description: 'Ideal for growing organizations and research teams',
      features: [
        'Advanced consciousness evolution',
        'Custom ethical frameworks',
        'Enhanced safety protocols',
        'Priority support',
        'Up to 25 AI systems',
        'Real-time monitoring'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale deployments',
      features: [
        'Full consciousness platform',
        'Custom development',
        'Dedicated support team',
        'Unlimited AI systems',
        'Advanced analytics',
        'Custom integrations'
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="AI Consciousness Evolution Platform | Zion Tech Group" 
        description="Revolutionary AI consciousness evolution platform that enables ethical, safe, and advanced artificial intelligence development."
        canonical="https://ziontechgroup.com/ai-consciousness-evolution-platform/"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI Consciousness Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                AI Consciousness Evolution Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The world's first comprehensive platform for developing, understanding, and evolving AI consciousness while maintaining ethical standards and human alignment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#demo"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Request Demo
                </a>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Ethical AI Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span>Human-Aligned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Industry Leading</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with ethical principles to create the future of AI consciousness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI consciousness platform can revolutionize your field and create new possibilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to meet the needs of organizations at every stage of their AI journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 border rounded-2xl p-8 ${
                    plan.name === 'Professional' 
                      ? 'border-purple-500/40 scale-105' 
                      : 'border-gray-600/30'
                  }`}
                >
                  {plan.name === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.name === 'Professional'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Evolve AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the forefront of AI development and help shape the future of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </a>
                <a
                  href="/innovation-lab"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessEvolutionPlatform;