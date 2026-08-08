import { } from 'next/navigation';

export const metadata = {
  title: "Event-Driven Microservices Platform - Zion Tech Group",
  description: "Event backbone as a service: managed Pub-Sub broker, event schema registry, replay from any timestamp, dead-letter queue management, per-service event-sourcing,",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-event-driven-microservices`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Event-Driven Microservices Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Event backbone as a service: managed Pub-Sub broker, event schema registry, replay from any timestamp, dead-letter queue management, per-service event-sourcing, per-event observability, and fan-out handler groups.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Managed Pub-Sub broker with dead-letter queue and exponential backoff retry</li>
            <li>Schema registry with per-service event-sourcing and backward compatibility checks</li>
            <li>Replay any consumer topic from any timestamp for incident forensics or backfill</li>
            <li>Fan-out handler group — subscriber load-balanced and auto-scaled per event type</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Event-driven architecture means resilient async processing with auto-retry</li>
            <li>Schema registry prevents schema-drift from breaking downstream consumer pipelines</li>
            <li>Replay any consumer topic from any timestamp during incident forensics</li>
            <li>Fan-out scales to 10,000 events per second per topic without manual configuration</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999</p>
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
