import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      challenge: 'Inefficient production lines with frequent breakdowns and quality issues',
      solution: 'Deployed AI-powered predictive maintenance and quality control systems',
      impact: 'Transformed a struggling manufacturing facility into a model of efficiency',
      featured: true
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      challenge: 'Unable to meet client demand for high-quality content at scale',
      solution: 'Implemented AI-powered content generation with human oversight',
      impact: 'Became the leading content agency in their market segment',
      featured: true
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      challenge: 'Excessive cloud costs and frequent service outages',
      solution: 'Deployed autonomous cloud management and optimization systems',
      impact: 'Achieved enterprise-grade reliability at startup costs',
      featured: true
    },
    {
      id: 'financial-fraud-detection',
      title: 'AI-Powered Financial Fraud Detection',
      company: 'Regional Bank',
      industry: 'Financial Services',
      results: '95% fraud detection accuracy, 80% reduction in false positives',
      description: 'Implementing real-time fraud detection using machine learning.',
      challenge: 'High fraud losses and manual review processes',
      solution: 'Deployed real-time AI fraud detection with human oversight',
      impact: 'Protected millions in customer assets while improving user experience',
      featured: false
    },
    {
      id: 'healthcare-diagnostic-support',
      title: 'Healthcare Diagnostic Support System',
      company: 'Regional Hospital Network',
      industry: 'Healthcare',
      results: '30% faster diagnosis, 25% improvement in accuracy',
      description: 'AI-powered diagnostic support for medical professionals.',
      challenge: 'Long diagnosis times and diagnostic accuracy issues',
      solution: 'Implemented AI diagnostic support with physician validation',
      impact: 'Improved patient outcomes and reduced healthcare costs',
      featured: false
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Optimization & Forecasting',
      company: 'Retail Chain',
      industry: 'Retail',
      results: '35% reduction in inventory costs, 90% forecast accuracy',
      description: 'AI-driven supply chain optimization and demand forecasting.',
      challenge: 'Excess inventory and stockouts affecting profitability',
      solution: 'Deployed AI-powered demand forecasting and inventory optimization',
      impact: 'Achieved industry-leading inventory efficiency and customer satisfaction',
      featured: false
    },
    {
      id: 'customer-service-automation',
      title: 'Intelligent Customer Service Automation',
      company: 'SaaS Platform',
      industry: 'Technology',
      results: '70% reduction in support tickets, 95% customer satisfaction',
      description: 'Automating customer support while maintaining human touch.',
      challenge: 'Overwhelmed support team and long response times',
      solution: 'Implemented AI-powered self-service with human escalation',
      impact: 'Scaled support operations without proportional staff increases',
      featured: false
    },
    {
      id: 'energy-grid-optimization',
      title: 'Smart Grid Energy Optimization',
      company: 'Municipal Utility',
      industry: 'Energy',
      results: '20% reduction in energy waste, 15% cost savings',
      description: 'AI-powered energy grid optimization and demand management.',
      challenge: 'Inefficient energy distribution and high operational costs',
      solution: 'Deployed smart grid AI systems for predictive optimization',
      impact: 'Reduced environmental impact while improving service reliability',
      featured: false
    }
  ];

  const industries = ['All', 'Manufacturing', 'Marketing', 'Technology', 'Financial Services', 'Healthcare', 'Retail', 'Energy'];
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world success stories of AI automation implementation across various industries. See how our solutions drive measurable results." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world AI automation success stories and measurable results." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world examples of how AI automation transforms businesses and drives measurable results
              </p>
            </header>

            {/* Industry Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedIndustry === industry
                        ? 'border-cyan-400/50 text-cyan-400 bg-cyan-400/10'
                        : 'border-white/20 text-white/80 hover:border-cyan-400/50 hover:text-cyan-400'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </section>
            
            {/* Featured Case Studies */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.filter(study => study.featured).map(study => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {study.industry}
                      </span>
                      <span className="text-white/60 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{study.company}</p>
                    <p className="text-white/80 mb-4">{study.description}</p>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                      <p className="text-white/70 text-sm">{study.results}</p>
                    </div>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      Read Full Case Study
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* All Case Studies */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map(study => (
                  <div key={study.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{study.company}</p>
                    <p className="text-white/80 text-sm mb-4">{study.description}</p>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                      <p className="text-white/70 text-sm">{study.results}</p>
                    </div>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Metrics */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Collective Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$2.5B+</div>
                  <p className="text-white/80">Total Value Generated</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">150+</div>
                  <p className="text-white/80">Successful Implementations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                  <p className="text-white/80">Average Efficiency Gain</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <p className="text-white/80">Client Satisfaction Rate</p>
                </div>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how AI automation can transform your business operations 
                  and drive measurable results like the ones you see above.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Your Transformation
                  </Link>
                  <Link 
                    href="/resources"
                    className="px-8 py-3 border border-white/20 text-white rounded-lg font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    Explore Resources
                  </Link>
                </div>
              </div>
            </section>
            
            {/* Related Pages */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Our Services</h3>
                  <p className="text-white/80 text-sm">Discover the AI automation solutions that power these success stories</p>
                </Link>
                
                <Link href="/about" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">About Zion Tech</h3>
                  <p className="text-white/80 text-sm">Learn about our mission and expertise in AI automation</p>
                </Link>
                
                <Link href="/blog" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Latest Insights</h3>
                  <p className="text-white/80 text-sm">Read our latest thoughts on AI automation trends and best practices</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}