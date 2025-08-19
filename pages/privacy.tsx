import React from 'react';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Zion Tech Group Data Protection</title>
        <meta name="description" content="Learn about Zion Tech Group's commitment to data protection, AI ethics, and user privacy in autonomous innovation systems." />
        <meta property="og:title" content="Privacy Policy — Zion Tech Group Data Protection" />
        <meta property="og:description" content="Learn about Zion Tech Group's commitment to data protection, AI ethics, and user privacy in autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our commitment to protecting your privacy and ensuring ethical AI development 
              in autonomous innovation systems.
            </p>
          </section>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                At Zion Tech Group, we believe that privacy and ethical AI development are fundamental 
                to building trust in autonomous innovation systems. This Privacy Policy outlines how we 
                collect, use, protect, and respect your personal information while maintaining the highest 
                standards of data protection and AI ethics.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                <strong>Last updated:</strong> January 17, 2025
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Personal Information</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Name and contact information (email, phone)</li>
                    <li>• Company and professional details</li>
                    <li>• Communication preferences</li>
                    <li>• Service inquiries and project requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Technical Information</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• IP addresses and device information</li>
                    <li>• Website usage analytics and cookies</li>
                    <li>• System performance metrics</li>
                    <li>• Error logs and diagnostic data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">AI Training Data</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Anonymized usage patterns</li>
                    <li>• System optimization feedback</li>
                    <li>• Performance improvement data</li>
                    <li>• Non-personal technical insights</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">How We Use Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Service Delivery</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Providing autonomous automation solutions</li>
                    <li>• Responding to inquiries and support requests</li>
                    <li>• Customizing services to meet your needs</li>
                    <li>• Processing transactions and payments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">System Improvement</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Enhancing autonomous AI capabilities</li>
                    <li>• Optimizing system performance</li>
                    <li>• Developing new features and services</li>
                    <li>• Ensuring system reliability and security</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Communication</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Sending service updates and notifications</li>
                    <li>• Sharing relevant industry insights</li>
                    <li>• Providing customer support</li>
                    <li>• Marketing communications (with consent)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* AI Ethics and Data Protection */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">AI Ethics and Data Protection</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Ethical AI Principles</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Transparency in AI decision-making processes</li>
                    <li>• Fairness and non-discrimination in algorithms</li>
                    <li>• Accountability for AI system outcomes</li>
                    <li>• Privacy-first design in all AI systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Data Protection Measures</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Access controls and authentication systems</li>
                    <li>• Data minimization and purpose limitation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Autonomous System Safeguards</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Human oversight of critical AI decisions</li>
                    <li>• Explainable AI for transparency</li>
                    <li>• Bias detection and mitigation systems</li>
                    <li>• Continuous monitoring and safety checks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing and Third Parties */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Data Sharing and Third Parties</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information only in the following circumstances:
              </p>
              <ul className="text-white/70 space-y-2 ml-4">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and safety</li>
                <li>• With trusted service providers under strict confidentiality agreements</li>
                <li>• For autonomous system optimization (anonymized data only)</li>
              </ul>
            </section>

            {/* Your Rights and Choices */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Your Rights and Choices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Access and Control</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate or incomplete data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Object to certain processing activities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Communication Preferences</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Choose your preferred contact methods</li>
                    <li>• Set frequency of updates and notifications</li>
                    <li>• Control cookie and tracking preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">AI System Transparency</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Understand how AI systems use your data</li>
                    <li>• Request explanations of AI decisions</li>
                    <li>• Opt-out of AI training data collection</li>
                    <li>• Access AI system audit reports</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Retention and Security */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Data Retention and Security</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Retention Periods</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Personal information: Retained as long as needed for service delivery</li>
                    <li>• Technical data: Retained for system optimization and security</li>
                    <li>• AI training data: Anonymized and retained for continuous improvement</li>
                    <li>• Legal requirements: Retained as required by applicable laws</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Security Measures</h3>
                  <ul className="text-white/70 space-y-2 ml-4">
                    <li>• Multi-factor authentication and access controls</li>
                    <li>• Regular security updates and vulnerability assessments</li>
                    <li>• Employee training on data protection and privacy</li>
                    <li>• Incident response and breach notification procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* International Data Transfers */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">International Data Transfers</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                As a global technology company, we may transfer data internationally. We ensure that 
                all international data transfers comply with applicable data protection laws and 
                implement appropriate safeguards, including:
              </p>
              <ul className="text-white/70 space-y-2 ml-4">
                <li>• Standard contractual clauses approved by regulatory authorities</li>
                <li>• Adequacy decisions for countries with equivalent data protection standards</li>
                <li>• Binding corporate rules for intra-group transfers</li>
                <li>• Additional technical and organizational security measures</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Us</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-white/70">
                <p><strong>Email:</strong> privacy@ziontech.group</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> Zion Tech Group, Privacy Office</p>
                <p><strong>Data Protection Officer:</strong> dpo@ziontech.group</p>
              </div>
              <p className="text-white/80 leading-relaxed mt-4">
                We are committed to responding to your privacy inquiries within 30 days and will 
                work with you to address any concerns about your data or our AI systems.
              </p>
            </section>

            {/* Updates to Policy */}
            <section className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Updates to This Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices, 
                technology, or legal requirements. We will notify you of any material changes through 
                our website, email, or other communication channels. Continued use of our services 
                after such changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}