import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Enterprise Metadata Management | Zion Tech Group`,
  description: `Centralized metadata management platform with data cataloging, glossary management, and lineage tracking. Supports 50+ data sources.`,
  keywords: 'Data Catalog, Business Glossary, Lineage Tracking, Impact Analysis, Tagging & Classification, Data, Data Governance, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-metadata-management/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Enterprise Metadata Management</h1>
        <p className="text-lg text-slate-300 mb-8">Centralized metadata management platform with data cataloging, glossary management, and lineage tracking. Supports 50+ data sources.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">Data</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Data Governance</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Data Catalog</li>
        <li class="text-slate-300">Business Glossary</li>
        <li class="text-slate-300">Lineage Tracking</li>
        <li class="text-slate-300">Impact Analysis</li>
        <li class="text-slate-300">Tagging &amp; Classification</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Find data faster</li>
        <li class="text-slate-300">Understand data lineage</li>
        <li class="text-slate-300">Improve governance</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$399/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,099/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/data-data-lake-platform/" class="text-purple-300 hover:text-purple-200 font-medium">Data Lake Platform</a>
                <p class="text-slate-400 text-sm mt-1">Managed data lake platform with ingestion, cataloging, governance, and analytics capabilities. Supports structured and s...</p>
              </div>
            
            
              <div>
                <a href="/services/w176-data-governance-platform/" class="text-purple-300 hover:text-purple-200 font-medium">Data Governance Platform</a>
                <p class="text-slate-400 text-sm mt-1">Enterprise data governance: policy management, data classification, stewardship workflows, and compliance tracking. Gove...</p>
              </div>
            
            
              <div>
                <a href="/services/w177-data-catalog/" class="text-purple-300 hover:text-purple-200 font-medium">Automated Data Catalog</a>
                <p class="text-slate-400 text-sm mt-1">Auto-discover and catalog data assets: schema inference, lineage tracking, business glossary. Find any data in seconds....</p>
              </div>
            
            
              <div>
                <a href="/services/w177-data-lineage/" class="text-purple-300 hover:text-purple-200 font-medium">Data Lineage and Impact Analysis</a>
                <p class="text-slate-400 text-sm mt-1">Track data lineage end-to-end: source to dashboard, impact analysis for changes, compliance documentation....</p>
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
