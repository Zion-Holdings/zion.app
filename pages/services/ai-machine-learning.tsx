import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { 
  Brain, Cpu, Database, BarChart3, 
  Eye, MessageSquare, Zap, Target,
  CheckCircle, ArrowRight
} from 'lucide-react';

export default function AIMachineLearning() {
  const services = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and predictive modeling",
      icon: BarChart3,
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting"
      ]
    },
    {
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your specific business needs and data",
      icon: Brain,
      features: [
        "Supervised learning",
        "Unsupervised learning",
        "Deep learning",
        "Model optimization"
      ]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis and language understanding capabilities",
      icon: MessageSquare,
      features: [
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Chatbot development"
      ]
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis for automation and quality control",
      icon: Eye,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "Quality inspection"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors with high accuracy",
      icon: Target,
      features: [
        "Demand forecasting",
        "Risk assessment",
        "Customer behavior prediction",
        "Market trend analysis"
      ]
    },
    {
      title: "AI Content Generation",
      description: "Automated content creation for marketing and communication",
      icon: Zap,
      features: [
        "Text generation",
        "Content optimization",
        "SEO automation",
        "Multilingual content"
      ]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and processes to save time and resources",
      icon: Zap
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights help make informed business decisions",
      icon: Target
    },
    {
      title: "Cost Reduction",
      description: "Optimize operations and reduce operational costs through automation",
      icon: CheckCircle
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technology",
      icon: Brain
    }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "BERT", "Computer Vision APIs",
    "Natural Language Processing", "Deep Learning", "Neural Networks", "Machine Learning Pipelines"
  ];

  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI & Machine Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence and machine learning solutions 
                that drive innovation and competitive advantage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI & ML Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive artificial intelligence solutions designed to solve real business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AI & ML?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover the transformative benefits of artificial intelligence for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Built with the latest and most reliable AI and machine learning technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Development Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A systematic approach to delivering successful AI solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understand your business needs and data requirements" },
                { step: "02", title: "Planning", description: "Design the AI solution architecture and data strategy" },
                { step: "03", title: "Development", description: "Build and train the AI models with your data" },
                { step: "04", title: "Deployment", description: "Implement and monitor the solution in production" }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how artificial intelligence can transform your business operations 
                and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Your AI Journey
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}