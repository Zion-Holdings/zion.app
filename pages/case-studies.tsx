import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Automation Revolution",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service processes were consuming 40+ hours per week and causing delays in order fulfillment.",
      solution: "Implemented autonomous inventory management system with AI-powered demand forecasting and automated customer service chatbots.",
      results: [
        "Reduced manual work by 85%",
        "Improved order fulfillment speed by 60%",
        "Increased customer satisfaction by 35%",
        "ROI achieved in 6 months"
      ],
      technologies: ["AI/ML", "Process Automation", "Chatbots", "Predictive Analytics"]
    },
    {
      title: "Manufacturing Process Optimization",
      company: "GlobalManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Production line inefficiencies and unplanned downtime were costing $500K annually in lost productivity and quality issues.",
      solution: "Deployed autonomous monitoring system with predictive maintenance and real-time quality control automation.",
      results: [
        "Reduced unplanned downtime by 70%",
        "Improved product quality by 25%",
        "Increased production efficiency by 30%",
        "Annual cost savings of $350K"
      ],
      technologies: ["IoT Sensors", "Predictive Analytics", "Quality Control AI", "Real-time Monitoring"]
    },
    {
      title: "Financial Services Automation",
      company: "FinTech Solutions Ltd.",
      industry: "Financial Services",
      challenge: "Manual compliance checks and fraud detection were slow, error-prone, and couldn't scale with business growth.",
      solution: "Built autonomous compliance monitoring system with AI-powered fraud detection and automated reporting workflows.",
      results: [
        "Reduced compliance processing time by 90%",
        "Improved fraud detection accuracy by 45%",
        "Eliminated 95% of manual errors",
        "Scaled operations 5x without additional staff"
      ],
      technologies: ["Machine Learning", "Compliance Automation", "Fraud Detection", "Workflow Automation"]
    },
    {
      title: "Healthcare Process Streamlining",
      company: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Patient scheduling, billing, and administrative processes were fragmented, leading to long wait times and billing errors.",
      solution: "Integrated autonomous patient management system with intelligent scheduling, automated billing, and predictive analytics.",
      results: [
        "Reduced patient wait times by 50%",
        "Eliminated 80% of billing errors",
        "Improved staff productivity by 40%",
        "Enhanced patient satisfaction scores"
      ],
      technologies: ["AI Scheduling", "Automated Billing", "Predictive Analytics", "Integration APIs"]
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories of AI automation and autonomous systems implementation. See how Zion Tech Group has transformed businesses across industries." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories of AI automation implementation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how autonomous systems and AI automation transform businesses
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2 text-white">{study.title}</h2>
                  <p className="text-fuchsia-400 font-semibold mb-4">{study.company}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-cyan-400">The Challenge</h3>
                    <p className="text-white/70 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Our Solution</h3>
                    <p className="text-white/70 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-green-400">Results</h3>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-white/70 text-sm flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6">
                  Join the hundreds of companies that have already revolutionized their operations with autonomous systems and AI automation
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Start Your Project
                  </a>
                  <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Why Choose Zion Tech Group?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-white/70 text-sm">Track record of delivering measurable business value across industries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
                    <p className="text-white/70 text-sm">Deep knowledge in autonomous systems and machine learning</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2">Rapid Implementation</h3>
                    <p className="text-white/70 text-sm">Quick deployment with continuous optimization and support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}