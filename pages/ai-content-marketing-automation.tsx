import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Mail,
  Share2
} from 'lucide-react';

const AIContentMarketingAutomation: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: "AI Content Generation",
      description: "Automatically create high-quality, engaging content tailored to your audience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Intelligent audience segmentation and personalized content delivery",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights into content performance and optimization opportunities",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Social Media Automation",
      description: "Automated posting and engagement across all social media platforms",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "ROI Tracking",
      description: "Comprehensive tracking of marketing ROI and campaign effectiveness",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "AI-powered content optimization based on real-time performance data",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "10x faster content creation and distribution",
    "Improved engagement rates and conversion",
    "Reduced marketing costs and manual effort",
    "Data-driven content optimization",
    "24/7 automated marketing campaigns",
    "Scalable content marketing operations"
  ];

  const useCases = [
    {
      title: "Blog Content",
      description: "Automated blog post generation and optimization",
      icon: PenTool
    },
    {
      title: "Social Media",
      description: "Automated social media content and scheduling",
      icon: Share2
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns and automation",
      icon: Mail
    },
    {
      title: "SEO Content",
      description: "SEO-optimized content creation and distribution",
      icon: Target
    }
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="text-center max-w-7xl mx-auto relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full text-blue-300 text-lg font-medium mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-sm">
                📝 AI Content Marketing Automation
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                AI Content
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Marketing
              </span>
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Transform your content marketing with AI-powered automation that creates, optimizes, and distributes engaging content 24/7, driving unprecedented engagement and ROI.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-3xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-xl relative overflow-hidden"
                onClick={() => window.location.href = '/contact'}
              >
                <span className="relative z-10 flex items-center">
                  Start Automating Today
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </button>
              
              <button 
                className="px-12 py-6 border-2 border-blue-400 text-blue-400 font-bold rounded-3xl hover:bg-blue-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 text-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-sm"
                onClick={() => window.location.href = '/services'}
              >
                <span className="flex items-center">
                  Learn More
                  <PenTool className="w-7 h-7 ml-4" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Revolutionary Content Marketing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Discover the cutting-edge features that make our AI content marketing automation truly revolutionary
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 relative bg-gradient-to-br from-gray-900/40 to-black/40">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose AI Content Marketing?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Experience the transformative benefits of AI-powered content marketing automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Content Marketing Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                See how AI content marketing automation transforms various content types
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-8">
                Ready to Automate Your Content Marketing?
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
                Join thousands of businesses already transforming their content marketing with AI automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-3xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3 inline" />
                </button>
                
                <button 
                  className="px-12 py-6 border-2 border-blue-400 text-blue-400 font-bold rounded-3xl hover:bg-blue-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 text-xl"
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Services
                  <PenTool className="w-6 h-6 ml-3 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AIContentMarketingAutomation;