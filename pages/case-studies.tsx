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
      challenge: 'Traditional manufacturing processes were inefficient with high downtime and inconsistent quality.',
      solution: 'Deployed AI-powered predictive maintenance, quality control automation, and intelligent production scheduling.',
      technologies: ['Computer Vision', 'Predictive Analytics', 'IoT Sensors', 'Machine Learning'],
      metrics: [
        { label: 'Production Efficiency', value: '+40%', change: 'positive' },
        { label: 'Downtime Reduction', value: '-60%', change: 'positive' },
        { label: 'Quality Defects', value: '-75%', change: 'positive' },
        { label: 'Energy Consumption', value: '-25%', change: 'positive' }
      ],
      duration: '6 months',
      teamSize: '8 engineers'
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      challenge: 'Manual content creation couldn\'t keep up with demand, leading to missed opportunities and inconsistent quality.',
      solution: 'Built an AI-powered content generation platform with automated research, writing, and optimization.',
      technologies: ['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'A/B Testing'],
      metrics: [
        { label: 'Content Output', value: '10x', change: 'positive' },
        { label: 'Engagement Rate', value: '+85%', change: 'positive' },
        { label: 'SEO Rankings', value: '+60%', change: 'positive' },
        { label: 'Content Costs', value: '-70%', change: 'positive' }
      ],
      duration: '4 months',
      teamSize: '5 engineers'
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      challenge: 'Manual infrastructure management led to high costs, frequent outages, and poor performance during traffic spikes.',
      solution: 'Implemented autonomous cloud infrastructure with auto-scaling, predictive scaling, and intelligent cost optimization.',
      technologies: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Machine Learning'],
      metrics: [
        { label: 'Cloud Costs', value: '-50%', change: 'positive' },
        { label: 'Uptime', value: '99.9%', change: 'positive' },
        { label: 'Response Time', value: '-40%', change: 'positive' },
        { label: 'Deployment Time', value: '-80%', change: 'positive' }
      ],
      duration: '8 months',
      teamSize: '12 engineers'
    },
    {
      id: 'healthcare-diagnostic-automation',
      title: 'Healthcare Diagnostic Automation',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      results: '90% accuracy in early disease detection, 3x faster diagnosis',
      description: 'Revolutionizing medical diagnostics through AI-powered image analysis and patient data processing.',
      challenge: 'Manual diagnostic processes were slow, error-prone, and couldn\'t handle the volume of patient data.',
      solution: 'Developed AI systems for medical image analysis, patient data correlation, and diagnostic assistance.',
      technologies: ['Computer Vision', 'Deep Learning', 'Natural Language Processing', 'Predictive Analytics'],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '90%', change: 'positive' },
        { label: 'Diagnosis Speed', value: '3x faster', change: 'positive' },
        { label: 'False Positives', value: '-40%', change: 'positive' },
        { label: 'Patient Wait Times', value: '-60%', change: 'positive' }
      ],
      duration: '12 months',
      teamSize: '15 engineers'
    },
    {
      id: 'financial-trading-automation',
      title: 'Financial Trading Automation',
      company: 'Investment Firm',
      industry: 'Finance',
      results: '35% increase in portfolio returns, 80% reduction in trading errors',
      description: 'Building autonomous trading systems that adapt to market conditions in real-time.',
      challenge: 'Human traders couldn\'t process market data fast enough, leading to missed opportunities and costly errors.',
      solution: 'Developed AI-powered trading algorithms with real-time market analysis, risk management, and automated execution.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Risk Management', 'Algorithmic Trading'],
      metrics: [
        { label: 'Portfolio Returns', value: '+35%', change: 'positive' },
        { label: 'Trading Errors', value: '-80%', change: 'positive' },
        { label: 'Response Time', value: '-95%', change: 'positive' },
        { label: 'Risk Management', value: '+50%', change: 'positive' }
      ],
      duration: '10 months',
      teamSize: '10 engineers'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Optimization',
      company: 'Global Retail Chain',
      industry: 'Retail',
      results: '30% reduction in logistics costs, 99.5% on-time delivery',
      description: 'Creating intelligent supply chain systems that predict demand and optimize logistics.',
      challenge: 'Complex supply chains with multiple suppliers and distribution centers led to inefficiencies and delays.',
      solution: 'Implemented AI-powered demand forecasting, route optimization, and inventory management systems.',
      technologies: ['Predictive Analytics', 'Route Optimization', 'Inventory Management', 'IoT Integration'],
      metrics: [
        { label: 'Logistics Costs', value: '-30%', change: 'positive' },
        { label: 'On-time Delivery', value: '99.5%', change: 'positive' },
        { label: 'Inventory Turnover', value: '+45%', change: 'positive' },
        { label: 'Supplier Performance', value: '+60%', change: 'positive' }
      ],
      duration: '9 months',
      teamSize: '14 engineers'
    }
  ];

  const industries = ['All', 'Manufacturing', 'Marketing', 'Technology', 'Healthcare', 'Finance', 'Retail'];
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world AI automation success stories across industries. See how organizations achieved remarkable results through intelligent automation." />
        <meta property="og:title" content="Case Studies | Zion Tech Group - AI & Automation Success Stories" />
        <meta property="og:description" content="Explore real-world AI automation success stories across industries." />
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
                AI Automation Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Real-world examples of how organizations across industries are achieving remarkable results 
                through intelligent automation and autonomous systems
              </p>
            </header>

            {/* Industry Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                      selectedIndustry === industry
                        ? 'bg-cyan-400 text-white border-cyan-400'
                        : 'bg-white/10 text-white/80 border-white/20 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </section>

            {/* Case Studies Grid */}
            <section className="mb-20">
              <div className="grid gap-8">
                {filteredCaseStudies.map((study) => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left Column - Overview */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                            {study.industry}
                          </span>
                          <span className="text-white/60 text-sm">{study.duration}</span>
                          <span className="text-white/60 text-sm">•</span>
                          <span className="text-white/60 text-sm">{study.teamSize}</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-3 text-white">{study.title}</h2>
                        <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                        <p className="text-white/80 mb-6">{study.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-red-400 mb-2">Challenge</h4>
                            <p className="text-white/70 text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-400 mb-2">Solution</h4>
                            <p className="text-white/70 text-sm">{study.solution}</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-blue-400 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Column - Results */}
                      <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-green-400">Results</h3>
                        <div className="space-y-4">
                          {study.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-4 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10">
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-white/70 text-sm">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 rounded-xl border border-cyan-400/20">
                          <h4 className="font-semibold text-cyan-400 mb-2">Key Achievement</h4>
                          <p className="text-white/80 text-sm">{study.results}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        Read Full Case Study
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Metrics Summary */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Collective Impact</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-xl border border-green-400/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-white/80">Industries Transformed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.5M+</div>
                  <div className="text-white/80">Annual Cost Savings</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-400/10 to-purple-500/10 rounded-xl border border-purple-400/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-white/80">Average Efficiency Gain</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-cyan-500/10 rounded-xl border border-cyan-400/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-white/80">System Reliability</div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let us help you achieve similar results with AI automation. Our team of experts 
                  will work with you to design and implement intelligent solutions tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    href="/services" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}