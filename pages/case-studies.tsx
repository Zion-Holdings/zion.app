import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const featuredCaseStudies = [
    {
      title: "Healthcare AI Revolution: 40% Faster Diagnosis",
      client: "MetroHealth Systems",
      industry: "Healthcare",
      challenge: "Reduce diagnostic time while maintaining accuracy in medical imaging",
      solution: "Implemented AI-powered computer vision system for medical image analysis",
      results: [
        "40% reduction in diagnostic time",
        "95% accuracy maintained",
        "30% improvement in early detection rates",
        "Cost savings of $2.3M annually"
      ],
      technologies: ["Computer Vision", "Deep Learning", "Medical AI", "Cloud Infrastructure"],
      image: "🏥",
      featured: true
    },
    {
      title: "Quantum-Secure Financial Trading Platform",
      client: "Global Capital Markets",
      industry: "Financial Services",
      challenge: "Develop ultra-secure trading platform resistant to quantum attacks",
      solution: "Built quantum-resistant cryptography and quantum-enhanced trading algorithms",
      results: [
        "99.99% security against quantum threats",
        "15% improvement in trading efficiency",
        "Zero security breaches in 2 years",
        "Regulatory compliance achieved"
      ],
      technologies: ["Quantum Cryptography", "Post-Quantum Algorithms", "Blockchain", "High-Frequency Trading"],
      image: "🏦",
      featured: true
    },
    {
      title: "Manufacturing 4.0: AI-Powered Quality Control",
      client: "TechManufacturing Inc.",
      industry: "Manufacturing",
      challenge: "Implement real-time quality control across 15 production facilities",
      solution: "Deployed AI vision systems and predictive maintenance algorithms",
      results: [
        "99.7% defect detection rate",
        "25% reduction in production downtime",
        "20% improvement in product quality",
        "ROI of 300% in first year"
      ],
      technologies: ["Computer Vision", "IoT Sensors", "Predictive Analytics", "Edge Computing"],
      image: "🏭",
      featured: true
    }
  ];

  const additionalCaseStudies = [
    {
      title: "Retail AI Personalization Engine",
      client: "ShopSmart Retail",
      industry: "Retail",
      challenge: "Create personalized shopping experiences for 2M+ customers",
      solution: "AI-powered recommendation system with real-time behavioral analysis",
      results: ["35% increase in conversion rates", "28% higher average order value", "Improved customer satisfaction"],
      technologies: ["Machine Learning", "Real-time Analytics", "Personalization Engine"],
      image: "🛍️"
    },
    {
      title: "Government Data Security Platform",
      client: "Federal Data Services",
      industry: "Government",
      challenge: "Secure sensitive government data with quantum-resistant encryption",
      solution: "Multi-layered security platform with quantum cryptography",
      results: ["100% compliance with security standards", "Zero data breaches", "Streamlined access management"],
      technologies: ["Quantum Security", "Zero-Trust Architecture", "Compliance Management"],
      image: "🏛️"
    },
    {
      title: "Energy Grid Optimization",
      client: "PowerGrid Solutions",
      industry: "Energy",
      challenge: "Optimize energy distribution across smart grid infrastructure",
      solution: "AI-powered grid management with predictive load balancing",
      results: ["22% reduction in energy waste", "15% improvement in grid stability", "Cost savings of $5M annually"],
      technologies: ["Smart Grid AI", "Predictive Analytics", "IoT Integration"],
      image: "⚡"
    },
    {
      title: "Education AI Tutoring System",
      client: "EduTech Academy",
      industry: "Education",
      challenge: "Provide personalized learning experiences for 50,000+ students",
      solution: "Adaptive AI tutoring system with natural language processing",
      results: ["40% improvement in test scores", "Personalized learning paths", "24/7 student support"],
      technologies: ["NLP", "Adaptive Learning", "Educational AI"],
      image: "🎓"
    }
  ];

  const industries = [
    "All Industries",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Retail",
    "Government",
    "Energy",
    "Education",
    "Technology"
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories of Zion Tech Group's AI, quantum computing, and technology solutions. See how we've transformed businesses across industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, quantum computing solutions, technology transformation" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Discover how Zion Tech Group has transformed businesses across industries 
              with cutting-edge AI, quantum computing, and innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#featured-cases" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Featured Cases
              </Link>
              <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section id="featured-cases" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Case Studies</h2>
            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-8xl mb-4">{study.image}</div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-400">Client</span>
                          <p className="font-semibold">{study.client}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Industry</span>
                          <p className="font-semibold">{study.industry}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Technologies</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-300 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-green-300 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <span className="text-green-400 mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">More Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalCaseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-6xl mb-4">{study.image}</div>
                  <div className="mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">Client: {study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-300 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <span className="text-green-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-yellow-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Impact by the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">150+</div>
                <p className="text-gray-300">Successful Projects</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">25+</div>
                <p className="text-gray-300">Industries Served</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">$50M+</div>
                <p className="text-gray-300">Client Value Generated</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">98%</div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Zion Tech Group can help transform your business 
              with cutting-edge AI, quantum computing, and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <Link href="/services" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}