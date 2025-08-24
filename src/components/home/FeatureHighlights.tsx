import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Award,
  TrendingUp,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms connect you with the perfect tech talent and services",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Global Talent Network",
    description: "Access to verified professionals from around the world",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "24/7 Global Services",
    description: "Round-the-clock IT support and technical services worldwide",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All providers are thoroughly vetted and background-checked",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get matched with providers in under 60 seconds",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Satisfaction guaranteed or your money back",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Real-time pricing and market trend analysis",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Clock,
    title: "Instant Support",
    description: "Live chat and emergency response available 24/7",
    color: "from-pink-500 to-rose-500"
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the future of tech services with our cutting-edge platform designed for businesses and individuals alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of satisfied customers who trust Zion Tech Group for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}