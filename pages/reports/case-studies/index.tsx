import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesIndexPage() {
  const caseStudies = [
    {
      id: 'ai-automation-success',
      title: 'AI-Powered Automation Success Story',
      company: 'TechCorp Industries',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing 40% production delays',
      solution: 'Implemented autonomous AI systems for process optimization',
      results: '60% reduction in production time, 35% cost savings',
      duration: '6 months',
      category: 'AI Automation'
    },
    {
      id: 'cloud-migration-case',
      title: 'Enterprise Cloud Migration',
      company: 'Global Retail Solutions',
      industry: 'Retail',
      challenge: 'Legacy systems limiting scalability and performance',
      solution: 'Complete cloud migration with autonomous optimization',
      results: '99.9% uptime, 50% performance improvement',
      duration: '12 months',
      category: 'Cloud Migration'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization Breakthrough',
      company: 'DataFlow Analytics',
      industry: 'Technology',
      challenge: 'Database queries taking 15+ seconds',
      solution: 'AI-driven query optimization and caching strategies',
      results: '95% faster queries, 80% reduced server load',
      duration: '4 months',
      category: 'Performance'
    },
    {
      id: 'security-transformation',
      title: 'Security Infrastructure Transformation',
      company: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Autonomous security monitoring and threat response',
      results: 'Zero security breaches, 100% compliance',
      duration: '8 months',
      category: 'Security'
    },
    {
      id: 'scalability-solution',
      title: 'Scalability Solution for Growth',
      company: 'StartupScale Inc.',
      industry: 'SaaS',
      challenge: 'System unable to handle 10x user growth',
      solution: 'Autonomous scaling infrastructure with load balancing',
      results: '10x user capacity, 99.9% reliability',
      duration: '3 months',
      category: 'Scalability'
    },
    {
      id: 'cost-optimization',
      title: 'Cloud Cost Optimization',
      company: 'EcoTech Solutions',
      industry: 'Environmental Technology',
      challenge: 'Cloud costs increasing 200% year-over-year',
      solution: 'AI-powered resource optimization and cost management',
      results: '65% cost reduction, improved performance',
      duration: '5 months',
      category: 'Cost Optimization'
    }
  ];

  const categories = ['All', 'AI Automation', 'Cloud Migration', 'Performance', 'Security', 'Scalability', 'Cost Optimization'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group. See how our AI-powered solutions have transformed businesses across industries." />
        <meta name="keywords" content="case studies, success stories, AI automation, cloud migration, performance optimization, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/reports/case-studies" />
        
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Explore real-world success stories and case studies from Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/reports/case-studies" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Zion Tech Group" />
        <meta name="twitter:description" content="Real-world success stories and case studies." />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Case Studies",
          "description": "Case studies and success stories from Zion Tech Group",
          "url": "https://ziontechgroup.com/reports/case-studies",
          "publisher": { "@type": "Organization", "name": "Zion Tech Group" }
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real-world success stories showcasing how our AI-powered solutions have transformed businesses 
            across industries. Discover the measurable impact of autonomous technology.
          </p>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white/70 text-sm">Successful Projects</div>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-fuchsia-400 mb-2">15+</div>
              <div className="text-white/70 text-sm">Industries Served</div>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2M+</div>
              <div className="text-white/70 text-sm">Client Savings</div>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white/70 text-sm">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-slate-900/50 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-medium">{study.company}</p>
                    <p className="text-white/60 text-sm">{study.industry}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-1">Challenge</h4>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-1">Solution</h4>
                      <p className="text-white/70 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-1">Results</h4>
                      <p className="text-white/70 text-sm">{study.results}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Duration: {study.duration}</span>
                    <Link 
                      href={`/reports/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can solve your unique challenges and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
