"use client";

import { useState } from "react";

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  targetMarket: string[];
  features: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  benefits: string[];
  integrations: string[];
  deployment: string;
}

const microSAASServices: MicroSAASService[] = [
  {
    id: "marketplace-platform-pro",
    name: "Digital Marketplace Platform Pro",
    description: "White-label marketplace solution for jobs, talent, and projects with integrated payment processing, governance, and AI-powered matching.",
    targetMarket: [
      "Job boards and recruitment",
      "Freelance platforms",
      "Service marketplaces",
      "E-commerce platforms",
      "Educational platforms",
      "Healthcare services"
    ],
    features: [
      "Custom branding and theming",
      "Multi-currency support",
      "Integrated payment gateways",
      "User management and roles",
      "Analytics and reporting",
      "Mobile-responsive design",
      "AI-powered matching",
      "Escrow and dispute resolution",
      "Multi-language support",
      "API access and webhooks"
    ],
    pricing: "Starting at $1,499/month",
    startingPrice: 1499,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Marketplace%20Platform%20Pro%20Inquiry",
    icon: "🏪",
    benefits: [
      "Reduce time to market by 80%",
      "Lower development costs by 60%",
      "Scalable architecture",
      "Built-in compliance features",
      "24/7 technical support",
      "Regular feature updates"
    ],
    integrations: [
      "Stripe, PayPal, Coinbase",
      "Slack, Teams, Discord",
      "Zapier, Make.com",
      "Google Analytics, Mixpanel",
      "Mailchimp, SendGrid",
      "AWS, Azure, Google Cloud"
    ],
    deployment: "Cloud-hosted with white-label options"
  },
  {
    id: "token-economy-platform",
    name: "Token Economy Platform",
    description: "Complete token system with rewards, governance, and economic incentives for community engagement and loyalty programs.",
    targetMarket: [
      "Gaming platforms",
      "Community platforms",
      "Loyalty programs",
      "Educational platforms",
      "Social networks",
      "DeFi applications"
    ],
    features: [
      "Custom token creation",
      "Reward distribution system",
      "Governance voting mechanisms",
      "Staking and liquidity pools",
      "Multi-chain support",
      "Analytics and reporting",
      "Smart contract templates",
      "Wallet integration",
      "Compliance tools",
      "API and SDK access"
    ],
    pricing: "Starting at $999/month",
    startingPrice: 999,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Token%20Economy%20Platform%20Inquiry",
    icon: "🪙",
    benefits: [
      "Increase user engagement by 300%",
      "Reduce churn by 40%",
      "Monetize community activities",
      "Regulatory compliance built-in",
      "Multi-blockchain support",
      "Professional support team"
    ],
    integrations: [
      "MetaMask, WalletConnect",
      "Ethereum, Polygon, BSC",
      "Discord, Telegram bots",
      "Shopify, WooCommerce",
      "WordPress, Webflow",
      "Mobile apps (iOS/Android)"
    ],
    deployment: "Multi-cloud with blockchain integration"
  },
  {
    id: "kyc-aml-enterprise",
    name: "KYC/AML Verification Enterprise",
    description: "Comprehensive identity verification and compliance system for financial services and regulated industries with advanced fraud detection.",
    targetMarket: [
      "Financial institutions",
      "Cryptocurrency exchanges",
      "Real estate platforms",
      "Healthcare services",
      "Legal services",
      "Government agencies"
    ],
    features: [
      "Document verification",
      "Biometric authentication",
      "Compliance reporting",
      "Risk scoring",
      "Multi-jurisdiction support",
      "API integration",
      "Fraud detection AI",
      "Audit trails",
      "Custom compliance rules",
      "Real-time monitoring"
    ],
    pricing: "Starting at $499/month",
    startingPrice: 499,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=KYC%20AML%20Enterprise%20Inquiry",
    icon: "🆔",
    benefits: [
      "Reduce compliance costs by 50%",
      "Improve verification accuracy by 95%",
      "Faster customer onboarding",
      "Regulatory compliance assurance",
      "Reduced fraud incidents",
      "Scalable verification process"
    ],
    integrations: [
      "Banking systems",
      "CRM platforms",
      "Payment processors",
      "Blockchain networks",
      "Government databases",
      "Third-party verification services"
    ],
    deployment: "Enterprise-grade cloud with on-premise options"
  },
  {
    id: "dao-governance-platform",
    name: "DAO Governance Platform",
    description: "Complete DAO platform with proposal creation, voting mechanisms, treasury management, and governance analytics for decentralized organizations.",
    targetMarket: [
      "DeFi protocols",
      "NFT communities",
      "Investment DAOs",
      "Governance tokens",
      "Decentralized organizations",
      "Community projects"
    ],
    features: [
      "Proposal creation and management",
      "Multiple voting mechanisms",
      "Treasury management",
      "Member onboarding",
      "Governance analytics",
      "Integration with major wallets",
      "Custom governance rules",
      "Multi-signature support",
      "Compliance reporting",
      "Mobile governance app"
    ],
    pricing: "Starting at $799/month",
    startingPrice: 799,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=DAO%20Governance%20Platform%20Inquiry",
    icon: "🏛️",
    benefits: [
      "Streamline governance processes",
      "Increase community participation",
      "Transparent decision-making",
      "Reduce governance overhead",
      "Compliance with regulations",
      "Professional support and maintenance"
    ],
    integrations: [
      "MetaMask, WalletConnect",
      "Ethereum, Polygon, BSC",
      "Discord, Telegram",
      "Snapshot, Tally",
      "Gnosis Safe",
      "DeFi protocols"
    ],
    deployment: "Blockchain-native with cloud management"
  },
  {
    id: "ai-learning-platform",
    name: "AI-Powered Learning Platform",
    description: "Comprehensive learning management system with AI-powered content creation, assessment, and personalized learning paths.",
    targetMarket: [
      "Educational institutions",
      "Corporate training",
      "Online course creators",
      "Skill development platforms",
      "Language learning",
      "Professional certification"
    ],
    features: [
      "AI content generation",
      "Interactive assessments",
      "Certification tracking",
      "Learning analytics",
      "Multi-format support",
      "Mobile learning",
      "Personalized learning paths",
      "Collaborative learning tools",
      "Gamification elements",
      "Multi-language support"
    ],
    pricing: "Starting at $599/month",
    startingPrice: 599,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Learning%20Platform%20Inquiry",
    icon: "🎓",
    benefits: [
      "Reduce content creation time by 70%",
      "Improve learning outcomes by 40%",
      "Personalized learning experience",
      "Scalable content generation",
      "Advanced analytics insights",
      "Mobile-first design"
    ],
    integrations: [
      "LMS systems",
      "Video platforms",
      "Payment processors",
      "CRM systems",
      "Analytics tools",
      "Social learning platforms"
    ],
    deployment: "Cloud-hosted with offline capabilities"
  },
  {
    id: "incubator-grants-platform",
    name: "Incubator & Grants Management Platform",
    description: "Platform for managing startup incubators, grant programs, and funding distribution with transparent governance and impact measurement.",
    targetMarket: [
      "Startup incubators",
      "Government agencies",
      "Non-profit organizations",
      "Corporate innovation programs",
      "Educational institutions",
      "Investment funds"
    ],
    features: [
      "Application management",
      "Review and scoring systems",
      "Fund distribution tracking",
      "Progress monitoring",
      "Impact measurement",
      "Reporting and analytics",
      "Compliance tracking",
      "Stakeholder communication",
      "Performance dashboards",
      "API access"
    ],
    pricing: "Starting at $1,199/month",
    startingPrice: 1199,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Incubator%20Grants%20Platform%20Inquiry",
    icon: "🌱",
    benefits: [
      "Streamline application processes",
      "Improve decision-making transparency",
      "Reduce administrative overhead",
      "Better impact measurement",
      "Compliance automation",
      "Data-driven insights"
    ],
    integrations: [
      "Payment systems",
      "CRM platforms",
      "Accounting software",
      "Communication tools",
      "Analytics platforms",
      "Government databases"
    ],
    deployment: "Enterprise cloud with compliance features"
  }
];

export default function MicroSAASPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Micro SAAS Solutions</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Innovative software-as-a-service solutions designed to accelerate your business growth, 
          streamline operations, and provide competitive advantages in the digital economy.
        </p>
      </div>

      {/* Micro SAAS Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {microSAASServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p className="opacity-80">{service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
            </div>

            {/* Target Market */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Target Markets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.targetMarket.map((market, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">🎯</span>
                    <span>{market}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Business Benefits</h3>
              <div className="grid grid-cols-1 gap-2">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">💡</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Integrations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🔗</span>
                    <span>{integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deployment */}
            <div>
              <h3 className="font-semibold mb-3 text-cyan-400">Deployment</h3>
              <div className="text-sm opacity-80">{service.deployment}</div>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* SAAS Capabilities Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">SAAS Capabilities Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">Rapid Deployment</h3>
            <p className="text-sm opacity-80">Get to market faster with pre-built solutions</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-semibold mb-2">Customization</h3>
            <p className="text-sm opacity-80">White-label and customize for your brand</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm opacity-80">Built-in analytics and reporting</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔌</div>
            <h3 className="font-semibold mb-2">Integrations</h3>
            <p className="text-sm opacity-80">Connect with your existing tools</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Accelerate Your Business?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our micro SAAS solutions can transform your business operations, 
          reduce costs, and provide competitive advantages. Get in touch for a personalized consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro%20SAAS%20Consultation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule SAAS Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>

      {/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </a>
      </div>
    </div>
  );
}