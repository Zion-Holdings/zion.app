import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Code, Award, Clock, Zap, Globe, Shield } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ComponentType<any>;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}

const stats: StatItem[] = [
  {
    id: 'projects',
    icon: Code,
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed across various industries',
    color: 'from-blue-500 to-cyan-500',
    delay: 0
  },
  {
    id: 'clients',
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
    color: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    id: 'experience',
    icon: Clock,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Deep expertise in technology solutions',
    color: 'from-green-500 to-emerald-500',
    delay: 0.2
  },
  {
    id: 'uptime',
    icon: Zap,
    value: 99.9,
    suffix: '%',
    label: 'Uptime SLA',
    description: 'Reliable service delivery guarantee',
    color: 'from-yellow-500 to-orange-500',
    delay: 0.3
  },
  {
    id: 'countries',
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global reach and local expertise',
    color: 'from-indigo-500 to-purple-500',
    delay: 0.4
  },
  {
    id: 'security',
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Security Compliance',
    description: 'Enterprise-grade security standards',
    color: 'from-red-500 to-pink-500',
    delay: 0.5
  },
  {
    id: 'satisfaction',
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Exceeding expectations consistently',
    color: 'from-teal-500 to-blue-500',
    delay: 0.6
  },
  {
    id: 'growth',
    icon: TrendingUp,
    value: 300,
    suffix: '%',
    label: 'Average Growth',
    description: 'Client business growth achieved',
    color: 'from-emerald-500 to-green-500',
    delay: 0.7
  }
];

const AdvancedStats: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      animateCounters();
    }
  }, [isInView]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step >= steps) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounters(prev => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, duration / steps);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact we&apos;ve had on businesses worldwide through our technology solutions and expertise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            const currentValue = counters[stat.id] || 0;
            
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 overflow-hidden backdrop-blur-sm">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    {/* Animated Counter */}
                    <motion.div
                      key={currentValue}
                      initial={{ scale: 1.2, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center"
                    >
                      {currentValue.toLocaleString()}
                      <span className="text-2xl md:text-3xl ml-1">{stat.suffix}</span>
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className={`absolute inset-0 border-2 border-transparent rounded-2xl`}
                    style={{
                      background: `linear-gradient(45deg, transparent, transparent) padding-box, linear-gradient(45deg, ${stat.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-gradient-${c.split('-')[1]})`).join(', ')}) border-box`
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            These numbers are growing every day
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedStats;