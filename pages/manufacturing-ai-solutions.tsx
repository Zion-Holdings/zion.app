import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Settings, Brain, Zap, Target, Users, Award, Clock, TrendingUp,
  Cpu, Database, Lock, Cloud, Eye, Heart, Lightbulb, Factory
} from 'lucide-react';

const ManufacturingAISolutions: React.FC = () => {
  const manufacturingServices = [
    {
      title: "AI-Powered Manufacturing Intelligence",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "AI Predictive Maintenance", href: "/ai-predictive-maintenance-platform", featured: true },
        { name: "AI Quality Control", href: "/ai-quality-control", featured: true },
        { name: "AI Production Optimization", href: "/ai-production-optimization" },
        { name: "AI Supply Chain Intelligence", href: "/ai-supply-chain-intelligence" }
      ]
    },
    {
      title: "Smart Manufacturing Systems",
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      services: [
        { name: "IoT Manufacturing Platform", href: "/iot-manufacturing-platform", featured: true },
        { name: "Digital Twin Solutions", href: "/digital-twin-solutions" },
        { name: "Smart Factory Automation", href: "/smart-factory-automation" },
        { name: "Manufacturing Execution Systems", href: "/manufacturing-execution-systems" }
      ]
    },
    {
      title: "Supply Chain & Operations",
      icon: <Target className="w-8 h-8 text-green-400" />,
      services: [
        { name: "Supply Chain Optimization", href: "/intelligent-supply-chain-optimization", featured: true },
        { name: "Inventory Management AI", href: "/ai-inventory-management" },
        { name: "Demand Forecasting", href: "/ai-demand-forecasting" },
        { name: "Logistics Optimization", href: "/logistics-optimization" }
      ]
    },
    {
      title: "Quality & Compliance",
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "Quality Management Systems", href: "/quality-management-systems", featured: true },
        { name: "Compliance Automation", href: "/compliance-automation" },
        { name: "Regulatory Reporting", href: "/regulatory-reporting" },
        { name: "Audit Trail Management", href: "/audit-trail-management" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-orange-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full">
                  <Factory className="w-12 h-12 text-orange-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Manufacturing AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered manufacturing solutions that optimize production, 
                enhance quality control, and drive efficiency in modern manufacturing operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Explore Manufacturing Solutions
                </button>
                <button className="px-8 py-4 border border-orange-400/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manufacturing Services Categories */}
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
                Complete Manufacturing AI Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive manufacturing solutions cover every aspect of modern production, 
                from AI-powered intelligence to smart factory automation and quality management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {manufacturingServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-400/30 transition-all duration-300"
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
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in revolutionizing manufacturing technology. Optimize production, 
                enhance quality, and drive efficiency with our AI-powered solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-orange-400/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300">
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

export default ManufacturingAISolutions;