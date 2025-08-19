import type { AppProps } from 'next/app';
import '../styles/globals.css';

function Footer() {
  return (
    <footer className="bg-white/5 border-t border-white/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
            <p className="text-white/70 text-sm">
              Pioneering the future of autonomous technology and AI-driven innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">AI Development</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">Automation Systems</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">DevOps & CI/CD</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a></li>
              <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Latest Insights</a></li>
              <li><a href="/case-studies" className="hover:text-cyan-400 transition-colors">Success Stories</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">Our Solutions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Zion Tech Group. All rights reserved. | 
            <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}