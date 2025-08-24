import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, Brain, Target, Star, Sparkles, Zap, Users, Award, 
  Clock, CheckCircle, Globe, Code, ChevronRight, ExternalLink, 
  TrendingUp, BarChart3, Lock, Eye, Settings, Monitor, Smartphone,
  Activity, Target as TargetIcon, Zap as ZapIcon, DollarSign, Rocket,
  PenTool, Image, Video, Mic, Play
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AIContentGenerationPage() {
  const features = [
    {
      icon: FileText,
      title: 'Multi-Format Content',
      description: 'Generate articles, blogs, social media posts, and marketing copy in seconds',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Creativity',
      description: 'Advanced language models that understand context and brand voice',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Create high-quality content in seconds, not hours or days',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Personalized Content',
      description: 'Tailor content to specific audiences and marketing goals',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contentTypes = [
    {
      name: 'Written Content',
      description: 'Articles, blogs, whitepapers, and marketing copy',
      features: ['SEO optimization', 'Brand voice consistency', 'Multiple languages', 'Plagiarism-free']
    },
    {
      name: 'Social Media',
      description: 'Posts, captions, and engagement content',
      features: ['Platform optimization', 'Trending topics', 'Hashtag suggestions', 'Engagement prompts']
    },
    {
      name: 'Marketing Materials',
      description: 'Email campaigns, landing pages, and ads',
      features: ['Conversion optimization', 'A/B testing variants', 'Personalization', 'Call-to-action optimization']
    },
    {
      name: 'Creative Writing',
      description: 'Stories, scripts, and creative content',
      features: ['Narrative structure', 'Character development', 'Plot generation', 'Creative inspiration']
    }
  ];

  const pricing = {
    starter: {
      price: '$99/month',
      features: [
        'Up to 100 content pieces/month',
        'Basic AI models',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ]
    },
    professional: {
      price: '$299/month',
      features: [
        'Up to 1000 content pieces/month',
        'Advanced AI models',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Brand voice training',
        'Multi-language support'
      ]
    },
    enterprise: {
      price: '$799/month',
      features: [
        'Unlimited content generation',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantees',
        'API access'
      ]
    }
  };

  return (
    <>
      <Head>
        <title>AI Content Generation - Zion Tech Group | Automated Content Creation</title>
        <meta name="description" content="Generate high-quality content instantly with AI-powered writing tools. Create articles, social media posts, and marketing copy in seconds." />
        <meta name="keywords" content="AI content generation, automated writing, content creation, AI writing tools, marketing content" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-generation" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              AI Content Generation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Transform your content creation with AI-powered writing tools that generate high-quality articles, social media posts, and marketing copy in seconds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Content Creation Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our AI content generation platform combines cutting-edge language models with intelligent creativity tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Content Types & Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From blog posts to marketing campaigns, our AI can generate any type of content you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={contentType.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <PenTool className="w-5 h-5 text-cyan-400 mr-2" />
                    {contentType.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{contentType.description}</p>
                  <ul className="space-y-3">
                    {contentType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Advanced AI Capabilities</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Our AI content generation platform uses state-of-the-art language models and machine learning algorithms to create content that resonates with your audience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Natural language understanding and generation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Brand voice and style consistency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">SEO optimization and keyword integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Multi-language support and localization</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20"
              >
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Content Performance</h3>
                  <p className="text-gray-300 mb-6">
                    Track and optimize your AI-generated content performance with real-time analytics.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Content Generated</span>
                      <span className="text-green-400 font-semibold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Time Saved</span>
                      <span className="text-cyan-400 font-semibold">89%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Quality Score</span>
                      <span className="text-blue-400 font-semibold">94/100</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Content Plan</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your content creation needs and volume requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    plan === 'professional'
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-gray-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  {plan === 'professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{details.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      plan === 'professional'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700/50 text-white border border-gray-600/50 hover:bg-gray-600/50 hover:border-cyan-500/50'
                    }`}
                  >
                    {plan === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators and marketers already using AI to generate high-quality content in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}