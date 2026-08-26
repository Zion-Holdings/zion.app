import { } from 'next/navigation';

export const metadata = {
  title: "MFA & Passwordless Authentication - Zion Tech Group",
  description: "Deploy modern MFA and passwordless auth: FIDO2/WebAuthn, passkeys, push auth, and conditional access. Reduce phishing by 99% with phishing-resistant factors.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-mfa-passwordless`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">MFA &amp; Passwordless Authentication</h1>
        <p className="text-lg text-gray-300 mb-8">Deploy modern MFA and passwordless auth: FIDO2/WebAuthn, passkeys, push auth, and conditional access. Reduce phishing by 99% with phishing-resistant factors.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>FIDO2/WebAuthn and passkey deployment</li>
            <li>Push notification authentication</li>
            <li>Conditional access policies</li>
            <li>Phishing-resistant MFA enforcement</li>
            <li>Passwordless migration path</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce phishing success by 99%</li>
            <li>Passwordless eliminates password attacks</li>
            <li>Passkeys work across all devices</li>
            <li>Conditional access adapts to risk level</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$3/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$6/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$12/user/mo/month</p>
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
