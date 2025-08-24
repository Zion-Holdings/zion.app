import Link from 'next/link';

export default function SolutionsPage() {
  const caseStudies = [
    {
      title: "AI-Powered Manufacturing Optimization",
      industry: "Manufacturing",
      challenge: "A leading automotive manufacturer faced production inefficiencies and quality control issues, resulting in 15% waste and delayed deliveries.",
      solution: "Implemented our AI Autonomous Manufacturing System with real-time quality monitoring and predictive maintenance capabilities.",
      results: [
        "30% reduction in production waste",
        "25% improvement in quality control accuracy",
        "40% decrease in unplanned downtime",
        "$2.5M annual cost savings"
      ],
      image: "🏭"
    },
    {
      title: "Autonomous Business Operations Platform",
      industry: "Financial Services",
      challenge: "A regional bank struggled with manual processes, compliance monitoring, and customer service efficiency across 50+ branches.",
      solution: "Deployed our AI Autonomous Business Manager with integrated compliance monitoring and customer service automation.",
      results: [
        "60% reduction in manual processing time",
        "99.9% compliance accuracy",
        "45% improvement in customer satisfaction",
        "3x faster decision-making processes"
      ],
      image: "🏦"
    },
    {
      title: "Quantum Computing for Drug Discovery",
      industry: "Healthcare & Biotech",
      challenge: "A pharmaceutical company needed to accelerate drug discovery processes and molecular modeling for complex diseases.",
      solution: "Implemented our Quantum Computing Platform with specialized AI algorithms for molecular simulation and drug discovery.",
      results: [
        "10x faster molecular modeling",
        "85% improvement in drug candidate accuracy",
        "50% reduction in research costs",
        "Accelerated time-to-market by 2 years"
      ],
      image: "💊"
    }
  ];

  const industrySolutions = [
    {
      industry: "Healthcare",
      solutions: [
        "AI Autonomous Healthcare Physician",
        "Medical Imaging Analysis",
        "Patient Care Optimization",
        "Drug Discovery Platform"
      ],
      icon: "🏥"
    },
    {
      industry: "Manufacturing",
      solutions: [
        "AI Autonomous Manufacturing",
        "Quality Control Systems",
        "Supply Chain Optimization",
        "Predictive Maintenance"
      ],
      icon: "🏭"
    },
    {
      industry: "Financial Services",
      solutions: [
        "AI Business Intelligence",
        "Risk Assessment Systems",
        "Fraud Detection",
        "Customer Service Automation"
      ],
      icon: "💰"
    },
    {
      industry: "Logistics & Transportation",
      solutions: [
        "AI Autonomous Logistics",
        "Route Optimization",
        "Fleet Management",
        "Inventory Control"
      ],
      icon: "🚚"
    },
    {
      industry: "Technology",
      solutions: [
        "AI Code Review",
        "DevOps Automation",
        "Security Systems",
        "Performance Monitoring"
      ],
      icon: "💻"
    },
    {
      industry: "Research & Development",
      solutions: [
        "AI Autonomous Research Assistant",
        "Data Analysis Platforms",
        "Simulation Systems",
        "Knowledge Management"
      ],
      icon: "🔬"
    }
  ];

  const technologies = [
    {
      name: "AI Autonomous Systems",
      description: "Self-managing AI systems that operate independently and make intelligent decisions.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving and optimization.",
      features: ["Quantum Algorithms", "Quantum Machine Learning", "Optimization", "Simulation"]
    },
    {
      name: "Enterprise AI Platforms",
      description: "Scalable AI solutions designed for enterprise environments and large-scale operations.",
      features: ["Scalability", "Security", "Integration", "Analytics"]
    },
    {
      name: "Autonomous Business Intelligence",
      description: "Intelligent systems that analyze data and provide actionable business insights.",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "Automated Reporting"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven AI solutions that transform businesses across industries. 
            Discover how our autonomous systems and quantum computing capabilities drive real results.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world examples of how our AI solutions have transformed businesses and driven measurable results.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="text-6xl mb-4">{study.image}</div>
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 py-2 inline-block">
                    <span className="text-blue-300 text-sm font-medium">{study.industry}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Industry Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored AI solutions designed for specific industry challenges and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySolutions.map((industry, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
              <ul className="space-y-2">
                {industry.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies that power our AI solutions and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
              <p className="text-gray-300 mb-4">{tech.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Implementation Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology ensures successful deployment and maximum ROI from your AI investment.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">
                We analyze your business needs and identify the best AI solutions for your specific challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">
                Our team designs a customized solution architecture tailored to your business requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
              <p className="text-gray-300 text-sm">
                We implement the solution with minimal disruption to your existing operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
              <p className="text-gray-300 text-sm">
                Continuous monitoring and optimization ensure maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}