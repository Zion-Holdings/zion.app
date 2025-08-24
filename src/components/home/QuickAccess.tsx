
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
  Smartphone 
} from "lucide-react";

export function QuickAccess() {
  const { t } = useTranslation();
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match",
      color: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services",
      color: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: t('nav.community'),
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community",
      color: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch",
      color: "from-zion-purple to-zion-purple-dark"
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
    hidden: { y: 20, opacity: 0, scale: 0.9 },
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
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
            Quick Access
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Jump directly to our most popular features and tools
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={link.link} 
                className="group block bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light/30 hover:border-zion-purple/50 rounded-xl p-6 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden"
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                {/* Icon container with enhanced styling */}
                <div className="relative z-10 bg-gradient-to-br from-zion-blue-dark to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-white font-semibold mb-2 text-sm leading-tight group-hover:text-zion-cyan transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-zion-slate-light text-xs mb-4 leading-relaxed flex-1">
                    {link.description}
                  </p>
                  
                  {/* Enhanced explore button */}
                  <div className="flex items-center justify-center text-zion-cyan text-xs mt-auto group-hover:text-white transition-colors duration-300">
                    <span className="font-medium">{t('general.explore')}</span>
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Subtle border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-zion-purple/30 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
