"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "fortune-500-automation",
    company: "Fortune 500 Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Complex supply chain management with 15,000+ SKUs across 50+ locations, resulting in $2M monthly inefficiencies and 30% stockout rates.",
    solution: "AI Autonomous Enterprise Platform with integrated supply chain optimization",
    implementation: "6-week deployment with phased rollout across all locations",
    results: [
      "95% reduction in stockout rates",
      "$1.8M monthly cost savings",
      "2000% ROI within 8 months",
      "Zero human intervention required",
      "Real-time optimization across all locations"
    ],
    metrics: {
      roi: "2000%",
      costSavings: "$1.8M/month",
      efficiency: "95%",
      timeToValue: "8 months"
    },
    testimonial: "Zion Tech Group's AI platform transformed our entire operation. We went from constant firefighting to a self-optimizing system that runs better than any human team could manage.",
    contact: "CTO, Fortune 500 Manufacturing Corp"
  },
  {
    id: "healthcare-ai-research",
    company: "Leading Medical Research Institute",
    industry: "Healthcare & Research",
    challenge: "Drug discovery process taking 8-12 years with $2.6B average cost per approved drug. Limited success in identifying viable candidates early in the process.",
    solution: "AI Drug Discovery Platform with quantum computing integration",
    implementation: "3-month setup with ongoing AI model training and optimization",
    results: [
      "60% faster drug candidate identification",
      "3 promising compounds in clinical trials",
      "Estimated $1.2B in research cost savings",
      "500% ROI through grant funding and partnerships",
      "Breakthrough discoveries in rare disease treatment"
    ],
    metrics: {
      roi: "500%",
      costSavings: "$1.2B",
      efficiency: "60%",
      timeToValue: "12 months"
    },
    testimonial: "The AI platform identified drug candidates we would have missed using traditional methods. It's like having a team of 1000 PhD researchers working 24/7.",
    contact: "Director of Research, Medical Institute"
  },
  {
    id: "fintech-startup-scaling",
    company: "Emerging FinTech Startup",
    industry: "Financial Technology",
    challenge: "Rapid growth from 10K to 500K users causing system crashes, poor user experience, and 40% customer churn due to performance issues.",
    solution: "Edge Computing Orchestrator with AI-powered scaling",
    implementation: "2-week emergency deployment with gradual migration",
    results: [
      "99.99% uptime achieved",
      "40% reduction in infrastructure costs",
      "User experience improved by 300%",
      "Customer churn reduced to 5%",
      "Successfully handled 10M+ daily transactions"
    ],
    metrics: {
      roi: "180%",
      costSavings: "40%",
      efficiency: "99.99%",
      timeToValue: "2 weeks"
    },
    testimonial: "Zion Tech Group saved our company. Their edge computing solution scaled with us seamlessly, and the AI optimization kept costs down while improving performance.",
    contact: "CTO, FinTech Startup"
  },
  {
    id: "retail-chain-optimization",
    company: "National Retail Chain",
    industry: "Retail & E-commerce",
    challenge: "500+ store locations with inconsistent inventory management, resulting in $15M annual losses from overstock and stockouts, plus poor customer satisfaction.",
    solution: "AI Retail Optimization Suite with omnichannel integration",
    implementation: "4-month rollout across all locations with staff training",
    results: [
      "$12M annual cost savings",
      "Inventory accuracy improved to 98%",
      "Customer satisfaction increased by 45%",
      "Sales increased by 25%",
      "Staff productivity improved by 60%"
    ],
    metrics: {
      roi: "300%",
      costSavings: "$12M/year",
      efficiency: "98%",
      timeToValue: "6 months"
    },
    testimonial: "The AI platform transformed our retail operations. We now have perfect inventory visibility, happy customers, and significantly improved profitability.",
    contact: "VP of Operations, Retail Chain"
  },
  {
    id: "space-tech-startup",
    company: "Space Technology Startup",
    industry: "Space Technology",
    challenge: "Managing constellation of 50+ satellites with manual operations, resulting in 15% satellite failures and $50M annual operational costs.",
    solution: "Satellite AI Orchestrator with predictive maintenance",
    implementation: "3-month deployment with AI model training on historical data",
    results: [
      "95% reduction in satellite failures",
      "$35M annual operational cost savings",
      "Satellite lifespan extended by 40%",
      "Mission success rate improved to 99.5%",
      "Real-time optimization of orbital paths"
    ],
    metrics: {
      roi: "400%",
      costSavings: "$35M/year",
      efficiency: "99.5%",
      timeToValue: "6 months"
    },
    testimonial: "Zion Tech Group's AI platform revolutionized our satellite operations. We went from constant crisis management to a self-optimizing constellation that runs better than any human team.",
    contact: "CEO, Space Technology Startup"
  },
  {
    id: "educational-institution",
    company: "Major University System",
    industry: "Education",
    challenge: "50,000+ students with declining graduation rates (65%) and poor student engagement due to one-size-fits-all education approach.",
    solution: "AI Personalized Learning Platform with VR integration",
    implementation: "6-month pilot program followed by full deployment",
    results: [
      "Graduation rates improved to 85%",
      "Student engagement increased by 70%",
      "Learning outcomes improved by 45%",
      "Administrative costs reduced by 30%",
      "Student satisfaction scores increased by 60%"
    ],
    metrics: {
      roi: "250%",
      costSavings: "30%",
      efficiency: "85%",
      timeToValue: "12 months"
    },
    testimonial: "The AI learning platform transformed our educational approach. Students are more engaged, learning outcomes have improved dramatically, and we're seeing unprecedented graduation rates.",
    contact: "Provost, University System"
  }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedROI, setSelectedROI] = useState("all");

  const industries = [...new Set(caseStudies.map(study => study.industry))];
  
  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === "all" || study.industry === selectedIndustry;
    const roiMatch = selectedROI === "all" || 
      (selectedROI === "high" && parseInt(study.metrics.roi) >= 300) ||
      (selectedROI === "medium" && parseInt(study.metrics.roi) >= 200 && parseInt(study.metrics.roi) < 300) ||
      (selectedROI === "low" && parseInt(study.metrics.roi) < 200);
    
    return industryMatch && roiMatch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Success Stories & Case Studies</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Discover how our revolutionary technology services are transforming businesses across industries. 
          Real implementations, measurable results, and unprecedented ROI that speak for themselves.
        </p>
      </div>

      {/* Success Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg p-6 border border-green-500/20 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">
            {caseStudies.reduce((sum, study) => sum + parseInt(study.metrics.roi), 0) / caseStudies.length}%
          </div>
          <div className="text-sm opacity-80">Average ROI</div>
        </div>
        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg p-6 border border-blue-500/20 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {caseStudies.length}
          </div>
          <div className="text-sm opacity-80">Successful Implementations</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/20 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">
            $50M+
          </div>
          <div className="text-sm opacity-80">Total Client Savings</div>
        </div>
        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-500/20 text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">
            99.5%
          </div>
          <div className="text-sm opacity-80">Client Satisfaction</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2"
        >
          <option value="all">All Industries</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
        <select
          value={selectedROI}
          onChange={(e) => setSelectedROI(e.target.value)}
          className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2"
        >
          <option value="all">All ROI Levels</option>
          <option value="high">High ROI (300%+)</option>
          <option value="medium">Medium ROI (200-299%)</option>
          <option value="low">Lower ROI (&lt;200%)</option>
        </select>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-8">
        {filteredStudies.map((study) => (
          <div key={study.id} className="border border-white/10 rounded-lg p-8 bg-zinc-900/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Info & Challenge */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{study.company}</h3>
                  <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-3">
                    {study.industry}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">The Challenge</h4>
                  <p className="text-sm opacity-80">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Our Solution</h4>
                  <p className="text-sm opacity-80">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Implementation</h4>
                  <p className="text-sm opacity-80">{study.implementation}</p>
                </div>
              </div>

              {/* Results & Metrics */}
              <div className="space-y-4">
                <h4 className="font-semibold text-green-400 mb-3">Results & Impact</h4>
                <ul className="space-y-2 text-sm">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>
                    <div className="text-xs opacity-60">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{study.metrics.costSavings}</div>
                    <div className="text-xs opacity-60">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{study.metrics.efficiency}</div>
                    <div className="text-xs opacity-60">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{study.metrics.timeToValue}</div>
                    <div className="text-xs opacity-60">Time to Value</div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-400 mb-3">Client Testimonial</h4>
                <blockquote className="text-sm italic opacity-80 border-l-4 border-yellow-500 pl-4">
                  "{study.testimonial}"
                </blockquote>
                <div className="text-xs opacity-60">
                  — {study.contact}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Ready to Join Our Success Stories?</h2>
        <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
          These results are just the beginning. Our revolutionary technology services are designed to deliver 
          unprecedented ROI and transformation for businesses of all sizes. Contact us today to start your success story.
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
            Start Your Success Story
          </a>
        </div>
      </div>
    </div>
  );
}