
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  Settings, 
  Code, 
  Database, 
  Shield,
  Zap,
  Search,
  MessageCircle,
  TrendingUp,
  Globe,
  Rocket
} from 'lucide-react';

export function QuickAccess() {
  const quickLinks = [
    {
      title: 'AI Talent Matcher',
      description: 'Find the perfect tech professional',
      link: '/match',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-zion-purple/20 to-zion-purple/10',
      borderColor: 'border-zion-purple/30',
      iconBg: 'bg-zion-purple/20'
    },
    {
      title: 'Tech Services',
      description: 'Comprehensive IT solutions',
      link: '/services',
      icon: <Settings className="h-8 w-8" />,
      color: 'from-zion-cyan/20 to-zion-cyan/10',
      borderColor: 'border-zion-cyan/30',
      iconBg: 'bg-zion-cyan/20'
    },
    {
      title: 'Talent Directory',
      description: 'Browse verified professionals',
      link: '/talent',
      icon: <Users className="h-8 w-8" />,
      color: 'from-zion-blue/20 to-zion-blue/10',
      borderColor: 'border-zion-blue/30',
      iconBg: 'bg-zion-blue/20'
    },
    {
      title: 'Development',
      description: 'Custom software solutions',
      link: '/services',
      icon: <Code className="h-8 w-8" />,
      color: 'from-zion-purple/20 to-zion-purple/10',
      borderColor: 'border-zion-purple/30',
      iconBg: 'bg-zion-purple/20'
    },
    {
      title: 'Data Solutions',
      description: 'Analytics & infrastructure',
      link: '/services',
      icon: <Database className="h-8 w-8" />,
      color: 'from-zion-cyan/20 to-zion-cyan/10',
      borderColor: 'border-zion-cyan/30',
      iconBg: 'bg-zion-cyan/20'
    },
    {
      title: 'Security',
      description: 'Cybersecurity & compliance',
      link: '/services',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-zion-blue/20 to-zion-blue/10',
      borderColor: 'border-zion-blue/30',
      iconBg: 'bg-zion-blue/20'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Access to
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate our comprehensive platform with ease. From AI-powered talent matching 
            to specialized tech services, everything is just a click away.
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
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Link to={link.link} className="block h-full">
                <div className={`
                  bg-gradient-to-br ${link.color} 
                  border ${link.borderColor} 
                  rounded-2xl p-6 h-full 
                  backdrop-blur-sm
                  hover:shadow-2xl hover:shadow-zion-purple/20
                  transition-all duration-300
                  group-hover:border-opacity-60
                `}>
                  <div className={`
                    ${link.iconBg} 
                    w-16 h-16 rounded-2xl 
                    flex items-center justify-center 
                    mb-4 mx-auto
                    group-hover:scale-110 
                    transition-transform duration-300
                  `}>
                    <div className="group-hover:rotate-12 transition-transform duration-300">
                      {link.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-zion-cyan transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-sm text-zion-slate-light text-center leading-relaxed group-hover:text-zion-slate transition-colors">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 text-center">
                    <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-purple transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Quick Actions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get Support
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <TrendingUp className="h-5 w-5" />
              Latest Insights
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-blue/20 border border-zion-blue/30 rounded-full text-zion-blue hover:bg-zion-blue hover:text-white transition-all duration-300"
            >
              <Globe className="h-5 w-5" />
              Partner Network
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
