import Head from 'next/head';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the rules, rights, and responsibilities when using our services and website." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, Zion Tech Group, service terms, legal terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
        
        <meta property="og:title" content="Terms of Service | Zion Tech Group" />
        <meta property="og:description" content="Read our Terms of Service to understand the rules and responsibilities when using our services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Zion Tech Group" />
        <meta name="twitter:description" content="Understand the terms and conditions for using our services." />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Terms of Service",
          "description": "Terms of Service for Zion Tech Group",
          "url": "https://ziontechgroup.com/terms",
          "publisher": { "@type": "Organization", "name": "Zion Tech Group" }
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
        </section>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-white/80 text-lg">
              <strong>Last updated:</strong> August 15, 2025
            </p>
            <p className="text-white/70 mt-2">
              These Terms of Service (&quot;Terms&quot;) govern your use of Zion Tech Group&apos;s services, including our website, applications, and any related services (collectively, the &quot;Services&quot;).
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Acceptance of Terms</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Agreement to Terms</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• You must be at least 18 years old</li>
                    <li>• You have legal capacity to enter agreements</li>
                    <li>• You accept all terms and conditions</li>
                    <li>• You will comply with applicable laws</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Changes to Terms</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• We may modify terms at any time</li>
                    <li>• Continued use constitutes acceptance</li>
                    <li>• Material changes require notice</li>
                    <li>• You can reject changes by discontinuing use</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Description of Services</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                Zion Tech Group provides AI-powered cloud automation solutions, autonomous systems, and intelligent optimization technologies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Solutions</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Machine learning models</li>
                    <li>• Natural language processing</li>
                    <li>• Predictive analytics</li>
                    <li>• Intelligent automation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cloud Services</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Infrastructure management</li>
                    <li>• Performance optimization</li>
                    <li>• Security and compliance</li>
                    <li>• Scalability solutions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Consulting</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Technical advisory</li>
                    <li>• Implementation support</li>
                    <li>• Training and education</li>
                    <li>• Strategic planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Agreement to Terms</h2>
            <p className="text-white/80 mb-4">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Zion Tech Group.
            </p>
            <p className="text-white/70">
              If you do not agree to these terms, please do not use our Services. We reserve the right to modify these terms at any time, and your continued use of the Services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
