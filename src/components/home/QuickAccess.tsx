
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Settings, 
  ShoppingCart, 
  MessageSquare, 
  BarChart3,
  Zap,
  Globe,
  Shield,
  Clock
} from 'lucide-react';

const quickAccessItems = [
  {
    title: 'Find Talent',
    description: 'Discover skilled professionals',
    icon: Users,
    href: '/talent',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan'
  },
  {
    title: 'Hire AI',
    description: 'AI-powered hiring solutions',
    icon: Zap,
    href: '/zion-hire-ai',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple'
  },
  {
    title: 'IT Services',
    description: '24/7 global IT support',
    icon: Settings,
    href: '/it-onsite-services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue'
  },
  {
    title: 'Marketplace',
    description: 'Browse products & services',
    icon: ShoppingCart,
    href: '/marketplace',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green'
  },
  {
    title: 'Community',
    description: 'Connect with peers',
    icon: MessageSquare,
    href: '/community',
    color: 'from-zion-orange to-zion-orange-dark',
    bgColor: 'bg-zion-orange/10',
    iconColor: 'text-zion-orange'
  },
  {
    title: 'Analytics',
    description: 'Track your performance',
    icon: BarChart3,
    href: '/analytics',
    color: 'from-zion-pink to-zion-pink-dark',
    bgColor: 'bg-zion-pink/10',
    iconColor: 'text-zion-pink'
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
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Quick Access to Everything
          </h2>
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to grow your business, find talent, and access IT services 
            is just one click away.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quickAccessItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Link
                  to={item.href}
                  className="block h-full"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative z-10 w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="flex items-center gap-2 text-zion-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="text-sm font-medium">Get Started</span>
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-zion-purple/20 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Global Coverage</span>
            </div>
            <div className="w-px h-6 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Secure & Reliable</span>
            </div>
            <div className="w-px h-6 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-zion-blue" />
              <span className="text-zion-blue font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
