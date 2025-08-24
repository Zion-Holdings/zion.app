import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Brain, Shield, Database, Code, Rocket, Users, Activity, Microscope } from 'lucide-react';
import Link from 'next/link';

const HealthcareAISolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced diagnostic tools using machine learning and computer vision',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Medical Image Analysis',
        'Disease Detection',
        'Symptom Assessment',
        'Risk Prediction',
        'Early Warning Systems',
        'Diagnostic Accuracy'
      ],
      href: '/biotech-ai-research-platform'
    },
    {
      title: 'Healthcare Analytics',
      description: 'Data-driven insights for improved patient care and outcomes',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Patient Data Analytics',
        'Treatment Optimization',
        'Outcome Prediction',
        'Resource Planning',
        'Quality Metrics',
        'Performance Monitoring'
      ],
      href: '/ai-autonomous-business-operations'
    },
    {
      title: 'Telemedicine AI',
      description: 'Intelligent virtual healthcare and remote monitoring solutions',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Virtual Consultations',
        'Remote Monitoring',
        'AI Health Assistants',
        'Appointment Scheduling',
        'Patient Engagement',
        'Care Coordination'
      ],
      href: '/ai-phone-agent'
    },
    {
      title: 'Drug Discovery AI',
      description: 'Accelerated pharmaceutical research using artificial intelligence',
      icon: <Microscope className="w-8 h-8" />,
      features: [
        'Molecular Modeling',
        'Drug Repurposing',
        'Clinical Trial Optimization',
        'Target Identification',
        'Safety Prediction',
        'Efficacy Analysis'
      ],
      href: '/biotech-ai-research-platform'
    }
  ];

  const applications = [
    {
      title: 'Radiology',
      description: 'AI-powered medical imaging and diagnostic support',
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: 'Cardiology',
      description: 'Heart disease detection and cardiovascular monitoring',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Oncology',
      description: 'Cancer detection, treatment planning, and monitoring',
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: 'Neurology',
      description: 'Brain health monitoring and neurological disorder detection',
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Healthcare AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered solutions that improve diagnosis, treatment, and patient outcomes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-red-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-200 font-medium text-lg"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900/50 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Applications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            AI in Medical Specialties
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI is revolutionizing various medical fields and improving patient care
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-4">
                {app.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{app.title}</h3>
              <p className="text-gray-400 text-sm">{app.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of Healthcare AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform healthcare delivery with intelligent automation and insights
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Improved Accuracy</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Reduced Diagnostic Errors</li>
              <li>Consistent Analysis</li>
              <li>Pattern Recognition</li>
              <li>Early Detection</li>
              <li>Risk Assessment</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Faster Diagnosis</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Rapid Image Analysis</li>
              <li>Instant Results</li>
              <li>Automated Screening</li>
              <li>Quick Triage</li>
              <li>Efficient Workflows</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Better Patient Care</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Personalized Treatment</li>
              <li>Remote Monitoring</li>
              <li>Preventive Care</li>
              <li>Patient Engagement</li>
              <li>Care Coordination</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our healthcare AI experts are ready to help you implement intelligent solutions that improve patient care and operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-red-500/25"
            >
              Start Healthcare AI Journey
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Healthcare Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthcareAISolutionsPage;