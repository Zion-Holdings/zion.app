
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Rocket
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed and performance with cutting-edge technology"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and encryption"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless teamwork with real-time collaboration tools"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grow your business with our scalable solutions"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "24/7", label: "Support", icon: Zap },
    { number: "50+", label: "Services", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-dark via-zion-dark/95 to-zion-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zion-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient bg-gradient-to-r from-zion-primary via-zion-secondary to-zion-cyan bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-zion-light/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforming businesses with cutting-edge 
                <span className="text-zion-primary font-semibold"> AI</span>, 
                <span className="text-zion-secondary font-semibold"> Micro SAAS</span>, and 
                <span className="text-zion-cyan font-semibold"> IT Solutions</span>
              </p>
              <p className="text-lg text-zion-light/70 mb-12 max-w-3xl mx-auto">
                From startups to enterprises, we deliver innovative solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/all-services"
                className="group bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-primary/25 flex items-center gap-3"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group bg-transparent hover:bg-zion-primary/10 text-zion-primary border-2 border-zion-primary hover:border-zion-primary/60 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                Get Started Today
                <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-zion-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-zion-light/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-zion-light/70 max-w-3xl mx-auto">
                We combine innovation, expertise, and dedication to deliver exceptional results 
                that exceed expectations and drive real business value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-zion-dark/60 to-zion-dark/40 backdrop-blur-sm border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zion-light/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-zion-primary/10 via-zion-secondary/10 to-zion-cyan/10 rounded-3xl p-12 border border-zion-primary/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-light/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful companies that trust Zion Tech Group 
                to deliver innovative solutions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-primary/25 flex items-center gap-3"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/all-services"
                  className="group bg-transparent hover:bg-zion-primary/10 text-zion-primary border-2 border-zion-primary hover:border-zion-primary/60 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  View All Services
                  <Star className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
