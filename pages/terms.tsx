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
              These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, applications, and any related services (collectively, the "Services").
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">User Accounts and Registration</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Account Creation</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Provide accurate information</li>
                    <li>• Maintain account security</li>
                    <li>• Keep credentials confidential</li>
                    <li>• Notify us of unauthorized use</li>
                    <li>• One account per person</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Account Responsibilities</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Monitor account activity</li>
                    <li>• Update information promptly</li>
                    <li>• Comply with usage policies</li>
                    <li>• Report security concerns</li>
                    <li>• Maintain compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Acceptable Use Policy</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                You agree to use our Services only for lawful purposes and in accordance with these Terms:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Permitted Uses</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Business and personal use</li>
                    <li>• Educational purposes</li>
                    <li>• Research and development</li>
                    <li>• Legitimate business operations</li>
                    <li>• Compliance with applicable laws</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">Prohibited Uses</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Illegal or harmful activities</li>
                    <li>• Violation of intellectual property</li>
                    <li>• Harassment or abuse</li>
                    <li>• Attempting to gain unauthorized access</li>
                    <li>• Interfering with service operation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Our Rights</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Service content and software</li>
                    <li>• Trademarks and logos</li>
                    <li>• Patents and trade secrets</li>
                    <li>• Copyrighted materials</li>
                    <li>• Proprietary algorithms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Your Rights</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Limited license to use services</li>
                    <li>• Access to your own data</li>
                    <li>• Fair use of public content</li>
                    <li>• Rights to your contributions</li>
                    <li>• Personal use permissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Privacy and Data Protection</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy:
              </p>
              
              <ul className="text-white/70 space-y-2">
                <li>• Data collection and processing practices</li>
                <li>• Information sharing and disclosure</li>
                <li>• Data security measures</li>
                <li>• Your privacy rights and choices</li>
                <li>• International data transfers</li>
                <li>• Cookie and tracking technology usage</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Payment Terms and Billing</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Payment Obligations</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Pay all fees when due</li>
                    <li>• Provide valid payment methods</li>
                    <li>• Maintain current billing information</li>
                    <li>• Authorize recurring charges</li>
                    <li>• Accept price changes with notice</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Billing and Invoicing</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Monthly or annual billing cycles</li>
                    <li>• Electronic invoicing</li>
                    <li>• Late payment penalties</li>
                    <li>• Dispute resolution process</li>
                    <li>• Refund policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Service Availability and Support</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Uptime and Reliability</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• 99.9% uptime commitment</li>
                    <li>• Scheduled maintenance windows</li>
                    <li>• Emergency maintenance procedures</li>
                    <li>• Service level agreements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technical Support</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• 24/7 emergency support</li>
                    <li>• Business hours assistance</li>
                    <li>• Multiple support channels</li>
                    <li>• Response time commitments</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Service Updates</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Regular feature updates</li>
                    <li>• Security patches</li>
                    <li>• Performance improvements</li>
                    <li>• Backward compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                To the maximum extent permitted by law, our liability is limited as follows:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Liability Limits</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Maximum liability: fees paid</li>
                    <li>• No consequential damages</li>
                    <li>• No indirect losses</li>
                    <li>• No punitive damages</li>
                    <li>• Force majeure exclusions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">Exclusions</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Intentional misconduct</li>
                    <li>• Gross negligence</li>
                    <li>• Personal injury claims</li>
                    <li>• Death or property damage</li>
                    <li>• Statutory violations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Indemnification</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                You agree to indemnify and hold harmless Zion Tech Group from any claims arising from your use of the Services:
              </p>
              
              <ul className="text-white/70 space-y-2">
                <li>• Violation of these Terms</li>
                <li>• Misuse of our Services</li>
                <li>• Infringement of third-party rights</li>
                <li>• Violation of applicable laws</li>
                <li>• Claims by other users</li>
                <li>• Costs of defense and settlement</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Termination and Suspension</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">Termination by Us</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Violation of Terms</li>
                    <li>• Non-payment of fees</li>
                    <li>• Fraudulent activity</li>
                    <li>• Service discontinuation</li>
                    <li>• Legal requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Termination by You</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Written notice required</li>
                    <li>• 30-day notice period</li>
                    <li>• Final billing and payment</li>
                    <li>• Data export options</li>
                    <li>• Account deactivation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Dispute Resolution</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                We prefer to resolve disputes amicably. The following process applies to any disputes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Step 1: Direct Discussion</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Contact our support team</li>
                    <li>• Describe the issue clearly</li>
                    <li>• Provide relevant details</li>
                    <li>• Allow reasonable time for response</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Step 2: Mediation</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Neutral third-party mediator</li>
                    <li>• Informal resolution process</li>
                    <li>• Shared mediation costs</li>
                    <li>• Non-binding recommendations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Step 3: Arbitration</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Binding arbitration</li>
                    <li>• Single arbitrator</li>
                    <li>• Expedited procedures</li>
                    <li>• Limited discovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law and Jurisdiction</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                These Terms are governed by and construed in accordance with the laws of the jurisdiction where Zion Tech Group is incorporated:
              </p>
              
              <ul className="text-white/70 space-y-2">
                <li>• Applicable state and federal laws</li>
                <li>• International law considerations</li>
                <li>• Choice of law provisions</li>
                <li>• Venue and jurisdiction</li>
                <li>• Service of process</li>
                <li>• Enforcement of judgments</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Severability and Waiver</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Severability</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Invalid provisions are severed</li>
                    <li>• Remaining terms remain valid</li>
                    <li>• Court may modify invalid terms</li>
                    <li>• Intent is preserved</li>
                    <li>• Enforceability maintained</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Waiver</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• No waiver of rights</li>
                    <li>• Written waiver required</li>
                    <li>• Specific to circumstances</li>
                    <li>• No general waiver</li>
                    <li>• Future enforcement preserved</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-white/80 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Legal Department</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Email: legal@ziontechgroup.com</li>
                    <li>• Phone: +1 (555) 123-4567</li>
                    <li>• Address: [Company Address]</li>
                    <li>• General Counsel</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Times</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• General inquiries: 5 business days</li>
                    <li>• Legal matters: 10 business days</li>
                    <li>• Urgent issues: 2 business days</li>
                    <li>• Emergency: 24 hours</li>
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
