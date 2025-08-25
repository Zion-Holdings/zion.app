import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3 
} from 'lucide-react';

export default function MicroSAASSolutions() {
  const services = [
    {
      title: "Custom SAAS Development",
      description: "Tailored software-as-a-service solutions designed specifically for your business needs and industry requirements.",
      icon: Code,
      price: "$2,500",
      pricingModel: "monthly",
      features: ["Custom workflows", "API integration", "User management", "Scalable architecture"],
      benefits: ["Reduce development time by 40%", "Custom fit for your business", "Scalable from startup to enterprise", "Competitive advantage"],
      marketPrice: "$2,500 - $15,000/month",
      roi: "300-500% within 18 months"
    },
    {
      title: "Multi-tenant Architecture",
      description: "Efficient multi-tenant systems that maximize resource utilization while maintaining data isolation and security.",
      icon: Users,
      price: "$3,200",
      pricingModel: "monthly",
      features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"],
      benefits: ["Reduce infrastructure costs by 50%", "Improved resource utilization", "Enhanced security isolation", "Scalable architecture"],
      marketPrice: "$3,200 - $20,000/month",
      roi: "400-600% within 24 months"
    },
    {
      title: "Subscription Management",
      description: "Comprehensive billing and subscription systems with flexible pricing models and automated renewals.",
      icon: BarChart3,
      price: "$1,800",
      pricingModel: "monthly",
      features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"],
      benefits: ["Increase revenue by 35%", "Reduce billing errors by 90%", "Automated renewals", "Better cash flow"],
      marketPrice: "$1,800 - $8,000/month",
      roi: "250-400% within 12 months"
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs that enable seamless integration with existing systems and third-party applications.",
      icon: Cpu,
      price: "$2,200",
      pricingModel: "monthly",
      features: ["RESTful APIs", "GraphQL support", "Webhook integration", "API documentation"],
      benefits: ["Faster system integration", "Reduced development costs", "Better third-party connectivity", "Enhanced user experience"],
      marketPrice: "$2,200 - $12,000/month",
      roi: "350-500% within 15 months"
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboards providing insights into user behavior, system performance, and business metrics.",
      icon: TrendingUp,
      price: "$1,500",
      pricingModel: "monthly",
      features: ["Real-time metrics", "Custom reports", "Data visualization", "Export capabilities"],
      benefits: ["Improve decision making by 45%", "Identify growth opportunities", "Better user insights", "Data-driven strategies"],
      marketPrice: "$1,500 - $6,000/month",
      roi: "300-450% within 12 months"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline business processes and improve operational efficiency.",
      icon: Zap,
      price: "$2,800",
      pricingModel: "monthly",
      features: ["Process automation", "AI decision making", "Workflow optimization", "Performance monitoring"],
      benefits: ["Reduce operational costs by 40%", "Improve efficiency by 60%", "24/7 automation", "Better resource utilization"],
      marketPrice: "$2,800 - $18,000/month",
      roi: "400-700% within 18 months"
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies",
      icon: Zap
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one",
      icon: TrendingUp
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions",
      icon: BarChart3
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance standards",
      icon: Shield
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems",
      icon: Building
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools",
      icon: Building
    },
    {
      name: "Education",
      description: "Learning management and student tracking",
      icon: Building
    },
    {
      name: "Real Estate",
      description: "Property management and client portals",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Custom software-as-a-service solutions designed for rapid deployment, scalability, and business growth across industries."
        keywords="micro SAAS, custom software, subscription management, multi-tenant, API development, business software"
        canonical="https://ziontechgroup.com/services/micro-saas-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Rapid Deployment, Maximum Impact
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business ideas into powerful, scalable software solutions with our micro SAAS development 
            services designed for rapid deployment and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive SAAS Development Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end micro SAAS development services that 
              accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                
                {/* Pricing */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-blue-dark">
                      {service.price}
                    </div>
                    <div className="text-sm text-zion-slate">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-purple rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate">Market Price:</span>
                    <span className="text-zion-blue-dark font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate">ROI:</span>
                    <span className="text-green-600 font-semibold">{service.roi}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Micro SAAS Solutions - ${service.title}"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of rapid development, scalability, and cost-effective solutions 
              designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored micro SAAS solutions designed for the unique requirements and compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SAAS Solution?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Let us help you transform your business idea into a powerful, scalable software solution 
            that drives growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}