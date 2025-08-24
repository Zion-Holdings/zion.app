import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AdvancedCybersecuritySuitePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Advanced Cybersecurity Suite | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring to safeguard your digital assets." />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-cybersecurity-suite" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Advanced Cybersecurity Suite
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Protect your digital assets with AI-powered cybersecurity that detects, prevents, and responds to threats in real-time. Stay ahead of evolving cyber risks with our comprehensive security suite.
          </p>
        </div>

        {/* Security Overview */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Protection</h2>
              <p className="text-white/80 text-lg mb-6">
                Our advanced cybersecurity suite provides multi-layered protection across all aspects of your digital infrastructure. From network security to endpoint protection, we've got you covered.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">AI-powered threat detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">24/7 automated monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Instant threat response</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fortress-Level Security</h3>
              <p className="text-white/80">
                Build an impenetrable digital fortress with our advanced cybersecurity solutions that adapt and evolve with emerging threats.
              </p>
            </div>
          </div>
        </div>

        {/* Security Components */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Network Security</h3>
              <p className="text-white/70 mb-4">
                Advanced firewall protection, intrusion detection, and network monitoring to secure your infrastructure.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Next-gen firewalls</li>
                <li>• IDS/IPS systems</li>
                <li>• Network segmentation</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-white mb-3">Endpoint Protection</h3>
              <p className="text-white/70 mb-4">
                Comprehensive protection for all devices with advanced malware detection and prevention.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Anti-malware</li>
                <li>• Device control</li>
                <li>• Application whitelisting</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Security</h3>
              <p className="text-white/70 mb-4">
                Secure cloud environments with identity management, data encryption, and access controls.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Identity & access management</li>
                <li>• Data encryption</li>
                <li>• Cloud monitoring</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-white/70 mb-4">
                Comprehensive data security with encryption, backup protection, and privacy controls.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Data encryption</li>
                <li>• Backup security</li>
                <li>• Privacy compliance</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-3">Identity Security</h3>
              <p className="text-white/70 mb-4">
                Multi-factor authentication, privileged access management, and identity governance.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Multi-factor authentication</li>
                <li>• Privileged access management</li>
                <li>• Identity governance</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Security</h3>
              <p className="text-white/70 mb-4">
                Protect mobile devices and applications with advanced mobile threat defense.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Mobile threat defense</li>
                <li>• App security</li>
                <li>• Device management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI-Powered Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">AI-Powered Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🧠 Intelligent Threat Detection</h3>
                <p className="text-white/70">
                  AI algorithms analyze patterns and behaviors to identify threats before they can cause damage. Our system learns from every incident to improve detection accuracy.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">⚡ Automated Response</h3>
                <p className="text-white/70">
                  Instant automated response to security incidents, including threat isolation, system lockdown, and incident reporting. No waiting for human intervention.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">📊 Behavioral Analytics</h3>
                <p className="text-white/70">
                  Advanced user and entity behavior analytics to detect anomalies and potential insider threats. Understand normal patterns to identify deviations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🔍 Predictive Threat Intelligence</h3>
                <p className="text-white/70">
                  Stay ahead of emerging threats with predictive intelligence that identifies attack patterns and vulnerabilities before they're exploited.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🔄 Continuous Learning</h3>
                <p className="text-white/70">
                  Our security systems continuously learn and adapt to new threat vectors, ensuring your protection evolves with the threat landscape.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🎯 Context-Aware Security</h3>
                <p className="text-white/70">
                  Security decisions based on context, user behavior, and risk assessment rather than rigid rules. Intelligent security that adapts to your environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance & Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">SOC 2</h3>
              <p className="text-white/70 text-sm">Type II compliance with automated controls and monitoring</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg font-semibold text-white mb-2">GDPR</h3>
              <p className="text-white/70 text-sm">Full compliance with European data protection regulations</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-semibold text-white mb-2">PCI DSS</h3>
              <p className="text-white/70 text-sm">Payment card industry security standards compliance</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-semibold text-white mb-2">HIPAA</h3>
              <p className="text-white/70 text-sm">Healthcare information protection compliance</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Cybersecurity Suite?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">99.9% threat detection rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Zero false positive alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Instant threat response</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">24/7 automated monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Compliance automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Scalable protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Digital Future Today</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Don't wait for a security breach to protect your assets. Our advanced cybersecurity suite provides the protection you need to stay ahead of threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
            >
              Get Protected
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-3 border border-red-500 text-red-400 hover:bg-red-500/10 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}