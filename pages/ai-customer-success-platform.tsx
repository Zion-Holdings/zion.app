import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Brain, Zap, Target, Award, Clock, TrendingUp, 
  MessageSquare, Heart, Star, CheckCircle, 
  Shield, Database, Settings, Activity
} from 'lucide-react';

const AICustomerSuccessPlatform: React.FC = () => {
  const platformFeatures = [
    {
      title: "Intelligent Customer Insights",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "AI-powered analytics that provide deep insights into customer behavior and satisfaction",
      features: [
        "Behavioral pattern analysis",
        "Satisfaction prediction",
        "Churn risk assessment",
        "Engagement optimization"
      ]
    },
    {
      title: "Proactive Success Management",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      description: "Proactively identify and address customer needs before they become issues",
      features: [
        "Predictive analytics",
        "Early warning systems",
        "Automated interventions",
        "Success planning"
      ]
    },
    {
      title: "Personalized Customer Experience",
      icon: <Users className="w-8 h-8 text-green-400" />,
      description: "Deliver personalized experiences that increase customer satisfaction and loyalty",
      features: [
        "Individualized recommendations",
        "Customized communication",
        "Personalized onboarding",
        "Tailored support"
      ]
    },
    {
      title: "Automated Success Workflows",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: "Automate routine customer success tasks and workflows for maximum efficiency",
      features: [
        "Workflow automation",
        "Task prioritization",
        "Resource allocation",
        "Performance tracking"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-rose-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full">
                  <Users className="w-12 h-12 text-pink-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI Customer Success Platform
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered platform that transforms customer success operations, 
                maximizes satisfaction, and drives long-term customer loyalty through intelligent automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
                  Explore Platform
                </button>
                <button className="px-8 py-4 border border-pink-400/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-400/10 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Platform Capabilities
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our customer success platform combines cutting-edge AI with comprehensive analytics 
                to revolutionize how you manage and optimize customer relationships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformative Benefits
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience unprecedented improvements in customer satisfaction, 
                retention rates, and success team productivity with AI-powered automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Increased Satisfaction",
                  description: "Boost customer satisfaction through personalized experiences and proactive support."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Higher Retention",
                  description: "Improve customer retention rates with intelligent success management."
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Team Efficiency",
                  description: "Maximize success team productivity with automated workflows and insights."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in the future of customer success. Maximize satisfaction, 
                boost retention, and drive growth with AI-powered success management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-pink-400/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AICustomerSuccessPlatform;