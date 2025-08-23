import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Zap, Target, Users, Award, CheckCircle,
  Cpu, Database, MessageCircle, Globe, Rocket, TrendingUp,
  Star, Sparkles, ArrowRight, Headphones, Clock, BarChart3
} from 'lucide-react';

const AutonomousCustomerSuccess2043: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "AI-Powered Support",
      description: "Intelligent customer support that understands and resolves issues automatically",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Anticipate customer needs and prevent issues before they occur",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Omnichannel Communication",
      description: "Seamless customer interaction across all channels and platforms",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Continuously improve customer success metrics and satisfaction scores",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Intelligent Insights",
      description: "Data-driven insights to enhance customer experience and retention",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Automated Onboarding",
      description: "Streamlined customer onboarding and training processes",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human limitations"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Instant Response",
      description: "Immediate resolution of customer queries and issues"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Personalized Experience",
      description: "Tailored customer interactions based on individual preferences"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proactive Support",
      description: "Anticipate and prevent customer issues before they arise"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Scalable Operations",
      description: "Handle unlimited customer interactions without additional resources"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Reduce operational costs while improving customer satisfaction"
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Automated ticket resolution and intelligent issue handling",
      icon: <Headphones className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Onboarding & Training",
      description: "Personalized customer onboarding and training programs",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Success Monitoring",
      description: "Track customer success metrics and identify improvement opportunities",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Proactive Outreach",
      description: "Reach out to customers before issues arise",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Feedback Collection",
      description: "Automated feedback collection and sentiment analysis",
      icon: <Heart className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Retention Optimization",
      description: "Identify at-risk customers and implement retention strategies",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Response Rate", description: "Instant customer response" },
    { number: "24/7", label: "Availability", description: "Continuous customer support" },
    { number: "95%", label: "Satisfaction", description: "Customer satisfaction score" },
    { number: "10x", label: "Efficiency", description: "Faster issue resolution" }
  ];

  const customerJourney = [
    {
      title: "Initial Contact",
      description: "AI-powered welcome and initial assessment of customer needs",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Onboarding",
      description: "Personalized onboarding experience and training",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Active Support",
      description: "Continuous monitoring and proactive support",
      icon: <Headphones className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Success Optimization",
      description: "Performance tracking and continuous improvement",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Retention",
      description: "Proactive retention strategies and relationship building",
      icon: <Heart className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Growth",
      description: "Expansion opportunities and upselling strategies",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Customer Success 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Autonomous Customer Success 2043
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of customer success with AI-powered autonomous systems 
                that provide personalized support, proactive assistance, and continuous 
                optimization. Transform your customer experience with the most advanced 
                customer success platform ever developed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Autonomous Customer Success platform combines cutting-edge AI technology 
                with advanced customer experience management to deliver unprecedented service.
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Autonomous Customer Success?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven customer success that transforms 
                customer interactions and drives business growth through superior service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Every Customer Touchpoint
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Autonomous Customer Success technology is revolutionizing every aspect 
                of customer interaction, from initial contact to long-term retention.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Journey Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Customer Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience seamless customer success management across the entire customer lifecycle, 
                from first contact to long-term growth and expansion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customerJourney.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${stage.color} flex items-center justify-center text-white`}>
                    {stage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{stage.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest breakthroughs in artificial intelligence, 
                machine learning, and natural language processing to deliver superior customer service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">AI & Machine Learning</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Natural Language Processing</h4>
                      <p className="text-gray-300 text-sm">Advanced language understanding and generation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Predictive Analytics</h4>
                      <p className="text-gray-300 text-sm">Anticipate customer needs and issues</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Behavioral Analysis</h4>
                      <p className="text-gray-300 text-sm">Understand customer behavior patterns</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Customer Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Personalization Engine</h4>
                      <p className="text-gray-300 text-sm">Tailored experiences for each customer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Omnichannel Integration</h4>
                      <p className="text-gray-300 text-sm">Seamless experience across all channels</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Real-Time Optimization</h4>
                      <p className="text-gray-300 text-sm">Continuous improvement of customer interactions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 border border-pink-500/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the AI revolution in customer success. Our platform is ready to 
                transform your customer experience and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
                >
                  Start Your Journey
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousCustomerSuccess2043;