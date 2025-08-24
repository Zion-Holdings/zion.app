<<<<<<< HEAD

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
  Zap,
  TrendingUp
} from "lucide-react";

export function QuickAccess() {
  const { t } = useTranslation();
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match",
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent",
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30"
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services",
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment",
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30"
    },
    {
      title: t('nav.community'),
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community",
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch",
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30"
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
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
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-zion-cyan" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Quick Access
            </h2>
            <TrendingUp className="w-6 h-6 text-zion-purple" />
          </div>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Jump directly to our most popular features and start exploring the future of AI & technology
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {quickLinks.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                to={link.link} 
                className={`group block ${link.bgColor} ${link.borderColor} border-2 hover:border-opacity-60 rounded-xl p-6 transition-all duration-300 flex flex-col items-center text-center h-full transform hover:scale-105 hover:shadow-xl`}
              >
                <div className={`bg-gradient-to-br ${link.color} rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm leading-tight">{link.title}</h3>
                <p className="text-zion-slate-light text-xs mb-4 leading-relaxed flex-grow">{link.description}</p>
                <div className="flex items-center text-zion-cyan text-xs font-medium group-hover:text-zion-cyan-light transition-colors duration-200">
                  <span>{t('general.explore')}</span>
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-zion-slate-light mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-200"
          >
            Browse Full Marketplace
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
=======
export { EnhancedQuickAccess as QuickAccess } from './EnhancedQuickAccess';
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
