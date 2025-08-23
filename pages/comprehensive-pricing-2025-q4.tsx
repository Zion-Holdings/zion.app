import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, TrendingUp, DollarSign,
  Crown, Award, Zap
} from 'lucide-react';
import Link from 'next/link';

// Import our new service data
import { innovative2025Q4Services } from '../data/innovative-2025-q4-new-services';
import { emergingTech2025Q4Services } from '../data/emerging-tech-2025-q4-services';

// Combine all services
const allServices = [...innovative2025Q4Services, ...emergingTech2025Q4Services];

const ComprehensivePricing2025Q4: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'price' | 'popularity' | 'rating' | 'newest'>('price');

  // Filter services by category
  const filteredServices = allServices.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return b.customers - a.customers;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Computing', count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'emerging', name: 'Emerging Technology', count: allServices.filter(s => s.category.toLowerCase().includes('emerging')).length },
    { id: 'space', name: 'Space Technology', count: allServices.filter(s => s.category.toLowerCase().includes('space')).length },
    { id: 'security', name: 'Security & Privacy', count: allServices.filter(s => s.category.toLowerCase().includes('security')).length }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="Comprehensive Q4 2025 Pricing | Zion Tech Group"
        description="Explore our revolutionary Q4 2025 services with transparent pricing, comprehensive features, and market-leading innovation. Transform your business with cutting-edge technology solutions."
        keywords={["pricing", "AI services", "quantum computing", "space technology", "emerging tech", "micro SAAS pricing", "Zion Tech Group", "2025 services"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Q4 2025 Pricing Guide
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Transparent pricing for revolutionary technology services that will transform your business and give you a competitive edge
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-gray-400"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span>Starting from $499/month</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Market Leading ROI</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span>Premium Innovation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Service Categories & Pricing Tiers
          </motion.h2>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Starter",
                price: "$499",
                period: "/month",
                description: "Perfect for small businesses and startups",
                features: ["Core functionality", "Standard support", "Basic integrations", "Community access"],
                color: "from-cyan-500 to-blue-600",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Professional",
                price: "$1,299",
                period: "/month",
                description: "Ideal for growing companies and teams",
                features: ["Advanced features", "Priority support", "Full integrations", "Custom workflows", "Analytics dashboard"],
                color: "from-blue-500 to-purple-600",
                icon: <Award className="w-8 h-8" />,
                popular: true
              },
              {
                title: "Enterprise",
                price: "$2,999",
                period: "/month",
                description: "For large organizations and enterprises",
                features: ["All features", "24/7 support", "Custom development", "Dedicated account manager", "SLA guarantees", "On-premise options"],
                color: "from-purple-500 to-pink-600",
                icon: <Crown className="w-8 h-8" />
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.title}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-cyan-400/50 shadow-2xl shadow-cyan-500/25' 
                    : 'bg-gray-800/50 border-gray-700/50'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-gray-400">{tier.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-gray-700/50 text-white border border-gray-600 hover:bg-gray-600/50'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Filters */}
      <section className="py-8 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600/50 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'popularity' | 'rating' | 'newest')}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="price">Price: Low to High</option>
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Detailed Service Pricing
          </motion.h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left p-4 text-gray-300 font-semibold">Service</th>
                  <th className="text-center p-4 text-gray-300 font-semibold">Category</th>
                  <th className="text-center p-4 text-gray-300 font-semibold">Price</th>
                  <th className="text-center p-4 text-gray-300 font-semibold">Rating</th>
                  <th className="text-center p-4 text-gray-300 font-semibold">Customers</th>
                  <th className="text-center p-4 text-gray-300 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedServices.map((service, index) => (
                  <motion.tr
                    key={service.id}
                    className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{service.icon}</div>
                        <div>
                          <div className="font-semibold text-white">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.tagline}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                        {service.category}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviews})</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">users</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex gap-2">
                        <Link
                          href={service.link}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Get Started
                        </Link>
                        <button className="px-4 py-2 border border-cyan-400/50 text-cyan-400 text-sm rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Calculate Your ROI
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our services deliver measurable returns on investment. See how much you can save and earn.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { metric: "Average Cost Savings", value: "30-50%", description: "Reduced operational costs" },
              { metric: "Efficiency Improvement", value: "3-5x", description: "Faster processes and workflows" },
              { metric: "Revenue Growth", value: "25-40%", description: "Increased business opportunities" }
            ].map((stat, index) => (
              <motion.div
                key={stat.metric}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.metric}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/innovative-2025-q4-showcase"
              className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025Q4;