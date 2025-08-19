import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-content-automation',
      title: 'AI-Powered Content Automation Platform',
      client: 'Global Media Corporation',
      industry: 'Media & Publishing',
      duration: '6 months',
      challenge: 'Manual content creation was limiting scalability and consistency across multiple platforms.',
      solution: 'Developed an autonomous content generation system using advanced NLP and machine learning.',
      results: [
        '10x increase in content production',
        '90% reduction in manual effort',
        'Consistent brand voice across all content',
        '24/7 automated content generation'
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'Cloud Infrastructure', 'API Integration']
    },
    {
      id: 'cloud-automation-infrastructure',
      title: 'Cloud-Native Automation Infrastructure',
      client: 'E-commerce Platform',
      industry: 'Retail & E-commerce',
      duration: '8 months',
      challenge: 'Legacy systems couldn\'t handle peak traffic and required manual scaling interventions.',
      solution: 'Built a fully automated, cloud-native infrastructure with intelligent scaling and self-healing capabilities.',
      results: [
        '99.99% uptime during peak periods',
        'Automatic scaling based on demand',
        '50% reduction in infrastructure costs',
        'Zero-downtime deployments'
      ],
      technologies: ['Kubernetes', 'Docker', 'AWS/GCP', 'Terraform', 'Prometheus']
    },
    {
      id: 'ai-ethics-framework',
      title: 'Ethical AI Framework Implementation',
      client: 'Financial Services Provider',
      industry: 'Finance & Banking',
      duration: '4 months',
      challenge: 'AI systems needed to ensure fairness, transparency, and compliance with regulatory requirements.',
      solution: 'Implemented comprehensive ethical AI framework with bias detection, explainability, and audit trails.',
      results: [
        '100% compliance with AI regulations',
        'Eliminated bias in decision-making',
        'Transparent AI explanations for users',
        'Enhanced customer trust and satisfaction'
      ],
      technologies: ['Bias Detection Algorithms', 'Explainable AI', 'Audit Systems', 'Compliance Monitoring']
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization for Autonomous Systems',
      client: 'Healthcare Technology Company',
      industry: 'Healthcare',
      duration: '5 months',
      challenge: 'AI-powered diagnostic systems needed to process large datasets with sub-second response times.',
      solution: 'Optimized algorithms, implemented advanced caching, and redesigned data processing pipelines.',
      results: [
        'Sub-100ms response times achieved',
        '10x faster data processing',
        '99.9% accuracy maintained',
        'Scalable to handle 10x more data'
      ],
      technologies: ['GPU Acceleration', 'Redis Caching', 'Data Pipeline Optimization', 'Performance Monitoring']
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing Zion Tech Group's autonomous technology solutions." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and case studies showcasing our autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how our autonomous technology solutions transform businesses 
              and drive measurable results across industries.
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="mb-16">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                          {study.industry}
                        </span>
                        <span className="text-white/60 text-sm">{study.duration}</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-4 text-white">{study.title}</h2>
                      <p className="text-lg text-white/80 mb-6">
                        <span className="font-semibold text-cyan-400">Client:</span> {study.client}
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">The Challenge</h3>
                          <p className="text-white/70">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-green-400">Our Solution</h3>
                          <p className="text-white/70">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-cyan-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Results & Impact</h3>
                        <ul className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              <span className="text-white/80 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mx-auto max-w-4xl mt-20">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our autonomous technology solutions can help you achieve similar results 
                and drive innovation in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                  Explore Our Services
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Proven Results</h3>
                <p className="text-white/70">Track record of delivering measurable business value and ROI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">Cutting-Edge Technology</h3>
                <p className="text-white/70">Latest AI and automation technologies for optimal performance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Rapid Implementation</h3>
                <p className="text-white/70">Quick deployment and time-to-value for your business</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}