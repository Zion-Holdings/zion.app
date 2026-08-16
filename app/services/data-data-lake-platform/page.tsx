import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Data Lake Platform | Zion Tech Group`,
  description: `Managed data lake platform with ingestion, cataloging, governance, and analytics capabilities. Supports structured and semi-structured data at scale.`,
  keywords: 'Data Ingestion, Data Cataloging, Data Governance, Analytics Integration, Schema Management, Data, Data Engineering, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-data-lake-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Data Lake Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Managed data lake platform with ingestion, cataloging, governance, and analytics capabilities. Supports structured and semi-structured data at scale.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">Data</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Data Engineering</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Data Ingestion</li>
        <li class="text-slate-300">Data Cataloging</li>
        <li class="text-slate-300">Data Governance</li>
        <li class="text-slate-300">Analytics Integration</li>
        <li class="text-slate-300">Schema Management</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Centralize data storage</li>
        <li class="text-slate-300">Enable analytics at scale</li>
        <li class="text-slate-300">Govern data access</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$499/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,499/mo</p>
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
                <a href="/services/data-metadata-management/" class="text-purple-300 hover:text-purple-200 font-medium">Enterprise Metadata Management</a>
                <p class="text-slate-400 text-sm mt-1">Centralized metadata management platform with data cataloging, glossary management, and lineage tracking. Supports 50+ d...</p>
              </div>
            
            
              <div>
                <a href="/services/w174-data-contracts/" class="text-purple-300 hover:text-purple-200 font-medium">Data Contracts & Schema Registry</a>
                <p class="text-slate-400 text-sm mt-1">Enforce data contracts between producers and consumers. Schema registry, breaking change detection, compatibility modes,...</p>
              </div>
            
            
              <div>
                <a href="/services/w174-data-mesh-platform/" class="text-purple-300 hover:text-purple-200 font-medium">Data Mesh Platform</a>
                <p class="text-slate-400 text-sm mt-1">Implement data mesh architecture: domain-owned data products, federated governance, self-service infrastructure, and aut...</p>
              </div>
            
            
              <div>
                <a href="/services/w174-reverse-etl/" class="text-purple-300 hover:text-purple-200 font-medium">Reverse ETL & Data Activation</a>
                <p class="text-slate-400 text-sm mt-1">Push data from warehouse to operational systems (CRM, ad platforms, support tools). Activate warehouse data in tools you...</p>
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
