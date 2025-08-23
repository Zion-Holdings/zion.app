import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Brain, Zap, Target, Users, Award, Clock, TrendingUp,
  Cpu, Database, Lock, Cloud, Settings, Eye, Heart, Lightbulb
} from 'lucide-react';

const RetailTechnologySolutions: React.FC = () => {
  const retailServices = [
    {
      title: "AI-Powered Retail Intelligence",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "AI Customer Intelligence", href: "/ai-customer-intelligence", featured: true },
        { name: "AI Sales Intelligence Platform", href: "/ai-sales-intelligence-platform", featured: true },
        { name: "AI Inventory Optimization", href: "/ai-inventory-optimization" },
        { name: "AI Demand Forecasting", href: "/ai-demand-forecasting" }
      ]
    },
    {
      title: "E-commerce & Digital Commerce",
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      services: [
        { name: "E-commerce Platforms", href: "/e-commerce-platforms", featured: true },
        { name: "Digital Payment Solutions", href: "/digital-payment-solutions" },
        { name: "Mobile Commerce Apps", href: "/mobile-commerce-apps" },
        { name: "Omnichannel Commerce", href: "/omnichannel-commerce" }
      ]
    },
    {
      title: "Customer Experience & Analytics",
      icon: <Target className="w-8 h-8 text-green-400" />,
      services: [
        { name: "Customer Journey Analytics", href: "/ai-customer-journey-analytics", featured: true },
        { name: "Personalization Engines", href: "/ai-content-personalization-engine" },
        { name: "Customer Success Platforms", href: "/ai-customer-success-platform" },
        { name: "Retail Analytics Dashboard", href: "/retail-analytics-dashboard" }
      ]
    },
    {
      title: "Supply Chain & Operations",
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "Supply Chain Optimization", href: "/intelligent-supply-chain-optimization", featured: true },
        { name: "Inventory Management Systems", href: "/inventory-management-systems" },
        { name: "Warehouse Management", href: "/warehouse-accelerator" },
        { name: "Logistics Optimization", href: "/logistics-optimization" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                  <ShoppingCart className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Retail Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary retail technology solutions that transform customer experiences, 
                optimize operations, and drive growth in the digital commerce era.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Explore Retail Solutions
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Retail Services Categories */}
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
                Complete Retail Technology Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive retail solutions cover every aspect of modern commerce, 
                from AI-powered intelligence to omnichannel experiences and supply chain optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {retailServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
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
                Ready to Transform Your Retail Business?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in revolutionizing retail technology. Enhance customer experiences, 
                optimize operations, and drive growth in the digital commerce landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
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

export default RetailTechnologySolutions;