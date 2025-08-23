import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Brain, Zap, Target, Users, Award, Clock, TrendingUp,
  Cpu, Database, Lock, Cloud, Settings, Eye, Heart, Lightbulb
} from 'lucide-react';

const GovernmentTechnologySolutions: React.FC = () => {
  const governmentServices = [
    {
      title: "Cybersecurity & Defense",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      services: [
        { name: "Zero Trust Security Platform", href: "/zero-trust-security-platform", featured: true },
        { name: "AI-Powered Cybersecurity", href: "/ai-powered-cybersecurity", featured: true },
        { name: "Quantum Internet Security", href: "/quantum-internet-security-platform" },
        { name: "Government Data Protection", href: "/government-data-protection" }
      ]
    },
    {
      title: "AI & Automation",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "AI Autonomous Operations", href: "/autonomous-business-operations-platform", featured: true },
        { name: "AI Decision Support Systems", href: "/ai-powered-decision-engine" },
        { name: "Government Process Automation", href: "/government-process-automation" },
        { name: "AI-Powered Analytics", href: "/ai-business-intelligence-suite" }
      ]
    },
    {
      title: "Infrastructure & Operations",
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      services: [
        { name: "Quantum-Secure Cloud Infrastructure", href: "/quantum-secure-cloud-infrastructure", featured: true },
        { name: "Edge Computing Orchestration", href: "/edge-computing-orchestration-platform" },
        { name: "Government Cloud Migration", href: "/government-cloud-migration" },
        { name: "IT Asset Management", href: "/ai-powered-it-asset-management" }
      ]
    },
    {
      title: "Compliance & Governance",
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "SOC 2 Compliance Automation", href: "/soc2-compliance-automation", featured: true },
        { name: "Government Compliance Solutions", href: "/government-compliance-solutions" },
        { name: "Data Governance Platforms", href: "/data-governance-platforms" },
        { name: "Risk Management Systems", href: "/risk-management-systems" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full">
                  <Shield className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary government technology solutions that enhance security, 
                streamline operations, and drive innovation in public sector services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Explore Government Solutions
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Government Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Government Technology Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive government solutions cover every aspect of public sector technology, 
                from cybersecurity to AI-powered operations and compliance automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {governmentServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between">
                        <a
                          href={service.href}
                          className="text-white/80 hover:text-white transition-colors flex items-center"
                        >
                          {service.featured && (
                            <Award className="w-4 h-4 text-yellow-400 mr-2" />
                          )}
                          {service.name}
                        </a>
                        {service.featured && (
                          <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Government Technology?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in revolutionizing public sector technology. Enhance security, 
                streamline operations, and drive innovation in government services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentTechnologySolutions;