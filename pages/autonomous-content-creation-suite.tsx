import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Brain, 
  Zap, 
  Eye, 
  Target, 
  Users, 
  Globe, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  Palette,
  Camera,
  Video,
  Mic,
  PenTool,
  TrendingUp
} from 'lucide-react';

const AutonomousContentCreationSuite: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Advanced AI that creates high-quality, engaging content across multiple formats and languages with human-like creativity."
    },
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "Generate content for blogs, social media, marketing materials, technical documentation, and more."
    },
    {
      icon: Target,
      title: "Audience Optimization",
      description: "AI-powered content optimization that automatically adapts to target audiences and engagement metrics."
    },
    {
      icon: Zap,
      title: "Real-time Creation",
      description: "Instant content generation and editing with real-time collaboration and version control."
    },
    {
      icon: Eye,
      title: "SEO Optimization",
      description: "Built-in SEO optimization that ensures your content ranks well and reaches the right audience."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for content teams with automated workflow management."
    }
  ];

  const benefits = [
    "10x faster content creation",
    "Consistent brand voice and quality",
    "Multi-language content generation",
    "Automated SEO optimization",
    "Real-time collaboration tools",
    "Scalable content production"
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "Long-form content optimized for search engines and reader engagement."
    },
    {
      title: "Social Media Content",
      description: "Platform-specific content for all major social media networks."
    },
    {
      title: "Marketing Materials",
      description: "Email campaigns, landing pages, and promotional content."
    },
    {
      title: "Technical Documentation",
      description: "API docs, user guides, and technical specifications."
    }
  ];

  const aiCapabilities = [
    {
      category: "Content Generation",
      capabilities: ["Natural Language Processing", "Creative Writing", "Multi-Format Output"]
    },
    {
      category: "Optimization",
      capabilities: ["SEO Analysis", "Readability Scoring", "Engagement Prediction"]
    },
    {
      category: "Collaboration",
      capabilities: ["Version Control", "Team Workflows", "Approval Processes"]
    }
  ];

  return (
    <Layout
      title="Autonomous Content Creation Suite - Zion Tech Group"
      description="Revolutionary AI-powered content creation platform that autonomously generates, optimizes, and manages content across all formats and platforms."
      keywords="AI content creation, content automation, AI writing, content generation, content marketing, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                AI Content Creation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Content
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Creation Suite
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of content creation with our revolutionary Autonomous Content Creation Suite. 
                AI-powered content generation that writes, edits, and optimizes content with human-like creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Start Creating
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Content Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Content Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The most advanced AI content creation platform ever built
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge artificial intelligence for superior content creation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiCapabilities.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
                  <div className="space-y-2">
                    {category.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types Supported
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Generate any type of content your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                  <p className="text-gray-300">{contentType.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Content Suite?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your content creation process with AI-powered automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the AI revolution in content creation and start producing amazing content today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousContentCreationSuite;