import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Building, 
  Globe, 
  Database, 
  Cloud, 
  Zap, 
  Users, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Activity,
  Monitor,
  FileText,
  BarChart3,
  Network,
  Cpu,
  Eye,
  Key,
  Server
} from 'lucide-react';
import Link from 'next/link';

export default function GovernmentTechnologySolutions() {
  const solutions = [
    {
      title: "Cybersecurity & Compliance",
      description: "Advanced security solutions meeting government standards and regulations",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ["FedRAMP compliance", "Zero-trust security", "Threat detection", "Data protection"],
      href: "/government-cybersecurity"
    },
    {
      title: "Data Management & Analytics",
      description: "Secure government data infrastructure and advanced analytics platforms",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      features: ["Big data analytics", "Data governance", "Real-time insights", "Compliance reporting"],
      href: "/government-data-analytics"
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure cloud solutions designed for government requirements",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      features: ["FedRAMP certified", "Multi-cloud strategy", "Disaster recovery", "Scalable architecture"],
      href: "/government-cloud-infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "Modernization of government services and citizen engagement",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ["Citizen portals", "Service automation", "Mobile applications", "API integration"],
      href: "/government-digital-transformation"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and decision support for government operations",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      features: ["Process automation", "Predictive analytics", "Natural language processing", "Computer vision"],
      href: "/government-ai-solutions"
    },
    {
      title: "IoT & Smart Cities",
      description: "Connected infrastructure and smart city technology solutions",
      icon: <Network className="w-8 h-8 text-green-400" />,
      features: ["Sensor networks", "Traffic management", "Environmental monitoring", "Public safety"],
      href: "/smart-city-solutions"
    }
  ];

  const benefits = [
    "Enhanced security and compliance with government standards",
    "Improved operational efficiency and cost reduction",
    "Better citizen services and engagement",
    "Data-driven decision making and insights",
    "Scalable and future-proof technology infrastructure",
    "Reduced manual processes and human error"
  ];

  const sectors = [
    {
      title: "Federal Government",
      description: "Solutions for federal agencies and departments",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "State & Local Government",
      description: "Technology solutions for state and municipal governments",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Defense & Intelligence",
      description: "Advanced security and intelligence solutions",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Healthcare & Public Health",
      description: "Public health technology and healthcare systems",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Transportation & Infrastructure",
      description: "Smart transportation and infrastructure management",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Education & Research",
      description: "Educational technology and research platforms",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const compliance = [
    "FedRAMP (Federal Risk and Authorization Management Program)",
    "FISMA (Federal Information Security Management Act)",
    "HIPAA (Health Insurance Portability and Accountability Act)",
    "SOC 2 Type II Compliance",
    "ISO 27001 Information Security Management",
    "NIST Cybersecurity Framework"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-red-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Government Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform government operations with secure, compliant, and innovative technology solutions. 
              From cybersecurity to smart cities, we're modernizing government for the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
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
              Government Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet government requirements and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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
              Why Choose Our Government Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of secure, compliant, and innovative government technology
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
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Government Sectors We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed for government organizations across all levels and sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-3 flex justify-center">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{sector.title}</h3>
                <p className="text-gray-300 text-sm">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Security Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We meet the highest government security and compliance requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/30 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-red-400 mb-3 flex justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">{standard}</h3>
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
              Ready to Modernize Government?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our government technology solutions can improve services and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </Link>
              <Link href="/pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}