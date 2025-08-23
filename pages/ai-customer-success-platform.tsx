import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, TrendingUp, Shield, Zap, 
  ArrowRight, DollarSign,
  Phone, MessageCircle, BarChart3,
  Heart, Rocket
} from 'lucide-react';

// const contactInfo = {
//   mobile: '+1 302 464 0950',
//   email: 'kleber@ziontechgroup.com',
//   address: '364 E Main St STE 1008 Middletown DE 19709',
//   website: 'https://ziontechgroup.com'
// };

const AICustomerSuccessPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Customer Success Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer success platform that predicts and prevents churn with advanced machine learning and emotional intelligence." />
        <meta name="keywords" content="AI customer success, churn prevention, customer retention, machine learning, predictive analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-success-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered Platform</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Customer Success Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered customer success platform that predicts and prevents churn with advanced machine learning and emotional intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Book Demo
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
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
                Our AI platform combines cutting-edge technology with deep customer insights to deliver unprecedented customer success outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Predictive Churn Analysis",
                  description: "Advanced ML algorithms predict customer churn before it happens with 95%+ accuracy",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Emotional Intelligence",
                  description: "AI-powered sentiment analysis and emotional response generation for human-like interactions",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Proactive Engagement",
                  description: "Automated outreach and engagement strategies based on customer behavior patterns",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Risk Assessment",
                  description: "Real-time customer health scoring and risk stratification for targeted interventions",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Automated Workflows",
                  description: "Intelligent automation of customer success processes and follow-up sequences",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Advanced Analytics",
                  description: "Comprehensive reporting and insights for data-driven customer success strategies",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of customer success with AI-powered insights and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <DollarSign className="w-5 h-5" />
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

export default AICustomerSuccessPlatform;