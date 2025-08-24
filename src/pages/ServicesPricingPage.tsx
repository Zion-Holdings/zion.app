import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Check, Star, Clock, Shield, Zap, TrendingUp, Users, Award } from 'lucide-react';

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '💼';
  };

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "From $99",
      features: [
        "Basic service packages",
        "Email support",
        "Standard delivery time",
        "Basic documentation",
        "Community access"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "From $2,500",
      features: [
        "Advanced service packages",
        "Priority support",
        "Faster delivery time",
        "Comprehensive documentation",
        "Training sessions",
        "Custom integrations"
      ],
      color: "from-purple-500 to-indigo-600",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "From $15,000",
      features: [
        "Full service portfolio",
        "24/7 dedicated support",
        "Custom delivery timeline",
        "Full documentation suite",
        "On-site training",
        "Custom development",
        "Dedicated account manager"
      ],
      color: "from-emerald-500 to-green-600"
    }
  ];

  const marketComparison = [
    {
      service: "AI Chatbot Development",
      ourPrice: "$2,500",
      marketPrice: "$5,000 - $15,000",
      savings: "50-83%",
      advantage: "Custom training, 3 months support included"
    },
    {
      service: "Cloud Migration",
      ourPrice: "$15,000",
      marketPrice: "$25,000 - $50,000",
      savings: "40-70%",
      advantage: "Minimal downtime, post-migration support"
    },
    {
      service: "Cybersecurity Assessment",
      ourPrice: "$3,500",
      marketPrice: "$8,000 - $20,000",
      savings: "56-82%",
      advantage: "Comprehensive audit, remediation roadmap"
    },
    {
      service: "Data Warehouse Solution",
      ourPrice: "$18,000",
      marketPrice: "$40,000 - $100,000",
      savings: "55-82%",
      advantage: "Modern architecture, 6 months support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Services Pricing</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent, competitive pricing for all our micro SAAS, IT, and AI services
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Competitive Market Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>ROI-Focused Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Choose Your Service Tier</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We offer flexible pricing options to meet businesses of all sizes and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg border-2 overflow-hidden ${
                tier.popular ? 'border-zion-purple scale-105' : 'border-zion-slate/10'
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-zion-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                    <p className="text-zion-slate-light mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-zion-purple mb-2">{tier.price}</div>
                    <p className="text-zion-slate-light text-sm">Starting price</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-zion-green flex-shrink-0" />
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-dark hover:to-zion-purple'
                      : 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Comparison */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Market Price Comparison</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              See how our competitive pricing compares to industry standards
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zion-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-center font-semibold">Our Price</th>
                      <th className="px-6 py-4 text-center font-semibold">Market Price</th>
                      <th className="px-6 py-4 text-center font-semibold">Savings</th>
                      <th className="px-6 py-4 text-left font-semibold">Our Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-zion-slate/5'}>
                        <td className="px-6 py-4 font-medium text-zion-blue">{item.service}</td>
                        <td className="px-6 py-4 text-center font-bold text-zion-purple">{item.ourPrice}</td>
                        <td className="px-6 py-4 text-center text-zion-slate-light">{item.marketPrice}</td>
                        <td className="px-6 py-4 text-center font-semibold text-zion-green">{item.savings}</td>
                        <td className="px-6 py-4 text-sm text-zion-slate-light">{item.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Category Pricing */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Service Category Pricing</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Explore pricing for each service category with detailed breakdowns
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-zion-blue text-white'
                  : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-zion-blue text-white'
                    : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg border border-zion-slate/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                      <div>
                        <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    {service.featured && (
                      <span className="text-xs font-medium text-zion-purple bg-zion-purple/10 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-zion-blue mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>

                  {/* Pricing Details */}
                  <div className="bg-zion-slate/5 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-zion-purple mb-2">
                      {getPriceDisplay(service)}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Shield className="w-4 h-4 text-zion-green" />
                        <span>{service.support}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-slate mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-green" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-green rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-zion-slate">{service.rating}</span>
                      <span className="text-xs text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-zion-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through quality, innovation, and customer success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-zion-slate-light text-sm">
                Enterprise-grade solutions with rigorous testing and quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light text-sm">
                Solutions designed to deliver measurable business value and returns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-zion-slate-light text-sm">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-zion-slate-light text-sm">
                Continuous support and maintenance to ensure long-term success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Contact us today for a personalized quote and consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.businessHours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
              <p className="text-zion-slate-light text-sm">24/7 Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.address}</p>
              <p className="text-zion-slate-light text-sm">By appointment</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Pricing Inquiry`}
              className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
            >
              Get Your Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}