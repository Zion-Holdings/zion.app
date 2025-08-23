import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu, Database, Cloud, Lock,
  ArrowRight, Check, Star, TrendingUp, Users, Zap, Infinity, Sparkles,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';

const Revolutionary20402041PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Combine all services
  const allServices = [...revolutionary2040FuturisticServices, ...revolutionary2041AdvancedServices];

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Consciousness', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum AI', name: 'Quantum AI', icon: <Atom className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'Business Intelligence', name: 'Business Intelligence', icon: <Target className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Neural Technology', name: 'Neural Technology', icon: <Brain className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Financial Technology', name: 'Financial Technology', icon: <TrendingUp className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Transportation AI', name: 'Transportation AI', icon: <Rocket className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'Materials Science', name: 'Materials Science', icon: <Atom className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Psychology', name: 'AI & Psychology', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500' }
  ];

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  // Get pricing for selected plan
  const getPricing = (service: any) => {
    if (selectedPlan === 'starter') return service.pricing.starter;
    if (selectedPlan === 'professional') return service.pricing.professional;
    if (selectedPlan === 'enterprise') return service.pricing.enterprise;
    return service.pricing.custom;
  };

  // Get plan features
  const getPlanFeatures = (plan: string) => {
    const features = {
      starter: ['Core functionality', 'Basic support', 'Standard features', 'Community access'],
      professional: ['Advanced features', 'Priority support', 'Custom integrations', 'Analytics dashboard'],
      enterprise: ['Full feature set', '24/7 dedicated support', 'Custom development', 'White-label options']
    };
    return features[plan as keyof typeof features] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <SEO 
        data={{
          pageTitle: "Revolutionary 2040-2041 Futuristic Services Pricing | Zion Tech Group",
          pageDescription: "Explore our revolutionary 2040-2041 futuristic micro SAAS, IT, and AI services with comprehensive pricing. From AI consciousness evolution to quantum computing solutions.",
          pageKeywords: [
            "2040 services", "2041 services", "futuristic pricing", "AI consciousness", 
            "quantum computing", "micro SAAS", "IT services", "AI services", "Zion Tech Group"
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary 2040-2041
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience the future of technology with our revolutionary 2040-2041 futuristic services. 
            From AI consciousness evolution to quantum computing solutions, we're building tomorrow's technology today.
          </motion.p>

          {/* Plan Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {['starter', 'professional', 'enterprise'].map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedPlan === plan
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => window.location.href = service.slug}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-3">
                      <Brain className="w-full h-full text-white" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {service.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {getPricing(service)}
                  </div>
                  <p className="text-gray-400 text-sm">Starting price</p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Market Size</p>
                      <p className="text-white font-medium">{service.marketSize}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Target</p>
                      <p className="text-white font-medium">{service.targetAudience.split(',')[0]}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs text-gray-400">{service.category}</span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Features Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Plan Features Comparison
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your revolutionary technology needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['starter', 'professional', 'enterprise'].map((plan, index) => (
              <motion.div
                key={plan}
                className={`relative rounded-2xl p-8 ${
                  plan === 'professional'
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400/30 scale-105'
                    : 'bg-gradient-to-br from-white/5 to-white/10 border border-white/10'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {plan === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                  <p className="text-gray-400">Perfect for {plan === 'starter' ? 'startups and small teams' : plan === 'professional' ? 'growing businesses' : 'enterprise organizations'}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {getPlanFeatures(plan).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our revolutionary 2040-2041 futuristic services and start your journey into the future of technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Revolutionary 2040-2041 Services Inquiry'}
              >
                Contact Us Today
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => window.location.href = 'https://ziontechgroup.com'}
              >
                Visit Our Website
                <ExternalLink className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Revolutionary20402041PricingShowcase;