import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Building, Users, Lock, 
  ArrowRight, Star, CheckCircle, Clock,
  Infinity, Eye, Sparkles, Globe, Brain,
  Atom, Rocket, Cpu, Cloud, Database, Award
} from 'lucide-react';

const GovernmentSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Government Cybersecurity",
      description: "Advanced security solutions meeting federal compliance standards",
      features: ["FedRAMP Compliance", "Zero Trust Architecture", "Threat Intelligence", "24/7 Monitoring"],
      color: "from-red-500 to-orange-500",
      href: "/government-cybersecurity"
    },
    {
      icon: Brain,
      title: "AI Government Platform",
      description: "AI solutions for government efficiency and citizen services",
      features: ["AI-Powered Analytics", "Automated Processes", "Citizen Engagement", "Data Intelligence"],
      color: "from-purple-500 to-pink-500",
      href: "/ai-government-platform"
    },
    {
      icon: Cloud,
      title: "Government Cloud Infrastructure",
      description: "Secure cloud solutions designed for government requirements",
      features: ["FedRAMP Certified", "Multi-Region Deployment", "Disaster Recovery", "Compliance Ready"],
      color: "from-blue-500 to-cyan-500",
      href: "/government-cloud-infrastructure"
    },
    {
      icon: Database,
      title: "Government Data Solutions",
      description: "Secure data management and analytics for government agencies",
      features: ["Data Governance", "Privacy Protection", "Real-time Analytics", "Compliance Reporting"],
      color: "from-emerald-500 to-teal-500",
      href: "/government-data-solutions"
    },
    {
      icon: Lock,
      title: "Compliance & Governance",
      description: "Comprehensive compliance solutions for government regulations",
      features: ["FedRAMP", "FISMA", "SOC 2", "GDPR Compliance"],
      color: "from-indigo-500 to-purple-500",
      href: "/government-compliance"
    },
    {
      icon: Users,
      title: "Citizen Services Platform",
      description: "Digital transformation for government-citizen interactions",
      features: ["Digital Services", "Mobile Applications", "Accessibility", "Multi-Language Support"],
      color: "from-yellow-500 to-orange-500",
      href: "/citizen-services-platform"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Federal Compliance",
      description: "Meet all government security standards"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successfully serving government agencies"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock government support"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "International government expertise"
    }
  ];

  const stats = [
    { number: "100+", label: "Government Agencies", icon: Building },
    { number: "99.99%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  const governmentSectors = [
    {
      sector: "Federal Government",
      description: "Federal agencies and departments",
      solutions: ["FedRAMP Cloud", "FISMA Compliance", "AI Analytics", "Cybersecurity"]
    },
    {
      sector: "State & Local",
      description: "State and municipal governments",
      solutions: ["Digital Services", "Cloud Infrastructure", "Data Analytics", "Citizen Engagement"]
    },
    {
      sector: "Defense & Intelligence",
      description: "Military and intelligence agencies",
      solutions: ["Classified Systems", "AI Intelligence", "Quantum Security", "Space Technology"]
    },
    {
      sector: "Healthcare & Public Safety",
      description: "Public health and safety agencies",
      solutions: ["Health IT", "Emergency Response", "Data Security", "AI Diagnostics"]
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Government Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Secure, compliant, and innovative technology solutions designed specifically 
                for government agencies and public sector organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Sectors Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solutions for Government Sectors
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored for different government sectors and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {governmentSectors.map((sector, index) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-4">
                      <span className="text-green-400 font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{sector.sector}</h3>
                    <p className="text-gray-300 text-sm">{sector.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {sector.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government-Focused Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are specifically designed for government requirements, 
                with security, compliance, and reliability as top priorities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Government Agencies Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver government-grade solutions with the security, compliance, and reliability your agency demands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions meet the highest government security and compliance standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "FedRAMP", description: "Federal Risk and Authorization Management Program", icon: Shield },
                { name: "FISMA", description: "Federal Information Security Management Act", icon: Lock },
                { name: "SOC 2", description: "Service Organization Control 2", icon: CheckCircle },
                { name: "GDPR", description: "General Data Protection Regulation", icon: Globe },
                { name: "HIPAA", description: "Health Insurance Portability and Accountability Act", icon: Users },
                { name: "NIST", description: "National Institute of Standards and Technology", icon: Award }
              ].map((compliance, index) => (
                <motion.div
                  key={compliance.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <compliance.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{compliance.name}</h3>
                  <p className="text-gray-300 text-sm">{compliance.description}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Government Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our government solutions can enhance your agency's capabilities and citizen services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Government Quote <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300"
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
};

export default GovernmentSolutionsPage;