'use client';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Real success stories from Zion Tech Group clients — measurable outcomes, industry use cases, and transformation journeys.',
  alternates: { canonical: '/success-stories/' },
};

const stories = [
  { industry: 'Healthcare', title: 'AI Diagnostics Slash Hospital Read Times', challenge: '10-hospital network facing radiologist shortages and 48-hour diagnostic turnaround.', solution: 'Deployed HIPAA-compliant AI diagnostic imaging with 94% accuracy, integrated via HL7/FHIR.', results: ['87% faster diagnosis', '30% better patient outcomes', '$2.4M annual savings'], services: ['AI Medical Diagnosis', 'HL7/FHIR Integration', 'HIPAA Compliance'] },
  { industry: 'Financial Services', title: 'Regional Bank Cuts Fraud Losses by 94%', challenge: '$12M in annual fraud losses across 200K retail accounts.', solution: 'Real-time ML fraud detection with behavioral analytics and dark data signals.', results: ['94% detection rate', '65% false-positive reduction', '$12M saved annually'], services: ['Fraud Detection AI', 'Real-time Analytics', 'SOC 2'] },
  { industry: 'E-Commerce', title: 'Fashion Retailer Boosts Conversions 340%', challenge: 'Cart abandonment at 72% and stagnant AOV.', solution: 'AI recommendation engine with dynamic pricing and personalized email flows.', results: ['340% conversion lift', '28% higher AOV', '62% less abandonment'], services: ['AI Recommendations', 'Dynamic Pricing', 'Email Automation'] },
  { industry: 'Manufacturing', title: 'Auto Supplier Eliminates Unplanned Downtime', challenge: '5 production lines suffering costly unplanned shutdowns.', solution: 'IoT sensor mesh with ML failure prediction and predictive maintenance scheduling.', results: ['73% downtime reduction', '99% prediction accuracy', '$850K annual savings'], services: ['Predictive Maintenance', 'IoT Integration', 'Digital Twin'] },
  { industry: 'Logistics', title: '3PL Cuts Fuel Costs 22% with Route AI', challenge: 'Rising diesel costs and on-time delivery below 88%.', solution: 'AI route optimizer with live traffic, weather, and load balancing.', results: ['22% fuel savings', '96% on-time delivery', '18% more daily deliveries'], services: ['Route Optimization', 'Fleet Management', 'Real-time Tracking'] },
  { industry: 'Legal', title: 'Law Firm Cuts Contract Review 65%', challenge: '40+ hours per week spent on manual contract analysis.', solution: 'AI contract intelligence extracting clauses, risks, and obligations automatically.', results: ['65% faster review', '99% clause detection', '4x throughput'], services: ['Legal Document AI', 'Contract Lifecycle', 'Risk Assessment'] },
  { industry: 'Retail', title: 'Retailer Reclaims In-Stock Rates Above 98%', challenge: 'Frequent stockouts driving $3M in lost sales annually.', solution: 'Smart inventory forecasting with demand sensing and automated reorder triggers.', results: ['98.5% in-stock rate', '$3M recovered revenue', '22% less shrink'], services: ['Smart Inventory AI', 'Demand Forecasting', 'ERP Integration'] },
  { industry: 'Energy', title: 'Energy Firm Reduces Downtime with Predictive Grid AI', challenge: 'Grid outages causing regulatory penalties and customer churn.', solution: 'Predictive grid analytics with IoT sensors and automated alerting workflows.', results: ['40% outage reduction', '99.7% availability', '$5.1M penalty avoidance'], services: ['AI Predictive Analytics', 'IoT Integration', 'Compliance Automation'] },
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subheading">ROI-verified outcomes and transformation journeys.</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Success <span className="gradient-text">Stories</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Real results for real organizations — from faster diagnoses to hundreds of millions in reaped value.
          </p>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {stories.map((s, i) => (
              <div key={i} className="glass-card p-6 sm:p-8">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">{s.industry}</span>
                <h2 className="text-xl font-bold text-white mt-2 mb-4">{s.title}</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-red-400 font-semibold mb-1">Challenge</p>
                    <p className="text-slate-300">{s.challenge}</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-1">Solution</p>
                    <p className="text-slate-300">{s.solution}</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-semibold mb-1">Results</p>
                    <ul className="text-slate-300 space-y-1">
                      {s.results.map((r, j) => <li key={j}>• {r}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold mb-1">Services</p>
                    <p className="text-slate-400 text-xs">{s.services.join(' · ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Success Story?</h2>
          <p className="text-slate-300 mb-8">
            Let&apos;s discuss your goals and design a roadmap with measurable outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">Start Your Project</Link>
            <Link href="/services/" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
