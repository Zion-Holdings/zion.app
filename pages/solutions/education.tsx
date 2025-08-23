import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Brain, Globe, Shield, Zap, Cpu, 
  Users, CheckCircle, ArrowRight, BarChart3, BookOpen
} from 'lucide-react';

export default function EducationSolutions() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent mb-6">
                Education Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered education solutions that transform learning, 
                enhance student engagement, and optimize educational outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Education Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed specifically for schools, 
                universities, training institutions, and educational organizations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Learning Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <BookOpen className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Learning Platform</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Intelligent learning platform with personalized curriculum, 
                  adaptive assessments, and interactive content delivery.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Personalized curriculum
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Adaptive assessments
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Interactive content
                  </li>
                </ul>
                <a href="/contact?service=AI-Learning-Platform" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Student Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Student Analytics</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Comprehensive student analytics platform with performance tracking, 
                  progress monitoring, and predictive insights.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Performance tracking
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Progress monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Predictive insights
                  </li>
                </ul>
                <a href="/contact?service=Student-Analytics" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Virtual Reality */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">VR/AR Learning</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Immersive virtual and augmented reality learning experiences 
                  for enhanced engagement and practical skill development.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Immersive experiences
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Skill development
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Interactive simulations
                  </li>
                </ul>
                <a href="/contact?service=VR-AR-Learning" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Administrative Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <Cpu className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Administrative Platform</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Comprehensive administrative platform for student management, 
                  course scheduling, and institutional operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Student management
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Course scheduling
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Institutional operations
                  </li>
                </ul>
                <a href="/contact?service=Administrative-Platform" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Collaboration Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Users className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Collaboration Platform</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced collaboration platform for students and educators 
                  with real-time communication and project management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Real-time communication
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Project management
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Team collaboration
                  </li>
                </ul>
                <a href="/contact?service=Collaboration-Platform" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Security & Privacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <Shield className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Security & Privacy</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Comprehensive security and privacy solutions for educational 
                  institutions with data protection and compliance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Data protection
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Privacy compliance
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Secure access
                  </li>
                </ul>
                <a href="/contact?service=Education-Security" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the education technology revolution with our cutting-edge AI and learning solutions. 
                Let's build the future of education together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Education-Solutions"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services?category=education"
                  className="px-8 py-4 border border-emerald-500 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}