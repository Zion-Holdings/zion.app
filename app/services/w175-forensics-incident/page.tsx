import { } from 'next/navigation';

export const metadata = {
  title: "Digital Forensics & Incident Response - Zion Tech Group",
  description: "DFIR service: evidence collection, forensic analysis, attribution, and legal-ready reporting. Respond to breaches with certified investigators and chain of cust",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-forensics-incident`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Digital Forensics &amp; Incident Response</h1>
        <p className="text-lg text-gray-300 mb-8">DFIR service: evidence collection, forensic analysis, attribution, and legal-ready reporting. Respond to breaches with certified investigators and chain of custody.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Evidence collection with chain of custody</li>
            <li>Disk and memory forensic analysis</li>
            <li>Network forensic analysis and PCAP review</li>
            <li>Malware reverse engineering</li>
            <li>Attribution and threat actor profiling</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Court-admissible evidence with chain of custody</li>
            <li>Certified investigators with DFIR experience</li>
            <li>Malware analysis reveals attack methodology</li>
            <li>Legal-ready reports for litigation and insurance</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$15,000/incident/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$35,000/incident/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
