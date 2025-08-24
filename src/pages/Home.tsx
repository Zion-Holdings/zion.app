

import EnhancedHero from '../components/EnhancedHero';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Clock } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-8 h-8" />, number: "25+", label: "Industry Awards" },
    { icon: <Clock className="w-8 h-8" />, number: "99.9%", label: "Uptime SLA" }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-zion-blue-dark/50 border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group to transform their digital future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-blue-dark px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
