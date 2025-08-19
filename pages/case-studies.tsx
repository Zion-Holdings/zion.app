import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-platform',
      title: 'Enterprise AI Automation Platform',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      duration: '6 months',
      results: [
        'Reduced operational costs by 34%',
        'Improved efficiency by 67%',
        'Deployed 45 autonomous workflows',
        '99.9% system uptime achieved'
      ],
      description: 'Developed a comprehensive AI automation platform that streamlined manufacturing processes, reduced manual intervention, and provided real-time analytics for decision-making.',
      technologies: ['Machine Learning', 'IoT Integration', 'Cloud Infrastructure', 'Real-time Analytics']
    },
    {
      id: 'content-generation-system',
      title: 'Autonomous Content Generation System',
      client: 'Global Media Corporation',
      industry: 'Media & Entertainment',
      duration: '4 months',
      results: [
        'Generated 2,000+ articles monthly',
        'Increased engagement by 89%',
        'Reduced content creation time by 78%',
        'SEO performance improved by 156%'
      ],
      description: 'Built an AI-powered content generation system that automatically creates high-quality, SEO-optimized content across multiple platforms and languages.',
      technologies: ['Natural Language Processing', 'Content Optimization', 'Multi-language Support', 'SEO Automation']
    },
    {
      id: 'cloud-infrastructure-automation',
      title: 'Cloud Infrastructure Automation',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      duration: '3 months',
      results: [
        'Auto-scaling reduced costs by 42%',
        'Deployment time reduced from 2 hours to 15 minutes',
        'Zero-downtime deployments achieved',
        '99.99% availability maintained'
      ],
      description: 'Implemented comprehensive cloud automation including auto-scaling, self-healing infrastructure, and automated deployment pipelines for a high-traffic e-commerce platform.',
      technologies: ['Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Monitoring & Alerting']
    },
    {
      id: 'data-analytics-platform',
      title: 'Real-time Data Analytics Platform',
      client: 'Financial Services Firm',
      industry: 'Financial Services',
      duration: '8 months',
      results: [
        'Real-time data processing at 100,000+ events/second',
        'Reduced reporting time from days to minutes',
        'Improved decision-making speed by 300%',
        'Compliance monitoring automated 100%'
      ],
      description: 'Developed a real-time data analytics platform that processes financial transactions, provides instant insights, and ensures regulatory compliance through automated monitoring.',
      technologies: ['Stream Processing', 'Machine Learning', 'Real-time Dashboards', 'Compliance Automation']
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing Zion Tech Group's AI automation and technology solutions." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and case studies." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how our AI automation and technology solutions transform businesses
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      {study.industry}
                    </span>
                    <span className="text-white/60 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-white/70 mb-4">{study.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-lg border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-green-400">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 mr-3">✓</span>
                          <span className="text-white/80 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                    >
                      View Full Case Study →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Proven Results</h3>
                  <p className="text-white/70">Track record of delivering measurable business value and ROI</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Rapid Implementation</h3>
                  <p className="text-white/70">Quick deployment and time-to-value for your business</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">AI-First Approach</h3>
                  <p className="text-white/70">Cutting-edge AI technology driving innovation and efficiency</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Ready to Start Your Success Story?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI automation and technology solutions can transform your business 
                  and deliver measurable results like the ones you see above.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Get Started Today
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-200"
                  >
                    Explore Our Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}