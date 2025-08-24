import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

const Home: React.FC = () => {
  const featuredServices = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI models, NLP solutions, and intelligent automation",
      icon: "🤖",
      link: "/services",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Cloud migration, DevOps, and scalable architecture",
      icon: "☁️",
      link: "/services",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Web & Mobile Development",
      description: "Full-stack applications and cross-platform mobile apps",
      icon: "🌐",
      link: "/services",
      color: "from-green-500 to-green-600"
    }
  ];

  const featuredProducts = [
    {
      title: "ZionAI Analytics Platform",
      description: "Enterprise AI-powered analytics and business intelligence",
      icon: "📊",
      link: "/products",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "SmartBot Builder",
      description: "No-code chatbot development with advanced NLP",
      icon: "💬",
      link: "/products",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "CloudCost Optimizer",
      description: "Intelligent cloud cost management and optimization",
      icon: "💰",
      link: "/products",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare & Life Sciences",
      description: "AI-powered medical imaging, telemedicine, and analytics",
      icon: "🏥",
      link: "/solutions"
    },
    {
      title: "Financial Services",
      description: "Risk assessment, blockchain payments, and compliance",
      icon: "🏦",
      link: "/solutions"
    },
    {
      title: "Manufacturing 4.0",
      description: "IoT platforms, AI quality control, and digital twins",
      icon: "🏭",
      link: "/solutions"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with innovative micro SAAS services and IT solutions." />
        <meta name="keywords" content="AI development, cloud services, micro SAAS, IT solutions, technology consulting, digital transformation" />
      </Head>
      
      <EnhancedNavigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Leading technology solutions provider helping businesses transform their digital presence 
                with cutting-edge AI, cloud architecture, and innovative development services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <a href="/services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg transform hover:scale-105">
                Explore Services
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg transform hover:scale-105">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive innovation and growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <a 
                    href={service.link}
                    className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Products
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Innovative solutions built with cutting-edge technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-white/70 mb-6">{product.description}</p>
                  <a 
                    href={product.link}
                    className={`inline-block bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    Explore Product
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Tailored technology solutions for specific industry challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-white/70 mb-6">{solution.description}</p>
                  <a 
                    href={solution.link}
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss how our technology solutions can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 text-lg transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-lg font-semibold transition-all duration-300 text-lg transform hover:scale-105"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </>
  );
};

export default Home;
