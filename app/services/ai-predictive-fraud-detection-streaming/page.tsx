import { } from 'next/navigation';

export const metadata = {
  title: "Streaming Fraud Detection (Real-Time) - Zion Tech Group",
  description: "Real-time fraud scoring on Kafka event stream: feature engineering IsolationForest + XGBoost alert/block with feedback loop for model retrain.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-predictive-fraud-detection-streaming`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Streaming Fraud Detection (Real-Time)</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time fraud scoring on Kafka event stream: feature engineering IsolationForest + XGBoost alert/block with feedback loop for model retrain.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Kafka event stream feature engineering</li>
            <li>IsolationForest + XGBoost stacked fraud score</li>
            <li>Online feature store for low-latency inference</li>
            <li>Feedback loop model retrain pipeline</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Block fraud in real-time, not batch</li>
            <li>Low-latency inference &lt;50ms per transaction</li>
            <li>Feedback loop = model improves every day</li>
            <li>Feature store = fast inference, no ETL lag</li>
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
              <p className="text-2xl font-bold mb-2">$11999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$34999</p>
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
