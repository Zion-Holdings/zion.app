import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Building, 
  Brain, 
  Rocket,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: Building, count: ENHANCED_MICRO_SAAS_SERVICES.length },
    { id: 'AI & Business Intelligence', name: 'AI & BI', icon: Brain, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('AI')).length },
    { id: 'AI & Customer Service', name: 'Customer Service', icon: Users, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Customer Service')).length },
    { id: 'AI & Marketing', name: 'Marketing', icon: TrendingUp, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Marketing')).length },
    { id: 'AI & Human Resources', name: 'HR & Recruitment', icon: Users, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Human Resources')).length },
    { id: 'AI & Legal Tech', name: 'Legal Tech', icon: Shield, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Legal Tech')).length },
    { id: 'AI & Financial Services', name: 'Financial Services', icon: DollarSign, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Financial Services')).length },
    { id: 'AI & Healthcare', name: 'Healthcare', icon: Building, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Healthcare')).length },
    { id: 'AI & Supply Chain', name: 'Supply Chain', icon: TrendingUp, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'AI & Real Estate', name: 'Real Estate', icon: Building, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Real Estate')).length },
    { id: 'AI & Education', name: 'Education', icon: Users, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Education')).length },
    { id: 'AI & Energy', name: 'Energy', icon: Zap, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Energy')).length },
    { id: 'AI & Manufacturing', name: 'Manufacturing', icon: Rocket, count: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category.includes('Manufacturing')).length }
  ];

  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : Building;
  };

  const calculatePrice = (basePrice: number) => {
    if (billingCycle === 'yearly') {
      return Math.round(basePrice * 10); // 2 months free with yearly billing
    }
    return basePrice;
  };

  const getBillingText = () => {
    return billingCycle === 'yearly' ? 'per month (billed yearly)' : 'per month';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Pricing - Zion Tech Group Micro SAAS Services" 
        description="Transparent pricing for our comprehensive portfolio of AI-powered micro SAAS solutions. Choose the perfect plan for your business needs with flexible monthly and yearly billing options."
        keywords="pricing, micro SAAS pricing, AI services pricing, business intelligence pricing, customer service automation pricing, marketing automation pricing, HR solutions pricing, legal tech pricing"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4 mr-2" />
            Transparent Pricing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Simple,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Transparent Pricing
            </span>
            <span className="block text-3xl md:text-4xl text-zion-slate-light mt-4">
              for Revolutionary Technology Solutions
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from our comprehensive portfolio of AI-powered micro SAAS solutions. 
            All plans include enterprise-grade features, 24/7 support, and rapid deployment.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 bg-white/20 rounded-full p-1 transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : ''
              }`}
            >
              <div className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
              }`}></div>
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              <span className="ml-2 px-2 py-1 bg-zion-cyan text-white text-xs rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-zion-slate-light">Filter services by industry or technology focus</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan border-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'border-white/20 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Solution
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              {filteredServices.length} services available. Each solution is designed to deliver measurable business value 
              with rapid deployment and scalable architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const displayPrice = calculatePrice(service.price);
              
              return (
                <div 
                  key={service.id} 
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        ${displayPrice}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        {getBillingText()}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-4">
                    <CategoryIcon className="w-3 h-3 mr-2" />
                    {service.category}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <Check className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-slate-light text-center">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <TrendingUp className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Price Comparison */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-zion-slate-light mb-1">Market Price Range:</div>
                    <div className="text-sm font-semibold text-zion-cyan">{service.marketPrice}</div>
                  </div>

                  {/* ROI */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg border border-zion-cyan/30">
                    <div className="text-xs text-zion-slate-light mb-1">Expected ROI:</div>
                    <div className="text-sm font-semibold text-zion-cyan">{service.roi}</div>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-6">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="w-full border border-white/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try selecting a different category
              </p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              For large organizations with complex requirements, we offer custom enterprise solutions 
              with dedicated support, custom integrations, and enterprise-grade security.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">SOC 2, ISO 27001, HIPAA compliance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
                <p className="text-zion-slate-light">24/7 dedicated account management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
                <p className="text-zion-slate-light">Tailored solutions for your needs</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                Contact Sales Team
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and get you up and running quickly. 
              Get in touch today to start your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 (302) 464-0950</p>
                <p className="text-sm text-zion-slate-light">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                <p className="text-sm text-zion-slate-light">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008</p>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}