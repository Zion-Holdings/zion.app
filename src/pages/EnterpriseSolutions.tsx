import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Building, Shield, Users, Zap, TrendingUp, Star, ArrowRight, CheckCircle, Globe, Database, Lock } from 'lucide-react';

export default function EnterpriseSolutions() {
  const enterpriseServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category === 'Enterprise Solutions'
  );

  const enterpriseFeatures = [
    {
      icon: "🏢",
      title: "Scalable Architecture",
      description: "Built to handle enterprise-scale operations and growth",
      details: ["Multi-tenant design", "Horizontal scaling", "Load balancing", "High availability"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with compliance and governance",
      details: ["SOC 2 Type II", "GDPR compliance", "Data encryption", "Access controls"]
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Comprehensive reporting and business intelligence",
      details: ["Real-time dashboards", "Custom reports", "Data visualization", "Predictive analytics"]
    },
    {
      icon: "🌐",
      title: "Global Deployment",
      description: "Multi-region deployment with local compliance",
      details: ["Multi-cloud strategy", "Edge computing", "CDN integration", "Local data centers"]
    }
  ];

  const enterpriseIndustries = [
    {
      name: "Financial Services",
      description: "Banking, insurance, and fintech solutions with regulatory compliance",
      icon: "🏦",
      challenges: ["Regulatory compliance", "Data security", "Risk management", "Scalability"],
      solutions: ["Compliance automation", "Advanced security", "Risk analytics", "Cloud infrastructure"]
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions for hospitals and healthcare providers",
      icon: "🏥",
      challenges: ["Patient data privacy", "Interoperability", "Regulatory compliance", "System integration"],
      solutions: ["HIPAA compliance", "HL7 integration", "Data analytics", "Secure cloud"]
    },
    {
      name: "Manufacturing",
      description: "Industry 4.0 solutions for smart manufacturing and supply chain",
      icon: "🏭",
      challenges: ["Supply chain complexity", "Quality control", "Predictive maintenance", "Global operations"],
      solutions: ["IoT integration", "AI-powered analytics", "Predictive maintenance", "Global ERP"]
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel solutions for modern retail operations",
      icon: "🛍️",
      challenges: ["Multi-channel integration", "Inventory management", "Customer experience", "Global expansion"],
      solutions: ["Unified commerce", "AI analytics", "Personalization", "Global infrastructure"]
    }
  ];

  const implementationPhases = [
    {
      phase: "Discovery & Strategy",
      duration: "2-4 weeks",
      activities: [
        "Business requirements analysis",
        "Technology assessment",
        "Architecture planning",
        "Risk assessment",
        "Stakeholder alignment"
      ],
      deliverables: ["Requirements document", "Architecture blueprint", "Implementation roadmap", "Risk mitigation plan"]
    },
    {
      phase: "Design & Planning",
      duration: "4-6 weeks",
      activities: [
        "Detailed system design",
        "Data architecture",
        "Integration planning",
        "Security design",
        "Performance planning"
      ],
      deliverables: ["System design documents", "Data models", "Integration specs", "Security protocols"]
    },
    {
      phase: "Development & Testing",
      duration: "12-24 weeks",
      activities: [
        "Agile development",
        "Continuous integration",
        "Automated testing",
        "Security testing",
        "Performance testing"
      ],
      deliverables: ["Working software", "Test results", "Documentation", "Training materials"]
    },
    {
      phase: "Deployment & Support",
      duration: "4-8 weeks",
      activities: [
        "Staged deployment",
        "User training",
        "Go-live support",
        "Performance monitoring",
        "Ongoing optimization"
      ],
      deliverables: ["Production system", "User adoption", "Support processes", "Performance metrics"]
    }
  ];

  const successMetrics = [
    {
      metric: "ROI Improvement",
      value: "300%",
      description: "Average return on investment within 18 months"
    },
    {
      metric: "Cost Reduction",
      value: "40%",
      description: "Average operational cost reduction"
    },
    {
      metric: "Efficiency Gain",
      value: "60%",
      description: "Average productivity improvement"
    },
    {
      metric: "Time to Market",
      value: "50%",
      description: "Faster product and service delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🏢</div>
          <h1 className="text-5xl font-bold mb-6">Enterprise Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with scalable, secure, and innovative technology solutions designed for large organizations
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              <span>{enterpriseServices.length} Enterprise Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>Enterprise-Grade Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Enterprise-Grade Features</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Built for scale, security, and performance that enterprise organizations demand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-zion-blue mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-green" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Enterprise Services */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Enterprise Solutions Portfolio</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed for enterprise transformation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg border border-zion-slate/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏢</span>
                      <div>
                        <span className="text-xs font-medium text-zion-slate bg-slate-100 text-slate-800 px-2 py-1 rounded-full">
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
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-zion-slate">{service.rating}</span>
                      <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-slate-700 to-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-slate-800 hover:to-gray-900 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Industry-Specific Solutions</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Tailored solutions for the unique challenges and requirements of different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseIndustries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-zion-blue mb-2">{industry.name}</h3>
                    <p className="text-zion-slate-light text-sm">{industry.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-zion-slate mb-3 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-red-500" />
                      Key Challenges
                    </h4>
                    <div className="space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zion-slate mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-green" />
                      Our Solutions
                    </h4>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-green rounded-full"></div>
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Enterprise Implementation Process</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful enterprise transformation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-zion-blue mb-2">{phase.phase}</h3>
                    <p className="text-zion-slate-light text-sm mb-3">{phase.duration}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-slate mb-2 text-sm">Activities:</h4>
                    <div className="space-y-1">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="text-xs text-zion-slate-light">
                          • {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zion-slate mb-2 text-sm">Deliverables:</h4>
                    <div className="space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="text-xs text-zion-slate-light">
                          • {deliverable}
                        </div>
                      ))}
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">Proven Enterprise Results</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our enterprise solutions deliver measurable business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                <p className="text-zion-slate-light text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Enterprise Transformation?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how our enterprise solutions can transform your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Enterprise Solutions Inquiry`}
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Enterprise Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300"
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
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Enterprise Experts at Your Service</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our team of enterprise specialists is ready to help you navigate digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.businessHours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
              <p className="text-zion-slate-light text-sm">24/7 Enterprise Support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.address}</p>
              <p className="text-zion-slate-light text-sm">Enterprise center available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}