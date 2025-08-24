export const metadata = {
  title: "Admin Instances - Zion Tech Group",
  description: "Manage deployed AI instances and system configurations.",
};

// Mock data for demonstration
const mockInstances = [
  {
    id: "1",
    name: "AI Business Manager",
    vertical: "Business Automation",
    domain: "ai-biz.ziontechgroup.com",
    governanceType: "ADMIN",
    deploymentCount: 3,
    featureCount: 12
  },
  {
    id: "2",
    name: "Quantum Research Lab",
    vertical: "Research & Development",
    domain: "quantum.ziontechgroup.com",
    governanceType: "DEMOCRATIC",
    deploymentCount: 1,
    featureCount: 8
  },
  {
    id: "3",
    name: "Content Creation Hub",
    vertical: "Media & Marketing",
    domain: "content.ziontechgroup.com",
    governanceType: "ADMIN",
    deploymentCount: 5,
    featureCount: 15
  }
];

export default function InstancesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Instances Management</h1>
      <p className="text-gray-600 mb-6">
        Monitor and manage your deployed AI-powered systems and instances.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInstances.map((inst) => (
          <div key={inst.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-lg text-gray-900">{inst.name}</div>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{inst.vertical}</span>
            </div>
            <div className="text-sm text-gray-600 mb-3">{inst.domain}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Governance:</span>
                <span className="font-medium">{inst.governanceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Deployments:</span>
                <span className="font-medium">{inst.deploymentCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Features:</span>
                <span className="font-medium">{inst.featureCount}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Manage Instance
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Deploy New Instance
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View System Status
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}