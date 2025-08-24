
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  TrendingUp,
  Award,
  Lock
} from "lucide-react";

export function FeatureHighlights() {
  const highlights = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect you with the perfect opportunities and talent",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "from-zion-cyan/20 to-zion-cyan-light/20"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified & Secure",
      description: "Enterprise-grade security with verified professionals and secure transactions",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "from-zion-purple/20 to-zion-purple-light/20"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Global Network",
      description: "Connect with talent and opportunities from around the world",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "from-zion-cyan/20 to-zion-cyan-light/20"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance and support for all your needs",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "from-zion-purple/20 to-zion-purple-light/20"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instant Access",
      description: "Get started immediately with our streamlined onboarding process",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "from-zion-cyan/20 to-zion-cyan-light/20"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Focused",
      description: "Tools and resources designed to accelerate your success",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "from-zion-purple/20 to-zion-purple-light/20"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Rigorous vetting process ensures only the best talent and services",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "from-zion-cyan/20 to-zion-cyan-light/20"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your data and privacy are protected with enterprise-grade security",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "from-zion-purple/20 to-zion-purple-light/20"
    }
  ];

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Why Choose Zion?
          </h2>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience the future of tech collaboration with our cutting-edge platform designed for success
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group bg-gradient-to-br from-zion-blue/10 via-zion-blue/5 to-zion-purple/10 border border-zion-blue-light/20 hover:border-zion-purple/50 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 transform hover:scale-105 backdrop-blur-sm text-center h-full">
                <div className={`bg-gradient-to-br ${highlight.bgColor} rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className={`text-transparent bg-gradient-to-br ${highlight.color} bg-clip-text`}>
                    {highlight.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-zion-slate-light/80 text-base leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Tech Experience?
            </h3>
            <p className="text-zion-slate-light text-lg mb-6">
              Join thousands of professionals already using Zion to accelerate their success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
