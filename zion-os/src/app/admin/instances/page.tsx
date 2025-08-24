// import { prisma } from "@/lib/prisma";

export default async function InstancesPage() {
  // Temporarily commented out for build
  // const instances = await prisma.instance.findMany({
  //   include: {
  //     daoConfig: true,
  //     _count: { select: { deployments: true, features: true } },
  //   },
  //   orderBy: { createdAt: "desc" },
  // });

  const instances: any[] = []; // Temporary empty array

export default function InstancesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Instance Management</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Monitor and manage your deployed digital economy instances
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">{instances.length}</div>
          <div className="text-white/60 text-sm">Total Instances</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">
            {instances.filter(i => i.isPublic).length}
          </div>
          <div className="text-white/60 text-sm">Public Instances</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {instances.filter(i => i.governanceType !== 'ADMIN').length}
          </div>
          <div className="text-white/60 text-sm">DAO Instances</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">
            {instances.reduce((acc, i) => acc + i._count.deployments, 0)}
          </div>
          <div className="text-white/60 text-sm">Total Deployments</div>
        </div>
      </div>

      {/* Instances Grid */}
      {instances.length === 0 ? (
        <div className="card text-center py-12">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-semibold mb-2">No Instances Yet</h2>
          <p className="text-white/70 mb-6">
            Get started by launching your first digital economy instance
          </p>
          <a href="/multiverse/launch" className="btn-primary">
            Launch First Instance
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instances.map((inst) => (
            <div key={inst.id} className="card card-hover">
              {/* Instance Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{inst.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inst.vertical === 'GENERAL' ? 'bg-blue-500/20 text-blue-400' :
                      inst.vertical === 'HEALTH' ? 'bg-green-500/20 text-green-400' :
                      inst.vertical === 'EDUCATION' ? 'bg-purple-500/20 text-purple-400' :
                      inst.vertical === 'LAW' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {inst.vertical}
                    </span>
                    {inst.isPublic && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                        Public
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Z</span>
                </div>
              </div>

              {/* Instance Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <span>🌐</span>
                  <span>{inst.domain || inst.subdomain || inst.slug}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <span>🏛️</span>
                  <span>Governance: {inst.governanceType}</span>
                </div>
                
                {inst.region && (
                  <div className="flex items-center space-x-2 text-sm text-white/70">
                    <span>📍</span>
                    <span>{inst.region}{inst.country ? `, ${inst.country}` : ''}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <span>💎</span>
                  <span>Token: {inst.tokenSystem}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-white/5">
                  <div className="text-lg font-semibold text-blue-400">{inst._count.deployments}</div>
                  <div className="text-xs text-white/60">Deployments</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5">
                  <div className="text-lg font-semibold text-green-400">{inst._count.features}</div>
                  <div className="text-xs text-white/60">Features</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <a 
                  href={`/admin/instances/${inst.id}`} 
                  className="flex-1 btn-secondary text-center text-sm py-2"
                >
                  Manage
                </a>
                <a 
                  href={`/admin/instances/${inst.id}/deployments`} 
                  className="flex-1 btn-secondary text-center text-sm py-2"
                >
                  Deployments
                </a>
              </div>

              {/* Created Date */}
              <div className="text-xs text-white/40 mt-3 pt-3 border-t border-white/10">
                Created: {new Date(inst.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="card text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/multiverse/launch" className="btn-primary">
            🚀 Launch New Instance
          </a>
          <a href="/admin/os-deploy" className="btn-secondary">
            ⚙️ Advanced Deployment
          </a>
        </div>
      </div>

      {/* Admin Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Systems Management</h3>
            <p className="text-gray-300 mb-4">
              Monitor and manage your deployed AI autonomous systems and their performance.
            </p>
            <Link href="/admin/ai-systems" className="text-blue-400 hover:text-blue-300 font-medium">
              Manage Systems →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Access and manage your quantum computing resources and algorithms.
            </p>
            <Link href="/admin/quantum" className="text-green-400 hover:text-green-300 font-medium">
              Quantum Dashboard →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Research & Development</h3>
            <p className="text-gray-300 mb-4">
              Access research tools and development environments for AI consciousness evolution.
            </p>
            <Link href="/admin/research" className="text-purple-400 hover:text-purple-300 font-medium">
              Research Tools →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
            <p className="text-gray-300 mb-4">
              Monitor security protocols and ensure compliance with AI governance frameworks.
            </p>
            <Link href="/admin/security" className="text-orange-400 hover:text-orange-300 font-medium">
              Security Dashboard →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Business Intelligence</h3>
            <p className="text-gray-300 mb-4">
              Access comprehensive business analytics and performance metrics.
            </p>
            <Link href="/admin/analytics" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Analytics Dashboard →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">System Settings</h3>
            <p className="text-gray-300 mb-4">
              Configure system parameters and customize your AI platform settings.
            </p>
            <Link href="/admin/settings" className="text-indigo-400 hover:text-indigo-300 font-medium">
              System Settings →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">System Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
            <div className="text-lg font-semibold text-white mb-2">Active AI Systems</div>
            <p className="text-gray-300 text-sm">Running autonomously</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold text-white mb-2">Uptime</div>
            <p className="text-gray-300 text-sm">System reliability</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-lg font-semibold text-white mb-2">Monitoring</div>
            <p className="text-gray-300 text-sm">Active surveillance</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">5</div>
            <div className="text-lg font-semibold text-white mb-2">Quantum Nodes</div>
            <p className="text-gray-300 text-sm">Processing power</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Technical Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is available 24/7 to help you manage and optimize your AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Contact Support
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {instances.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">
            <Globe className="w-8 h-8 text-white/40" />
          </div>
          <h3 className="text-lg font-medium text-white/60 mb-2">No instances yet</h3>
          <p className="text-white/40 mb-6">Create your first Zion ecosystem to get started</p>
          <a 
            href="/admin/os-deploy" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Rocket className="w-4 h-4" />
            Deploy First Instance
          </a>
        </div>
      )}
    </div>
  );
}