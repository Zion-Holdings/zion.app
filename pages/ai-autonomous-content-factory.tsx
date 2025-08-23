import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Video, 
  Image, 
  Mic, 
  Globe, 
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Users
} from 'lucide-react';

const AIAutonomousContentFactory: React.FC = () => {
  const contentTypes = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Written Content",
      description: "Blogs, articles, whitepapers, social media posts, and marketing copy"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Content",
      description: "Product demos, tutorials, promotional videos, and live streams"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Visual Assets",
      description: "Infographics, social media graphics, and marketing materials"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Audio Content",
      description: "Podcasts, voiceovers, and audio marketing materials"
    }
  ];

  const features = [
    "AI-powered content generation across all formats",
    "Multi-language content creation and localization",
    "Brand voice consistency and personality matching",
    "SEO optimization and keyword integration",
    "Real-time content performance analytics",
    "Automated content distribution and scheduling",
    "Content repurposing and adaptation",
    "Compliance and brand safety monitoring"
  ];

  const industries = [
    {
      name: "E-commerce",
      content: ["Product descriptions", "Marketing campaigns", "Social media content", "Email newsletters"]
    },
    {
      name: "B2B Services",
      content: ["Thought leadership content", "Case studies", "Whitepapers", "Webinar materials"]
    },
    {
      name: "Entertainment",
      content: ["Trailer content", "Behind-the-scenes", "Fan engagement", "Promotional materials"]
    },
    {
      name: "Education",
      content: ["Course materials", "Tutorials", "Study guides", "Educational videos"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Content Factory
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your content creation with fully autonomous AI systems that generate, 
                optimize, and distribute content across all channels 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Start Creating
                </button>
              </div>
            </motion.div>
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
                Multi-Format Content Creation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate high-quality content across all media types with our advanced AI technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="text-green-400 mb-4 flex justify-center">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous content factory delivers enterprise-grade features for scalable content creation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
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
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored content creation solutions for diverse industry needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-gray-300 text-lg">Faster Content Creation</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300 text-lg">Cost Reduction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Autonomous Operation</div>
              </motion.div>
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
                Ready to Scale Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your content strategy with autonomous AI-powered creation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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

export default AIAutonomousContentFactory;