import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
              Zion Tech Group
            </h3>
            <p className="text-white/70 mb-4 max-w-md">
              Pioneering the future of autonomous technology and AI-driven innovation. 
              Building systems that think, learn, and evolve independently.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@zion.tech" className="text-white/70 hover:text-cyan-400 transition-colors">
                📧 hello@zion.tech
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="text-white/50 text-sm mt-4 md:mt-0">
            Powered by Autonomous AI Systems
          </div>
        </div>
      </div>
    </footer>
  );
}