
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms connect you with the perfect talent and services",
    color: "from-zion-purple to-zion-purple-dark"
  },
  {
    icon: Users,
    title: "Global Talent Network",
    description: "Access to verified professionals from around the world",
    color: "from-zion-cyan to-zion-cyan-dark"
  },
  {
    icon: Globe,
    title: "24/7 Global Services",
    description: "IT support and technical services available worldwide anytime",
    color: "from-zion-blue to-zion-blue-dark"
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All users and services are thoroughly vetted and secured",
    color: "from-zion-green to-zion-green-dark"
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Get started in minutes with our streamlined onboarding",
    color: "from-zion-orange to-zion-orange-dark"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track success metrics and optimize your projects",
    color: "from-zion-pink to-zion-pink-dark"
  }
];

const stats = [
  { label: "Countries Served", value: "150+", icon: Globe },
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Response Time", value: "<2hrs", icon: Clock },
  { label: "Success Rate", value: "98%", icon: Star }
];

export function FeatureHighlights() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion</span>?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the future of tech services with our cutting-edge platform designed for 
            global collaboration and innovation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="bg-zion-blue-light/10 backdrop-blur-sm p-8 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-zion-blue-light/10 backdrop-blur-sm rounded-3xl p-8 border border-zion-purple/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
