"use client";

import { useState } from "react";

const pricingData = {
  "AI & Machine Learning": [
    {
      service: "AI Autonomous Enterprise Platform",
      ourPrice: "$1,299/month",
      competitorPrice: "$5,000+/month",
      savings: "75%",
      roi: "2000%",
      features: [
        "Autonomous decision-making AI",
        "Self-healing infrastructure",
        "Predictive business intelligence",
        "Complete automation",
        "Zero human intervention"
      ],
      competitorFeatures: [
        "Limited automation",
        "Manual oversight required",
        "Basic analytics",
        "Partial automation",
        "Human intervention needed"
      ]
    },
    {
      service: "AI Consciousness Simulator Pro",
      ourPrice: "$4,999/month",
      competitorPrice: "No competitors",
      savings: "First-to-market",
      roi: "500%",
      features: [
        "Multi-dimensional consciousness",
        "Ethical AI framework",
        "Emotional intelligence",
        "Self-awareness algorithms",
        "Moral reasoning"
      ],
      competitorFeatures: [
        "Basic AI frameworks",
        "No consciousness simulation",
        "Limited emotional AI",
        "No self-awareness",
        "No moral reasoning"
      ]
    }
  ],
  "Micro SAAS Solutions": [
    {
      service: "Smart CRM Intelligence Suite",
      ourPrice: "$299/month",
      competitorPrice: "$800/month",
      savings: "63%",
      roi: "300%",
      features: [
        "AI-powered lead scoring",
        "Predictive analytics",
        "Automated follow-ups",
        "Sales optimization",
        "Customer sentiment analysis"
      ],
      competitorFeatures: [
        "Basic lead scoring",
        "Historical analytics",
        "Manual follow-ups",
        "Standard sales tools",
        "Limited sentiment analysis"
      ]
    },
    {
      service: "Intelligent HR Analytics Platform",
      ourPrice: "$399/month",
      competitorPrice: "$1,200/month",
      savings: "67%",
      roi: "250%",
      features: [
        "AI performance analytics",
        "Turnover prediction",
        "Workforce optimization",
        "Engagement tracking",
        "Recruitment optimization"
      ],
      competitorFeatures: [
        "Basic HR analytics",
        "Historical data only",
        "Manual optimization",
        "Basic tracking",
        "Standard recruitment"
      ]
    }
  ],
  "IT Infrastructure & Security": [
    {
      service: "Quantum Cybersecurity Suite",
      ourPrice: "$1,999/month",
      competitorPrice: "$5,000+/month",
      savings: "60%",
      roi: "400%",
      features: [
        "Quantum-resistant encryption",
        "AI threat detection",
        "Zero-trust architecture",
        "Real-time monitoring",
        "Compliance automation"
      ],
      competitorFeatures: [
        "Standard encryption",
        "Rule-based detection",
        "Traditional security",
        "Periodic monitoring",
        "Manual compliance"
      ]
    },
    {
      service: "Edge Computing Orchestrator",
      ourPrice: "$899/month",
      competitorPrice: "$2,500/month",
      savings: "64%",
      roi: "180%",
      features: [
        "Intelligent distribution",
        "Latency optimization",
        "Edge node management",
        "Performance monitoring",
        "Automated scaling"
      ],
      competitorFeatures: [
        "Basic distribution",
        "Standard latency",
        "Manual management",
        "Basic monitoring",
        "Manual scaling"
      ]
    }
  ]
};

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = Object.keys(pricingData);
  
  const filteredData = selectedCategory === "all" 
    ? Object.entries(pricingData)
    : Object.entries(pricingData).filter(([category]) => category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Competitive Pricing Analysis</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          See how our revolutionary services provide exceptional value compared to traditional solutions. 
          Our AI-powered platforms deliver superior functionality at significantly lower costs.
        </p>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-green-500/20">
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Zion Tech Group?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">60-75%</div>
            <div className="text-sm opacity-80">Average Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">2000%</div>
            <div className="text-sm opacity-80">Maximum ROI Potential</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">AI-Powered Automation</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-zinc-900 border border-white/10 rounded-lg px-6 py-3 text-lg"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Pricing Comparison Tables */}
      <div className="space-y-8">
        {filteredData.map(([category, services]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">{category}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-6 bg-zinc-900/50">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{service.service}</h3>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{service.ourPrice}</div>
                        <div className="text-sm opacity-60">Our Price</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-400 line-through">{service.competitorPrice}</div>
                        <div className="text-sm opacity-60">Competitor</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save {service.savings}
                      </div>
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ROI: {service.roi}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-400 mb-3">Our Features</h4>
                      <ul className="space-y-2 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400 mb-3">Competitor Limitations</h4>
                      <ul className="space-y-2 text-sm">
                        {service.competitorFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-red-400">✗</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ROI Calculator */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-6 text-center">ROI Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Traditional Solution Costs</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Monthly subscription:</span>
                <span className="text-red-400">$5,000</span>
              </div>
              <div className="flex justify-between">
                <span>Implementation:</span>
                <span className="text-red-400">$50,000</span>
              </div>
              <div className="flex justify-between">
                <span>Annual maintenance:</span>
                <span className="text-red-400">$15,000</span>
              </div>
              <div className="flex justify-between">
                <span>Staff training:</span>
                <span className="text-red-400">$10,000</span>
              </div>
              <div className="border-t border-white/20 pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total First Year:</span>
                  <span className="text-red-400">$135,000</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group Solution</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Monthly subscription:</span>
                <span className="text-green-400">$1,299</span>
              </div>
              <div className="flex justify-between">
                <span>Implementation:</span>
                <span className="text-green-400">$5,000</span>
              </div>
              <div className="flex justify-between">
                <span>Annual maintenance:</span>
                <span className="text-green-400">$0</span>
              </div>
              <div className="flex justify-between">
                <span>Staff training:</span>
                <span className="text-green-400">$2,000</span>
              </div>
              <div className="border-t border-white/20 pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total First Year:</span>
                  <span className="text-green-400">$22,588</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/20">
          <div className="text-2xl font-bold text-green-400 mb-2">Total Savings: $112,412</div>
          <div className="text-sm opacity-80">That's an 83% cost reduction in the first year alone!</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Saving?</h2>
        <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
          Join hundreds of businesses already saving millions with our revolutionary technology solutions. 
          Contact us today for a personalized consultation and ROI analysis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Call Now: +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}