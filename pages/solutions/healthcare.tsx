import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Brain, 
  Shield, 
  Database, 
  Cpu, 
  Microscope, 
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Rocket,
  Brain as BrainIcon,
  Atom,
  Activity,
  Pill,
  Syringe,
  Monitor,
  Building
} from 'lucide-react';
import Link from 'next/link';

const HealthcareTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced AI algorithms for accurate medical diagnosis",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Healthcare Security",
      description: "HIPAA-compliant security and data protection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Health Data Analytics",
      description: "Comprehensive health data management and insights",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "IoT Medical Devices",
      description: "Connected medical devices and monitoring systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Microscope,
      title: "Precision Medicine",
      description: "Personalized treatment and genomic analysis",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Activity,
      title: "Remote Patient Monitoring",
      description: "Real-time health monitoring and telemedicine",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const solutions = [
    {
      title: "AI Healthcare Diagnostics Platform",
      description: "Revolutionary AI-powered medical imaging and diagnosis",
      features: ["Medical Imaging Analysis", "Disease Detection", "Treatment Recommendations", "Clinical Decision Support"],
      href: "/ai-healthcare-diagnostics"
    },
    {
      title: "Quantum Healthcare Security",
      description: "Next-generation quantum-resistant healthcare data protection",
      features: ["Quantum Encryption", "HIPAA Compliance", "Zero Trust Architecture", "Advanced Threat Detection"],
      href: "/quantum-healthcare-security"
    },
    {
      title: "Healthcare Data Platform",
      description: "Unified healthcare data management and analytics",
      features: ["Electronic Health Records", "Interoperability", "Real-time Analytics", "Predictive Healthcare"],
      href: "/healthcare-data-platform"
    },
    {
      title: "Telemedicine Platform",
      description: "Advanced remote healthcare delivery system",
      features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions", "Health Records Access"],
      href: "/telemedicine-platform"
    }
  ];

  const stats = [
    { number: "1000+", label: "Healthcare Providers", description: "Trusted by leading medical institutions" },
    { number: "99.9%", label: "Diagnostic Accuracy", description: "AI-powered precision medicine" },
    { number: "24/7", label: "Patient Monitoring", description: "Continuous health surveillance" },
    { number: "50M+", label: "Patients Served", description: "Global healthcare impact" }
  ];

  const useCases = [
    {
      title: "Hospital Management Systems",
      description: "Comprehensive hospital operations and patient care management",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Clinical Research Platforms",
      description: "Advanced tools for medical research and clinical trials",
      icon: Microscope,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Pharmaceutical Innovation",
      description: "AI-driven drug discovery and development",
      icon: Pill,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Medical Device Integration",
      description: "Seamless integration of medical devices and systems",
      icon: Monitor,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Healthcare Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionizing healthcare with cutting-edge technology solutions that improve patient outcomes and advance medical innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Healthcare Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Innovation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for the healthcare industry with compliance, security, and patient care at the forefront.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive healthcare technology solutions designed to transform patient care and medical operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world applications of our healthcare technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Impact & Scale
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results in transforming healthcare delivery and patient outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our healthcare technology solutions can improve patient care and advance medical innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Healthcare Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareTechnologyPage;