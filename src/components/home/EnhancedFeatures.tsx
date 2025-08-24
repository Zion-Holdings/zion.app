import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our advanced AI algorithms connect you with the perfect talent and services for your project needs.",
    color: "from-zion-purple to-zion-purple-dark",
    iconColor: "text-zion-purple-light"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access talent and services from over 150 countries, ensuring 24/7 availability worldwide.",
    color: "from-zion-cyan to-zion-cyan-dark",
    iconColor: "text-zion-cyan-light"
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All talents and services are thoroughly vetted with secure payment and dispute resolution.",
    color: "from-zion-blue to-zion-blue-dark",
    iconColor: "text-zion-blue-light"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get matched with qualified professionals in minutes, not days or weeks.",
    color: "from-zion-purple-light to-zion-purple",
    iconColor: "text-zion-purple"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a thriving community of tech professionals, entrepreneurs, and innovators.",
    color: "from-zion-cyan-light to-zion-cyan",
    iconColor: "text-zion-cyan"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Built-in tools and analytics to help you scale your projects and business efficiently.",
    color: "from-zion-blue-light to-zion-blue",
    iconColor: "text-zion-blue"
  }
];

const benefits = [
  "No setup fees or hidden costs",
  "Instant access to global talent pool",
  "AI-powered project matching",
  "Secure milestone-based payments",
  "24/7 customer support",
  "Built-in project management tools"
];

export function EnhancedFeatures() {
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
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We're not just another marketplace. We're the future of how tech talent and services connect, 
            powered by cutting-edge AI and built for the modern digital economy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-zion-blue-light/10 backdrop-blur-sm p-6 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-zion-slate-light leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-zion-purple-light" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Everything You Need to Succeed
            </h3>
            <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
              From finding the perfect team member to managing complex projects, 
              Zion Tech Group provides all the tools and support you need to bring your vision to life.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8"
              >
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8"
              >
                <Link to="/marketplace">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-zion-blue-light/10 backdrop-blur-sm p-8 rounded-2xl border border-zion-purple/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Trusted by Industry Leaders
                </h4>
                <p className="text-zion-slate-light">
                  Join thousands of successful companies
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">50K+</div>
                  <div className="text-sm text-zion-slate-light">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-purple mb-2">$100M+</div>
                  <div className="text-sm text-zion-slate-light">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-cyan-light mb-2">99.9%</div>
                  <div className="text-sm text-zion-slate-light">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-purple-light mb-2">24/7</div>
                  <div className="text-sm text-zion-slate-light">Support</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}