import React from 'react';
import { 
  Zap, 
  Users, 
  FileText, 
  BarChart3, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  CheckCircle, 
  Star,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';

export default function MicroSAASServicesPage() {
  const microSAASServices = [
    {
      name: "Project Management Hub",
      description: "Lightweight, intuitive project management tool designed for small teams and startups. Streamline workflows, track progress, and collaborate effectively.",
      icon: <Users className="w-12 h-12 text-blue-500" />,
      features: [
        "Task management and assignment",
        "Team collaboration tools",
        "Time tracking and reporting",
        "Project templates and workflows",
        "File sharing and storage",
        "Mobile app access",
        "Integration with popular tools",
        "Custom branding options"
      ],
      pricing: {
        starter: "$29/month",
        professional: "$59/month",
        enterprise: "$99/month"
      },
      marketPrice: "$50-100/month",
      useCases: ["Small teams", "Startups", "Freelancers", "Agencies", "Remote teams"],
      benefits: [
        "50% cost savings vs competitors",
        "Easy onboarding and adoption",
        "Scalable as you grow",
        "No long-term contracts",
        "24/7 customer support"
      ],
      website: "https://ziontechgroup.com/project-management",
      freeTrial: "14 days",
      setupTime: "Under 1 hour"
    },
    {
      name: "Invoice & Billing System",
      description: "Automated invoicing and payment processing platform with recurring billing, financial analytics, and tax calculations.",
      icon: <CreditCard className="w-12 h-12 text-green-500" />,
      features: [
        "Automated invoice generation",
        "Payment processing integration",
        "Recurring billing setup",
        "Financial reporting dashboard",
        "Tax calculations and compliance",
        "Client portal access",
        "Multi-currency support",
        "Expense tracking"
      ],
      pricing: {
        starter: "$39/month",
        professional: "$79/month",
        enterprise: "$149/month"
      },
      marketPrice: "$60-120/month",
      useCases: ["Freelancers", "Small businesses", "Consultants", "Service providers", "E-commerce"],
      benefits: [
        "Faster payment collection",
        "Reduced administrative overhead",
        "Better cash flow management",
        "Professional client experience",
        "Compliance automation"
      ],
      website: "https://ziontechgroup.com/invoice-billing",
      freeTrial: "30 days",
      setupTime: "Under 2 hours"
    },
    {
      name: "Social Media Scheduler",
      description: "AI-powered social media management platform with content optimization, multi-platform posting, and performance analytics.",
      icon: <MessageSquare className="w-12 h-12 text-purple-500" />,
      features: [
        "Multi-platform posting (Instagram, Twitter, LinkedIn, Facebook)",
        "AI content optimization",
        "Content calendar management",
        "Performance analytics dashboard",
        "Team collaboration tools",
        "Hashtag suggestions",
        "Best time to post analysis",
        "Competitor monitoring"
      ],
      pricing: {
        starter: "$49/month",
        professional: "$99/month",
        enterprise: "$199/month"
      },
      marketPrice: "$80-150/month",
      useCases: ["Marketing teams", "Influencers", "Small businesses", "Agencies", "Content creators"],
      benefits: [
        "Save 10+ hours per week",
        "Improve engagement rates",
        "Consistent posting schedule",
        "Data-driven content strategy",
        "Multi-account management"
      ],
      website: "https://ziontechgroup.com/social-media-scheduler",
      freeTrial: "7 days",
      setupTime: "Under 30 minutes"
    },
    {
      name: "Customer Relationship Manager",
      description: "Simple yet powerful CRM designed for growing businesses. Manage leads, track sales, and nurture customer relationships.",
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      features: [
        "Lead management and scoring",
        "Sales pipeline tracking",
        "Contact and company profiles",
        "Email integration and tracking",
        "Task and follow-up reminders",
        "Sales reporting and analytics",
        "Mobile app access",
        "Custom fields and workflows"
      ],
      pricing: {
        starter: "$59/month",
        professional: "$119/month",
        enterprise: "$199/month"
      },
      marketPrice: "$100-200/month",
      useCases: ["Sales teams", "Small businesses", "Startups", "Consultants", "Real estate"],
      benefits: [
        "Increase sales by 25%",
        "Better lead conversion",
        "Improved customer retention",
        "Streamlined sales process",
        "Data-driven insights"
      ],
      website: "https://ziontechgroup.com/crm",
      freeTrial: "21 days",
      setupTime: "Under 2 hours"
    },
    {
      name: "Email Marketing Platform",
      description: "Professional email marketing solution with automation, segmentation, and advanced analytics for better campaign performance.",
      icon: <Mail className="w-12 h-12 text-indigo-500" />,
      features: [
        "Drag-and-drop email builder",
        "Email automation workflows",
        "Advanced segmentation",
        "A/B testing capabilities",
        "Performance analytics",
        "Template library",
        "Integration with popular tools",
        "Compliance and deliverability"
      ],
      pricing: {
        starter: "$69/month",
        professional: "$139/month",
        enterprise: "$249/month"
      },
      marketPrice: "$120-250/month",
      useCases: ["E-commerce", "Marketing teams", "Small businesses", "Newsletters", "Online courses"],
      benefits: [
        "Higher open and click rates",
        "Automated customer journeys",
        "Better ROI on campaigns",
        "Professional email templates",
        "Compliance automation"
      ],
      website: "https://ziontechgroup.com/email-marketing",
      freeTrial: "14 days",
      setupTime: "Under 1 hour"
    },
    {
      name: "Analytics Dashboard",
      description: "Comprehensive business analytics platform with real-time insights, custom reports, and data visualization tools.",
      icon: <TrendingUp className="w-12 h-12 text-pink-500" />,
      features: [
        "Real-time data visualization",
        "Custom dashboard builder",
        "Automated reporting",
        "Data integration capabilities",
        "Performance tracking",
        "Goal setting and monitoring",
        "Export and sharing options",
        "Mobile-responsive design"
      ],
      pricing: {
        starter: "$79/month",
        professional: "$159/month",
        enterprise: "$299/month"
      },
      marketPrice: "$150-300/month",
      useCases: ["Business owners", "Marketing teams", "Analysts", "Startups", "E-commerce"],
      benefits: [
        "Data-driven decision making",
        "Time savings on reporting",
        "Better business insights",
        "Improved performance tracking",
        "Professional presentations"
      ],
      website: "https://ziontechgroup.com/analytics-dashboard",
      freeTrial: "30 days",
      setupTime: "Under 3 hours"
    }
  ];

  const additionalMicroSAAS = [
    {
      name: "Time Tracking Tool",
      description: "Simple time tracking for teams and freelancers with project billing and productivity insights.",
      pricing: "$19/month",
      icon: <Calendar className="w-8 h-8 text-blue-400" />
    },
    {
      name: "Knowledge Base Platform",
      description: "Create and manage documentation, FAQs, and help articles for your customers and team.",
      pricing: "$39/month",
      icon: <FileText className="w-8 h-8 text-green-400" />
    },
    {
      name: "Survey & Feedback Tool",
      description: "Collect customer feedback, conduct surveys, and gather insights to improve your products and services.",
      pricing: "$29/month",
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />
    },
    {
      name: "Appointment Scheduler",
      description: "Automated appointment booking system with calendar integration and reminder notifications.",
      pricing: "$25/month",
      icon: <Calendar className="w-8 h-8 text-orange-400" />
    }
  ];

  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Cost Savings", value: "40-60%" },
    { label: "Setup Time", value: "< 2 hours" },
    { label: "Customer Satisfaction", value: "96%" }
  ];

  const whyChooseUs = [
    {
      title: "Affordable Pricing",
      description: "Up to 60% savings compared to enterprise solutions without compromising on features.",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: "Quick Setup",
      description: "Get up and running in under 2 hours with our intuitive setup wizards and templates.",
      icon: <Zap className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Scalable Solutions",
      description: "Start small and scale up as your business grows. No long-term contracts or hidden fees.",
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed with our platforms.",
      icon: <Users className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Zap className="w-20 h-20 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Affordable, scalable software solutions that grow with your business. Professional-grade tools at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Micro%20SAAS%20Inquiry"
                className="inline-flex items-center px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Get Started Today</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade software solutions designed specifically for growing businesses and startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Micro SAAS Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Micro SAAS Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable software solutions that deliver enterprise-level functionality without the enterprise price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {microSAASServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Pricing Plans:</h4>
                      <div className="space-y-1">
                        {Object.entries(service.pricing).map(([plan, price]) => (
                          <div key={plan} className="flex justify-between text-sm">
                            <span className="text-gray-400 capitalize">{plan}:</span>
                            <span className="text-green-400 font-semibold">{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Market price: <span className="line-through">{service.marketPrice}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Quick Info:</h4>
                      <div className="space-y-1 text-xs text-gray-300">
                        <div>Free Trial: {service.freeTrial}</div>
                        <div>Setup Time: {service.setupTime}</div>
                      </div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2 mt-3">Best For:</h4>
                      <ul className="space-y-1">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="text-xs text-gray-300">• {useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex gap-3">
                      <a 
                        href={service.website}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>Get Started</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Micro SAAS Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Micro SAAS Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Additional specialized tools to complement your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalMicroSAAS.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
                <div className="text-yellow-400 font-semibold">{service.pricing}</div>
                <a 
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className="inline-block w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Comparison */}
      <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Affordable Pricing for Every Business
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$29<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 5 users</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Core features</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Email support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/50 transform scale-105">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$79<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 25 users</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Advanced features</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$199<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>All features</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>24/7 support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our affordable micro SAAS solutions and scale up as your business grows. No long-term contracts, no hidden fees.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown, DE 19709</p>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Micro%20SAAS%20Consultation%20-%20Zion%20Tech%20Group"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Affordable micro SAAS solutions that scale with your business growth.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Micro SAAS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/project-management" className="hover:text-yellow-400 transition-colors">Project Management</a></li>
                <li><a href="/invoice-billing" className="hover:text-yellow-400 transition-colors">Invoice & Billing</a></li>
                <li><a href="/social-media-scheduler" className="hover:text-yellow-400 transition-colors">Social Media</a></li>
                <li><a href="/crm" className="hover:text-yellow-400 transition-colors">CRM</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="/blog" className="hover:text-yellow-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-yellow-400 transition-colors ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-yellow-400 transition-colors ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}