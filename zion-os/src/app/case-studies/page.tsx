import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "AI-Powered Autonomous Trading System",
      client: "Global Financial Services Corp",
      industry: "Financial Services",
      challenge: "The client needed to process massive amounts of market data in real-time to make split-second trading decisions while managing risk across multiple asset classes.",
      solution: "We developed a comprehensive AI-powered autonomous trading system that combines machine learning algorithms, quantum computing optimization, and real-time risk management.",
      results: [
        "Increased trading efficiency by 340%",
        "Reduced risk exposure by 65%",
        "Generated $2.8B in additional revenue",
        "Achieved 99.97% uptime"
      ],
      technologies: ["Machine Learning", "Quantum Computing", "Real-time Analytics", "Risk Management"],
      testimonial: {
        quote: "Zion Tech Group's AI trading system has revolutionized our operations. The autonomous decision-making capabilities have given us a significant competitive advantage in the market.",
        author: "Sarah Johnson",
        role: "Chief Technology Officer",
        company: "Global Financial Services Corp"
      },
      image: "/api/placeholder/600/400"
    },
    {
      title: "Quantum-Enhanced Drug Discovery Platform",
      client: "BioTech Innovations Ltd",
      industry: "Healthcare & Biotechnology",
      challenge: "Traditional drug discovery methods were too slow and expensive, taking years to identify potential compounds and costing millions in research and development.",
      solution: "We built a quantum-enhanced drug discovery platform that uses quantum algorithms to simulate molecular interactions and predict drug efficacy with unprecedented accuracy.",
      results: [
        "Accelerated drug discovery by 8x",
        "Reduced R&D costs by 60%",
        "Identified 3 breakthrough compounds",
        "Shortened time to market by 4 years"
      ],
      technologies: ["Quantum Computing", "Molecular Simulation", "AI/ML", "Bioinformatics"],
      testimonial: {
        quote: "The quantum platform has transformed our research capabilities. We're now able to explore drug candidates that were previously impossible to analyze.",
        author: "Dr. Michael Chen",
        role: "Head of Research",
        company: "BioTech Innovations Ltd"
      },
      image: "/api/placeholder/600/400"
    },
    {
      title: "Autonomous Manufacturing Intelligence System",
      client: "Advanced Manufacturing Solutions",
      industry: "Manufacturing",
      challenge: "The manufacturing facility was experiencing 30% production downtime due to equipment failures and inefficient production scheduling.",
      solution: "We implemented an autonomous manufacturing intelligence system that combines IoT sensors, AI predictive maintenance, and autonomous decision-making for production optimization.",
      results: [
        "Reduced downtime by 85%",
        "Increased production efficiency by 45%",
        "Saved $12M in operational costs",
        "Improved product quality by 28%"
      ],
      technologies: ["IoT", "Predictive Analytics", "Computer Vision", "Autonomous Systems"],
      testimonial: {
        quote: "The autonomous system has completely transformed our manufacturing operations. We're now running at peak efficiency with minimal human intervention.",
        author: "Robert Martinez",
        role: "Plant Manager",
        company: "Advanced Manufacturing Solutions"
      },
      image: "/api/placeholder/600/400"
    },
    {
      title: "AI-Powered Cybersecurity Defense Network",
      client: "National Security Agency",
      industry: "Government & Defense",
      challenge: "The agency needed to detect and respond to sophisticated cyber threats in real-time across a massive network infrastructure with zero tolerance for false positives.",
      solution: "We developed an AI-powered cybersecurity defense network that uses advanced threat detection algorithms, behavioral analysis, and autonomous response capabilities.",
      results: [
        "Detected 99.9% of threats",
        "Reduced false positives by 95%",
        "Response time improved by 200x",
        "Prevented $50M+ in potential damages"
      ],
      technologies: ["Threat Intelligence", "Behavioral Analytics", "Autonomous Response", "Zero Trust Security"],
      testimonial: {
        quote: "Zion Tech Group's cybersecurity solution has given us unprecedented visibility and response capabilities. It's like having an army of security experts working 24/7.",
        author: "Director Smith",
        role: "Cybersecurity Division",
        company: "National Security Agency"
      },
      image: "/api/placeholder/600/400"
    },
    {
      title: "Autonomous Supply Chain Optimization",
      client: "Global Logistics Network",
      industry: "Logistics & Transportation",
      challenge: "The logistics network was struggling with route optimization, inventory management, and delivery scheduling across 50+ countries, leading to delays and increased costs.",
      solution: "We created an autonomous supply chain optimization system that uses AI algorithms to predict demand, optimize routes, and autonomously adjust logistics operations in real-time.",
      results: [
        "Reduced delivery times by 40%",
        "Lowered logistics costs by 35%",
        "Improved inventory accuracy to 99.2%",
        "Increased customer satisfaction by 60%"
      ],
      technologies: ["Supply Chain AI", "Route Optimization", "Predictive Analytics", "Autonomous Logistics"],
      testimonial: {
        quote: "The autonomous supply chain system has revolutionized our operations. We're now able to deliver faster, cheaper, and more reliably than ever before.",
        author: "Lisa Thompson",
        role: "Chief Operations Officer",
        company: "Global Logistics Network"
      },
      image: "/api/placeholder/600/400"
    },
    {
      title: "Quantum Machine Learning for Climate Prediction",
      client: "Climate Research Institute",
      industry: "Environmental Science",
      challenge: "Climate scientists needed to process massive datasets and run complex climate models to predict extreme weather events and climate changes with higher accuracy.",
      solution: "We developed a quantum machine learning platform that combines quantum computing power with advanced ML algorithms to process climate data and run predictive models.",
      results: [
        "Improved prediction accuracy by 75%",
        "Reduced computation time by 90%",
        "Enabled real-time climate monitoring",
        "Supported 15+ research publications"
      ],
      technologies: ["Quantum ML", "Climate Modeling", "Big Data Analytics", "Real-time Processing"],
      testimonial: {
        quote: "The quantum ML platform has opened new frontiers in climate research. We can now process data that was previously impossible to analyze.",
        author: "Dr. Emily Rodriguez",
        role: "Senior Climate Scientist",
        company: "Climate Research Institute"
      },
      image: "/api/placeholder/600/400"
    }
  ];

  const industries = ["All Industries", "Financial Services", "Healthcare", "Manufacturing", "Government", "Logistics", "Environmental Science"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how our innovative solutions have transformed businesses across industries, delivering measurable results and driving sustainable growth.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  industry === "All Industries"
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-400">Client: {study.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <blockquote className="text-gray-300 text-sm italic mb-3">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{study.testimonial.author}</div>
                      <div className="text-gray-400 text-xs">{study.testimonial.role}, {study.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Metrics</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The numbers that demonstrate our commitment to delivering exceptional value and results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">$2.8B+</div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our innovative solutions can transform your business and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}