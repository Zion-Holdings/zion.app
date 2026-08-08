import { } from 'next/navigation';

export const metadata = {
  title: "Identity & Access Management (IAM) Platform - Zion Tech Group",
  description: "Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-identity-access-management`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Identity &amp; Access Management (IAM) Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Single sign-on (SSO) with 5000+ app integrations</li>
            <li>Adaptive multi-factor authentication with risk scoring</li>
            <li>Privileged access management (PAM) with session recording</li>
            <li>Automated access provisioning and de-provisioning</li>
            <li>Identity governance with access certification workflows</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce access-related incidents by 90%</li>
            <li>Achieve 100% compliance with identity best practices</li>
            <li>Eliminate orphaned accounts and access creep</li>
            <li>Seamless experience with frictionless SSO for users</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$5999</p>
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
