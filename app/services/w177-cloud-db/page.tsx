import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Cloud Database Managed Service | Zion Tech Group`,
  description: `Managed cloud databases: RDS, Cloud SQL, Cosmos DB, DynamoDB. Performance tuning, HA/DR, cost optimization.`,
  keywords: 'Database provisioning and configuration, Performance tuning and query optimization, High availability and disaster recovery, Read replicas and scaling, Backup and point-in-time recovery, Cost optimization (right-sizing, reserved), AWS RDS, Azure SQL, GCP Cloud SQL, DynamoDB, cloud, Data Operations, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-cloud-db/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Cloud Database Managed Service</h1>
        <p className="text-lg text-slate-300 mb-8">Managed cloud databases: RDS, Cloud SQL, Cosmos DB, DynamoDB. Performance tuning, HA/DR, cost optimization.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">cloud</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Data Operations</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Database provisioning and configuration</li>
        <li class="text-slate-300">Performance tuning and query optimization</li>
        <li class="text-slate-300">High availability and disaster recovery</li>
        <li class="text-slate-300">Read replicas and scaling</li>
        <li class="text-slate-300">Backup and point-in-time recovery</li>
        <li class="text-slate-300">Cost optimization (right-sizing</li>
        <li class="text-slate-300">reserved)</li>
        <li class="text-slate-300">AWS RDS</li>
        <li class="text-slate-300">Azure SQL</li>
        <li class="text-slate-300">GCP Cloud SQL</li>
        <li class="text-slate-300">DynamoDB</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Expert DBA management without hiring</li>
        <li class="text-slate-300">Performance tuning reduces query times</li>
        <li class="text-slate-300">HA/DR for business continuity</li>
        <li class="text-slate-300">Cost optimization reduces cloud spend</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$299/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$899/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,999/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-cdn-edge-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI CDN & Edge Performance Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Optimize content delivery: intelligent caching, edge compute routing, image/video optimization, and DDoS protection. Rea...</p>
              </div>
            
            
              <div>
                <a href="/services/api-development/" class="text-purple-300 hover:text-purple-200 font-medium">API Development & Integration</a>
                <p class="text-slate-400 text-sm mt-1">Design, build, and manage high-performance APIs that connect systems, enable automation, and power digital products at e...</p>
              </div>
            
            
              <div>
                <a href="/services/aws-serverless-migration/" class="text-purple-300 hover:text-purple-200 font-medium">AWS Serverless Migration</a>
                <p class="text-slate-400 text-sm mt-1">Migrate EC2/S3 apps to serverless: Lambda + API Gateway + DynamoDB event-driven. Schema migration dual-write zero-downti...</p>
              </div>
            
            
              <div>
                <a href="/services/backup-disaster-recovery/" class="text-purple-300 hover:text-purple-200 font-medium">Backup & Disaster Recovery</a>
                <p class="text-slate-400 text-sm mt-1">Enterprise backup solutions with automated disaster recovery, RPO/RSL guarantees, geo-redundant storage, and instant fai...</p>
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
