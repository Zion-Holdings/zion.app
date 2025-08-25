import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  Play,
  Star
} from 'lucide-react';

export const ITServiceRequestHero: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: '24/7 response times under 2 hours'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption & compliance'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '2hr', label: 'Response Time' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue via-zion-blue-light to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-zion-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-zion-cyan/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zion-blue via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              Trusted by 500+ Companies Worldwide
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-gradient-x">
                Cutting-Edge Tech
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Unlock the power of AI, cloud computing, and digital transformation. 
              Our expert team delivers innovative solutions that drive real business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link to="/request-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
              
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-zion-cyan mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative bg-zion-blue-light/20 backdrop-blur-md border border-zion-purple/20 rounded-3xl p-8 lg:p-12">
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-zion-cyan to-zion-purple p-4 rounded-2xl shadow-2xl shadow-zion-cyan/25"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">AI-Powered</div>
                  <div className="text-sm opacity-90">Solutions</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-zion-purple to-zion-cyan p-4 rounded-2xl shadow-2xl shadow-zion-purple/25"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">Cloud</div>
                  <div className="text-sm opacity-90">Native</div>
                </div>
              </motion.div>

              {/* Central Content */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-zion-cyan/30">
                  <Globe className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Next-Gen Technology
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Experience the future of business technology with our cutting-edge solutions
                </p>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        className="text-center p-3 bg-zion-blue/30 rounded-xl border border-zion-purple/20"
                      >
                        <IconComponent className="w-6 h-6 text-zion-cyan mx-auto mb-2" />
                        <div className="text-sm font-medium text-white mb-1">
                          {feature.title}
                        </div>
                        <div className="text-xs text-zion-slate-light">
                          {feature.description}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};