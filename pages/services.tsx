import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2046 from '../components/layout/UltraFuturisticNavigation2046';
import UltraFuturisticFooter2046 from '../components/layout/UltraFuturisticFooter2046';
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI systems that develop self-awareness, emotional intelligence, and autonomous learning capabilities.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: [
        "Emotional intelligence development",
        "Self-aware learning systems",
        "Consciousness evolution algorithms",
        "Human-AI collaboration frameworks"
      ],
      benefits: [
        "Enhanced decision-making capabilities",
        "Improved human-AI interaction",
        "Autonomous problem-solving",
        "Continuous self-improvement"
      ]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing platforms that solve previously impossible computational problems.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Quantum algorithm optimization",
        "Hybrid quantum-classical systems",
        "Cryptography and security",
        "Complex problem solving"
      ],
      benefits: [
        "1000x faster computation",
        "Breakthrough research capabilities",
        "Unbreakable encryption",
        "Optimization solutions"
      ]
    },
    {
      title: "Advanced Cybersecurity",
      description: "AI-powered security systems that provide real-time threat detection and autonomous response capabilities.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      features: [
        "AI threat intelligence",
        "Zero-trust architecture",
        "Automated incident response",
        "Behavioral analysis"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Real-time protection",
        "Reduced false positives",
        "Compliance assurance"
      ]
    },
    {
      title: "Space Technology",
      description: "Autonomous space exploration systems and resource intelligence platforms for the final frontier.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      features: [
        "Autonomous exploration systems",
        "Space resource intelligence",
        "Satellite network management",
        "Mission planning and execution"
      ],
      benefits: [
        "Reduced mission costs",
        "Enhanced safety protocols",
        "Real-time decision making",
        "Resource optimization"
      ]
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const getCategoryIcon = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('ai')) return <Users className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('quantum')) return <Filter className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('infrastructure') || serviceName.toLowerCase().includes('devops') || serviceName.toLowerCase().includes('security')) return <ArrowRight className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  // Reset to first page when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'enterprise it':
      case 'enterprise security':
      case 'devops & automation':
      case 'data & analytics':
      case 'cloud services':
      case 'cybersecurity':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'ai & consciousness':
      case 'ai services':
      case 'artificial intelligence':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'quantum':
      case 'quantum & emerging tech':
        return <Atom className="w-6 h-6 text-purple-400" />;
      case 'space':
      case 'space & metaverse':
        return <Rocket className="w-6 h-6 text-pink-400" />;
      case 'micro saas':
      case 'micro saas solutions':
        return <Target className="w-6 h-6 text-orange-400" />;
      case 'creative':
      case 'creative & media':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case 'healthcare':
      case 'healthcare & biotech':
        return <Heart className="w-6 h-6 text-red-400" />;
      case 'transportation':
      case 'transportation & logistics':
        return <Truck className="w-6 h-6 text-blue-400" />;
      case 'education':
      case 'education & research':
        return <GraduationCap className="w-6 h-6 text-yellow-400" />;
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
      default:
        return <Shield className="w-6 h-6 text-gray-400" />;
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
};

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
=======
    <>
      <SEO title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." canonical="https://ziontechgroup.com/services/" />

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-cyan-400 text-lg font-medium">Loading Services...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of AI, Quantum, IT, and Micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{allServices.length}+ Revolutionary Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">Business</span> with Our Services
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From enterprise IT solutions to cutting-edge AI services and innovative micro SAAS platforms, 
                we provide the technology you need to succeed in the digital age.
              </p>
            </motion.div>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60

        {/* Category Overview */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}>
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} w-fit mb-6`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-300 mb-4">
                      {category.count} revolutionary services designed to transform your business
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">Explore Services</span>
                      <div className="text-2xl font-bold text-white">{category.count}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-gray-700'
                  }`}
                >
                  {category.icon}
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="popularity">Sort by Popularity</option>
                </select>
                <button
                  onClick={toggleSortOrder}
                  className="px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/25' 
                      : 'bg-white/5 border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}>
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Service Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.name)}`}>
                        {getCategoryIcon(service.name)}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{service.category}</div>
                        <div className="text-xs text-gray-500">{service.launchDate}</div>
                      </div>
                    </div>

                    {/* Service Name and Tagline */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.monthly}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${service.price.yearly}/year • {service.price.trialDays} days free trial
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {service.rating} ({service.reviews})
                      </div>
                      <div>{service.customers.toLocaleString()} customers</div>
                    </div>

                    {/* CTA Button */}
                    <Link href={service.link}>
                      <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our revolutionary services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-gray-400">
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;