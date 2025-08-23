import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, Users, Zap, Shield, Globe, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Cpu, Network, Database, Lock, Eye, Sparkles,
  BookOpen, Target, MessageCircle, FileText, Phone
} from 'lucide-react';

const AICustomerSuccess2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/30 rounded-full text-pink-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />,
                <span>AI Customer Success 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                AI Customer Success 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Autonomous AI customer success systems that proactively manage customer relationships and drive satisfaction through intelligent insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Transform Customer Success
                </button>
                <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Revolutionary Customer Success Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI systems revolutionize customer success through proactive engagement and intelligent relationship management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Predictive Customer Insights",
                  description: "AI-powered analysis predicting customer needs and potential issues before they arise",
                  color: "from-pink-500 to-red-500"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Emotional Intelligence",
                  description: "Understanding customer emotions and responding with appropriate empathy and solutions",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Proactive Engagement",
                  description: "Automated outreach and engagement based on customer behavior patterns",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: <MessageCircle className="w-8 h-8" />,
                  title: "Intelligent Communication",
                  description: "Multi-channel communication that adapts to customer preferences",
                  color: "from-yellow-500 to-green-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Success Metrics Tracking",
                  description: "Real-time monitoring of customer success metrics and KPIs",
                  color: "from-green-500 to-blue-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Automated Resolution",
                  description: "Instant resolution of common customer issues through AI automation",
                  color: "from-blue-500 to-purple-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Journey */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                AI-Powered Customer Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete customer lifecycle management from onboarding to advocacy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Onboarding", icon: <Users className="w-6 h-6" />, description: "AI-guided customer setup" },
                { name: "Adoption", icon: <Target className="w-6 h-6" />, description: "Feature adoption optimization" },
                { name: "Retention", icon: <Heart className="w-6 h-6" />, description: "Proactive retention strategies" },
                { name: "Advocacy", icon: <Star className="w-6 h-6" />, description: "Customer advocacy programs" }
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/30 mb-3">
                    {stage.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{stage.name}</h3>
                  <p className="text-gray-400 text-sm">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Advanced Customer Success Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge AI and machine learning for maximum customer satisfaction
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Machine Learning",
                  description: "Advanced ML algorithms for customer behavior prediction"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Natural Language Processing",
                  description: "Understanding and responding to customer communications"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Customer Data Platform",
                  description: "Unified view of customer interactions and preferences"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/30 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the future of AI-driven customer success management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
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

export default AICustomerSuccess2041;