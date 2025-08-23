import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Star, CheckCircle } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

// Define a unified service interface
interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  link?: string;
}

// Sample services for now
const sampleServices: Service[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    tagline: 'Advanced AI solutions for enterprise',
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',
    price: '$2,999/month',
    category: 'AI',
    features: ['Custom AI Models', 'MLOps Pipeline', 'Real-time Analytics', '24/7 Support'],
    popular: true,
    link: '/ai-services'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    tagline: 'Next-generation quantum solutions',
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',
    price: '$9,999/month',
    category: 'Quantum',
    features: ['Quantum Algorithms', 'Cryptography', 'Optimization', 'Research Support'],
    link: '/quantum-computing'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Enterprise security solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',
    price: '$1,999/month',
    category: 'Security',
    features: ['Threat Detection', 'Incident Response', 'Compliance', 'Security Audits'],
    link: '/cybersecurity'
  },
  {
    id: 'cloud-platform',
    name: 'Cloud Platform',
    tagline: 'Scalable cloud infrastructure',
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.',
    price: '$1,499/month',
    category: 'Cloud',
    features: ['Multi-Cloud', 'Auto-scaling', 'Global CDN', 'DevOps Tools'],
    link: '/cloud-platform'
  },
  {
    id: 'space-technology',
    name: 'Space Technology',
    tagline: 'Innovative space solutions',
    description: 'Cutting-edge space technology services for satellite operations and space missions.',
    price: '$24,999/month',
    category: 'Space',
    features: ['Satellite Operations', 'Mission Control', 'Data Analytics', 'Ground Systems'],
    link: '/space-tech'
  }
];

const categories = ['All', 'AI', 'Quantum', 'Security', 'Cloud', 'Space'];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [services] = useState<Service[]>(sampleServices);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <SEO 
        title="Our Services | Zion Tech Group"
        description="Explore our comprehensive range of technology services including AI, quantum computing, cybersecurity, cloud platforms, and space technology solutions."
        keywords={["services", "AI", "quantum computing", "cybersecurity", "cloud platform", "space technology"]}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive range of cutting-edge technology services designed to transform your business and drive innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    {service.popular && (
                      <div className="absolute -top-3 left-6">
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                          <Star className="w-4 h-4" />
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{service.name.charAt(0)}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                      </div>
                      {service.link && (
                        <a
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </a>
                <a
                  href="/get-started"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}