export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Zion OS</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Launch sovereign AI-powered digital economies with one click. Discover our comprehensive suite of micro SAAS services, IT solutions, and AI-powered tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/multiverse/launch" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Launch Your Instance
          </a>
          <a 
            href="/services" 
            className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="p-6 rounded border border-white/10 hover:border-white/20 transition-colors" href="/multiverse/launch">
          <div className="font-semibold text-lg mb-2">Launch Wizard</div>
          <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
        </a>
        <a className="p-6 rounded border border-white/10 hover:border-white/20 transition-colors" href="/admin/instances">
          <div className="font-semibold text-lg mb-2">Admin Instances</div>
          <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
        </a>
      </div>

      {/* Services Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Comprehensive Service Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Core Platform */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Core Platform</h3>
            <p className="text-sm opacity-80 mb-4">Unified deployment protocol for sovereign AI-powered digital economies</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Zion OS Platform</li>
              <li>• Multi-vertical Support</li>
              <li>• Governance Systems</li>
            </ul>
            <a href="/services" className="text-blue-500 hover:text-blue-400 text-sm font-medium">Learn More →</a>
          </div>

          {/* AI Services */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">AI Services</h3>
            <p className="text-sm opacity-80 mb-4">Advanced AI-powered solutions for business automation and intelligence</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• ZionGPT Core</li>
              <li>• AI Content Hub</li>
              <li>• Customer Support AI</li>
            </ul>
            <a href="/services" className="text-blue-500 hover:text-blue-400 text-sm font-medium">Learn More →</a>
          </div>

          {/* IT Services */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">IT Services</h3>
            <p className="text-sm opacity-80 mb-4">Professional IT consulting and infrastructure optimization</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Cloud Migration</li>
              <li>• Cybersecurity Audit</li>
              <li>• DevOps Automation</li>
            </ul>
            <a href="/services" className="text-blue-500 hover:text-blue-400 text-sm font-medium">Learn More →</a>
          </div>

          {/* Business Automation */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Business Automation</h3>
            <p className="text-sm opacity-80 mb-4">Streamline operations with intelligent automation solutions</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Invoice Automation</li>
              <li>• HR Management</li>
              <li>• Project Management</li>
            </ul>
            <a href="/services" className="text-blue-500 hover:text-blue-400 text-sm font-medium">Learn More →</a>
          </div>

          {/* Blockchain & Web3 */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Blockchain & Web3</h3>
            <p className="text-sm opacity-80 mb-4">Next-generation blockchain solutions and DeFi protocols</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Smart Contract Audit</li>
              <li>• NFT Marketplace</li>
              <li>• DeFi Protocol Dev</li>
            </ul>
            <a href="/services" className="text-blue-500 hover:text-blue-400 text-sm font-medium">Learn More →</a>
          </div>

          {/* Industry Solutions */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Industry Solutions</h3>
            <p className="text-sm opacity-80 mb-4">Specialized platforms for healthcare, legal, and education</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Healthcare Compliance</li>
              <li>• Legal Document AI</li>
              <li>• Education LMS</li>
            </ul>
            <a href="/services" className="text-blue-500 hover:text-blue-400 text-sm font-medium">Learn More →</a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
        <h2 className="text-2xl font-bold">Ready to Transform Your Business?</h2>
        <p className="opacity-90">Get started with our services today and experience the power of AI-driven innovation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Services
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            See Pricing
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm opacity-80">+1 302 464 0950</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm opacity-80">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}