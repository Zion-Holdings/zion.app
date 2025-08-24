
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
      icon: <Search className="h-8 w-8 text-zion-cyan" />,
      link: "/match",
      gradient: "from-zion-cyan to-zion-cyan-light"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-8 w-8 text-zion-purple" />,
      link: "/talent",
      gradient: "from-zion-purple to-zion-purple-light"
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className="h-8 w-8 text-zion-cyan" />,
      link: "/services",
      gradient: "from-zion-cyan to-zion-cyan-light"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-8 w-8 text-zion-purple" />,
      link: "/equipment",
      gradient: "from-zion-purple to-zion-purple-light"
    },
    {
      title: "nav.community",
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className="h-8 w-8 text-zion-cyan" />,
      link: "/community",
      gradient: "from-zion-cyan to-zion-cyan-light"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-8 w-8 text-zion-purple" />,
      link: "/mobile-launch",
      gradient: "from-zion-purple to-zion-purple-light"
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
            Quick Access
          </h2>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Jump directly to our most popular features and start exploring the future of tech
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
                className="group bg-gradient-to-br from-zion-blue/20 via-zion-blue/10 to-zion-purple/20 border border-zion-blue-light/20 hover:border-zion-purple/50 rounded-2xl p-6 transition-all duration-500 flex flex-col items-center text-center h-full backdrop-blur-sm hover:backdrop-blur-md hover:bg-gradient-to-br hover:from-zion-blue/30 hover:via-zion-blue/20 hover:to-zion-purple/30 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20"
              >
                <div className={`bg-gradient-to-br ${link.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {link.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg group-hover:text-zion-cyan transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed flex-grow">
                  {link.description}
                </p>
                <div className="flex items-center text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors duration-300">
                  <span>{t('general.explore')}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
