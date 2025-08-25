
import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { AdvancedServicesShowcase } from '../components/AdvancedServicesShowcase';
import { QuantumMatrixBackground } from '../components/QuantumMatrixBackground';
import { Button } from '../components/ui/button';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Target,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  Lock,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  BarChart3,
  Lightbulb,
  Award,
  Clock
} from 'lucide-react';

export const Home: React.FC = () => {
  const stats = [
    { label: 'AI Solutions Deployed', value: '500+', icon: Brain },
    { label: 'Quantum Projects', value: '50+', icon: Cpu },
    { label: 'Global Clients', value: '200+', icon: Globe },
    { label: 'Success Rate', value: '99.8%', icon: Award }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that learns and adapts to your business needs',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Next-generation cybersecurity with quantum-resistant encryption and AI threat detection',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Cloud,
      title: 'Cloud Innovation',
      description: 'Revolutionary cloud infrastructure built on quantum computing principles',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Complete business transformation with intelligent automation and optimization',
      color: 'from-zion-cyan to-zion-green'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp Global',
      content: 'Zion Tech Group revolutionized our AI infrastructure. Their quantum computing solutions gave us a 10x performance boost.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP Engineering, InnovateTech',
      content: 'The cybersecurity suite is incredible. We\'ve seen zero breaches since implementation, and the AI threat detection is remarkable.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Jennifer Kim',
      role: 'CEO, DataFlow Systems',
      content: 'Their cloud infrastructure transformed our data processing capabilities. The quantum acceleration is game-changing.',
      rating: 5,
      avatar: 'JK'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Quantum Matrix Background */}
      <QuantumMatrixBackground intensity="medium" />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={itemVariants}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-zion-cyan group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 blur-xl group-hover:blur-2xl transition-all duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-zion-slate-light text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="holographic-text-strong">Why Choose Zion Tech Group?</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with innovative thinking to deliver solutions that transform businesses
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full p-6 glass-morphism rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-zion-cyan group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Services Showcase */}
      <AdvancedServicesShowcase />

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="holographic-text-strong">Client Success Stories</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
              See how we've transformed businesses with our innovative solutions
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full p-6 glass-morphism rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-zion-slate-light text-sm leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-zion-slate-light">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="holographic-text-strong">Ready to Transform Your Business?</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group's cutting-edge solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-neon-strong"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-2 border-zion-cyan text-zion-cyan hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-neon"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Demo
                  <Clock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-zion-cyan"
                  initial={{ y: '100%' }}
                  whileHover={{ y: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
