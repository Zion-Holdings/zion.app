import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'autonomous-content-factory',
      title: 'Autonomous Content Factory',
      client: 'Global Media Company',
      industry: 'Media & Entertainment',
      challenge: 'Need for scalable, 24/7 content generation to support multiple digital platforms',
      solution: 'Implemented AI-powered autonomous content generation system with real-time optimization',
      results: [
        'Generated 2,960+ high-quality content pieces',
        'Increased content production by 300%',
        'Reduced content creation costs by 60%',
        'Achieved 40% higher engagement rates'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Content Optimization', 'Automation'],
      featured: true
    },
    {
      id: 'self-healing-infrastructure',
      title: 'Self-Healing Infrastructure',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Frequent downtime and manual intervention required for system maintenance',
      solution: 'Deployed comprehensive redundancy system with automated monitoring and recovery',
      results: [
        'Achieved 99.9% uptime',
        'Reduced manual intervention by 90%',
        'Automated failover in under 30 seconds',
        'Scaled to handle 10x traffic spikes'
      ],
      technologies: ['Cloud Infrastructure', 'Automated Monitoring', 'Failover Systems', 'Performance Optimization'],
      featured: true
    },
    {
      id: 'ai-powered-analytics',
      title: 'AI-Powered Analytics Platform',
      client: 'Financial Services Firm',
      industry: 'Financial Services',
      challenge: 'Complex data analysis requiring weeks of manual processing',
      solution: 'Built intelligent analytics platform with predictive modeling and automated insights',
      results: [
        'Reduced analysis time from weeks to hours',
        'Improved prediction accuracy by 35%',
        'Automated 80% of routine reporting',
        'Generated $2M+ in additional revenue'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Data Processing', 'Automation'],
      featured: false
    },
    {
      id: 'smart-workflow-automation',
      title: 'Smart Workflow Automation',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Manual patient data processing causing delays and errors',
      solution: 'Implemented intelligent workflow automation with AI-powered decision support',
      results: [
        'Reduced processing time by 70%',
        'Eliminated 95% of data entry errors',
        'Improved patient satisfaction scores',
        'Freed up staff for patient care'
      ],
      technologies: ['Workflow Automation', 'AI Decision Support', 'Data Integration', 'Process Optimization'],
      featured: false
    },
    {
      id: 'autonomous-marketing-system',
      title: 'Autonomous Marketing System',
      client: 'Technology Startup',
      industry: 'Technology',
      challenge: 'Limited marketing resources and need for consistent brand presence',
      solution: 'Created autonomous marketing system with AI-driven content and campaign optimization',
      results: [
        'Generated 500+ marketing assets automatically',
        'Increased lead generation by 150%',
        'Optimized campaigns in real-time',
        'Reduced marketing overhead by 40%'
      ],
      technologies: ['Marketing Automation', 'AI Content Generation', 'Campaign Optimization', 'Analytics'],
      featured: false
    },
    {
      id: 'intelligent-customer-support',
      title: 'Intelligent Customer Support',
      client: 'SaaS Company',
      industry: 'Software as a Service',
      challenge: 'High support ticket volume overwhelming customer service team',
      solution: 'Deployed AI-powered support system with automated ticket routing and resolution',
      results: [
        'Resolved 75% of tickets automatically',
        'Reduced response time by 80%',
        'Improved customer satisfaction by 25%',
        'Scaled support without adding staff'
      ],
      technologies: ['AI Support', 'Natural Language Processing', 'Ticket Automation', 'Customer Experience'],
      featured: false
    }
  ];

  const industries = ['All', 'Media & Entertainment', 'E-commerce', 'Financial Services', 'Healthcare', 'Technology', 'Software as a Service'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing Zion Tech Group's autonomous technology solutions across various industries." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and case studies showcasing our autonomous technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world case studies demonstrating how Zion Tech Group's autonomous technology 
                solutions drive measurable business results across industries
              </p>
            </header>
            
            {/* Featured Case Studies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Case Studies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.filter(study => study.featured).map(study => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {study.industry}
                      </span>
                      <span className="text-white/60 text-sm">Featured</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-white/70 mb-4"><strong>Client:</strong> {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-white/80 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-fuchsia-400 mb-2">Solution</h4>
                      <p className="text-white/80 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                      <ul className="space-y-1 text-sm text-white/80">
                        {study.results.map((result, index) => (
                          <li key={index}>• {result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      Read Full Case Study
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Industry Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map(industry => (
                  <button
                    key={industry}
                    className="px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </section>
            
            {/* All Case Studies Grid */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map(study => (
                  <article key={study.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-3"><strong>Client:</strong> {study.client}</p>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-400 text-sm mb-2">Key Results</h4>
                      <ul className="space-y-1 text-xs text-white/70">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index}>• {result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.slice(0, 2).map((tech, index) => (
                          <span key={index} className="px-1 py-0.5 bg-blue-400/20 text-blue-400 text-xs rounded border border-blue-400/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={`/case-studies/${study.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let Zion Tech Group help you achieve similar results with our autonomous technology 
                  solutions. Our proven track record speaks for itself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Start Your Project
                  </a>
                  <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                    Explore Our Services
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}