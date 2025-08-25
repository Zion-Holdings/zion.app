import React from 'react';
import { SEO } from '../../components/SEO';
import { INNOVATIVE_SERVICES, getInnovativeServiceByCategory } from '../../data/enhancedInnovativeServices';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  TrendingUp, 
  Database, 
  Code, 
  Globe, 
  Lock, 
  BarChart3,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  CheckCircle,
  Users,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

export default function InnovativeServices() {
  const categories = [
    { name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { name: 'Cloud Services', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Emerging Tech', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Business Intelligence', icon: TrendingUp, color: 'from-green-500 to-teal-500' },
    { name: 'DevOps', icon: Code, color: 'from-indigo-500 to-purple-500' },
    { name: 'Data Services', icon: Database, color: 'from-gray-500 to-blue-500' }
  ];

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : Globe;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'from-gray-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services - Zion Tech Group" 
        description="Discover cutting-edge AI services, cybersecurity solutions, cloud platforms, and emerging technology services designed to transform your business."
        keywords="AI services, cybersecurity, cloud services, emerging technology, business intelligence, DevOps, data services"
        url="https://ziontechgroup.com/services/innovative-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Cutting-Edge Solutions for the Future
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Experience the next generation of technology services with our AI-powered solutions, 
            advanced cybersecurity platforms, and emerging technology innovations designed to 
            give your business a competitive edge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Explore our comprehensive range of innovative services across multiple technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-zion-slate">
                  {getInnovativeServiceByCategory(category.name).length} services available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover our most advanced and highly-rated services designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {INNOVATIVE_SERVICES.map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 border border-zion-blue-light hover:shadow-xl transition-shadow">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zion-blue-dark mb-1">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zion-slate">{service.category}</span>
                        <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                          {service.subcategory}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-zion-slate">{service.rating} ({service.reviewCount} reviews)</p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-zion-slate mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="bg-zion-blue-light/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zion-slate mb-1">Starting from</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-zion-blue-dark">
                          ${service.price.monthly || service.price.oneTime}
                        </span>
                        <span className="text-zion-slate">
                          /{service.price.monthly ? 'month' : 'one-time'}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zion-slate mb-1">Market Price</p>
                      <p className="text-sm font-medium text-zion-blue-dark">{service.marketPrice}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-blue-dark mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-blue-dark mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-zion-cyan" />
                    Competitive Advantage
                  </h4>
                  <p className="text-sm text-zion-slate">{service.competitiveAdvantage}</p>
                </div>

                {/* Target Audience & Use Cases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      Target Audience
                    </h4>
                    <div className="space-y-1">
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (
                        <p key={idx} className="text-xs text-zion-slate">• {audience}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      Use Cases
                    </h4>
                    <div className="space-y-1">
                      {service.useCases.slice(0, 3).map((useCase, idx) => (
                        <p key={idx} className="text-xs text-zion-slate">• {useCase}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Score */}
                {service.aiScore && (
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg p-3 mb-6 text-center">
                    <p className="text-white text-sm mb-1">AI Innovation Score</p>
                    <div className="text-2xl font-bold text-white">{service.aiScore}/100</div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={service.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Contact our team to learn more about our innovative services and how they can transform your business
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Phone</h3>
                <p className="text-zion-slate mb-2">{INNOVATIVE_SERVICES[0].contactInfo.phone}</p>
                <p className="text-sm text-zion-slate">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Email</h3>
                <p className="text-zion-slate mb-2">{INNOVATIVE_SERVICES[0].contactInfo.email}</p>
                <p className="text-sm text-zion-slate">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Address</h3>
                <p className="text-zion-slate mb-2">{INNOVATIVE_SERVICES[0].contactInfo.address}</p>
                <p className="text-sm text-zion-slate">Global service coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that have already transformed their operations with our innovative services. 
            Get started with a free consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}