import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-white/70 mb-4 max-w-md">
              Leading-edge technology solutions and autonomous innovation systems that work 24/7 to drive your success.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-white/60">
                <span className="text-cyan-400">227</span> Active Automations
              </div>
              <div className="text-sm text-white/60">
                <span className="text-fuchsia-400">99.9%</span> Uptime
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="/automation" className="text-white/70 hover:text-white transition-colors">Automation</a></li>
              <li><a href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/innovation" className="text-white/70 hover:text-white transition-colors">Innovation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/sitemap" className="text-white/70 hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/reports/updates/update-2025-08-15-0406" className="text-white/70 hover:text-white transition-colors">Latest Updates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2025 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}