import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Globe,
  TrendingUp,
  Crown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  ctaText: string;
  ctaVariant: 'primary' | 'secondary';
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 2999,
    period: "month",
    description: "Perfect for small businesses and startups looking to get started with modern technology solutions.",
    features: [
      "AI-Powered Business Automation",
      "Cloud Infrastructure Setup",
      "Basic Security Implementation",
      "24/7 Email Support",
      "Monthly Performance Reports",
      "Up to 5 User Licenses",
      "Basic Analytics Dashboard",
      "Mobile App Access"
    ],
    notIncluded: [
      "Advanced AI Models",
      "Custom Development",
      "Priority Support",
      "Advanced Security Features"
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-400/30",
    ctaText: "Get Started",
    ctaVariant: "secondary"
  },
  {
    name: "Professional",
    price: 7999,
    period: "month",
    description: "Ideal for growing businesses that need comprehensive solutions and dedicated support.",
    features: [
      "Everything in Starter",
      "Advanced AI & Machine Learning",
      "Custom Development Services",
      "Priority Support (4-hour response)",
      "Advanced Security & Compliance",
      "Up to 25 User Licenses",
      "Real-time Analytics & BI",
      "API Integration Services",
      "Custom Workflow Automation",
      "Monthly Strategy Sessions"
    ],
    notIncluded: [
      "Enterprise Security Features",
      "Dedicated Account Manager",
      "Custom AI Model Training"
    ],
    popular: true,
    icon: <Star className="w-8 h-8" />,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-400/30",
    ctaText: "Choose Professional",
    ctaVariant: "primary"
  },
  {
    name: "Enterprise",
    price: 19999,
    period: "month",
    description: "Comprehensive solution for large enterprises with complex requirements and custom needs.",
    features: [
      "Everything in Professional",
      "Custom AI Model Development",
      "Enterprise Security & Compliance",
      "Dedicated Account Manager",
      "24/7 Phone & Chat Support",
      "Unlimited User Licenses",
      "Custom Analytics & Reporting",
      "Multi-cloud Management",
      "Advanced DevOps Automation",
      "Custom Integration Development",
      "Quarterly Business Reviews",
      "Training & Certification Programs"
    ],
    notIncluded: [],
    icon: <Crown className="w-8 h-8" />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-400/30",
    ctaText: "Contact Sales",
    ctaVariant: "primary"
  }
];

const additionalServices = [
  {
    name: "Custom AI Development",
    price: "From $15,000",
    description: "Bespoke AI solutions tailored to your specific business needs",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    name: "Security Audit & Compliance",
    price: "From $8,000",
    description: "Comprehensive security assessment and compliance certification",
    icon: <Shield className="w-6 h-6" />
  },
  {
    name: "Cloud Migration",
    price: "From $25,000",
    description: "End-to-end cloud migration with zero downtime guarantee",
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: "Digital Transformation",
    price: "From $50,000",
    description: "Complete business process modernization and digital strategy",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export function EnhancedPricingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState<'month' | 'year'>('month');
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  const getDiscountedPrice = (price: number) => {
    return selectedPeriod === 'year' ? Math.round(price * 10 * 0.8) : price;
  };

  const getPeriodText = () => {
    return selectedPeriod === 'year' ? 'year (Save 20%)' : 'month';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${selectedPeriod === 'month' ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setSelectedPeriod(selectedPeriod === 'month' ? 'year' : 'month')}
              className="relative w-16 h-8 bg-white/20 rounded-full p-1 transition-all duration-300"
            >
              <div
                className={`w-6 h-6 bg-cyan-400 rounded-full transition-transform duration-300 ${
                  selectedPeriod === 'year' ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${selectedPeriod === 'year' ? 'text-white' : 'text-white/60'}`}>
              Yearly
            </span>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
              className={`relative ${
                tier.popular ? 'scale-105' : ''
              } transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-full ${tier.bgColor} ${tier.borderColor} border rounded-xl p-8 backdrop-blur-sm transition-all duration-300 ${
                hoveredTier === index ? 'scale-105 shadow-2xl' : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 ${tier.bgColor} ${tier.borderColor} border rounded-lg mb-4`}>
                    <div className={tier.color}>{tier.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-white/70 text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white mb-2">
                    ${getDiscountedPrice(tier.price).toLocaleString()}
                  </div>
                  <div className="text-white/60">per {getPeriodText()}</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 opacity-50">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.ctaVariant === 'primary'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}>
                  {tier.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                <p className="text-white/70 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Can I change plans anytime?</h4>
              <p className="text-white/70">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h4>
              <p className="text-white/70">No setup fees for standard plans. Custom development services may have associated costs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">What's included in support?</h4>
              <p className="text-white/70">All plans include email support. Professional and Enterprise plans include priority support with faster response times.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Do you offer custom solutions?</h4>
              <p className="text-white/70">Absolutely! We specialize in custom development and can tailor solutions to your specific business requirements.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our team can create a custom package tailored to your specific needs. 
              Let's discuss your requirements and find the perfect solution.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 mx-auto">
              <Sparkles className="w-5 h-5" />
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}