import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Cpu, Target, Building, Rocket, 
  ArrowRight, Check, Star, TrendingUp, Users, Zap,
  Phone, Mail, MapPin, Globe, Award, Clock, Search
} from 'lucide-react';

// Import all our comprehensive service data
import { advancedEnterpriseAutomationServices2025 } from '../data/2025-advanced-enterprise-automation-services';
import { advancedAIMLEnterpriseServices2025 } from '../data/2025-advanced-ai-ml-enterprise-services';
import { advancedCybersecurityComplianceServices2025 } from '../data/2025-advanced-cybersecurity-compliance-services';
import { advancedCloudDevOpsEnterpriseServices2025 } from '../data/2025-advanced-cloud-devops-enterprise-services';
import { innovativeMicroSaasSMBServices2025 } from '../data/2025-innovative-micro-saas-smb-services';
import { advancedDigitalMarketingAnalyticsServices2025 } from '../data/2025-advanced-digital-marketing-analytics-services';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all services
  const allServices = [
    ...advancedEnterpriseAutomationServices2025,
    ...advancedAIMLEnterpriseServices2025,
    ...advancedCybersecurityComplianceServices2025,
    ...advancedCloudDevOpsEnterpriseServices2025,
    ...innovativeMicroSaasSMBServices2025,
    ...advancedDigitalMarketingAnalyticsServices2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'enterprise-automation', name: 'Enterprise Automation', icon: <Brain className="w-5 h-5" />, color: 'from-green-500 to-teal-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Cpu className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: <Building className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" />, color: 'from-emerald-500 to-green-500' },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: <TrendingUp className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
      service.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('automation')) return <Brain className="w-6 h-6" />;
    if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('machine learning')) return <Cpu className="w-6 h-6" />;
    if (category.toLowerCase().includes('security') || category.toLowerCase().includes('cyber')) return <Shield className="w-6 h-6" />;
    if (category.toLowerCase().includes('cloud') || category.toLowerCase().includes('devops')) return <Building className="w-6 h-6" />;
    if (category.toLowerCase().includes('marketing')) return <TrendingUp className="w-6 h-6" />;
    if (category.toLowerCase().includes('saas')) return <Target className="w-6 h-6" />;
    return <Target className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative AI, IT, and micro SAAS services. From enterprise automation to affordable SMB solutions, we deliver cutting-edge technology with proven ROI."
        keywords={["AI services", "IT solutions", "micro SAAS", "enterprise automation", "cybersecurity", "cloud optimization", "digital marketing", "SMB solutions"]}
        url="https://ziontechgroup.com/comprehensive-2025-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive 2025
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Services Showcase
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive portfolio of innovative AI, IT, and micro SAAS services. 
            From enterprise automation to affordable SMB solutions, we deliver cutting-edge technology with proven ROI.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-2" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
                <p className="text-gray-300 text-sm">Call us anytime</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                <p className="text-gray-300 text-sm">Email us directly</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-2" />
                <p className="text-white font-semibold">364 E Main St STE 1008</p>
                <p className="text-gray-300 text-sm">Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-xl text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Content */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.tagline}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">
                        ${service.price.monthly.toLocaleString()}
                      </span>
                      <span className="text-gray-400">/month</span>
                      <div className="text-sm text-gray-400">
                        ${service.price.yearly.toLocaleString()}/year (save 17%)
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Position */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <p className="text-xs text-gray-300">{service.marketPosition}</p>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Service Link */}
                    <div className="mt-4 text-center">
                      <a
                        href={service.link}
                        className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300"
                      >
                        Learn More →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-gray-400">No services found matching your criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive portfolio of innovative services is designed to drive growth, 
              improve efficiency, and deliver measurable ROI. Contact us today to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">Visit our website:</p>
              <a
                href="https://ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold transition-colors duration-300"
              >
                https://ziontechgroup.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;