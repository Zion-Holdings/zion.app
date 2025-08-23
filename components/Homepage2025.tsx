import React, { Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket } from 'lucide-react';

// Lazy load components for better performance
const UltraFuturisticServiceCard2026 = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2025: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h1 
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <button 
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2"
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                aria-label="Learn more about Zion Tech Group"
              >
                <Play className="w-5 h-5" />
                Learn More
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span>Industry Leader 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span>99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section 
          className="py-24 px-4 relative"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Our Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed to transform your business and accelerate growth
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Suspense fallback={
                <div className="h-80 bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'ai-ml',
                    name: 'AI & Machine Learning',
                    tagline: 'Advanced artificial intelligence solutions',
                    description: 'Revolutionary AI and machine learning solutions that transform how businesses operate, make decisions, and serve customers',
                    price: '$999',
                    period: 'month',
                    features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics'],
                    popular: true,
                    category: 'AI',
                    icon: '🧠'
                  }}
                  variant="ai"
                />
              </Suspense>

              <Suspense fallback={
                <div className="h-80 bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'quantum-computing',
                    name: 'Quantum Computing',
                    tagline: 'Next-generation computing solutions',
                    description: 'Breakthrough quantum computing solutions that solve previously impossible problems and unlock new possibilities',
                    price: '$1999',
                    period: 'month',
                    features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation', 'Quantum ML'],
                    popular: false,
                    category: 'Quantum',
                    icon: '⚛️'
                  }}
                  variant="quantum"
                />
              </Suspense>

              <Suspense fallback={
                <div className="h-80 bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'process-automation',
                    name: 'Process Automation',
                    tagline: 'Intelligent automation solutions',
                    description: 'Intelligent automation that streamlines operations, reduces costs, and enhances productivity across your organization',
                    price: '$799',
                    period: 'month',
                    features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics', 'Process Mining'],
                    popular: true,
                    category: 'Automation',
                    icon: '⚡'
                  }}
                  variant="automation"
                />
              </Suspense>

              <Suspense fallback={
                <div className="h-80 bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'quantum-security',
                    name: 'Quantum Security',
                    tagline: 'Future-proof security solutions',
                    description: 'Quantum-secure infrastructure and post-quantum cryptography to protect against future quantum threats',
                    price: '$2999',
                    period: 'month',
                    features: ['Post-Quantum Crypto', 'Quantum Key Distribution', 'Zero Trust', 'Compliance'],
                    popular: true,
                    category: 'Security',
                    icon: '🔐'
                  }}
                  variant="it"
                />
              </Suspense>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button 
                className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 mx-auto"
                aria-label="Explore all services offered by Zion Tech Group"
              >
                <Star className="w-6 h-6" />
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-24 px-4 bg-gradient-to-b from-black to-gray-900/50 relative"
          aria-labelledby="features-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                id="features-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              >
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "AI-First Approach",
                  description: "Every solution is built with artificial intelligence at its core"
                },
                {
                  icon: <Shield className="w-12 h-12 text-blue-400" />,
                  title: "Enterprise Security",
                  description: "Bank-level security and compliance for your peace of mind"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-purple-400" />,
                  title: "Rapid Deployment",
                  description: "Get up and running in days, not months"
                },
                {
                  icon: <Users className="w-12 h-12 text-pink-400" />,
                  title: "24/7 Support",
                  description: "Round-the-clock expert support when you need it most"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                >
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section 
          className="py-24 px-4 relative"
          aria-labelledby="categories-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                id="categories-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions across all major technology domains
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: '🧠',
                  title: "AI & Machine Learning",
                  description: "Advanced artificial intelligence solutions for business transformation",
                  services: "50+ AI Services",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: '⚛️',
                  title: "Quantum Technology",
                  description: "Breakthrough quantum computing and quantum-secure solutions",
                  services: "25+ Quantum Services",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  icon: '🛡️',
                  title: "Cybersecurity",
                  description: "Enterprise-grade security and compliance solutions",
                  services: "40+ Security Services",
                  color: "from-red-500 to-orange-600"
                },
                {
                  icon: '🌐',
                  title: "IT Infrastructure",
                  description: "Scalable and secure enterprise infrastructure solutions",
                  services: "35+ Infrastructure Services",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: '📱',
                  title: "Micro SAAS",
                  description: "Innovative business solutions for modern enterprises",
                  services: "60+ Micro SAAS Services",
                  color: "from-yellow-500 to-amber-600"
                },
                {
                  icon: '🚀',
                  title: "Emerging Tech",
                  description: "Cutting-edge technologies for future-ready businesses",
                  services: "30+ Emerging Tech Services",
                  color: "from-indigo-500 to-violet-600"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="group p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className={`text-6xl group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white text-center">{category.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{category.description}</p>
                  <div className={`text-center text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.services}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;