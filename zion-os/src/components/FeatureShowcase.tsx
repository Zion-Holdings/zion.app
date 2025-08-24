"use client";

import { useState, useEffect } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  demo?: string;
}

const features: Feature[] = [
  {
    id: "marketplace",
    title: "Marketplace & Jobs",
    description: "Complete marketplace infrastructure with job posting, talent matching, and project management.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "blue",
    details: [
      "Smart job matching algorithms",
      "Escrow payment systems",
      "Project milestone tracking",
      "Rating and review systems",
      "Multi-currency support"
    ]
  },
  {
    id: "governance",
    title: "AI Governance",
    description: "Intelligent governance systems with DAO voting, proposal management, and automated decision-making.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "purple",
    details: [
      "AI-powered proposal analysis",
      "Automated voting systems",
      "Smart contract governance",
      "Transparency reporting",
      "Multi-signature wallets"
    ]
  },
  {
    id: "tokens",
    title: "Token Systems",
    description: "Flexible token economics with rewards, staking, and multi-currency support for your economy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    color: "green",
    details: [
      "Custom token creation",
      "Staking and rewards",
      "Liquidity pools",
      "Token burning mechanisms",
      "Cross-chain bridges"
    ]
  }
];

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600",
      indigo: "from-indigo-500 to-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || "from-blue-500 to-blue-600";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dive deep into the powerful capabilities that make Zion OS the ultimate platform for digital economies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`card cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  activeFeature === feature.id 
                    ? `ring-2 ring-${feature.color}-500/50 bg-white/10` 
                    : 'hover:bg-white/10'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-3">
                      {feature.description}
                    </p>
                    {activeFeature === feature.id && (
                      <div className="space-y-2 animate-fade-in">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className={`w-1.5 h-1.5 bg-${feature.color}-500 rounded-full`}></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeFeature === feature.id ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="relative">
            <div className="card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {activeFeature ? features.find(f => f.id === activeFeature)?.title : 'Select a Feature'}
                </h3>
                <p className="text-gray-300">
                  {activeFeature 
                    ? 'Explore the capabilities and see how it works'
                    : 'Click on any feature to see detailed information and demonstrations'
                  }
                </p>
              </div>

              {activeFeature ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {features.find(f => f.id === activeFeature)?.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-3">Integration</h4>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                        API
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        SDK
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                        UI
                      </div>
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    Try {features.find(f => f.id === activeFeature)?.title} Demo
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    Interactive feature exploration
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}