import React, { useState, useEffect } from 'react';
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  ShoppingCart, 
  BarChart3, 
  Zap,
  Link as LinkIcon,
  Network,
  Monitor,
  Smartphone
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, MICRO_SAAS_SUBCATEGORIES } from "@/data/microSaasServices";

// Service category icons mapping
const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI Services': <Zap className="w-6 h-6" />,
  'Business Solutions': <BarChart3 className="w-6 h-6" />,
  'Cybersecurity': <Shield className="w-6 h-6" />,
  'Cloud Services': <Cloud className="w-6 h-6" />,
  'Data Services': <Database className="w-6 h-6" />,
  'Development': <Code className="w-6 h-6" />,
  'E-commerce': <ShoppingCart className="w-6 h-6" />,
  'Marketing': <BarChart3 className="w-6 h-6" />,
  'Integration': <LinkIcon className="w-6 h-6" />,
  'Blockchain': <Network className="w-6 h-6" />,
  'IoT': <Monitor className="w-6 h-6" />,
  'Hardware': <Smartphone className="w-6 h-6" />
};

// Service highlights with benefits and features
const serviceHighlights = [
  {
    title: "AI-Powered Solutions",
    description: "Cutting-edge artificial intelligence services that transform your business operations",
    benefits: ["Automation", "Intelligence", "Efficiency", "Innovation"],
    icon: <Zap className="w-8 h-8 text-zion-cyan" />
  },
  {
    title: "Enterprise Security",
    description: "Comprehensive cybersecurity solutions to protect your digital assets",
    benefits: ["24/7 Monitoring", "Threat Detection", "Compliance", "Risk Management"],
    icon: <Shield className="w-8 h-8 text-zion-purple" />
  },
  {
    title: "Cloud Excellence",
    description: "Scalable cloud solutions for modern business infrastructure",
    benefits: ["Scalability", "Reliability", "Cost Optimization", "Performance"],
    icon: <Cloud className="w-8 h-8 text-zion-blue" />
  },
  {
    title: "Data Intelligence",
    description: "Transform raw data into actionable business insights",
    benefits: ["Analytics", "Visualization", "Predictions", "Reporting"],
    icon: <Database className="w-8 h-8 text-zion-green" />
  }
];

// Pricing tiers for different service categories
const pricingTiers = [
  {
    name: "Starter",
    price: "$199",
    description: "Perfect for small businesses and startups",
    features: ["Basic AI Services", "Standard Support", "Core Features", "Email Support"],
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    description: "Ideal for growing businesses",
    features: ["Advanced AI Services", "Priority Support", "Custom Features", "Phone Support", "Training"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$2,499+",
    description: "For large organizations with complex needs",
    features: ["Full AI Suite", "24/7 Support", "Custom Development", "Dedicated Manager", "On-site Training"],
    popular: false
  }
];

export default function MicroSaasServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(MICRO_SAAS_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter services by category
  const filteredListings = selectedCategory === 'all' 
    ? listings 
    : listings.filter(service => service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Professional, innovative, and cost-effective technology services designed to accelerate your business growth
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-dark/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-zion-cyan text-lg font-semibold mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-zion-slate-light">Mobile</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility, ensuring your business stays ahead of the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-zion-slate-light mb-4">{highlight.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {highlight.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zion-blue-light rounded-full text-zion-cyan text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-zion-blue rounded-lg p-8 border-2 ${
                tier.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-zion-cyan text-4xl font-bold mb-2">{tier.price}</div>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    tier.popular 
                      ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                      : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                  }`}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              From AI-powered solutions to enterprise security, we cover every aspect of modern technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MICRO_SAAS_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedCategory === category.value
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-zion-cyan mr-3">
                    {categoryIcons[category.label] || <Code className="w-6 h-6" />}
                  </div>
                  <h3 className="text-white text-lg font-semibold">{category.label}</h3>
                </div>
                {MICRO_SAAS_SUBCATEGORIES[category.value as keyof typeof MICRO_SAAS_SUBCATEGORIES] && (
                  <div className="flex flex-wrap gap-2">
                    {MICRO_SAAS_SUBCATEGORIES[category.value as keyof typeof MICRO_SAAS_SUBCATEGORIES].map((sub) => (
                      <span key={sub} className="px-2 py-1 bg-zion-blue-light rounded text-zion-cyan text-xs">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : `${MICRO_SAAS_CATEGORIES.find(c => c.value === selectedCategory)?.label} Services`}
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of professional technology services
            </p>
          </div>
          
          <DynamicListingPage 
            title=""
            description=""
            categorySlug="micro-saas-services"
            listings={filteredListings}
            categoryFilters={MICRO_SAAS_CATEGORIES}
            initialPrice={{ min: 199, max: 6000 }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Contact Details */}
          <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-zion-slate-light mb-1">Mobile</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-1">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-1">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-zion-slate-light mb-2">Visit our website for more information</p>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                https://ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </>
  );
}