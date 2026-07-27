// components/ServiceComparisonPreview.tsx - Preview of service comparison tool
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  price: string;
  benefits: string[];
}

const SAMPLE_SERVICES: ServiceCard[] = [
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection',
    description: 'Real-time fraud detection with 99% accuracy and behavioral analytics',
    icon: '🛡️',
    category: 'AI',
    price: '$499/mo',
    benefits: ['99% detection rate', 'Zero false positives', '24/7 monitoring']
  },
  {
    id: 'ai-document-processor',
    title: 'AI Document Processor',
    description: 'Automated document classification, extraction, and processing',
    icon: '📄',
    category: 'AI',
    price: '$199/mo',
    benefits: ['95% reduction manual entry', 'Multi-format support', 'ERP integration']
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimizer',
    description: 'AI-powered multi-cloud cost optimization saving 30-40%',
    icon: '☁️',
    category: 'Cloud',
    price: '$299/mo',
    benefits: ['30-40% savings', 'Real-time alerts', 'Usage recommendations']
  }
];

export default function ServiceComparisonPreview() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container-page">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-4">
            <span className="text-green-400">●</span> Comparison Tool
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compare Services Side-by-Side
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Compare features, pricing, and benefits to find the perfect solution for your needs.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-xl border border-slate-800/50">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="px-6 py-4 text-left text-slate-300 font-semibold">Feature</th>
                  {SAMPLE_SERVICES.map((service) => (
                    <th key={service.id} className="px-4 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-slate-400">Service</span>
                        <Link
                          href={`/services/${service.id}`}
                          className="mt-1 text-sm font-semibold text-purple-400 hover:text-purple-300 line-clamp-1 max-w-32"
                        >
                          {service.title}
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 font-medium text-white">Starting Price</td>
                  {SAMPLE_SERVICES.map((service) => (
                    <td key={service.id} className="px-4 py-4 text-center text-emerald-400 font-semibold">
                      {service.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-6 py-4 font-medium text-white">Category</td>
                  {SAMPLE_SERVICES.map((service) => (
                    <td key={service.id} className="px-4 py-4 text-center">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                        {service.category}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Key Benefits</td>
                  {SAMPLE_SERVICES.map((service) => (
                    <td key={service.id} className="px-4 py-4 text-center">
                      <ul className="text-xs text-slate-300 text-left space-y-1">
                        {service.benefits.slice(0, 2).map((b, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/tools/service-comparison"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Use Full Comparison Tool →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}