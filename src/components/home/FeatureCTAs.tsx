
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Star,
  Users as UsersIcon,
  Zap as ZapIcon
} from 'lucide-react';

const ctaFeatures = [
  {
    icon: Zap,
    title: 'Launch Your Project',
    description: 'Get started with AI-powered project matching and find the perfect team in minutes.',
    action: 'Start Project',
    href: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/30',
    gradient: 'from-zion-purple/20 to-zion-purple/40'
  },
  {
    icon: Users,
    title: 'Hire Top Talent',
    description: 'Access a global network of verified professionals with proven track records.',
    action: 'Browse Talent',
    href: '/talent',
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/30',
    gradient: 'from-zion-cyan/20 to-zion-cyan/40'
  },
  {
    icon: TrendingUp,
    title: 'Scale Your Business',
    description: 'Enterprise solutions designed to grow with your organization\'s needs.',
    action: 'Enterprise Plan',
    href: '/enterprise',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/30',
    gradient: 'from-zion-blue/20 to-zion-blue/40'
  }
];

const highlights = [
  { icon: Users, text: '50K+ Active Users', color: 'text-zion-cyan' },
  { icon: Star, text: '4.9/5 Rating', color: 'text-zion-purple' },
  { icon: Zap, text: '<15min Response', color: 'text-green-400' }
];

export function FeatureCTAs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              Take Action
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Choose your path to success with our comprehensive suite of solutions. 
            From project launch to enterprise scaling, we have everything you need.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl border ${feature.borderColor} ${feature.bgColor} hover:bg-opacity-20 transition-all duration-500 relative overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg w-fit mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <Link
                    to={feature.href}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}
                  >
                    {feature.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transform transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <div className={`text-2xl font-bold ${highlight.color} mb-2`}>
                  {highlight.text.split(' ')[0]}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {highlight.text.split(' ').slice(1).join(' ')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30 border border-zion-purple/40 rounded-2xl p-10 max-w-3xl mx-auto backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the Future of Work Today
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven talent matching and global service delivery. 
              Start your journey with Zion and unlock unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center"
              >
                Get Started Free
                <Zap className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
