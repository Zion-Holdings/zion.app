import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Transformation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain management with 50+ locations worldwide, manual processes causing delays and inefficiencies.',
      solution: 'Implemented AI Autonomous Business Manager with predictive analytics and automated decision-making.',
      results: [
        '40% reduction in supply chain delays',
        '25% improvement in inventory management',
        '30% cost savings in operations',
        '99.9% uptime achieved'
      ],
      technologies: ['AI/ML', 'Predictive Analytics', 'Automation', 'Cloud Infrastructure'],
      duration: '6 months',
      roi: '300%',
      image: '🏭'
    },
    {
      id: 'cybersecurity-automation',
      title: 'Cybersecurity Automation Platform',
      company: 'Financial Services Inc',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats, manual security monitoring, compliance requirements, and 24/7 security operations.',
      solution: 'Deployed AI-Powered Enterprise Security with autonomous threat detection and response.',
      results: [
        '95% faster threat detection',
        '80% reduction in false positives',
        '100% compliance achievement',
        'Zero security breaches'
      ],
      technologies: ['AI Security', 'Threat Intelligence', 'Automation', 'Compliance'],
      duration: '4 months',
      roi: '400%',
      image: '🔒'
    },
    {
      id: 'ai-content-automation',
      title: 'AI Content Creation Revolution',
      company: 'Digital Marketing Agency',
      industry: 'Marketing & Advertising',
      challenge: 'High content creation costs, inconsistent quality, slow turnaround times, and scaling challenges.',
      solution: 'Integrated AI Content Generation Platform with personalized content creation and optimization.',
      results: [
        '70% reduction in content creation time',
        '60% improvement in content quality',
        '3x increase in content output',
        '45% cost savings'
      ],
      technologies: ['NLP', 'Content AI', 'Personalization', 'Analytics'],
      duration: '3 months',
      roi: '250%',
      image: '📝'
    },
    {
      id: 'quantum-computing-research',
      title: 'Quantum Computing Research Platform',
      company: 'Research Institute',
      industry: 'Research & Development',
      challenge: 'Complex computational problems, limited computing resources, and need for breakthrough research capabilities.',
      solution: 'Deployed Quantum Cloud Infrastructure with AI-powered research automation.',
      results: [
        '1000x faster computation for specific problems',
        'Breakthrough discoveries in 3 research areas',
        '50% reduction in research time',
        'New patent applications filed'
      ],
      technologies: ['Quantum Computing', 'AI Research', 'Cloud Native', 'Research Automation'],
      duration: '12 months',
      roi: '500%',
      image: '⚛️'
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'Healthcare AI Diagnostics System',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'High diagnostic error rates, long wait times, limited specialist availability, and increasing patient load.',
      solution: 'Implemented AI Autonomous Healthcare Physician with diagnostic assistance and patient monitoring.',
      results: [
        '90% reduction in diagnostic errors',
        '60% faster diagnosis times',
        '40% improvement in patient outcomes',
        '24/7 diagnostic availability'
      ],
      technologies: ['Medical AI', 'Computer Vision', 'Diagnostics', 'Patient Monitoring'],
      duration: '8 months',
      roi: '350%',
      image: '🏥'
    },
    {
      id: 'blockchain-analytics-platform',
      title: 'Blockchain Analytics & Governance',
      company: 'Cryptocurrency Exchange',
      industry: 'Blockchain & Finance',
      challenge: 'Complex blockchain transactions, regulatory compliance, fraud detection, and market analysis needs.',
      solution: 'Built AI Blockchain Analytics platform with governance and compliance automation.',
      results: [
        '99.9% fraud detection accuracy',
        'Real-time compliance monitoring',
        '50% reduction in regulatory reporting time',
        'Enhanced market insights'
      ],
      technologies: ['Blockchain', 'AI Analytics', 'Compliance', 'Real-time Processing'],
      duration: '5 months',
      roi: '280%',
      image: '⛓️'
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group | Client Success Stories & AI Implementations</title>
        <meta name="description" content="Explore real-world case studies of Zion Tech Group's AI solutions. See how we've transformed businesses across industries with autonomous technology." />
        <meta name="keywords" content="case studies, AI implementations, client success stories, business transformation, Zion Tech Group" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world examples of AI transformation and business success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <SmartHeader />
        
        <main id="main-content" className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                  Case Studies
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                  Real-world transformations powered by our AI solutions. See how we've revolutionized businesses across industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/services" 
                    className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Our Services
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-fuchsia-400 mb-2">50+</div>
                  <div className="text-white/70">Successful Implementations</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-white/70">Industries Served</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-white/70">Average ROI</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Featured Success Stories</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Discover how our AI solutions have transformed businesses and delivered measurable results
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-fuchsia-500/30 transition-all duration-300 hover:scale-105">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{study.image}</div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-medium mb-4">
                        {study.industry}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{study.company}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">Challenge:</h4>
                          <p className="text-white/70 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">Solution:</h4>
                          <p className="text-white/70 text-sm">{study.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="text-white/70 text-sm flex items-start">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-white/60">Duration:</span>
                          <div className="text-white font-semibold">{study.duration}</div>
                        </div>
                        <div>
                          <span className="text-white/60">ROI:</span>
                          <div className="text-white font-semibold">{study.roi}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="w-full px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center block"
                      >
                        Read Full Case Study
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industry Focus */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Industries We Transform</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Our AI solutions are designed to work across diverse industries and business models
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏭</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Manufacturing</h3>
                  <p className="text-white/60 text-sm">Supply chain optimization, predictive maintenance, quality control</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏦</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Financial Services</h3>
                  <p className="text-white/60 text-sm">Risk management, fraud detection, compliance automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏥</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-white/60 text-sm">Diagnostic assistance, patient monitoring, research automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Technology</h3>
                  <p className="text-white/60 text-sm">AI development, automation, cloud infrastructure</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Real feedback from businesses that have transformed with our AI solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👨‍💼</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">John Smith</div>
                      <div className="text-white/60 text-sm">CTO, Global Manufacturing</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    "Zion Tech Group's AI solution transformed our operations completely. We've seen a 40% reduction in delays and 25% improvement in efficiency. The autonomous decision-making capabilities are game-changing."
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👩‍💼</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Sarah Johnson</div>
                      <div className="text-white/60 text-sm">CEO, Digital Marketing Agency</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    "The AI content generation platform has revolutionized our business. We're producing 3x more content with 60% better quality. Our clients are amazed by the results."
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👨‍🔬</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Dr. Michael Chen</div>
                      <div className="text-white/60 text-sm">Research Director, Institute</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    "The quantum computing platform has accelerated our research by 1000x. We've made breakthrough discoveries that would have taken years with traditional methods."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the growing list of companies transforming their business with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Transformation
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </section>
        </main>

        <SmartFooter />
      </div>
    </>
  );
}
