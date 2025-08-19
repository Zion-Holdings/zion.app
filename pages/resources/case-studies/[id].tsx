import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Mock case study data - in a real app, this would come from an API or database
const caseStudies = {
  'ai-automation-success': {
    id: 'ai-automation-success',
    title: 'AI Automation Success Story',
    company: 'TechCorp Inc.',
    description: 'How TechCorp achieved 300% efficiency improvement through AI automation.',
    results: 'Reduced manual processing time from 8 hours to 2 hours, improved accuracy by 95%.',
    challenge: 'Manual data processing was taking too long and prone to errors.',
    solution: 'Implemented AI-powered data processing pipeline with automated validation.',
    metrics: {
      efficiency: '300%',
      accuracy: '95%',
      timeSaved: '6 hours daily'
    }
  },
  'cloud-migration': {
    id: 'cloud-migration',
    title: 'Cloud Migration Transformation',
    company: 'Global Solutions Ltd.',
    description: 'Seamless migration to cloud infrastructure with zero downtime.',
    results: 'Achieved 99.9% uptime, reduced infrastructure costs by 40%.',
    challenge: 'Legacy on-premise systems were expensive and difficult to maintain.',
    solution: 'Migrated to cloud-native architecture with automated scaling.',
    metrics: {
      uptime: '99.9%',
      costReduction: '40%',
      performance: '3x faster'
    }
  }
};

export default function CaseStudyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-white/80 mb-8">The requested case study could not be found.</p>
            <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
              Back to Resources
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} - {caseStudy.company} | Zion Tech Group</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} - ${caseStudy.company}`} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Resources
            </Link>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {caseStudy.description}
            </p>
            <div className="mt-4 text-cyan-400 font-semibold">
              {caseStudy.company}
            </div>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">The Challenge</h2>
              <p className="text-lg text-white/80">{caseStudy.challenge}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Solution</h2>
              <p className="text-lg text-white/80">{caseStudy.solution}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Results</h2>
              <p className="text-lg text-white/80 mb-6">{caseStudy.results}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                    <div className="text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6">
                  Let's discuss how AI automation can drive similar results for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Get Started
                  </Link>
                  <Link href="/case-studies" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                    View More Case Studies
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