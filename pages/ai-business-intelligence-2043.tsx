import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, BarChart3, Zap, Target, Users, Award, CheckCircle,
  Cpu, Database, Shield, Globe, Rocket, TrendingUp,
  Star, Sparkles, ArrowRight, PieChart, LineChart, Activity
} from 'lucide-react';

const AIBusinessIntelligence2043: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms that automatically analyze business data and provide actionable insights",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Intelligence",
      description: "Forecast future trends and business outcomes with unprecedented accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Monitor business performance and KPIs in real-time with intelligent alerts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources for comprehensive analysis",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with built-in compliance and data protection",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with AI-powered insights",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive data analysis and AI insights"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Predictive Capabilities",
      description: "Anticipate market trends and business opportunities before they happen"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Operational Efficiency",
      description: "Streamline operations and identify areas for improvement automatically"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities and optimize resource allocation"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with advanced business intelligence capabilities"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Scalable Growth",
      description: "Scale your business intelligence as your organization grows"
    }
  ];

  const useCases = [
    {
      title: "Financial Analytics",
      description: "Advanced financial modeling, risk assessment, and investment analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Sales Intelligence",
      description: "Sales forecasting, customer behavior analysis, and market segmentation",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Supply Chain Optimization",
      description: "Inventory management, demand forecasting, and logistics optimization",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Customer Analytics",
      description: "Customer journey mapping, churn prediction, and personalized marketing",
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Operational Intelligence",
      description: "Process optimization, performance monitoring, and efficiency analysis",
      icon: <Activity className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Market Intelligence",
      description: "Competitive analysis, market trends, and opportunity identification",
      icon: <Target className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", description: "AI-powered prediction accuracy" },
    { number: "10x", label: "Faster Insights", description: "Faster than traditional BI tools" },
    { number: "24/7", label: "Monitoring", description: "Continuous business intelligence" },
    { number: "150+", label: "Data Sources", description: "Integrated data sources supported" }
  ];

  const dashboardFeatures = [
    {
      title: "Executive Dashboard",
      description: "High-level overview of key business metrics and performance indicators",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Real-Time Analytics",
      description: "Live data streaming and instant insights for immediate decision-making",
      icon: <Activity className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Models",
      description: "AI-powered forecasting models for business planning and strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Reports",
      description: "Personalized reports and dashboards tailored to specific business needs",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Data Visualization",
      description: "Interactive charts, graphs, and visualizations for better understanding",
      icon: <LineChart className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Mobile Access",
      description: "Access business intelligence on any device, anywhere, anytime",
      icon: <Globe className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Business Intelligence 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  AI Business Intelligence 2043
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with AI-powered intelligence that provides real-time insights, 
                predictive analytics, and automated decision-making. Stay ahead of the competition 
                with the most advanced business intelligence platform ever developed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
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
                Our AI Business Intelligence platform combines cutting-edge artificial intelligence 
                with advanced analytics to provide unprecedented business insights and capabilities.
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
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
        <section className="py-20 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven business intelligence that transforms 
                raw data into actionable insights and strategic advantages.
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
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
                Transform Every Business Function
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Business Intelligence technology is revolutionizing every aspect of business operations, 
                from finance to customer service, with intelligent insights and automation.
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
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

        {/* Dashboard Features Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Dashboard Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience intuitive dashboards and powerful analytics tools that make 
                complex business data simple to understand and act upon.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboardFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
                machine learning, and data analytics to deliver superior business intelligence.
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
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Deep Learning Models</h4>
                      <p className="text-gray-300 text-sm">Advanced neural networks for pattern recognition and prediction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Natural Language Processing</h4>
                      <p className="text-gray-300 text-sm">Understand and analyze text data for insights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Predictive Analytics</h4>
                      <p className="text-gray-300 text-sm">Forecast future trends and business outcomes</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Data Processing & Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Real-Time Processing</h4>
                      <p className="text-gray-300 text-sm">Process data streams in real-time for instant insights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Data Integration</h4>
                      <p className="text-gray-300 text-sm">Connect and combine data from multiple sources</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Advanced Visualization</h4>
                      <p className="text-gray-300 text-sm">Interactive charts and graphs for data exploration</p>
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
              className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 rounded-3xl p-12 border border-emerald-500/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the AI revolution in business intelligence. Our platform is ready to 
                transform your business and unlock new possibilities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
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

export default AIBusinessIntelligence2043;