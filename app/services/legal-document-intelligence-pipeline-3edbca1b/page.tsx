
export const metadata = {
  title: "Legal Document Intelligence Pipeline - Zion Tech Group",
  description: "OCR + NLP document-intelligence: pipeline-abstract multi-service orchestration for contracts, invoices, and regulatory submissions; auto-classification, clause ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/legal-document-intelligence-pipeline-3edbca1b`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Legal Document Intelligence Pipeline</h1>
        <p className="text-lg text-gray-300 mb-8">OCR + NLP document-intelligence: pipeline-abstract multi-service orchestration for contracts, invoices, and regulatory submissions; auto-classification, clause extraction, anomaly flag, e-signature ready, approval routing.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>OCR + NLP pipeline orchestrating multiple document types in one session</li>
            <li>Auto-classification — any document placed in input folder routed to correct intake path</li>
            <li>Clause extraction, anomaly flag, and summarisation in same pipeline step</li>
            <li>Approval routing with journalised highlight — every step durably signed and trusting</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Digitise 10,000 pages of paper documents in under 48 hours with 97% accuracy</li>
            <li>Doc throughput of 1,000 pages/hr goes to right business flow automatically without manual triage</li>
            <li>Anomaly flag on invoices or contracts reduces processing teams&#39; manual review time 90%</li>
            <li>Digital signature path removes the engraving bottleneck of physical signature</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999/month</p>
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
