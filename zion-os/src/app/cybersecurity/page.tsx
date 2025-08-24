import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Services - Zion Tech Group",
  description: "Advanced cybersecurity solutions including threat detection, SOC2 compliance, and AI-powered security systems to protect your digital assets.",
  keywords: "cybersecurity, threat detection, SOC2 compliance, AI security, digital protection, Zion Tech Group",
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Cybersecurity Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Protect your digital assets with advanced cybersecurity solutions that combine cutting-edge technology 
            with industry best practices to keep your organization secure.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Security for the Digital Age</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our cybersecurity services provide end-to-end protection for your organization's digital infrastructure, 
                data, and applications. We combine advanced threat detection, automated response systems, and 
                compliance management to create a robust security posture.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From real-time threat monitoring to compliance automation, our solutions adapt to evolving 
                security challenges and provide 24/7 protection for your critical assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Security Assessment
                </Link>
                <Link href="/soc2-compliance-automation" className="btn-secondary">
                  SOC2 Compliance
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Security Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  24/7 threat monitoring and response
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  AI-powered threat detection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Automated compliance management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Zero-trust security architecture
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cybersecurity Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Threat Detection */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Detection & Response</h3>
              <p className="text-gray-400 mb-4">
                Advanced threat detection using AI and machine learning to identify and respond to security incidents in real-time.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Real-time monitoring</li>
                <li>• Behavioral analysis</li>
                <li>• Automated response</li>
                <li>• Incident management</li>
              </ul>
            </div>

            {/* SOC2 Compliance */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">SOC2 Compliance Automation</h3>
              <p className="text-gray-400 mb-4">
                Streamline your SOC2 compliance process with automated monitoring, reporting, and audit trail management.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Automated compliance checks</li>
                <li>• Real-time reporting</li>
                <li>• Audit trail management</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            {/* AI-Powered Security */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Security</h3>
              <p className="text-gray-400 mb-4">
                Leverage artificial intelligence to enhance security operations with predictive analytics and automated threat hunting.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Predictive analytics</li>
                <li>• Automated threat hunting</li>
                <li>• Machine learning models</li>
                <li>• Pattern recognition</li>
              </ul>
            </div>

            {/* Zero Trust */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Trust Architecture</h3>
              <p className="text-gray-400 mb-4">
                Implement a zero-trust security model that verifies every user, device, and connection before granting access.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Identity verification</li>
                <li>• Device authentication</li>
                <li>• Network segmentation</li>
                <li>• Access control</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Protection & Privacy</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive data protection solutions including encryption, access controls, and privacy compliance management.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Data encryption</li>
                <li>• Access controls</li>
                <li>• Privacy compliance</li>
                <li>• Data classification</li>
              </ul>
            </div>

            {/* Security Operations */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Operations Center</h3>
              <p className="text-gray-400 mb-4">
                24/7 security monitoring and incident response with dedicated security analysts and automated response systems.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• 24/7 monitoring</li>
                <li>• Incident response</li>
                <li>• Security analytics</li>
                <li>• Threat intelligence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Security Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">AI & ML</h4>
              <p className="text-sm text-gray-400">Machine learning for threat detection and response</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Behavioral Analytics</h4>
              <p className="text-sm text-gray-400">User and entity behavior analysis</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Threat Intelligence</h4>
              <p className="text-sm text-gray-400">Real-time threat feeds and analysis</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Automation</h4>
              <p className="text-sm text-gray-400">Automated response and remediation</p>
            </div>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30">
              <h3 className="text-xl font-bold mb-3">SOC2 Type II</h3>
              <p className="text-gray-300 text-sm mb-4">
                Achieve and maintain SOC2 Type II compliance with automated monitoring and reporting systems.
              </p>
              <Link href="/soc2-compliance-automation" className="text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </Link>
            </div>
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-xl font-bold mb-3">ISO 27001</h3>
              <p className="text-gray-300 text-sm mb-4">
                Implement ISO 27001 information security management system with our comprehensive framework.
              </p>
              <Link href="/iso-27001-compliance" className="text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </Link>
            </div>
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-xl font-bold mb-3">GDPR Compliance</h3>
              <p className="text-gray-300 text-sm mb-4">
                Ensure GDPR compliance with data protection and privacy management solutions.
              </p>
              <Link href="/gdpr-compliance" className="text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Secure Your Digital Future</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Protect your organization with our comprehensive cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Security Assessment
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Security Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}