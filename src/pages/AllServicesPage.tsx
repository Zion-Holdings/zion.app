import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap,
  Shield,
  Users,
  Globe
} from 'lucide-react';
import { MicroSaasServicesShowcase } from '@/components/services/MicroSaasServicesShowcase';

const AllServicesPage: React.FC = () => {
  const quickStats = [
    { icon: Star, number: "50+", label: "Services Available" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: TrendingUp, number: "99.9%", label: "Success Rate" },
    { icon: Zap, number: "24/7", label: "Support Available" }
  ];

  const serviceCategories = [
    { name: "AI Services", icon: Zap, count: 12, description: "Cutting-edge AI solutions" },
    { name: "Micro SAAS", icon: Globe, count: 8, description: "Scalable business tools" },
    { name: "IT Solutions", icon: Shield, count: 15, description: "Enterprise-grade infrastructure" },
    { name: "Cybersecurity", icon: Shield, count: 10, description: "Advanced security solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-dark via-zion-dark/95 to-zion-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zion-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-light/90 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of AI, micro SAAS, and IT solutions 
                designed to transform your business and drive growth.
              </p>
              <p className="text-lg text-zion-light/70 max-w-3xl mx-auto">
                From startups to enterprises, we deliver innovative solutions that give you 
                a competitive edge in the digital economy.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-zion-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-zion-light/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Categories Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-zion-dark/60 to-zion-dark/40 backdrop-blur-sm border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 group-hover:scale-110 transition-all duration-300">
                    <category.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-zion-light/70 text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="text-zion-secondary font-semibold">
                    {category.count} Services
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MicroSaasServicesShowcase />
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
              className="bg-gradient-to-r from-zion-primary/10 via-zion-secondary/10 to-zion-cyan/10 rounded-3xl p-12 border border-zion-primary/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-light/70 mb-8 max-w-2xl mx-auto">
                Our team is ready to help you choose the perfect solutions 
                and implement them for your business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-primary/25 flex items-center gap-3"
                >
                  Get Free Consultation
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="group bg-transparent hover:bg-zion-primary/10 text-zion-primary border-2 border-zion-primary hover:border-zion-primary/60 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  Call +1 302 464 0950
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllServicesPage;