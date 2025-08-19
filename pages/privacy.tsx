import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy to understand your rights and our data practices." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Zion Tech Group, privacy rights, data practices" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
        
        <meta property="og:title" content="Privacy Policy | Zion Tech Group" />
        <meta property="og:description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/privacy" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Zion Tech Group" />
        <meta name="twitter:description" content="Learn about our data practices and privacy protection measures." />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Privacy Policy",
          "description": "Privacy Policy for Zion Tech Group",
          "url": "https://ziontechgroup.com/privacy",
          "publisher": { "@type": "Organization", "name": "Zion Tech Group" }
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-white/80 text-lg">
              <strong>Last updated:</strong> August 15, 2025
            </p>
            <p className="text-white/70 mt-2">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Personal Information</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Company and job title</li>
                  <li>• Communication preferences</li>
                  <li>• Account credentials</li>
                </ul>
              </div>
              
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Technical Information</h3>
                <ul className="text-white/70 space-y-2">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Operating system details</li>
                  <li>• Usage analytics and cookies</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Service Delivery</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Provide and maintain our services</li>
                    <li>• Process transactions and payments</li>
                    <li>• Deliver customer support</li>
                    <li>• Send service notifications</li>
                    <li>• Manage user accounts</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Business Operations</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Improve our services</li>
                    <li>• Conduct research and analytics</li>
                    <li>• Send marketing communications</li>
                    <li>• Ensure security and compliance</li>
                    <li>• Manage business relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Data Protection</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/70 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold text-white mb-2">Encryption</h4>
                  <p className="text-white/60 text-sm">All data is encrypted in transit and at rest</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-white mb-2">Access Control</h4>
                  <p className="text-white/60 text-sm">Strict access controls and authentication</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-white mb-2">Monitoring</h4>
                  <p className="text-white/60 text-sm">Continuous security monitoring and auditing</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Access & Control</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• Access your personal information</li>
                    <li>• Request corrections or updates</li>
                    <li>• Delete your data</li>
                    <li>• Export your information</li>
                    <li>• Opt-out of communications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Transparency</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• Clear information about data use</li>
                    <li>• Notification of policy changes</li>
                    <li>• Contact information for questions</li>
                    <li>• Right to lodge complaints</li>
                    <li>• Regular privacy updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/70 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Email</h4>
                  <p className="text-white/70">privacy@ziontechgroup.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-fuchsia-400 mb-2">Address</h4>
                  <p className="text-white/70">
                    Zion Tech Group<br />
                    123 Innovation Drive<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
