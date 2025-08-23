import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  PenTool, FileText, Image, Video, Mic, Globe, 
  Zap, Shield, Users, CheckCircle, Star, Lock, 
  Smartphone, Monitor, TrendingUp, Palette
} from 'lucide-react';

export default function AIContentCreationSuite() {
  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality written content including blog posts, articles, social media posts, and marketing copy.'
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and illustrations using advanced AI image generation technology.'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'AI Video Creation',
      description: 'Generate engaging video content, animations, and multimedia presentations automatically.'
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'AI Audio Generation',
      description: 'Create voiceovers, podcasts, and audio content with natural-sounding AI voices.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Generate content in multiple languages with accurate translations and cultural adaptations.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Content Optimization',
      description: 'AI-powered SEO optimization and content performance analysis to maximize engagement.'
    }
  ];

  const benefits = [
    'Create content 10x faster than traditional methods',
    'Reduce content creation costs by 70%',
    'Improve content engagement by 50%',
    'Generate unlimited content variations',
    'Maintain consistent brand voice across all content',
    'Scale content production effortlessly',
    'Optimize content for better SEO performance',
    'Create personalized content for different audiences'
  ];

  const contentTypes = [
    'Blog Posts & Articles', 'Social Media Content', 'Marketing Copy',
    'Product Descriptions', 'Email Campaigns', 'Landing Pages',
    'Video Scripts', 'Podcast Scripts', 'Press Releases',
    'White Papers', 'Case Studies', 'Infographics'
  ];

  return (
    <>
      <Head>
        <title>AI Content Creation Suite | Zion Tech Group</title>
        <meta name="description" content="Create engaging content at scale with AI-powered tools. Generate text, images, videos, and audio content automatically." />
        <meta name="keywords" content="AI content creation, content generation, AI writing, AI image generation, AI video creation, content automation" />
        <meta property="og:title" content="AI Content Creation Suite | Zion Tech Group" />
        <meta property="og:description" content="Create engaging content at scale with AI-powered tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-creation-suite" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-creation-suite" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Content Creation Suite
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Create engaging content at scale with AI-powered tools. Generate text, images, videos, 
                and audio content that captivates your audience and drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-emerald-500/30 text-emerald-400 rounded-xl font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Content Creation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI suite combines advanced natural language processing, computer vision, and 
                audio generation to deliver comprehensive content creation capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Content Strategy
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in content creation efficiency, quality, and performance 
                with our AI-powered content creation suite.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From blog posts to videos, our AI suite can generate virtually any type of content 
                your business needs to engage and convert your audience.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{contentType}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators that have already revolutionized their workflow 
                with AI automation. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-emerald-500/30 text-emerald-400 rounded-xl font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-200"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}