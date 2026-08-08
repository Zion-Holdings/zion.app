import { } from 'next/navigation';

export const metadata = {
  title: "Identity & Access Management (SSO/MFA) - Zion Tech Group",
  description: "SSO (SAML 2.0/OIDC), adaptive MFA (TOTP/WebAuthn/risk-based), SCIM auto-provision/revoke, JIT privileged-access.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-identity-access-management-sso`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Identity &amp; Access Management (SSO/MFA)</h1>
        <p className="text-lg text-gray-300 mb-8">SSO (SAML 2.0/OIDC), adaptive MFA (TOTP/WebAuthn/risk-based), SCIM auto-provision/revoke, JIT privileged-access.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>SSO (SAML 2.0 + OIDC) for all SaaS apps</li>
            <li>Adaptive MFA (TOTP/WebAuthn/risk-based)</li>
            <li>SCIM auto-provision + de-provision per hire/fire</li>
            <li>JIT privileged-access, session recorded</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One password for every app, no helpdesk reset</li>
            <li>MFA adaptive = frictionless for low-risk</li>
            <li>SCIM = no stale accounts or manual sync</li>
            <li>Least-privilege by default, just-in-time allow</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$799</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
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
