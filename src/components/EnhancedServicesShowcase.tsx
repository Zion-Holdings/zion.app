import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Search, Star, TrendingUp, Zap, Shield, Cloud, Brain, Link } from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES, EnhancedMicroSaasService } from '../data/enhancedMicroSaasServices';
import FuturisticNeonButton from './ui/FuturisticNeonButton';
import FuturisticMatrixBackground from './ui/FuturisticMatrixBackground';

const EnhancedServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<EnhancedMicroSaasService | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-purple to-zion-pink' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-red to-zion-orange' },
    { id: 'Cloud Infrastructure', name: 'Cloud Infrastructure', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Link, color: 'from-zion-green to-zion-emerald' }
  ];

  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isFeatured);
  const newServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isNew);
  const popularServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isPopular);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <FuturisticMatrixBackground intensity="medium" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🚀 Revolutionary Micro SAAS Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
              With Innovation
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover cutting-edge micro SAAS solutions powered by AI, quantum security, and blockchain technology. 
            Each service is designed to deliver immediate value and long-term transformation.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate-dark/50 border-zion-cyan/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-zion-slate-dark/30 border border-zion-slate-light/20">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zion-cyan data-[state=active]:to-zion-blue data-[state=active]:text-white data-[state=active]:border-zion-cyan"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">
              All Services
            </span>
          </h2>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zion-slate-light text-xl">No services found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceDetailModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  service: EnhancedMicroSaasService;
  index: number;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Analytics': 'from-zion-purple to-zion-pink',
      'Cybersecurity': 'from-zion-red to-zion-orange',
      'Cloud Infrastructure': 'from-zion-blue to-zion-cyan',
      'Blockchain & Supply Chain': 'from-zion-green to-zion-emerald',
      'AI & Content': 'from-zion-purple to-zion-pink'
    };
    return colors[category as keyof typeof colors] || 'from-zion-cyan to-zion-blue';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="bg-zion-slate-dark/50 border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group"
        onClick={onClick}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <Badge className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white border-0`}>
              {service.category}
            </Badge>
            <div className="flex gap-1">
              {service.isNew && (
                <Badge className="bg-zion-green text-white border-0 text-xs">NEW</Badge>
              )}
              {service.isPopular && (
                <Badge className="bg-zion-orange text-white border-0 text-xs">POPULAR</Badge>
              )}
            </div>
          </div>
          
          <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors duration-300">
            {service.name}
          </CardTitle>
          
          <CardDescription className="text-zion-slate-light leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-zion-cyan">
                ${service.price.monthly}
              </span>
              <span className="text-zion-slate-light">/month</span>
            </div>
            <p className="text-sm text-zion-slate-light">
              ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly)})
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-zion-slate-light/20 text-zion-slate-light border-zion-slate-light/30">
                  {feature}
                </Badge>
              ))}
              {service.features.length > 3 && (
                <Badge variant="secondary" className="text-xs bg-zion-slate-light/20 text-zion-slate-light border-zion-slate-light/30">
                  +{service.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* ROI */}
          <div className="mb-4 p-3 bg-zion-green/10 border border-zion-green/20 rounded-lg">
            <div className="flex items-center gap-2 text-zion-green">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">ROI: {service.roi}</span>
            </div>
          </div>

          {/* Action Button */}
          <FuturisticNeonButton
            variant="primary"
            size="md"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Learn More
          </FuturisticNeonButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ServiceDetailModalProps {
  service: EnhancedMicroSaasService;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-zion-slate-dark border border-zion-slate-light/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white border-0">
                {service.category}
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
              <p className="text-zion-slate-light text-lg">{service.description}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-zion-slate-light hover:text-white"
            >
              ✕
            </Button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card className="bg-zion-slate-dark/50 border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white">Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Monthly</span>
                      <span className="text-2xl font-bold text-zion-cyan">${service.price.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Yearly</span>
                      <span className="text-2xl font-bold text-zion-cyan">${service.price.yearly}</span>
                    </div>
                    <div className="text-sm text-zion-green">
                      Save ${(service.price.monthly * 12 - service.price.yearly)} annually
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-zion-slate-dark/50 border-zion-purple/30">
                <CardHeader>
                  <CardTitle className="text-white">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-purple rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-zion-slate-dark/50 border-zion-green/30">
                <CardHeader>
                  <CardTitle className="text-white">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-green rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* ROI & Implementation */}
              <Card className="bg-zion-slate-dark/50 border-zion-orange/30">
                <CardHeader>
                  <CardTitle className="text-white">ROI & Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-zion-orange font-semibold mb-2">Return on Investment</h4>
                      <p className="text-zion-slate-light">{service.roi}</p>
                    </div>
                    <div>
                      <h4 className="text-zion-orange font-semibold mb-2">Implementation Time</h4>
                      <p className="text-zion-slate-light">{service.implementationTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card className="bg-zion-slate-dark/50 border-zion-blue/30">
                <CardHeader>
                  <CardTitle className="text-white">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zion-blue/20 text-zion-blue border-zion-blue/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Integrations */}
              <Card className="bg-zion-slate-dark/50 border-zion-pink/30">
                <CardHeader>
                  <CardTitle className="text-white">Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.map((integration, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zion-pink/20 text-zion-pink border-zion-pink/30">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-zion-slate-light/20">
            <FuturisticNeonButton
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={() => window.open(service.demoUrl, '_blank')}
            >
              View Demo
            </FuturisticNeonButton>
            <FuturisticNeonButton
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={() => window.open(service.documentationUrl, '_blank')}
            >
              Documentation
            </FuturisticNeonButton>
            <FuturisticNeonButton
              variant="success"
              size="lg"
              className="flex-1"
              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`)}
            >
              Contact Sales
            </FuturisticNeonButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedServicesShowcase;