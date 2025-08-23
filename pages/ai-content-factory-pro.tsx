import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Brain, Zap, Target, Users, Globe, Palette, Rocket, Shield } from 'lucide-react';

const AIContentFactoryPro: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                AI Content Factory Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Enterprise-grade AI content creation platform that generates high-quality, SEO-optimized content at scale with brand consistency and human-like creativity
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300">
                  Content Generation
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  Brand Consistency
                </span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                  SEO Optimization
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Core Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered content creation with enterprise-grade features and scalability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI Content Generation",
                  description: "Advanced language models that create human-like, engaging content across multiple formats",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: Palette,
                  title: "Brand Voice Customization",
                  description: "Maintain consistent brand personality and tone across all generated content",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Target,
                  title: "SEO Optimization",
                  description: "Built-in SEO best practices and keyword optimization for better search rankings",
                  color: "from-pink-500 to-red-500"
                },
                {
                  icon: FileText,
                  title: "Multi-Format Support",
                  description: "Generate blogs, social media posts, emails, product descriptions, and more",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Multi-user access with role-based permissions and content approval workflows",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: Zap,
                  title: "Real-time Analytics",
                  description: "Track content performance, engagement metrics, and ROI analytics",
                  color: "from-yellow-500 to-green-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Content Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate diverse content types optimized for different platforms and audiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Blog Posts",
                  description: "Long-form articles with SEO optimization and engaging storytelling",
                  icon: FileText,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Social Media",
                  description: "Platform-specific content for Twitter, LinkedIn, Instagram, and Facebook",
                  icon: Users,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Email Marketing",
                  description: "Personalized email campaigns with compelling subject lines and content",
                  icon: Target,
                  color: "from-cyan-500 to-green-500"
                },
                {
                  title: "Product Content",
                  description: "Descriptions, features, and benefits optimized for conversion",
                  icon: Rocket,
                  color: "from-green-500 to-yellow-500"
                }
              ].map((contentType, index) => (
                <motion.div
                  key={contentType.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${contentType.color} p-4 mx-auto mb-4`}>
                    <contentType.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{contentType.title}</h3>
                  <p className="text-gray-300 text-sm">{contentType.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge AI and cloud technologies for enterprise-grade performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">AI & Machine Learning</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Advanced Language Models",
                      description: "State-of-the-art GPT and custom-trained models for content generation",
                      icon: Brain
                    },
                    {
                      title: "Natural Language Processing",
                      description: "Sophisticated NLP for understanding context and generating relevant content",
                      icon: FileText
                    },
                    {
                      title: "Content Optimization",
                      description: "AI-driven content improvement and SEO optimization algorithms",
                      icon: Target
                    },
                    {
                      title: "Quality Assurance",
                      description: "Automated content quality checks and plagiarism detection",
                      icon: Shield
                    }
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-3 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Platform Features</h3>
                <ul className="space-y-4">
                  {[
                    "Cloud-native architecture with auto-scaling",
                    "Real-time collaboration and version control",
                    "Advanced analytics and performance tracking",
                    "API integration with popular platforms",
                    "Multi-language support (15+ languages)",
                    "Enterprise-grade security and compliance"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Scale Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your content strategy with AI-powered creation at enterprise scale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/ai-content-personalization-2041"
                  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:border-white/50 transition-all duration-300"
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

export default AIContentFactoryPro;