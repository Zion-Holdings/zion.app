import { } from 'next/navigation';

export const metadata = {
  title: "Cloud-Native Application Development - Zion Tech Group",
  description: "Full-stack cloud-native: containerized microservices, event-driven architecture, Kubernetes, CI/CD from code to production with OpenTelemetry observability from",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-native-app-dev`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cloud-Native Application Development</h1>
        <p className="text-lg text-gray-300 mb-8">Full-stack cloud-native: containerized microservices, event-driven architecture, Kubernetes, CI/CD from code to production with OpenTelemetry observability from day one.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Kubernetes-native microservice architecture</li>
            <li>Event-driven: Kafka/NATS/PubSub patterns</li>
            <li>Auto-generated Helm charts + ArgoCD</li>
            <li>Distributed tracing OpenTelemetry from bootstrap</li>
            <li>GitOps deploy pipeline per environment</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ship production-ready cloud-native apps 4x faster</li>
            <li>Reduce production incidents with built-in observability</li>
            <li>No vendor lock portable cloud-agnostic</li>
            <li>Automated infra provisioning no manual Terraform</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$4999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$14999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$49999</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://calendly.com/kleber-ziontechgroup/consultation" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
