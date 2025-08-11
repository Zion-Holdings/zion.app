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
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instances</h1>
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
    </div>
  );
}