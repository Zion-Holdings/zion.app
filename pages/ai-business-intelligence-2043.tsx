import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Globe, Cpu, Database, 
  Target, Star, Sparkles, Zap, TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Play, Users, Shield as ShieldIcon, Brain as BrainIcon,
  BarChart3, PieChart, LineChart, Activity, Target as TargetIcon
} from 'lucide-react';

const AIBusinessIntelligence2043: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms for deep business insights and predictions",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Live business intelligence dashboards with AI-driven insights",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TargetIcon,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend prediction for business decisions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Advanced data visualization with AI-enhanced insights",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Real-time performance tracking with AI anomaly detection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: LineChart,
      title: "Trend Analysis",
      description: "AI-driven trend analysis and market intelligence",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Real-time business insights and analytics",
    "AI-powered predictive modeling",
    "Automated report generation",
    "Advanced data visualization",
    "Intelligent anomaly detection",
    "Seamless integration with existing systems"
  ];

  const useCases = [
    {
      title: "Financial Analytics",
      description: "AI-powered financial reporting and risk assessment",
      icon: BarChart3
    },
    {
      title: "Sales Intelligence",
      description: "Predictive sales analytics and customer insights",
      icon: TrendingUp
    },
    {
      title: "Operations Optimization",
      description: "AI-driven operational efficiency and resource optimization",
      icon: Target
    },
    {
      title: "Market Intelligence",
      description: "Real-time market analysis and competitive intelligence",
      icon: Globe
    }
  ];

  const capabilities = [
    "Natural language query processing",
    "Automated data cleansing and preparation",
    "Real-time data streaming and processing",
    "Advanced machine learning models",
    "Multi-source data integration",
    "Customizable reporting and dashboards"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
                <BarChart3 className="w-5 h-5 mr-2 text-emerald-400" />
                <span className="text-emerald-300">AI Business Intelligence 2043</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI Business Intelligence
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with AI-powered intelligence, real-time analytics, and predictive insights that drive strategic decision-making.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300">
                  Get Started
                </button>
              </div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Business Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced analytics and insights powered by artificial intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven business insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-8 rounded-2xl border border-emerald-500/30"
              >
                <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <useCase.icon className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{useCase.title}</h4>
                        <p className="text-gray-300 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for business intelligence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for AI Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with AI-powered insights and analytics
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIBusinessIntelligence2043;