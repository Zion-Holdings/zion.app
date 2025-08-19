import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Enterprise Automation Platform",
      company: "TechCorp Industries",
      industry: "Manufacturing",
      challenge: "Manual processes causing 40% efficiency loss and frequent human errors in production scheduling.",
      solution: "Implemented 50+ autonomous workflows for production optimization, quality control, and inventory management.",
      results: [
        "85% reduction in manual data entry errors",
        "60% improvement in production efficiency",
        "30% cost savings in operational overhead",
        "24/7 automated monitoring and alerting"
      ],
      metrics: {
        automations: 52,
        efficiency: "85%",
        costSavings: "$2.4M/year",
        uptime: "99.9%"
      }
    },
    {
      title: "AI-Powered Content Management",
      company: "MediaFlow Solutions",
      industry: "Digital Media",
      challenge: "Content creation bottlenecks and inconsistent quality across multiple platforms.",
      solution: "Deployed autonomous content generation system with AI-powered optimization and multi-platform distribution.",
      results: [
        "10x increase in content production capacity",
        "95% improvement in content consistency",
        "Automated SEO optimization for all content",
        "Real-time performance analytics and A/B testing"
      ],
      metrics: {
        automations: 38,
        efficiency: "95%",
        costSavings: "$1.8M/year",
        uptime: "99.8%"
      }
    },
    {
      title: "Financial Services Automation",
      company: "SecureBank Financial",
      industry: "Banking & Finance",
      challenge: "Compliance reporting delays and manual risk assessment processes.",
      solution: "Built autonomous compliance monitoring system with real-time risk assessment and automated reporting.",
      results: [
        "90% faster compliance reporting",
        "Zero compliance violations in 18 months",
        "Automated risk scoring and alerting",
        "Real-time regulatory updates integration"
      ],
      metrics: {
        automations: 45,
        efficiency: "90%",
        costSavings: "$3.2M/year",
        uptime: "99.95%"
      }
    },
    {
      title: "Healthcare Process Optimization",
      company: "HealthTech Systems",
      industry: "Healthcare",
      challenge: "Patient data management inefficiencies and delayed diagnosis reporting.",
      solution: "Implemented autonomous patient data processing with AI-powered diagnosis assistance and automated reporting.",
      results: [
        "75% reduction in data processing time",
        "40% improvement in diagnosis accuracy",
        "Automated patient follow-up scheduling",
        "Real-time health monitoring and alerts"
      ],
      metrics: {
        automations: 41,
        efficiency: "75%",
        costSavings: "$1.6M/year",
        uptime: "99.9%"
      }
    }
  ];

  const testimonials = [
    {
      quote: "Zion App transformed our entire operation. What used to take weeks now happens automatically in hours.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Industries"
    },
    {
      quote: "The autonomous content system increased our productivity tenfold while maintaining exceptional quality.",
      author: "Michael Rodriguez",
      role: "Head of Content",
      company: "MediaFlow Solutions"
    },
    {
      quote: "Our compliance team can now focus on strategy instead of manual reporting. Game-changing automation.",
      author: "Jennifer Walsh",
      role: "Compliance Director",
      company: "SecureBank Financial"
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion App</title>
        <meta name="description" content="Real-world case studies showcasing successful implementations of Zion App's autonomous automation system" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10" />
          
          {/* Header */}
          <header className="relative pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                  Zion App
                </Link>
                <div className="flex items-center gap-6">
                  <Link href="/features" className="text-white/70 hover:text-white transition-colors">
                    Features
                  </Link>
                  <Link href="/docs" className="text-white/70 hover:text-white transition-colors">
                    Docs
                  </Link>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="relative">
            {/* Hero Section */}
            <section className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center">
                <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
                  Case Studies
                </h1>
                <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                  Discover how organizations across industries are achieving remarkable results 
                  with Zion App's autonomous automation platform.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#case-studies" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors">
                    View Case Studies
                  </a>
                  <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    Start Your Project
                  </a>
                </div>
              </div>
            </section>

            {/* Case Studies Grid */}
            <section id="case-studies" className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">Success Stories</h2>
                <p className="text-lg text-white/70">
                  Real results from real organizations using Zion App
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="text-white/50 text-sm">{study.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white/90 mb-2">Challenge</h4>
                        <p className="text-white/70 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white/90 mb-2">Solution</h4>
                        <p className="text-white/70 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/90 mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 text-sm mt-1">✓</span>
                            <span className="text-white/70 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.metrics.automations}</div>
                        <div className="text-white/50 text-sm">Automations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-fuchsia-400">{study.metrics.efficiency}</div>
                        <div className="text-white/50 text-sm">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.metrics.costSavings}</div>
                        <div className="text-white/50 text-sm">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{study.metrics.uptime}</div>
                        <div className="text-white/50 text-sm">Uptime</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="mx-auto max-w-7xl px-6 pb-14">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-wide text-white/90 mb-4">What Our Clients Say</h2>
                <p className="text-lg text-white/70">
                  Hear directly from the teams who've transformed their operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-cyan-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-white/80 italic mb-4">"{testimonial.quote}"</p>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto max-w-7xl px-6 pb-14">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                  Join the organizations that have already achieved remarkable results with Zion App's 
                  autonomous automation platform.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors">
                    Start Your Project
                  </Link>
                  <Link href="/features" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    Explore Features
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;