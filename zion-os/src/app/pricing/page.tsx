"use client";

import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

interface ServicePricing {
  serviceName: string;
  category: string;
  description: string;
  tiers: PricingTier[];
  features: string[];
  benefits: string[];
}

const servicePricing: ServicePricing[] = [
  {
    serviceName: "Zion OS Platform",
    category: "Core Platform",
    description: "Unified deployment protocol for sovereign AI-powered digital economies",
    features: ["Instance deployment", "Feature toggles", "Multi-vertical support", "Governance systems", "API management", "Multi-region support"],
    benefits: ["Reduce deployment time from months to minutes", "Built-in compliance and governance", "Scalable architecture"],
    tiers: [
      {
        name: "Starter",
        price: "$99",
        period: "/month",
        description: "Perfect for small businesses and startups",
        features: ["Up to 3 instances", "Basic feature set", "Community support", "Standard deployment", "Basic analytics"],
        cta: "Start Free Trial",
        ctaLink: "/multiverse/launch"
      },
      {
        name: "Professional",
        price: "$299",
        period: "/month",
        description: "Ideal for growing businesses and teams",
        features: ["Up to 10 instances", "Advanced features", "Priority support", "Custom domains", "Advanced analytics", "API access"],
        popular: true,
        cta: "Get Started",
        ctaLink: "/multiverse/launch"
      },
      {
        name: "Enterprise",
        price: "$999",
        period: "/month",
        description: "For large organizations with complex needs",
        features: ["Unlimited instances", "All features", "24/7 support", "Custom integrations", "White-label options", "Dedicated account manager"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "AI Content Hub",
    category: "AI Services",
    description: "Comprehensive content creation and management platform powered by advanced AI",
    features: ["AI content generation", "SEO optimization", "Multi-platform publishing", "Content calendar", "Performance analytics", "Team collaboration"],
    benefits: ["Generate 10x more content", "Improve SEO rankings", "Save 20+ hours per week"],
    tiers: [
      {
        name: "Starter",
        price: "$39",
        period: "/month",
        description: "For individual creators and small teams",
        features: ["Up to 50 AI-generated articles/month", "Basic SEO tools", "Social media scheduling", "Basic analytics"],
        cta: "Start Free Trial",
        ctaLink: "/services/ai-content-hub"
      },
      {
        name: "Professional",
        price: "$99",
        period: "/month",
        description: "For growing content teams and businesses",
        features: ["Up to 200 AI-generated articles/month", "Advanced SEO optimization", "Multi-platform publishing", "Content calendar", "Team collaboration", "Advanced analytics"],
        popular: true,
        cta: "Get Started",
        ctaLink: "/services/ai-content-hub"
      },
      {
        name: "Enterprise",
        price: "$299",
        period: "/month",
        description: "For large organizations and agencies",
        features: ["Unlimited AI-generated content", "Custom AI models", "White-label options", "API access", "Dedicated support", "Custom integrations"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "AI Customer Support Suite",
    category: "AI Services",
    description: "Intelligent customer support automation with chatbots and smart routing",
    features: ["AI chatbots", "Smart ticket routing", "Sentiment analysis", "Knowledge base", "24/7 availability", "Multi-language support"],
    benefits: ["Reduce support costs by 50%", "Improve response time by 80%", "Increase customer satisfaction"],
    tiers: [
      {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "For small businesses starting with AI support",
        features: ["Basic chatbot", "Up to 100 conversations/month", "Email support", "Basic knowledge base"],
        cta: "Start Free Trial",
        ctaLink: "/services/ai-customer-support"
      },
      {
        name: "Professional",
        price: "$79",
        period: "/month",
        description: "For businesses with growing support needs",
        features: ["Advanced AI chatbot", "Up to 1000 conversations/month", "Smart ticket routing", "Sentiment analysis", "Multi-channel support", "Advanced analytics"],
        popular: true,
        cta: "Get Started",
        ctaLink: "/services/ai-customer-support"
      },
      {
        name: "Enterprise",
        price: "$199",
        period: "/month",
        description: "For large organizations with complex support requirements",
        features: ["Custom AI models", "Unlimited conversations", "Custom integrations", "White-label options", "Dedicated support", "Custom training"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Cloud Migration Services",
    category: "IT Services",
    description: "Professional cloud migration and optimization services",
    features: ["Infrastructure assessment", "Migration planning", "Data migration", "Performance optimization", "24/7 support", "Security compliance"],
    benefits: ["Reduce infrastructure costs by 40%", "Improve scalability", "Enhanced security"],
    tiers: [
      {
        name: "Basic Migration",
        price: "$2,500",
        period: "one-time",
        description: "For simple applications and small infrastructures",
        features: ["Infrastructure assessment", "Basic migration plan", "Data migration", "Basic optimization", "30 days support"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Professional Migration",
        price: "$7,500",
        period: "one-time",
        description: "For complex applications and medium infrastructures",
        features: ["Comprehensive assessment", "Detailed migration plan", "Advanced optimization", "Security hardening", "90 days support", "Performance monitoring"],
        popular: true,
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Enterprise Migration",
        price: "$15,000+",
        period: "one-time",
        description: "For large-scale enterprise migrations",
        features: ["Full infrastructure audit", "Custom migration strategy", "Advanced optimization", "Security compliance", "6 months support", "Custom training"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Cybersecurity Audit & Compliance",
    category: "IT Services",
    description: "Comprehensive security assessments and compliance consulting",
    features: ["Security assessment", "Penetration testing", "Compliance audit", "Security training", "Incident response planning", "Ongoing monitoring"],
    benefits: ["Protect against cyber threats", "Meet compliance requirements", "Reduce security risks"],
    tiers: [
      {
        name: "Basic Audit",
        price: "$1,500",
        period: "one-time",
        description: "For small businesses and startups",
        features: ["Basic security assessment", "Vulnerability scan", "Compliance checklist", "Basic recommendations", "30 days support"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Professional Audit",
        price: "$4,500",
        period: "one-time",
        description: "For growing businesses with compliance needs",
        features: ["Comprehensive security assessment", "Penetration testing", "Compliance audit", "Detailed recommendations", "Security training", "90 days support"],
        popular: true,
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Enterprise Audit",
        price: "$9,000+",
        period: "one-time",
        description: "For large organizations with complex security requirements",
        features: ["Full security assessment", "Advanced penetration testing", "Compliance certification", "Custom security policies", "Incident response planning", "6 months support"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Invoice Automation System",
    category: "Business Automation",
    description: "Automate invoice processing and financial reporting",
    features: ["Automated invoice processing", "Payment tracking", "Financial reporting", "Integration with accounting software", "Mobile app", "Multi-currency support"],
    benefits: ["Save 15+ hours per month", "Reduce payment delays", "Improve cash flow"],
    tiers: [
      {
        name: "Starter",
        price: "$25",
        period: "/month",
        description: "For small businesses and freelancers",
        features: ["Up to 100 invoices/month", "Basic automation", "Payment tracking", "Basic reporting", "Email support"],
        cta: "Start Free Trial",
        ctaLink: "/services/invoice-automation"
      },
      {
        name: "Professional",
        price: "$59",
        period: "/month",
        description: "For growing businesses with more complex needs",
        features: ["Up to 500 invoices/month", "Advanced automation", "Multi-currency support", "Advanced reporting", "Accounting integrations", "Priority support"],
        popular: true,
        cta: "Get Started",
        ctaLink: "/services/invoice-automation"
      },
      {
        name: "Enterprise",
        price: "$129",
        period: "/month",
        description: "For large organizations with high volume",
        features: ["Unlimited invoices", "Custom automation", "Custom integrations", "White-label options", "Dedicated support", "Custom training"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Smart Contract Audit Services",
    category: "Blockchain & Web3",
    description: "Professional smart contract security audits and optimization",
    features: ["Security audit", "Code review", "Vulnerability assessment", "Gas optimization", "Documentation", "Ongoing support"],
    benefits: ["Ensure contract security", "Reduce risk of exploits", "Optimize gas costs"],
    tiers: [
      {
        name: "Basic Audit",
        price: "$3,000",
        period: "one-time",
        description: "For simple smart contracts and basic DeFi protocols",
        features: ["Basic security review", "Vulnerability assessment", "Basic recommendations", "30 days support"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Professional Audit",
        price: "$8,000",
        period: "one-time",
        description: "For complex smart contracts and DeFi protocols",
        features: ["Comprehensive security audit", "Advanced vulnerability assessment", "Gas optimization", "Detailed documentation", "90 days support"],
        popular: true,
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Enterprise Audit",
        price: "$20,000+",
        period: "one-time",
        description: "For large-scale DeFi protocols and enterprise blockchain solutions",
        features: ["Full security audit", "Custom security framework", "Advanced optimization", "Custom documentation", "6 months support", "Custom training"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Healthcare Compliance Platform",
    category: "Industry Solutions",
    description: "HIPAA-compliant healthcare management system",
    features: ["HIPAA compliance", "Patient management", "Appointment scheduling", "Billing automation", "Electronic health records", "Security audit logs"],
    benefits: ["Ensure HIPAA compliance", "Improve patient care", "Reduce administrative costs"],
    tiers: [
      {
        name: "Starter",
        price: "$199",
        period: "/month",
        description: "For small medical practices and clinics",
        features: ["Up to 100 patients", "Basic HIPAA compliance", "Appointment scheduling", "Basic billing", "Email support"],
        cta: "Start Free Trial",
        ctaLink: "/services/healthcare-compliance"
      },
      {
        name: "Professional",
        price: "$499",
        period: "/month",
        description: "For growing medical practices and multi-location clinics",
        features: ["Up to 500 patients", "Advanced HIPAA compliance", "Advanced scheduling", "Automated billing", "Electronic health records", "Priority support"],
        popular: true,
        cta: "Get Started",
        ctaLink: "/services/healthcare-compliance"
      },
      {
        name: "Enterprise",
        price: "$1,299",
        period: "/month",
        description: "For large healthcare organizations and hospital systems",
        features: ["Unlimited patients", "Full HIPAA compliance", "Custom workflows", "Custom integrations", "White-label options", "Dedicated support"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  }
];

const categories = ["All", "Core Platform", "AI Services", "IT Services", "Business Automation", "Blockchain & Web3", "Industry Solutions"];

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? servicePricing 
    : servicePricing.filter(service => service.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core features with transparent pricing and no hidden fees.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm opacity-90">+1 302 464 0950</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm opacity-90">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm opacity-90">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 bg-zinc-900 border border-white/10 rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Services Pricing */}
      <div className="space-y-12">
        {filteredServices.map((service, serviceIndex) => (
          <div key={serviceIndex} className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">{service.serviceName}</h2>
              <p className="text-lg opacity-80">{service.description}</p>
            </div>

            {/* Features and Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.tiers.map((tier, tierIndex) => (
                <div 
                  key={tierIndex} 
                  className={`border rounded-lg p-6 relative ${
                    tier.popular 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : 'border-white/10'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold">{tier.price}</div>
                      <div className="text-sm opacity-80">{tier.period}</div>
                    </div>
                    <p className="text-sm opacity-80">{tier.description}</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <h4 className="font-semibold">Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a
                      href={tier.ctaLink}
                      className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                        tier.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-zinc-700 hover:bg-zinc-600 text-white'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Need a Custom Solution?</h2>
          <p className="opacity-90">
            We offer custom development and enterprise solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </a>
            <a
              href="tel:+13024640950"
              className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Do you offer free trials?</h3>
            <p className="text-sm opacity-80">Yes, most of our services offer free trials so you can test them before committing.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
            <p className="text-sm opacity-80">Absolutely! You can change your plan at any time, and we'll prorate the billing accordingly.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-sm opacity-80">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
            <p className="text-sm opacity-80">No setup fees for our monthly plans. One-time services may have project-based pricing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}