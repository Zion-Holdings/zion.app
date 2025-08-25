
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Global Talent Network",
    description: "Connect with verified professionals from 50+ countries",
    color: "from-blue-500 to-cyan-500",
    link: "/talent",
    features: ["AI-Powered Matching", "Verified Profiles", "Quick Hiring", "Global Coverage"]
  },
  {
    icon: Shield,
    title: "24/7 IT Support",
    description: "Round-the-clock technical assistance worldwide",
    color: "from-green-500 to-emerald-500",
    link: "/it-onsite-services",
    features: ["Emergency Response", "Onsite Services", "Remote Support", "Certified Technicians"]
  },
  {
    icon: Zap,
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence services",
    color: "from-purple-500 to-pink-500",
    link: "/ai-services",
    features: ["Machine Learning", "Neural Networks", "Predictive Analytics", "Automation"]
  },
  {
    icon: Globe,
    title: "Equipment Marketplace",
    description: "High-quality tech hardware and devices",
    color: "from-orange-500 to-red-500",
    link: "/equipment",
    features: ["Quality Guaranteed", "Fast Delivery", "Warranty", "Support"]
  }
];

const stats = [
  { number: "50+", label: "Countries Served" },
  { number: "10K+", label: "Verified Providers" },
  { number: "99.9%", label: "Success Rate" },
  { number: "<2hr", label: "Response Time" }
];

export function FeatureCTAs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-zion-blue" role="region" aria-labelledby="features-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="features-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the future of tech services with our comprehensive platform designed for businesses and individuals alike.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-zion-slate-light text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Link to={feature.link} className="block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-6">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Zion Tech Group for their technology needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-zion-slate-light">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Trusted by Fortune 500</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
