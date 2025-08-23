import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Shield, Brain, Database, Cpu, Cloud, 
  ArrowRight, Star, CheckCircle, TrendingUp, Heart, Globe,
  Zap, Lock, BarChart3, Rocket, Atom, Server, Activity
} from 'lucide-react';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Diagnostics",
      description: "Advanced AI systems for accurate and rapid medical diagnosis",
      features: ["Image Analysis", "Pattern Recognition", "Predictive Analytics", "Clinical Decision Support"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      href: "/services?category=ai-ml"
    },
    {
      title: "Healthcare Cybersecurity",
      description: "HIPAA-compliant security solutions protecting patient data",
      features: ["Data Encryption", "Access Control", "Audit Logging", "Compliance Management"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      href: "/services?category=cybersecurity"
    },
    {
      title: "Telemedicine Platforms",
      description: "Secure and scalable virtual healthcare delivery systems",
      features: ["Video Consultations", "Patient Portals", "E-prescribing", "Remote Monitoring"],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      href: "/services?category=telemedicine"
    },
    {
      title: "Health Data Analytics",
      description: "Comprehensive analytics for population health and clinical insights",
      features: ["Population Health", "Clinical Analytics", "Predictive Modeling", "Quality Metrics"],
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      href: "/services?category=data"
    },
    {
      title: "IoT Medical Devices",
      description: "Connected medical devices for continuous patient monitoring",
      features: ["Wearable Sensors", "Remote Monitoring", "Data Integration", "Alert Systems"],
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
      href: "/services?category=iot"
    },
    {
      title: "Blockchain Health Records",
      description: "Secure and immutable patient health record management",
      features: ["Data Integrity", "Interoperability", "Patient Control", "Audit Trail"],
      icon: Lock,
      color: "from-yellow-500 to-orange-500",
      href: "/services?category=blockchain"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Patient Safety",
      description: "Enhanced patient care and safety through technology",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "HIPAA and regulatory compliance built-in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined workflows and improved productivity",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Improved access to healthcare services",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const specialties = [
    {
      name: "Radiology",
      description: "AI-powered imaging analysis and diagnosis",
      icon: Activity,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cardiology",
      description: "Cardiac monitoring and predictive analytics",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Oncology",
      description: "Cancer detection and treatment planning",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Emergency Medicine",
      description: "Rapid response and triage systems",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Healthcare Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionizing healthcare delivery with cutting-edge technology solutions designed for 
                patient safety, clinical efficiency, and regulatory compliance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare technology solutions are built with patient safety in mind, 
                designed for clinical efficiency, and engineered for regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${solution.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={solution.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Healthcare Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Technology solutions designed specifically for healthcare challenges and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Specialties Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Medical Specialties
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized technology solutions for different medical disciplines and specialties.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${specialty.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <specialty.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{specialty.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
                  </div>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare technology solutions can improve patient care, 
                enhance clinical efficiency, and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                  <Rocket className="w-5 h-5 ml-2" />
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