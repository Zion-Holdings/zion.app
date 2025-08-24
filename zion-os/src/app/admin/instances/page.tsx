import { prisma } from "@/lib/prisma";
import { InstanceCard } from "@/components/InstanceCard";

export const metadata = {
  title: "Admin Instances - Zion Tech Group",
  description: "Manage deployed AI instances and system configurations.",
};

export const dynamic = 'force-dynamic';

interface Instance {
  id: string;
  name: string;
  slug: string;
  domain?: string | null;
  subdomain?: string | null;
  vertical: string;
  governanceType: string;
  createdAt: Date;
  _count: {
    deployments: number;
    features: number;
  };
}

export default async function InstancesPage() {
  let instances: Instance[] = [];
  
  try {
    instances = await prisma.instance.findMany({
      include: {
        daoConfig: true,
        _count: { select: { deployments: true, features: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error('Failed to fetch instances:', error);
    // Continue with empty instances array
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Digital Economies</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Manage and monitor all your deployed Zion OS instances. Track deployments, 
          configure features, and oversee governance.
        </p>
      </div>

      {instances.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">No Instances Yet</h3>
          <p className="text-gray-400 mb-8">
            You haven't deployed any digital economies yet. Get started by creating your first instance.
          </p>
          <a href="/multiverse/launch" className="btn-primary">
            Deploy Your First Economy
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {instances.map((instance) => (
              <InstanceCard key={instance.id} instance={instance} />
            ))}
          </div>
          
          <div className="text-center">
            <a href="/multiverse/launch" className="btn-primary">
              Deploy Another Economy
            </a>
          </div>
        </>
      )}
    </div>
  );
}