import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Zap, ArrowRight, Search } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const services = [
    {
      id: 1,
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and intelligence",
      category: "ai",
      icon: Brain,
      link: "/ai-services",
      features: ["Custom AI Development", "Machine Learning Models", "Natural Language Processing", "Computer Vision"]
    },
    {
      id: 2,
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      category: "cloud",
      icon: Cloud,
      link: "/cloud-devops-solutions",
      features: ["Cloud Migration", "DevOps Automation", "Kubernetes Management", "Infrastructure as Code"]
    },
    {
      id: 3,
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      category: "security",
      icon: Shield,
      link: "/advanced-services",
      features: ["Security Audits", "Threat Protection", "Compliance Management", "24/7 Monitoring"]
    },
    {
      id: 4,
      name: "Digital Transformation",
      description: "End-to-end business transformation and modernization services",
      category: "transformation",
      icon: Zap,
      link: "/digital-transformation",
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Strategic Consulting"]
    },
    {
      id: 5,
      name: "Micro SAAS Services",
      description: "Specialized software solutions for specific business needs",
      category: "saas",
      icon: Zap,
      link: "/micro-saas-services",
      features: ["Custom Applications", "API Development", "Database Solutions", "Web Applications"]
    },
    {
      id: 6,
      name: "Enterprise Solutions",
      description: "Comprehensive business solutions for large organizations",
      category: "enterprise",
      icon: Shield,
      link: "/enterprise-solutions",
      features: ["ERP Integration", "Business Intelligence", "Workflow Automation", "Enterprise Architecture"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'transformation', name: 'Digital Transformation' },
    { id: 'saas', name: 'Micro SAAS' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI, IT, and technology solutions to transform your business
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;