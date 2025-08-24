import { prisma } from "@/lib/prisma";

export default async function InstancesPage() {
  let instances: any[] = [];
  let error: string | null = null;

  try {
    instances = await prisma.instance.findMany({
      include: {
        daoConfig: true,
        _count: { select: { deployments: true, features: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("Database connection error:", err);
    error = "Database connection unavailable";
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instances</h1>
      
      {error && (
        <div className="p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
          <p className="text-yellow-400">{error}</p>
          <p className="text-sm text-yellow-300 mt-1">
            This is normal during development. Set up your database connection to see instances.
          </p>
        </div>
      )}

      {instances.length === 0 && !error && (
        <div className="text-center py-8">
          <p className="opacity-70">No instances found. Create your first instance using the Launch Wizard.</p>
          <a 
            href="/multiverse/launch" 
            className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Launch Instance
          </a>
        </div>
      )}

      {instances.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {instances.map((inst) => (
            <div key={inst.id} className="rounded border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{inst.name}</div>
                <span className="text-xs opacity-70">{inst.vertical}</span>
              </div>
              <div className="text-sm opacity-80">{inst.domain || inst.subdomain || inst.slug}</div>
              <div className="text-xs opacity-70 mt-2">Governance: {inst.governanceType}</div>
              <div className="text-xs opacity-70">Deployments: {inst._count.deployments} • Features: {inst._count.features}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}