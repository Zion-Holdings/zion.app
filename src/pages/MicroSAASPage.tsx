import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Code, Zap, TrendingUp, Users, Clock, Shield, Star, ArrowRight, CheckCircle, Globe, Database } from 'lucide-react';

export default function MicroSAASPage() {
  const microSaasServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category === 'Micro SAAS'
  );

  const saasBenefits = [
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Pay-as-you-go pricing with no upfront infrastructure costs",
      details: ["No hardware investment", "Scalable pricing", "Predictable monthly costs"]
    },
    {
      icon: "⚡",
      title: "Rapid Deployment",
      description: "Get your solution up and running in weeks, not months",
      details: ["Quick setup", "Instant updates", "No installation required"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with regular updates and compliance",
      details: ["SOC 2 compliance", "Data encryption", "Regular security audits"]
    },
    {
      icon: "📱",
      title: "Always Accessible",
      description: "Access your software from anywhere, anytime, on any device",
      details: ["Cloud-based", "Mobile responsive", "24/7 availability"]
    }
  ];

  const saasFeatures = [
    {
      name: "Multi-tenancy",
      description: "Secure isolation between different customer environments",
      icon: "🏢"
    },
    {
      name: "API Integration",
      description: "Seamless integration with your existing tools and workflows",
      icon: "🔗"
    },
    {
      name: "Analytics Dashboard",
      description: "Comprehensive insights into usage, performance, and user behavior",
      icon: "📊"
    },
    {
      name: "Custom Branding",
      description: "White-label solutions that match your brand identity",
      icon: "🎨"
    },
    {
      name: "Automated Backups",
      description: "Regular data backups with point-in-time recovery options",
      icon: "💾"
    },
    {
      name: "24/7 Support",
      description: "Round-the-clock technical support and customer service",
      icon: "🆘"
    }
  ];

  const pricingModels = [
    {
      name: "Per User",
      description: "Pay for each active user accessing the system",
      bestFor: "Growing teams and organizations",
      examples: ["CRM systems", "Project management", "Collaboration tools"],
      icon: "👥"
    },
    {
      name: "Per Month",
      description: "Fixed monthly subscription regardless of usage",
      bestFor: "Small businesses and startups",
      examples: ["Basic tools", "Essential services", "Simple applications"],
      icon: "📅"
    },
    {
      name: "Usage Based",
      description: "Pay only for what you actually use",
      bestFor: "Variable usage patterns",
      examples: ["Data processing", "API calls", "Storage services"],
      icon: "📈"
    },
    {
      name: "Tiered Pricing",
      description: "Different feature sets at different price points",
      bestFor: "Businesses of all sizes",
      examples: ["Enterprise software", "Professional tools", "Scalable solutions"],
      icon: "🏗️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💻</div>
          <h1 className="text-5xl font-bold mb-6">Micro SAAS Solutions</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Scalable, cloud-based software solutions designed to grow with your business
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>{microSaasServices.length} SAAS Solutions Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.8+ Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Cloud-Native Architecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* SAAS Benefits */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Micro SAAS?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover the advantages of cloud-based software solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saasBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zion-blue mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured SAAS Services */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Featured SAAS Solutions</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Explore our most popular and innovative software-as-a-service solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg border border-zion-slate/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💻</span>
                      <div>
                        <span className="text-xs font-medium text-zion-slate bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                          {service.subcategory}
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

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-slate mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
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

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light ml-1">
                        /{service.priceType}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-zion-slate">{service.rating}</span>
                      <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAAS Features */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Enterprise-Grade Features</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Every SAAS solution comes with professional features designed for business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-zion-blue mb-2">{feature.name}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Models */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Flexible Pricing Models</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the pricing structure that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{model.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-zion-blue">{model.name}</h3>
                    <p className="text-zion-slate-light text-sm">{model.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-zion-slate mb-2">Best for:</p>
                  <p className="text-zion-slate-light text-sm">{model.bestFor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zion-slate mb-2">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {model.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Implementation Process</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Get your SAAS solution up and running quickly with our streamlined process
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understand your requirements and business goals",
                  icon: "🔍",
                  details: ["Requirements gathering", "Business analysis", "Solution design"]
                },
                {
                  step: "02",
                  title: "Setup",
                  description: "Configure and customize your SAAS solution",
                  icon: "⚙️",
                  details: ["Environment setup", "Customization", "Integration"]
                },
                {
                  step: "03",
                  title: "Training",
                  description: "Train your team on the new system",
                  icon: "🎓",
                  details: ["User training", "Admin training", "Documentation"]
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Go live with ongoing support",
                  icon: "🚀",
                  details: ["Go-live support", "Monitoring", "Optimization"]
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {phase.step}
                  </div>
                  <div className="text-3xl mb-3">{phase.icon}</div>
                  <h3 className="text-lg font-semibold text-zion-blue mb-2">{phase.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-3">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-xs text-zion-slate-light">
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-zion-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our SAAS solutions deliver measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <p className="text-zion-slate-light">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">60%</div>
              <p className="text-zion-slate-light">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">3x</div>
              <p className="text-zion-slate-light">Productivity Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <p className="text-zion-slate-light">System Availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            Start your SAAS journey today with a free consultation and demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=SAAS Solutions Inquiry`}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Call {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">SAAS Experts at Your Service</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our team of cloud experts is ready to help you choose and implement the perfect SAAS solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.businessHours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
              <p className="text-zion-slate-light text-sm">24/7 SAAS Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.address}</p>
              <p className="text-zion-slate-light text-sm">Demo center available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}