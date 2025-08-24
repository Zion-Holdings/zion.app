
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone,
  Sparkles
} from "lucide-react";

export function QuickAccess() {
  const { t } = useTranslation();
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match",
      gradient: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent",
      gradient: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services",
      gradient: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment",
      gradient: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: "nav.community",
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community",
      gradient: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch",
      gradient: "from-zion-purple to-zion-purple-dark"
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
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-zion-purple/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-zion-cyan" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Quick Access
            </h2>
            <Sparkles className="h-6 w-6 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Jump directly to our most popular features and discover what makes Zion the ultimate tech marketplace
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={link.link} 
                className="group block bg-gradient-to-br from-zion-blue/80 to-zion-blue-dark/80 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-purple/50 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 relative overflow-hidden"
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container with gradient background */}
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${link.gradient} rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white group-hover:rotate-12 transition-transform duration-300">
                      {link.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-2 text-sm group-hover:text-zion-cyan transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-zion-slate-light text-xs mb-4 leading-relaxed group-hover:text-zion-slate-light/80 transition-colors duration-300">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center text-zion-cyan text-xs group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="font-medium">{t('general.explore')}</span>
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-zion-purple/0 via-zion-cyan/0 to-zion-purple/0 group-hover:from-zion-purple/10 group-hover:via-zion-cyan/10 group-hover:to-zion-purple/10 transition-all duration-500"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 font-medium"
          >
            Contact our support team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
