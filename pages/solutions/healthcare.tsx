import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Brain, 
  Heart, 
  Database, 
  Cpu, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  BarChart3,
  Rocket,
  Activity
} from 'lucide-react';

const HealthcareSolutionsPage: React.FC = () => {
  const healthcareSolutions = [
    {
      title: "AI-Powered Diagnostics Platform",
      description: "Advanced diagnostic tools using AI consciousness and machine learning for accurate medical assessments",
      features: ["AI image analysis", "Predictive diagnostics", "Clinical decision support", "HIPAA compliance"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      href: "/ai-healthcare-diagnostics"
    },
    {
      title: "Healthcare Data Analytics",
      description: "Comprehensive healthcare analytics platform for patient insights and operational optimization",
      features: ["Patient analytics", "Operational insights", "Predictive modeling", "Real-time monitoring"],
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500",
      href: "/data-analytics"
    },
    {
      title: "Telemedicine Platform",
      description: "Secure, scalable telemedicine solution with AI-powered patient triage and monitoring",
      features: ["Video consultations", "AI triage", "Patient monitoring", "Secure messaging"],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      href: "/telemedicine-platform"
    },
    {
      title: "Healthcare Cybersecurity",
      description: "Comprehensive security solutions designed specifically for healthcare organizations",
      features: ["HIPAA compliance", "Threat detection", "Data encryption", "Access control"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      href: "/cybersecurity"
    },
    {
      title: "Medical IoT Management",
      description: "Intelligent management platform for connected medical devices and wearables",
      features: ["Device monitoring", "Data integration", "Predictive maintenance", "Security compliance"],
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
      href: "/medical-iot-platform"
    },
    {
      title: "Healthcare AI Operations",
      description: "AI-powered healthcare operations optimization and resource management",
      features: ["Resource optimization", "Staff scheduling", "Inventory management", "Quality assurance"],
      icon: Rocket,
      color: "from-yellow-500 to-orange-500",
      href: "/ai-operations-center"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy and security regulations"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced AI consciousness for improved diagnostic accuracy"
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "Instant access to critical patient data and insights"
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Designed to improve patient outcomes and experience"
    }
  ];

  const useCases = [
    "Hospitals & Medical Centers",
    "Specialty Clinics",
    "Telemedicine Providers",
    "Medical Research",
    "Pharmaceutical Companies",
    "Health Insurance",
    "Public Health",
    "Medical Education"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionizing healthcare with AI consciousness, advanced diagnostics, and intelligent 
                patient care solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Heart className="w-5 h-5" />
                  <span>Patient-Centric Care</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Brain className="w-5 h-5" />
                  <span>AI-Powered Diagnostics</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Shield className="w-5 h-5" />
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Healthcare Technology Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to transform healthcare delivery and improve patient outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {healthcareSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={solution.href}
                    className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group for Healthcare?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Healthcare-specific solutions with the innovation and security your organization needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Healthcare Organizations We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our healthcare solutions are trusted by diverse healthcare organizations worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 + index * 0.05 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare technology solutions can help you improve patient care, 
                optimize operations, and drive innovation in healthcare delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Schedule Healthcare Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutionsPage;