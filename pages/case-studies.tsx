import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform Transformation',
      client: 'Global Retail Chain',
      industry: 'Retail & E-commerce',
      challenge: 'Managing traffic spikes and ensuring seamless shopping experiences during peak periods',
      solution: 'Implemented autonomous cloud infrastructure with AI-powered auto-scaling and self-healing capabilities',
      results: [
        '300% increase in content production',
        '45% improvement in SEO rankings',
        '60% reduction in content creation costs',
        '99.9% uptime during Black Friday sales'
      ],
      technologies: ['AWS', 'Kubernetes', 'Machine Learning', 'Auto-scaling'],
      featured: true
    },
    {
      id: 'financial-services',
      title: 'Financial Services Automation',
      client: 'International Bank',
      industry: 'Financial Services',
      challenge: 'Ensuring 99.99% uptime while maintaining security and compliance standards',
      solution: 'Deployed autonomous security systems with real-time fraud detection and automated compliance reporting',
      results: [
        '99.99% uptime achieved',
        'Real-time fraud detection with 95% accuracy',
        'Automated compliance reporting reduced manual work by 80%',
        'Risk assessment automation improved response time by 70%'
      ],
      technologies: ['AI/ML', 'Blockchain', 'Real-time Analytics', 'Security Automation'],
      featured: false
    },
    {
      id: 'healthcare-platform',
      title: 'Healthcare Platform Optimization',
      client: 'Healthcare Technology Provider',
      industry: 'Healthcare',
      challenge: 'Managing patient data securely while ensuring fast access for healthcare providers',
      solution: 'Built autonomous data management system with AI-powered security and performance optimization',
      results: [
        'Patient data access improved by 200%',
        'Security incidents reduced by 90%',
        'System performance increased by 150%',
        'Compliance audit time reduced by 75%'
      ],
      technologies: ['HIPAA Compliance', 'AI Security', 'Data Analytics', 'Performance Optimization'],
      featured: false
    },
    {
      id: 'manufacturing-automation',
      title: 'Manufacturing Process Automation',
      client: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Optimizing production processes and reducing downtime through predictive maintenance',
      solution: 'Implemented IoT sensors with AI-powered predictive analytics and autonomous maintenance scheduling',
      results: [
        'Production efficiency increased by 35%',
        'Unplanned downtime reduced by 60%',
        'Maintenance costs decreased by 40%',
        'Quality control accuracy improved by 25%'
      ],
      technologies: ['IoT', 'Predictive Analytics', 'Machine Learning', 'Automation'],
      featured: false
    }
  ];

  const industries = ['All', 'Retail & E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories & Results</title>
        <meta name="description" content="Explore real-world success stories and measurable results from Zion Tech Group's autonomous automation implementations across various industries." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and measurable results from our autonomous automation implementations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </a>
          </nav>

          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real results from real clients. Discover how Zion Tech Group's autonomous automation 
              solutions have transformed businesses across industries.
            </p>
          </section>

          {/* Featured Case Study */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Success Story</h2>
            {caseStudies.filter(cs => cs.featured).map(caseStudy => (
              <div key={caseStudy.id} className="bg-gradient-to-br from-white/15 to-white/5 rounded-2xl p-8 border border-cyan-400/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {caseStudy.industry}
                      </span>
                      <span className="text-white/60 text-sm">Featured Case Study</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{caseStudy.title}</h3>
                    <p className="text-lg text-white/80 mb-6">
                      <strong>Client:</strong> {caseStudy.client}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">The Challenge</h4>
                      <p className="text-white/70">{caseStudy.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Our Solution</h4>
                      <p className="text-white/70">{caseStudy.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-green-400">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-green-400">Measurable Results</h4>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="text-green-400 text-xl">✓</div>
                          <p className="text-white/80">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* All Case Studies */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.filter(cs => !cs.featured).map(caseStudy => (
                <div key={caseStudy.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-cyan-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{caseStudy.title}</h3>
                  <p className="text-white/70 mb-4">
                    <strong>Client:</strong> {caseStudy.client}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">Challenge</h4>
                    <p className="text-white/70 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Solution</h4>
                    <p className="text-white/70 text-sm">{caseStudy.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Key Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="text-sm text-white/60 flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the ranks of successful organizations that have transformed their operations 
                with Zion Tech Group's autonomous automation solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105">
                  Start Your Project
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  Explore Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}