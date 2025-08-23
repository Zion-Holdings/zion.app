import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Palette, Video, Music, Gamepad2, Camera, Film, Headphones, 
  Mic, Radio, Tv, Smartphone, Monitor, Zap, Star, TrendingUp,
  Users, Globe, Award, Clock, CheckCircle, ArrowRight
} from 'lucide-react';

const EntertainmentMediaSolutions: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: "AI-Powered Video Production",
      description: "Automated video editing, content generation, and post-production workflows",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Music,
      title: "Intelligent Audio Processing",
      description: "AI-driven music composition, sound design, and audio enhancement",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Gamepad2,
      title: "Interactive Gaming Experiences",
      description: "Next-generation gaming platforms with AI consciousness and immersive storytelling",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Camera,
      title: "Smart Content Creation",
      description: "AI-powered photography, cinematography, and visual storytelling tools",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Film,
      title: "Cinematic AI Solutions",
      description: "Revolutionary film production, editing, and distribution platforms",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Headphones,
      title: "Immersive Audio Experiences",
      description: "3D spatial audio, personalized soundscapes, and audio personalization",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const solutions = [
    {
      category: "Content Creation",
      items: [
        "AI Script Writing & Storyboarding",
        "Automated Video Editing",
        "Intelligent Content Curation",
        "Real-time Content Generation",
        "Multi-language Content Adaptation",
        "Personalized Content Recommendations"
      ]
    },
    {
      category: "Production & Post-Production",
      items: [
        "AI-Powered Color Grading",
        "Automated Sound Mixing",
        "Smart Video Compression",
        "Intelligent Asset Management",
        "Real-time Rendering",
        "Cloud-Based Workflows"
      ]
    },
    {
      category: "Distribution & Analytics",
      items: [
        "Multi-Platform Publishing",
        "Audience Engagement Analytics",
        "Content Performance Optimization",
        "Real-time Streaming Analytics",
        "Cross-Platform Content Sync",
        "Predictive Content Success"
      ]
    }
  ];

  const technologies = [
    "AI Consciousness Integration",
    "Quantum Computing Optimization",
    "Real-time Neural Networks",
    "Advanced Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics",
    "Cloud-Native Architecture",
    "Edge Computing Solutions"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "10x Faster Production",
      description: "Accelerate content creation with AI-powered automation"
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Connect with audiences worldwide through intelligent localization"
    },
    {
      icon: TrendingUp,
      title: "Increased Engagement",
      description: "Boost viewer retention with personalized content experiences"
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Achieve professional-grade results with AI assistance"
    }
  ];

  return (
    <Layout
      title="Entertainment & Media Solutions - Zion Tech Group"
      description="Revolutionary AI-powered entertainment and media solutions for content creation, production, and distribution. Transform your creative workflow with cutting-edge technology."
      keywords="entertainment technology, media solutions, AI video production, content creation, digital media, creative technology"
      canonicalUrl="https://ziontechgroup.com/entertainment-media-solutions"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm mb-6">
              <Palette className="w-4 h-4" />
              <span>Creative Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionizing
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Entertainment & Media
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your creative workflow with AI consciousness, quantum computing, and autonomous content creation. 
              Build the future of entertainment technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Creative Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the future of entertainment technology with our revolutionary AI-powered platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/20"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Media Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From content creation to distribution, we provide end-to-end solutions for modern media companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 text-cyan-400 mr-3" />
                  {solution.category}
                </h3>
                <ul className="space-y-4">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powered by Revolutionary Technology
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Built on the latest advancements in AI consciousness, quantum computing, and autonomous systems
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/80 text-sm font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the competitive advantages of our revolutionary entertainment technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Creative Workflow?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join the future of entertainment technology with our revolutionary AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EntertainmentMediaSolutions;