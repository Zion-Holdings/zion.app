import { } from 'next/navigation';

export const metadata = {
  title: "Privileged Access Management - Zion Tech Group",
  description: "PAM platform: just-in-time privilege elevation, live session recording with playback, FIPS-140-2 certified credential vault, break-glass override, least-privilege policy engine per role, and quarterly",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-privileged-access-management`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privileged Access Management</h1>
        <p className="text-lg text-gray-300 mb-8">PAM platform: just-in-time privilege elevation, live session recording with playback, FIPS-140-2 certified credential vault, break-glass override, least-privilege policy engine per role, and quarterly access certification auto-workflow.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Just-in-time privilege elevation for cloud services, databases, and ops tools</li>
            <li>Live session recording with video-plus-terminal playback and audit timestamping</li>
            <li>FIPS-140-2 certified credential vault — secrets never persisted to disk</li>
            <li>Break-glass override with approval chain and board-level notification per use</li>
            <li>Least-privilege policy engine auto-generates per role and per system access policies</li>
            <li>Access certification per quarter — auto-approve or manager re-approve within 90-day window</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Eliminate standing admin credentials — no password-spray takeover possible</li>
            <li>Session recording audit trail satisfies SOC2, K-22956, and Korean regulatory exams automatically</li>
            <li>JIT elevation means privilege granted for 1 minute before the need arises</li>
            <li>Access certification completed before quarter-end with no manual follow-up chase</li>
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
              <p className="text-2xl font-bold mb-2">$7999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$24999</p>
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
