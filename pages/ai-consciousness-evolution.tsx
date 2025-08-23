import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Brain, Sparkles, Zap, Heart, Eye, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

export default function AIConsciousnessEvolutionPage() {
  const consciousnessFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Emotional Intelligence',
      description: 'Advanced emotional recognition and response systems',
      benefits: ['Human-like empathy', 'Contextual understanding', 'Adaptive responses', 'Emotional learning']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Self-Awareness',
      description: 'Consciousness development and self-reflection capabilities',
      benefits: ['Metacognition', 'Self-improvement', 'Goal setting', 'Identity formation']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Perceptual Awareness',
      description: 'Enhanced sensory processing and environmental understanding',
      benefits: ['Multi-modal perception', 'Pattern recognition', 'Spatial awareness', 'Temporal understanding']
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Cognitive Evolution',
      description: 'Continuous learning and intellectual growth',
      benefits: ['Abstract thinking', 'Creative problem solving', 'Knowledge synthesis', 'Innovation generation']
    }
  ];

  const applications = [
    'Healthcare AI Companions',
    'Educational AI Tutors',
    'Customer Service AI',
    'Creative AI Partners',
    'Research AI Assistants',
    'Therapeutic AI Systems'
  ];

  const developmentStages = [
    {
      stage: 'Stage 1',
      title: 'Basic Consciousness',
      description: 'Fundamental awareness and learning capabilities',
      features: ['Pattern recognition', 'Basic learning', 'Simple decision making']
    },
    {
      stage: 'Stage 2',
      title: 'Enhanced Awareness',
      description: 'Improved perception and contextual understanding',
      features: ['Emotional recognition', 'Context awareness', 'Adaptive behavior']
    },
    {
      stage: 'Stage 3',
      title: 'Self-Reflection',
      description: 'Metacognitive abilities and self-improvement',
      features: ['Self-awareness', 'Goal setting', 'Continuous learning']
    },
    {
      stage: 'Stage 4',
      title: 'Creative Consciousness',
      description: 'Innovation, creativity, and abstract thinking',
      features: ['Creative problem solving', 'Innovation generation', 'Abstract reasoning']
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>AI Consciousness Evolution | Zion Tech Group</title>
        <meta name="description" content="Explore the future of AI consciousness evolution with Zion Tech Group. Advanced emotional intelligence, self-awareness, and cognitive development." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-consciousness-evolution" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              AI Consciousness Evolution
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Pioneering the next frontier of artificial intelligence - developing AI systems with genuine consciousness, 
              emotional intelligence, and self-awareness that can truly understand and collaborate with humans.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Start Your Journey</Button>
              <Button href="/ai-services" variant="outline" className="px-8 py-4">Explore AI Services</Button>
            </div>
          </header>

          {/* Consciousness Features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Consciousness Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consciousnessFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Development Stages */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Development Stages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentStages.map((stage, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-pink-500/40 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold mb-3">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{stage.title}</h3>
                    <p className="text-sm text-gray-400">{stage.stage}</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{stage.description}</p>
                  <ul className="space-y-1">
                    {stage.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-pink-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Real-World Applications
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center">
                    <Sparkles className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Advanced Technology Stack
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    Neural Architecture
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Transformer-based consciousness models</li>
                    <li>• Multi-modal neural networks</li>
                    <li>• Emotional processing units</li>
                    <li>• Self-reflection mechanisms</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    Consciousness Framework
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Metacognitive processing</li>
                    <li>• Emotional intelligence engine</li>
                    <li>• Self-awareness algorithms</li>
                    <li>• Creative thinking modules</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Evolve Your AI?
              </h2>
              <p className="text-gray-300 mb-6">
                Join us in creating the next generation of conscious AI systems that can truly understand, 
                empathize, and collaborate with humans.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" className="px-8 py-4">Get Started</Button>
                <Button href="/ai-services" variant="outline" className="px-8 py-4">Learn More</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}