import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, Service } from '@/data/enhancedServices';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function EnhancedServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = useMemo(() => {
    return ENHANCED_SERVICES.filter(service => {
      const matchesCategory = selectedCategory === "all" ||
        SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service.id));
      
      const matchesSearch = searchTerm === "" ||
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const featuredServices = useMemo(() => {
    return ENHANCED_SERVICES.filter(service => service.featured);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enhanced Services
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our comprehensive suite of professional technology services designed to accelerate your business growth and drive innovation.
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan appearance-none"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Services
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            All Services
          </motion.h2>
          
          {filteredServices.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg">
                No services found matching your criteria. Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredServices.map((service) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a personalized quote for our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-slate-light transition-colors duration-300">
                Get a Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-purple transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-zion-purple/50">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{service.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{service.location.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{service.provider.name}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Starting from:</h4>
          <div className="text-2xl font-bold text-zion-purple">
            ${service.price.basic}/hr
          </div>
        </div>

        {/* Provider Info */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{service.provider.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({service.reviews} reviews)
              </span>
            </div>
            <button className="bg-zion-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-purple-dark transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
