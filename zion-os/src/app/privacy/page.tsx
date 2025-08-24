export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communications with our support team</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure, 
                so we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
              <p>
                We also use analytics services to understand how visitors interact with our website 
                and improve our services.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to certain processing activities</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We retain your personal information for as long as necessary to provide our services, 
                comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
              <p>
                If you believe we have collected information from a child under 13, please contact us 
                immediately so we can take appropriate action.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">International Transfers</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance 
                with this privacy policy.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have any questions about this privacy policy, please contact us:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">kleber@ziontechgroup.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">+1 (302) 464-0950</a></p>
                <p><strong>Address:</strong> Delaware, United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}