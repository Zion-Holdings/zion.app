import { } from 'next/navigation';

export const metadata = {
  title: "AI ETL Pipeline Builder - Zion Tech Group",
  description: "Natural language ETL builder: describe source, target, transformation — AI generates production-ready dbt/Glue/Dataflow pipeline. Auto-tests, docs, type-map.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-etl-pipeline-builder`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI ETL Pipeline Builder</h1>
        <p className="text-lg text-gray-300 mb-8">Natural language ETL builder: describe source, target, transformation — AI generates production-ready dbt/Glue/Dataflow pipeline. Auto-tests, docs, type-map.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>NL to ETL: dbt/Glue/Dataflow</li>
            <li>Auto-generated transform tests + documentation</li>
            <li>Schema mapping + type coercion per column</li>
            <li>Schedule + alert (Airflow/Step/Cloud Scheduler)</li>
            <li>CLI + UI — iterate pipeline in minutes</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Build ETL pipelines 10x faster than hand-coding</li>
            <li>Zero manual type-mapping per column</li>
            <li>Auto-tested pipelines — no deploy without tests</li>
            <li>Non-engineers build pipelines via NL interface</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$149</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$449</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
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
