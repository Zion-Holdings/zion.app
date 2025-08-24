import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Users, Briefcase, Settings, Sparkles, ArrowRight } from 'lucide-react';

export function QuickAccess() {
  const quickActions = [
    {
      title: 'Find Services',
      description: 'Discover AI and tech services',
      icon: Search,
      href: '/services',
      color: 'from-zion-cyan to-zion-blue',
      gradient: 'from-zion-cyan/20 to-zion-blue/20'
    },
    {
      title: 'Hire Talent',
      description: 'Connect with tech experts',
      icon: Users,
      href: '/talent',
      color: 'from-zion-purple to-zion-cyan',
      gradient: 'from-zion-purple/20 to-zion-cyan/20'
    },
    {
      title: 'Browse Equipment',
      description: 'Find hardware and tools',
      icon: Briefcase,
      href: '/equipment',
      color: 'from-zion-blue to-zion-purple',
      gradient: 'from-zion-blue/20 to-zion-purple/20'
    },
    {
      title: 'AI Solutions',
      description: 'Explore AI-powered tools',
      icon: Sparkles,
      href: '/ai-services',
      color: 'from-zion-cyan to-zion-purple',
      gradient: 'from-zion-cyan/20 to-zion-purple/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Get started quickly with our most popular features and services
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickActions.map((action) => (
            <motion.div
              key={action.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={action.href}
                className="block bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {action.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {action.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                  <span className="text-sm font-medium">Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}