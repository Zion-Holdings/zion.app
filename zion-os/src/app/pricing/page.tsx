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
        description: "Ideal for growing businesses",
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
    serviceName: "ZionGPT Core",
    category: "AI Services",
    description: "Advanced AI language model optimized for business applications",
    features: ["Custom fine-tuning", "Multi-language support", "Industry-specific models", "API access", "Enterprise security", "Real-time processing"],
    benefits: ["Improve customer service efficiency by 60%", "Reduce content creation time", "Ensure compliance accuracy"],
    tiers: [
      {
        name: "Starter",
        price: "$49",
        period: "/month",
        description: "For small teams and individual users",
        features: ["100 API calls/day", "Basic models", "Email support", "Standard response time", "Basic documentation"],
        cta: "Start Free Trial",
        ctaLink: "/services/zion-gpt"
      },
      {
        name: "Professional",
        price: "$149",
        period: "/month",
        description: "For growing businesses",
        features: ["1,000 API calls/day", "Advanced models", "Priority support", "Custom fine-tuning", "Multi-language support", "Analytics dashboard"],
        cta: "Get Started",
        ctaLink: "/services/zion-gpt"
      },
      {
        name: "Enterprise",
        price: "$499",
        period: "/month",
        description: "For large organizations",
        features: ["Unlimited API calls", "Custom models", "24/7 support", "Dedicated infrastructure", "SLA guarantee", "Custom integrations"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "AI Content Hub",
    category: "AI Services",
    description: "Comprehensive content creation and management platform powered by AI",
    features: ["AI content generation", "SEO optimization", "Multi-platform publishing", "Content calendar", "Performance analytics", "Team collaboration"],
    benefits: ["Generate 10x more content", "Improve SEO rankings", "Save 20+ hours per week"],
    tiers: [
      {
        name: "Starter",
        price: "$39",
        period: "/month",
        description: "For content creators and small teams",
        features: ["50 AI-generated articles/month", "Basic SEO tools", "Social media integration", "Content calendar", "Basic analytics"],
        cta: "Start Free Trial",
        ctaLink: "/services/ai-content-hub"
      },
      {
        name: "Professional",
        price: "$99",
        period: "/month",
        description: "For growing content teams",
        features: ["200 AI-generated articles/month", "Advanced SEO optimization", "Multi-platform publishing", "Team collaboration", "Advanced analytics", "API access"],
        cta: "Get Started",
        ctaLink: "/services/ai-content-hub"
      },
      {
        name: "Enterprise",
        price: "$299",
        period: "/month",
        description: "For large content operations",
        features: ["Unlimited content generation", "Custom AI models", "White-label options", "Advanced integrations", "Dedicated support", "Custom workflows"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Digital Marketplace Platform",
    category: "E-commerce & Services",
    description: "Complete marketplace solution for jobs, talent, projects, and services",
    features: ["Job posting & matching", "Talent marketplace", "Project management", "Payment processing", "Rating system", "Analytics dashboard"],
    benefits: ["Launch marketplace in 24 hours", "Reduce operational costs by 30%", "Increase revenue through commissions"],
    tiers: [
      {
        name: "Starter",
        price: "$79",
        period: "/month",
        description: "For small marketplaces",
        features: ["Up to 100 users", "Basic marketplace features", "Payment processing", "Basic analytics", "Email support"],
        cta: "Start Free Trial",
        ctaLink: "/services/marketplace"
      },
      {
        name: "Professional",
        price: "$199",
        period: "/month",
        description: "For growing marketplaces",
        features: ["Up to 1,000 users", "Advanced features", "Custom branding", "Advanced analytics", "API access", "Priority support"],
        cta: "Get Started",
        ctaLink: "/services/marketplace"
      },
      {
        name: "Enterprise",
        price: "$599",
        period: "/month",
        description: "For large marketplaces",
        features: ["Unlimited users", "Custom development", "White-label options", "Advanced integrations", "Dedicated support", "Custom workflows"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  },
  {
    serviceName: "Cloud Migration Services",
    category: "IT Services",
    description: "Professional cloud migration and optimization services",
    features: ["Infrastructure assessment", "Migration planning", "Data migration", "Performance optimization", "24/7 support", "Post-migration support"],
    benefits: ["Reduce infrastructure costs by 40%", "Improve scalability", "Enhanced security"],
    tiers: [
      {
        name: "Basic Migration",
        price: "$2,500",
        period: "one-time",
        description: "Simple infrastructure migration",
        features: ["Infrastructure assessment", "Basic migration plan", "Data migration", "Basic testing", "Documentation"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Standard Migration",
        price: "$7,500",
        period: "one-time",
        description: "Comprehensive migration with optimization",
        features: ["Detailed assessment", "Comprehensive plan", "Data migration", "Performance optimization", "Testing & validation", "Training"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Enterprise Migration",
        price: "$15,000+",
        period: "one-time",
        description: "Complex enterprise migration",
        features: ["Full assessment", "Custom migration strategy", "Advanced optimization", "Custom integrations", "Ongoing support", "SLA guarantee"],
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
        description: "Essential security assessment",
        features: ["Basic security scan", "Vulnerability assessment", "Compliance checklist", "Basic report", "Email support"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Standard Audit",
        price: "$4,500",
        period: "one-time",
        description: "Comprehensive security assessment",
        features: ["Full security audit", "Penetration testing", "Compliance audit", "Detailed report", "Remediation guidance", "Phone support"],
        cta: "Get Quote",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      },
      {
        name: "Enterprise Audit",
        price: "$9,000+",
        period: "one-time",
        description: "Advanced security assessment",
        features: ["Advanced testing", "Custom compliance", "Ongoing monitoring", "Security training", "Incident response", "Dedicated support"],
        cta: "Contact Sales",
        ctaLink: "mailto:kleber@ziontechgroup.com"
      }
    ]
  }
];

const categories = ["All", "Core Platform", "AI Services", "IT Services", "E-commerce & Services"];

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

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 bg-zinc-800 rounded-lg p-1">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Pricing */}
      <div className="space-y-12">
        {filteredServices.map((service, serviceIndex) => (
          <div key={serviceIndex} className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">{service.serviceName}</h2>
              <p className="text-lg opacity-80">{service.description}</p>
            </div>

            {/* Features & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
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
                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
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
                  className={`relative border rounded-lg p-6 ${
                    tier.popular
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <div>
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-lg opacity-80">{tier.period}</span>
                    </div>
                    <p className="text-sm opacity-80">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={tier.ctaLink}
                      className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
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

      {/* Additional Services */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Need Custom Solutions?</h2>
          <p className="opacity-90">
            We offer custom development, enterprise solutions, and specialized services tailored to your specific needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="font-semibold">Custom Development</h3>
              <p className="text-sm opacity-90">Tailored solutions from $5,000+</p>
            </div>
            <div>
              <h3 className="font-semibold">Enterprise Solutions</h3>
              <p className="text-sm opacity-90">Custom pricing for large organizations</p>
            </div>
            <div>
              <h3 className="font-semibold">Consulting Services</h3>
              <p className="text-sm opacity-90">Strategic guidance from $150/hour</p>
            </div>
          </div>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Custom Quote
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Questions About Pricing?</h2>
        <p className="opacity-80">
          Our team is here to help you choose the right plan for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="opacity-80">+1 302 464 0950</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="opacity-80">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}