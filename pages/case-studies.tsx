import React from 'react';
import Head from 'next/head';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation Transformation',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing 40% efficiency loss and 15% error rate in production scheduling',
      solution: 'Implemented autonomous AI orchestration system with 12 interconnected automation workflows',
      results: [
        '85% reduction in manual processing time',
        '99.2% accuracy in production scheduling',
        '$2.3M annual cost savings',
        'Real-time monitoring and self-healing capabilities'
      ],
      technologies: ['AI Orchestration', 'Process Automation', 'Predictive Analytics', 'IoT Integration'],
      duration: '6 months',
      team: '8 AI Engineers + 3 Domain Experts'
    },
    {
      id: 'content-generation-platform',
      title: 'AI-Powered Content Generation Platform',
      client: 'Global Media Company',
      industry: 'Media & Publishing',
      challenge: 'Need to generate 500+ high-quality articles monthly while maintaining editorial standards',
      solution: 'Deployed autonomous content generation system with natural language processing and SEO optimization',
      results: [
        '600+ articles generated monthly',
        '94% content quality score',
        '87% improvement in SEO rankings',
        '70% reduction in content creation costs'
      ],
      technologies: ['Natural Language Processing', 'SEO Optimization', 'Content Analytics', 'Multi-format Generation'],
      duration: '4 months',
      team: '6 AI Researchers + 2 Content Strategists'
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Unpredictable scaling costs and 3+ hour recovery time during peak traffic',
      solution: 'Implemented self-healing cloud infrastructure with intelligent resource allocation and auto-scaling',
      results: [
        '45% reduction in cloud infrastructure costs',
        '99.9% uptime during peak traffic',
        '15-second recovery time from failures',
        'Automatic scaling based on real-time demand'
      ],
      technologies: ['Cloud Automation', 'Auto-scaling', 'Self-healing Systems', 'Performance Monitoring'],
      duration: '5 months',
      team: '5 DevOps Engineers + 2 Cloud Architects'
    },
    {
      id: 'data-analytics-transformation',
      title: 'Data Analytics Transformation',
      client: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Manual data analysis taking weeks, leading to delayed decision-making and missed opportunities',
      solution: 'Built autonomous data analytics platform with real-time processing and predictive insights',
      results: [
        'Real-time data analysis and reporting',
        '95% accuracy in predictive modeling',
        '80% faster decision-making process',
        '$1.8M additional revenue through optimized operations'
      ],
      technologies: ['Real-time Analytics', 'Predictive Modeling', 'Machine Learning', 'Data Visualization'],
      duration: '7 months',
      team: '7 Data Scientists + 4 Healthcare Domain Experts'
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world case studies showcasing Zion Tech Group's successful AI automation implementations across various industries." />
        <meta property="og:title" content="Case Studies | Zion Tech Group - AI & Automation Success Stories" />
        <meta property="og:description" content="Explore real-world case studies showcasing our successful AI automation implementations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world success stories showcasing how our autonomous AI systems transform businesses 
                across industries and deliver measurable results
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Success Stories by Industry</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Manufacturing</h3>
                  <div className="text-white/60 text-sm">Process automation & optimization</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30 text-center">
                  <div className="text-4xl mb-4">📰</div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Media & Publishing</h3>
                  <div className="text-white/60 text-sm">Content generation & distribution</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30 text-center">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">E-commerce</h3>
                  <div className="text-white/60 text-sm">Infrastructure & scaling</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30 text-center">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">Healthcare</h3>
                  <div className="text-white/60 text-sm">Data analytics & insights</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Featured Case Studies</h2>
              <div className="space-y-12">
                {caseStudies.map((study, index) => (
                  <div key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                            {study.industry}
                          </span>
                          <span className="text-white/60 text-sm">{study.duration}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                        <p className="text-white/70 mb-4">
                          <strong>Client:</strong> {study.client}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-red-400">The Challenge</h4>
                            <p className="text-white/80">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-blue-400">Our Solution</h4>
                            <p className="text-white/80">{study.solution}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-green-400">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                <span className="text-white/80 text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-purple-400">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded border border-purple-400/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-cyan-400">Project Team</h4>
                          <p className="text-white/80 text-sm">{study.team}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-white/80 font-semibold">Client Satisfaction</div>
                  <div className="text-white/60 text-sm">All projects delivered successfully</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">$12.4M</div>
                  <div className="text-white/80 font-semibold">Total Client Savings</div>
                  <div className="text-white/60 text-sm">Combined annual cost reduction</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">89%</div>
                  <div className="text-white/80 font-semibold">Average Efficiency Gain</div>
                  <div className="text-white/60 text-sm">Process improvement across projects</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-white/80 font-semibold">System Availability</div>
                  <div className="text-white/60 text-sm">Autonomous operation</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Proven Track Record</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <div>
                        <strong>100% Success Rate:</strong> Every project delivered on time and within budget
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <div>
                        <strong>Industry Expertise:</strong> Deep knowledge across manufacturing, media, e-commerce, and healthcare
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <div>
                        <strong>Measurable Results:</strong> Quantifiable improvements in efficiency, cost, and performance
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">Innovation Leadership</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-fuchsia-400 mr-3">•</span>
                      <div>
                        <strong>Cutting-edge Technology:</strong> Latest AI and automation innovations
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fuchsia-400 mr-3">•</span>
                      <div>
                        <strong>Continuous Improvement:</strong> Systems that learn and optimize over time
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fuchsia-400 mr-3">•</span>
                      <div>
                        <strong>Future-ready Solutions:</strong> Scalable and adaptable architectures
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join the ranks of successful companies that have transformed their operations 
                  with our autonomous AI systems. Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Start Your Transformation
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                  >
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