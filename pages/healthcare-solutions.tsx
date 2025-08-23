import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Shield, 
  Database, 
  Cloud, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Activity,
  Monitor,
  Pill,
  Microscope,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function HealthcareSolutions() {
  const solutions = [
    {
      title: "AI-Powered Diagnostics",
      description: "Advanced diagnostic tools using artificial intelligence and machine learning",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ["Medical image analysis", "Symptom assessment", "Disease prediction", "Treatment recommendations"],
      href: "/ai-healthcare-diagnostics"
    },
    {
      title: "Healthcare Data Management",
      description: "Secure and compliant healthcare data infrastructure and analytics",
      icon: <Database className="w-8 h-8 text-green-400" />,
      features: ["HIPAA compliance", "Patient data security", "Real-time analytics", "Interoperability"],
      href: "/healthcare-data-management"
    },
    {
      title: "Telemedicine Platforms",
      description: "Advanced virtual care and remote patient monitoring solutions",
      icon: <Monitor className="w-8 h-8 text-blue-400" />,
      features: ["Video consultations", "Remote monitoring", "Digital prescriptions", "Patient portals"],
      href: "/telemedicine-platform"
    },
    {
      title: "Medical Device Integration",
      description: "IoT and connected medical device management and analytics",
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      features: ["Device connectivity", "Data collection", "Real-time monitoring", "Predictive maintenance"],
      href: "/medical-device-integration"
    },
    {
      title: "Pharmaceutical Solutions",
      description: "Drug discovery, development, and supply chain optimization",
      icon: <Pill className="w-8 h-8 text-orange-400" />,
      features: ["Drug discovery AI", "Clinical trial management", "Supply chain optimization", "Quality control"],
      href: "/pharmaceutical-solutions"
    },
    {
      title: "Healthcare Security",
      description: "Comprehensive cybersecurity and compliance solutions for healthcare",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ["HIPAA compliance", "Threat detection", "Data encryption", "Access control"],
      href: "/healthcare-cybersecurity"
    }
  ];

  const benefits = [
    "Improved patient outcomes and care quality",
    "Reduced healthcare costs and inefficiencies",
    "Enhanced diagnostic accuracy and speed",
    "Better patient engagement and experience",
    "Streamlined administrative processes",
    "Compliance with healthcare regulations"
  ];

  const useCases = [
    {
      title: "Hospitals & Medical Centers",
      description: "Comprehensive healthcare technology solutions for large medical facilities",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Clinics & Private Practices",
      description: "Scalable solutions for smaller healthcare providers",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Pharmaceutical Companies",
      description: "Advanced drug development and manufacturing solutions",
      icon: <Pill className="w-6 h-6" />
    },
    {
      title: "Research Institutions",
      description: "Cutting-edge research and development platforms",
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: "Insurance Providers",
      description: "Healthcare analytics and risk assessment solutions",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Government Health Agencies",
      description: "Public health monitoring and management systems",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Healthcare Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with cutting-edge technology solutions. From AI diagnostics to 
              secure data management, we're revolutionizing patient care and medical operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to enhance healthcare delivery and patient outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Healthcare Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cutting-edge healthcare technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Organizations We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed for healthcare organizations of all sizes and types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-3 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our healthcare technology solutions can improve patient care and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </Link>
              <Link href="/pricing" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}