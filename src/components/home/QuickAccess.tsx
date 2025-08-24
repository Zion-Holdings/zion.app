
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  Zap, 
  Globe, 
  Shield, 
  Star,
  ArrowRight
} from 'lucide-react';

const quickAccessItems = [
  {
    title: 'AI Talent Matching',
    description: 'Find the perfect talent with AI-powered matching',
    icon: Zap,
    href: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/30'
  },
  {
    title: 'Browse Services',
    description: 'Explore our comprehensive service catalog',
    icon: Briefcase,
    href: '/services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/30'
  },
  {
    title: 'Talent Directory',
    description: 'Connect with verified professionals worldwide',
    icon: Users,
    href: '/talent',
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/30'
  },
  {
    title: 'Equipment Marketplace',
    description: 'Buy and sell tech equipment securely',
    icon: Settings,
    href: '/equipment',
    color: 'from-zion-purple-light to-zion-purple',
    bgColor: 'bg-zion-purple-light/10',
    borderColor: 'border-zion-purple-light/30'
  },
  {
    title: 'Global IT Support',
    description: '24/7 onsite technical support worldwide',
    icon: Globe,
    href: '/it-onsite-services',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30'
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable solutions for large organizations',
    icon: Shield,
    href: '/enterprise',
    color: 'from-zion-slate to-zion-slate-dark',
    bgColor: 'bg-zion-slate/10',
    borderColor: 'border-zion-slate/30'
  }
];

export function QuickAccess() {
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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark/50 to-zion-blue-dark/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              Quick Access
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need, One Click Away
          </h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Access our most popular features and services instantly. 
            From AI-powered matching to global IT support, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quickAccessItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link
                to={item.href}
                className={`block p-6 rounded-xl border ${item.borderColor} ${item.bgColor} hover:bg-opacity-20 transition-all duration-300 h-full`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200 group-hover:translate-x-1 transform transition-transform duration-200" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-zion-cyan text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transform transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-zion-purple" />
            <span className="text-zion-purple font-medium">
              New users get 50% off their first service
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
