import { } from 'next/navigation';

export const metadata = {
  title: "Unstructured Data Lake - Zion Tech Group",
  description: "Unstructured data pipeline and lake: ingest PDF, Images, Audio, and Video at scale; auto-classify per document schema; OCR, ASR, object-detection hooks per file type; natural-language query with cited",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-unstructured-data-lake`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Unstructured Data Lake</h1>
        <p className="text-lg text-gray-300 mb-8">Unstructured data pipeline and lake: ingest PDF, Images, Audio, and Video at scale; auto-classify per document schema; OCR, ASR, object-detection hooks per file type; natural-language query with cited source passages.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ingest PDF, Images, Audio, and Video with automatic format and codec detection</li>
            <li>Auto-classify per schema: invoice, contract, report, or document using layout-aware LLM</li>
            <li>OCR and ASR and object-detection hooks applied per detected file type</li>
            <li>Natural-language query returns retrieved chunks with cited source passages</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Query petabytes of unstructured docs as easily as a Google search</li>
            <li>Document-type auto-classify eliminates the need for manual tagging and folder sorting</li>
            <li>3D model height maps and architectural drawings extracted, not just text</li>
            <li>All answers are cited and retrieved — zero hallucinations and zero AI-assumed data</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$7499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$22999</p>
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
