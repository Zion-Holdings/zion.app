import { prisma } from "@/lib/prisma";

export default async function InstancesPage() {
  const instances = await prisma.instance.findMany({
    include: {
      daoConfig: true,
      _count: { select: { deployments: true, features: true } },
    },
    orderBy: { createdAt: "desc" },
  });

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
    </div>
  );
}