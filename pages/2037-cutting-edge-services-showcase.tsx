import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Globe, Zap, Lock, ChartBar, Users, 
  Briefcase, Cpu, Database, Network, Cloud, Server, Lightbulb, Search
} from 'lucide-react';

// Import our cutting-edge services
import { cuttingEdgeServices } from '../data/real-2037-q4-cutting-edge-services';
import { itInfrastructureServices } from '../data/real-2037-q4-it-infrastructure-services';
import { businessSolutionServices } from '../data/real-2037-q4-business-solutions';

const CuttingEdgeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: <Brain className="w-5 h-5" />, color: 'from-purple-600 to-indigo-700' },
    { id: 'supply-chain', name: 'Supply Chain', icon: <Truck className="w-5 h-5" />, color: 'from-blue-600 to-cyan-700' },
    { id: 'financial', name: 'Financial Tech', icon: <ChartBar className="w-5 h-5" />, color: 'from-green-600 to-emerald-700' },
    { id: 'legal', name: 'Legal Tech', icon: <Shield className="w-5 h-5" />, color: 'from-slate-600 to-gray-700' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Lock className="w-5 h-5" />, color: 'from-red-600 to-pink-700' },
    { id: 'hr', name: 'HR & Talent', icon: <Users className="w-5 h-5" />, color: 'from-indigo-600 to-purple-700' },
    { id: 'logistics', name: 'Logistics', icon: <Truck className="w-5 h-5" />, color: 'from-orange-600 to-red-700' },
    { id: 'marketing', name: 'Marketing', icon: <Target className="w-5 h-5" />, color: 'from-teal-600 to-cyan-700' },
    { id: 'energy', name: 'Energy', icon: <Zap className="w-5 h-5" />, color: 'from-yellow-600 to-amber-700' },
    { id: 'customer-success', name: 'Customer Success', icon: <Heart className="w-5 h-5" />, color: 'from-emerald-600 to-teal-700' },
    { id: 'edge-computing', name: 'Edge Computing', icon: <Cpu className="w-5 h-5" />, color: 'from-indigo-600 to-purple-700' },
    { id: 'cloud-management', name: 'Cloud Management', icon: <Cloud className="w-5 h-5" />, color: 'from-green-600 to-emerald-700' },
    { id: 'network-security', name: 'Network Security', icon: <Network className="w-5 h-5" />, color: 'from-blue-600 to-cyan-700' },
    { id: 'devops', name: 'DevOps', icon: <Server className="w-5 h-5" />, color: 'from-purple-600 to-pink-700' },
    { id: 'data-analytics', name: 'Data Analytics', icon: <Database className="w-5 h-5" />, color: 'from-teal-600 to-cyan-700' },
    { id: 'backup-recovery', name: 'Backup & Recovery', icon: <ArrowRight className="w-5 h-5" />, color: 'from-orange-600 to-red-700' },
    { id: 'container-management', name: 'Container Management', icon: <Briefcase className="w-5 h-5" />, color: 'from-blue-600 to-indigo-700' },
    { id: 'api-management', name: 'API Management', icon: <Globe className="w-5 h-5" />, color: 'from-gray-600 to-slate-700' },
    { id: 'microservices', name: 'Microservices', icon: <Building className="w-5 h-5" />, color: 'from-purple-600 to-violet-700' },
    { id: 'infrastructure-monitoring', name: 'Infrastructure Monitoring', icon: <ChartBar className="w-5 h-5" />, color: 'from-emerald-600 to-teal-700' },
    { id: 'business-automation', name: 'Business Automation', icon: <Rocket className="w-5 h-5" />, color: 'from-blue-600 to-indigo-700' },
    { id: 'customer-experience', name: 'Customer Experience', icon: <Heart className="w-5 h-5" />, color: 'from-purple-600 to-pink-700' },
    { id: 'sales-intelligence', name: 'Sales Intelligence', icon: <Target className="w-5 h-5" />, color: 'from-indigo-600 to-purple-700' },
    { id: 'project-management', name: 'Project Management', icon: <Check className="w-5 h-5" />, color: 'from-teal-600 to-cyan-700' },
    { id: 'compliance', name: 'Compliance', icon: <Shield className="w-5 h-5" />, color: 'from-emerald-600 to-teal-700' },
    { id: 'workforce-optimization', name: 'Workforce Optimization', icon: <Users className="w-5 h-5" />, color: 'from-slate-600 to-gray-700' },
    { id: 'innovation-management', name: 'Innovation Management', icon: <Lightbulb className="w-5 h-5" />, color: 'from-yellow-600 to-amber-700' }
  ];

  const allServices = [
    ...cuttingEdgeServices,
    ...itInfrastructureServices,
    ...businessSolutionServices
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category.toLowerCase().replace(' ', '-'));
    return categoryObj ? categoryObj.color : 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2037 Cutting-Edge Services Showcase | Zion Tech Group"
        description="Explore our revolutionary Q4 2037 cutting-edge services featuring quantum computing, AI-powered solutions, and next-generation IT infrastructure. Transform your business with Zion Tech Group's innovative micro SAAS solutions."
        keywords={["cutting-edge services", "quantum computing", "AI services", "IT infrastructure", "micro SAAS", "2037", "Zion Tech Group"]}
        image="/og-image.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2037 Cutting-Edge
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary quantum computing, AI-powered, and next-generation IT infrastructure services. 
              Transform your business with Zion Tech Group's innovative micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Check className="w-5 h-5" />
                <span>30+ Cutting-Edge Services</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Atom className="w-5 h-5" />
                <span>Quantum Computing Powered</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Brain className="w-5 h-5" />
                <span>AI & Machine Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Ready to Transform Your Business?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold">Contact Us</div>
                <div className="text-white">Mobile: +1 302 464 0950</div>
                <div className="text-white">Email: kleber@ziontechgroup.com</div>
              </div>
              <div className="space-y-2">
                <div className="text-purple-400 font-semibold">Visit Us</div>
                <div className="text-white">364 E Main St STE 1008</div>
                <div className="text-white">Middletown DE 19709</div>
              </div>
              <div className="space-y-2">
                <div className="text-green-400 font-semibold">Website</div>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cutting-edge services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">
                            Popular
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-white/90 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-400 text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Starting Price:</span>
                        <span className="text-2xl font-bold text-white">{service.price}<span className="text-sm text-gray-400">{service.period}</span></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Setup Time:</span>
                        <span className="text-white">{service.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Trial:</span>
                        <span className="text-white">{service.trialDays} days</span>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-400">Market Size:</span>
                          <div className="text-white font-semibold">{service.marketSize}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Growth Rate:</span>
                          <div className="text-white font-semibold">{service.growthRate}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">ROI:</span>
                          <div className="text-white font-semibold">{service.roi}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Customers:</span>
                          <div className="text-white font-semibold">{service.customers}+</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                      Learn More
                      <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-blue-500/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of forward-thinking companies already using our cutting-edge services to transform their business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CuttingEdgeServicesShowcase;