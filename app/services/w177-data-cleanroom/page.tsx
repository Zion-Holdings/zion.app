import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Secure Data Clean Rooms | Zion Tech Group`,
  description: `Data clean rooms for secure collaboration: query across parties without exposing raw data. Differential privacy.`,
  keywords: 'Cross-organization data querying, No raw data exposure, Differential privacy controls, Row and column level access, Usage metering and audit logging, Compliance controls (GDPR, HIPAA), Integration with Snowflake, BigQuery, Databricks, data, Data Collaboration, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-data-cleanroom/`,
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div class="mb-6">
          <a href="/services/" class="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2">
            ← Back to All Services
          </a>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-white">Secure Data Clean Rooms</h1>
        <p className="text-lg text-slate-300 mb-8">Data clean rooms for secure collaboration: query across parties without exposing raw data. Differential privacy.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">data</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Data Collaboration</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Cross-organization data querying</li>
        <li class="text-slate-300">No raw data exposure</li>
        <li class="text-slate-300">Differential privacy controls</li>
        <li class="text-slate-300">Row and column level access</li>
        <li class="text-slate-300">Usage metering and audit logging</li>
        <li class="text-slate-300">Compliance controls (GDPR</li>
        <li class="text-slate-300">HIPAA)</li>
        <li class="text-slate-300">Integration with Snowflake</li>
        <li class="text-slate-300">BigQuery</li>
        <li class="text-slate-300">Databricks</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Share insights without exposing raw data</li>
        <li class="text-slate-300">Differential privacy provides math guarantees</li>
        <li class="text-slate-300">Audit logging for governance</li>
        <li class="text-slate-300">Compliance controls for regulated data</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$799/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,499/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$7,999/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-data-quality-engine/" class="text-purple-300 hover:text-purple-200 font-medium">AI Data Quality & Enforcement Engine</a>
                <p class="text-slate-400 text-sm mt-1">Continuous data quality at pipeline scale: automated profiling, statistical anomaly detection, schema drift + auto-fix. ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-esg-reporting-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI ESG Reporting & Sustainability Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automated ESG data collection, scoring, and reporting: GHG emissions tracking, social impact measurement, governance sco...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-etl-pipeline-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI ETL Pipeline Builder</a>
                <p class="text-slate-400 text-sm mt-1">Natural language ETL builder: describe source, target, transformation — AI generates production-ready dbt/Glue/Dataflow ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-port-congestion-predictor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Port Congestion & Shipping Delay Predictor</a>
                <p class="text-slate-400 text-sm mt-1">Predict port congestion 14 days ahead: vessel tracking, berth availability, customs delay prediction, and optimal routin...</p>
              </div>
            
          </div>
        </div>
        
        <div class="text-center">
          <Link
            href="/contact/"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
