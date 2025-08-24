import React from 'react';
import { SEO } from '@/components/SEO';

const Partners = () => {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate on cutting-edge technology solutions",
      icon: "🔬",
      benefits: [
        "Joint R&D initiatives",
        "Technology licensing",
        "Co-innovation projects",
        "Market expansion support"
      ]
    },
    {
      title: "Academic Partners",
      description: "Partner with leading universities and research institutions",
      icon: "🎓",
      benefits: [
        "Research collaboration",
        "Talent pipeline development",
        "Innovation workshops",
        "Academic publications"
      ]
    },
    {
      title: "Enterprise Partners",
      description: "Strategic partnerships with large corporations",
      icon: "🏢",
      benefits: [
        "Enterprise solutions",
        "Global market access",
        "Resource sharing",
        "Joint ventures"
      ]
    },
    {
      title: "Startup Partners",
      description: "Support and collaborate with innovative startups",
      icon: "🚀",
      benefits: [
        "Incubation support",
        "Technology integration",
        "Market validation",
        "Investment opportunities"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "TechCorp Solutions",
      logo: "🔧",
      description: "Leading provider of enterprise software solutions",
      partnership: "Technology Integration"
    },
    {
      name: "InnovateLab",
      logo: "🧪",
      description: "Research and development laboratory",
      partnership: "R&D Collaboration"
    },
    {
      name: "GlobalTech University",
      logo: "🎓",
      description: "Premier technology research institution",
      partnership: "Academic Research"
    },
    {
      name: "StartupHub",
      logo: "💡",
      description: "Innovation incubator and accelerator",
      partnership: "Startup Ecosystem"
    },
    {
      name: "CloudTech Systems",
      logo: "☁️",
      description: "Cloud infrastructure and services provider",
      partnership: "Cloud Solutions"
    },
    {
      name: "DataFlow Analytics",
      logo: "📊",
      description: "Advanced analytics and business intelligence",
      partnership: "Data Solutions"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Access to Cutting-Edge Technology",
      description: "Gain early access to innovative technologies and solutions",
      icon: "⚡"
    },
    {
      title: "Expanded Market Reach",
      description: "Tap into new markets and customer segments",
      icon: "🌍"
    },
    {
      title: "Shared Resources",
      description: "Leverage combined expertise, infrastructure, and resources",
      icon: "🤝"
    },
    {
      title: "Innovation Acceleration",
      description: "Speed up development and time-to-market",
      icon: "🚀"
    },
    {
      title: "Risk Mitigation",
      description: "Share risks and costs across partnership",
      icon: "🛡️"
    },
    {
      title: "Competitive Advantage",
      description: "Create unique value propositions in the market",
      icon: "🏆"
    }
  ];

  return (
    <>
      <SEO 
        title="Partners - Strategic Partnerships with Zion Tech Group"
        description="Join our network of strategic partners. Collaborate on innovative technology solutions, expand your market reach, and accelerate growth through strategic partnerships."
        canonical="/partners"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strategic Partnerships
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our network of innovative partners and collaborate on cutting-edge technology solutions that drive growth and innovation.
              </p>
            </div>

            {/* Partnership Types */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Partnership Opportunities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {partnershipTypes.map((type, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{type.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {type.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Partners */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Current Partners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {currentPartners.map((partner, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{partner.logo}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">
                      {partner.name}
                    </h3>
                    <p className="text-blue-100 mb-3 text-sm text-center">
                      {partner.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {partner.partnership}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Partner With Us?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's explore how we can create value together through strategic partnerships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Start Partnership Discussion
                  </a>
                  <a
                    href="/about"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Learn More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Partners;