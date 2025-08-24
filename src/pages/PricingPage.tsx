import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Check, 
  Star, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Award,
  Phone,
  Mail,
  Clock,
  MapPin
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PricingPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>("all");

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    if (selectedCategory === "all") return true;
    return SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service.id));
  });

  const getServicePricing = (basePrice: number, tier: string) => {
    switch (tier) {
      case 'basic':
        return basePrice * 0.8;
      case 'professional':
        return basePrice * 1.2;
      case 'enterprise':
        return basePrice * 1.5;
      default:
        return basePrice;
    }
  };

  const getTierFeatures = (tier: string) => {
    const tierData = PRICING_TIERS.find(t => t.id === tier);
    return tierData ? tierData.features : [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('pricing.hero.title') || "Transparent Pricing"}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              {t('pricing.hero.description') || "Choose the perfect plan for your business needs. Our flexible pricing ensures you get the best value for your investment."}
            </p>
            
            {/* Filter Controls */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder={t('pricing.filter.category') || "All Categories"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('pricing.filter.all') || "All Categories"}</SelectItem>
                    {SERVICE_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
                  <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder={t('pricing.filter.tier') || "All Tiers"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('pricing.filter.all_tiers') || "All Tiers"}</SelectItem>
                    {PRICING_TIERS.map((tier) => (
                      <SelectItem key={tier.id} value={tier.id}>
                        {tier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers Overview */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('pricing.tiers.title') || "Choose Your Plan"}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('pricing.tiers.description') || "Flexible pricing tiers designed to scale with your business growth"}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className={`bg-white/10 backdrop-blur-sm border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl ${
                tier.id === 'professional' ? 'ring-2 ring-zion-cyan scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                  {tier.id === 'professional' && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 w-fit mx-auto">
                      Most Popular
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {tier.id === 'basic' ? '0.8x' : tier.id === 'professional' ? '1.2x' : '1.5x'}
                    </div>
                    <div className="text-zion-slate-light">Base Price Multiplier</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <Check className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      tier.id === 'professional' 
                        ? 'bg-zion-cyan hover:bg-zion-cyan/90 text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                    }`}
                  >
                    {t('pricing.cta.get_started') || "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Pricing Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('pricing.services.title') || "Service Pricing"}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('pricing.services.description') || `Explore pricing for our ${filteredServices.length} services across different tiers`}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-zion-cyan/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-zion-blue/20 text-zion-blue-light border-zion-blue/30">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Pricing Tiers */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm">Pricing Tiers:</h4>
                    {PRICING_TIERS.map((tier) => (
                      <div key={tier.id} className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">{tier.name}:</span>
                        <span className="text-white font-medium">
                          {service.currency}{getServicePricing(service.price, tier.id).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-zion-slate-light text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.availability}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {service.location}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10">
                    {t('pricing.cta.view_details') || "View Details"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricing.value.title') || "Why Choose Our Pricing?"}
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              {t('pricing.value.description') || "Our pricing model is designed to provide maximum value while ensuring flexibility for businesses of all sizes."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-zion-slate-light text-sm">No hidden fees or surprise charges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Scaling</h3>
                <p className="text-zion-slate-light text-sm">Grow with your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-zion-slate-light text-sm">Dedicated assistance at every tier</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-zion-slate-light text-sm">Track record of successful outcomes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('pricing.contact.title') || "Need Custom Pricing?"}
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            {t('pricing.contact.description') || "Contact us for custom enterprise solutions and volume discounts tailored to your specific requirements."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white">
              <Phone className="h-5 w-5 mr-2" />
              {t('pricing.contact.call') || "Call for Quote"}
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              {t('pricing.contact.email') || "Request Custom Quote"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}