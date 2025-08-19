import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Mock case study data - in a real app, this would come from a database or API
  const caseStudy = {
    id: id as string,
    title: `Case Study: ${id}`,
    description: 'This is a detailed case study showcasing our AI automation solutions.',
    content: 'Detailed case study content would go here...',
    date: '2025-01-19',
    category: 'AI Automation'
  };

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link 
              href="/resources" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors mb-4 inline-block"
            >
              ← Back to Resources
            </Link>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-4">
                  {caseStudy.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-white/70 text-lg mb-4">
                  {caseStudy.description}
                </p>
                <p className="text-white/50 text-sm">
                  Published: {caseStudy.date}
                </p>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">
                  {caseStudy.content}
                </p>
                
                <p className="text-white/80 leading-relaxed mt-6">
                  This case study demonstrates the power of autonomous AI systems in modern business environments. 
                  Our solutions provide real-time monitoring, automated decision-making, and continuous optimization 
                  capabilities that drive measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started with Similar Solutions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}