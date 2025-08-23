import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Cloud, 
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
  Brain
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: "Enterprise AI Platform",
      description: "Scalable AI infrastructure for large organizations with enterprise-grade security and compliance",
      features: ["Multi-tenant architecture", "Role-based access control", "SOC2 compliance", "Enterprise SSO"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      href: "/ai-consciousness-evolution-platform"
    },
    {
      title: "Zero Trust Security Architecture",
      description: "Comprehensive security framework with continuous verification and adaptive access control",
      features: ["Identity verification", "Network segmentation", "Threat detection", "Compliance monitoring"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      href: "/zero-trust-network-architecture-platform"
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Enterprise cloud orchestration with automated scaling, monitoring, and cost optimization",
      features: ["Multi-cloud support", "Auto-scaling", "Cost optimization", "Performance monitoring"],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      href: "/cloud-platform"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Advanced analytics platform for enterprise decision-making and strategic insights",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "Data governance"],
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500",
      href: "/data-analytics"
    },
    {
      title: "DevOps Automation Platform",
      description: "Enterprise DevOps pipeline automation with security, compliance, and monitoring",
      features: ["CI/CD automation", "Security scanning", "Compliance checks", "Performance monitoring"],
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      href: "/autonomous-devops-intelligence"
    },
    {
      title: "Enterprise Resource Planning",
      description: "Integrated business management platform for enterprise operations and resource optimization",
      features: ["Process automation", "Resource optimization", "Real-time monitoring", "Analytics dashboard"],
      icon: Building,
      color: "from-yellow-500 to-orange-500",
      href: "/enterprise-resource-planning"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2, ISO 27001, and GDPR compliance"
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Built to handle enterprise workloads with auto-scaling capabilities"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Advanced collaboration tools with role-based access control"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Optimized for high-performance enterprise applications"
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Technology",
    "Energy",
    "Transportation",
    "Government"
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
                Enterprise Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and innovation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Building className="w-5 h-5" />
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Zap className="w-5 h-5" />
                  <span>Scalable Architecture</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Shield className="w-5 h-5" />
                  <span>Compliance Ready</span>
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
                Enterprise Technology Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet the unique challenges of enterprise organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
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
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade solutions with the innovation and flexibility of a technology leader
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

        {/* Industries Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our enterprise solutions are trusted by organizations across diverse industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 + index * 0.05 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can help you achieve your business goals 
                and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Schedule Consultation
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

export default EnterpriseSolutionsPage;