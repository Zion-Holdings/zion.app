import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Rocket, Cpu, Database, Globe, Lock } from 'lucide-react';
import Link from 'next/link';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms for enterprise applications',
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation and workflow optimization',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['RPA Integration', 'Smart Document Processing', 'Workflow Automation', 'Decision Support Systems']
    },
    {
      title: 'AI Security & Compliance',
      description: 'AI-driven cybersecurity and regulatory compliance solutions',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['Threat Detection', 'Fraud Prevention', 'Compliance Monitoring', 'Risk Assessment']
    },
    {
      title: 'AI Infrastructure',
      description: 'Scalable AI infrastructure and deployment solutions',
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      features: ['GPU Clusters', 'Model Serving', 'Data Pipelines', 'MLOps Platforms']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI & Machine Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
            From predictive analytics to intelligent automation, we deliver AI that drives real business value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIServicesPage;
