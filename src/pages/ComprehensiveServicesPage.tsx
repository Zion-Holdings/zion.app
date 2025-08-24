import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from "@/components/SEO";
import { EnhancedServicesShowcase } from "@/components/services/EnhancedServicesShowcase";
import { TrustedBySection } from "@/components/TrustedBySection";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Briefcase,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, MARKET_INSIGHTS } from '@/data/comprehensiveServices';

const ServiceCategoryCard: React.FC<{ category: typeof SERVICE_CATEGORIES[0] }> = ({ category }) => {
  const servicesInCategory = COMPREHENSIVE_SERVICES.filter(service => service.category === category.name);
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-zion-blue-dark/80 backdrop-blur-xl border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{category.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
      <p className="text-zion-slate-light mb-4">{category.description}</p>
      
      <div className="space-y-2 mb-4">
        {category.subcategories.slice(0, 3).map((subcategory, idx) => (
          <div key={idx} className="flex items-center text-sm text-zion-cyan">
            <CheckCircle className="w-4 h-4 mr-2" />
            {subcategory}
          </div>
        ))}
        {category.subcategories.length > 3 && (
          <div className="text-xs text-zion-slate-light">
            +{category.subcategories.length - 3} more services
          </div>
        )}
      </div>
      
      <div className="text-sm text-zion-slate-light mb-4">
        {servicesInCategory.length} services available
      </div>
      
      <button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-purple/25 transition-all duration-300">
        Explore {category.name}
      </button>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Choose the service level that best fits your business needs and budget. 
            All our services come with clear pricing and no hidden fees.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(PRICING_TIERS).map(([key, tier], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-zion-blue-dark/80 border border-zion-purple/30 rounded-2xl p-8 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-zion-slate-light mb-6">{tier.description}</p>
              <div className="text-3xl font-bold text-zion-cyan mb-6">{tier.priceRange}</div>
              
              <ul className="text-zion-slate-light space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-purple/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketInsightsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Market Insights & Trends
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Stay ahead with the latest industry trends and market intelligence. 
            Our data-driven insights help you make informed decisions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-zion-blue-dark/80 backdrop-blur-xl border border-zion-purple/30 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{MARKET_INSIGHTS.industryGrowth}</div>
            <div className="text-zion-slate-light">Industry Growth</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center bg-zion-blue-dark/80 backdrop-blur-xl border border-zion-purple/30 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{MARKET_INSIGHTS.clientSatisfaction}</div>
            <div className="text-zion-slate-light">Client Satisfaction</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-zion-blue-dark/80 backdrop-blur-xl border border-zion-purple/30 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{MARKET_INSIGHTS.averageProjectTimeline}</div>
            <div className="text-zion-slate-light">Avg. Project Time</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center bg-zion-blue-dark/80 backdrop-blur-xl border border-zion-purple/30 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">Projects Completed</div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Trending Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {MARKET_INSIGHTS.trendingServices.map((service, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm border border-zion-cyan/30 hover:bg-zion-cyan/30 transition-all duration-300"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Connect with our verified service providers and get started on your next project today. 
            From AI development to cybersecurity, we have the expertise you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-zion-purple/25 transition-all duration-300 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-bold text-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300">
              View All Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function ComprehensiveServicesPage() {
  return (
    <>
      <SEO 
        title="Comprehensive Tech Services - Zion Tech Group" 
        description="Explore our comprehensive range of AI, cloud, cybersecurity, and development services. Find verified experts and transform your business with cutting-edge technology solutions."
        keywords="AI services, cloud migration, cybersecurity, development, blockchain, web3, IT consulting, digital transformation"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Tech Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover cutting-edge AI, cloud, cybersecurity, and development services from verified experts. 
              Transform your business with innovative technology solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Star className="w-5 h-5 fill-current" />
                <span>500+ Services Available</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="w-5 h-5" />
                <span>200+ Expert Providers</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Zap className="w-5 h-5" />
                <span>&lt;2hr Response Time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services across all major domains
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <ServiceCategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Pricing Section */}
      <PricingSection />

      {/* Market Insights */}
      <MarketInsightsSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}