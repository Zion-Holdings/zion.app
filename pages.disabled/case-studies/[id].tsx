import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CaseStudyPage() {
  const router = useRouter();
  const { id } = router.query;

  // This would typically come from a database or API
  // For now, we'll show a generic case study page
  const caseStudy = {
    id: id as string,
    title: 'Case Study: ' + (id as string)?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    company: 'Client Company',
    industry: 'Technology',
    challenge: 'The client faced significant challenges with manual processes and inefficient workflows that were limiting their growth potential.',
    solution: 'We implemented a comprehensive AI automation solution that streamlined operations and improved efficiency across all departments.',
    results: [
      '40% increase in operational efficiency',
      '60% reduction in processing time',
      '85% improvement in accuracy',
      'Significant cost savings'
    ],
    duration: '6 months',
    description: 'A comprehensive case study demonstrating the transformative impact of AI automation on business operations.'
  };

  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
              </Link>
            </nav>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="mb-12 text-center">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    {caseStudy.industry}
                  </span>
                  <span className="text-white/60 text-sm">{caseStudy.duration}</span>
                </div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  {caseStudy.description}
                </p>
              </header>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Client Overview</h2>
                <p className="text-white/90 mb-4">
                  <strong>Company:</strong> {caseStudy.company}
                </p>
                <p className="text-white/90 mb-4">
                  <strong>Industry:</strong> {caseStudy.industry}
                </p>
                <p className="text-white/90 mb-4">
                  <strong>Project Duration:</strong> {caseStudy.duration}
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-fuchsia-400">The Challenge</h2>
                <p className="text-white/90 mb-4">
                  {caseStudy.challenge}
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-green-400">Our Solution</h2>
                <p className="text-white/90 mb-4">
                  {caseStudy.solution}
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Results & Impact</h2>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="text-white/90 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-purple-400">Conclusion</h2>
                <p className="text-white/90 mb-4">
                  This case study demonstrates the transformative power of AI automation when properly implemented. 
                  The results speak for themselves, showing significant improvements in efficiency, accuracy, and cost savings.
                </p>
                <p className="text-white/90">
                  At Zion Tech Group, we specialize in creating custom automation solutions that deliver measurable results. 
                  Every project is unique, and we work closely with our clients to ensure their specific needs are met.
                </p>
              </section>
            </article>
            
            <div className="mt-16 pt-8 border-t border-white/20 text-center">
              <h3 className="text-xl font-semibold mb-6 text-white">Ready to Get Started?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Contact Us
                </Link>
                <Link href="/case-studies" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                  View All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}