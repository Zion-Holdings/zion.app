import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Mock case study data - in a real app, this would come from a database or API
  const caseStudy = {
    id: id as string,
    title: `Case Study: ${id}`,
    description: 'A comprehensive case study demonstrating our AI automation solutions.',
    challenge: 'Complex business process optimization requiring real-time decision making.',
    solution: 'Implemented autonomous AI systems with continuous learning capabilities.',
    results: [
      '40% improvement in operational efficiency',
      'Real-time monitoring and alerting',
      'Automated decision making processes',
      'Scalable architecture for future growth'
    ],
    category: 'AI Automation',
    date: '2025-01-19'
  };

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link 
              href="/case-studies" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors mb-4 inline-block"
            >
              ← Back to Case Studies
            </Link>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full mb-4">
                  {caseStudy.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-white/70 text-lg mb-6">
                  {caseStudy.description}
                </p>
                <p className="text-white/50 text-sm">
                  Published: {caseStudy.date}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">The Challenge</h2>
                  <p className="text-white/80 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">Our Solution</h2>
                  <p className="text-white/80 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Results & Impact</h2>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">
                  This case study demonstrates the transformative power of autonomous AI systems in modern 
                  business environments. Our solutions provide real-time monitoring, automated decision-making, 
                  and continuous optimization capabilities that drive measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Implement Similar Solutions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}