import { } from 'next/navigation';

export const metadata = {
  title: "IT Data Protection, Backup & Ransomware Recovery - Zion Tech Group",
  description: "Comprehensive data protection with immutable backups, air-gapped copies, and instant ransomware recovery. Achieve RPO under 1 hour and RTO under 15 minutes.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-data-protection`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">IT Data Protection, Backup &amp; Ransomware Recovery</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive data protection with immutable backups, air-gapped copies, and instant ransomware recovery. Achieve RPO under 1 hour and RTO under 15 minutes.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Immutable and air-gapped backups</li>
            <li>Instant VM and file-level recovery</li>
            <li>Ransomware detection and automated isolation</li>
            <li>Cross-site and cloud replication</li>
            <li>Automated backup testing and verification</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Recover from ransomware in under 15 minutes</li>
            <li>Achieve RPO under 1 hour</li>
            <li>Automate backup testing and compliance</li>
            <li>Protect against data loss from any threat</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$3,000/mo/month</p>
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
