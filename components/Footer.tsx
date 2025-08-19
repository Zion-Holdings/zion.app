import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-white/70 text-sm mb-4">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-white/60 hover:text-fuchsia-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-white/60 hover:text-green-400 transition-colors">
                <span className="sr-only">GitHub</span>
                📚
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  AI Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Automation Systems
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  DevOps & CI/CD
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-white/70 hover:text-fuchsia-400 transition-colors text-sm">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-white/70 hover:text-fuchsia-400 transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/resources" className="text-white/70 hover:text-fuchsia-400 transition-colors text-sm">
                  Free Tools & Templates
                </a>
              </li>
              <li>
                <a href="/resources" className="text-white/70 hover:text-fuchsia-400 transition-colors text-sm">
                  Implementation Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/resources" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Zion Tech Group. All rights reserved. | Autonomous Innovation Hub
          </p>
        </div>
      </div>
    </footer>
  );
}