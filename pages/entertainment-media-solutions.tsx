import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, Music, Camera, Gamepad2, Palette, Video, Headphones, 
  Sparkles, Zap, Target, Users, Globe, Star, ArrowRight,
  Play, Pause, Volume2, Settings, Monitor, Smartphone, Tablet
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function EntertainmentMediaSolutions() {
  const features = [
    {
      icon: <Film className="w-8 h-8" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality video, audio, and visual content using advanced AI algorithms',
      benefits: ['Automated video editing', 'AI-generated music composition', 'Smart content optimization']
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Audio Production & Processing',
      description: 'Professional audio solutions for music, podcasts, and multimedia content',
      benefits: ['AI noise reduction', 'Automated mixing', 'Voice enhancement']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Visual Content Generation',
      description: 'Create stunning images, graphics, and visual assets with AI assistance',
      benefits: ['AI image generation', 'Smart photo editing', 'Brand asset creation']
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Interactive Media Solutions',
      description: 'Engaging interactive content and gamification for entertainment platforms',
      benefits: ['Interactive storytelling', 'Gamified experiences', 'User engagement tools']
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Streaming & Distribution',
      description: 'Optimized streaming solutions and content distribution platforms',
      benefits: ['Multi-platform streaming', 'Content delivery optimization', 'Analytics & insights']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Design Tools',
      description: 'Advanced design and creative tools powered by AI and machine learning',
      benefits: ['AI design assistance', 'Brand consistency tools', 'Creative workflow automation']
    }
  ];

  const solutions = [
    {
      category: 'Content Creation',
      items: [
        'AI Video Generation & Editing',
        'Automated Music Composition',
        'Smart Image Processing',
        'Content Personalization',
        'Multi-language Content Creation',
        'Real-time Content Optimization'
      ]
    },
    {
      category: 'Media Management',
      items: [
        'Digital Asset Management',
        'Content Workflow Automation',
        'Rights Management',
        'Content Distribution',
        'Performance Analytics',
        'Quality Assurance'
      ]
    },
    {
      category: 'Platform Solutions',
      items: [
        'Streaming Platform Development',
        'Content Management Systems',
        'Mobile App Development',
        'Web Platform Solutions',
        'API Integration Services',
        'Cloud Infrastructure'
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Entertainment & Media Solutions | Zion Tech Group"
        description="Revolutionary AI-powered entertainment and media solutions for content creation, distribution, and engagement. Transform your media business with cutting-edge technology."
        keywords="entertainment technology, media solutions, AI content creation, streaming platforms, digital media, content management"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Film className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Entertainment & Media</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionary{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Entertainment
              </span>{' '}
              & Media Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your entertainment business with AI-powered content creation, 
              intelligent distribution, and immersive media experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our entertainment and media solutions combine the latest AI technology with 
              industry expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From content creation to distribution, we provide end-to-end solutions 
              for the modern entertainment industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <span>{solution.category}</span>
                </h3>
                <ul className="space-y-3">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Entertainment Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of entertainment with our AI-powered solutions. 
              Get started today and revolutionize your media operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}