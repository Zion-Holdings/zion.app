import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Clock, DollarSign, Target, Award, Building, Globe, Zap, Shield } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Company: AI-Powered Supply Chain Optimization",
      company: "TechCorp Industries",
      industry: "Manufacturing",
      challenge: "Complex supply chain with 50+ suppliers across 15 countries, leading to 30% inventory waste and delayed deliveries.",
      solution: "Implemented AI-powered demand forecasting, automated supplier management, and real-time inventory tracking.",
      results: [
        "Reduced inventory costs by 45%",
        "Improved delivery times by 60%",
        "Increased supplier efficiency by 35%",
        "ROI of 320% within 18 months"
      ],
      metrics: {
        costReduction: "45%",
        efficiencyGain: "60%",
        roi: "320%",
        timeline: "18 months"
      },
      icon: <Building className="w-8 h-8" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Financial Services Firm: Digital Transformation & Customer Experience",
      company: "FinServe Bank",
      industry: "Financial Services",
      challenge: "Outdated legacy systems causing 40% customer churn and 25% operational inefficiency.",
      solution: "Complete digital transformation including cloud migration, AI-powered customer service, and mobile-first banking platform.",
      results: [
        "Customer satisfaction increased to 94%",
        "Operational costs reduced by 30%",
        "New customer acquisition up 150%",
        "Digital adoption rate: 87%"
      ],
      metrics: {
        costReduction: "30%",
        efficiencyGain: "150%",
        roi: "280%",
        timeline: "24 months"
      },
      icon: <TrendingUp className="w-8 h-8" />,
      color: "green"
    },
    {
      id: 3,
      title: "Healthcare Provider: AI-Driven Patient Care & Operational Excellence",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Patient wait times averaging 45 minutes, 20% diagnostic errors, and inefficient resource allocation.",
      solution: "AI-powered diagnostic assistance, automated appointment scheduling, and predictive analytics for resource optimization.",
      results: [
        "Patient wait times reduced by 70%",
        "Diagnostic accuracy improved to 98%",
        "Resource utilization increased by 40%",
        "Patient satisfaction: 96%"
      ],
      metrics: {
        costReduction: "25%",
        efficiencyGain: "70%",
        roi: "410%",
        timeline: "12 months"
      },
      icon: <Shield className="w-8 h-8" />,
      color: "purple"
    },
    {
      id: 4,
      title: "Retail Chain: Omnichannel Customer Experience & Inventory Management",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Disconnected online/offline experiences, 35% stockouts, and poor customer personalization.",
      solution: "Unified omnichannel platform with AI-powered inventory management and personalized customer recommendations.",
      results: [
        "Online sales increased by 200%",
        "Stockout rates reduced to 5%",
        "Customer lifetime value up 80%",
        "Cross-channel conversion: 65%"
      ],
      metrics: {
        costReduction: "20%",
        efficiencyGain: "200%",
        roi: "350%",
        timeline: "16 months"
      },
      icon: <Globe className="w-8 h-8" />,
      color: "orange"
    },
    {
      id: 5,
      title: "Technology Startup: Micro SAAS Platform Scaling",
      company: "CloudFlow",
      industry: "Technology",
      challenge: "Manual processes limiting growth, 50% customer support response time, and scalability bottlenecks.",
      solution: "Automated workflow platform with AI-powered customer support and scalable cloud infrastructure.",
      results: [
        "Customer support response time: 2 minutes",
        "Platform scalability: 10x increase",
        "Customer retention: 95%",
        "Monthly recurring revenue: 300% growth"
      ],
      metrics: {
        costReduction: "40%",
        efficiencyGain: "10x",
        roi: "500%",
        timeline: "10 months"
      },
      icon: <Zap className="w-8 h-8" />,
      color: "indigo"
    },
    {
      id: 6,
      title: "Energy Company: Smart Grid & Predictive Maintenance",
      company: "PowerGrid Solutions",
      industry: "Energy",
      challenge: "Reactive maintenance causing 15% downtime, inefficient energy distribution, and high operational costs.",
      solution: "IoT-enabled smart grid with AI-powered predictive maintenance and real-time energy optimization.",
      results: [
        "Downtime reduced by 85%",
        "Energy efficiency improved by 40%",
        "Maintenance costs down 50%",
        "Grid reliability: 99.9%"
      ],
      metrics: {
        costReduction: "50%",
        efficiencyGain: "85%",
        roi: "380%",
        timeline: "20 months"
      },
      icon: <Target className="w-8 h-8" />,
      color: "red"
    }
  ];

  const industries = [
    "All Industries",
    "Manufacturing",
    "Financial Services",
    "Healthcare",
    "Retail",
    "Technology",
    "Energy"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how leading organizations across industries have transformed their businesses 
              with Zion Tech Group's innovative solutions. Real results, measurable outcomes, and proven success.
            </p>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`text-${study.color}-600`}>
                  {study.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {study.title}
              </h3>
              
              <p className="text-sm font-medium text-blue-600 mb-3">
                {study.company}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{study.metrics.costReduction}</div>
                  <div className="text-xs text-gray-500">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{study.metrics.efficiencyGain}</div>
                  <div className="text-xs text-gray-500">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{study.metrics.roi}</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{study.metrics.timeline}</div>
                  <div className="text-xs text-gray-500">Timeline</div>
                </div>
              </div>
              
              <Link
                to={`/case-studies/${study.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors w-full justify-center"
              >
                <Award className="w-4 h-4" />
                View Full Case Study
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful organizations that have transformed their businesses 
              with Zion Tech Group. Let's discuss how we can help you achieve similar results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;