import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Autonomous E-commerce Platform",
      client: "Global Retail Chain",
      industry: "E-commerce",
      challenge: "Complex inventory management and customer personalization at scale",
      solution: "AI-powered autonomous system with real-time optimization",
      results: [
        "40% reduction in operational costs",
        "25% increase in customer satisfaction",
        "99.9% system uptime achieved",
        "Automated scaling during peak periods"
      ],
      technologies: ["AI/ML", "Cloud Native", "Kubernetes", "Real-time Analytics"],
      image: "🛒",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Smart Manufacturing Automation",
      client: "Industrial Manufacturer",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing production delays",
      solution: "Computer vision AI system with autonomous defect detection",
      results: [
        "90% reduction in quality control time",
        "95% accuracy in defect detection",
        "30% increase in production efficiency",
        "24/7 autonomous operation"
      ],
      technologies: ["Computer Vision", "IoT Sensors", "Edge AI", "Predictive Analytics"],
      image: "🏭",
      duration: "8 months"
    },
    {
      id: 3,
      title: "Financial Services AI Platform",
      client: "Regional Bank",
      industry: "Financial Services",
      challenge: "Fraud detection and risk assessment at scale",
      solution: "Autonomous AI system with continuous learning capabilities",
      results: [
        "99.5% fraud detection accuracy",
        "60% reduction in false positives",
        "Real-time risk assessment",
        "Compliance automation"
      ],
      technologies: ["Machine Learning", "Big Data", "Real-time Processing", "Security"],
      image: "🏦",
      duration: "10 months"
    },
    {
      id: 4,
      title: "Healthcare Data Analytics",
      client: "Hospital Network",
      industry: "Healthcare",
      challenge: "Patient data analysis and predictive healthcare insights",
      solution: "Autonomous healthcare analytics platform",
      results: [
        "30% improvement in patient outcomes",
        "Automated diagnosis assistance",
        "Predictive health risk assessment",
        "HIPAA-compliant data processing"
      ],
      technologies: ["Healthcare AI", "Data Privacy", "Predictive Analytics", "Cloud Security"],
      image: "🏥",
      duration: "12 months"
    },
    {
      id: 5,
      title: "Smart City Infrastructure",
      client: "Municipal Government",
      industry: "Government",
      challenge: "Traffic management and urban planning optimization",
      solution: "Autonomous traffic control and urban analytics system",
      results: [
        "35% reduction in traffic congestion",
        "20% improvement in air quality",
        "Real-time urban planning insights",
        "Automated emergency response"
      ],
      technologies: ["IoT", "Smart Cities", "Real-time Analytics", "Edge Computing"],
      image: "🏙️",
      duration: "18 months"
    },
    {
      id: 6,
      title: "Logistics Optimization Platform",
      client: "International Shipping Company",
      industry: "Logistics",
      challenge: "Complex supply chain optimization and route planning",
      solution: "Autonomous logistics platform with AI-driven optimization",
      results: [
        "25% reduction in delivery times",
        "20% decrease in fuel costs",
        "Real-time route optimization",
        "Automated inventory management"
      ],
      technologies: ["Supply Chain AI", "Route Optimization", "IoT Tracking", "Predictive Analytics"],
      image: "🚚",
      duration: "9 months"
    }
  ];

  const industries = ["All", "E-commerce", "Manufacturing", "Financial Services", "Healthcare", "Government", "Logistics"];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing Zion Tech Group's autonomous technology solutions across various industries." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how our autonomous technology solutions transform businesses and drive innovation
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{study.image}</div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                        {study.industry}
                      </span>
                      <p className="text-sm text-white/60 mt-2">{study.duration}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-cyan-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Challenge</h4>
                    <p className="text-white/70 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Solution</h4>
                    <p className="text-white/70 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-purple-400">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-white/70 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    View Full Case Study
                  </button>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-4 text-cyan-400">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can drive innovation, improve efficiency, 
                  and create competitive advantages for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Schedule a Consultation
                  </button>
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}