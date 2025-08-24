import React from 'react';
import { Link } from 'react-router-dom';

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-orange-600 to-red-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Protect your business with cutting-edge cybersecurity solutions. From threat detection to incident response, 
              our security services deliver comprehensive protection against evolving cyber threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Get Started Today
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cybersecurity Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your organization from cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Threat Detection */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Threat Detection</h3>
              <p className="text-gray-600 mb-4">
                Advanced threat detection using artificial intelligence and machine learning.
              </p>
              <div className="text-2xl font-bold text-red-600 mb-4">$1,299/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Real-time monitoring</li>
                <li>• AI threat analysis</li>
                <li>• Automated response</li>
                <li>• 24/7 security</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Zero-Trust Security */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero-Trust Security Framework</h3>
              <p className="text-gray-600 mb-4">
                Implement zero-trust security principles across your organization.
              </p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$2,499/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Identity verification</li>
                <li>• Access control</li>
                <li>• Network segmentation</li>
                <li>• Continuous monitoring</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Penetration Testing */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security testing to identify vulnerabilities in your systems.
              </p>
              <div className="text-2xl font-bold text-yellow-600 mb-4">$3,999</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Vulnerability assessment</li>
                <li>• Exploit testing</li>
                <li>• Detailed reporting</li>
                <li>• Remediation guidance</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our cybersecurity solutions can protect your organization from cyber threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </Link>
            <a href="tel:+13024640950" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}