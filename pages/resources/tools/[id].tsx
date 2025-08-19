import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ToolPage() {
  const router = useRouter();
  const { id } = router.query;

  // Mock tool data - in a real app, this would come from a database or API
  const tool = {
    id: id as string,
    name: `Tool: ${id}`,
    description: 'This is a powerful tool for AI automation and optimization.',
    features: [
      'Real-time monitoring',
      'Automated decision making',
      'Performance optimization',
      'Scalable architecture'
    ],
    category: 'AI Tools'
  };

  return (
    <>
      <Head>
        <title>{tool.name} | Zion Tech Group</title>
        <meta name="description" content={tool.description} />
        <meta property="og:title" content={tool.name} />
        <meta property="og:description" content={tool.description} />
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
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full mb-4">
                  {tool.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {tool.name}
                </h1>
                <p className="text-white/70 text-lg mb-6">
                  {tool.description}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">
                  This tool represents the cutting edge of autonomous AI technology, designed to streamline 
                  complex workflows and deliver measurable business value. Built with scalability and 
                  reliability in mind, it provides enterprise-grade automation capabilities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
            >
              Learn More About This Tool
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}