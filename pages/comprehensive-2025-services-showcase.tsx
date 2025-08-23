import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  Star, 
  Users, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Filter
} from 'lucide-react';
import { innovative2025MicroSaasExpansionV2 } from '../data/innovative-2025-micro-saas-expansion-v2';
import { innovative2025ITServicesExpansionV2 } from '../data/innovative-2025-it-services-expansion-v2';
import { innovative2025AIServicesExpansionV2 } from '../data/innovative-2025-ai-services-expansion-v2';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const allServices: Service[] = [
  ...innovative2025MicroSaasExpansionV2,
  ...innovative2025ITServicesExpansionV2,
  ...innovative2025AIServicesExpansionV2
];

const categories = [
  { id: 'all', name: 'All Services', icon: <MapPin className="w-5 h-5" />, count: allServices.length },
  { id: 'ai', name: 'AI & Consciousness', icon: <Users className="w-5 h-5" />, count: innovative2025AIServicesExpansionV2.length },
  { id: 'quantum', name: 'Quantum Technology', icon: <Filter className="w-5 h-5" />, count: allServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
  { id: 'it', name: 'Enterprise IT', icon: <ArrowRight className="w-5 h-5" />, count: innovative2025ITServicesExpansionV2.length },
  { id: 'saas', name: 'Micro SAAS', icon: <Award className="w-5 h-5" />, count: innovative2025MicroSaasExpansionV2.length }
];

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('name');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && service.name.toLowerCase().includes('ai')) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'it' && service.name.toLowerCase().includes('infrastructure') || service.name.toLowerCase().includes('devops') || service.name.toLowerCase().includes('security')) ||
      (selectedCategory === 'saas' && !service.name.toLowerCase().includes('ai') && !service.name.toLowerCase().includes('quantum') && !service.name.toLowerCase().includes('infrastructure'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price.monthly - b.price.monthly;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const getCategoryIcon = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('ai')) return <Users className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('quantum')) return <Filter className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('infrastructure') || serviceName.toLowerCase().includes('devops') || serviceName.toLowerCase().includes('security')) return <ArrowRight className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  const getCategoryColor = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('ai')) return 'from-purple-500 to-pink-600';
    if (serviceName.toLowerCase().includes('quantum')) return 'from-blue-500 to-cyan-600';
    if (serviceName.toLowerCase().includes('infrastructure') || serviceName.toLowerCase().includes('devops') || serviceName.toLowerCase().includes('security')) return 'from-orange-500 to-red-600';
    return 'from-green-500 to-emerald-600';
  };

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServicesExpanded,
    ...innovativeITServicesExpanded,
    ...innovativeAIServicesExpanded
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length },
    { id: 'it', name: 'IT & Infrastructure', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length },
    { id: 'security', name: 'Security & Compliance', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Compliance')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '200px 200px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '200px 200px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive 2025 Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our revolutionary portfolio of AI, Quantum, IT, and Micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{allServices.length}+ Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-cyan-400" />
                <span>Quantum Technology</span>
              </div>
            </div>
          </motion.div>
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
              </div>
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

export default Comprehensive2025ServicesShowcase;
