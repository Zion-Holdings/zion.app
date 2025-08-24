import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Sitemap() {
  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Navigate through all pages and sections of Zion Tech Group's AI and tech marketplace platform." 
        keywords="sitemap, navigation, Zion Tech Group, pages"
        url="https://ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Sitemap</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Navigate through all pages and sections of our platform
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Main Pages</h2>
              <ul className="space-y-2 text-zion-slate-light">
                <li><a href="/" className="hover:text-zion-cyan transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-zion-cyan transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-zion-cyan transition-colors">Contact</a></li>
                <li><a href="/faq" className="hover:text-zion-cyan transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Services</h2>
              <ul className="space-y-2 text-zion-slate-light">
                <li><a href="/marketplace" className="hover:text-zion-cyan transition-colors">Marketplace</a></li>
                <li><a href="/talent" className="hover:text-zion-cyan transition-colors">Talent Directory</a></li>
                <li><a href="/services" className="hover:text-zion-cyan transition-colors">Our Services</a></li>
                <li><a href="/request-quote" className="hover:text-zion-cyan transition-colors">Request Quote</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Company</h2>
              <ul className="space-y-2 text-zion-slate-light">
                <li><a href="/careers" className="hover:text-zion-cyan transition-colors">Careers</a></li>
                <li><a href="/partners" className="hover:text-zion-cyan transition-colors">Partners</a></li>
                <li><a href="/blog" className="hover:text-zion-cyan transition-colors">Blog</a></li>
                <li><a href="/community" className="hover:text-zion-cyan transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Legal</h2>
              <ul className="space-y-2 text-zion-slate-light">
                <li><a href="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</a></li>
                <li><a href="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</a></li>
                <li><a href="/accessibility" className="hover:text-zion-cyan transition-colors">Accessibility</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Resources</h2>
              <ul className="space-y-2 text-zion-slate-light">
                <li><a href="/help" className="hover:text-zion-cyan transition-colors">Help Center</a></li>
                <li><a href="/api-docs" className="hover:text-zion-cyan transition-colors">API Documentation</a></li>
                <li><a href="/developer-portal" className="hover:text-zion-cyan transition-colors">Developer Portal</a></li>
                <li><a href="/marketplace-guide" className="hover:text-zion-cyan transition-colors">Marketplace Guide</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Support</h2>
              <ul className="space-y-2 text-zion-slate-light">
                <li><a href="/contact" className="hover:text-zion-cyan transition-colors">Contact Support</a></li>
                <li><a href="/live-chat" className="hover:text-zion-cyan transition-colors">Live Chat</a></li>
                <li><a href="/status" className="hover:text-zion-cyan transition-colors">System Status</a></li>
                <li><a href="/feedback" className="hover:text-zion-cyan transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help Finding Something?</h2>
            <p className="text-zion-slate-light mb-6">
              Can't find what you're looking for? Our search and navigation tools can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/faq" 
                className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
