
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
      color: "from-zion-cyan to-zion-cyan-light"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent",
      color: "from-zion-purple to-zion-purple-light"
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services",
      color: "from-zion-cyan to-zion-cyan-light"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment",
      color: "from-zion-purple to-zion-purple-light"
    },
    {
      title: "nav.community",
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community",
      color: "from-zion-cyan to-zion-cyan-light"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch",
      color: "from-zion-purple to-zion-purple-light"
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
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
            Quick Access
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Jump directly to our most popular features and start exploring Zion's capabilities
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
            <motion.div key={index} variants={itemVariants}>
              <Link 
                to={link.link} 
                className="group relative bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-6 transition-all duration-300 flex flex-col items-center text-center h-full transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20"
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-zion-blue-dark to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {link.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm md:text-base group-hover:text-zion-cyan transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-zion-slate-light text-xs mb-4 leading-relaxed group-hover:text-zion-slate-light/80 transition-colors duration-300">
                    {link.description}
                  </p>
                  <div className="flex items-center text-zion-cyan text-xs mt-auto group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="font-medium">{t('general.explore')}</span>
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-zion-slate-light mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 font-medium"
          >
            Contact our support team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
